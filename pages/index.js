import Image from 'next/image';
import { client, urlForImage } from '../lib/client';
import {PortableText} from '@portabletext/react';
import {CoachesPreview} from '../components/Coaches';
import Galeria from '../components/Galeria';

export async function getStaticProps() {

  const query = '*[_type == "home"]';
  var defaultData =  await client.fetch(query);

  const coaches = `*[_type == "coaches"] {
    _id, hero, name
  }`;

  const coachesData = await client.fetch( coaches );

  return {
    props: {
      defaultData, coachesData
    },
    // Next.js will attempt to re-generate the page:
    // - At most once every 60 seconds
    revalidate: 1, // In seconds
  }
}



export default function Home( { defaultData, coachesData } ) {

  const { hero, title_1 } = defaultData[0];
  
  const heroImage = urlForImage(hero).url();

  return (

    <>

    <div className="hero-container fw">


      <Image loader={() => heroImage} unoptimized={true} src={heroImage} layout='fill' />
      {/* <Image layout='fill' src={heroImage.url()} decoding="sync" alt="Hero" className='hero' /> */}
     
    </div>  
    
    <div className="section title-desc intro ">

      <PortableText className='teszt'
        value={title_1}
      />

      <div className='buttonWithArrow button'>

        Bővebben

      </div>
     
    </div>

    <div className='section interested'>

      <h2>Ha szeretnél</h2>
      
      <div className='image-card-container'>

        <div className='image-card'> 
            <Image width={200} height="266" src='/img/reason-1.png' alt="Indok miért csatlakozz" />
          <p>Fejlődni aszfalton</p>
        </div>

        <div className='image-card'> 
            <Image width={200} height="266" src='/img/reason-2.png' alt="Indok miért csatlakozz" />
          <p>Fejlődni terepen</p>
        </div>

        <div className='image-card'> 
            <Image width={200} height="266" src='/img/reason-3.png' alt="Indok miért csatlakozz" />
          <p>Elkezdeni futni</p>
        </div>

        <div className='image-card'> 
            <Image width={200} height="266" src='/img/reason-4.png' alt="Indok miért csatlakozz" />
          <p>Csapathoz tartozni</p>
        </div>

      </div>

      <div className='button-container center'>
        
        <div className="button btn center center-grid" >
    
          Érdekel!
    
        </div>

      </div>



    </div>

    <div className='section grid-center expect'>

      <h2 className='center'>Mire számíthatsz nálunk</h2>

      <div className='mountain-dec-container'>
        <Image layout='fill' src='/img/mountain-dec.png' alt="hegy dekoráció" className='mountain-dec' />
      </div>


      <div className='mountain-items flex column'>

        <p className='item'>egy szuper csapat </p>
        <p className='item'>egyéni edzésterv </p>
        <p className='item'>egyesületi tagság </p>
        <p className='item'>közös futások </p>
        <p className='item'>konzultációk </p>
        <p className='item'>táborok </p>

      </div>
  


    </div>

    <div className='section coaches'>

      <h2 className='center'>Edzőink</h2>

      <CoachesPreview coaches={coachesData} />

    </div>

    <div className='section page-gallery'>

      <h2 className='center'>Galéria</h2>

      <Galeria />

    </div>

    </>

   
    

  )
}
