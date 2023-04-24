const h2=document.createElement ("h2");//document.createElement(htmlTag); allows us to create
// HTML elements on the go. for example document.createElement("elementName");
h2.textContent="This content added by JavaScript";

document.querySelector("body").appendChild(h2);//appendChild() is what attaches the h2
//to the document if it was a div it would be ("body").appendChild(div);


// another example is let newElement = document.createElement('input');
//document.body.appendChild(newElement); //(This will add newelement to the body tab )