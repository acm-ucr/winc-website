import NewPeople from "@/public/events/wecode/NewPeople.jpg";
import GuestSpeaker from "@/public/events/wecode/GuestSpeaker.jpg";
import SoManyFirsts from "@/public/events/wecode/SoManyFirsts.jpg";
import Image from "next/image";

const EventSection = ({ 
    title, 
    description, 
    image, 
    imageAlt, 
    reverseLayout = false 
}: { 
    title: string; 
    description: string; 
    image: any; 
    imageAlt: string; 
    reverseLayout?: boolean;
}) => {
    const textContent = (
        <div className="flex flex-col justify-center p-8 flex-1 text-center md:text-right">
            <p className="text-3xl font-bold text-gray-800">
                {title}
            </p>
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-end">
                <p className="text-winc-gray-100 text-sm">
                    '24-25
                </p>
                <div className="w-8 h-1 bg-winc-red-600"></div>
            </div>
            <p className="text-gray-600 text-xl leading-relaxed">
                {description}
            </p>
        </div>
    );

    const imageContent = (
        <div className="flex-1 relative flex justify-center items-center">
            <div className={`absolute w-full h-full bg-winc-red-400 -z-10 transform top-0 ${reverseLayout ? 'md:left-0 md:-translate-x-4 right-0 translate-x-4' : 'right-0 translate-x-4'} -translate-y-4`}></div>
            <div className="relative z-10">
                <Image
                    alt={imageAlt}
                    src={image}
                    className="object-cover"
                    width={300}
                    height={350}
                />
            </div>
        </div>
    );

    return (
        <div className={`flex flex-col md:flex-row ${reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 mb-16`}>
            {textContent}
            {imageContent}
        </div>
    );
};

const MoreWecode = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 md:p-8">            
            <EventSection
                title="Meeting New People!"
                description="Many students go to this event, UCR students try to engage with everyone to gain an enriching experience."
                image={NewPeople}
                imageAlt="Meeting New People"
                reverseLayout={false}
            />
            
            <EventSection
                title="Guest Speakers!"
                description="Fantastic individuals sharing their experience in the technical world."
                image={GuestSpeaker}
                imageAlt="Guest Speakers"
                reverseLayout={true}
            />
            
            <EventSection
                title="So Many Firsts!"
                description="It was many WINCies firsts when experiencing WeCode, there are plenty more firsts to share with WINC!"
                image={SoManyFirsts}
                imageAlt="So Many Firsts"
                reverseLayout={false}
            />
        </div>
    );
};

export default MoreWecode;