import app from "firebase/app";
import fb from "../../fb";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_AUTH_DOMAIN || fb.API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || fb.AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL || fb.API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID || fb.PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || fb.STORAGE_BUCKET,
  messagingSenderId:
    process.env.REACT_APP_MESSAGING_SENDER_ID || fb.MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID || fb.APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID || fb.MESSAGING_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
