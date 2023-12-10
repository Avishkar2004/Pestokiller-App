import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Carsol from "../assets/Bed Bug/carsol.jpg";
import Carsol2 from "../assets/Bed Bug/carsol2.jpg";
import Glow from "../assets/Bed Bug/glow.jpg";
import "./List.css";

const FlatOptions = [
  { size: "1 BHK", charges: "Rs. 999" },
  { size: "2 BHK", charges: "Rs. 1800" },
  { size: "3 BHK", charges: "Rs. 2200" },
  { size: "4 BHK", charges: "Rs. 3299" },
  { size: "Other", charges: "Rs. Other" },
];

const BedBug: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bed Bug Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={Carsol2} alt="Carsol2" className="Cockroach" />
          <img src={Glow} alt="Glow" className="Safe" />
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
              <IonButton href="/app/list/pestcontrol/bedbug/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>BED BUG CONTROL & TREATMENT</h2>
          <p>
            We specialize in effectively treating and eliminating bed bugs from
            your home or business, using proven methods. That ensures complete
            eradication. After our treatment, we conduct an inspection to
            confirm that the treated area is free of bed bugs.
          </p>
          <p>
            Just like with termites, a comprehensive inspection is necessary to
            accurately assess the extent of the bed bug issue and determine the
            most appropriate treatment and control measures.
          </p>
          <p>
            For further details or to schedule an inspection, please contact us
            today. We are here to help.
          </p>
          <img src={Carsol} alt="Glow" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default BedBug;
