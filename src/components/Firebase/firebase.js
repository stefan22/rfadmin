import app from "firebase/app";
import "firebase/auth";
import config from "./config";

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  // auth signup
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // auth signin
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // auth signout
  doSignOut = () => this.auth.signOut();

  // auth password reset
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  // auth password update
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
