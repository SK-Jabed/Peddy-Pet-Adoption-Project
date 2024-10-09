## Project Name: Peddy - Pet Adoption Platform

**Welcome to Peddy - Pet Adoption Platform !!!**
This is a project of pet adoption platform where users can browse and adopt pets. We will provides you APIs to fetch pet-related data such as all pets, categories of pets, and specific pet details , pet data based on category

## Private For your Assignment

you have to create private repo in our Google Classroom . here is the Link

# [https://classroom.github.com/a/gUlZfxsK](https://classroom.github.com/a/gUlZfxsK)

## APIs

The following APIs are available in Peddy:

1. **Fetch All Pets**

   - **Endpoint:** [https://openapi.programming-hero.com/api/peddy/pets](https://openapi.programming-hero.com/api/peddy/pets)
   - **Description:** Retrieves a list of all available pets for adoption. The data includes details like pet name, type, age, and adoption status.

2. **Fetch Pet Details by ID**

   - **Endpoint:**`https://openapi.programming-hero.com/api/peddy/pet/pet-id`

   - **Example:** [https://openapi.programming-hero.com/api/peddy/pet/1](https://openapi.programming-hero.com/api/peddy/pet/1)
   - **Description:** Fetches detailed information for a specific pet based on its ID. This can be used to view additional information about the pet such as vacination history, description

3. **Fetch All Pet Categories**

   - **Endpoint:** [https://openapi.programming-hero.com/api/peddy/categories](https://openapi.programming-hero.com/api/peddy/categories)

   - **Description:** Fetches a list of all pet categories available in the platform, such as dogs, cats, rabbit , bird, etc.

4. **Fetch Pets by Category**

   - **Endpoint:** `https://openapi.programming-hero.com/api/peddy/category/categoryName`
   - **Example:** [https://openapi.programming-hero.com/api/peddy/category/dog](https://openapi.programming-hero.com/api/peddy/category/dog)

   - **Description:** Fetches data of pets under a specific category, in this case, dogs. This can be used to filter pets based on their category.

## Key Requirements

### 1. **Navbar**

- Implement the navbar as per the Figma design.
- Ensure it is responsive across Desktop, Tablet, and Mobile devices.
- The navbar should collapse into a mobile menu on smaller screens.

### 2. **Banner Section**

- Design the banner section as per Figma design.
- Include a "View More" button that, when clicked, scrolls down to the “Adopt Your Best Friend” section.
- Ensure the banner is fully responsive.

### 3. **Adopt Your Best Friend Section**

- **Left Side**:
  - Display 4 dynamic categories below the section title and subtitle, fetched from the provided API.
  - Add a "Sort By Price" button on the right, with a subtitle on the left, as per the design.
  - By default, show all available pets, with the active category styled according to Figma.
  - After clicking on a category, fetch and display pets from that category in a grid layout.
  - If no pets are available for a category, show a meaningful message.
  - Each card must display the following:
    - Thumbnail/Image
    - Pet Name
    - Breed
    - Birth Date
    - Gender
    - Price
    - Buttons: "Like", "Adopt", and "Details"
  - If any field is missing from the API response, handle it by displaying a placeholder or meaningful message.
- **Right Side**:
  - Clicking the "Like" button should add the pet's thumbnail to the right-side grid.
  - Display a 2-column layout for liked pet thumbnails.

### 4. **Modal Window**

- When the "Details" button is clicked, open a modal that displays all pet information like figma
- The modal should close when the user clicks close button.

### 5. **Footer**

- Implement the footer as per the Figma design.
- Ensure it is responsive.

### 6. **Responsive Design**

- The entire platform must be responsive and functional on Desktop, Tablet, and Mobile devices.
- Use Tailwind CSS breakpoints for responsiveness.

## Challenges

### 1. **Loading Spinner**

- Display a loading spinner for at least 2 seconds when fetching data from the API.

### 2. **Sort by Price**

- Implement sorting functionality for pets. When the "Sort by Price" button is clicked, sort pets in descending order based on price . sorting on active category is recommended but if you can sort all the data you will get full mark for this requirement.

### 3. **Adopt Button Behavior**

- Implement an adoption process. When the "Adopt" button is clicked, show a countdown (3, 2, 1) and then change the button text to "Adopted."

### 4. **Handle Null or Undefined Values**

- If any values from the API (e.g., pet breed, birth date) are null or undefined, display a placeholder or relevant message instead of leaving it blank.

## 5. A Beautyfull README.md File

Ensure the final project includes a `README.md` file with the following details:

- Project name.
- Short description of the project.
- 5 key features of the project.
- ES6 features used.
- Live link to the deployed project.

## What to Submit

- Your Private Github Repo Link
- Your Live Link

# Best of Luck





# Project Name: Peddy - Pet Adoption Platform

## Project Description
**Welcome to Peddy - Pet Adoption Platform !!!** Peddy is an intuitive and visually appealing pet adoption platform that aims to streamline the process of finding and adopting pets. Users can browse through a wide variety of pets, access detailed information and apply for adoption. Peddy focuses on providing a seamless experience and making it more easier for users to find their perfect pet. Additionally, the website provides detailed information about each pet, ensuring adopters are fully informed before making their decision.

## Key Features
1. **Pet Listings**: A dynamic list of pets available for adoption, which can be filtered by species, breed, age, and location.
2. **Adoption Application Form**: A form for users to submit their interest in adopting a specific pet.
3. **Search and Filter Options**: Allows users to search for pets by various criteria, including breed, size, location, and special needs.
4. **Pet Detail Modals**: When users click on a pet, a modal opens with detailed information about the pet.
5. **Adoption Countdown Events**: Shows upcoming adoption events with a countdown timer, and automatically closes modals after 3 seconds.


## Key Features
1. **Pet Listings by Pet Category**:
   - A dynamic list of pets available for adoption with detailed profiles including photos, name, breed, age, date of birth, gender, price and adoption status.
   - Users can quickly find specific types of pets by pet category (cat, dog, rabbit, bird) and other criteria like special needs or adoptable status.

2. **Dynamic Sorting Functionality of Pets**:
   - Real-time sorting functionality that dynamically updates pet listings according to price when the "Sort by Price" button is clicked.
   - When users click on the "Sort by Price" button, the pet listings update in descending order based on pet's price so that users can quickly find specific breeds or types of pets.

3. **Pet Detail Modal**:
   - When users click on details button of a pet card, a modal window appears, providing detailed information about the pet, including personality traits, medical history and care requirements.
   - This feature improves the user experience by keeping the main page clean while offering rich details on-demand.

4. **Interactive Adoption and Adoption Event Countdown**:
   - Implement an interactive adoption process. When the "Adopt" button is clicked, it will show a countdown (3, 2, 1) and then change the button text to "Adopted."
   - The countdown timer also auto-closes event modal after a set duration (3 seconds).

5. **Responsive Design**:
   - The entire site is responsive, ensuring that users can browse and apply for adoption on any device, including mobile phones and tablets.
   - The layout dynamically adjusts to different screen sizes, making it easy to navigate across devices.


## ES6 Features
The project utilizes modern JavaScript ES6 features, including:
- **Arrow Functions**: Used for handling events and callbacks more succinctly.
- **Template Literals**: For embedding dynamic HTML and content in templates.
- **Destructuring**: For extracting properties from objects such as pet details from the API.
- **Modules**: The code is modularized into different files for better organization and maintainability.
- **Promises & Async-Await**: Used to handle API requests to fetch pet data asynchronously.

## Live Link
[Live Version of the Website](#)  
*(Insert the deployed link here once the project is live on GitHub Pages, Netlify, or Vercel)*

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/peddy-pet-adoption-website.git

