
import { client, urlForImage } from '../lib/client';
import Image from 'next/image';



export async function getStaticProps() {

  const query = `*[_type == "aboutUs"]`;
  var defaultData =  await client.fetch(query);

  return {
    props: {
      defaultData
    },
    revalidate: 1, // In seconds
  }
}



const rolunk = ({defaultData}) => {

  const { desc_1, img_1 } = defaultData[0];

  var heroImage = urlForImage(img_1).url();


  return (
    <>      

      <div className="section intro no-hero">

        <div className='content'>

          <h2>Rólunk</h2>

          <div className='decoration center fw'>

            <Image objectFit='contain' layout='fill' src={heroImage} alt="hero" title="Fő kép"  />

          </div>

          <p>{desc_1}</p>

        </div>



      </div>

    </>
  )
}

export default rolunk