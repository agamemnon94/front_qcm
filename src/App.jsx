import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connexion from "./pages/Connexion";
import Consignes from "./pages/Consignes";
import Question from "./pages/Question";
import Resultat from "./pages/Resultat";

export default function App() {
  const [eleve, setEleve] = useState(null);
  const [questionnaire, setQuestionnaire] = useState(null);
  const [examen, setExamen] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Connexion
              updateEleve={setEleve}
              updateQuestionnaire={setQuestionnaire}
              updateExamen={setExamen}
            />
          }
        />
        <Route
          path="/consignes"
          element={<Consignes questionnaireId={questionnaire} />}
        />
        <Route
          path="/question"
          element={
            <Question questionnaireId={questionnaire} examenId={examen} />
          }
        />
        <Route path="/resultat" element={<Resultat />} />
      </Routes>
    </BrowserRouter>
  );
}
