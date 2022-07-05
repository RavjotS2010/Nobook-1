
const firebaseConfig = {
      apiKey: "AIzaSyBhvKFbzyRgy6-Q77WHwSp8CxfLe8Yxlio",
      authDomain: "nobook-97074.firebaseapp.com",
      databaseURL: "https://nobook-97074-default-rtdb.firebaseio.com",
      projectId: "nobook-97074",
      storageBucket: "nobook-97074.appspot.com",
      messagingSenderId: "471922495051",
      appId: "1:471922495051:web:070773f2fb731bfc8707ce",
      measurementId: "G-2T8Z9RN0D0"
    };
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
