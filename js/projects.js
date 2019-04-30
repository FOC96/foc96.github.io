var Projects = {
    "Apple Music": {
      "type": "UX Redesign Concept",
      "description": "Tired of blinding myself at night while listening some music, I redesigned Apple's Music app with a dark theme, adding some details I thought where pretty cool as well.",
      "image": "",
      "tags": ["UI Concept", "Wireframes", "Sketch Prototype"],
      "links": {
        "Sketch": "https://sketch.cloud/s/Qkzvx/Od75pp/play",
        "GitHub": "https://github.com/FOC96/musicApp"
      },
      "year": "2018"
    },
    "IA-Diagnose": {
      "type": "Web App",
      "description": "Disease diagnostic web app based on Fuzzy Logic.",
      "image": "",
      "tags": ["AI", "Fuzzy Logic", "HTML5 & CSS3", "jQuery", "University Project"],
      "links": {
        "Sketch": "https://sketch.cloud/s/Dda5y/m1rpoJP/play",
        "Website": "https://fernandorc.com/IA-Diagnose/",
        "GitHub": "https://github.com/FOC96/IA-Diagnose"
      },
      "year": "2018"
    },
    "SAC18": {
      "type": "Event Website",
      "description": "Event website for 2018's Semana Académica y Cultural at UAQ's School of Computer Science.",
      "image": "media/cards/sac18.jpg",
      "tags": ["HTML5 & CSS3", "JS", "University Project"],
      "links": {
        "Website": "https://portalinformatica.uaq.mx/sac/",
        "GitHub": "https://github.com/FOC96/SAC18"
      },
      "year": "2018"
    },
    "SAC18: UX Case Study": {
    "type": "UX Case Study",
    "description": "As part of the team focused on developing the 2018's Semana Académica y Cultural website, I lead a pretty simple UX strategy to bring our final product to life. This is how we did it.",
    "image": "media/cards/sac18cs.jpg",
    "tags": ["UX", "Case Study", "UX Research", "Personal Project"],
    "links": {
      "Sketch": "https://sketch.cloud/s/3o8wm",
      "Website": "https://medium.com/@FOC96/sac18-489cb55d7e77"
    },
    "year": "2018"
  },
    "PortScanner": {
    "type": "iOS App",
    "description": "Midterm project for our Distributed Systems course at UAQ. This project is an iOS app which main goal is to scan a given range of ports from a given host and retrieve those who are available. Then, the user can open a terminal for 3 ports: 22, 80 and 3306.",
    "image": "media/cards/portScanner.jpg",
    "tags": ["iOS", "University Project", "Networks", "Cocoa Pods"],
    "links": {
      "GitHub": "https://github.com/FOC96/PortScanner"
    },
    "year": "2018"
  },
    "CSSelio": {
      "type": "CSS Framework",
      "description": "I developed this simple CSS template with several elements such as buttons, text styles, etc. It saved me a lot of time that semester!",
      "image": "media/cards/csselio.jpg",
      "tags": ["UI Template", "CSS3"],
      "links": {
        "Sketch": "https://sketch.cloud/s/4o9WZ",
        "GitHub": "https://github.com/FOC96/CSSelio"
      },
      "year": "2018"
    },
    "MarketScan": {
      "type": "React Native App",
      "description": "Mobile app which main goal is to keep track of what the user will spend while shopping for groseries.",
      "image": "media/cards/marketScan.jpg",
      "tags": ["React Native", "Wireframes", "Sketch Prototype", "University Project"],
      "links": {
        "Sketch": "https://sketch.cloud/s/bL07o/zWzge5/play"
      },
      "year": "2018"
    },
    "Salud UAQ": {
      "type": "UX + Front-end Redesign",
      "description": "Part of the team developing this health-related website to manage student’s records. Focused on UI/UX and front-end revamp.",
      "image": "media/cards/saludUAQ.jpg",
      "tags": ["UX Redesign", "Wireframes", "UI Template", "University Project"],
      "links": {
        "Sketch": "https://sketch.cloud/s/Kvq1n"
      },
      "year": "2017"
    },
    "Snapchat Clone": {
      "type": "Desktop App",
      "description": "Desktop app developed with Python 3 which intends to recreate Snapchat’s main features: send and receive pictures with simple filters.",
      "image": "media/cards/snapChatClone.jpg",
      "tags": ["Python 3", "Kivy", "University Project"],
      "links": {
        "GitHub": "https://github.com/FOC96/SnapchatClone"
      },
      "year": "2017"
    },
    "AgendApp": {
      "type": "Mobile Hybrid App",
      "description": "",
      "image": "media/cards/agendApp.jpg",
      "tags": ["Mobile", "HTML5 & CSS3", "JS", "University Project"],
      "links": {
        "GitHub": "https://github.com/FOC96/AgendApp"
      },
      "year": "2016"
    },
  }

