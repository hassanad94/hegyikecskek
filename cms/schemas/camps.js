export default {
  name: "camps",
  title: "Táborok",
  type: "document",
  fields: [
    {
      name: "campName",
      title: "EdzőTábor Neve",
      type: "string",
    },
    {
      name: "intro",
      title: "Bevezető Szöveg",
      type: "text",
    },
    {
      name: "introImage",
      title: "Bevezető Szöveg alatti kép",
      type: "image",
    },
    {
      name: "turns",
      title: "Turnusok",
      type: "string",
    },
    {
      name: "location",
      title: "Helyszín",
      type: "string",
    },
    {
      name: "campPreview",
      title: "Tábor Bemuatató Kép ( Gomb Alatti első kép )",
      type: "image",
    },
    {
      name: "desciption",
      title: "Tábor Leírása",
      type: "text",
    },
    {
      name: "start",
      title: "Kezdet a Tábornak",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      name: "end",
      title: "Vége a Tábornak",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      title: "Tábor Galéria",
      name: "galeria",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      title: "Ott szeretnék lenni rész",
      name: "join",
      type: "text",
    },
  ],
};
