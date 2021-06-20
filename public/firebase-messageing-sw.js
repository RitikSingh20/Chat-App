 
importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-messaging.js');
 
firebase.initializeApp({
    apiKey: "AIzaSyCphLqgJYo_8rcGvSfy3rmjHSllagjwR5M",
    authDomain: "chat-web-app-c7a83.firebaseapp.com",
    databaseURL: "https://chat-web-app-c7a83-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-web-app-c7a83",
    storageBucket: "chat-web-app-c7a83.appspot.com",
    messagingSenderId: "162726332294",
    appId: "1:162726332294:web:817674f14a0c704692ce07"
  });

 
firebase.messaging();
