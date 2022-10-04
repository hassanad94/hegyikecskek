export default {
  name: "association",
  title: "Egyesületi Információ Oldal",
  type: "document",
  fields: [
    {
      name: "intro",
      title: "Bevezető Szöveg",
      type: "text",
    },
    {
      name: "tagCount",
      title: "Tagok Száma",
      type: "number",
    },
    {
      name: "medalCount",
      title: "Dobogós Helyezések",
      type: "number",
    },
    {
      name: "boysCount",
      title: "Fiúk Száma",
      type: "number",
    },
    {
      name: "girlsCount",
      title: "Lányok Száma",
      type: "number",
    },
    {
      name: "tagInfo",
      title: "Tagsági Információ Alatti szöveg",
      type: "text",
    },
    {
      name: "tagdescription",
      title: "Tagsági információ '-' elválasztva a cím és kifejtés ",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
