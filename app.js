
//last step'arrys'
let names=["ahmed","mohamed","ali","omer"];
let ages=['22 years old','23 years old','24 years old','25 years old'];
//first step
let container= document.createElement("div");
document.body.appendChild(container);
container.style.textAlign="center";
function element (names,ages){
    //ELEMENTS
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let age = document.createElement("p");
    let image = document.createElement("img");
    //CONTENT
    let titlecontent =document.createTextNode(names);
    let agecontent = document.createTextNode(ages);
    image.src="OIP.jpg";
     //STYLES
    card.style.width="200px";
    card.style.background='#444'
    card.style.color="white";
    card.style.padding="10px";
    card.style.margin="2px";
    card.style.display="inline-block";
    image.style.width="100%";
    //APPEND
    title.appendChild(titlecontent);
    age.appendChild(agecontent);
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(image);
    container.appendChild(card);
//loop
}
for (let i=0;i<4;i++){
    element(names[i],ages[i]);
}


document.title="cards project 'javascript'";

 
