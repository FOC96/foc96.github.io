<template>
  <v-card tile flat>
    <v-main>
      <v-container>
        <h2 class="text-h3 font-weight-bold text-primary">About</h2>
        <v-row>
          <v-col
            cols="12"
            sm="3"
            class="d-flex align-start justify-start justify-sm-end pb-0"
          >
            <p class="ma-0 sectionTitle">Overview</p>
          </v-col>
          <v-col cols="12" sm="9">
            <p class="body-1 text-left">
              User experience designer with a sofware engineering background
              currently working on the aviation industry.
            </p>
            <p class="body-1 text-left">
              Feels passionate about the common ground in which Product and
              Engineering meet. His current activities at work allow him to be
              part of the product design planning – crafting flow diagrams,
              wireframes and prototypes to drive ideas and concepts while
              discussing with stakeholders. Then, he participates in the
              front-end development of these projects.
            </p>
            <p class="body-1 text-left">
              His love for tv shows goes from supernatural masterpieces like
              <i>The Haunting of Hill House</i> to super cheesy dramas like
              <i>Grey's Anatomy</i>. Enjoys listening to music 24/7, even more
              when it's sad depressing songs from which he feeds constantly, as
              well as up-tempo songs. He prays to Queen B 🍋 and Shakira.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="3"
            class="d-flex align-start justify-start justify-sm-end pb-0"
          >
            <p class="ma-0 sectionTitle">Age</p>
          </v-col>
          <v-col cols="12" sm="9">
            <p class="body-1 text-left">{{ age }} years old</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="3"
            class="d-flex align-start justify-start justify-sm-end pb-0"
          >
            <p class="ma-0 sectionTitle">Education</p>
          </v-col>
          <v-col cols="12" sm="9">
            <v-row no-gutters>
              <v-col cols="12">
                <p class="body-1 text-primary ma-0">
                  Universidad Autónoma de Querétaro (UAQ)
                </p>
                <p class="caption text--secondary ma-0 font-weight-medium">
                  2015–2019 BS, Software Engineering [GPA: 9.6/10]
                </p>
                <p class="caption text--secondary ma-0 font-weight-medium">
                  Santiago de Querétaro, Querétaro, MX
                </p>
              </v-col>
              <v-col cols="12" class="mt-6">
                <p class="body-1 text-primary ma-0">
                  University of Northern Colorado (UNCO)
                </p>
                <p class="caption text--secondary ma-0 font-weight-medium">
                  Fall 2017, Semester Abroad [GPA: 4.0/4.0]
                </p>
                <p class="caption text--secondary ma-0 font-weight-medium">
                  Greeley, CO, USA
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm="3"
            class="d-flex align-start justify-start justify-sm-end pb-0"
          >
            <p class="ma-0 sectionTitle">Skills</p>
          </v-col>
          <v-col cols="12" sm="9">
            <v-row>
              <v-col cols="6" sm="3" class="pt-0">
                <p class="body-1 text-primary ma-0">Interaction Design</p>
                <ul>
                  <li class="body-1 text-primary">Wireframing</li>
                  <li class="body-1 text-primary">Prototyping</li>
                  <li class="body-1 text-primary">Accessibility</li>
                  <li class="body-1 text-primary">Usability</li>
                </ul>
              </v-col>
              <v-col cols="6" sm="3" class="pt-0">
                <p class="body-1 text-primary ma-0">Software</p>
                <ul>
                  <li class="body-1 text-primary">Sketch</li>
                  <li class="body-1 text-primary">InVision</li>
                  <li class="body-1 text-primary">Photoshop</li>
                </ul>
              </v-col>
              <v-col cols="6" sm="3" class="pt-0">
                <p class="body-1 text-primary ma-0">Software Dev</p>
                <ul>
                  <li class="body-1 text-primary">HTML5 & CSS3</li>
                  <li class="body-1 text-primary">JavaScript</li>
                  <li class="body-1 text-primary">Vue</li>
                  <li class="body-1 text-primary">Swift UI</li>
                  <li class="body-1 text-primary">Git</li>
                </ul>
              </v-col>
              <v-col cols="6" sm="3" class="pt-0">
                <p class="body-1 text-primary ma-0">Tools & others</p>
                <ul>
                  <li class="body-1 text-primary">SCRUM</li>
                  <li class="body-1 text-primary">Rally</li>
                  <li class="body-1 text-primary">Azure</li>
                  <li class="body-1 text-primary">Azure DevOps</li>
                </ul>
              </v-col>
              <v-col cols="6" sm="3" class="pt-0">
                <p class="body-1 text-primary ma-0">Languages</p>
                <ul>
                  <li class="body-1 text-primary">Spanish (Native)</li>
                  <li class="body-1 text-primary">English (C1)</li>
                </ul>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            class="mt-4 d-flex flex-row align-center justify-center"
          >
            👉🏼
            <v-btn
              text
              color="action"
              class="mr-3 ml-3"
              :ripple="false"
              href="https://www.icloud.com/iclouddrive/0Kn9yu0I-wVjY4AYBevhf2Ugw#cvF-1"
              >Download my resume</v-btn
            >
            👈🏼
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-card>
</template>
<script>
export default {
  name: "About",
  computed: {
    age() {
      const today = new Date();
      let age = Math.floor((today - new Date("November 24, 1996"))/31557600000)

      return age;
    }
  }
};
</script>
<style>
.sectionTitle {
  font-size: 1rem;
  font-weight: 600;
  opacity: 0.7;
}
</style>
