
let Name;
let Email;
var username ;
let number;
let a = "thanks for registration";
let suggest ="any suggestion";


document.getElementById("submit-button").onclick = function () {
  Name = document.getElementById("name").value;
  Email = document.getElementById("Email").value;
  username = document.getElementById("username").value;
  number = document.getElementById("number").value;

  
  
  document.getElementById("linktag").innerHTML = `<br>Name:${Name} <br>,Email: ${Email} <br>, username : ${username} <br>,number:${number}`


   alert(a);
window.prompt(suggest);

}


