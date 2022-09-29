import { urlForImage } from "../lib/client";
import Image from "next/image";

const Supporter = (...props) => {
  const { name, logo, description, url } = props[0].supporter;

  const logoUrl = urlForImage(logo).url();

  return (
    <>
      <h2> {name}</h2>
      <div className="logo-container">
        <Image
          width={100}
          height={100}
          src={logoUrl}
          objectFit="contain"
          alt="Támogató Logója"
        />
      </div>

      <p>{description}</p>

      <a href={url}>
        <div className="buttonWithArrow button">Látogass el a honlapjukra!</div>
      </a>
    </>
  );
};

export default Supporter;
