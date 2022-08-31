
const ContactUs = () => {
  return (
    
    <div className="contact-container flex column">

        <div className="input">

            <input type="text" name="name" className="name" placeholder="Név" />
            <label>Név</label>

        </div>

        <div className="input">

            <input type="email" name="email" className="email" placeholder="Email" />
            <label>Email</label>

        </div>

        <div className="input">

            <textarea  name="message" className="meassage" rows="4"></textarea>

            <label>Írd ide az üzeneted!</label>

        </div>

        <div className="button btn ">Küldés!</div>

    </div>
    
  )
}

export default ContactUs