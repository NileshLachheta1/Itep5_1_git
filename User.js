function adminAddItemToHome() {
    var showAllProduct = document.getElementById("showAllProduct");
    var res = JSON.parse(localStorage.getItem("products"));
    if (res) {
        var showProductItems = "";
        for (var index in res) {
            showProductItems += `
            <div class="card col col-lg-3 col-md-6 col-sm-9" style="width: 18rem; margin: 2vw">
            <img src="${res[index]['image']}" class="card-img-top" alt="${res[index]["name"]}" style="height: 40vh">
            <div class="card-body">
                <h5 class="card-title">${res[index]["productname"]}</h5>
                <p class="card-text">${res[index]["price"]}</p>
                <p class="card-text">${res[index]["quantity"]}</p>
                <a href="#" class="btn btn-danger" onclick="addToCart(${index})" >Add To Cart</a>
            </div>
        </div>
      `;
          
        }
        showAllProduct.innerHTML = showProductItems;
    }

    var loginUser = JSON.parse(sessionStorage.getItem("loginuser"));
    var entries = JSON.parse(localStorage.getItem("user"));
    for (var key in entries) {
        if (entries[key]["email"] == loginUser["email"]) {
            document.getElementById("cartCount").innerHTML = entries[key]["products"].length;
        }
    }
}
function updateProfile(){
    var entries = JSON.parse(localStorage.getItem("users"));
    var activeUserindex = JSON.parse(sessionStorage.getItem("loginuserindex"));
    var activeUser = JSON.parse(sessionStorage.getItem("loginuser"));
    console.log(activeUser[activeUserindex].username);
    var name = document.getElementById("updateusername").value = activeUser[activeUserindex].username;
    var contact = document.getElementById('updatecontact').value = activeUser[activeUserindex].contact;
    var email = document.getElementById("updateemail").value = activeUser[activeUserindex].email;
    // var opass = document.getElementById("updateoldpass").value = activeUser[activeUserindex].password;
}

function UpdateUserProfile(){
    var entries = JSON.parse(localStorage.getItem("users"));
    var activeUserindex = JSON.parse(sessionStorage.getItem("loginuserindex"));
    var activeUser = JSON.parse(sessionStorage.getItem("loginuser"));
    console.log(activeUser.email);

    // var name = document.getElementById("updateusername") = activeUser.username;
    // var contact = document.getElementById('updatecontact') = activeUser.contact;
    // var email = document.getElementById("UpdatEmail") = activeUser.email;
    // var opass = document.getElementById("updateoldpass") = activeUser.password;

    var UpdateUsername= document.getElementById("updateusername").value;
    var updatecontact = document.getElementById('updatecontact').value;
    var updateoldpass = document.getElementById("updateoldpass").value;
    var updatenewpass = document.getElementById("updatenewpass").value;
    var updatecnfpass = document.getElementById("updatecnfpass").value;

if(updatecnfpass == updatenewpass){
    alert("Password Matched ");
    entries[activeUserindex]["username"] = UpdateUsername;
    entries[activeUserindex]["contact"] = updatecontact;
    entries[activeUserindex]["password"] = updatenewpass;
    entries[activeUserindex]["cnfpassword"] = updatecnfpass;
}
else{
    alert("Password not  Matched ");
}
    localStorage.setItem("users", JSON.stringify(entries));
    sessionStorage.setItem("loginuser", JSON.stringify(entries));
}


// function addToCart(index) {
//     var activeUser = JSON.parse(sessionStorage.getItem("loginuser"));
//     var entries = JSON.parse(localStorage.getItem("users"));
//     var product = JSON.parse(localStorage.getItem("products"));
//     activeUser["product"].push(product[index]);
//     for (var key in entries) {
//         if (entries[key]["email"] == activeUser["email"]) {
//             entries[key]["product"].push(product[index]);
//         }
//     }
//     localStorage.setItem("users", JSON.stringify(entries));
//     location.reload();
// }



function addToCart(index) {
    var activeUser = JSON.parse(sessionStorage.getItem("loginuser"));
    var entries = JSON.parse(localStorage.getItem("users"));
    var product = JSON.parse(localStorage.getItem("products"));
    // activeUser["product"].push(product[index]);
    console.log(entries);
    for (var key in entries) {
        if (entries[key].email == activeUser.email) {
            // console.log(product[index]);
            console.log(entries[key].product);
            // alert("jhuh ")
            entries[key].product.push(product[index]);
        }
    }
    localStorage.setItem("users", JSON.stringify(entries));
    // location.reload();
}


