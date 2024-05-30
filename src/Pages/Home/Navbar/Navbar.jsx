
import logo from "../../../assets/library.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  const { logOut, loading, user } = useContext(AuthContext)
  const [theme, setTheme] = useState('light')

  useEffect(()=>{
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  },[theme])

  const handleLogout = ()=>{
    logOut()
  }

  const handleToggle = e =>{
    if(e.target.checked){
      setTheme('synthwave')
    }
    else{
      setTheme('light')
    }
  }

  const links = 
  <>
        <li><NavLink to="/">Home</NavLink></li>
        {/* <li><NavLink to="/addBook">Add Book</NavLink></li> */}
        <li><NavLink to="/allBook">All Book</NavLink></li>
        {/* <li><NavLink to="/borrowedBooks">Borrowed Books</NavLink></li> */}
        <li><NavLink to="/dashboard/borrowedBooks">Dashboard</NavLink></li>
  </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
        <img className="text-center w-20 h-20" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      loading?(
        <p>Loading...</p>
      )
      :
      user ?
      (
        <>
        <div className="avatar">
          <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img title={user?.displayName} src={user?.photoURL} />
          </div>
        </div>
        <button onClick={handleLogout} className="btn btn-ghost btn-sm">Logout</button>
       </>
       )
        : 
       (
        <>
           <Link to="/login"><button className="btn btn-ghost btn-sm">Login</button></Link>
          <Link to="/register"><button className="btn btn-ghost btn-sm">Register</button></Link>
         </>
       )
    }
  </div>
  <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller"/>
</div>
    );
};

export default Navbar;