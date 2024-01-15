import Title from "@/components/Title";
import Officer from "@/components/board/Officer";
import Board from "@/data/Board";

const Gallery = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-8">
        <Title text="Meet Our Team" textcolor="text-winc-black" />
        <div className="flex justify-center">
          <div className="bg-winc-pink w-14 h-1 mt-6 md:mb-3"></div>
        </div>
      </div>
      <div className="flex bg-winc-white w-full px-12 py-4 md:py-8 outline outline-8 outline-offset-8 outline-winc-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 w-full gap-2">
          {Board.map((officer, index) => (
            <div key={index} className="flex justify-center py-6">
              <Officer
                image={officer.image}
                name={officer.name}
                position={officer.position}
                linkedin={officer.linkedin}
                email={officer.email}
                year={officer.year}
                major={officer.major}
                pronouns={officer.pronouns}
                hobbies={officer.hobbies}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
