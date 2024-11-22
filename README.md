DNG Hair Accessories - Login and Shopping Cart System

This project is a simple e-commerce application for DNG Hair Accessories. It features a login page, a shopping cart for adding and removing products, updating quantities, and applying discounts and taxes.

Group Members:
Karlicia Sutherland (ID: 2302691)
Zachery Myrie (ID: 2210180)
D-Andrea Graham (ID: 2304203)

Login Credentials 
You will ahve to register  first to be able to use the login.

Project Overview
1. Login Page
The login page allows users to log in with a TRN (username) and password.
Forgot Password: Placeholder link for forgot password functionality.
2. Registration Page
Users can register new accounts by providing an email and password.
Registered users are saved to localStorage.
3. Shopping Cart
Add products to the cart.
View cart items, update quantities, and remove items.
Calculations for subtotal, discounts, and shipping are displayed.
The total amount is updated dynamically as items are modified.

5. Product Catalog
Product List: A list of products stored in an array of objects with:
name, price, description, image
Products are displayed dynamically on the webpage.
Each product has an "Add to Cart" button.
Product data is stored in localStorage under the key AllProducts.

5.Invoice Generation
After checkout, an invoice is generated with the following details:
Company name
Date of invoice
Shipping information
Unique invoice number
TRN
Purchased items (name, quantity, price, discount)
Taxes, subtotal, total cost

User Analytics
ShowUserFrequency():
Displays user frequency based on gender (Male, Female, Other).
Displays user frequency by age group (18-25, 26-35, 36-50, 50+).
ShowInvoices():
Displays all invoices from AllInvoices and allows users to search for invoices based on TRN.
GetUserInvoices():
Displays all invoices for a user based on their TRN stored in RegistrationData.



Tools  Used

HTML - Markup language for creating the structure of the web pages.
CSS - Stylesheets to style the login, registration, and cart pages.
JavaScript - To add functionality such as login, registration, and cart management.
localStorage - Used to store user information and cart data on the client side.
Date - Used to generate unique invoice numbers and track registration dates.

[Click here to visit the website](https://kay-2003.github.io/Web_Programming-GroupAssignment/)

