import { useState } from "react";
import Intro from "./pages/Intro";
import FolderStack from "./pages/FolderStack";

function App() {
  const [screen, setScreen] = useState("intro");

  return (
    <>
      {screen === "intro" ? (
        <Intro onOpenDesktop={() => setScreen("folderStack")} />
      ) : (
        <FolderStack />
      )}
    </>
  );
}

export default App;