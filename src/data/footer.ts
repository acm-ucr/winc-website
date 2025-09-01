interface Links {
  name: string;
  link: string;
}

interface Footer {
  title: string;
  links: Links[];
}

const footer: Footer[] = [
  {
    title: "PEOPLE",
    links: [
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Board",
        link: "/board",
      },
    ],
  },
  {
    title: "JOIN",
    links: [
      {
        name: "Events",
        link: "/events/overview",
      },
      {
        name: "Membership",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSe5M-kEntAmPHnHNcerN6F8G5eevJs6zQJgEt3X3hcj_eNV3w/viewform",
      },
    ],
  },
  {
    title: "Stay In Touch",
    links: [
      {
        name: "Slack",
        link: "https://join.slack.com/t/wincucr/shared_invite/zt-27xdsp07m-sPKN9hnqg0KRzYi832tm7Q",
      },
      {
        name: "wincucr@gmail.com",
        link: "wincucr@gmail.com",
      },
    ],
  },
];

export default footer;
