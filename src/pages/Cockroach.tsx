import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import cockroach from "../assets/Cockroach/cockroach.png";
import Safe from "../assets/Cockroach/safe.png";
import Infocockroach from "../assets/Cockroach/infocockroach.jpg";
import "./List.css";

const FlatOptions = [
  { size: "1 BHK", charges: "Rs. 499" },
  { size: "2 BHK", charges: "Rs. 6999" },
  { size: "3 BHK", charges: "Rs. 8999" },
  { size: "4 BHK", charges: "Rs. 1199" },
  { size: "Other", charges: "Rs. Other" },
];

const Cockroach: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cockroach Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={cockroach} alt="Cockroach" className="Cockroach" />
          <img src={Safe} alt="Safe" className="Safe" />
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
              <IonButton href="/app/list/pestcontrol/cockroach/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>COCKROACH CONTROL & TREATMENT</h2>
          <p>
            We specialize in effectively treating and eliminating COCKROACH from
            your home or business, using proven methods. Our goal is to ensure
            complete eradication and provide a long-term solution to protect
            your property from further COCKROACH infestations.
          </p>
          <p>
            Just like with termites, a comprehensive inspection is necessary to
            accurately assess the extent of the COCKROACH Issue and determine
            the most appropriate treatment and control measures.
          </p>
          <p>
            For further details or to schedule an inspection, please contact us
            today. We are here to help.
          </p>
          <img src={Infocockroach} alt="Infocockroach" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Cockroach;
