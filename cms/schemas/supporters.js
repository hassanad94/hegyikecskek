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
      name: "slug",
      title:
        "!Kötelező, Ez alapján fogja a rendszer tudni, hogy ugorjon a főoldalról",
      type: "slug",
      options: {
        source: "name",
        maxLength: 40,
      },
      validation: (Rule) =>
        Rule.required().warning("Kérlek nyomj rá a Generate-re."),
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
