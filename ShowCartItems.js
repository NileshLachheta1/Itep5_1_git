function cartitem(){
    // alert("fjovj")
          var showCartItems = document.getElementById("showCartItems");
        var entries = JSON.parse(localStorage.getItem("users"));
        var activeUser = JSON.parse(sessionStorage.getItem("loginuser"));
        for (var key in entries) {
            if (entries[key].email == activeUser.email) {
                var product = entries[key]["product"];
            }
        }
    
        var DisplayCartItem = "";
        for (var index in product) {
            DisplayCartItem += `
                    <div class="card col col-lg-3 col-md-6 col-sm-9" style="width: 22rem; margin: 2vw">
                        <img src="${product[index]['image']}" class="card-img-top" alt="${product[index]["name"]}" style="height: 40vh">
                        <div class="card-body">
                            <h5 class="card-title">${product[index]["productname"]}</h5>
                            <p class="card-text">${product[index]["price"]}</p>
                            <p class="card-text">${product[index]["quantity"]}</p>
                            <a href="#" class="btn btn-danger" onclick ="RemoveItem(${index})" >Remove</a>
                        </div>
                    </div>
                  `;
        }
        showCartItems.innerHTML = DisplayCartItem;
  }
function RemoveItem(cartIndex) {
    var users = JSON.parse(localStorage.getItem("users"));
    var activeUser = JSON.parse(sessionStorage.getItem("loginuser"));
    for (var key in users) {
        if (users[key].email == activeUser.email) {
            
                users[key]["product"].splice(cartIndex, 1);
                alert("Successfully Removed");
                localStorage.setItem("users", JSON.stringify(users));
                location.reload();
        }
    }
}
