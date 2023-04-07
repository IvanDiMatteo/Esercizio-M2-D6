let myH1 = document.getElementsByTagName("h1")[0];
myH1.innerText = "Lo smartphone nel kebab"

let myBody = document.getElementsByTagName("body")[0];
myBody.style.backgroundColor = "lightyellow";

let myAddress = document.getElementById("address");
myAddress.innerText = "Via fasulla 123, Springfield";

let myItemA = document.querySelectorAll("a");
for (let i = 0; i < myItemA.length; i++) {
    myItemA[i].classList.add("link");
}

let myItemImg = document.querySelectorAll("img");
for (let i = 0; i < myItemImg.length; i++) {
    myItemImg[i].classList.toggle("hidden");
    myItemImg[i].style.visibility = "hidden";
}

function randomColor(n) {
    let array = [];  
    for (let i = 0; i < n; i++) {
        let randomNumber = Math.floor(Math.random() * 256);
        array.push(randomNumber);       
    }

    let myColor = "rgb(" + array[0] + ", " + array[1] + ", " + array[2] + ")"

    let myPrice = document.getElementsByClassName("prezzo");
    for (let i = 0; i< myPrice.length; i++) {
        myPrice[i].style.color = myColor
    }
}

let myFunction = randomColor(3)