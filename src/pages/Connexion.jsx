import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";

export default function Connexion(props) {
  const [code, setCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const formulaire = useRef(null);
  // On peut utiliser un composant redirect en React
  const navigate = useNavigate();
  console.log(props);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(formulaire.current);
      const resultat = await fetch(
        "https://127.0.0.1:8000/api/examen/connexion",
        {
          method: "POST",
          body: formData,
        }
      );
      if (resultat.status === 200) {
        const resultatJson = await resultat.json();
        // props.updateEleve(resultatJson.eleve);
        props.updateQuestionnaire(resultatJson.questionnaire);
        props.updateExamen(resultatJson.examen);
        navigate("/consignes");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h1>Page de connexion</h1>
      <form onSubmit={handleSubmit} ref={formulaire}>
        <div className="form-group">
          <label htmlFor="code">Code du questionnaire</label>

          <input
            type="text"
            className="form-control"
            id="code"
            name="code"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="firstname">Votre Prénom</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="form-control"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <button className="btn btn-primary my-3">Valider</button>
      </form>
    </Layout>
  );
}
