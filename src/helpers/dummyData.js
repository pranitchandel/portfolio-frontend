export const directories = {
  root: ["About", "Projects", "Contacts", "Skills"],
  About: ["About1", "About2"],
  Projects: ["Project1", "Project2", "Project3", "Project4"],
  Contacts: ["Contact"],
  Skills: ["Skill"],
  Help: ["Help"],
};

export const dummyText = [
  "Welcome to the portfolio of Pranit Kumar Chandel, a skilled Full Stack Web Developer with 2.5 years of experience. Let's build something amazing together!",
];

export const data = {
  Help: {
    styling: "help",
    heading: [
      { head: { value: "Help" } },
      { content1: { value: "cd <DIR> : to navigate to any directory" } },
      {
        content2: {
          value: "ls : to list all files and diretories inside a directory",
          image: "",
        },
      },
      {
        content3: {
          value: "cd .. : go back to last the last directory",
          image: "",
        },
      },
      { content4: { value: "clear : clear the console" } },
      { content5: { value: "pwd : get present working directory" } },
      { content6: { value: "open <LINK> : open any link" } },
      {
        content7: {
          value:
            "NOTE : Type or click on the suggestions shown on hovering the items for effortless command execution",
        },
      },
    ],
    image: "console",
  },

  About: {
    styling: "about",
    heading: [
      { head: { value: "About" } },
      { content1: { value: "Pranit Kumar Chandel" } },
      { content2: { value: "from Chhattisgarh, India", image: "" } },
      { content3: { value: "Software Engineer", image: "" } },
      { content4: { value: "More than 2.5 years of work experience." } },
    ],
    image: "profile",
    showHover: true,
  },

  Contacts: {
    styling: "contact",
    heading: [
      { head: { value: "Contacts" } },
      { content1: { value: "Feel free to react out to me !!!", image: "" } },
      { content2: { value: "More info in contact section" } },
    ],
    image: "contact",
    showHover: true,
  },

  Skills: {
    styling: "skill",
    heading: [
      { head: { value: "Skills" } },
      { content1: { value: "MERN and Java full stack developer", image: "" } },
      { content2: { value: "More info in skills section" } },
    ],
    image: "skill",
    showHover: true,
  },

  Projects: {
    styling: "project",
    heading: [
      { head: { value: "Projects" } },
      { content1: { value: "MailApp", image: "" } },
      { content2: { value: "KanbanPro", image: "" } },
      { content3: { value: "BookBazaar", image: "" } },
      { content4: { value: "SoulRoute", image: "" } },
    ],
    image: "code",
    showHover: true,
  },
  Contact: {
    styling: "contact",
    showHeader: true,
    heading: [
      { head: { value: "Feel free to react out to me !!!" } },
      { Phone1: { value: "8296876551", image: "phone" } },
      { Phone2: { value: "7879196651", image: "phone" } },
      { Email: { value: "chandel.pranit@gmail.com", image: "email" } },
      {
        LinkedIn: {
          value: "https://www.linkedin.com/in/pranitchandel/",
          image: "linkedin",
        },
      },
      {
        Github: { value: "https://github.com/pranitchandel", image: "github" },
      },
    ],
    image: "contact",
  },
  About1: {
    from: "Oct 2020",
    to: "Dec 2023",

    heading: [
      {
        content1: {
          value:
            "I started my journey as a Software Developer at Empower, where I gained valuable experience in developing robust backend systems using Java. I worked on various projects, collaborating with cross-functional teams to deliver scalable solutions.",
          image: "",
        },
      },
    ],
    image: "empower",
  },
  About2: {
    from: "Dec 2022",
    to: "Present",

    heading: [
      {
        content1: {
          value:
            "Currently, I am working as a Software Engineer at doodleblue innovations. Here, I continue to sharpen my skills in building dynamic web applications with React.js, focusing on creating intuitive user interfaces and optimizing performance.",
          image: "",
        },
      },
    ],
    image: "doodleblue",
  },
  Project1: {
    showHover: true,
    heading: [
      {
        content1: {
          value:
            "MailApp: Simplifying Email Communication with a User-Friendly Interface",
          image: "",
        },
      },
      {
        content2: {
          value:
            "MailApp is a web-based email application inspired by Gmail, designed to streamline and simplify email communication",
          image: "",
        },
      },
      {
        content3: {
          value:
            "Clean and intuitive design inspired by Gmail for a familiar user experience.",
          image: "",
        },
      },
      {
        content4: {
          value: "Compose, send, and receive emails seamlessly.",
          image: "",
        },
      },
    ],
    image: "mail",
    link: "https://mail-app-frontend.onrender.com",
  },
  Project2: {
    showHover: true,
    heading: [
      {
        content1: {
          value: "BookBazaar: Unleash the World of Books at Your Fingertips",
          image: "",
        },
      },
      {
        content2: {
          value:
            "BookBazaar is an immersive e-commerce website dedicated to books, providing book enthusiasts with a vast collection of titles, genres, and authors.",
          image: "",
        },
      },
      {
        content3: {
          value:
            "Save favorite books to a wishlist for future reference or purchase.",
          image: "",
        },
      },
      {
        content4: {
          value:
            "Ratings and reviews to help users make informed decisions and discover books with high reader satisfaction.",
          image: "",
        },
      },
    ],

    image: "book",
    link: "https://where-is-my-book-fontend.onrender.com",
  },
  Project3: {
    showHover: true,
    heading: [
      {
        content1: {
          value: "KanbanPro: Streamline Workflows with a Powerful Kanban Board",
          image: "",
        },
      },
      {
        content2: {
          value:
            "KanbanPro is a web-based Kanban board application designed to optimize task management, collaboration, and productivity",
          image: "",
        },
      },
      {
        content3: {
          value:
            "Visualize your workflow with customizable Kanban boards, columns, and cards.",
          image: "",
        },
      },
      {
        content4: {
          value:
            "Drag and drop cards between columns to track task progress easily.",
          image: "",
        },
      },
    ],
    image: "kanban",
    link: "https://kanban-board-2-0.netlify.app/",
  },
  Project4: {
    showHover: true,
    heading: [
      {
        content1: {
          value:
            "SoulRoute: Navigating Meaningful Relationships with Dijkstra's Algorithm",
          image: "",
        },
      },
      {
        content2: {
          value:
            "Implement Dijkstra's Algorithm to determine the shortest and most compatible pathway to connect with potential matches.",
          image: "",
        },
      },
      {
        content3: {
          value:
            "Input preferences relationships between two individuals to find all possible relations between any two individual.",
          image: "",
        },
      },
    ],
    image: "relation",
    link: "https://relationship-app.onrender.com",
  },

  Skill: {
    styling: "skills",
    showHeader: true,
    heading: [
      { Java: { value: 6, image: "java" } },
      { HTML: { value: 8, image: "html" } },
      { Reactjs: { value: 8, image: "react" } },
      { SpringBoot: { value: 8, image: "springBoot" } },
      { Nodejs: { value: 6, image: "nodeJs" } },
      { Git: { value: 7, image: "git" } },
      { SQL: { value: 6, image: "sql" } },
      { Javascript: { value: 8, image: "javascript" } },
    ],
    image: "skill",
  },
};
