let recipes = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]
let myRecipes = document.getElementById("my-recipes");

let cardArray = [];


function addRecipes(r){
    for(let i = 0; i<r.length; i++){
        let recipe = r[i];
        let card = document.createElement("div")
        card.className = "card";
    
        card.innerHTML = `
        <img src=${recipe.imageSrc} alt="" style="width: 270px; height: 200px; border-radius: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top:10px">
            <div>
                <p style="color: rgb(193, 193, 193); font-size: 10px;" id="recipe-type">${recipe.type}</p>
                <p id="recipe-name">${recipe.name}</p>
            </div>
            <div><i class="fa-solid fa-star" style="color: #ffea00;"></i><span id = "rating">${recipe.rating}</span></div>
        </div>
        <div style="display: flex; justify-content: space-between;">
            <div style="color: #dc582a;">${recipe.time}</div>
            <div><span class="like" data-isLiked=${recipe.isLiked} data-value=${i}><i class="fa-regular fa-heart" style="color: #dc582a;"></i></span> <i class="fa-regular fa-comment"></i></div>
        </div>
        `
        cardArray.push(card);
        myRecipes.appendChild(card);
    }
}



addRecipes(recipes);


function addRecipesWithCards(cArr){
    myRecipes.innerHTML = "";
    for(let i=0; i<cArr.length; i++){
        let card = cArr[i]
        myRecipes.appendChild(card);
    }

}



function recipeCheck(e){
    let catagorie = e.target.value;
    console.log(catagorie);
    
    if(catagorie === "all"){
        addRecipesWithCards(cardArray);
    }
    else{
        let catagorieCheckedRecipes = cardArray.filter((card) => {
            return card.querySelector("#recipe-type").textContent === catagorie;
        });


        addRecipesWithCards(catagorieCheckedRecipes);
    }
}





function searchByName(){
    let myInput = document.getElementById("search").value;
    const pattern = new RegExp(myInput, 'i');

    let matchingElements = cardArray.filter((card)=>{
        return card.querySelector("#recipe-name").textContent.match(pattern);
    })

    addRecipesWithCards(matchingElements);
}


let radio1 = document.getElementById("above4");
let radio2 = document.getElementById("below4");


function filterCards(event){
    let starFilter = event.target.value;
    let matchingElements;
     if(starFilter === "above4"){
         matchingElements = cardArray.filter((card)=> {
            return parseInt(card.querySelector("#rating").textContent) >= 4; 
        })
     }
     else{
        matchingElements = cardArray.filter((card)=> {
            return parseInt(card.querySelector("#rating").textContent) < 4; 
        })
     }

     addRecipesWithCards(matchingElements);
}

radio1.addEventListener("click", filterCards);
radio2.addEventListener("click", filterCards);





let likes = document.getElementsByClassName("like");

// function likeRecipe(event){
//     let like = event.target.closest(".like");
//     let isLiked = like.getAttribute("data-isLiked")
//     isLiked = isLiked === "true"; // Convert to boolean
//     // console.log(isLiked , like.parentNode.getAttribute("data-value"));
//     let cardName = like.parentNode.getAttribute("data-value");
//     if(!isLiked){
//         like.parentNode.innerHTML = `<span class = "like" data-isLiked = ${true} ><i class="fa-solid fa-heart" style="color: #dc582a;"></i></span> <i class="fa-regular fa-comment"></i>`
//         // console.log("recipe-liked")
//         // console.log(isLiked , like.parentNode.getAttribute("value"));
    
//         // console.log(cardName);
//         // for(let i=0; i<cardArray.length; i++){
//         //     // if(cardArray[i].querySelector("data-cardName") === cardName){
//         //     //     cardArray[i].querySelector("data-cardName").parentNode.innerHTML = `<span class = "like" data-isLiked = ${true}><i class="fa-solid fa-heart" style="color: #dc582a;"></i></span><i class="fa-regular fa-comment"></i>`;
//         //     // }
            
//         //     // let pattern = new RegExp(cardName, 'i');
//         //     console.log(do.querySelector("data-value").textContent)
//         //     if (cardArray[i].querySelector("data-value") == cardName) {
//         //         console.log(cardName, cardArray[i].querySelector("data-value"))
//         //         cardArray[i].querySelector("data-value").parentNode.innerHTML = `<span class="like" data-isLiked="true"><i class="fa-solid fa-heart" style="color: #dc582a;"></i></span> <i class="fa-regular fa-comment"></i>`;
//         //     }
//         // }
//     }
//     else if(isLiked){
//         like.parentNode.innerHTML = `<span class = "like" data-isLiked = ${false} ><i class="fa-regular fa-heart" style="color: #dc582a;"></i></span> <i class="fa-regular fa-comment"></i>`
//     }
// }

function likeRecipe(event) {
    let like = event.target.closest(".like");
    let isLiked = like.getAttribute("data-isLiked");
    isLiked = isLiked === "true"; // Convert to boolean
    let cardIndex = like.getAttribute("data-value");

    if (!isLiked) {
        like.innerHTML = `<i class="fa-solid fa-heart" style="color: #dc582a;"></i>`;
        cardArray[cardIndex].querySelector(".like").setAttribute("data-isLiked", "true");
    } else {
        like.innerHTML = `<i class="fa-regular fa-heart" style="color: #dc582a;"></i>`;
        cardArray[cardIndex].querySelector(".like").setAttribute("data-isLiked", "false");
    }
}





for(let i =0; i<likes.length; i++){
    likes[i].addEventListener("click", likeRecipe); 
}




let ham = document.getElementById("hamburger");
let closeHam = document.getElementById("close-burger");



let mobileNav = document.getElementById("mobile-nav"); 
// console.log(mobileNav);

function openBurger(){
    mobileNav.classList.add("isClicked");
    setTimeout(() => {
        mobileNav.style.display = "none";
    }, 0);
}


ham.addEventListener("click", openBurger);



function closeBurger(){
    mobileNav.classList.add("isClicked");
}



closeHam.addEventListener("click", closeBurger);



// Add a function to hide the mobile nav when screen width >= 769px
function checkScreenWidth() {
    if (window.innerWidth >= 769) {
        mobileNav.classList.remove("isClicked");
    }
}

// Listen for window resize events
window.addEventListener("resize", checkScreenWidth);
