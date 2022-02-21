import fb from "../../fb";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: fb.API_KEY,
  authDomain: fb.AUTH_DOMAIN,
  projectId: fb.PROJECT_ID,
  storageBucket: fb.STORAGE_BUCKET,
  messagingSenderId: fb.MESSAGING_SENDER_ID,
  appId: fb.APP_ID,
  measurementId: fb.MEASUREMENT_ID,
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



