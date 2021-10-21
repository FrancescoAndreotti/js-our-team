const myArray = [
    ["Wayne Barnett", "Founder & CEO", "img/wayne-barnett-founder-ceo.jpg"],
    ["Angela Caroll", "Chief Editor", "img/angela-caroll-chief-editor.jpg"],
    ["Walter Gordon", "Office Manager", "img/walter-gordon-office-manager.jpg"],
    ["Angela Lopez", "Social Media Manager", "img/angela-lopez-social-media-manager.jpg"],
    ["Scott Estrada", "Developer", "img/scott-estrada-developer.jpg"],
    ["Barbara Ramos", "Graphic Designer", "img/barbara-ramos-graphic-designer.jpg"]
];

console.log(myArray);


//inserire valori presenti nell'array nel dom
//con un ciclo lungo quanto l'array creo gli elementi e assegno il valore presente nell'array all'indice corretto
//inserire valori inseriti nel form e poi inserirli nel dom


//recupero dal dom il container
const teamContainer = document.querySelector(".team-container");





for (i = 0; i < myArray.length; i++) {

    //creo la card
    const teamCard = document.createElement("div");

    teamCard.classList.add("team-card");


    //creo card img e aggiungo elementi all'interno
    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    cardImage.innerHTML += `<img src="${myArray[i][2]}" alt="${myArray[i][0]}">`;

    //creo div card text e elementi all'interno
    const cardText = document.createElement("div");
    cardText.classList.add("card-text");
    cardText.innerHTML += `<h3>${myArray[i][0]}</h3><p>${myArray[i][1]}</p>`;





    teamCard.append(cardImage, cardText);


    //Aggiungo le card al container
    teamContainer.append(teamCard);

}