import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"




const Navbar = () => {






  const handlePhonemenu = () => {
    let phoneMenu = document.getElementById("Menu");
    let menuLogo = document.getElementById("menuLogo");
    let CloseLogo = document.getElementById("CloseLogo");



    phoneMenu.style.visibility = "visible";
    CloseLogo.style.visibility = "visible";
    menuLogo.style.visibility = "hidden";




  }

  const CloseMenu = () => {
    let phoneMenu = document.getElementById("Menu");
    let menuLogo = document.getElementById("menuLogo");
    let CloseLogo = document.getElementById("CloseLogo");


    phoneMenu.style.visibility = "hidden";
    CloseLogo.style.visibility = "hidden";
    menuLogo.style.visibility = "visible";

  }





  return (
    <div className="Navbar">
      <Link to={"/"} className='nav-logo' >
        <h1 >CanvasVault</h1>
        {/* <img src="https://image.pitchbook.com/TMTSF7X3yRd94okNpbaKBODBx1j1649170609730_200x200" alt="Risidio"  /> */}
      </Link>
      <div className="navbar-content">
        <Link to={"/"} className="nav-Links" ><h3>Home</h3></Link>
        <Link to={"/about"} className="nav-Links"><h3>About</h3></Link>
        <Link to={"/collection"} className="nav-Links"><h3>Collections</h3></Link>
        <Link to={"/cart"} className="nav-cart-link" >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA90lEQVR4nO3WPWuCMRSG4ZsOnVqwi3R3cCgOKm5KXR2c2lH8BeLQ2VHq4uKmdioUxK/f+JQXjiAuJiZvpNgHsh1yEfJxAjcZwViwtzEXNK8B7wVbwXMS/BDB0PB3UkbQMHiSGr4XrAQ7QSE1PrJVt1PDnZPDFmuMz8HFnOCly6pnOcADF7ifA9xygV8iozunWyK4E3xHhKdn0SP8IyLc84FfI8IVH/jBGkYouspeRGfY8M8I8MgLNfgtAty9BH4S/ASg2c149IYNL2dtUrDxANf2wShdhN5uBHXBV9ZhBLXQOufYRIf9W4TW/Qm4ZpMuBNXQuv+QKr+f0gD7Tetk0wAAAABJRU5ErkJggg==" alt="cart" className='nav-cart' />

        </Link>
      </div>


      {/* Phone content  */}

      <div className="phone-content">

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAUUlEQVR4nO3YgQnAQAzDQI3ezdUlCt83OsgIBhFIkpygPguHI3AEjsARzIw9SZJQxv8OjsAROILT+V3GJ0nyJVcedI7AETgCR3B6pGV8knCzFysxbeBnpwXzAAAAAElFTkSuQmCC" alt='menu' className='menu-logo' id='menuLogo' onClick={handlePhonemenu} />

        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABPklEQVR4nO2YS07DMBRFvRwYdAtAO+A7ohSYAcNSShmyZBYApRW/gyIaKUrsyBAn2NE949i5R5aT954xQgghhBAiOoABcBlwvxEwDLWf70u3gSfgA7gOsN8O8AwsO5MpSOR8NpEBdoGXwn5LYC9savuLLzYnQVMZYB94Le31BczbSW+XebcEmAaQeGg3fTXIuUPm1mPtAbCyrF10k74aaAK8WQLNatYcRiXxF5loJXKAM4fMXeGZI4fEvYkJ4ARYW4LOk5HIAU4dJ1N7WlECHFtOpnJKJgVwy6Qj0RsR7Jc+jUveq8sOjF2Bk/n84v4hzlL6q0+SL1H4kfhVBVxT+XZbvnuU8VPPXuT/ZbA3VlmXeNOwscp4bDd931pdYKs0fGg0SdlMULofPpRkMokrk+I4qFcDOiGEEEIIYXz4BtnffLYImZRxAAAAAElFTkSuQmCC" alt='close' className='close-logo' id="CloseLogo" onClick={CloseMenu} />



        <div className="phone-menu" id='Menu' >
          <Link to={"/"} className="phone-Links" ><h3>Home</h3></Link>
          <Link to={"/about"} className="phone-Links"><h3>About</h3></Link>
          <Link to={"/collection"} className="phone-Links"><h3>Collections</h3></Link>
          <Link to={"/cart"} className="phone-Links"><h3>Cart</h3></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar