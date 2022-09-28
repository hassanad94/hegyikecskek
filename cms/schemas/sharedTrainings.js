export default {
  name: "sharedTrainings",
  title: "Közös Edzések Oldal",
  type: "document",
  fields: [
    {
      name: "intro",
      title: "Bevezető Szöveg",
      type: "text",
    },
    {
      title: "Képek Edzésről",
      name: "galeria",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "join",
      title: "Szeretnék ott lenni rész",
      type: "text",
    },
  ],
};
