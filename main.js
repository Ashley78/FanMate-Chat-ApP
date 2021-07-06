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

function add_user() {
    user_name=document.getElementById("username").value;
    localStorage.setItem("username",user_name);
    window.location="fanmate_room.html";
 }