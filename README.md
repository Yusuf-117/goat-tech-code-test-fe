# Goat Tech Code Test Frontend

This project is built with [Vite](https://vitejs.dev/) and [TypeScript](https://www.typescriptlang.org/) using the React-TS template.

## Setup Instructions

Follow these steps to get the project running on a new machine:

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### 2. Clone the Repository

```bash
git clone https://github.com/Ibex-CRM/goat-tech-code-test-fe.git
cd goat-tech-code-test-fe
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

This will start the Vite development server. Open [http://localhost:3001](http://localhost:3001) in your browser to view the app.

## Project Structure

- `src/` — Main source code (components, pages, assets, routes)
- `public/` — Static assets
- `vite.config.ts` — Vite configuration
- `tsconfig.json` — TypeScript configuration

## Your Mission

We need a task and campaign management app for our campaigns teams at Goat Agency. It's still missing vital features before it becomes useful. This is where you come in.
We need you to make this into a functional task management app that allows team members to create, read and edit tasks related to a campaign. We also need a page that would list all tasks regardless of the campaign to see what we need to prioritise (sorting would be super useful here as well).

Here's a list of features we need the application to have:
- Ability to create, read and update tasks related to a specific campaign.
- Ability to see all tasks in the system regardless of the campaign and the ability to edit them if needed.
- Because campaigns may have a lot of tasks, it would be beneficial to have a way to sort the tasks based on when they're due, their priority and/or whether they've already been completed (uncompleted high priority tasks that require immediate attention would need to be at the top).
- The application doesn't look like much right now, perhaps add some styling (don't worry too much about the composition of the styling, we are not testing your design skills here). Feel free to completely change existing styling as well if you so wish.
- This code test is to be used in conjunction with the backend of this test, which you will be provided with. Completion of both is a requirement in order to pass the test.

### Bonus Round
- Now that we can create tasks, it would be useful to know who's responsible for completing them..

## Additional Notes

- The project uses [TanStack Router](https://tanstack.com/router) for routing. Specifically we use file-based routing so make sure you read up on it before tackling the test.
- Styling is handled with Tailwind CSS.
- For any issues, please check your Node.js and npm versions, and ensure all dependencies are installed.
- If you decide to work on the bonus round, note that there is no current user being set. We do not expect you to create a full login flow in order to satisfy a created_by requirement. Solve this issue however you see fit.
