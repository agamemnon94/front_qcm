import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";

export default function Question() {
  const formulaire = useRef();
  const [reponse, setReponse] = useState("");
  const navigate = useNavigate();

  const handleSublit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(formulaire.current);
      const resultat = await fetch("https:localhost:8000/api/examen/question", {
        method: "POST",
        body: formData,
      });

      if (resultat.status === 200) {
        // récupérer ce qui concerne les questions
        navigate("/resultat");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h1>Page des questions</h1>
      <form onSubmit={handleSublit} ref={formulaire}>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="reponse1"
            name="reponse"
            value="1"
            onChange={(event) => {
              setReponse(event.target.value);
            }}
          />
          <label htmlFor="reponse" className="form-check-label">
            Réponse 1
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="reponse2"
            name="reponse"
            value="2"
            onChange={(event) => {
              setReponse(event.target.value);
            }}
          />
          <label htmlFor="reponse" className="form-check-label">
            Réponse 2
          </label>
        </div>
        <button className="btn btn-primary my-3">Valider</button>
      </form>
    </Layout>
  );
}
