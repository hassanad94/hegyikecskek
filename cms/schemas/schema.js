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
import sharedTrainings from "./sharedTrainings";
import sharedTrainingsDates from "./sharedTrainingsDates";
import camps from "./camps";
import association from "./association";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    home,
    aboutUs,
    traningPlan,
    coachesSite,
    sharedTrainings,
    camps,
    association,
    trainingPackets,
    sharedTrainingsDates,
    trainingItems,
    socials,
    coaches,
    reviews,
    philosophy,
  ]),
});
