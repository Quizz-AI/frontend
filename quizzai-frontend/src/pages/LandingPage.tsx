import React from "react";
import LogoPrincipal from "../assets/logoprincipal.png";
import { CustomInput, DifficultyButton } from "../components";

const LandingPage = () => {
  const [difficulty, setDifficulty] = React.useState<string>("Easy");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "linear-gradient(to right, #A852C3, #56106D)",
        gap: "3vh",
      }}
    >
      <img src={LogoPrincipal} alt="Logo Principal" style={{ height: "20%" }} />
      <h1 style={{ color: "white", fontWeight: "lighter" }}>
        Otimize seus estudos usando Quizz.ai!
      </h1>
      <CustomInput style={{ width: "50vw", height: "8vh" }} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "30vw",
        }}
      >
        <DifficultyButton
          difficulty="Easy"
          isToggled={difficulty === "Easy"}
          setDifficulty={() => setDifficulty("Easy")}
        />
        <DifficultyButton
          difficulty="Medium"
          isToggled={difficulty === "Medium"}
          setDifficulty={() => setDifficulty("Medium")}
        />
        <DifficultyButton
          difficulty="Hard"
          isToggled={difficulty === "Hard"}
          setDifficulty={() => setDifficulty("Hard")}
        />
      </div>
    </div>
  );
};

export default LandingPage;
