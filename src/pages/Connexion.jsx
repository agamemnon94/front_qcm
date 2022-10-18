import React, { useRef, useState } from "react";
import Layout from "../Components/Layout";

export default function Connexion() {
  const [code, setCode] = useState("");
  const formulaire = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(formulaire.current);
      const resultat = await fetch(
        "https://localhost:8000/api/examen/connexion",
        {
          method: "POST",
          body: formData,
        }
      );

      const resultatJson = await resultat.json();
      console.log(resultatJson);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h1>Page de connexion</h1>
      <form onSubmit={handleSubmit} ref={formulaire}>
        <label htmlFor="code">Code du questionnaire</label>
        <input
          type="text"
          className="form-control"
          id="code"
          name="code"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
        <button className="btn btn-primary my-3">Valider</button>
      </form>
    </Layout>
  );
}
