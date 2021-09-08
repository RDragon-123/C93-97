
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDSyDnn_UDhi0RDMkUwqg29rlDlo1Kuvvs",
      authDomain: "kwitter-9a23d.firebaseapp.com",
      databaseURL: "https://kwitter-9a23d-default-rtdb.firebaseio.com",
      projectId: "kwitter-9a23d",
      storageBucket: "kwitter-9a23d.appspot.com",
      messagingSenderId: "568325377501",
      appId: "1:568325377501:web:1e8649180b044dc712fa34",
      measurementId: "G-T6KFMS7BH0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("usernameKey")
document.getElementById("username").innerHTML="Welcome "+username+"!"
function addroom(){
      room_name=document.getElementById("room_name").value;
      localStorage.setItem("roomnamekey",room_name)
      firebase.database().ref("/").child.(room_name).update({purpose:"addingroomname"});
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
