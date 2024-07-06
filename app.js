





var all = [
    { category: "SandWich", name: "Club SandWich", price: 500 },
    { category: "SandWich", name: "Cream SandWich", price: 600 },
    { category: "SandWich", name: "Tose SandWich", price: 700 },
    { category: "biryani", name: "Chicken biryani", price: 300 },
    { category: "biryani", name: "Mutton biryani", price: 200 },
    { category: "biryani", name: "Alo biryani", price: 4250 },
    { category: "karahi", name: "Chicken karahi", price: 1350 },
    { category: "karahi", name: "Beef karahi", price: 550 },
    { category: "karahi", name: "Mutton karahi", price: 750 },
    { category: "kabab", name: "Mutton kabab", price: 950 },
    { category: "kabab", name: "Seekh kabab", price: 1750 },
    { category: "kabab", name: "Chapli kabab", price: 150 },
    { category: "Burger", name: "Zinger Burger", price: 350 },
    { category: "Burger", name: "Chicken Burger", price: 450 },
    { category: "Burger", name: "Beef Burger", price: 550 },
];

var productsContainer = document.getElementById('productsContainer');
var categorySelect = document.getElementById('categorySelect');

function displayProducts(products) {
    productsContainer.innerHTML = '';
    for (var i = 0; i < products.length; i++) {
        var cardHTML = `
            <div class="card col-3">
            <img src="img/${i + 1}.jpg" class=" card-img" alt="">
                <h3>${products[i].name}</h3>
                <p>Category: ${products[i].category}</p>
                <p>Price: ${products[i].price} Rs</p>
                    <button id="order" onclick="order()" class"btn or">Order Now</button>
            </div>
        `;
        productsContainer.innerHTML += cardHTML;
    }
}
function order(){
    document.getElementById("pop").style.display="block"
    var audio = document.getElementById("myAudio");
    audio.play();
}
document.getElementById("clo").addEventListener("click",()=>{
     document.getElementById("pop").style.display="none"
})
// order()


var categories = [];

for (var i = 0; i < all.length; i++) {
    var isCategoryAdded = false;
    for (var j = 0; j < categories.length; j++) {
        if (categories[j] === all[i].category) {
            isCategoryAdded = true;
            break;
        }
    }
    if (!isCategoryAdded) {
        categories.push(all[i].category);
        var option = document.createElement('option');
        option.value = all[i].category;
        option.textContent = all[i].category.charAt(0).toUpperCase() + all[i].category.slice(1);
        categorySelect.appendChild(option);
    }
}

// Event listener for category select change
categorySelect.addEventListener('change', function() {
    var selectedCategory = this.value;
    var filteredProducts = [];
    if (selectedCategory === "all") {
        filteredProducts = all;
    } else {
        filteredProducts = all.filter(function(product) {
            return product.category === selectedCategory;
        });
    }
    displayProducts(filteredProducts);
});

// Initial display of all products
displayProducts(all);
var remov=document.getElementById("remov").style.display="block"
function fn1() {
    var remov = document.getElementById("remov");
    
    // Play audio


    // Hide element after 2.5 seconds
    setTimeout(function() {
        remov.style.display = "none";
    }, 2500);
}

// Call fn1() to start audio and hide element
fn1();
