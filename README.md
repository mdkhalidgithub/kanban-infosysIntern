# Kanban Flow

A responsive Kanban board application built with Angular for task management.

<img width="2869" height="1344" alt="image" src="https://github.com/user-attachments/assets/1f48ebb3-943d-4bff-8ada-9773eaf6cbdb" />


## Features

- **CRUD Operations**: Create, Read, Update, and Delete tasks
- **Task Status Management**: Organize tasks across 4 columns (New Task, In Progress, Completed, Delivered)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Success Notifications**: Visual feedback when tasks are deleted
- **Modal Forms**: Clean interface for adding and editing tasks

## Tech Stack

- Angular 21.1.4
- TypeScript
- SCSS
- Standalone Components

## Installation

```bash
npm install
```

## Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`

## Build

```bash
ng build
```

## Project Structure

```
src/
├── app/
│   ├── dashboard/
│   │   ├── dashboard.ts          # Component logic with CRUD operations
│   │   ├── dashboard.html        # Template with task board and modal
│   │   └── dashboard.scss        # Responsive styles
│   └── app.routes.ts
└── main.ts
```

## Usage

1. **Add Task**: Click "+ NEW TASK" button, fill the form, select status, and submit
2. **Edit Task**: Click "Edit" button on any task card to modify details
3. **Delete Task**: Click "Delete" button to remove a task (shows success popup)
4. **Move Tasks**: Use the status dropdown when editing to move tasks between columns

## Responsive Breakpoints

- Desktop: 4 columns (>1200px)
- Tablet: 2 columns (768px - 1200px)
- Mobile: 1 column (<768px)
