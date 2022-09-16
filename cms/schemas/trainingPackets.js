export default {
  name: "traningPackets",
  title: "Edzés Program Csomagok",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Szolgáltatás Neve",
      type: "string",
    },
    {
      name: "title",
      title: "Szolgáltatás ID",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Szolgáltatás Ára",
      type: "number",
    },
    {
      name: "priceSanyi",
      title: "Szolgáltatás Ára Sanyival",
      type: "number",
    },
    {
      name: "services",
      title: "Szolgáltatás Tartalma",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "trainingItems" }],
        },
      ],
    },
  ],
};
