
function logout(){
    console.log("hii");
    window.location.href = "index.html";
}

function addProduct(){
    
    var productid = document.getElementById("productid").value;
    var productname = document.getElementById('productname').value;
    var price = document.getElementById('productprice').value;
    var quantity = document.getElementById('productquantity').value;
    var image = "images/" + (document.getElementById("productimage").files[0].name);
    // var image = document.getElementById('productimage').files[0].name;
    // console.log(" "+productid+" "+productname+" "+price+" "+quantity+" "+image);
    alert(image);
    
    var obj = { 
            productid : productid,
            productname : productname,
            price : price,
            quantity : quantity,
            image : image
        }


    var arr = [];
    var res = localStorage.getItem("products");
    if(res){
        arr = JSON.parse(res);
        var status = false;
        for(var index in arr){
            if(arr[index].productid==productid){
                status = true;
                break;
            }
        }
        if(status){
            alert("Product Already Exist");
        }
        else{
            arr  = [...JSON.parse(res),obj];
        }
    }
    else{
            arr.push(obj);
    }
    localStorage.setItem("products",JSON.stringify(arr));

}

// _____________________________________________________
function adminAddItemToHome() {
    var showAllProduct = document.getElementById("show");
    var res = JSON.parse(localStorage.getItem("products"));
    if (res) {
        var showProductItems = "";
        for (var index in res) {
            showProductItems += `
            <div class="card col col-lg-3 col-md-6 col-sm-9 d-flex" style="width: 22rem; margin: 2vw">
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
    var entries = JSON.parse(localStorage.getItem("users"));
}

// _____________________________________________________


// _____________________________________________________
function EditDeletePage() {
    var EditDeleteProductHere = document.getElementById("EditDeleteProductHere");
    var res = JSON.parse(localStorage.getItem("products"));
    if (res) {
        var EditDeleteProduct = "";
        for (var index in res) {
            EditDeleteProduct += `
                <div class="card col col-lg-3 col-md-6 col-sm-9" style="width: 22rem; margin: 2vw">
                    <img src="${res[index]['image']}" class="card-img-top" alt="${res[index]["name"]}" style="height: 40vh">
                    <div class="card-body">
                        <h5 class="card-title">${res[index]["productname"]}</h5>
                        <p class="card-text">${res[index]["price"]}</p>
                        <p class="card-text">${res[index]["quantity"]}</p>
                        
                        <a href="#" class="btn btn-primary my-4" id ="updateImagesId" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick ="modalDataFill(${index})" >Edit Product</a>
                        <a href="#" class="btn btn-secondary my-4" onclick="deleteProduct(${index})">Delete Product</a>
                    </div>
                </div>
            `;
        }
        EditDeleteProductHere.innerHTML = EditDeleteProduct;
    }
}
// _____________________________________________________
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function modalDataFill(itemIndex) {
    productIndex = itemIndex;
    arr1 = JSON.parse(localStorage.getItem("products"));
    document.getElementById("UpdateproductNameInput").value = arr1[itemIndex]['productname'];
    document.getElementById("UpdateproductPriceInput").value = arr1[itemIndex]['price'];
    document.getElementById("UpdateproductDescInput").value = arr1[itemIndex]['quantity'];
    // document.getElementById("UpdateproductImageInput").files[0].name = arr1[itemIndex]['image'];
}

function Modalupdate() {
    var UpdateproductNameInput = document.getElementById("UpdateproductNameInput");
    var UpdateproductPriceInput = document.getElementById("UpdateproductPriceInput");
    var UpdateproductDescInput = document.getElementById("UpdateproductDescInput");
    var UpdateproductImage = document.getElementById("UpdateproductImageInput");
    if (UpdateproductNameInput.value.trim() == "" || UpdateproductPriceInput.value.trim() == "" || UpdateproductDescInput.value.trim() == "") {
        alert("fill all details");
    }
    else if (UpdateproductImageInput.value == "") {
        var updatedProduct = {
            productname: UpdateproductNameInput.value,
            price: UpdateproductPriceInput.value,
            quantity: UpdateproductDescInput.value,
            image: arr1[productIndex]['image']
        }
    }

    else if (UpdateproductImageInput.value != "") {
        var updatedProduct = {
            productname: UpdateproductNameInput.value,
            price: UpdateproductPriceInput.value,
            quantity: UpdateproductDescInput.value,
            image: "images/" + UpdateproductImageInput.files[0].name
        }
    }

    arr1[productIndex] = updatedProduct;
    localStorage.setItem("products", JSON.stringify(arr1));
    alert("Product Updated succesfully");
    location.reload();
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=============================================
function deleteProduct(index) {
    arr1 = JSON.parse(localStorage.getItem("products"));
    if (confirm("Do You want to delete this product")) {
        arr1.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(arr1));
        alert("Product remove succesfully");
        location.reload();
    }
    else {
        alert("Product not remove");
    }
}

//=============================================






function productList(){
    var arr = [];
    var res = localStorage.getItem("products");
    
    if(res){
        arr = JSON.parse(res);
        for(var index in arr){
            // console.log("hiiiiiiiiiiii");
            console.log(arr[index].productid+"&emsp;"+arr[index].productname+"&emsp;"+arr[index].price+"&emsp;"+arr[index].quantity+"&emsp;"+arr[index].index);
        }
    }else{
        alert("No Product Found ");
    }
}


function changepassword(){

    
}



function updateProfile(){
    let users = JSON.parse(localStorage.getItem('users'));
    let loginuserindex = JSON.parse(sessionStorage.getItem('loginuserindex'));
    let loginUser = JSON.parse(sessionStorage.getItem('loginuser'))


    let updateusername = document.getElementById('updateusername');
    let updatecontact =  document.getElementById('updatecontact');
    let updateoldpass =  document.getElementById("updateoldpass");
    let updatenewpass =  document.getElementById("updatenewpass");
    let updatecnfpass =  document.getElementById("updatecnfpass");

    // console.log(updateoldpass.value+"\t\t"+updatenewpass.value+"\t\t"+updatecnfpass.value)
    console.log(loginuserindex); 
    // console.log(users[loginuserindex].username);
   
}