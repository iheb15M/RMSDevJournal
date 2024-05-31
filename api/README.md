# API Documentation

This API provides endpoints for user authentication, profile management, and article handling in a JSON server. It includes functionalities for user registration, login, retrieving and updating user profiles, following users, and posting and deleting articles.

## Base URL

```
http://localhost:3000
```

## Endpoints

### User Registration

#### Register New User

- **Endpoint:** `POST /users`
- **Description:** Registers a new user.
- **Request Body:**

  ```json
  {
    "user": {
      "email": "user@example.com",
      "password": "password",
      "username": "username"
    }
  }
  ```

- **Response:**

  ```json
  {
    "user": {
      "token": "access_token",
      "email": "user@example.com",
      "username": "username",
      "image": "image_url",
      "bio": "I am a new hire at the company INFOR"
    }
  }
  ```

### User Login

#### Login User

- **Endpoint:** `POST /users/login`
- **Description:** Authenticates a user and returns a JWT token.
- **Request Body:**

  ```json
  {
    "user": {
      "email": "user@example.com",
      "password": "password"
    }
  }
  ```

- **Response:**

  ```json
  {
    "user": {
      "token": "access_token",
      "email": "user@example.com",
      "username": "username"
    }
  }
  ```

### User Profile

#### Get Current User

- **Endpoint:** `GET /user`
- **Description:** Retrieves the current user's profile based on the JWT token.
- **Headers:**

  ```
  Authorization: Bearer access_token
  ```

- **Response:**

  ```json
  {
    "user": {
      "email": "user@example.com",
      "username": "username",
      "token": "access_token",
      "id": 1,
      "image": "image_url"
    }
  }
  ```

#### Update User

- **Endpoint:** `PUT /user`
- **Description:** Updates the current user's profile.
- **Headers:**

  ```
  Authorization: Bearer access_token
  ```

- **Request Body:**

  ```json
  {
    "user": {
      "username": "new_username",
      "image": "new_image_url",
      "bio": "new_bio"
    }
  }
  ```

- **Response:**

  ```json
  {
    "user": {
      "email": "user@example.com",
      "username": "new_username",
      "bio": "new_bio",
      "image": "new_image_url",
      "token": "access_token",
      "id": 1
    }
  }
  ```

#### Get User Profile

- **Endpoint:** `GET /profiles/:username`
- **Description:** Retrieves the profile of a user by username.
- **Response:**

  ```json
  {
    "profile": {
      "username": "username",
      "bio": "bio",
      "image": "image_url",
      "following": false
    }
  }
  ```

#### Follow User

- **Endpoint:** `POST /profiles/:username/follow`
- **Description:** Follow a user by username.
- **Headers:**

  ```
  Authorization: Bearer access_token
  ```

- **Response:**

  ```json
  {
    "profile": {
      "username": "username",
      "bio": "bio",
      "image": "image_url",
      "following": true
    }
  }
  ```

#### Unfollow User

- **Endpoint:** `DELETE /profiles/:username/follow`
- **Description:** Unfollow a user by username.
- **Headers:**

  ```
  Authorization: Bearer access_token
  ```

- **Response:**

  ```json
  {
    "profile": {
      "username": "username",
      "bio": "bio",
      "image": "image_url",
      "following": false
    }
  }
  ```

### Articles

#### Create Article

- **Endpoint:** `POST /articles`
- **Description:** Creates a new article.
- **Headers:**

  ```
  Authorization: Bearer access_token
  ```

- **Request Body:**

  ```json
  {
    "article": {
      "title": "Article Title",
      "description": "Article Description",
      "body": "Article Body",
      "tagList": ["tag1", "tag2"]
    }
  }
  ```

- **Response:**

  ```json
  {
    "article": {
      "slug": "article-title",
      "title": "Article Title",
      "description": "Article Description",
      "body": "Article Body",
      "tagList": ["tag1", "tag2"],
      "createdAt": "2024-05-21T10:00:00.000Z",
      "updatedAt": "2024-05-21T10:00:00.000Z",
      "favorited": false,
      "favoritesCount": 0,
      "author": {
        "username": "username",
        "bio": "bio",
        "image": "image_url",
        "following": false
      }
    }
  }
  ```

#### Get Article

