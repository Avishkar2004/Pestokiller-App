import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Carpenter: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Carpenter Cleaning</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="Cleaning">
          <div>
            <img src={""} alt="Cutting Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/Carpenter/Cutting"
              className="surfaceBtn"
            >
              Cutting
            </IonButton>
          </div>

          <div>
            <img src={""} alt="Shaping Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/Carpenter/Shaping"
              className="Floorbtn"
            >
              Shaping
            </IonButton>
          </div>
        </div>

        <div className="Cleaning">
          <div>
            <img src={""} alt="Installation Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/Carpenter/Installation"
              className="kitchenBtn"
            >
              Installation
            </IonButton>
          </div>

          <div>
            <img src={""} alt="Customization" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/Carpenter/Customization"
              className="BathroomBtn"
            >
              Customization
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Carpenter;
