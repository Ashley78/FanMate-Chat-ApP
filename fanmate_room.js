var firebaseConfig = {
    apiKey: "AIzaSyCcaGpc-Zm9ku6m3jH_XYl1GQjFP6hULHo",
    authDomain: "fanmate-chat-app.firebaseapp.com",
    databaseURL: "https://fanmate-chat-app-default-rtdb.firebaseio.com",
    projectId: "fanmate-chat-app",
    storageBucket: "fanmate-chat-app.appspot.com",
    messagingSenderId: "553136385789",
    appId: "1:553136385789:web:39fd6d70f1bd9649671894",
    measurementId: "G-261T5ER51K"
  };
 
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function add_room(){
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({purpose:"adding user"});
      localStorage.setItem("roomname",roomname);
      window.location="fanmate_page.html";
}

function getData() {firebase.database().ref("/").on('value',
        function(snapshot) {document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("roomname"+Room_names);

        row="<div class='roomname' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
  });});}
getData();

function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("roomname",roomname);
        window.location="fanmate_page.html";
}
function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("roomname");
        window.location="fanmate_page.html";

}