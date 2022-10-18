import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";

export default function Consignes() {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://localhist:8000/api/examen/consignes", {
      method: "GET",
    })
      .then((resultat) => resultat.json)
      .then((data) => console.log(data));
  }, []);

  return (
    <Layout>
      <h1>Page des consignes</h1>
      <button onclick={() => navigate("/question")} className="btn btn-primary">
        Commencer
      </button>
    </Layout>
  );
}
