function displayFavorites(){

    let favorites =
        JSON.parse(
            localStorage.getItem("favorites")
        ) || [];

    let html = "";

    favorites.forEach((item,index)=>{

        html += `
        <div class="wardrobe-card">

            <img src="${item.image}">

            <h3>${item.name}</h3>

            <p>${item.category}</p>

            <button class="delete-btn"
                onclick="removeFavorite(${index})">
                Remove
            </button>

        </div>
        `;
    });

    document.getElementById(
        "favorites"
    ).innerHTML = html;
}

function removeFavorite(index){

    let favorites =
        JSON.parse(
            localStorage.getItem("favorites")
        ) || [];

    favorites.splice(index,1);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    displayFavorites();
}

displayFavorites();