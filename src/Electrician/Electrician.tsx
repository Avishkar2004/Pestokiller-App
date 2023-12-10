import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Fan from "../assets/Electrician/fan.png";
import Maintenance from "../assets/Electrician/Maintenance.png";
import Installation from "../assets/Electrician/Installation.png";
import SafetyInspections from "../assets/Electrician/SafetyInspections.png";


const electrician: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>electrician Cleaning</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="Cleaning">
          <div>
            <img src={Fan} alt="Fan Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/electrician/Fan"
              className="surfaceBtn"
            >
              Fan
            </IonButton>
          </div>

          <div>
            <img src={Maintenance} alt="Bathroom Cleaning Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/electrician/Maintenance"
              className="Floorbtn"
            >
              Maintenance
            </IonButton>
          </div>
        </div>

        <div className="Cleaning">
          <div>
            <img src={Installation} alt="Installation Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/electrician/Installation"
              className="kitchenBtn"
            >
              Installation
            </IonButton>
          </div>

          <div>
            <img src={SafetyInspections} alt="Safety Inspections" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/electrician/SafetyInspections"
              className="BathroomBtn"
            >
              Inspections
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default electrician;
