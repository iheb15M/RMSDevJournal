import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '@infordevjournal/core/http-client';
import { Article, ArticleRequest, ArticleResponse, MultipleCommentsResponse, SingleCommentResponse } from '@infordevjournal/core/api-types';
import { HttpParams } from '@angular/common/http';
import { ArticlesListConfig } from '../models/articles-list.model';

@Injectable({ providedIn: 'root' })
export class ArticlesService {
  private readonly apiService = inject(ApiService);

  getArticle(slug: string): Observable<ArticleResponse> {
    return this.apiService.get<ArticleResponse>('/articles/' + slug);
  }

  getComments(slug: string): Observable<MultipleCommentsResponse> {
    return this.apiService.get<MultipleCommentsResponse>(`/articles/${slug}/comments`);
  }

  deleteArticle(slug: string): Observable<void> {
    return this.apiService.delete<void>('/articles/' + slug);
  }

  deleteComment(commentId: number, slug: string): Observable<void> {
    return this.apiService.delete<void>(`/articles/${slug}/comments/${commentId}`);
  }

  addComment(slug: string, payload = ''): Observable<SingleCommentResponse> {
    return this.apiService.post<SingleCommentResponse, { comment: { body: string } }>(`/articles/${slug}/comments`, {
      comment: { body: payload },
    });
  }

  query(config: ArticlesListConfig): Observable<{ articles: Article[]; articlesCount: number }> {
    return this.apiService.get('/articles', this.toHttpParams(config.filters));
  }

  publishArticle(article: Article): Observable<ArticleResponse> {
    if (article.slug) {
      return this.apiService.put<ArticleResponse, ArticleResponse>('/articles/' + article.slug, {
        article: article,
      });
    }
    return this.apiService.post<ArticleResponse, ArticleResponse>('/articles/', { article: article });
  }

  createArticle(article: ArticleRequest): Observable<ArticleResponse>{
    return this.apiService.post<ArticleResponse, ArticleRequest>('/articles/', article);
  }

  // TODO: remove any
  private toHttpParams(params: any) {
    return Object.getOwnPropertyNames(params).reduce((p, key) => p.set(key, params[key]), new HttpParams());
  }
}
