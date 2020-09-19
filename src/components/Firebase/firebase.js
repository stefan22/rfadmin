import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "./config";

class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Helper */

    this.fieldValue = app.firestore.FieldValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    this.auth = app.auth();
    this.db = app.firestore();

    this.googleProvider = new app.auth.GoogleAuthProvider();
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

  // db user
  doGetUser = uid => {
    return this.db.doc(`users/${uid}`);
  };

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);

  // db users
  doGetUsers = () => this.db.collection("users");

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.doGetUser(authUser.uid)
          .get()
          .then(snapshot => {
            const dbUser = snapshot.data();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              //emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });
}

export default Firebase;
