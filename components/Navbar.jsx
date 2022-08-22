import { useState } from "react"

const Navbar = () => {

  const [activeBar, setActiveBar] = useState( false );

  const handleMenuClick = (e) =>{

    console.log( e.composedPath() );

  }

  return (

    <div className='navbar'>

      <div className='wrapper'>

        <div className="hamburger-wrapper" onClick={handleMenuClick}>

          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>

        </div>

        <div className="logo-container">

          <img src="/logo.png" alt="Logo" className='logo' />

        </div>

      </div>

    </div>
   
  )
}

export default Navbar