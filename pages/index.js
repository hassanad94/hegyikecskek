import Head from 'next/head';
import Image from 'next/image';
import { client, urlForImage } from '../lib/client';

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

  const data = defaultData[0];

  console.log( data );

  return (

    <>

    <div className="hero-container fw">

      <img src={urlForImage(data.hero)} alt="Hero" className='hero' />
     
    </div>  
    
    <div className="section">

      <h1 className='col2'> Hegyikecskék </h1>

      {/* { data.title_1 } */}
     
    </div>

    </>

   
    

  )
}
