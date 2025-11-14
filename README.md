## Chaintech Assignment — React User Management App

A clean, fast React app built with Vite that lets users register, log in, and manage basic account details. It uses localStorage for simple persistence and Bootstrap 5 for styling.

### Features
- **Register**: Create a new account
- **Log in**: Authenticate with saved credentials
- **Account management**: View and edit basic profile details
- **Client-side persistence**: Data saved in `localStorage`
- **Modern stack**: React 19, React Router v7, Vite 7, Bootstrap 5

---

## Getting Started

### Prerequisites
- **Node.js** 18+ (LTS recommended)
- **npm** 9+ (comes with Node)

### Install
```bash
git clone <your-repo-url>
cd Chaintech-Assignment
npm install
```

### Run
```bash
npm run dev
```
This starts Vite’s dev server. Open the URL it prints (usually `http://localhost:5173`).


Defined in `package.json`:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

---

## Tech Stack
- **React** 19
- **React Router DOM** 7
- **Vite** 7
- **Bootstrap** 5
- **ESLint** 9

---

## Project Structure
```text
.
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ Account.jsx
│  │  ├─ Login.jsx
│  │  └─ Register.jsx
│  ├─ App.css
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
```

---

## Usage

### Routes
- **/** or **/login**: Login page
- **/register**: Registration page
- **/account**: Account/profile page (after login)

### Credentials & Persistence
- User data and auth state are stored in `localStorage` for demo purposes. Clear browser storage to reset.

---

## Styling
- **Bootstrap 5** is used for layout and components.
- Add custom styles in `src/App.css` or `src/index.css`.

---

## Accessibility and UX Notes
- Keyboard-accessible forms and buttons
- Descriptive labels and placeholders
- Basic client-side validation

---

## Troubleshooting
- If the dev server doesn’t open:
  - Ensure Node 18+ is installed
  - Remove `node_modules` and lockfile, then reinstall:
    ```bash
    rm -rf node_modules package-lock.json
    npm install
    npm run dev
    ```
- If styles don’t load, confirm Bootstrap is properly imported.




