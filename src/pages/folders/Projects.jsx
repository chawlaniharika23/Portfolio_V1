import BackButton from "../../components/BackButton";
function Projects({ onBack }) {
  return (
    <div className="w-screen h-screen bg-[#F7F3ED] relative">

      <BackButton onClick={onBack} />

      <div className="flex h-full items-center justify-center">
        <h1 className="text-7xl font-bold">
          Projects
        </h1>
      </div>

    </div>
  );
}

export default Projects;