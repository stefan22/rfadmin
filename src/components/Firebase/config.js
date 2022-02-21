import fb from "../../fb";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkm7qxmtzaxjqy8ePkiCjN-ZnxkVIdj0E",
  authDomain: "dashboard-adeff.firebaseapp.com",
  projectId: "dashboard-adeff",
  storageBucket: "dashboard-adeff.appspot.com",
  messagingSenderId: "375311919703",
  appId: "1:375311919703:web:40900eefc0d467eb485112",
  measurementId: "G-CKVC8WZENT"
};


const prodConfig = {
  apiKey: fb.API_KEY,
  authDomain: fb.AUTH_DOMAIN,
  databaseURL: fb.DATABASE_URL,
  projectId: fb.PROJECT_ID,
  storageBucket: fb.STORAGE_BUCKET,
  messagingSenderId: fb.MESSAGING_SENDER_ID,
  appId: fb.APP_ID,
  measurementId: fb.MEASUREMENT_ID,
};

export default process.env.NODE_ENV === "production"
  ? prodConfig
  : devConfig;



