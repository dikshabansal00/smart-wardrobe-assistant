function savePlanner(){

    const planner = {

        monday:
        document.getElementById("monday").value,

        tuesday:
        document.getElementById("tuesday").value,

        wednesday:
        document.getElementById("wednesday").value,

        thursday:
        document.getElementById("thursday").value,

        friday:
        document.getElementById("friday").value,

        saturday:
        document.getElementById("saturday").value,

        sunday:
        document.getElementById("sunday").value
    };

    localStorage.setItem(
        "planner",
        JSON.stringify(planner)
    );

    alert("Planner saved successfully!");
}

function loadPlanner(){

    const planner =
        JSON.parse(
            localStorage.getItem("planner")
        );

    if(!planner) return;

    document.getElementById("monday").value =
        planner.monday || "";

    document.getElementById("tuesday").value =
        planner.tuesday || "";

    document.getElementById("wednesday").value =
        planner.wednesday || "";

    document.getElementById("thursday").value =
        planner.thursday || "";

    document.getElementById("friday").value =
        planner.friday || "";

    document.getElementById("saturday").value =
        planner.saturday || "";

    document.getElementById("sunday").value =
        planner.sunday || "";
}

loadPlanner();