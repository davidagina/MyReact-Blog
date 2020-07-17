import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
  // setTimeout(() => {
  //   props.history.push("/about");
  // }, 2000);
  return (
    // <nav className="nav-bar nav-bar-dark bg-dark">
    //   <div className="container">
    //     <a className="brand-logo">MY React Blog</a>
    //     <ul className="right">
    //       <li>
    //         <Link to="/">Posts</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>

    <nav className="navbar navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        My React Blog
      </Link>
    </nav>
  );
};

export default withRouter(Navbar);
