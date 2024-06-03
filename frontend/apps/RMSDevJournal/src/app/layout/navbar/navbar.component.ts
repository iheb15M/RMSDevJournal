import { Component, ChangeDetectionStrategy, input, inject, OnInit, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthStore } from '@infordevjournal/auth/data-access/src';
import { User } from '@infordevjournal/core/api-types';
import { NotificationStore } from '@infordevjournal/notifications/src/lib/notifications.store';
@Component({
  selector: 'cdt-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  user = input.required<User>();
  isLoggedIn = input.required<boolean>();

  private readonly authStore = inject(AuthStore);
  private readonly notificationStore = inject(NotificationStore);

  $articleNotif = this.notificationStore.notifications.articles;
  $tagsNotif = this.notificationStore.notifications.tags;
  $likeUnlikeNotif = this.notificationStore.notifications.likeUnlike;
  
  isNotificationsOpen = false;

  readonly loadNotificationsOnLogin = effect(() => {
    if (this.authStore.loggedIn()) {
      this.notificationStore.loadNotifications();
    }
  });

  toggleNotifications() {

    const element = document.getElementById('notifList');
    if (element) {
      element.style.display = this.isNotificationsOpen ? 'none' : 'block';
      this.isNotificationsOpen = !this.isNotificationsOpen;
    }
  }
}
