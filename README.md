# [ HRnet ] Convert a jQuery library to React

WealthHealth's HRnet application, a web application for managing employee records, is undergoing an exciting transition. The current application, which heavily uses jQuery on the frontend, is being updated to React. This README provides the necessary steps to install, configure, and understand this new version of the application.

## Features

Here are the features that the application offers:

* **View Employee List**: You can view the list of all employees stored in the database.
* **Create Employee**: There is a form to add new employees into the system.
* **Replace jQuery Plugins**: The project replaces jQuery plugins with React components to improve performance and stability. The plugins replaced include Date selectors, Modal windows, Dropdown menus, and Data tables.

## Prerequisites

Before getting started, make sure you have **Node.js** and **Yarn** installed on your machine.

- [NodeJS (**version 18.14**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

## Technologies Used

The project uses the following technologies:

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)
- [Firebase](https://firebase.google.com/)
- [Sass](https://sass-lang.com/)

## Installation

Clone the repository:

- `git clone git://github.com/mathurinchung/sportsee.git`
- `cd hrnet`

Create a Firebase project and get your configuration object. Then, create a .env file in the project root and fill in your Firebase config details.

```bash
VITE_FIREBASE_API_KEY="your-api-key"
VITE_FIREBASE_AUTH_DOMAIN="your-auth-domain"
VITE_FIREBASE_DATABASE_URL="your-database-url"
VITE_FIREBASE_PROJECT_ID="your-project-id"
VITE_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
VITE_FIREBASE_MESSAGING_SENDER_ID="your-messaging-sender-id"
VITE_FIREBASE_APP_ID="your-app-id"
```

## Addition Information

Moreover, the application uses JSDoc comments for better understanding and maintainability of the codebase.