import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Glow from "../assets/Mouse/glow.jpeg";
import mouse from "../assets/Mouse/mouse.jpeg";
import Normal from "../assets/Mouse/normal1.jpeg";
import "./List.css";

const FlatOptions = [
  { size: "1 BHK", charges: "Rs. 699" },
  { size: "2 BHK", charges: "Rs. 999" },
  { size: "3 BHK", charges: "Rs. 1299" },
  { size: "4 BHK", charges: "Rs. 1599" },
  { size: "Other", charges: "Rs. Other" },
];


const Mouse: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mouse Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={Glow} alt="Glow" className="Cockroach" />
          <img src={Normal} alt="Normal" className="Safe" />
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
            <button><IonButton href="/app/list/pestcontrol/mouse/bookservice">
                BOOK SERVICE NOW
              </IonButton></button>
          </div>
        </div>
        <div className="termite-content">
          <h2>Mouse CONTROL & TREATMENT</h2>
          <p>
          We specialize in effectively treating and eliminating Mosquito from your home or business, using proven methods. Our goal is to ensure complete eradication and provide a long-term solution to protect your property from further Mosquito infestations.
          </p>
          <p>
          Just like with Mouse, a comprehensive inspection is necessary to accurately assess the extent of the Mouse Issue and determine the most appropriate treatment and control measures.
          </p>
          <p>
          For further details or to schedule an inspection, please contact us today. We are here to help.
          </p>
          <img src={mouse} alt="mouse" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Mouse;
