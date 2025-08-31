import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User, Mic, CodeXml } from "lucide-react";
const GrowAndThrive = () => {
  return (
    <div className="my-10 flex w-full flex-col items-center overflow-hidden">
      <div className="w-10/12 border-4 border-winc-yellow-200 bg-white md:w-1/3">
        <div className="m-2 bg-winc-yellow-200 py-2 text-center text-4xl font-bold text-winc-red-400">
          Grow and thrive
        </div>
      </div>

      <p className="mx-2 my-8 text-center text-2xl font-bold text-winc-blue-500">
        We offer all the opportunities and resources necessary for success
      </p>
      <div className="flex w-2/3 flex-col justify-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <div className="flex w-full flex-col items-center justify-evenly rounded-xl bg-winc-red-400 p-2 text-center text-white md:w-1/3">
          <User className="m-7 size-1/5" />
          <p className="my-2 text-2xl font-bold"> COMMUNITY </p>
          <p className="mx-4 text-lg">
            Interact with each other in a more casual setting withour inclusive
            bonding events
          </p>
          <Link href="/" className="w-full">
            <Button className="m-4 w-1/2 bg-white py-5 text-2xl font-semibold text-winc-red-400">
              SLACK
            </Button>
          </Link>
        </div>

        <div className="flex w-full flex-col items-center justify-evenly rounded-xl bg-winc-blue-500 p-2 text-center text-winc-yellow-200 md:w-1/3">
          <Mic className="m-7 size-1/5" />
          <p className="my-2 text-2xl font-bold"> CONVERSATIONS </p>
          <p className="mx-4 text-lg">
            Discuss health and well-being with ''Let's Talk'' and catch up with
            WINC alumni on our Podcast.
          </p>
          <Link href="/" className="w-full">
            <Button className="m-4 w-1/2 bg-winc-yellow-200 py-5 text-2xl font-semibold text-winc-blue-500">
              LISTEN
            </Button>
          </Link>
        </div>

        <div className="flex w-full flex-col items-center justify-evenly rounded-xl bg-winc-yellow-200 p-2 text-center text-winc-red-400 md:w-1/3">
          <CodeXml className="m-7 size-1/5" />
          <p className="my-2 text-2xl font-bold"> WORKSHOPS </p>
          <p className="mx-4 text-lg">
            Tried and true methods from our network of members to break into
            tech.
          </p>
          <Link href="/" className="w-full">
            <Button className="m-4 w-1/2 bg-winc-red-400 py-5 text-2xl font-semibold text-winc-yellow-200">
              YOUTUBE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GrowAndThrive;
