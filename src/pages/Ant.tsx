import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import GlowAnt from "../assets/Ant/glowant.jpeg";
import NormalAnt from "../assets/Ant/normalant.jpeg";
import ant from "../assets/Ant/ant.jpeg";
import "./List.css";

const FlatOptions = [
  { size: "1 BHK", charges: "Rs. 699" },
  { size: "2 BHK", charges: "Rs. 999" },
  { size: "3 BHK", charges: "Rs. 1299" },
  { size: "4 BHK", charges: "Rs. 1599" },
  { size: "Other", charges: "Rs. Other" },
];

const Ant: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ant Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={GlowAnt} alt="GlowAnt" className="Cockroach" />
          <img src={NormalAnt} alt="NormalAnt" className="Safe" />
          <h1>Price</h1>
          <div className="flat-options">
            <h2>Flat Size Options</h2>
            <select className="flat-size-dropdown">
              {FlatOptions.map((option, index) => (
                <option key={index} value={option.size}>
                  {option.size} - {option.charges}
                </option>
              ))}
            </select>
            <button>
              <IonButton href="/app/list/pestcontrol/ant/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>ANT CONTROL & TREATMENT</h2>
          <p>
            We specialize in effectively treating and eliminating Ant from your
            home or business, using proven methods. Our goal is to ensure
            complete eradication and provide a long-term solution to protect
            your property from further Ant infestations.
          </p>
          <p>
            Just like with Ant, a comprehensive inspection is necessary to
            accurately assess the extent of the Mouse Issue and determine the
            most appropriate treatment and control measures.
          </p>
          <p>
            For further details or to schedule an inspection, please contact us
            today. We are here to help.
          </p>
          <img src={ant} alt="Ant" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Ant;
