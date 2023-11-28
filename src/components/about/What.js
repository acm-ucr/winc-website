// import React from "react";
// import Title from "@/components/Title.js";
// import Frame from "@/components/about/Frame.js";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import about1 from "@/public/assets/about1.webp";

// const What = () => {
//   return (
//     <Row className="text-winc-black flex items-center font-urbanist py-28 px-20 w-full">
//       <Col className="flex flex-col text-right w-6/12">
//         <div className="flex justify-end w-11/12">
//           <Title text="What is WINC?" textcolor="text-winc-black" />
//         </div>

//         <div className="flex justify-end w-11/12">
//           <div className="bg-winc-pink w-14 h-1 mt-6"></div>
//         </div>
//         <p className="text-left font-normal text-2xl w-full pt-20">
//           WINC is the University of California, Riverside&lsquo;s ACM-W chapter
//           dedicated to empowering and supporting a network of women in tech.
//           <br></br>
//           We are an inclusive community for anyone who is interested in
//           advocating for women in tech and anyone - regardless of skill - who is
//           interested in the field of computing.
//         </p>
//       </Col>

//       <Col className="flex items-center justify-center w-6/12">
//         <Frame x={40} y={-40} picture={about1} />
//       </Col>
//     </Row>
//   );
// };

// export default What;
import React from "react";
import Title from "@/components/Title.js";
import Frame from "@/components/about/Frame.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about1 from "@/public/assets/about1.webp";

const What = () => {
  return (
    <div className="text-winc-black flex items-center justify-center font-urbanist w-full pt-28 pb-16 overflow-hidden">
      <Row className=" w-11/12">
        <Col
          xl={6}
          md={6}
          xs={12}
          className="flex flex-col w-full md:w-6/12 h-full mb-20"
        >
          <div className="flex justify-center md:justify-end whitespace-nowrap">
            <Title text="What is WINC?" textcolor="text-winc-black" />
          </div>

          <div className="flex justify-center md:justify-end">
            <div className=" bg-winc-pink w-14 h-1 mt-6"></div>
          </div>
          <p className=" flex text-left font-normal text-2xl pt-20">
            WINC is the University of California, Riverside&lsquo;s ACM-W
            chapter dedicated to empowering and supporting a network of women in
            tech.
            <br></br>
            We are an inclusive community for anyone who is interested in
            advocating for women in tech and anyone - regardless of skill - who
            is interested in the field of computing.
          </p>
        </Col>

        <Col md={6} xs={11} className="flex items-center justify-center">
          <Frame x={40} y={-40} picture={about1} />
        </Col>
      </Row>
    </div>
  );
};

export default What;
