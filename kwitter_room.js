
const firebaseConfig = {
      apiKey: "AIzaSyAcQ6b7tM83tudDZVKCft51vf2jSkCdMkM",
      authDomain: "kwitter-4f91f.firebaseapp.com",
      databaseURL: "https://kwitter-4f91f-default-rtdb.firebaseio.com",
      projectId: "kwitter-4f91f",
      storageBucket: "kwitter-4f91f.appspot.com",
      messagingSenderId: "34014066026",
      appId: "1:34014066026:web:838a2a2df637c2df06e113",
      measurementId: "G-CCWFBJF3CX"
    };
    
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
