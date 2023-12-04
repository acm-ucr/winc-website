import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "@/components/Title";
import Officer from "@/components/board/Officer";
import Board from "@/data/Board";

const Gallery = () => {
  return (
    <>
      <div className="flex justify-center my-14">
        <Title text="Meet the Team" />
      </div>
      <div className="bg-winc-pink outline outline-8 outline-offset-8 outline-winc-pink my-8">
        <div className="flex bg-winc-pink w-full px-12 py-8 outline outline-8 outline-offset-8 outline-winc-white">
          <Row className="w-full">
            {Board.map((officer, index) => (
              <Col key={index} lg={3} className="flex justify-center py-6 px-3">
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
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Gallery;
