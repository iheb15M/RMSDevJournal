import { Profile } from '@infordevjournal/core/api-types';

export interface SingleCommentResponse {
  comment: Comment;
}

export interface MultipleCommentsResponse {
  comments: Comment[];
}

export interface Comment {
  id: number;
  body: string;
  createdAt: string;
  author: Profile;
}
