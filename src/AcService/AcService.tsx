import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import AcRepair from '../assets/AcRepair/AcRepair.png'

const AcService: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AcService Cleaning</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="Cleaning">
          <div>
            <img src={AcRepair} alt="Regular Maintenance" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/AcService/RegularMaintenance"
              className="surfaceBtn"
            >
              Regular
            </IonButton>
          </div>
          <div>
            <img src={""} alt="Shaping Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/AcService/AcRepair"
              className="Floorbtn"
            >
              AC Repair
            </IonButton>
          </div>
        </div>
        <div className="Cleaning">
          <div>
            <img src={""} alt="Installation Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/AcService/AcInstallation"
              className="kitchenBtn"
            >
              AC Installation
            </IonButton>
          </div>
          <div>
            <img src={""} alt="Customization" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/AcService/DuctClean"
              className="BathroomBtn"
            >
              Duct Cleaning
            </IonButton>
          </div>
          <div>
            <img src={""} alt="Customization" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/AcService/Refrigerant"
              className="BathroomBtn"
            >
              Refrigerant
            </IonButton>
          </div>
          <div>
            <img src={""} alt="Customization" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/AcService/Evaporator "
              className="BathroomBtn"
            >
              Evaporator Coil
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AcService;
