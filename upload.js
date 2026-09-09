function uploadCloth(){

    let file =
        document.getElementById(
            "imageInput"
        ).files[0];

    let reader = new FileReader();

    reader.onload = function(){

        let image = reader.result;

        localStorage.setItem(
            "clothImage",
            image
        );

        document.getElementById(
            "preview"
        ).innerHTML =
        `<img src="${image}" width="200">`;
    };

    reader.readAsDataURL(file);
}