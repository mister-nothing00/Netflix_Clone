import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDecOQBD0Wb5Jd_uFGrX6bNNQMgbNyxRAM",
  authDomain: "netflix-clone-2994c.firebaseapp.com",
  projectId: "netflix-clone-2994c",
  storageBucket: "netflix-clone-2994c.firebasestorage.app",
  messagingSenderId: "7179399752",
  appId: "1:7179399752:web:38ef7a6fe4e373490dde7d",
  measurementId: "G-3W6ZXGQ0M0"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth= getAuth(app);