- **Endpoint:** `GET /articles/:slug`
- **Description:** Retrieves a single article by slug.
- **Response:**

  ```json
  {
    "article": {
      "slug": "article-title",
      "title": "Article Title",
      "description": "Article Description",
      "body": "Article Body",
      "tagList": ["tag1", "tag2"],
      "createdAt": "2024-05-21T10:00:00.000Z",
      "updatedAt": "2024-05-21T10:00:00.000Z",
      "favorited": false,
      "favoritesCount": 0,
      "author": {
        "username": "username",
        "bio": "bio",
        "image": "image_url",
        "following": false
      }
    }
  }
  ```

#### Update Article

- **Endpoint:** `PUT /articles/:slug`
- **Description:** Updates an existing article.
- **Headers:**

  ```
  Authorization: Bearer access_token
  ```

- **Request Body:**

  ```json
  {
    "article": {
      "title": "Updated Title",
      "description": "Updated Description",
      "body": "Updated Body"
    }
  }
  ```

- **Response:**

  ```json
  {
    "article": {
      "slug": "updated-title",
      "title": "Updated Title",
      "description": "Updated Description",
      "body": "Updated Body",
      "tagList": ["tag1", "tag2"],
      "createdAt": "2024-05-21T10:00:00.000Z",
      "updatedAt": "2024-05-21T10:00:00.000Z",
      "favorited": false,
      "favoritesCount": 0,
      "author": {
        "username": "username",
        "bio": "bio",
        "image": "image_url",
        "following": false
      }
    }
  }
  ```

#### Delete Article

- **Endpoint:** `DELETE /articles/:slug`
- **Description:** Deletes an existing article.
- **Headers:**

  ```
  Authorization: Bearer access_token
  ```

- **Response:**

  ```json
  {
    "message": "Article deleted successfully."
  }
  ```

#### List Articles

- **Endpoint:** `GET /articles`
- **Description:** Lists all articles.
- **Example** 

  - 'GET /articles'
  - 'GET /articles?limit=1'
  - 'GET /articles?limit=1&offset=1'
  - 'GET /articles?limit=1&offset=1&tag=tag1'
  - 'GET /articles?limit=1&offset=1&author=username'
  - 'GET /articles?limit=1&offset=1&favorited=username'
- **Response:**

  ```json
  {
    "articles": [
      {
        "slug": "article-title",
        "title": "Article Title",
        "description": "Article Description",
        "body": "Article Body",
        "tagList": ["tag1", "tag2"],
        "createdAt": "2024-05-21T10:00:00.000Z",
        "updatedAt": "2024-05-21T10:00:00.000Z",
        "favorited": false,
        "favoritesCount": 0,
        "author": {
          "username": "username",
          "bio": "bio",
          "image": "image_url",
          "following": false
        }
      }
    ],
    "articlesCount": 1
  }
  ```

#### List Articles by Author

- **Endpoint:** `GET /articles?author=:username`
- **Description:** Lists articles by a specific author.
- **Response:**

  ```json
  {
    "articles": [
      {
        "slug": "article-title",
        "title": "Article Title",
        "description": "Article Description",
        "body": "Article Body",
        "tagList": ["tag1", "tag2"],
        "createdAt": "2024-05-21T10:00:00.000Z",
        "updatedAt": "2024-05-21T10:00:00.000Z",
        "favorited": false,
        "favoritesCount": 0,
        "author": {
          "username": "username",
          "bio": "bio",
          "image": "image_url",
          "following": false
        }
      }
    ],
    "articlesCount": 

1
  }
  ```

#### List Articles by Tag

- **Endpoint:** `GET /articles?tag=:tag`
- **Description:** Lists articles by tag.
- **Response:**

  ```json
  {
    "articles": [
      {
        "slug": "article-title",
        "title": "Article Title",
        "description": "Article Description",
        "body": "Article Body",
        "tagList": ["tag1", "tag2"],
        "createdAt": "2024-05-21T10:00:00.000Z",
        "updatedAt": "2024-05-21T10:00:00.000Z",
        "favorited": false,
        "favoritesCount": 0,
        "author": {
          "username": "username",
          "bio": "bio",
          "image": "image_url",
          "following": false
        }
      }
    ],
    "articlesCount": 1
  }
  ```

#### List Articles Favorited by User

