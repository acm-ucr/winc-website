export interface Event {
  id: number;
  title: string;
  gradient: string;
  direction: "to-r" | "to-b";
  link: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Rose Hack",
    gradient: "from-winc-red-900 to-winc-red-600",
    direction: "to-r",
    link: "/events/rosehack",
  },
  {
    id: 2,
    title: "Socials",
    gradient: "from-winc-red-500 to-winc-red-800",
    direction: "to-b",
    link: "/events/moresocials",
  },
  {
    id: 3,
    title: "WECode",
    gradient: "from-winc-red-400 to-winc-red-750",
    direction: "to-r",
    link: "/events/wecode",
  },
];
