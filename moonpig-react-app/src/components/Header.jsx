
import React from "react";

 function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
       <img src="/img/moonpig-logo.png" alt="" />
        <span className="headerTitleLg">Shop</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1459257831348-f0cdd359235f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBpZyUyMGluJTIwY2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
    </div>
  );
}

export default Header;