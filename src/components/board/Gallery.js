import Officer from "@/components/board/Officer";
import Board from "@/data/Board";

const Gallery = () => {
  return (
    <div className="grid grid-cols-4 bg-winc-pink content-between">
      {Board.map((officer, index) => (
        <div key={index} className="p-8">
          <Officer
            image={officer.image}
            name={officer.name}
            position={officer.position}
            linkedin={officer.linkedin}
            email={officer.email}
            year={officer.year}
            major={officer.major}
            pronouns={officer.pronouns}
            starsign={officer.starsign}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
