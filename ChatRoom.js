var firebaseConfig = {
  apiKey: "AIzaSyAYLM61RYv5MUDBSnSgwwLZHi8HM8KlvSs",
  authDomain: "kwitter-2065a.firebaseapp.com",
  databaseURL: "https://kwitter-2065a-default-rtdb.firebaseio.com",
  projectId: "kwitter-2065a",
  storageBucket: "kwitter-2065a.appspot.com",
  messagingSenderId: "29395929077",
  appId: "1:29395929077:web:f98dc273078bd0833dc2bc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
  document.getElementById("roome").innerHTML += row;
  //End code
});});}
getData();

function addRoom() 
{ 
  room_name = document.getElementById("roome_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "ChattingRoom.html";
}

function redirectToRoomName(name) 
{ 
  console.log(name);
  localStorage.setItem("room_name", names);
  window.location = "ChattingRoom.html";
}
