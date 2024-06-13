# ActivateWork_Capstone

# [App Name]

Welcome to [App Name], your ultimate solution for managing and analyzing item data for renter insurance and other purposes.

An example deployment can be seen at https://activatework-capstone-frontend.onrender.com/

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)


## Introduction
[App Name] helps users manage their items efficiently and analyze their pricing data to determine net worth for renter insurance. With features like item addition, deletion, refreshing, and price analysis, [App Name] offers a comprehensive tool for item management.

## Features
- **Efficient Item Management**: Add, delete, and update items easily.
- **Data Analysis**: View average, median, max, and min prices for items.
- **Customizable Searches**: Filter items based on keywords and categories.
- **Pagination and Filtering**: Easily navigate and manage large lists of items.
- **User-Friendly Interface**: Intuitive design for seamless user experience.

## Installation
To get started with [App Name], follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```
2. Navigate to the project directory:
    ```bash
    cd your-repo
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage
Once the server is running, you can access the application at `http://localhost:5173`.

### Key Components
- **ItemList**: Displays the list of items with pagination and filtering options.
- **SearchForm**: Allows users to add new items.
- **SummaryTable**: Shows the total prices of all averages, medians, max, and min prices.

### Routes
- `/searches/:pageNumber?itemsPerPage=:itemsPerPage` - View and manage items with pagination and customizable items per page.
- `/about` - Learn more about the application and the team behind it.

## API Reference
### Endpoints
- **GET /api/items** - Retrieve all items.
- **POST /api/items** - Add a new item.
- **DELETE /api/items/:id** - Delete an item by ID.
- **PATCH /api/items/:id** - Update an item by ID.
- **PATCH /api/items/:id/toggleInclude** - Toggle the inclusion status of an item by ID.

### Example Usage
#### Adding an Item
```javascript
const newItem = {
    keywords: "laptop",
    excluded_keywords: "used",
    max_search_results: 100,
    category_id: "123",
    aspects: [{ name: "condition", value: "new" }],
    userId: "user123",
    userEmail: "user@example.com"
};

await addItem(newItem);
