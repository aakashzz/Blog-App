import React from "react";
import { LogOut, Logo, Container } from "../Index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css"

function Header() {
   const authStatus = useSelector((state) => state.auth.status);
   const navigate = useNavigate();
   const navItems = [
      {
         name: "Home",
         slug: "/",
         active: true,
      },
      {
         name: "Login",
         slug: "/login",
         active: !authStatus,
      },
      {
         name: "Signup",
         slug: "/signup",
         active: !authStatus,
      },
      {
         name: "All Posts",
         slug: "/all-posts",
         active: authStatus,
      },
      {
         name: "Add Post",
         slug: "/add-post",
         active: authStatus,
      },
   ];
   return <header className="py-4 shadow ">
      <Container>
         <nav className="flex ">
            <div className="mr-4"> 
               <Link to='/'>
                  <Logo width='70px' />
                 
               </Link>
            </div>
            <ul className="flex ml-auto items-center">
               {
                  navItems.map((item) =>
               item.active ? (
                  <li key={item.name}>
                     <button 
                     onClick={()=> navigate(item.slug)}
                     className="inline-block px-6 py-2 text-lg font-Inter text-white duration-200 hover:text-slate-400"
                     >{item.name}</button>
                  </li>
               ) : null
               )}
               {
                  authStatus && (
                     <li>
                        <LogOut />
                     </li>
                  )
               }
            </ul>
         </nav>
      </Container>
   </header>
}

export default Header;
