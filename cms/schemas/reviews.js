export default {
  name: "reviews",
  title: "Vélemények",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Név",
      type: "string",
    },
    {
      name: "review",
      title: "Vélemény",
      type: "text",
      validation: (Rule) =>
        Rule.max(150).error(`Maximum 150 karaktert írhatsz ide!`),
    },
    {
      name: "hero",
      title: "Profil Kép",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
