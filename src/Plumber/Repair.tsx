import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import TvRepair from "../assets/Repair/tvRepair.png";
import MotorBike from "../assets/Repair/MotorBike.png";
import Mobile from "../assets/Repair/Mobile.png";
import Computer from "../assets/Repair/computer.png";
import CarService from "../assets/Repair/carservice.png";
import "./Repairs.css";

const Repair: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Repair</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="Repair">
          <div className="RepairItem">
            <img src={TvRepair} alt="TvRepair Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/plumbers/tvrepair"
              className="TvRepairBtn"
            >
              TV
            </IonButton>
          </div>
          <div className="Repair">
            <img src={MotorBike} alt="MotorBike Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/plumbers/motorbike"
              className="MotorBikeBtn"
            >
              Motorbike
            </IonButton>
          </div>

          <div className="Repair">
            <img src={Mobile} alt="Mobile Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/plumbers/mobilerepair"
              className="MobileBtn"
            >
              Mobile
            </IonButton>
          </div>

          <div className="Repair">
            <img src={Computer} alt="Computer Repair Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/plumbers/computer"
              className="ComputerBtn"
            >
              Computer
            </IonButton>
          </div>

          <div className="Repair">
            <img src={CarService} alt="CarService Repair Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/plumbers/carepair"
              className="CarServiceBtn"
            >
              Car
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Repair;
