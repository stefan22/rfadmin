import fb from "../../fb";

const devConfig = {
  apiKey: fb.API_KEY,
  authDomain: fb.AUTH_DOMAIN,
  databaseURL: fb.DATABASE_URL,
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

// const prodConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
