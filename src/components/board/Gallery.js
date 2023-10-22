import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "@/components/Title";
import Officer from "@/components/board/Officer";
import Board from "@/data/Board";

const Gallery = () => {
  return (
    <>
      <div className="my-8">
        <Title text="Meet the Team" />
      </div>
      <div className="bg-winc-pink">
        <hr />
        <div className="bg-winc-white">
          <hr />
          <div className="flex bg-winc-pink w-full px-12 py-8">
            <Row className="w-full">
              {Board.map((officer, index) => (
                <Col key={index} lg={3} className="flex justify-center my-4">
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
                </Col>
              ))}
            </Row>
          </div>
          <hr />
        </div>
        <hr />
      </div>
    </>
  );
};

export default Gallery;
