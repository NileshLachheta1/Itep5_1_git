function cartItems() {
    var showCartItems = document.getElementById("showCartItems");
    var entries = JSON.parse(localStorage.getItem("entries"));
    var activeUser = JSON.parse(sessionStorage.getItem("activeUser"));
    for (var key in entries) {
        if (entries[key].email == activeUser.email) {
            var product = entries[key]["products"];
        }
    }

    var DisplayCartItem = "";
    for (var index in product) {
        DisplayCartItem += `
                <div class="card col col-lg-3 col-md-6 col-sm-9" style="width: 18rem; margin: 2vw">
                    <img src="${product[index]['image']}" class="card-img-top" alt="${product[index]["name"]}" style="height: 40vh">
                    <div class="card-body">
                        <h5 class="card-title">${product[index]["productname"]}</h5>
                        <p class="card-text">${product[index]["price"]}</p>
                        <p class="card-text">${product[index]["quantity"]}</p>
                        <a href="#" class="btn btn-danger" onclick ="" >Remove</a>
                    </div>
                </div>
              `;
    }
    // console.log(showCartItems);
    showCartItems.innerHTML = DisplayCartItem;
}


// RemoveFromCart(${index})