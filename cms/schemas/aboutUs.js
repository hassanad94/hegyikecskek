export default {
  name: "aboutUs",
  title: "Rólunk oldal",
  type: "document",
  fields: [
    {
      name: "img_1",
      title: "Főkép",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "desc_1",
      title: "Főkép szöveg",
      type: "string",
    },
    {
      name: "teamdescription",
      title: "Leírás a Csapatról",
      type: "string",
    },
    {
      title: "Bemutató Videó",
      name: "trailer",
      type: "url",
    },
    {
      title: "Kedvenc Képeink",
      name: "galeria",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
