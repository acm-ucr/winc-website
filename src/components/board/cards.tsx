import board from "@/data/boarddata";
import Card from "@/components/board/card";

const Cards = () => {
  return (
    <div>
      <div className="mb-4 mt-8 text-center text-5xl font-extrabold text-winc-blue-500 md:text-4xl">
        Meet The Team
      </div>
      <div className="mb-2 w-full border-4 border-winc-red-400" />
      <div className="grid grid-cols-1 bg-winc-red-400 py-6 md:grid-cols-3">
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
            starsign={card.starsign}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
