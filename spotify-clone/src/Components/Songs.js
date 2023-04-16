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
// const storage = getStorage(app, firebase_config.storageBucket);
// const por_amor_al_odio_album = ref(storage, 'gs://spotify-clone-f236d.appspot.com/por_amor_al_odio.jpg')
// const canto_ala_vida_album = ref(storage, 'gs://spotify-clone-f236d.appspot.com/canto_ala_vida.jpg')
// const url_amor_al_odio = getDownloadURL(por_amor_al_odio_album)
// const url_canto_a_la_vida = getDownloadURL(canto_ala_vida_album)
// url_amor_al_odio.then((value) => {
//     const srcElement = document.createElement('div');
//     srcElement.innerHTML = value
//     srcElement.className = 'urlPAO'
//     srcElement.style.display = "none"
//     document.body.appendChild(srcElement)
// })


// url_canto_a_la_vida.then((value) => {
//     const srcElement = document.createElement('div');
//     srcElement.innerHTML = value
//     srcElement.className = 'urlCAV'
//     srcElement.style.display = "none"
//     document.body.appendChild(srcElement)
// })

// const urlCAV = document.getElementsByClassName('urlCAV');
// const urlPAO = document.getElementsByClassName('urlPAO');

const urlPAO = "https://firebasestorage.googleapis.com/v0/b/spotify-clone-f236d.appspot.com/o/por_amor_al_odio.jpg?alt=media&token=1164ba50-a1c5-4590-ab0f-193a90f1ce01"
// const getUrlPAO = url_amor_al_odio.then((url) => {
//     console.log(url)
// })

const urlCAV = "https://firebasestorage.googleapis.com/v0/b/spotify-clone-f236d.appspot.com/o/canto_ala_vida.jpg?alt=media&token=96120e54-41f7-4b55-b2a0-cc1507143955"
// const getUrlCAV = url_canto_a_la_vida.then((url) => {
//     console.log(url)
// })

const Songs = [
    {
        id: 1, 
        favourite: false, 
        songName: "Por Amor al Odio",
        songArtist: "Rafael Lechowski",
        // Create a reference from a Google Cloud Storage URI
        songSrc: "https://open.spotify.com/track/48MRnIDd36Zp5XxFgYfEHg?si=4e1ac5d7bc9847d6",
        imgSrc: urlPAO
    
    },
    {
        id: 2, 
        favourite: false, 
        songName: "Artesano del Arte Insano",
        songArtist: "Rafael Lechowski",
        songSrc: "https://open.spotify.com/track/7Cw1jx173XCK9kqvGTjG3Q?si=02456b1772314a8f",
        imgSrc: urlPAO
    },
    {
        id: 3, 
        favourite: false, 
        songName: "Himno de Vivir",
        songArtist: "Rafael Lechowski",
        songSrc: "https://open.spotify.com/track/104Pyy2BeqCc0j0THlRNLB?si=17fe1123dd884d07",
        imgSrc: urlCAV
    }, 
    {
        id: 4, 
        favourite: false, 
        songName: "Donde Duele Inspira 36500 Días (Version Jazz)",
        songArtist: "Rafael Lechowski",
        songSrc: "https://open.spotify.com/track/1DPKz6P8VCpmOV61pkhMDM?si=355e478e44414382",
        imgSrc: urlPAO
    },
    {
        id: 5, 
        favourite: false, 
        songName: "De Paso por lo Eterno (Cancion del extranjero)",
        songArtist: "Rafael Lechowski",
        songSrc: "https://open.spotify.com/track/2rZlaN0elkLITXEXMCQTEk?si=3fdf661053db485d",
        imgSrc: urlCAV
    },
]

export {Songs}