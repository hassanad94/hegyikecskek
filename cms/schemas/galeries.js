export default {
  name: "galeries",
  title: "Galériák",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Kategória",
      type: "string",
    },
    {
      name: "slug",
      title: "Kötelező Létre hozni, fontos a megjelenítés szempontból",
      type: "slug",
      options: {
        source: "category",
      },
    },
    {
      name: "images",
      title: "Galéria Képei",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
