
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

  const { desc_1, img_1, teamdescription } = defaultData[0];

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

      <div className="section intro no-hero">

        <div className='content'>

          <h2 className='miben'>Miben hiszünk</h2>

          <div className='icon-card-container'>

            <div className='icon-card flex column'>

              <Image width="50" objectFit='contain' height="50" src='/img/belife-1.png' alt="Miben Hiszünk" />

              <p className="center">Egy csapat vagyunk</p>

            </div>

            <div className='icon-card flex column'>

              <Image width="50" objectFit='contain' height="50" src='/img/belife-2.png' alt="Miben Hiszünk" />

              <p className="center">Segítünk egymásnak</p>

            </div>

            <div className='icon-card flex column'>

              <Image width="50" objectFit='contain' height="50" src='/img/belife-3.png' alt="Miben Hiszünk" />

              <p className="center">Sportszerűek vagyunk</p>

            </div>

            <div className='icon-card flex column'>

              <Image width="50" objectFit='contain' height="50" src='/img/belife-4.png' alt="Miben Hiszünk" />

              <p className="center">Keményen dolgozunk</p>

            </div>

            <div className='icon-card flex column'>

              <Image width="50" objectFit='contain' height="50" src='/img/belife-5.png' alt="Miben Hiszünk" />

              <p className="center">Jól érezzük magunkat</p>

            </div>

            <div className='icon-card flex column'>

              <Image width="50" objectFit='contain' height="50" src='/img/belife-6.png' alt="Miben Hiszünk" />

              <p className="center">Szeretjük a kihívásokat</p>

            </div>

            <div className='icon-card flex column'>

              <Image width="50" objectFit='contain' height="50" src='/img/belife-7.png' alt="Miben Hiszünk" />

              <p className="center">Örülünk egymásnak</p>

            </div>

            <div className='icon-card flex column'>

              <Image width="50" objectFit='contain' height="50" src='/img/belife-8.png' alt="Miben Hiszünk" />

              <p className="center">Tiszteljük a másikat</p>

            </div>

          </div>
     
        </div>

      </div>

      <div className="section intro no-hero">

        <div className='content'>

          <h2>A csapat</h2>


          <p>{teamdescription}</p>
     
        </div>

      </div>

    </>
  )
}

export default rolunk