- **Endpoint:** `GET /articles?favorited=:username`
- **Description:** Lists articles favorited by a specific user.
- **Response:**

  ```json
  {
    "articles": [
      {
        "slug": "article-title",
        "title": "Article Title",
        "description": "Article Description",
        "body": "Article Body",
        "tagList": ["tag1", "tag2"],
        "createdAt": "2024-05-21T10:00:00.000Z",
        "updatedAt": "2024-05-21T10:00:00.000Z",
        "favorited": true,
        "favoritesCount": 1,
        "author": {
          "username": "username",
          "bio": "bio",
          "image": "image_url",
          "following": false
        }
      }
    ],
    "articlesCount": 1
  }
  ```

### search-articles by title

- **Endpoint:** `GET /articles/search?title=:title`
- **Description:** Lists articles by title.
- **Example** 

  - 'GET /articles/search?title=Incidunt'
  - 'GET /articles/search?title=Incidunt&limit=1'
- **Response:**

  ```json
  {
    "articles": [
      {
        "slug": "article-title",
        "title": "Article Title",
        "description": "Article Description",
        "body": "Article Body",
        "tagList": ["tag1", "tag2"],
        "createdAt": "2024-05-21T10:00:00.000Z",
        "updatedAt": "2024-05-21T10:00:00.000Z",
        "favorited": false,
        "favoritesCount": 0,
        "author": {
          "username": "username",
          "bio": "bio",
          "image": "image_url",
          "following": false
        }
      }
    ],
    "articlesCount": 1
  }
  ```

#### Favorite Article

- **Endpoint:** `POST /articles/:slug/favorite`
- **Description:** Favorites an article.
- **Headers:**

  ```
  Authorization: Bearer access_token
  ```

- **Response:**

  ```json
  {
    "article": {
      "slug": "article-title",
      "title": "Article Title",
      "description": "Article Description",
      "body": "Article Body",
      "tagList": ["tag1", "tag2"],
      "createdAt": "2024-05-21T10:00:00.000Z",
      "updatedAt": "2024-05-21T10:00:00.000Z",
      "favorited": true,
      "favoritesCount": 1,
      "author": {
        "username": "username",
        "bio": "bio",
        "image": "image_url",
        "following": false
      }
    }
  }
  ```

#### Unfavorite Article

- **Endpoint:** `DELETE /articles/:slug/favorite`
- **Description:** Unfavorites an article.
- **Headers:**

  ```
  Authorization: Bearer access_token
  ```

- **Response:**

  ```json
  {
    "article": {
      "slug": "article-title",
      "title": "Article Title",
      "description": "Article Description",
      "body": "Article Body",
      "tagList": ["tag1", "tag2"],
      "createdAt": "2024-05-21T10:00:00.000Z",
      "updatedAt": "2024-05-21T10:00:00.000Z",
      "favorited": false,
      "favoritesCount": 0,
      "author": {
        "username": "username",
        "bio": "bio",
        "image": "image_url",
        "following": false
      }
    }
  }
  ```

#### Add Comment to Article

- **Endpoint:** `POST /articles/:slug/comments`
- **Description:** Adds a comment to an article.
- **Headers:**

  ```
  Authorization: Bearer access_token
  ```

- **Request Body:**

  ```json
  {
    "comment": {
      "body": "This is a comment"
    }
  }
  ```

- **Response:**

  ```json
  {
    "comment": {
      "id": 1,
      "createdAt": "2024-05-21T10:00:00.000Z",
      "updatedAt": "2024-05-21T10:00:00.000Z",
      "body": "This is a comment",
      "author": {
        "username": "username",
        "bio": "bio",
        "image": "image_url",
        "following": false
      }
    }
  }
  ```

#### Get Comments from Article

- **Endpoint:** `GET /articles/:slug/comments`
- **Description:** Retrieves comments from an article.
- **Response:**

  ```json
  {
    "comments": [
      {
        "id": 1,
        "createdAt": "2024-05-21T10:00:00.000Z",
        "updatedAt": "2024-05-21T10:00:00.000Z",
        "body": "This is a comment",
        "author": {
          "username": "username",
          "bio": "bio",
          "image": "image_url",
          "following": false
        }
      }
    ]
  }
  ```

#### Delete Comment from Article

