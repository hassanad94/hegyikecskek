import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { toast, ToastContainer } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import Alert from "@mui/material/Alert";

import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Image from "next/image";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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
  const [succesFullEmail, setSuccesFullEmail] = useState(false);
  const [emilIsSending, setEmilIsSending] = useState(false);

  const [formError, setFormError] = useState({});

  const onSubmit = async (data) => {
    const { name, email, message } = data;

    let errors = {};

    if (message.length === 0) {
      errors = { ...errors, message: true };
    }

    if (!validateEmail(email)) {
      errors = { ...errors, email: true };
    }

    if (!/^[a-zA-Z]{1,20}( [a-zA-Z]{1,20}){1,2}$/.test(name.trim())) {
      errors = { ...errors, name: true };
    }

    if (Object.keys(errors).length !== 0) {
      setFormError(errors);
      return false;
    }

    setEmilIsSending(true);

    const sendMail = await fetch("/api/sendMail", {
      method: "post",
      body: JSON.stringify(data),
    });

    const response = await sendMail.json();

    if (!response.status) {
      return alert("Hiba történt kérlek frissítsd az oldalt");
    }

    setEmilIsSending(false);
    setSuccesFullEmail(true);
  };

  if (succesFullEmail) {
    return (
      <div className="succesfull-email">
        {" "}
        ✅✅Sikeresen Elküldted az email-t. Hamarosan kapcsolatba lépünk veled a
        megadott email címen.✅✅
      </div>
    );
  }

  if (emilIsSending) {
    return (
      <>
        <Image
          alt="Email sending Loading gif"
          src="/icons/emailLoding.gif"
          width={150}
          height={150}
        />
      </>
    );
  }

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
                label="E-mail"
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

        <Controller
          control={control}
          name="subject"
          defaultValue={"edzés terv"}
          render={({ field }) => (
            <FormControl variant="filled" className="subject-field">
              <InputLabel id="demo-simple-select-label">
                Mivel kapcsolatban érdeklődsz?
              </InputLabel>
              <Select
                value={field.value}
                onChange={field.onChange}
                label="Mivel kapcsolatban érdeklődsz?"
              >
                <MenuItem value="edzés terv">Edzés terv</MenuItem>
                <MenuItem value="egyesületi tagság">Egyesületi tagság</MenuItem>
                <MenuItem value="edzőtáborok">Edzőtáborok</MenuItem>
                <MenuItem value="egyéb">Egyéb</MenuItem>
              </Select>
            </FormControl>
          )}
        />

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
