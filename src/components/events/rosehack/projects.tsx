import project1 from "@/public/eventspage/rosehack/project1.webp";
import project2 from "@/public/eventspage/rosehack/project2.webp";
import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <>
      <ProjectCard
        title="Hardware Project #1"
        description="A Rose Hack project that uses hardware and software to formulate the most optimal environmental factors for the plant."
        image={project1}
        reverse={false}
      />
      <ProjectCard
        title="Hardware Project #2"
        description='A hardware project that engages with the old theme "Eco Futurism."'
        image={project2}
        reverse={true}
      />
    </>
  );
};

export default Projects;
