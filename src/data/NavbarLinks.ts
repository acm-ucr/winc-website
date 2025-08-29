interface nav {
  name: string;
  link: string;
  className?: string;
}

const navigation: nav[] = [
  {
    name: "about",
    link: "/about",
  },

  {
    name: "board",
    link: "/board",
  },

  {
    name: "events",
    link: "/events",
  },

  {
    name: "join now",
    link: "/",
    className: "bg-winc-beige-100 text-winc-red-400 rounded-full",
  },
];

export default navigation;
