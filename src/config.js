import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAawd2rb6JIU_ZlX0bYwJRIpR2bmh17QQ8",
  authDomain: "to-do-app-donatao.firebaseapp.com",
  databaseURL: "https://to-do-app-donatao.firebaseio.com",
  projectId: "to-do-app-donatao",
  storageBucket: "to-do-app-donatao.appspot.com",
  messagingSenderId: "439324839507",
  appId: "1:439324839507:web:ace4e45c1edf57e2f000a6",
  measurementId: "G-6J1FEZ1BME"
};

  const app = Firebase.initializeApp(firebaseConfig);
  export const db = app.database();
