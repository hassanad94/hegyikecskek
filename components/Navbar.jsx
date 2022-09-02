import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import Image from "next/image";


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
    { name: "Edzéstervezés", link: "/edzestervezes" },
    { name: "Tagság", link: "/tagsag" },
    { name: "Kapcsolat", link: "/kapcsolat" },
  
  ]

  const [activeBar, setActiveBar] = useState( false );

  const router = useRouter();

  const [activeMenuPath, setActiveMenuPath] = useState(router.pathname);

  
  useEffect(() => {

    const allLink = document.querySelectorAll( `.navbar .menu-content .link-item` );

    for (let i = 0; i < allLink.length; i++) {
      
      const link = allLink[i];
      
      if( link.attributes.href.value === activeMenuPath ){

        link.closest( "li" ).classList.add('active');
        continue;

      }
      
      link.closest( "li" ).classList.remove('active');
      
    }

   
  },[activeMenuPath]);

  

  const handleNavLinkClick = (event) => {

    const tartgetHref = event.target.getAttribute("href");  
    //TO-DO csak mobilon kapcsolgassa desktopon ne
    setActiveBar(false);

    setActiveMenuPath( tartgetHref );
   
  }

  return (

    <div className={ "navbar" + ( activeBar ? " open" : "" )  } >

      <div className='wrapper'>

        <div className="hamburger-wrapper mobile" onClick={() => setActiveBar(!activeBar) }>

          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>

        </div>

        <div className="logo-container">

          <Image layout="fill" src="/logo.png" alt="Logo" className='logo' />

        </div>

        <div className="menu-content desktop">

          <ul className="menu-items">

            <div className="flex">

              {simpleLinks.map((item, i) => (
                <li className="" key={`${i * 4}`} onClick={handleNavLinkClick} >
                  <Link href={item.link}>
                    <a className="link-item" >{item.name}</a>
                  </Link>
                </li>
              ))}

            </div>

            <div className="separeted">

              {highlightedLinks.map((item, i) => (
                <li className="" key={`${i * 4}`} onClick={handleNavLinkClick}>
                  <Link href={item.link}>
                    <a className="link-item">{item.name}</a>
                  </Link>
                </li>
              ))}

            </div>

          </ul>

      </div>

      </div>

      <div className="menu-content mobile">

      <ul className="menu-items">

        <div className="flex column">

          {simpleLinks.map((item, i) => (
            <li className="" key={`${i * 4}`} onClick={handleNavLinkClick} >
              <Link href={item.link}>
                <a className="link-item" >{item.name}</a>
              </Link>
            </li>
          ))}

        </div>

        <div className="separeted flex column">

          {highlightedLinks.map((item, i) => (
            <li className="" key={`${i * 4}`} onClick={handleNavLinkClick}>
              <Link href={item.link}>
                <a className="link-item">{item.name}</a>
              </Link>
            </li>
          ))}

        </div>

        <div className="logo-container">

          <Image objectFit="contain" width="70px" height="70px" src="/logo.png" alt="Logo" className='logo' />

        </div>

        </ul>

      </div>

    </div>
   
  )
}

export default Navbar