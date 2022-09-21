import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import home from "./home";
import coaches from "./coaches";
import reviews from "./reviews";
import socials from "./socials";
import aboutUs from "./aboutUs";
import traningPlan from "./traningPlan";
import trainingItems from "./trainingItems";
import trainingPackets from "./trainingPackets";
import coachesSite from "./coachesSite";
import philosophy from "./philosophy";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    home,
    aboutUs,
    traningPlan,
    coachesSite,
    trainingPackets,
    trainingItems,
    socials,
    coaches,
    reviews,
    philosophy,
  ]),
});
