# Expense Tracker App 📊

A simple React-based Expense Tracker web app that lets users add, view, filter, and visualize their expenses using charts. All expense records are stored in a `db.json` file using JSON Server.

## 🚀 How to Run the Project

### 1. Clone or Download the Repository

```bash
git clone <your-repo-url>
cd expense-tracker
```

### 2. Open Two Terminals in the Project Folder

You must open **two terminals** to run the application successfully.

```
npm install       # Install all dependencies
npm run dev       # Start the development server

```


### 🗃️ Terminal 2: Start JSON Server for API

This command launches a mock API server using `db.json`

This step is **mandatory**. Without starting JSON Server, the application **will not function correctly** and will fail to show or store any expense data.

```mermaidnpx
npx json-server --watch db.json --port 3001
```
