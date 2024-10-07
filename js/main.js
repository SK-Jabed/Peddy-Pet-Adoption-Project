// Fetch, Load and Show Catagories

// Create Load Catagories 
const loadCatagories = () => {
    
    // Fetch the Data
    fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
        .then(response => response.json())
        .then(data => displayCatagories(data.categories))
        .catch((error => console.log(error)))
}

const loadAllPets = () => {
    
    // Fetch the Data
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        .then(response => response.json())
        .then(data => displayAllPets(data.pets))
        .catch((error => console.log(error)))
}

const loadCategoryPets = (category) => {
    // Fetch the Data
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then(response => response.json())
        .then(data => displayAllPets(data.data))
        .catch((error => console.log(error)))
}


// "petId": 1,
// "breed": "Golden Retriever",
// "category": "Dog",
// "date_of_birth": "2023-01-15",
// "price": 1200,
// "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
// "gender": "Male",
// "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
// "vaccinated_status": "Fully",
// "pet_name": "Sunny"

const displayAllPets = (pets) => {
    const petsCardContainer = document.getElementById("pets-cards-container");
    petsCardContainer.innerHTML = "";

    if (pets.length === 0) {
        petsCardContainer.classList.remove("grid")
        petsCardContainer.innerHTML =`
        <div class="text-center p-8 border-2">
        <div class="flex justify-center">
            <img class="rounded-xl w-20 py-8" src="images/error.webp" alt="Shoes">
        </div>
        <h2 class="font-black text-4xl mb-4">No Information available</h2>
        <p>Currently, there is no information available in the Bird category. We are working to update our listings and provide you with the latest details. Please check back soon for new additions and updates!</p>
        </div>
        `;
        return;
    }
    else {
        petsCardContainer.classList.add("grid");
    }

    pets.forEach((pet) => {
        // console.log(pet);
        const card = document.createElement("div");
        card.classList = "card card-compact p-3 border-2 border-solid border-red-500";
        card.innerHTML = `
        <figure>
            <img class="rounded-xl object-cover w-full h-full" src=${pet.image} alt="Image of a pet" />
        </figure>
        <div class="">
            <div class="mt-4">
              <h2 class="text-xl font-bold mb-2">${pet.pet_name
}</h2>
              <p class="flex gap-1 font-normal text-[#131313B3] mb-1"><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/24/bulldog.png" alt="bulldog">Breed: ${pet.
breed}</p>
              <p class="flex gap-1 font-normal text-[#131313B3] mb-1"><img width="20" height="20" src="https://img.icons8.com/ios/20/birth-date.png" alt="birth-date">Birth: ${pet.date_of_birth}</p>
              <p class="flex gap-1 font-normal text-[#131313B3] mb-1"><img width="20" height="20" src="https://img.icons8.com/cotton/20/gender.png" alt="gender">Gender: ${pet.gender}</p>
              <p class="flex gap-1 font-normal text-[#131313B3] mb-1"><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/24/average-2.png" alt="average-2">Price : ${pet.price}</p>
  
              <div class="grid grid-cols-3 gap-2 pt-3 border-t-2">
                  <button id="3-like" class="btn px-0"><img width="25" height="25" src="https://img.icons8.com/material-outlined/25/facebook-like.png" alt="facebook-like"></button>
                  <button id="3-adopt" class="btn px-0 text-[#0E7A81]">Adopt</button>
                  <button id="3-details" class="btn px-0 text-[#0E7A81]">Details</button>
              </div>
          </div>
        </div>
        `;
        petsCardContainer.append(card);
    });
}



// Create Display Catagories
const displayCatagories = (categories) => {
    const categoryContainer = document.getElementById("categories-btn");
    categories.forEach((item) => {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList = "flex lg:justify-between lg:items-center mb-8 gap-2 md:gap-4";
    buttonContainer.innerHTML = `
    <button onclick="loadCategoryPets('${item.category}')" class="catagories-btn py-4 h-20 rounded-xl bg-primaryColor border-2 border-grey-300 font-extrabold text-xl hover:border-2 hover:border-secondaryColor hover:rounded-full hover:bg-userBorderColor w-full flex items-center justify-center gap-2 lg:px-16" id=${item.id}><img class="object-cover h-full" src="${item.category_icon}" alt="">${item.category}</button>
    `;
    // Add Button to Container
    categoryContainer.append(buttonContainer);
    });

    // Create a Button
   
}


loadCatagories();
loadAllPets();