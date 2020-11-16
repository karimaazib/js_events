//Fonctionalité 1et 1bis 
 // 1. Find and store the element we want to listen to events on.
 var footer = document.querySelector("footer")
clickCount = 0
 // 2. Add the event listener for the element and function
  footer.addEventListener('click', clickFooter)
 
  // 3. Define the function that will respond to the event.
 function clickFooter (){
clickCount ++
console.log ("click numéro" + clickCount)
 };

//Fonctionalité 2 

var navbar = document.getElementById("navbarHeader");
var buttonNavbar = document.querySelector("button");


buttonNavbar.addEventListener('click', function(){
    
    navbar.classList.toggle('collapse');
});

//Fonctionalité 3

var card = document.getElementsByClassName("card mb-4 box-shadow")[0];
console.log(card)
var buttonedit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]
console.log(buttonedit )

buttonedit.addEventListener('click', function ()
{
    card.style = "color: red"
});

//Fonctionalité 4
var card2 = document.getElementsByClassName("card mb-4 box-shadow")[1];
var buttonedit2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]



buttonedit2.addEventListener('click', function() 
{
    
    if (card2.style.color === 'green'){
    card2.style.color = '' ;
    }
    else
    card2.style.color = "green" 
});


//Fonctionnalité 5
var navbar2 = document.getElementsByTagName("header")[0];
var mylink = document.getElementsByTagName("link")[0];



navbar2.addEventListener('dblclick', function(){
     mylink.remove();
} );
            
//Fonctionalité 6
var cardchange = document.getElementsByClassName("card mb-4 box-shadow")
var buttonview = document.getElementsByClassName("btn btn-sm btn-success")
console.log(buttonview )
var text = document.querySelectorAll(".card-text")
           

buttonview[1].addEventListener("mouseover", () => {text[1].style.display = "none"; card[0].style.width = "20%";});
buttonview[1].addEventListener("mouseout", () => {text[1].style.display = "block";});



//Fonctionnalité 7 

var btnGrey = document.getElementsByClassName("btn btn-secondary my-2");
var rowDiv = document.getElementsByClassName("row");
var lastCard = document.getElementsByClassName(".card")[5];
var firstCard = document.getElementsByClassName(".card")[1];

 

btnGrey[0].addEventListener("click", function(){
rowDiv[0].insertBefore(lastCard, firstCard);

});