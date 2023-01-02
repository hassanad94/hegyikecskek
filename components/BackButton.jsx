import Image from "next/image";

function BackButton({router}) {

  return (
    <div className="backButton" onClick={()=>{router.back();}}>

        <Image width={40} height={40} src="/img/backarrow.svg" />

    </div>
  )
}

export default BackButton