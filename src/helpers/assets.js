const importIcons = (fileName) => {
  return require(`../assets/icons/${fileName}`);
};

// const importImages = (fileName) => {
//   return require(`../assets/images/${fileName}`);
// };

export const icons = {
  empower: importIcons("empower-logo.svg"),
  doodleblue: importIcons("doodleblue.png"),
  mail: importIcons("mail.svg"),
  book: importIcons("book.svg"),
  kanban: importIcons("kanban.svg"),
  relation: importIcons("relation.svg"),
  phone: importIcons("phone.svg"),
  email: importIcons("email-1.svg"),
  linkedin: importIcons("linkedin.svg"),
  github: importIcons("github.svg"),
  sql: importIcons("sql.svg"),
  react: importIcons("react.svg"),
  git: importIcons("git.svg"),
  javascript: importIcons("javascript.svg"),
  html: importIcons("html.svg"),
  css: importIcons("css.svg"),
  nodeJs: importIcons("nodejs.svg"),
  springBoot: importIcons("spring-boot.svg"),
  java: importIcons("java.svg"),
  contact: importIcons("contact.svg"),
  profile: importIcons("profile-photo.jpg"),
  code: importIcons("code.svg"),
  skill: importIcons("rocket.svg"),
  close: importIcons("close.svg"),
  maximize: importIcons("maximize.svg"),
  minimize: importIcons("minimize.svg"),
  console: importIcons("console.svg"),
};
