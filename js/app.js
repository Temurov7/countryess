let elBody = document.querySelector("body")
let elModeBtn = document.querySelector("#modeBtn") 
const btnToggle = document.querySelector(".header__button");


elModeBtn.addEventListener("click", function(){
  elBody.classList.toggle("mode")
  
})




const modeBtn = document.getElementById('modeBtn');

modeBtn.addEventListener('click', function() {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    modeBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
    </svg>
    Dark Mode
    `;
  } else {
    document.body.classList.add('dark-mode');
    modeBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars" viewBox="0 0 16 16">
    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
    </svg>
    Light Mode
    `;
  }
});





const countries = [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
    name: "Germany",
    population: "81,770,900",
    region: "Europe",
    capital: "Berlin",
    isLike: true
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png",
    name: "Spain",
    population: "323,947,000",
    region: "Americas",
    capital: "Washington D.C",
    isLike: false
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/640px-Flag_of_Brazil.svg.png",
    name: "Brazil",
    population: "206,135,893",
    region: "Americas",
    capital: "Brasília",
    isLike: true
  },
  {
    id: 4,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/1024px-Flag_of_Iceland.svg.png",
    name: "Iceland",
    population: "334,300",
    region: "Europe",
    capital: "Reykjavík",
    isLike: false
  },
  {
    id: 5,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/1024px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png",
    name: "Afghanistan",
    population: "27,657,145",
    region: "Asia",
    capital: "Kabul",
    isLike: false
  },
  {
    id: 6,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/1280px-Flag_of_Uzbekistan.svg.png",
    name: "Uzbekistan",
    population: "35,482,369",
    region: "Asia",
    capital: "Tashkent",
    isLike: true
  },
  {
    id: 7,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/2560px-Flag_of_Albania.svg.png",
    name: "Albania",
    population: "2,886,026",
    region: "Europe",
    capital: "Tirana",
    isLike: true
  },
  {
    id: 8,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/1280px-Flag_of_Algeria.svg.png",
    name: "Algeria",
    population: "40,400,000",
    region: "Africa",
    capital: "Algiers",
    isLike: false
  },
]

let elCountrieList = document.querySelector(".hero__countries")
let elSelect = document.querySelector(".hero__select")
let ellModalWrapper = document.querySelector(".modal-wrapper")
let ellModal = document.querySelector(".modal")


function renderCountry(arr){
  elCountrieList.innerHTML = ""
  arr.sort((a, b) => a.name < b.name ? -1:1)
  arr.map(item => {
    let elItem = document.createElement("li")
    elItem.classList.add("hero__item")
    elItem.innerHTML = `
    <img class="hero__img" src=${item.img} alt="Country img" width="100%" height="200"/>
    <b>${item.id}</b>
    <h2 class="hero__name">Country : ${item.name}</h2>
    <p class="hero__population">Population : ${item.population}</p>
    <p class="hero__region">Region : ${item.region}</p>
    <p class="hero__capital">Capital : ${item.capital}</p>
    <div class="hero__like-basket-more">
    <button class=${item.isLike ? "like" : "dislike"}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
    </svg>
    </button>
    <button class="basket" id=${item.id}>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
    </svg>
    </button>
    <button onclick="moreBtnClicked(${item.id})" id=${item.id}>More</button>
    </div>
    `
    
    
    elCountrieList.appendChild(elItem)
  })
}






const searchInput = document.querySelector(".hero__input")

searchInput.addEventListener('input', function (){
  const inputresult = this.value.toLowerCase();
  const CountriesFilter = countries.filter(item => item.name.toLowerCase().includes(inputresult));
  renderCountry(CountriesFilter)
});







function moreBtnClicked(clicked){
  ellModalWrapper.classList.add("open-modal")
  const data = countries.find(item => item.id == clicked)
  ellModal.innerHTML = `
  <div class="modal__img-wrapper">
  <img class="hero__img" src=${data.img} alt="Country img" width="100%" height="200"/>
  </div>
  <div class="modal__content-wrapper">
  <b>${data.id}</b>
  <h2 class="hero__name">Country : ${data.name}</h2>
  <p class="hero__population">Population : ${data.population}</p>
  <p class="hero__region">Region : ${data.region}</p>
  <p class="hero__capital">Capital : ${data.capital}</p>
  </div>
  
  
  
  <button id="close" class="close">
  X
  </button>
  `
  console.log(data);
}

ellModalWrapper.addEventListener("click",function(evt){
  if(evt.target.id == "modal-wrapper")
  ellModalWrapper.classList.remove("open-modal")
  
})


ellModalWrapper.addEventListener("click", function(event){
  if(event.target.id == "close")
  ellModalWrapper.classList.remove("open-modal")
})






function renderSelectOptions(arr, innerTag){
  arr.map(item => {
    let elOption = document.createElement("option")
    elOption.textContent = item.name
    elOption.setAttribute("value", item.id)
    innerTag.appendChild(elOption)
  })
}

renderSelectOptions(countries, elSelect)
renderCountry(countries)

elSelect.addEventListener("change", function(evt) {
  const clickId = evt.target.value
  if(clickId == 0){
    renderCountry(countries)
  }
  else{
    const filteredArr = countries.filter(item => item.id == clickId)
    renderCountry(filteredArr)
  }
})



let likeCount = document.querySelector(".like-count")

function findLike(arr){
  const data = arr.filter(item => item.isLike == true)
  likeCount.textContent = data.length
}
findLike(countries)



let BasketCount = document.querySelector(".basket-count")

function findBasket(arr){
  const data = arr.filter(item => item.isLike == true)
  BasketCount.textContent = data.length
}
findBasket(countries)