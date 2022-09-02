
import Image from "next/image";
import Link from "next/link";
import { client } from '/lib/client';
import { useEffect, useState } from 'react';

const Footer = () => {

  const [socials, setSocials] = useState({});

  useEffect(() => {
 
    client.fetch(
				`*[_type == "socials"]`
			)
			.then((data) => setSocials( data[0] ))
			.catch(console.error);
        
  },[]);


  const { facebook , instagram, youtube } = socials;
  
  return (

    <div className='section footer'>
      
      <div className="logo-container">

        <Image width="84px" height="77px" src="/logo-dark.png" alt="Logo" className='logo' />

      </div>

      <h3> Szolgáltatások</h3>

      <div className="footer-menu flex column">

        <Link href="/edzestervezes">edzéstervezés</Link>
        <Link href="/konzultacio">konzultáció</Link>
        <Link href="/esemenyek">események</Link>

      </div>

      
      <h3> Egyesület</h3>

      <div className="footer-menu flex column">

        <Link href="/informacio">információ</Link>
        <Link href="/tagsag">tagság</Link>
        <Link href="/elonyok">előnyök</Link>

      </div>

      <div className="button btn center" >
        
        Edzéstervet szeretnék!
  
      </div>

      <br />

      <div className="button btn center" >
  
        Tag szeretnék lenni!
  
      </div>

      <div className="quick-contact">

        <a href="mailto:info@hegyikecskek.hu">&#9993; info@hegyikecskek.hu</a> | &#x1F4DE; <a href="tel:+36301234455">+36 30 123 4455</a>

      </div>

      <div className="social-media-ref">

        <a href={facebook}>

          <Image objectFit="contain" width="32px" height="32px" src="/facebook.png" alt="Logo" className='logo' />
        
        </a>


        <a href={instagram}>

          <Image objectFit="contain" width="32px" height="32px" src="/instagram.png" alt="Logo" className='logo' />
        
        </a>

        <a href={youtube}>

          <Image objectFit="contain" width="32px" height="32px" src="/youtube.png" alt="Logo" className='logo' />
        
        </a>


      </div>


      
    </div>
  )
}



export default Footer