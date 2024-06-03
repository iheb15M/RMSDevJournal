import { Injectable } from '@angular/core';
import { ComponentStore, OnStateInit, tapResponse } from '@ngrx/component-store';
import { pipe } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { HomeService } from './home.service';
import { SocketService } from '@infordevjournal/articles/data-access/src/lib/services/socket.service';

export interface HomeState {
  tags: string[];
}

@Injectable()
export class HomeStoreService extends ComponentStore<HomeState> implements OnStateInit {
  constructor(
    private readonly homeService: HomeService,
    private readonly socketService: SocketService
  ) {
    super({ tags: [] });
  }

  ngrxOnStateInit() {
    this.getTags();
    this.listenForNewTags();
  }

  // SELECTORS
  tags$ = this.select((store) => store.tags);

  // EFFECTS
  readonly getTags = this.effect<void>(
    pipe(
      switchMap(() =>
        this.homeService.getTags().pipe(
          tapResponse(
            (response) => {
              this.patchState({ tags: response.tags });
            },
            (error) => {
              console.error('error getting tags: ', error);
            },
          ),
        ),
      ),
    ),
  );

  readonly listenForNewTags = this.effect<void>(
    pipe(
      tap(() => {
        this.socketService.onNewTag().subscribe((newTag) => {
          this.homeService.createTag(newTag).subscribe({
            next: (res) => {
              this.setState((state) => ({
                tags: [...state.tags, res.tag]
              }));
            }
          })
        });
      })
    )
  );
}
