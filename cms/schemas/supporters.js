export default {
  name: "supporters",
  title: "Támogatóink",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Cég Név",
      type: "string",
    },
    {
      name: "logo",
      title: "Logója",
      type: "image",
    },
    {
      name: "description",
      title: "Bemutató Szöveg a Támogatóról",
      type: "text",
    },
    {
      name: "url",
      title: "Honlap",
      type: "url",
    },
  ],
};
