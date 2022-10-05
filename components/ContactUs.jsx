import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { toast, ToastContainer } from "react-toastify";
import { useForm, Controller } from "react-hook-form";

import "react-toastify/dist/ReactToastify.css";

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
  "& .Mui-focused": {
    backgroundColor: "#fff!important",
  },
  "&:hover": {
    backgroundColor: "#fff!important",
    borderRadius: 4,
  },
}));

const ContactUs = (...props) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const { message } = data;

    if (typeof message === "undefined") {
      return toast.error("Kérlek írd le az üzeneted.");
    }

    const sendMail = await fetch("/api/sendMail", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then((r) => r.json)
      .then((data) => console.log(data));
  };

  const { subject, description, subjectDisabled } = props[0];

  return (
    <>
      <ToastContainer position="bottom-center" limit={1} />
      <form
        className="contact-container flex"
        onSubmit={handleSubmit(onSubmit)}
      >
        {description && (
          <p>
            Szeretnél egyéni edzéstervet és elérni a céljaidat? Írj nekünk, és
            felvesszük veled a kapcsoaltot, hogy megbeszélhessük a részelteket!
          </p>
        )}
        {/* <Controller
          name="name"
          defaultValue={""}
          control={control}
          id="contact-name"
          rules={{ required: true }}
          render={({ field }) => (
            <RedditTextField
              label="Név"
              className="input"
              variant="filled"
              inputRef={field.ref}
              style={{ marginTop: 11 }}
            />
          )}
        /> */}

        <Controller
          render={(props) => (
            <RedditTextField
              value={props.value}
              onChange={props.onChange}
              inputRef={props.ref}
            />
          )}
          name="name"
          control={control}
          rules={{ required: true }}
        />

        {/* <Controller
          control={control}
          defaultValue={""}
          name="email"
          rules={{ required: true }}
          render={({ field }) => (
            <RedditTextField
              inputRef={field.ref}
              id="contact-email"
              label="email"
              variant="filled"
              type="email"
              className="input"
              style={{ marginTop: 11 }}
            />
          )}
        />

        {subject && (
          <>
            <div className="email-subject">Mivel kapcsolatban érdeklődsz?</div>

            <Controller
              control={control}
              defaultValue={""}
              name="subject"
              render={({ field }) => (
                <RedditTextField
                  inputRef={field.ref}
                  id="subjectinput"
                  label="Mivel kapcsolatban érdeklődsz?"
                  defaultValue={subject}
                  disabled={subjectDisabled}
                  variant="filled"
                  type="text"
                  className="input"
                  style={{ marginTop: 11 }}
                />
              )}
            />
          </>
        )}
        <div className="text-area">
          <Controller
            defaultValue={""}
            name="message"
            control={control}
            required
            render={({ field }) => (
              <>
                <textarea {...field} className="meassage" rows="4"></textarea>

                <label>Írd ide az üzeneted!</label>
              </>
            )}
          />
        </div> */}
        <input className="button btn" type="submit" value={"Küldés"} />
      </form>
    </>
  );
};

export default ContactUs;
