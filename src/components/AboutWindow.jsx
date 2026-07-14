import FinderWindow from "./FinderWindow";

function AboutWindow({ onClose }) {
  return (
    <FinderWindow
      title="About Me"
      onClose={onClose}
    >
      <h1 className="text-3xl font-bold mb-4">
        Hi, I'm Niharika 👋
      </h1>

      <p>
        portfolio
      </p>
    </FinderWindow>
  );
}

export default AboutWindow;