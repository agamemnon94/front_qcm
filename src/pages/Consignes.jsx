import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";

export default function Consignes(props) {
  const navigate = useNavigate();
  const [consigne, setConsigne] = useState("");
  console.log(props);

  useEffect(() => {
    fetch(
      `https://127.0.0.1:8000/api/examen/consignes/${props.questionnaireId}`,
      {
        method: "GET",
      }
    )
      .then((resultat) => resultat.json())
      .then((data) => setConsigne(data.consignes));
  }, []);

  return (
    <Layout>
      <h1>Page des consignes</h1>
      <div>{consigne}</div>
      <button onClick={() => navigate("/question")} className="btn btn-primary">
        Commencer
      </button>
    </Layout>
  );
}
