import Image from 'next/image';
import { client, urlForImage } from '../lib/client';
import {PortableText} from '@portabletext/react';
import {CoachesPreview} from '../components/Coaches';
import {Galeria} from '../components/Galeria';
import { ReviewCard } from '../components/Card';
import ContactUs from '../components/ContactUs';

export async function getStaticProps() {

  const query = `*[_type == "home"] {
    _id, hero,title_1,galeriavideos,galeriaimages
  }`;
  var defaultData =  await client.fetch(query);

  const coaches = `*[_type == "coaches"] {
    _id, hero, name
  }`;

  const coachesData = await client.fetch( coaches );

  const reviews = `*[_type == "reviews"]`;

  const reviewsData = await client.fetch( reviews );

  return {
    props: {
      defaultData, coachesData,reviewsData
    },
    // Next.js will attempt to re-generate the page:
    // - At most once every 60 seconds
    revalidate: 1, // In seconds
  }
}



export default function Home( { defaultData, coachesData, reviewsData } ) {

  const { hero, title_1, galeriaimages,galeriavideos } = defaultData[0];

  const heroImage = urlForImage(hero).url();

  const galeriaImagesUrls = galeriaimages.map( (img) => (

    urlForImage( img ).url()

  ) );

  const youtubeIds = galeriavideos.map( (link) =>{

    return link.split("v=")[1];

  });

  const galeria = [ ...galeriaImagesUrls, ...youtubeIds ];

  return (

    <>

    <div className="hero-container fw">


      <Image loader={() => heroImage} unoptimized={true} src={heroImage} alt="hero" title="Fő kép" layout='fill' />
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

      <div className='galeria-container'>
        <Galeria galeria={galeria} />

      </div>


    </div>

    <div className='section page-gallery'>

      <h2 className='center'>Rólunk mondták</h2>

      <div className='galeria-container'>
        <ReviewCard reviews={reviewsData} />
      </div>


    </div>

    <div className='section supporters'>

      <h2>Támogatoink</h2>

      <div className='supporter-container flex'>

        <div className='supporter'>

          <Image width="100" layout="responsive" objectFit='contain' height="100" src='/img/supporter-1.png' alt="Támogatoink Logója" />

        </div>
        
        <div className='supporter'>

          <Image width="100" layout="responsive" objectFit='contain' height="100" src='/img/supporter-2.png' alt="Támogatoink Logója" />

        </div>      

        <div className='supporter'>

          <Image width="100" layout="responsive" objectFit='contain' height="100" src='/img/supporter-3.png' alt="Támogatoink Logója" />

        </div> 

        <div className='supporter'>

          <Image width="100" layout="responsive" objectFit='contain' height="100" src='/img/supporter-4.png' alt="Támogatoink Logója" />

        </div>

        <div className='supporter'>

          <Image width="100" layout="responsive" objectFit='contain' height="100" src='/img/supporter-5.png' alt="Támogatoink Logója" />

        </div>

      </div>

    </div>

    <div className='section contactForm'>

      <h2>Írj Nekünk</h2>

      <ContactUs/>

    </div>

    </>

   
    

  )
}
