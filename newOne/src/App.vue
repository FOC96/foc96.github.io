<template>
  <v-app>
    <Top />
    <v-sheet height="300px" />
    <About />
    <v-sheet height="300px" />
    <Experience />
    <v-footer>
      <v-main>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              class="d-flex flex-row flex-wrap align-center justify-space-between"
            >
              <p class="text-left body-2 text--secondary ma-0">
                Fernando Ortiz, 2020
              </p>
              <div>
                <v-btn
                  color="action"
                  :ripple="false"
                  icon
                  small
                  class="mr-4"
                  href="https://www.linkedin.com/in/fernandoorc"
                >
                  <feather size="15" type="linkedin"></feather>
                </v-btn>
                <v-btn
                  color="action"
                  :ripple="false"
                  icon
                  small
                  class="mr-4"
                  href="https://twitter.com/messages/compose?recipient_id=231578065"
                >
                  <feather size="15" type="twitter"></feather>
                </v-btn>
                <v-btn
                  color="action"
                  :ripple="false"
                  icon
                  small
                  class="mr-4"
                  href="https://www.github.com/FOC96"
                >
                  <feather size="15" type="github"></feather>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-footer>
  </v-app>
</template>

<script>
import Top from "./components/Top";
import About from "./components/About";
import Experience from "./components/Experience";

export default {
  name: "App",

  components: {
    Top,
    About,
    Experience,
  },

  data: () => ({
    darkOn: false,
  }),
  created() {
    this.darkOn = window.matchMedia("(prefers-color-scheme: dark)").matches;
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        if (event.matches) {
          this.darkOn = true;
        } else {
          this.darkOn = false;
        }
      });
  },
  watch: {
    darkOn() {
      if (this.darkOn) {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    },
  },
};
</script>
