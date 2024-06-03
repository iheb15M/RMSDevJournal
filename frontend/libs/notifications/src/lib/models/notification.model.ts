import { Article } from '@infordevjournal/core/api-types';

export interface NotificationsState {
    notifications: Notification;
}

export const notificationsInitialState: NotificationsState = {
    notifications: {
        articles: [],
        tags: [],
        likeUnlike: [],
    }
}

export interface LikeUnlike {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
}

export interface Notification {
    articles: Article[];
    tags: string[];
    likeUnlike: LikeUnlike[];
}

export interface NotificationsResponse {
    notifications: Notification;
}
