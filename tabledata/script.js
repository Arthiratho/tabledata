async function postData(){
    
    var forData = {
name : document.getElementById("name").value,
email : document.getElementById("email").value,
country : document.getElementById("country").value,
state : document.getElementById("state").value,
city : document.getElementById("city").value

    }

    try{

        var postData = await fetch("https://61f3f50d10f0f7001768c778.mockapi.io/name",{
            method : "POST",
            body : JSON.stringify(forData),
            header:{
                "Content-type": "application/json"
            }
               })
               alert("data stored")
               getData()
    }catch (error) {
alert("somethg went wrong")
    }
}

async function getData(){
    try{
        var userData = await fetch("https://61f3f50d10f0f7001768c778.mockapi.io/name");
var user = await userData.json();
console.log(user);
var tbody = document.getElementById("tbody");
tbody.innerText = ""

user.forEach(user => {
    var tr = document.createElement("tr");

    var idTd = document.createElement("td");
    idTd.innerText = user.id;

    var nameTd = document.createElement("td");
    nameTd.innerText = user.name;

    var emailTd = document.createElement("td");
    emailTd.innerText = user.email;

    var countryTd = document.createElement("td");
    countryTd.innerText = user.country;

    var stateTd = document.createElement("td");
    stateTd.innerText = user.state;

    var cityTd = document.createElement("td");
    cityTd.innerText = user.city;

    tr.appendChild(idTd)
    tr.appendChild(nameTd)
    tr.appendChild(emailTd)
    tr.appendChild(countryTd)
    tr.appendChild(stateTd)
    tr.appendChild(cityTd)
    tbody.appendChild(tr)
});
        
    }catch{

    }
}
getData()