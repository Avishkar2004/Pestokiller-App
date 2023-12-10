import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

import A11 from "../assets/Agriculture/A11.png";
import A22 from "../assets/Agriculture/A22.jpg";
import A33 from "../assets/Agriculture/A33.webp";
import "./List.css";
const Agriculture: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agriculture Servi ce</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img src={A11} alt="A11" />
        <img src={A22} alt="A22" />

        <div className="termite-content">
          <h2>AGRICULTURAL PEST CONTROL</h2>
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
          <img src={A33} alt="A33" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Agriculture;
