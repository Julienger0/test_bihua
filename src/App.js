import React, { useState, useEffect } from "react";
import "./App.css";
import Image_content from "./image_content";

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const [activeText, setActiveText] = useState(0);
  const texts = [
    "En suivant l'un de nos parcours de 18 mois, vous allez relever des défis et repousser vos limites. Avec Tertia Via vous opérez une transformation en profondeur dans le but de devenir des leaders agiles, visionnaires et inspirants, capables de réussir des changements majeurs et impactants pour vos activités et vos équipes.",
    "La finalité de nos programmes c'est de vous donner toutes les clés pour transformer votre organisation. Nous partons de votre projet et concrétisons sa transformation avec vous. Voilà pourquoi, pour accéder à notre enseignement, il est nécessaire d’avoir une situation professionnelle valide et concrète.",
    "Nos parcours intègrent les meilleures pratiques de la pédagogie expérientielle et de l'apprentissage en intelligence collective. Avec Tertia Via vous bénéficiez d'un environnement stimulant où vous pourrez échanger des idées, partager des expériences enrichissantes et créer des collaborations fructueuses avec d'autres leaders engagés dans la même démarche de transformation.",
  ];
  const title = [
    "Un parcours complet",
    "Un processus de transformation pour vous et votre activité",
    "Une expérience immersive et stimulante",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && activeText < texts.length - 1) {
        setActiveText(activeText + 1);
        console.log("Défilement vers le bas");
      } else if (currentScrollPos < prevScrollPos && activeText > 0) {
        setActiveText(activeText - 1);
        console.log("Défilement vers le haut");
      }

      setPrevScrollPos(currentScrollPos);
    };

    let timeoutId;
    const delayedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 500); // Délai de 1 seconde
    };

    window.addEventListener("scroll", delayedHandleScroll);

    return () => {
      window.removeEventListener("scroll", delayedHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [prevScrollPos]);

  return (
    <div className="app">
      <div className="image">
        <Image_content />
      </div>
      <div className="column">
        {texts.map((text, index) => (
          <div
            className={`container ${
              activeText === index ? "active" : "inactive"
            }`}
            key={index}
          >
            <h1 className="title">{title[index]}</h1>
            <p className="text">{text}</p>
            <div className="button">
              Découvrir nos parcours{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
              >
                <path
                  d="M8.60573 10.9091L9.66639 12L15.5 6.00002L9.66634 6.95657e-08L8.60568 1.09091L12.6287 5.22861L0.500001 5.22861L0.500001 6.77139L12.6287 6.77139L8.60573 10.9091Z"
                  fill="#050505"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
