function add_user(){
    username=document.getElementById("username").value;
    if(username.length>=5){
        localStorage.setItem("usernameKey",username)
        window.location="kwitter_room.html"
    }
    else{
        window.alert("username should have at least five characters")
    }
}