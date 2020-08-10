import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md"
  },
  theme: {
    themes: {
      light: {
        action: "#B39500",
        background: "rgba(255,255,255,1)"
      },
      dark: {
        action: "#B39500",
        background: "rgba(10,10,10,1)"
      }
    },
    dark: false
  }
});
