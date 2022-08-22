import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'


const Navbar = () => {

  const simpleLinks = [
    { name: "Főoldal", link: "/" },
    { name: "Rólunk", link: "/rolunk" },
    { name: "Edzéstervezés", link: "/edzestervezes", },
    { name: "Egyesület", link: "/egyesulet", },
    { name: "Esemenyek", link: "/esemenyek" },
    { name: "Eredmények", link: "/eredmenyek" },
    { name: "Galéria", link: "/galeria" },
  ];
  
  const highlightedLinks = [
    { name: "Edzéstervezés", link: "/edzestervezés" },
    { name: "Tagság", link: "/tagsag" },
    { name: "Kapcsolat", link: "/kapcsolat" },
  
  ]

  const [activeBar, setActiveBar] = useState( false );

  const router = useRouter();

  const firstPageID = [...simpleLinks, ...highlightedLinks].findIndex( ( link ) => {
      
    return link.link == router.pathname;
    
  } );

  const [activePageID, setActivePageID] = useState(firstPageID);

  
  useEffect(() => {

    const allLink = document.querySelectorAll( ".navbar .link-item" );

    for (let i = 0; i < allLink.length; i++) {
      const link = allLink[i];


      if( i === activePageID ){

        link.classList.add('active');
        continue;
      }
      
      link.classList.remove('active');
      
    }

   
  },[activePageID]);

  

  const handleNavLinkClick = (event) =>{

    const tartgetHref = event.target.getAttribute("href");  

    const tartgetID = [...simpleLinks, ...highlightedLinks].findIndex( ( link ) => {

      return link.link == tartgetHref;

    } );
    
    setActivePageID( tartgetID );
   
  }

  return (

    <div className={ "navbar" + ( activeBar ? " open" : "" )  } >

      <div className='wrapper'>

        <div className="hamburger-wrapper" onClick={() => setActiveBar(!activeBar) }>

          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>

        </div>

        <div className="logo-container">

          <img src="/logo.png" alt="Logo" className='logo' />

        </div>

      </div>

      <div className="menu-content">

          <ul className="menu-items">

            {simpleLinks.map((item, i) => (
              <li className="" key={`${i * 4}`} onClick={handleNavLinkClick} >
                <Link href={item.link}>
                  <a className="link-item" >{item.name}</a>
                </Link>
              </li>
            ))}

            <br/>
            <br/>

            {highlightedLinks.map((item, i) => (
              <li className="" key={`${i * 4}`} onClick={handleNavLinkClick}>
                <Link href={item.link}>
                  <a className="link-item">{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>

      </div>

    </div>
   
  )
}

export default Navbar