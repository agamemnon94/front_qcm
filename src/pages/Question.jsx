import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";

export default function Question(props) {
  const formulaire = useRef();
  const [question, setQuestion] = useState("");
  const [reponses, setReponses] = useState([]);
  const navigate = useNavigate();

  // 1 useEffect() -> fetch( api_exam_question + id questionnaire)
  useEffect(() => {
    fetch(
      `https://127.0.0.1:8000/api/examen/question/${props.questionnaireId}`,
      {
        method: "GET",
      }
    )
      .then((resultat) => resultat.json())
      .then((data) => {
        console.log(data);
        setQuestion(data.question);
        setReponses(data.reponses);
        console.log("====================");
      });
  }, []);

  // texte de la question + reponses (plusieurs)
  // permet de mettre en page le formulaire

  // 2 apiexamencontroller
  // 3 validation apiexamencontroller

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(formulaire.current);
      const resultat = await fetch(
        "https://127.0.0.1:8000/api/examen/reponse",
        {
          method: "POST",
          body: formData,
        }
      );

      console.log(resultat);

      if (resultat.status === 200) {
        const test = await resultat.json();
        console.log(test);

        // récupérer ce qui concerne les questions
        // si retour = false
        // navigate("/resultat");
        // sinon
        // mettre en page le formulaire
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h3>Question : {question}</h3>
      <form onSubmit={handleSubmit} ref={formulaire}>
        {reponses.map((reponse) => {
          return (
            <div className="form-group">
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id={reponse.id}
                  name="reponse"
                  value={reponse.id}
                  // onChange={(event) => {
                  //   setReponses(event.target.value);
                  // }}
                />
                <label htmlFor={reponse.id} className="form-check-label">
                  {reponse.libelle}
                </label>
              </div>
            </div>
          );
        })}
        <button className="btn btn-primary my-3">Valider</button>
        <input type="hidden" name="idExamen" value={props.examenId} />
      </form>
    </Layout>
  );
}
