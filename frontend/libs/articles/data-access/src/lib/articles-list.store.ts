import { signalStore, withState, withMethods, patchState, withComputed } from '@ngrx/signals';
import {
  Articles,
  ArticlesListConfig,
  ArticlesListState,
  articlesListInitialState,
} from './models/articles-list.model';
import { computed, inject } from '@angular/core';
import { ArticlesService } from './services/articles.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { concatMap, pipe, tap } from 'rxjs';
import { setLoaded, setLoading, withCallState } from '@infordevjournal/core/data-access';
import { tapResponse } from '@ngrx/operators';
import { ActionsService } from './services/actions.service';
import { Article } from '@infordevjournal/core/api-types';
import { SocketService } from './services/socket.service';
import { NotificationStore } from '@infordevjournal/notifications/src/lib/notifications.store';

const notificationStore = inject(NotificationStore);

export const ArticlesListStore = signalStore(
  { providedIn: 'root' },
  withState<ArticlesListState>(articlesListInitialState),
  withComputed(({ listConfig, articles }) => ({
    totalPages: computed(() =>
      Array.from(
        new Array(Math.ceil(articles()?.articlesCount / (listConfig()?.filters?.limit ?? 1))),
        (_, index) => index + 1,
      ),
    ),
  })),
  withMethods(
    (
      store,
      articlesService = inject(ArticlesService),
      actionsService = inject(ActionsService),
      socketService = inject(SocketService),
    ) => ({
      loadArticles: rxMethod<ArticlesListConfig>(
        pipe(
          tap(() => setLoading('getArticles')),
          concatMap((listConfig) =>
            articlesService.query(listConfig).pipe(
              tapResponse({
                next: ({ articles, articlesCount }) => {
                  patchState(store, {
                    articles: { articlesCount: articlesCount, entities: articles },
                    ...setLoaded('getArticles'),
                  });
                },
                error: () => {
                  patchState(store, { ...articlesListInitialState, ...setLoaded('getArticles') });
                },
              }),
            ),
          ),
        ),
      ),
      listenForNewArticles: rxMethod<void>(
        pipe(
          concatMap(() => socketService.onNewArticle().pipe(
            tapResponse({
              next: (newArticles: Article[]) => {
                newArticles.forEach((article: Article) => {
                  articlesService.createArticle({
                    article: {
                      title: article.title,
                      description: article.description,
                      body: article.body,
                      tagList: article.tagList,
                    }
                  }).subscribe(
                    {
                      next: (value) => {
                        patchState(store, {
                          articles: {
                            entities: [...store.articles().entities, value.article],
                            articlesCount: store.articles().articlesCount++,
                          },
                          ...setLoaded('getArticles'),
                        });
                        notificationStore.pushArticleNotification(value.article);
                      },
                      error: (err) => {
                        console.error(err);
                      }
                    }
                  )
                });
              },
              error: (err) => {
                console.error(err)
              }
            })
          ))
        )
      ),
      listenForLikeUnlike: rxMethod<void>(
        pipe(
          concatMap(() => socketService.onLikeUnlike().pipe(
            tapResponse({
              next: (likeArticle: Article) => {
                const articles = store.articles();
                const articleIndex = articles.entities.findIndex((a) => a.slug === likeArticle.slug);
                if (articleIndex !== -1) {
                  articles.entities[articleIndex] = likeArticle;
                  patchState(store, { articles });
                } else {
                  console.error('Liked/Unliked Article not found');
                }
                notificationStore.pushLikeUnlikeNotification(likeArticle)
              },
              error: (err) => {
                console.error(err);
              }
            })
          ))
        )
      ),

      favouriteArticle: rxMethod<string>(
        pipe(
          concatMap((slug) =>
            actionsService.favorite(slug).pipe(
              tapResponse({
                next: ({ article }) => {
                  patchState(store, {
                    articles: replaceArticle(store.articles(), article),
                  });
                },
                error: () => {
                  patchState(store, articlesListInitialState);
                },
              }),
            ),
          ),
        ),
      ),
      unFavouriteArticle: rxMethod<string>(
        pipe(
          concatMap((slug) =>
            actionsService.unfavorite(slug).pipe(
              tapResponse({
                next: ({ article }) => {
                  patchState(store, {
                    articles: replaceArticle(store.articles(), article),
                  });
                },
                error: () => {
                  patchState(store, articlesListInitialState);
                },
              }),
            ),
          ),
        ),
      ),
      setListConfig: (listConfig: ArticlesListConfig) => {
        patchState(store, { listConfig });
      },
      setListPage: (page: number) => {
        const filters = {
          ...store.listConfig.filters(),
          offset: (store.listConfig().filters.limit ?? 10) * (page - 1),
        };
        const listConfig: ArticlesListConfig = {
          ...store.listConfig(),
          currentPage: page,
          filters,
        };
        patchState(store, { listConfig });
      },
    })),
  withCallState({ collection: 'getArticles' }),
);

function replaceArticle(articles: Articles, payload: Article): Articles {
  const articleIndex = articles.entities.findIndex((a) => a.slug === payload.slug);
  const entities = [
    ...articles.entities.slice(0, articleIndex),
    Object.assign({}, articles.entities[articleIndex], payload),
    ...articles.entities.slice(articleIndex + 1),
  ];
  return { ...articles, entities };
}
