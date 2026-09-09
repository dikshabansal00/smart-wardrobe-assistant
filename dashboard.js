function loadDashboard() {

    let clothes =
        JSON.parse(localStorage.getItem("clothes"))
        || [];

    let favorites =
        JSON.parse(localStorage.getItem("favorites"))
        || [];

    let planner =
        JSON.parse(localStorage.getItem("planner"))
        || {};

    document.getElementById("totalClothes")
        .innerText = clothes.length;

    document.getElementById("totalFavorites")
        .innerText = favorites.length;

    let count = 0;

    for(let day in planner){
        if(planner[day] !== ""){
            count++;
        }
    }

    document.getElementById("plannedDays")
        .innerText = count;
}

loadDashboard();