- **Endpoint:** `DELETE /articles/:slug/comments/:id`
- **Description:** Deletes a comment from an article.
- **Headers:**

  ```
  Authorization: Bearer access_token
  ```

- **Response:**

  ```json
  {
    "message": "Comment deleted successfully."
  }
  ```

#### Get Tags

- **Endpoint:** `GET /tags`
- **Description:** Retrieves a list of tags.
- **Response:**

  ```json
  {
    "tags": ["tag1", "tag2", "tag3"]
  }
  

#### Add Tag

- **Endpoint:** `POST /tags`
- **Description:** Adds a new tag.
- **Request Body:**

  ```json
  {
    "tag":  "tag4"
  }
  ```

### Save notification (new Article) into the database

- **Endpoint:** `POST /notifications`
- **Description:** Adds a new notification.
- **Request Body:**
 
  ```json
  {
    "article": {
        "slug": "article-title",
        "title": "Article Title",
        "description": "Article Description",
        "body": "Article Body",
        "tagList": ["tag1", "tag2"],
        "createdAt": "2024-05-21T10:00:00.000Z",
        "updatedAt": "2024-05-21T10:00:00.000Z",
        "favorited": false,
        "favoritesCount": 0,
        "author": {
            "username": "username",
            "bio": "bio",
            "image": "image_url",
            "following": false
        }
    }
  }
  ```

- **Response:**

  ```json
  {
    "notification": {
         "article": {
            "slug": "article-title",
            "title": "Article Title",
            "description": "Article Description",
            "body": "Article Body",
            "tagList": ["tag1", "tag2"],
            "createdAt": "2024-05-21T10:00:00.000Z",
            "updatedAt": "2024-05-21T10:00:00.000Z",
            "favorited": false,
            "favoritesCount": 0,
            "author": {
                "username": "username",
                "bio": "bio",
                "image": "image_url",
                "following": false
            }
        }
    }
  }
  ```

### Save notification (new tag) into the database

- **Endpoint:** `POST /notifications`
- **Description:** Adds a new notification.
- **Request Body:**
 
  ```json
  {
    "tag": "tag1"
  } 
  ```

- **Response:**

  ```json
  {
    "notification": {
        "tag": "tag1"
    }
  }
  ```

  ### Save notification (like/unlike) into the database

- **Endpoint:** `POST /notifications`
- **Description:** Adds a new notification.
- **Request Body:**
 
  ```json
  {
    "likeUnlike": [
      {
        "slug": "article-title",
        "title": "Article Title",
        "description": "Article Description",
        "body": "Article Body",
        "tagList": ["tag1", "tag2"],
        "createdAt": "2024-05-21T10:00:00.000Z",
        "updatedAt": "2024-05-21T10:00:00.000Z",
        "favorited": false
      }
    ]
  } 
  ```

- **Response:**

  ```json
  {
    "notification": {
        "likeUnlike": [
          {
            "slug": "article-title",
            "title": "Article Title",
            "description": "Article Description",
            "body": "Article Body",
            "tagList": ["tag1", "tag2"],
            "createdAt": "2024-05-21T10:00:00.000Z",
            "updatedAt": "2024-05-21T10:00:00.000Z",
            "favorited": false
          }
        ]
    }
  }
  ```



### Get notifications from the database

- **Endpoint:** `GET /notifications`
- **Description:** Retrieves notifications from the database.
- **Response:**

  ```json
  {
    "notifications": [
        {
            "article": {
                "slug": "article-title",
                "title": "Article Title",
                "description": "Article Description",
                "body": "Article Body",
                "tagList": ["tag1", "tag2"],
                "createdAt": "2024-05-21T10:00:00.000Z",
                "updatedAt": "2024-05-21T10:00:00.000Z",
                "favorited": false,
                "favoritesCount": 0,
                "author": {
                    "username": "username",
                    "bio": "bio",
                    "image": "image_url",
                    "following": false
                }
            },
            "tags": ["tag1", "tag2", "tag3"],
            "likeUnlike": [
              {
                "slug": "article-title",
                "title": "Article Title",
                "description": "Article Description",
                "body": "Article Body",
                "tagList": ["tag1", "tag2"],
                "createdAt": "2024-05-21T10:00:00.000Z",
                "updatedAt": "2024-05-21T10:00:00.000Z",
                "favorited": false
              }
            ]
        }
    ]
  }
  ```