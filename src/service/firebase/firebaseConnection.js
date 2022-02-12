import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyByPcEBzTyjKvU5B-POqDd0FS4H3G_83RM",
    authDomain: "formulario-de-cadastro-e1d73.firebaseapp.com",
    projectId: "formulario-de-cadastro-e1d73",
    storageBucket: "formulario-de-cadastro-e1d73.appspot.com",
    messagingSenderId: "992519920771",
    appId: "1:992519920771:web:f08137979420a1fe57cfb6",
    measurementId: "G-LX2WGBW5HS"
  };


if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
    console.log('new connection');
}

export default firebase;