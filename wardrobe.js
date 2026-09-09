function addDress() {

    let name = document.getElementById("dress-name").value;
    let category = document.getElementById("category").value;
    let imageInput = document.getElementById("dress-image");

    if(name === ""){
        alert("Please enter dress name.");
        return;
    }

    let reader = new FileReader();

    reader.onload = function(e){

        let cloth = {
            name: name,
            category: category,
            image: e.target.result
        };

        let clothes =
            JSON.parse(localStorage.getItem("clothes"))
            || [];

        clothes.push(cloth);

        localStorage.setItem(
            "clothes",
            JSON.stringify(clothes)
        );

        displayClothes();

        document.getElementById("dress-name").value = "";
        document.getElementById("dress-image").value = "";
    };

    if(imageInput.files[0]){
        reader.readAsDataURL(imageInput.files[0]);
    }
    else{
        alert("Please select an image.");
    }
}

function displayClothes(){

    let clothes =
        JSON.parse(localStorage.getItem("clothes"))
        || [];

    let html = "";

    clothes.forEach((item,index)=>{

        html += `
<div class="wardrobe-card">

    <img src="${item.image}">

    <h3>${item.name}</h3>

    <p>${item.category}</p>

    <button onclick="addToFavorites(${index})">
        ❤️ Favorite
    </button>

    <button class="delete-btn"
        onclick="deleteDress(${index})">
        Delete
    </button>

</div>
`;
    });

    document.getElementById(
        "wardrobe-list"
    ).innerHTML = html;
}

function deleteDress(index){

    let clothes =
        JSON.parse(localStorage.getItem("clothes"))
        || [];

    clothes.splice(index,1);

    localStorage.setItem(
        "clothes",
        JSON.stringify(clothes)
    );

    displayClothes();
}

displayClothes();

//  fav -->
    function addToFavorites(index){

    let clothes =
        JSON.parse(localStorage.getItem("clothes"))
        || [];

    let favorites =
        JSON.parse(localStorage.getItem("favorites"))
        || [];

    favorites.push(clothes[index]);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    alert("Added to favorites!");
}