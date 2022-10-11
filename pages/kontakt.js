import ContactUs from "../components/ContactUs";
import OpenMessageModal from "../components/OpenMessageModal";

const Kontakt = ({ defaultData }) => {
  return (
    <>
      <div className="section contactForm">
        <div className="content">
          <h2>Írj Nekünk</h2>

          <ContactUs subject=" " description={true} />
        </div>
      </div>
    </>
  );
};

export default Kontakt;
