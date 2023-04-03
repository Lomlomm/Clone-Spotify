// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCGAa35mUGwgwGCFBtxHPhxoLxjep7ooss",
//   authDomain: "spotify-clone-f236d.firebaseapp.com",
//   projectId: "spotify-clone-f236d",
//   storageBucket: "spotify-clone-f236d.appspot.com",
//   messagingSenderId: "342084425992",
//   appId: "1:342084425992:web:925f34a19b6e982a8034bd",
//   measurementId: "G-SYRGJLZSY0"
// };

import { initializeApp } from "firebase/app";
import firebase_config from "../bucket/firebase_config";
import { getStorage, ref, getDownloadURL  } from "firebase/storage";
// Initialize Firebase
const app = initializeApp(firebase_config);



// Create a reference with an initial file path and name
const storage = getStorage(app, firebase_config.storageBucket);
const por_amor_al_odio_album = ref(storage, 'gs://spotify-clone-f236d.appspot.com/por_amor_al_odio.jpg')
const canto_ala_vida_album = ref(storage, 'gs://spotify-clone-f236d.appspot.com/canto_ala_vida.jpg')
const url_amor_al_odio = getDownloadURL(por_amor_al_odio_album).then((url) => {return url}).catch(err=>console.log(err))

const url_canto_a_la_vida = getDownloadURL(canto_ala_vida_album)

const getUrlPAO = async () => {
    const url = await url_amor_al_odio; 
    return url
  };

const url = getUrlPAO();
console.log(url)

const Songs = [
    {
        id: 1, 
        favourite: false, 
        songName: "Por Amor al Odio",
        // Create a reference from a Google Cloud Storage URI
        imgSrc: url
    },
    {
        id: 2, 
        favourite: false, 
        songName: "Artesano del Arte Insano",
        imgSrc: url_amor_al_odio
    },
    {
        id: 3, 
        favourite: false, 
        songName: "Himno de Vivir",
        imgSrc: url_canto_a_la_vida
    }, 
    {
        id: 4, 
        favourite: false, 
        songName: "Donde Duele Inspira 36500 Días (Version Jazz)",
        imgSrc: url_amor_al_odio
    },
    {
        id: 5, 
        favourite: false, 
        songName: "De Paso por lo Eterno (Cancion del extranjero)",
        imgSrc: url_canto_a_la_vida
    },
]

export {Songs}