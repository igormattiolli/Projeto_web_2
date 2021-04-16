import { GlobalStyle } from "./styles/global";
import firebase from "firebase";
import { useEffect } from "react";
import Routes from "./Router";

export function App() {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAufHhbm2zyHZylmpNS348FLZ6mKQIXHvc",
        authDomain: "projeto-desenvolvimento-web.firebaseapp.com",
        projectId: "projeto-desenvolvimento-web",
        storageBucket: "projeto-desenvolvimento-web.appspot.com",
        messagingSenderId: "274826872949",
        appId: "1:274826872949:web:e62335a2a2127c8d52503c",
        measurementId: "G-73JQTH27KP",
      });
    }
  }, []);
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}
