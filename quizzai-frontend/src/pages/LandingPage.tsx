import React from "react";
import LogoPrincipal from "../assets/logoprincipal.png";

const LandingPage = () => {
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
    </div>
  );
};

export default LandingPage;
