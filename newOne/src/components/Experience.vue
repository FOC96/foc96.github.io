<template>
  <v-card tile flat>
    <v-main>
      <v-container>
        <h2 class="text-h3 font-weight-bold text-primary">Experience</h2>
        <v-sheet
          class="pb-3 pt-3"
          v-for="(single, index) in experience"
          :key="index"
        >
          <v-row class="mt-6 pr-4 pl-4">
            <v-col cols="12" md="3">
              <div class="d-flex flex-column align-start justify-start mb-4">
                <v-avatar size="50" class="mr-4">
                  <img :src="single.companyLogo" alt />
                </v-avatar>
                <h3 class="display-1 ma-0 text--primary mt-2">
                  {{ single.company }}
                </h3>
              </div>
              <div
                class="d-flex flex-column align-baseline justify-start"
                v-for="(position, index) in single.positions"
                :key="index"
              >
                <p
                  class="subtitle-2 text-left mr-2 mb-0 font-weight-regular text--primary"
                >
                  {{ position.title }}
                </p>
                <p class="caption text--secondary ma-0 font-weight-medium mb-0">
                  {{ position.period }}
                </p>
                <p class="caption text--secondary ma-0 font-weight-medium mb-0">
                  {{ position.place }}
                </p>
              </div>
              <div class="mt-5">
                <p
                  class="body-2 text-left"
                  v-for="(i, index) in single.description"
                  :key="index"
                >
                  {{ i }}
                </p>
              </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" md="8" class="pb-0">
              <v-row>
                <h4 class="ma-0 sectionTitle">Featured</h4>
                <v-col cols="12" class="pb-6 pt-2">
                  <v-window :show-arrows="true">
                    <v-window-item
                      v-for="(featuredProj, index) in single.products.featured"
                      :key="index"
                    >
                      <v-card
                        height="350px"
                        rounded="xl"
                        flat
                        :color="featuredProj.backgroundColor"
                        class="d-flex align-content-space-between flex-wrap pa-4"
                      >
                        <div
                          class="d-flex flex-row justify-end align-end"
                          style="width:100%"
                        >
                          <template v-if="featuredProj.links">
                            <v-btn
                              v-for="(link, index) in featuredProj.links"
                              :key="index"
                              color="action"
                              :ripple="false"
                              icon
                              :href="link.url"
                              target="blank"
                              class="ml-3"
                            >
                              <feather
                                v-if="link.origin === 'website'"
                                type="globe"
                                size="20"
                              ></feather>
                              <feather
                                v-else-if="link.origin === 'github'"
                                type="github"
                                size="20"
                              ></feather>
                              <feather
                                v-else-if="link.origin === 'sketch'"
                                type="pen-tool"
                                size="20"
                              ></feather>
                              <feather
                                v-else-if="link.origin === 'medium'"
                                type="type"
                                size="20"
                              ></feather>
                            </v-btn>
                          </template>
                        </div>
                        <v-card-text
                          class="d-flex flex-column align-start justify-start"
                        >
                          <div
                            class="d-flex flex-row align-start justify-start mb-3"
                          >
                            <v-card rounded="md" class="mr-3">
                              <v-img
                                :src="featuredProj.image"
                                height="50px"
                                width="50px"
                              ></v-img>
                            </v-card>
                            <div
                              class="d-flex flex-column align-start justify-start"
                            >
                              <span
                                class="text-h5 font-weight-medium text--primary"
                              >
                                {{ featuredProj.title }}
                              </span>
                              <span
                                class="caption text--secondary font-weight-medium"
                              >
                                {{ featuredProj.year }} ·
                                {{ featuredProj.type }}
                              </span>
                            </div>
                          </div>
                          <span
                            class="body-1 text--secondary font-weight-regular"
                            >{{ featuredProj.description }}</span
                          >
                        </v-card-text>
                      </v-card>
                    </v-window-item>
                  </v-window>
                </v-col>
              </v-row>
              <v-row v-if="single.products.more.length" class="">
                <h4 class="ma-0 sectionTitle">More</h4>
                <v-col
                  cols="12"
                  class="d-flex flex-row align-start justify-start overflow-x"
                >
                  <v-card
                    width="180px"
                    height="180px"
                    rounded="lg"
                    color="rgb(120,120,120,0.05)"
                    flat
                    class="mr-2 mb-2 ml-2 flex-shrink-0 flex-grow-0 d-flex align-content-space-between flex-wrap pa-4"
                    v-for="(project, i) in single.products.more"
                    :key="i"
                  >
                    <div
                      class="d-flex flex-row align-start justify-space-between"
                      style="width:100%"
                    >
                      <div
                        class="d-flex flex-column justify-start align-start"
                        style="width:100%"
                      >
                        <span
                          class="text-h6 font-weight-medium text--primary"
                          >{{ project.title }}</span
                        >
                        <span
                          class="caption text--secondary font-weight-medium"
                          >{{ project.year }}</span
                        >
                      </div>
                      <v-menu offset-y left v-if="project.links" rounded="lg">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="action"
                            :ripple="false"
                            icon
                            small
                            class="ml-1 flex-grow-0 flex-shrink-0"
                            v-bind="attrs"
                            v-on="on"
                          >
                            <feather type="more-horizontal" size="20"></feather>
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item
                            v-for="(link, index) in project.links"
                            :key="index"
                            :href="link.url"
                            target="blank"
                            :ripple="false"
                          >
                            <v-list-item-icon>
                              <feather
                                v-if="link.type === 'Website'"
                                type="globe"
                                size="20"
                              ></feather>
                              <feather
                                v-else-if="link.type === 'Github'"
                                type="github"
                                size="20"
                              ></feather>
                              <feather
                                v-else-if="link.type === 'Sketch file'"
                                type="pen-tool"
                                size="20"
                              ></feather>
                              <feather
                                v-else-if="link.type === 'Medium'"
                                type="type"
                                size="20"
                              ></feather>
                            </v-list-item-icon>
                            <v-list-item-title>{{
                              link.type
                            }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </div>
                    <span class="caption text--secondary font-weight-medium">{{
                      project.type
                    }}</span>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-sheet>
        <h2 class="text-h3 font-weight-bold text-primary mt-9 mb-5">
          More projects
        </h2>
        <v-sheet>
          <v-row>
            <v-col cols="12" class="d-flex flex-row flex-wrap align-start justify-start">
              <v-card
                width="180px"
                height="180px"
                rounded="lg"
                color="rgb(120,120,120,0.05)"
                flat
                class="mr-3 mb-3 flex-shrink-0 flex-grow-0 d-flex align-content-space-between flex-wrap pa-4"
                v-for="(project, i) in other"
                :key="i"
              >
                <div
                  class="d-flex flex-row align-start justify-space-between"
                  style="width:100%"
                >
                  <div
                    class="d-flex flex-column justify-start align-start"
                    style="width:100%"
                  >
                    <span class="text-h6 font-weight-medium text--primary">{{
                      project.title
                    }}</span>
                    <span class="caption text--secondary font-weight-medium">{{
                      project.year
                    }}</span>
                  </div>
                  <v-menu offset-y left v-if="project.links" rounded="lg">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="action"
                        :ripple="false"
                        icon
                        small
                        class="ml-1 flex-grow-0 flex-shrink-0"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <feather type="more-horizontal" size="20"></feather>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(link, index) in project.links"
                        :key="index"
                        :href="link.url"
                        target="blank"
                        :ripple="false"
                      >
                        <v-list-item-icon>
                          <feather
                            v-if="link.type === 'Website'"
                            type="globe"
                            size="20"
                          ></feather>
                          <feather
                            v-else-if="link.type === 'Github'"
                            type="github"
                            size="20"
                          ></feather>
                          <feather
                            v-else-if="link.type === 'Sketch file'"
                            type="pen-tool"
                            size="20"
                          ></feather>
                          <feather
                            v-else-if="link.type === 'Medium'"
                            type="type"
                            size="20"
                          ></feather>
                        </v-list-item-icon>
                        <v-list-item-title>{{ link.type }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
                <div class="d-flex flex-column align-start justify-start">
                  <div
                    class="d-flex flex-row justify-start align-start flex-wrap"
                  >
                    <v-chip
                      class="mr-1 mb-1"
                      v-for="(tag, i) in project.tags"
                      :key="i"
                      x-small
                      pill
                      color="rgba(120,120,120,0.15)"
                      >{{ tag }}</v-chip
                    >
                  </div>
                  <span class="caption text--secondary font-weight-medium">{{
                    project.type
                  }}</span>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>
    </v-main>
  </v-card>
</template>
<script>
export default {
  name: "Experience",
  data() {
    return {
      experience: [
        {
          company: "GE Aviation",
          companyLogo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/1180px-General_Electric_logo.svg.png",
          positions: [
            {
              title: "UX Design Technology Specialist",
              period: "May 2019 – Present",
              place: "Querétaro, MX",
            },
            {
              title: "UX Visual Designer Intern",
              period: "August 2018 – May 2019 (10 months)",
              place: "Querétaro, MX",
            },
          ],
          description: [
            "Crafted UX flows, designed wireframes, built both visual (InVision) and interactive (coded) prototypes, and created a design system for the different parts included in an ecosystem of services while working on the front-end development of these same projects, ultimately creating a UX-driven development process and speeding up the programmers’ tasks.",
            "Contributed to plan a strategy to measure andinclude User Experience deliverables as well as Accessibility items within a series of metrics used by the whole organization to ensure that the delivered software meets expectations.",
          ],
          products: {
            featured: [
              {
                title: "Sunny UI",
                image: "",

                type: "UX Designer Lead & Front-end Dev",
                description:
                  "Design system for the digital products in the NEXTnet system as part of the Avionica-GE Aviation joint venture.",
                year: "2020",
                backgroundColor: "rgba(255, 195, 0,0.05)",
              },
              {
                title: "NEXTnet ecosystem",
                image: "",

                type: "UX Designer Lead & Front-end Dev",
                year: "2019",
                description:
                  "Product designer lead and part of the software development team that helped create different products of the NEXTnet ecosystem.",
                backgroundColor: "rgba(120,120,120,0.05)",
              },
            ],
            more: [
              {
                title: "NEXTnet Identity",
                image: "",
                type: "Logos & Architecture",
                year: "2020",
              },
              { title: "Orion", image: "", type: "UX Intern", year: "2019" },
            ],
          },
        },
        {
          company: "Universidad Autónoma de Querétaro",
          companyLogo: "https://www.uaq.mx/escudos/e-informatica.gif",
          positions: [
            {
              title: "Front-end Web Developer",
              period: "August 2017 – August 2018 (1 year)",
              place: "Querétaro, MX",
            },
          ],
          description: [
            "Designed and developed (front-end only) the university’s event website, while documenting the UX process involved in it. This case study can be found on Medium. Designed and planned the university’s mobile app to call for help in an emergency within the campus.",
          ],
          products: {
            featured: [
              {
                title: "SAC18",
                image: require("@/assets/sac18.jpg"),

                type: "UX Designer & Front-end Dev",
                description:
                  "Event website for 2018's Semana Académica y Cultural at UAQ's School of Computer Science.",
                year: "2018",
                links: [
                  {
                    origin: "website",
                    url: "https://portalinformatica.uaq.mx/sac/",
                  },
                  { origin: "github", url: "https://github.com/FOC96/SAC18" },
                ],
                backgroundColor: "rgba(141, 166, 188,0.05)",
              },
              {
                title: "SAC18: UX Case Study",
                image: require("@/assets/sac18cs.jpg"),

                type: "UX Designer Lead",
                description:
                  "As part of the team focused on developing the 2018's Semana Académica y Cultural website, I lead a pretty simple UX strategy to bring our final product to life.",
                year: "2018",
                links: [
                  { origin: "sketch", url: "https://sketch.cloud/s/3o8wm" },
                  {
                    origin: "medium",
                    url: "https://medium.com/@FOC96/sac18-489cb55d7e77",
                  },
                ],
                backgroundColor: "rgba(120,120,120,0.05)",
              },
            ],
            more: [
              {
                title: "Salud UAQ",
                image: require("@/assets/saludUAQ.jpg"),
                type: "UX & Front-end redesign",
                year: "2017",
                links: [
                  { type: "Sketch file", url: "https://sketch.cloud/s/Kvq1n" },
                ],
              },
            ],
          },
        },
      ],
      other: [
        {
          title: "Snapchat Clone",
          description:
            "Desktop app developed with Python 3 which intends to recreate Snapchat’s main features: send and receive pictures with simple filters.",
          type: "Desktop app",
          year: "2017",
          tags: ["University project"],
          links: [
            { type: "Github", url: "https://github.com/FOC96/SnapchatClone" },
          ],
        },
        {
          title: "IA-Diagnose",
          description: "Disease diagnostic web app based on Fuzzy Logic.",
          type: "Developer",
          year: "2018",
          tags: ["University Project", "Fuzzy Logic"],
          links: [
            {
              type: "Sketch file",
              url: "https://sketch.cloud/s/Dda5y/m1rpoJP/play",
            },
            { type: "Website", url: "https://fernandorc.com/IA-Diagnose/" },
            { type: "Github", url: "https://github.com/FOC96/IA-Diagnose" },
          ],
        },
        {
          title: "PortScanner",
          description:
            "Midterm project for our Distributed Systems course at UAQ. This project is an iOS app which main goal is to scan a given range of ports from a given host and retrieve those who are available. Then, the user can open a terminal for 3 ports: 22, 80 and 3306.",
          type: "Developer",
          year: "2018",
          tags: ["iOS", "University project"],
          links: [
            { type: "Github", url: "https://github.com/FOC96/PortScanner" },
          ],
        },
        // {
        //   title: "",
        //   image: require("@/assets/"),
        //   description:
        //     "",
        //   type: "",
        //   year: "",
        //   tags: [""],
        //   links: [
        //     { type: "", url: "" }
        //   ]
        // },
        // {
        //   title: "",
        //   image: require("@/assets/"),
        //   description:
        //     "",
        //   type: "",
        //   year: "",
        //   tags: [""],
        //   links: [
        //     { type: "", url: "" }
        //   ]
        // },
      ],
    };
  },
};
</script>
<style>
.overflow-x {
  overflow-x: auto;
  display: flex;
  flex-flow: row nowrap;
}
.sectionTitle {
  font-size: 1rem;
  font-weight: 600;
  opacity: 0.7;
}
.v-window__prev,
.v-window__next {
  margin: 0 -10px !important;
}
.v-list {
  padding: 5px !important;
}
.v-list-item:not(:last-child) {
  border-bottom: 1px solid rgba(120, 120, 120, 0.5);
}
.v-list-item--link:before {
  border-radius: 6px !important;
}
</style>
