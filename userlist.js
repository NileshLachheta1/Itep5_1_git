
function userList(){
    var table ;
    var arr = [];
    // console.log("hi");
    var res = localStorage.getItem("users");
    if(res){
        table += `<table border = '2' cellpadding = '8' cellspacing = '0'>
        <thead><th>S.No</th><th>Name</th><th>Contact</th><th>Email</th></thead>`;
        arr = JSON.parse(res);
        var count = 1;
        for(var index in arr){
            table +="<tr>";
            // document.write(" &emsp;"+arr[index].username+"&emsp;"+arr[index].contact+" &emsp;"+arr[index].email);
            table+="<td>"+count +"</td><td>"+arr[index].username+"</td><td>"+arr[index].contact+"</td><td>"+arr[index].email+"</td>";
            table+="</tr>";
        }
        table+="</table>";
        document.getElementById("show").innerHTML = table;
    }
}