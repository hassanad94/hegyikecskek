
const ContactUs = () => {
  return (
    
    <div className="contact-container flex column">

        <div className="input">

            <input type="text" name="name" class="name" placeholder="Név" />
            <label for="CustomerEmail">Név</label>

        </div>

        <div className="input">

            <input type="email" name="email" class="email" placeholder="Email" />
            <label for="CustomerEmail">Email</label>

        </div>

        <div className="input">

            <textarea  name="message" class="meassage" rows="4"></textarea>

            <label for="CustomerEmail">Írd ide az üzeneted!</label>

        </div>

        <div class="button btn ">Küldés!</div>

    </div>
    
  )
}

export default ContactUs