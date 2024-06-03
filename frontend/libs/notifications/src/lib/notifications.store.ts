import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

import { inject, Signal, WritableSignal } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';

import { withCallState } from '@infordevjournal/core/data-access';
import { NotificationService } from './services/notification.service';
import { notificationsInitialState, NotificationsState, Notification, LikeUnlike } from './models/notification.model';
import { concatMap, pipe } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { Article } from '@infordevjournal/core/api-types/src';

export const NotificationStore = signalStore(
  { providedIn: 'root' },
  withState<NotificationsState>(notificationsInitialState),
  withMethods(
    (
      store,
      notificationService = inject(NotificationService),
    ) => ({
      loadNotifications: rxMethod<void>(
        pipe(
          concatMap(() => notificationService.getNotification().pipe(
            tapResponse({
              next: (notifications) => {
                patchState(store, notifications)
              },
              error: (err) => {
                patchState(store, { ...notificationsInitialState })
                console.error(err);
              }
            })
          ))
        )
      ),
      pushTagNotification: rxMethod<string>(
        pipe(
          concatMap((tag: string) => notificationService
          .pushNotification<{ notification: {tag: string}},{tag: string}>({tag})
          .pipe(
            tapResponse({
              next: (response) => {
                const notifications: Notification = store.notifications();
                notifications.tags.push(response.notification.tag);
                patchState(store, {notifications});
              },
              error: (err) => {
                console.error(err);
              }
            })
          ))
        )
      ),
      pushArticleNotification: rxMethod<Article>(
        pipe(
          concatMap((article: Article) => notificationService
          .pushNotification<{ notification: {article: Article}},{article: Article}>({article})
          .pipe(
            tapResponse({
              next: (response) => {
                const notifications: Notification = store.notifications();
                notifications.articles.push(response.notification.article);
                patchState(store, {notifications});
              },
              error: (err) => {
                console.error(err);
              }
            })
          ))
        )
      ),
      pushLikeUnlikeNotification: rxMethod<LikeUnlike>(
        pipe(
          concatMap((likeUnlike: LikeUnlike) => notificationService
          .pushNotification<{ notification: {likeUnlike: LikeUnlike}},{likeUnlike: LikeUnlike}>({likeUnlike})
          .pipe(
            tapResponse({
              next: (response) => {
                const notifications: Notification = store.notifications();
                notifications.likeUnlike.push(response.notification.likeUnlike);
                patchState(store, {notifications});
              },
              error: (err) => {
                console.error(err);
              }
            })
          ))
        )
      ),
    })),
  withCallState({ collection: 'getNotifications' }),
);