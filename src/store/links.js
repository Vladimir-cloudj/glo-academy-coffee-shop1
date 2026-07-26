const links = {
  state: {
    header: {
      id: 0,
      link: "/",
      icon: "Logo.svg",
    },
    footer: {
      id: 0,
      link: "/",
      icon: "Logo_black.svg",
    },
    other: [
      {
        id: 1,
        text: "our-coffee",
        link: "/our-coffee",
      },
      {
        id: 2,
        text: "for your pleasure",
        link: "/for-your-pleasure",
        icon: "",
      },
      {
        id: 3,
        text: "contacts us",
        link: "/contacts-us",
      },
    ],
  },
  getters: {
    getHeaderLinks(state) {
      return { header: state.header, other: state.other };
    },
    getFooterLinks(state) {
      return { footer: state.footer, other: state.other };
    },
  },
};
export default links;