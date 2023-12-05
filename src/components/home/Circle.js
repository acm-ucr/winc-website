import Image from "next/image";

const Circle = ({ width, height, clip, image }) => {
  let rectClip;
  if (clip === "left") {
    rectClip = { clipPath: "polygon(0% 0%, 0% 100%, 50% 100%, 50% 0%)" };
  } else {
    rectClip = { clipPath: "polygon(100% 0%, 100% 100%, 50% 100%, 50% 0%)" };
  }

  return (
    <div
      className="flex justify-center items-center bg-winc-pink rounded-full ring-4 ring-winc-pink ring-offset-8 w-full h-full relative"
      style={{ width: width, height: height }}
    >
      <Image
        src={image}
        className="absolute max-w-none"
        style={{ clipPath: "circle(54.8%)" }}
      />
      <Image src={image} className="rounded-3xl max-w-none" style={rectClip} />
    </div>
  );
};

export default Circle;
