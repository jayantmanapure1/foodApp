const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  console.log(searchQuery);
  fetchAPI(searchQuery);
});

async function fetchAPI(searchQuery) {
  const baseURL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchQuery}`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.meals);
  console.log(data);
}

function generateHTML(results) {
  //container.classList.remove("initial");
  let generatedHTML = "";
  results.forEach(result => {
    generatedHTML +=
      `
    <div class="item">
      <img src="${result.strMealThumb}" alt="">
      <div class="flex-container">
        <h1 class="title">${result.strMeal}</h1>
        <a class="view-btn" href="#">View Recipe</a>
      </div>
      <p class="item-data">Calories: ${result.strCategory}</p>
    </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}
