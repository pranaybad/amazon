 var firebaseConfig = {
     apiKey: "AIzaSyAanjjG04TQqnerR3ceanBL5sM8gCKkZyI",
     authDomain: "clone-cd354.firebaseapp.com",
     projectId: "clone-cd354",
     storageBucket: "clone-cd354.appspot.com",
     messagingSenderId: "513972149038",
     appId: "1:513972149038:web:002bba8c1eae8961d6b8bf",
     measurementId: "G-778S65H4K3"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();
 var db = firebase.firestore();