import board from "@/data/board";
import Card from "@/components/board/card";

const Cards = () => {
  return (
    <div>
      <div className="p-6 text-center text-5xl font-bold text-winc-blue-500 md:text-3xl">
        Meet The Team
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-6 grid h-full w-[90vw] grid-cols-1 place-items-center gap-y-5 bg-winc-red-400 pt-12 md:grid-cols-3">
          {board.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              name={card.name}
              position={card.position}
              linkedin={card.linkedin}
              email={card.email}
              year={card.year}
              major={card.major}
              pronouns={card.pronouns}
              // starsign={card.starsign}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
