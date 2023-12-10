import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import CleaningPhoto from "../assets/CleaningPhoto/cleaning2.png";
import Bathroom from "../assets/CleaningPhoto/bathroom1.png";
import Kitchen from "../assets/CleaningPhoto/kitchen.png";
import SofaCarpet from "../assets/CleaningPhoto/sofa&carpet.png";
import "./Cleaning.css";

const Cleaning: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cleaning</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="Cleaning">
          <div>
            <img src={CleaningPhoto} alt="Cleaning Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/cleaning/housecleaning"
              className="HouseeBtn"
            >
              House Cleaning
            </IonButton>
          </div>

          <div>
            <img src={Bathroom} alt="Bathroom Cleaning Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/cleaning/bathroomcleaning"
              className="Bathrombtn"
            >
              Bathroom Cleaning
            </IonButton>
          </div>
        </div>

        <div className="Cleaning">
          <div>
            <img src={Kitchen} alt="Kitchen Cleaning Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/cleaning/kitchen"
              className="kitchenBtn"
            >
              Kitchen Cleaning
            </IonButton>
          </div>

          <div>
            <img src={SofaCarpet} alt="Sofa & Carpet Cleaning Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/cleaning/sofacarpet"
              className="sofaBtn"
            >
              Sofa & Carpet
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Cleaning;
