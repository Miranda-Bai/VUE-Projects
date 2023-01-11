import SvgIcon from "@/components/SvgIcon/index.vue";

// const svgRequired = require.context("./svg", false, /\.svg$/);
const svgRequired = import.meta.globEager("./svg/*.svg");

/* svgRequired.keys().forEach((item) => {
    console.log("itemsvg=>", item)
  return svgRequired(item);
});
 */
for (const item in svgRequired) {
  console.log("itemsvg=>", item);
  return svgRequired(item);
}

export default (app) => {
  app.component("svg-icon", SvgIcon);
};
