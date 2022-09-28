export default {
  name: "sharedTrainingsDates",
  title: "Közös Edzés Ídőpontok",
  type: "document",
  fields: [
    {
      name: "when",
      title: "Ídőpont",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      name: "endDate",
      title: "Vége Ídőpont ( opciónális )",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      name: "location",
      title: "Helyszín",
      type: "string",
    },
    {
      name: "distance",
      title: "Távolság",
      type: "string",
    },
    {
      name: "pace",
      title: "Tempó",
      type: "string",
    },
  ],
};
