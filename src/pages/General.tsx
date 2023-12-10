import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

import G11 from "../assets/General/g11.jpg";
import G22 from "../assets/General/g22.png";
import general from "../assets/General/genral.jpeg";
import "./List.css";

const FlatOptions = [
  { size: "1 BHK", charges: "Rs. 799" },
  { size: "2 BHK", charges: "Rs. 899" },
  { size: "3 BHK", charges: "Rs. 1299" },
  { size: "4 BHK", charges: "Rs. 1499" },
  { size: "Other", charges: "Rs. Other" },
];

const General: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>General Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={G11} alt="G11" className="Cockroach" />
          <img src={G22} alt="G22" className="Safe" />
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
              <IonButton href="/app/list/pestcontrol/general/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>GENRAL PEST CONTROL</h2>
          <p>
            We specialize in effectively treating and eliminating Pest from your
            home or business, using proven methods. Our goal is to ensure
            complete eradication and provide a long-term solution to protect
            your property from further Pests infestations.
          </p>
          <p>
            Just like with termites, a comprehensive inspection is necessary to
            accurately assess the extent of the Pest Issue and determine the
            most appropriate treatment and control measures.
          </p>
          <p>
            For further details or to schedule an inspection, please contact us
            today. We are here to help.
          </p>
          <img src={general} alt="general" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default General;
