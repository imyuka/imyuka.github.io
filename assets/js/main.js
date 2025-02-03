const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/png/monogram-black-hq.png") {
    myImage.setAttribute("src", "images/png/monogram-hq.png");
  } else {
    myImage.setAttribute("src", "images/png/monogram-black-hq.png");
  }
});

let myButton = document.querySelector("button");
let myHeader = document.querySelector("h1");

function setUsername() {
  const myName = prompt("Enter your name bellow, please ^_^");
  if (!myName) {
    setUsername();
  } else {
    localStorage.setItem("name", myName);
    myHeader.innerHTML = `Welcome, ${myName}!`;
  }
}

if (!localStorage.getItem("name")) {
  setUsername();
} else {
  const storedUser = localStorage.getItem("name");
  myHeader.innerHTML = `Welcome back, ${storedUser}!`;
}
myButton.addEventListener("click", setUsername);