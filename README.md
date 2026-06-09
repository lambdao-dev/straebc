# AEBC CMS

Strapi backend and content management system for the website of the
**Association d'échanges belgo-chinois (AEBC)**.

The application provides the website's REST and GraphQL APIs and lets editors
manage multilingual content, media, and contact requests from the Strapi admin
panel.

## Managed content

- Website pages: home, about, institute, HSK centre, downloads, and contact
- Courses, teachers, students, and administrators
- News posts and events
- Contact form submissions

Most public content supports localization and rich-text editing. Courses are
linked to their teachers and registered students.

## Stack

- Strapi 4
- TypeScript
- SQLite by default, with PostgreSQL support
- CKEditor, internationalization, translation, SEO, API documentation, and
  GraphQL plugins

## Local development

Requirements:

- Node.js 18 or 20
- npm 6 or newer

Install the dependencies and create the local environment file:

```bash
npm install
cp .env.example .env
```

Replace the placeholder secrets in `.env`, then start Strapi in development
mode:

```bash
npm run develop
```

By default:

- Admin panel: <http://localhost:1337/admin>
- REST API: <http://localhost:1337/api>
- GraphQL: <http://localhost:1337/graphql>
- API documentation: <http://localhost:1337/documentation>

The first local launch prompts you to create an administrator account.

## Configuration

The application reads its configuration from environment variables. The
minimum local variables are documented in `.env.example`:

```dotenv
HOST=0.0.0.0
PORT=1337
APP_KEYS=change-me-1,change-me-2
API_TOKEN_SALT=change-me
ADMIN_JWT_SECRET=change-me
TRANSFER_TOKEN_SALT=change-me
JWT_SECRET=change-me
```

SQLite is used by default and stores its database in `.tmp/data.db`. To use
PostgreSQL, set `DATABASE_CLIENT=postgres` and either `DATABASE_URL` or the
individual `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_NAME`,
`DATABASE_USERNAME`, and `DATABASE_PASSWORD` variables.

Set `ADMIN_URL` when the admin panel is served from a URL other than
`http://localhost:1337/admin`.

## Commands

```bash
npm run develop  # Start with auto-reload
npm run build    # Build the admin panel
npm run start    # Start in production mode
npm run deploy   # Deploy through Strapi Cloud
```

## Project structure

```text
config/            Strapi, database, server, and plugin configuration
src/admin/         Admin panel customizations and French translations
src/api/           Content types, controllers, routes, and services
src/components/    Shared content components
public/uploads/    Local media uploads (ignored by Git)
```

Content type schemas live under `src/api/*/content-types/*/schema.json`.
Generated API documentation is stored under `src/extensions/documentation/`.
