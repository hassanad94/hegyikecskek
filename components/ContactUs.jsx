import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { toast, ToastContainer } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import Alert from "@mui/material/Alert";

import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

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
  "& input": {
    paddingTop: 20,
  },
}));

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const ContactUs = (...props) => {
  const { subject, description, subjectDisabled } = props[0];
  const { control, handleSubmit } = useForm();

  const [formError, setFormError] = useState({});

  const onSubmit = async (data) => {
    const { name, email, message } = data;

    if (typeof message === "undefined") {
      setFormError((prev) => ({ ...prev, message: true }));
    }

    if (!validateEmail(email)) {
      console.log("t");

      setFormError((prev) => ({ ...prev, email: true }));
    }

    if (/^[a-zA-Z]+\s[a-zA-Z]+$/.test(name)) {
      setFormError((prev) => ({ ...prev, name: true }));
    }

    if (!!formError) {
      return false;
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
      {description && (
        <p>
          Szeretnél egyéni edzéstervet és elérni a céljaidat? Írj nekünk, és
          felvesszük veled a kapcsoaltot, hogy megbeszélhessük a részelteket!
        </p>
      )}

      <form
        className="contact-container flex"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="name-email-fields">
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
                style={{ marginTop: 11 }}
              />
            )}
          />

          {formError.name && (
            <Alert severity="error">Kérlek add meg a neved!</Alert>
          )}

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
                className="input"
                style={{ marginTop: 11 }}
              />
            )}
          />

          {formError.email && (
            <Alert severity="error">Hibás Email címet adtál meg!</Alert>
          )}
        </div>

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
                  value={subject || field.value}
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
        <Controller
          name="message"
          control={control}
          defaultValue={""}
          render={({ field }) => (
            <RedditTextField
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              label="Írd ide az üzeneted!"
              multiline
              className="input text-area-input"
              rows={3}
              variant="filled"
              type="text"
              style={{ marginTop: 11 }}
            />
          )}
        />

        {formError.message && (
          <Alert severity="error">
            Kérlek ne hagyd üresen az üezenet mezőt!
          </Alert>
        )}

        <input className="button btn " type="submit" value={"Küldés"} />
      </form>
    </>
  );
};

export default ContactUs;
