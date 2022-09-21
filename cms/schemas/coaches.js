export default {
  name: "coaches",
  title: "Edzők",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Név",
      type: "string",
    },
    {
      name: "page",
      title: "Saját Oldalának Linkje",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
      validation: (Rule) =>
        Rule.required().warning("Nyomj rá kérlek a GENERATE gombra."),
    },
    {
      name: "price",
      title: "Havi Edzéstervezés ára",
      type: "number",
    },
    {
      name: "isEuro",
      title: "Euró?",
      type: "boolean",
    },
    {
      name: "titles",
      title: "Titulusok( Vezető Edző, erőnléti edző, stb.. )",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "philosophyDescription",
      title: "Filozófia Kifejtése",
      type: "text",
    },
    {
      name: "philosophyItems",
      title: "Edző filozófiái",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "philosophy" }],
        },
      ],
    },
    {
      name: "hero",
      title: "Profil Kép",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "icon",
      title: "Icon kép 200x200 körüli képek",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Bemutatkozó Szöveg",
      name: "introduction",
      type: "text",
    },
    {
      title: "Sikereim",
      name: "success",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Amire Büszke Vagyok",
      name: "proud",
      type: "text",
    },
  ],
  initialValue: {
    isEuro: false,
  },
};
