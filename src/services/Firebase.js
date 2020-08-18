import * as firebase from "firebase";

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyAaZgom5rMe2IAXliSmBSu7GEJPJxewF84",
  authDomain: "instagram-react-1b1ac.firebaseapp.com",
  databaseURL: "https://instagram-react-1b1ac.firebaseio.com",
  projectId: "instagram-react-1b1ac",
  storageBucket: "instagram-react-1b1ac.appspot.com",
  messagingSenderId: "911777993944",
  appId: "1:911777993944:web:98ff079f7bba17cb5a73ad",
  measurementId: "G-G5YEN3723M",
};

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
