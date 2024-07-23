# DEP-E-commerce-website
# E-commerce Website

Welcome to the E-commerce Website repository. This project is a full-stack web application for an online store that sells electronics, including smartphones, laptops, tablets, headphones, and smart home devices. 

## Introduction

This project aims to create a dynamic and visually appealing e-commerce platform. It includes user authentication, a product catalog, a shopping cart, and a checkout process.

## Features

- User authentication (login/logout)
- Product catalog with categories (Featured Products, New Arrivals)
- Shopping cart with add/remove functionality
- Cart items page
- Responsive design for various screen sizes

## Technologies Used

### Frontend

- HTML
- CSS
- JavaScript
- React

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### Tools

- VS Code

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ecommerce-website.git
    cd ecommerce-website
    ```

2. Install the dependencies for both the frontend and backend:

    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following:

    ```env
    PORT=5000
    MONGO_URI=mongodb+srv://white:00whiteeye00@clothesecommerce.fhi1adu.mongodb.net/ClothesEcommerce?retryWrites=true&w=majority&ssl=true

    ```

4. Start the development server for the backend:
    ```bash
    npm start
    ```

5. In a new terminal, start the development server for the frontend:
    ```bash
    cd frontend
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Login:** Click on the 'Login' button in the header to open the login page. Enter your credentials to log in.
- **Shop Products:** Browse through the featured products and new arrivals on the homepage. Click 'Add to Cart' to add items to your shopping cart.
- **View Cart:** Click on the 'Go to Cart' button in the header to view the items in your shopping cart. You can remove items from the cart on this page.
- **Checkout:** (This functionality can be expanded in future iterations.)

## Project Structure

