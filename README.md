# Red-Black Tree Search Application

This project is a final assignment that implements a **search feature** using the  
**Red-Black Tree (RBT)** data structure. Users can type queries into a search input,  
and the application will return matching results using the RBT search algorithm.

The project is built with **React + TypeScript**, and includes a clean folder  
architecture for structure, readability, and scalability.

---

## 📁 Folder Structure

```bash
src/
├── components/
├── data/
├── structures/
├── utils/
├── App.tsx
└── main.tsx
```

Below is the explanation of each folder:

---

## 📂 **components/**

This folder contains all **React UI components**, such as reusable visual elements.

### Example contents:

- **SearchBar.tsx** — input field where the user types the search query
- **SearchResult.tsx** — displays the results returned from the RBT
- **TreeVisualizer.tsx** _(optional)_ — visual representation of the tree

### Purpose:

- Keeps UI logic separated from data structures
- Makes components reusable and easier to maintain

---

## 📂 **data/**

This folder stores static or sample data used in the application.

### Example:

- **dataset.json** — list of items inserted into the Red-Black Tree

### Purpose:

- Provides initial data for testing search
- Makes the app reproducible with the same dataset

---

## 📂 **structures/**

This folder contains the **core logic of the Red-Black Tree**.

### Example contents:

- **RedBlackTree.ts** — full RBT implementation (insert, rotate, recolor, search)
- **Node.ts** — node class used by the tree

### Purpose:

- Separates algorithm logic from UI
- Makes it clear for lecturers that RBT is implemented manually
- Easier to test and document

---

## 📂 **utils/**

Contains helper or utility functions that support the app.

### Example:

- **formatCurrency.ts** — example utility to format numbers
- **stringHelpers.ts** — string manipulation helpers

### Purpose:

- Keeps helper functions organized and reusable
- Prevents cluttering components with unrelated logic

---

## Installation & Running

### 1. Install dependencies

```bash
npm install
```

### 2. Install dependencies

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```
