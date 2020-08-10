<template>
  <v-card tile flat>
    <v-img
      :src="background"
      :height="screenHeight"
      :gradient="
        $vuetify.theme.dark
          ? 'to bottom, rgba(30,30,30,.8), rgba(30,30,30,1)'
          : 'to bottom, rgba(255,255,255,.6), rgba(255,255,255,1)'
      "
    >
      <v-main>
        <v-container>
          <v-sheet
            color="rgba(30,30,30,0)"
            class="d-flex flex-column align-center justify-center"
            :height="screenHeight"
          >
            <!-- <div class="toggleThemeBtn">
              <v-btn icon color="action" @click="toggleTheme" :ripple="false">
                <feather
                  :type="$vuetify.theme.dark ? 'sunrise' : 'sunset'"
                ></feather>
              </v-btn>
            </div> -->
            <v-card
              height="150px"
              width="150px"
              rounded="lg"
              class="mb-8"
              elevation="17"
            >
              <v-img :src="profile" height="150px" width="150px"></v-img>
            </v-card>
            <div class="d-flex flex-column justify-center align-center">
              <h1 class="display-3 font-weight-black">Fernando</h1>
              <p class="ma-0 text-h6">UX Designer + Front-end Dev</p>

              <div class="mt-3">
                <!-- <v-btn color="action" :ripple="false" icon class="mr-4" href="https://music.apple.com/profile/FOC96">
                  <feather type="music"></feather>
                </v-btn> -->
                <v-btn
                  color="action"
                  :ripple="false"
                  icon
                  class="mr-4"
                  href="https://www.linkedin.com/in/fernandoorc"
                >
                  <feather type="linkedin"></feather>
                </v-btn>
                <v-btn
                  color="action"
                  :ripple="false"
                  icon
                  class="mr-4"
                  href="https://twitter.com/messages/compose?recipient_id=231578065"
                >
                  <feather type="twitter"></feather>
                </v-btn>
                <v-btn
                  color="action"
                  :ripple="false"
                  icon
                  class="mr-4"
                  href="https://www.github.com/FOC96"
                >
                  <feather type="github"></feather>
                </v-btn>
              </div>
            </div>
            <div
              class="scrollForMore d-flex flex-column align-center justify-center pa-0"
            >
              <feather
                type="chevron-down"
                class="scrollDownAnimation"
              ></feather>
            </div>
          </v-sheet>
        </v-container>
      </v-main>
    </v-img>
  </v-card>
</template>
<script>
export default {
  name: "Top",
  data() {
    return {
      background: require("@/assets/back.jpg"),
      profile: require("@/assets/squared.jpeg"),
      screenHeight: "1000px"
    };
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
    this.screenHeight = window.innerHeight + "px";
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler() {
      this.screenHeight = window.innerHeight + "px";
    },
    toggleTheme() {
      console.log("toggled");
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      console.log(this.$vuetify.theme.dark);
    }
  }
};
</script>
<style>
.scrollForMore {
  position: absolute;
  bottom: 30px;
  margin: auto;
}
.v-parallax__content {
  padding: 0px !important;
}
.toggleThemeBtn {
  position: absolute;
  margin: auto;
  top: 30px;
  right: 30px;
}
.scrollDownAnimation {
  animation: downAnim;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
@keyframes downAnim {
  0% {
    opacity: 0;
    margin-bottom: 20px;
  }
  50% {
    opacity: 0.6;
    margin-bottom: 10px;
  }
  100% {
    opacity: 0;
    margin-bottom: 0px;
  }
}
</style>
