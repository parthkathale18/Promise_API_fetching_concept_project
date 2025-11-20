function getUsers(){
  
  fetch("https://randomuser.me/api/?results=3")
.then((rawdata)=>{
  return rawdata.json()
})

.then((data) => {
 const cards = document.querySelector(".cards");
  cards.innerHTML = "";
  data.results.forEach((user) =>{
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = user.picture.large;
    img.alt = "User Image";
    img.className = "user-img";

    const name = document.createElement("h3");
    name.className = "user-name";
    name.textContent = `${user.name.first} ${user.name.last}`;

    card.appendChild(img);
    card.appendChild(name);
    document.querySelector(".cards").appendChild(card);



  })
})

.catch((err) =>{
  console.log("Error occurred: ", err);
})
}

getUsers();

document.querySelector("#refresh-btn").addEventListener("click", function(){
 getUsers();
})