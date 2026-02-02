# Dog API Explorer

## Overview
This project is a simple web application that fetches and displays data from the public **Dog API**. Users can browse a scrollable list of dog breeds, click a breed to view its details, and read general dog facts. The app demonstrates API integration, DOM manipulation, asynchronous JavaScript, and handling edge cases.

## Features

### ✔ Fetch and display all dog breeds
- Loads all breeds from `/breeds`
- Renders them in a scrollable list
- Highlights the selected breed

### ✔ Display detailed information for each breed
When a breed is clicked, the app shows:
- Name  
- Description  
- Life span  
- Male and female weight ranges  
- Hypoallergenic status  

### ✔ Display general dog facts
- Fetches 5 facts from `/facts?limit=5`
- Renders them in a dedicated **Dog Facts** section  
- Satisfies the assignment requirement for dog facts

### ✔ Edge case test suite
Included in `testFetch.js`:
1. Rapid clicking on multiple breeds  
2. Invalid breed ID request  
3. Invalid fact ID request  

These tests demonstrate error handling and API robustness.

## File Structure

 ```text fetch-dog-data/ │ ├── index.html # UI layout and structure ├── app.js # Main application logic └── testFetch.js # Edge case tests
 ```
 
## How It Works

### 1. Breed List
`loadBreeds()` fetches all breeds and renders them as clickable list items.  
Selecting a breed triggers `loadBreedDetails(id)`.

### 2. Breed Details
`loadBreedDetails()` fetches `/breeds/{id}` and displays the breed’s attributes.  
This section intentionally contains **no fun fact**, since the sidebar facts already satisfy the assignment scope.

### 3. Dog Facts
`loadFacts()` fetches 5 general dog facts and displays them in a list.  
The Dog API does **not** provide breed‑specific facts, so all facts are general.

### 4. Edge Case Tests
`testFetch.js` runs automatically in the console and verifies:
- UI stability during rapid user interaction  
- Proper handling of invalid breed IDs  
- Proper handling of invalid fact IDs  

## How to Run

1. Open the project folder in VS Code.  
2. Open `index.html` in a browser (or use **Open with Live Server** if installed).  
3. Open DevTools → **Console** to view test output from `testFetch.js`.

## Known Limitations

- The Dog API `/images` endpoint is currently returning **404**, so this project does **not** include dog images.
- The `/facts` endpoint provides **general** dog facts only; breed‑specific facts are not available.

## Summary
This project demonstrates:
- Fetching and rendering API data  
- DOM updates based on user interaction  
- Clean UI design  
- Error handling and edge‑case testing  
- Minimal, professional code organization  

It fulfills the requirements for the Week 5 assignment and provides a stable, easy‑to‑understand example of API‑driven web development.
