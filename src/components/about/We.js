// import React from "react";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Frame from "@/components/about/Frame";
// import about1 from "@/public/assets/about1.webp";
// import Title from "@/components/Title";

// const We = () => {
//   return (
//     <Row className="text-winc-black flex items-center font-urbanist py-28 px-20">
//       <Col
//       className="flex items-center justify-center">
//         <Frame x={-40} y={-40} picture={about1} />
//       </Col>
//       <Col className="text-left flex flex-col">
//         <Title text="What do we do?" textcolor="text-winc-black" />
//         <div className="bg-winc-pink w-14 h-1 mt-6 "></div>
//         <p className="flex text-winc-black font-normal text-2xl w-11/12 pt-20">
//           We host a plethora of events. Whether you want to ace that coding
//           interview with our workshops, or want to attend speaker panels with
//           some of the most intelligent, down-to-earth people in the industry, or
//           maybe you just want to a hang out with a community, WINC is the place
//           for you.
//         </p>
//       </Col>
//     </Row>
//   );
// };

// export default We;
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Frame from "@/components/about/Frame";
import about1 from "@/public/assets/about1.webp";
import Title from "@/components/Title";

const We = () => {
  return (
    <Row className="text-winc-black flex justify-between items-center w-11/12 mx-auto">
      <Col
        sm={6}
        className="d-none d-lg-inline flex items-center justify-center w-full md:w-6/12 h-full mb-20"
      >
        <Frame x={-40} y={-40} picture={about1} />
      </Col>
      <Col sm={6} className="flex flex-col p-3">
        <div className="flex w-full justify-center whitespace-nowrap lg:mx-left md:mx-auto">
          <Title text="What do we do?" textcolor="text-winc-black" />
        </div>

        <div className="bg-winc-pink w-14 h-1 mt-6 md:items-center"></div>

        <p className="flex text-winc-black font-normal text-2xl w-11/12 pt-20 md:justify-end">
          We host a plethora of events. Whether you want to ace that coding
          interview with our workshops, or want to attend speaker panels with
          some of the most intelligent, down-to-earth people in the industry, or
          maybe you just want to a hang out with a community, WINC is the place
          for you.
        </p>
      </Col>
      <Col
        sm={6}
        className="d-lg-none flex items-center justify-center w-full md:w-6/12 h-full mb-20"
      >
        <Frame x={-40} y={-40} picture={about1} />
      </Col>
    </Row>
  );
};

export default We;

// const We = () => {
//   return (
//     <div className="text-winc-black font-urbanist w-full pt-16 pb-8 md:pt-28 md:pb-16 overflow-hidden">
//       <div className="flex flex-col md:flex-row justify-center items-center w-11/12 mx-auto">
//         <div className="md:w-6/12 flex items-center justify-center mb-8 md:mb-0">
//           <Frame x={-40} y={-40} picture={about1} />
//         </div>
//         <div className="md:w-6/12 md:pl-12 text-left">
//           <div className="md:mb-4">
//             <Title text="What do we do?" textcolor="text-winc-black" />
//           </div>
//           <div className="bg-winc-pink w-14 h-1 mt-2 md:mt-6 mb-4 md:mb-6"></div>
//           <p className="text-winc-black font-normal text-lg md:text-2xl w-full">
//             We host a plethora of events. Whether you want to ace that coding
//             interview with our workshops, or want to attend speaker panels with
//             some of the most intelligent, down-to-earth people in the industry, or
//             maybe you just want to hang out with a community, WINC is the place
//             for you.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default We;
