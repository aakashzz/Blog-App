import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/authServices.js";
import { login, logout } from "./feature/authSlice.js";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import "./App.css"

function App() {
   const [loading, setLoading] = useState(true);
   const dispatch = useDispatch();

   useEffect(() => {
      authService
         .getCurrentUser()
         .then((userData) => {
            if (userData) {
               dispatch(login({ userData }));
            } else {
               dispatch(logout());
            }
         })
         .finally(() => setLoading(false));
   }, []);

   return !loading ? (
      <div className="min-h-screen flex flex-wrap content-between">
         <div className="w-full block">
            <Header />
            <main className="h-full">
               <Outlet />
            </main>
            <Footer />
         </div>
      </div>
   ) : null;
}

export default App;
