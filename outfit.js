function suggestOutfit(weather, occasion){

    if(weather === "Rain" &&
       occasion === "College"){

        return "Hoodie + Jeans + Sneakers";
    }

    if(weather === "Clear" &&
       occasion === "Party"){

        return "Dress + Heels";
    }

    if(weather === "Cold"){

        return "Jacket + Boots";
    }

    return "Casual Outfit";
}