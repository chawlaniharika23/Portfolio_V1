import BackButton from "../../components/BackButton";

function Resume({ onBack }) {
  return (
    <div className="relative w-screen h-screen overflow-hidden">

      <iframe
        src="/resume.pdf"
        title="Resume"
        className="absolute inset-0 w-full h-full"
      />

      <div className="absolute top-8 left-8 z-50">
        <BackButton onClick={onBack} />
      </div>

    </div>
  );
}

export default Resume;