function loadProjects() {
  count = 0
  projectList = ""
  for (var project in Projects) {
    if (Projects.hasOwnProperty(project)) {
      projectList += '<div class="card verticalCard flexThree" onClick="details('+count+')" style="background:url('+getProjectImage(count)+')">'
                      +'<div class="cardInfo">'
                        +'<h2>'+getProjectName(count)+'</h2>'
                        +'<p>'+getProjectType(count)+'</p>'
                      +'</div>'
                    +'</div>'
    }
    count += 1
  }

  container = document.getElementById('projectsSpace').innerHTML = projectList
}

function getProjectName(proj) {
  projectName = Object.keys(Projects)[proj]
  return projectName
}

function getProjectType(proj) {
  projectType = Object.values(Projects)[proj].type
  return projectType;
}

function getProjectDescription(proj) {
  projectDescription = Object.values(Projects)[proj].description
  return projectDescription
}

function getProjectImage(proj) {
  projectImage = Object.values(Projects)[proj].image
  return projectImage;
}

function getProjectTags(proj) {
  projTags = Object.values(Projects)[proj].tags
  return projTags;
}

function getProjectLinks(proj) {
  projectLinks = Object.values(Projects)[proj].links
  return projectLinks;
}

function getProjectYear(proj) {
  projectYear = Object.values(Projects)[proj].year
  return projectYear;
}

function details(proj) {
  tags = getProjectTags(proj)

  tagConts = ""

  for (var i = 0; i < tags.length; i++) {
    tagConts += '<div class="tag">'+tags[i]+'</div>'
  }

  links = getProjectLinks(proj)

  linkStr = ""

  if (links.hasOwnProperty('Sketch')) {
    linkStr += '<a class="sketchBtn" href="'+links.Sketch+'" target="_blank">Prototype</a>'
  }
  if (links.hasOwnProperty('Website')) {
    linkStr += '<a class="previewBtn" href="'+links.Website+'" target="_blank">Preview</a>'
  }
  if (links.hasOwnProperty('GitHub')) {
    linkStr += '<a class="githubBtn" href="'+links.GitHub+'" target="_blank">Repository</a>'
  }

  console.log(linkStr);

  popUp = '<div class="blackBack" onClick="hideDetails()">'+
            '</div>'+
          '<div id="detailView">'+
          '<button class="closeBtn" name="button" onclick="hideDetails()"><img src="media/close.svg" alt=""></button>'+
            '<div class="imageLeft" style="background:url('+getProjectImage(proj)+')">'+
            '</div>'+
            '<div class="projectDetails">'+
              '<div class="projectHead">'+
                '<h2>'+getProjectName(proj)+'</h2>'+
                  '<p>'+getProjectYear(proj)+'</p>'+
                  '<p>'+getProjectType(proj)+'</p>'+
                '<div class="tagSpace">'+
                tagConts+
                '</div>'+
              '</div>'+
              '<p class="projDetail">'+getProjectDescription(proj)+'</p>'+
              linkStr+
            '</div>'+
          '</div>'


  mainContent = document.getElementById('mainContent')

  mainContent.insertAdjacentHTML('beforebegin', popUp)

  document.querySelector('body').classList.add('unscrollable');

}

function hideDetails() {
  document.querySelector('#detailView').remove()
  document.querySelector('.blackBack').remove()
  document.querySelector('body').classList.remove('unscrollable');
}
