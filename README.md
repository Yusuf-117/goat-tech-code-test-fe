````markdown
# Goat Tech Code Test Frontend

This is my completed submission for the **Goat Developer Frontend Challenge**.  
Built with **React (Vite + TypeScript)**, using **TanStack Router** and **TailwindCSS** for routing and styling.

---

## Setup Instructions

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### 2. Clone + Install
```bash
git clone https://github.com/Ibex-CRM/goat-tech-code-test-fe.git
cd goat-tech-code-test-fe
npm install
````

### 3. Run

```bash
npm run dev
```

App runs at [http://localhost:3001](http://localhost:3001).

Make sure the backend is running at [http://localhost:3000](http://localhost:3000).

---

## Features

* ✅ Create, read, update, and delete **tasks** within campaigns
* ✅ Global task list with sorting by priority, status, and due date
* ✅ Modal-based task creation/editing
* ✅ Inline "Mark Done" updates
* ✅ User assignment + caching
* ✅ Simulated login (stores user in localStorage)
* ✅ Restricted access to all routes unless logged in
* ✅ Responsive UI built with TailwindCSS

---

## Sorting Logic

Tasks are ordered by:

1. **Incomplete high-priority** tasks first
2. Then by **status** (`todo => in_progress => done`)
3. Then by **due date** (closest first)

---

## Project Structure

```
src/
├── components/
│   └── tasks/ (TaskItem, TaskList)
├── hooks/
│   └── useTaskActions.ts
├── lib/
│   ├── api.ts
│   └── userCache.ts
├── pages/
│   ├── campaigns/
│   │   ├── Campaign.tsx
│   │   ├── CampaignTaskForm.tsx
│   │   └── CampaignTaskList.tsx
│   ├── tasks/Tasks.tsx
│   └── login/Login.tsx
├── routes/
│   ├── __root.tsx
│   ├── campaigns/
│   │   ├── $campaignId.tsx
│   │   └── index.tsx
│   └── tasks/index.tsx
└── typings/models.d.ts
```

---

## Notes

* Built with **Vite + TypeScript**
* Routing via **TanStack Router (file-based)**
* Styled using **TailwindCSS**
* API base configurable via `VITE_API_BASE_URL`
* Works with the Rails backend (`/api/v1/`)

---

**Stack:** React + Vite + TanStack Router + TailwindCSS + TypeScript

