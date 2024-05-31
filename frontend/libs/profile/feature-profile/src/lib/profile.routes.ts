import { Routes } from '@angular/router';
import { ArticleListComponent } from '@infordevjournal/articles/feature-articles-list/src';
import { authGuard } from '@infordevjournal/auth/data-access';
import { profileArticlesResolver, profileFavoritesResolver, profileResolver } from '@infordevjournal/profile/data-access';
import { ProfileComponent } from './profile.component';

export const PROFILE_ROUTES: Routes = [
  {
    path: ':username',
    component: ProfileComponent,
    resolve: { profileResolver },
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: ArticleListComponent,
        resolve: { profileArticlesResolver },
      },
      {
        path: 'favorites',
        component: ArticleListComponent,
        resolve: { profileFavoritesResolver },
      },
    ],
  },
];
