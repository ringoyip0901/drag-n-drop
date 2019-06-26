const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: ""
});

var db = firebase.firestore();

class FirebaseAction {
  saveGoals = goals => {
    console.log("saving goals");
    return db
      .collection("users-goals")
      .doc("RANDOM-ID-2")
      .set({
        needs: {
          list: goals.columns["column-1"].taskIds
        },
        wants: {
          list: goals.columns["column-2"].taskIds
        },
        wishes: {
          list: goals.columns["column-3"].taskIds
        }
      });
  };
}

export default FirebaseAction;
