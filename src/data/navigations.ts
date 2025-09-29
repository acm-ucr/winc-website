interface nav {
  name: string;
  link: string;
  className?: string;
}

const Navigations: nav[] = [
  {
    name: "about",
    link: "/about",
  },
  {
    name: "board",
    link: "/board",
  },
  {
    name: "calendar",
    link: "/calendar",
  },
  {
    name: "events",
    link: "/events/overview",
  },
  {
    name: "join now",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe5M-kEntAmPHnHNcerN6F8G5eevJs6zQJgEt3X3hcj_eNV3w/viewform",
    className: "bg-winc-yellow-200 text-winc-red-400 rounded-full px-4",
  },
];

export default Navigations;
