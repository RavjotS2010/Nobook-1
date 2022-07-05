function addUser() {

    username= document.getElementById("Name").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
}