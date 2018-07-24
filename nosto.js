let jakt = document.getElementsByClassName('level0 parent ')[13];
let recomms = document.querySelector('#frontpage-nosto-plassert-opp');
let head = document.querySelector('.mdl-cell--hide-phone');
let cartValue = Number(document.querySelector('.count span').innerText);
let heroImg = document.querySelectorAll("div.slick-slide a img");
let hero = document.querySelectorAll("div.slick-slide");
let time;

//exit intent popup builder
let popup = document.createElement("div");
let header = document.createElement("p");
let warning = document.createElement("h2");
let link = document.createElement("a");
let close = document.createElement("p");
let container = document.querySelector(".mdl-layout__container");
let url = "https://www.fjellsport.no/checkout/onepage/";

popup.style = "z-index: 10000; background: white; position: absolute; display: none; flex-direction: column; justify-content: center; align-items: center; text-align: center; font-family: Helvetica; height: 250px; width: 550px; border: 1px solid grey; border-radius: 10px; margin-top: 100px; margin-left: 37%;";
header.innerHTML = "<p><i>Before you leave...</i></p>";
header.style = "font-size: 20px; margin-top: 20px;"
warning.innerHTML = "<h2>You still have <span>"+` ${cartValue} items in your cart`+"</span></h2>";
warning.style = "margin: -40px auto 0 auto; width: 90%;"
link.innerHTML = "<a href="+`${url}`+">GO TO CART</a>";
link.style = "font-size: 24x; background: #ed8026; margin: 0 auto; color: white; padding: 10px 20px; text-decoration: none; text-decoration-style: white;"
close.innerHTML = "<p>Close</p>";
close.style = "cursor: pointer; margin-top: 10px";
close.className = "close-btn";

//appends and moves popup into correct location
popup.appendChild(header);
popup.appendChild(warning);
popup.appendChild(link);
popup.appendChild(close);
document.body.appendChild(popup);
popup.parentNode.insertBefore(popup, popup.parentNode.firstChild);



const change = () => {
	jakt.firstChild.style.color = 'red';
	jakt.firstChild.style.fontWeight = 'bold';
	jakt.parentNode.insertBefore(jakt, jakt.parentNode.firstChild);
	head.parentNode.insertBefore(recomms, head.nextSibling);
	//heroImg 2 & 5 must be same img for loop
	heroImg[2].src = "https://i.imgur.com/deBNrlC.png";
	heroImg[3].src = "https://i.imgur.com/7JAdYdd.png";
	heroImg[5].src = "https://i.imgur.com/deBNrlC.png";
	hero.forEach(i => i.style.maxHeight = "400px");
}

//on mouseleave starts 5s timer for popup
const exit = () => {
   if(cartValue > 0) {
      time = setTimeout(() => {
         popup.style.display = "flex";
         container.style.filter = "blur(5px)";
     }, 5000)
   }
}

const closePop = () => {
   popup.style.display = "none";
   container.style.filter = "blur(0px)";
}

//cancels popup timeout if mouse enters pages again
const cancelTime = () => {
	clearTimeout(time);
}

document.addEventListener('mouseenter', cancelTime);
document.addEventListener('mouseleave', exit);
close.addEventListener('click', closePop);

change();
