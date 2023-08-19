var arr = [];

function getData(){

    var username = document.getElementById('username');
    if(username.value.trim()=="")   return false;

    var contact = document.getElementById('contact');
    if(contact.value.trim()=="")   return false;

    var email = document.getElementById('email');
    if(email.value.trim()=="")   return false;

    var password = document.getElementById('pass');
    if(password.value.trim()=="")   return false;

    var cnfpassword = document.getElementById('cnfpass');
    if(cnfpassword.value.trim()=="")   return false;
    
    if(password.value == cnfpassword.value){
        var obj = {
            username : username.value,
            contact : contact.value,
            email : email.value,
            password : password.value,
            cnfpassword : cnfpassword.value
        };
    }
    else{
        alert("Password Mismatch");
    }
   
    console.log(obj);

    var res = localStorage.getItem("users");

    if(res){
        arr = JSON.parse(res);
        var flag = 0;
        for(var index in arr){
            if(arr[index].email == obj.email){
                flag = 1;
                break;
            }
        }
        if(flag){
            alert("Email already Exist");
        }
        else{
            arr  = [...JSON.parse(res),obj];
        }
    }
    else{
        arr.push(obj);
    }
    localStorage.setItem("users",JSON.stringify(arr));

}




console.log(arr);
function loginAdmin(){
    var count ;
    var logemail = document.getElementById('logemail').value;
    var logpass = document.getElementById('logpass').value;
    
    
    var res = localStorage.getItem("users");
    var status = false;
    if(res){
        arr = JSON.parse(res);
        for(var index in arr){
            if(arr[index].email == logemail && arr[index].password == logpass){
                count = index;
                status = true;
               break;
            }
        }
    }
    console.log(count);
    if(status){
        sessionStorage.setItem("loginuser",JSON.stringify(arr[count]));
        sessionStorage.setItem('loginuserindex',JSON.stringify(count));
        location.href = "admin.html";
    }
    else{
        alert("No User Found  ");
    }
}


function loginUser(){
    var count ;
    var logemail = document.getElementById('userlogemail').value;
    var logpass = document.getElementById('userlogpass').value;
    
    
    var res = localStorage.getItem("users");
    var status = false;
    if(res){
        arr = JSON.parse(res);
        for(var index in arr){
            if(arr[index].email == logemail && arr[index].password == logpass){
                count = index;
                status = true;
               break;
            }
        }
    }
    if(status){
        sessionStorage.setItem("loginuser",JSON.stringify(arr[count]));
        sessionStorage.setItem('loginuserindex',JSON.stringify(count));
        location.href = "User.html";
    }
    else{
        alert("No User Found  ");
    }
}