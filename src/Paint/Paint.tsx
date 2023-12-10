import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import HousePaint from "../assets/PaintService/Homepaint.png";
import Office from "../assets/PaintService/officepainting.png";
import Bathroom from "../assets/PaintService/bathroom.png";
import Bedroom from "../assets/PaintService/Bedroom.png";
import "./Paint.css";

const Paint: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Paint</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="Paint">
          <div className="PaintItem">
            <img src={HousePaint} alt="House Paint Service" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/painting/housepaint"
              className="TvPaintBtn"
            >
              House Paint
            </IonButton>
          </div>
          <div className="PaintItem">
            <img src={Office} alt="office Paint Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/painting/office"
              className="AcPaintBtn"
            >
              office Paint
            </IonButton>
          </div>
          <div className="Paint">
            <img src={Bathroom} alt="Bathroom paint" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/painting/bathroom"
              className="MotorBikeBtn"
            >
              Bathroom
            </IonButton>
          </div>

          <div className="Paint">
            <img src={Bedroom} alt="Bedroom Paint" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/painting/bedroom"
              className="MobileBtn"
            >
              Bedroom
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Paint;
