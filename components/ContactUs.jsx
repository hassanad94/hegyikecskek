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
  const { subject, description, subjectDisabled } = props[0];
  const { control, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const { name, email, message } = data;

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
        <Controller
          name="name"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <RedditTextField
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              className="input"
              label="Név"
              variant="filled"
              required
              style={{ marginTop: 11 }}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          defaultValue={""}
          render={({ field }) => (
            <RedditTextField
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              label="email"
              variant="filled"
              type="email"
              className="input"
              required
              style={{ marginTop: 11 }}
            />
          )}
        />

        {subject && (
          <>
            <div className="email-subject">Mivel kapcsolatban érdeklődsz?</div>

            <Controller
              control={control}
              name="subject"
              defaultValue={subject}
              render={({ field }) => (
                <RedditTextField
                  name={field.name}
                  value={subject}
                  onChange={field.onChange}
                  label="Mivel kapcsolatban érdeklődsz?"
                  disabled={subjectDisabled}
                  variant="filled"
                  type="text"
                  className="input subject-input"
                  style={{ marginTop: 11 }}
                />
              )}
            />
          </>
        )}
        <div className="text-area">
          <Controller
            name="message"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <>
                <label>
                  <textarea
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    className="meassage"
                    rows="4"
                  ></textarea>
                  Írd ide az üzeneted!
                </label>
              </>
            )}
          />
        </div>
        <input className="button btn " type="submit" value={"Küldés"} />
      </form>
    </>
  );
};

export default ContactUs;
