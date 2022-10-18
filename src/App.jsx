import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connexion from "./pages/Connexion";
import Consignes from "./pages/Consignes";
import Question from "./pages/Question";
import Resultat from "./pages/Resultat";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Connexion />} />
        <Route path="/consignes" element={<Consignes />} />
        <Route path="/question" element={<Question />} />
        <Route path="/resultat" element={<Resultat />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <div class="contains">
    //     <h1>
    //       <img class="title_logo" src="/public/MyResp.svg"></img>
    //       <span>MyResp</span> vous souhaite la bienvenue
    //     </h1>
    //   </div>

    //   <div class="contains">
    //     <h1>
    //       <img class="title_logo" src="/public/MyResp.svg"></img>
    //       <span>
    //         M<span class="Excla">!</span>Resp
    //       </span>{" "}
    //       vous souhaite la bienvenue
    //     </h1>
    //   </div>

    //   <div class="contains">
    //     <h1>
    //       <img class="title_logo" src="/public/MyResp.svg"></img>
    //       <span>
    //         MyResp<span class="excla">! </span>
    //       </span>
    //       vous souhaite la bienvenue
    //     </h1>
    //   </div>

    //   <div class="contains">
    //     <h1 class="dark">
    //       <img class="title_logo" src="/public/MyResp.svg"></img>
    //       <span>
    //         MyResp<span class="excla">! </span>
    //       </span>
    //       vous souhaite la bienvenue
    //     </h1>
    //   </div>
    //   <div className="final">
    //     <h1>
    //       <img class="title_logo" src="/public/MyResp.svg"></img>
    //       <span>MyResp</span> vous souhaite la bienvenue
    //     </h1>

    //     <h1>
    //       <img class="title_logo" src="/public/MyResp.svg"></img>
    //       <span>
    //         M<span class="Excla">!</span>Resp
    //       </span>{" "}
    //       vous souhaite la bienvenue
    //     </h1>

    //     <h1>
    //       <img class="title_logo" src="/public/MyResp.svg"></img>
    //       <span>
    //         MyResp<span class="excla">! </span>
    //       </span>
    //       vous souhaite la bienvenue
    //     </h1>

    //     <h1 class="dark">
    //       <img class="title_logo" src="/public/MyResp.svg"></img>
    //       <span>
    //         MyResp<span class="excla">! </span>
    //       </span>
    //       vous souhaite la bienvenue
    //     </h1>
    //   </div>
    // </div>
  );
}
