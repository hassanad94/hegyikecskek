export default {
  name: "trainingPlan",
  title: "Edzés Tervezés oldal",
  type: "document",
  fields: [
    {
      name: "desc_1",
      title: "Edzés Tervezés bemutatás",
      type: "string",
    },
    {
      name: "teamdescription",
      title: "Leírás a Csapatról",
      type: "string",
    },
    {
      name: "workflows",
      title: "Leírás a Csapatról",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
