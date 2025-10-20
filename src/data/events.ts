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
    gradient: "from-[#F4949C] to-[#8E9CE1]",
    direction: "to-r",
    link: "/events/rosehack",
  },
  {
    id: 2,
    title: "Socials",
    gradient: "from-[#8FB0F9] via-[#DA9CD9] to-[#E2829A]",
    direction: "to-r",
    link: "/events/socials",
  },
  {
    id: 3,
    title: "WECode",
    gradient: "from-[#FA7B82] via-[#AD7597] via-[#76649E] to-[#3A5389]",
    direction: "to-r",
    link: "/events/wecode",
  },
];
