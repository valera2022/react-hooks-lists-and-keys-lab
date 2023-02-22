import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const newLinks = links.map((link) => (
  <a key={link} href={"#"+ link}>{link}</a>)
  )

    return (
      <nav >{newLinks}</nav>
    )
    
    

    
    
  
  
   //console.log(newLinks)
 

}
//console.log(newLinks.home)
export default NavBar;
