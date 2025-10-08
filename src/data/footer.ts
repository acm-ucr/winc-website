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
        name: "Discord",
        link: "https://discord.gg/an8eGHYkXg",
      },
      {
        name: "wincucr@gmail.com",
        link: "wincucr@gmail.com",
      },
    ],
  },
];

export default footer;
