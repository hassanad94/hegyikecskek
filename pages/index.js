import Head from 'next/head';
import Image from 'next/image';
import { client, urlForImage } from '../lib/client';
import {PortableText} from '@portabletext/react';

import { ButtonWithArrow, DefaultButton } from '../components/Buttons';

export async function getStaticProps() {

  const query = '*[_type == "home"]';
  const defaultData =  await client.fetch(query);

  return {
    props: {
      defaultData,
    },
    // Next.js will attempt to re-generate the page:
    // - At most once every 60 seconds
    revalidate: 1, // In seconds
  }
}



export default function Home( { defaultData } ) {

  const { hero, title_1 } = defaultData[0];


  return (

    <>

    <div className="hero-container fw">

      <img src={urlForImage(hero)} alt="Hero" className='hero' />
     
    </div>  
    
    <div className="section title-desc">

      <PortableText className='teszt'
        value={title_1}
      />

      <div className='buttonWithArrow button grid-s-3'>

        Bővebben

      </div>
     
    </div>

    <div className='section grid-center col2 interested'>

      <h2>Ha szeretnél</h2>

      <div className='image-card-container'> 
        <img src='/img/reason-1.png' alt="Indok miért csatlakozz" />
        <p>Fejlődni aszfalton</p>
      </div>

      <div className='image-card-container'> 
        <img src='/img/reason-2.png' alt="Indok miért csatlakozz" />
        <p>Fejlődni terepen</p>
      </div>

      <div className='image-card-container'> 
        <img src='/img/reason-3.png' alt="Indok miért csatlakozz" />
        <p>Elkezdeni futni</p>
      </div>

      <div className='image-card-container'> 
        <img src='/img/reason-4.png' alt="Indok miért csatlakozz" />
        <p>Csapathoz tartozni</p>
      </div>


      <div className={ "button btn center center-grid" }>
  
        Érdekel!
  
      </div>


    </div>

    <div className='section grid-center col3 expect'>

      <h2 className='center'>Mire számíthatsz nálunk</h2>

      <img src='/img/mountain-dec.png' alt="hegy dekoráció" className='mountain-dec' />

      <div className='mountain-items'>

        <p className='item'>egy szuper csapat </p>
        <p className='item'>egyéni edzésterv </p>
        <p className='item'>egyesületi tagság </p>
        <p className='item'>közös futások </p>
        <p className='item'>konzultációk </p>
        <p className='item'>táborok </p>

      </div>
  


    </div>

    </>

   
    

  )
}
