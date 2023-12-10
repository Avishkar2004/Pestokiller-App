import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Glow from "../assets/Termite/glow.jpg";
import Normal from "../assets/Termite/normal.jpg";
import termite from "../assets/Termite/termite.jpg";
import "./List.css";

const FlatOptions = [
  { size: "1 BHK", charges: "Rs. 2999" },
  { size: "2 BHK", charges: "Rs. 3999" },
  { size: "3 BHK", charges: "Rs. 4999" },
  { size: "4 BHK", charges: "Rs. 5999" },
  { size: "Other", charges: "Rs. Other" },
];

const Termite: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Termite Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={Glow} alt="Glow" className="termite-image" />
          <img src={Normal} alt="Normal" className="termite-image" />
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
              <IonButton href="app/list/pestcontrol/termite/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>Termite Control & Treatment</h2>
          <p>
            We specialize in effectively treating and eliminating termites from
            your home or business, using proven methods. Our goal is to ensure
            complete eradication and provide a long-term solution to protect
            your property from further termite infestations.
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
          <img src={termite} alt="Termite" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Termite;
