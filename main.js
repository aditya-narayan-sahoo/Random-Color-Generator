const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  document.getElementById("code").innerText = randomCode;

  // navigator.clipboard.writeText(randomCode); //copies the hex code to the clipboard
};

document.getElementById("btn").addEventListener("click", getColor); //event call

getColor(); // initial call
