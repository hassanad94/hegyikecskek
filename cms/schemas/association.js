export default {
  name: "association",
  title: "Tagsági Oldal",
  type: "document",
  fields: [
    {
      name: "intro",
      title: "Bevezető Szöveg",
      type: "text",
    },
    {
      name: "tagInfo",
      title: "Tagsági Információ",
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
