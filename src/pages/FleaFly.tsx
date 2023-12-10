import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import F11 from "../assets/Flea/F11.jpeg";
import F22 from "../assets/Flea/F22.jpeg";
import F33 from "../assets/Flea/F33.jpg";
import "./List.css";

const FlatOptions = [
  { size: "1 BHK", charges: "Rs. 799" },
  { size: "2 BHK", charges: "Rs. 899" },
  { size: "3 BHK", charges: "Rs. 1299" },
  { size: "4 BHK", charges: "Rs. 1499" },
  { size: "Other", charges: "Rs. Other" },
];

const FleaFly: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Flea and Fly Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={F11} alt="F11" className="Cockroach" />
          <img src={F22} alt="F22" className="Safe" />
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
              <IonButton href="/app/list/pestcontrol/fleafly/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>FLEA AND FLY CONTROL & TREATMENT</h2>
          <p>
            We specialize in effectively treating and eliminating Pests from
            your home or business, using proven methods. That ensures complete
            eradication. After our treatment, we conduct an inspection to
            confirm that the treated area is free of Pests.
          </p>
          <p>
            Just like with termites, a comprehensive inspection is necessary to
            accurately assess the extent of the Pests Issue and determine the
            most appropriate treatment and control measures.
          </p>
          <p>
            For further details or to schedule an inspection, please contact us
            today. We are here to help.
          </p>
          <img src={F33} alt="F33" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default FleaFly;
