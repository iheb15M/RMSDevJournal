# Angular 17 Frontend Project

This project is a frontend application developed using Angular 17. It provides a user interface for interacting with the backend API.

## Features

- **User Authentication:** Allows users to register, login, and logout.
- **Profile Management:** Users can view and update their profiles.
- **Article Handling:** Provides functionalities for creating, updating, deleting, and viewing articles.
- **Tagging:** Articles can be tagged with keywords for easy categorization.
- **Comments:** Users can comment on articles.

## Technologies Used

- Angular 17
- TypeScript
- HTML
- CSS (SASS/SCSS)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:4200` to view the application.

## Folder Structure

The project follows a typical Angular folder structure:

```
frontend/
.
├── apps
│   ├── RMSDevJournal
│   │   ├── browserslist
│   │   ├── jest.config.ts
│   │   ├── project.json
│   │   ├── src
│   │   │   ├── app
│   │   │   │   ├── app.component.css
│   │   │   │   ├── app.component.html
│   │   │   │   ├── app.component.spec.ts
│   │   │   │   ├── app.component.ts
│   │   │   │   ├── app.config.ts
│   │   │   │   └── layout
│   │   │   │       ├── footer
│   │   │   │       │   ├── footer.component.html
│   │   │   │       │   ├── footer.component.spec.ts
│   │   │   │       │   └── footer.component.ts
│   │   │   │       └── navbar
│   │   │   │           ├── navbar.component.html
│   │   │   │           ├── navbar.component.spec.ts
│   │   │   │           └── navbar.component.ts
│   │   │   ├── assets
│   │   │   │   └── nx-logo.png
│   │   │   ├── environments
│   │   │   │   ├── environment.prod.ts
│   │   │   │   └── environment.ts
│   │   │   ├── favicon.ico
│   │   │   ├── index.html
│   │   │   ├── main.ts
│   │   │   ├── netlify.toml
│   │   │   ├── styles.scss
│   │   │   └── test-setup.ts
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.editor.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.spec.json
│   └── RMSDevJournal-e2e
│       ├── cypress.config.ts
│       ├── global.d.ts
│       ├── project.json
│       ├── src
│       │   ├── e2e
│       │   │   ├── article-list
│       │   │   │   ├── article-list.feature
│       │   │   │   └── article-list.ts
│       │   │   ├── login
│       │   │   │   ├── login.feature
│       │   │   │   └── login.ts
│       │   │   ├── logout
│       │   │   │   ├── logout.feature
│       │   │   │   └── logout.ts
│       │   │   ├── new-article
│       │   │   │   ├── new-article.feature
│       │   │   │   └── new-article.ts
│       │   │   ├── register
│       │   │   │   ├── register.feature
│       │   │   │   └── register.ts
│       │   │   └── settings
│       │   │       ├── settings.feature
│       │   │       └── settings.ts
│       │   ├── fixtures
│       │   │   └── example.json
│       │   ├── plugins
│       │   │   └── index.js
│       │   └── support
│       │       ├── commands.ts
│       │       ├── e2e.ts
│       │       └── generate-random-string.ts
│       ├── tsconfig.e2e.json
│       └── tsconfig.json
├── jest.config.ts
├── jest.preset.js
├── libs
│   ├── articles
│   │   ├── data-access
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── src
│   │   │   │   ├── index.ts
│   │   │   │   ├── lib
│   │   │   │   │   ├── articles-list.store.spec.ts
│   │   │   │   │   ├── articles-list.store.ts
│   │   │   │   │   ├── article.store.spec.ts
│   │   │   │   │   ├── article.store.ts
│   │   │   │   │   ├── models
│   │   │   │   │   │   ├── article.model.ts
│   │   │   │   │   │   ├── articles-list.model.ts
│   │   │   │   │   │   └── comment.model.ts
│   │   │   │   │   └── services
│   │   │   │   │       ├── actions.service.spec.ts
│   │   │   │   │       ├── actions.service.ts
│   │   │   │   │       ├── articles.service.spec.ts
│   │   │   │   │       └── articles.service.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── feature-article
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── src
│   │   │   │   ├── index.ts
│   │   │   │   ├── lib
│   │   │   │   │   ├── add-comment
│   │   │   │   │   │   ├── add-comment.component.html
│   │   │   │   │   │   └── add-comment.component.ts
│   │   │   │   │   ├── article-comment
│   │   │   │   │   │   ├── article-comment.component.html
│   │   │   │   │   │   └── article-comment.component.ts
│   │   │   │   │   ├── article.component.css
│   │   │   │   │   ├── article.component.html
│   │   │   │   │   ├── article.component.ts
│   │   │   │   │   ├── article-meta
│   │   │   │   │   │   ├── article-meta.component.html
│   │   │   │   │   │   └── article-meta.component.ts
│   │   │   │   │   ├── article.routes.ts
│   │   │   │   │   └── pipes
│   │   │   │   │       ├── markdown.pipe.spec.ts
│   │   │   │   │       └── markdown.pipe.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── feature-article-edit
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── src
│   │   │   │   ├── index.ts
│   │   │   │   ├── lib
│   │   │   │   │   ├── article-edit.component.css
│   │   │   │   │   ├── article-edit.component.html
│   │   │   │   │   ├── article-edit.component.ts
│   │   │   │   │   ├── article-edit.routes.ts
│   │   │   │   │   └── resolvers
│   │   │   │   │       ├── article-edit-resolver.spec.ts
│   │   │   │   │       └── article-edit-resolver.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   └── feature-articles-list
│   │       ├── jest.config.ts
│   │       ├── project.json
│   │       ├── README.md
│   │       ├── src
│   │       │   ├── index.ts
│   │       │   ├── lib
│   │       │   │   ├── article-list.component.html
│   │       │   │   ├── article-list.component.ts
│   │       │   │   └── article-list-item
│   │       │   │       ├── article-list-item.component.html
│   │       │   │       └── article-list-item.component.ts
│   │       │   └── test-setup.ts
│   │       ├── tsconfig.json
│   │       ├── tsconfig.lib.json
│   │       └── tsconfig.spec.json
│   ├── auth
│   │   ├── data-access
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── src
│   │   │   │   ├── index.ts
│   │   │   │   ├── lib
│   │   │   │   │   ├── auth.model.ts
│   │   │   │   │   ├── auth.store.spec.ts
│   │   │   │   │   ├── auth.store.ts
│   │   │   │   │   └── services
│   │   │   │   │       ├── auth-guard.spec.ts
│   │   │   │   │       ├── auth-guard.ts
│   │   │   │   │       ├── auth.service.spec.ts
│   │   │   │   │       ├── auth.service.ts
│   │   │   │   │       ├── local-storage-jwt.service.ts
│   │   │   │   │       ├── token-interceptor.service.spec.ts
│   │   │   │   │       └── token-interceptor.service.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   └── feature-auth
│   │       ├── jest.config.ts
│   │       ├── project.json
│   │       ├── README.md
│   │       ├── src
│   │       │   ├── index.ts
│   │       │   ├── lib
│   │       │   │   ├── login
│   │       │   │   │   ├── login.component.css
│   │       │   │   │   ├── login.component.html
│   │       │   │   │   └── login.component.ts
│   │       │   │   └── register
│   │       │   │       ├── register.component.css
│   │       │   │       ├── register.component.html
│   │       │   │       └── register.component.ts
│   │       │   └── test-setup.ts
│   │       ├── tsconfig.json
│   │       ├── tsconfig.lib.json
│   │       └── tsconfig.spec.json
│   ├── core
│   │   ├── api-types
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── src
│   │   │   │   ├── index.ts
│   │   │   │   ├── lib
│   │   │   │   │   ├── article.ts
│   │   │   │   │   ├── auth.ts
│   │   │   │   │   ├── comment.ts
│   │   │   │   │   ├── profile.ts
│   │   │   │   │   └── user.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── data-access
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── src
│   │   │   │   ├── index.ts
│   │   │   │   ├── lib
│   │   │   │   │   └── data-access
│   │   │   │   │       └── call-state.feature.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── error-handler
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── src
│   │   │   │   ├── index.ts
│   │   │   │   ├── lib
│   │   │   │   │   ├── error-handler-interceptor.service.ts
│   │   │   │   │   ├── error-handler.store.spec.ts
│   │   │   │   │   ├── error-handler.store.ts
│   │   │   │   │   └── models
│   │   │   │   │       └── error-handler.state.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── forms
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── src
│   │   │   │   ├── index.ts
│   │   │   │   ├── lib
│   │   │   │   │   ├── dynamic-form
│   │   │   │   │   │   ├── dynamic-field.directive.ts
│   │   │   │   │   │   ├── dynamic-form.component.html
│   │   │   │   │   │   └── dynamic-form.component.ts
│   │   │   │   │   ├── fields
│   │   │   │   │   │   ├── input
│   │   │   │   │   │   │   ├── input.component.css
│   │   │   │   │   │   │   ├── input.component.html
│   │   │   │   │   │   │   └── input.component.ts
│   │   │   │   │   │   └── textarea
│   │   │   │   │   │       ├── textarea.component.css
│   │   │   │   │   │       ├── textarea.component.html
│   │   │   │   │   │       └── textarea.component.ts
│   │   │   │   │   ├── list-errors
│   │   │   │   │   │   ├── list-errors.component.html
│   │   │   │   │   │   └── list-errors.component.ts
│   │   │   │   │   └── +state
│   │   │   │   │       ├── forms.actions.ts
│   │   │   │   │       ├── forms.effects.spec.ts
│   │   │   │   │       ├── forms.effects.ts
│   │   │   │   │       ├── forms.interfaces.ts
│   │   │   │   │       ├── forms.reducer.ts
│   │   │   │   │       └── forms.selectors.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   └── http-client
│   │       ├── jest.config.ts
│   │       ├── project.json
│   │       ├── README.md
│   │       ├── src
│   │       │   ├── index.ts
│   │       │   ├── lib
│   │       │   │   ├── api.service.spec.ts
│   │       │   │   ├── api.service.ts
│   │       │   │   └── api-url.token.ts
│   │       │   └── test-setup.ts
│   │       ├── tsconfig.json
│   │       ├── tsconfig.lib.json
│   │       └── tsconfig.spec.json
│   ├── home
│   │   ├── jest.config.ts
│   │   ├── project.json
│   │   ├── src
│   │   │   ├── lib
│   │   │   │   ├── home.component.css
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.service.spec.ts
│   │   │   │   ├── home.service.ts
│   │   │   │   ├── home.store.ts
│   │   │   │   └── tags-list
│   │   │   │       ├── tags-list.component.css
│   │   │   │       ├── tags-list.component.html
│   │   │   │       └── tags-list.component.ts
│   │   │   └── test-setup.ts
│   │   ├── tsconfig.json
│   │   ├── tsconfig.lib.json
│   │   └── tsconfig.spec.json
│   ├── profile
│   │   ├── data-access
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── src
│   │   │   │   ├── index.ts
│   │   │   │   ├── lib
│   │   │   │   │   ├── models
│   │   │   │   │   │   └── profile-state.model.ts
│   │   │   │   │   ├── profile.store.spec.ts
│   │   │   │   │   ├── profile.store.ts
│   │   │   │   │   ├── resolvers
│   │   │   │   │   │   ├── profile-articles-resolver.spec.ts
│   │   │   │   │   │   ├── profile-articles-resolver.ts
│   │   │   │   │   │   ├── profile-favorites-resolver.spec.ts
│   │   │   │   │   │   ├── profile-favorites-resolver.ts
│   │   │   │   │   │   ├── profile.resolver.spec.ts
│   │   │   │   │   │   └── profile-resolver.ts
│   │   │   │   │   └── services
│   │   │   │   │       ├── profile.service.spec.ts
│   │   │   │   │       └── profile.service.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   └── feature-profile
│   │       ├── jest.config.ts
│   │       ├── project.json
│   │       ├── README.md
│   │       ├── src
│   │       │   ├── index.ts
│   │       │   ├── lib
│   │       │   │   ├── profile.component.css
│   │       │   │   ├── profile.component.html
│   │       │   │   ├── profile.component.ts
│   │       │   │   └── profile.routes.ts
│   │       │   └── test-setup.ts
│   │       ├── tsconfig.json
│   │       ├── tsconfig.lib.json
│   │       └── tsconfig.spec.json
│   ├── settings
│   │   └── feature-settings
│   │       ├── jest.config.ts
│   │       ├── project.json
│   │       ├── README.md
│   │       ├── src
│   │       │   ├── index.ts
│   │       │   ├── lib
│   │       │   │   ├── settings.component.css
│   │       │   │   ├── settings.component.html
│   │       │   │   ├── settings.component.ts
│   │       │   │   ├── settings.service.spec.ts
│   │       │   │   ├── settings.service.ts
│   │       │   │   └── settings.store.ts
│   │       │   └── test-setup.ts
│   │       ├── tsconfig.json
│   │       ├── tsconfig.lib.json
│   │       └── tsconfig.spec.json
│   └── ui
│       └── components
│           ├── jest.config.ts
│           ├── project.json
│           ├── README.md
│           ├── src
│           │   ├── index.ts
│           │   ├── lib
│           │   │   └── pager
│           │   │       ├── pager.component.css
│           │   │       ├── pager.component.html
│           │   │       └── pager.component.ts
│           │   └── test-setup.ts
│           ├── tsconfig.json
│           ├── tsconfig.lib.json
│           └── tsconfig.spec.json
├── LICENSE.txt
├── logo.png
├── migrations.json
├── nx.json
├── package.json
├── package-lock.json
├── README.md
├── renovate.json
├── tools
│   └── tsconfig.tools.json
└── tsconfig.base.json
```
