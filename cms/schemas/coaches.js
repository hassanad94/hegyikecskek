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
      name: "hero",
      title: "Profil Kép",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "icon",
      title: "Icon kép",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "page",
      title: "Oldal Azonosíto",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      title: "Bemutatkozó Szöveg",
      name: "title_1",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            {
              title: "Normal",
              value: "normal",
              title: "Fő Cím",
              value: "h2",
            },
          ],
        },
      ],
    },
  ],
};
