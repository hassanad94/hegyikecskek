import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";

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

const ContactUs = () => {
  return (
    <div className="contact-container flex">
      <RedditTextField
        id="contact-name"
        label="Név"
        name="name"
        variant="filled"
        className="input"
        style={{ marginTop: 11 }}
      />

      <RedditTextField
        id="contact-email"
        label="email"
        name="email"
        variant="filled"
        type="email"
        className="input"
        style={{ marginTop: 11 }}
      />

      <div className="text-area">
        <textarea name="message" className="meassage" rows="4"></textarea>

        <label>Írd ide az üzeneted!</label>
      </div>

      <div className="button btn ">Küldés!</div>
    </div>
  );
};

export default ContactUs;
