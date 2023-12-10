import React, { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import PestControl from "../assets/Servicesphoto/pestcontrol.png";
import Cleaning from "../assets/Servicesphoto/cleaning.png";
import Plumber from "../assets/Servicesphoto/plumber.png";
import HomePainting from "../assets/Servicesphoto/homepainting.png";
import Electrician from "../assets/Servicesphoto/electrician.png";
import Carpenter from "../assets/Servicesphoto/carpenter.png";
import AcRepair from "../assets/Servicesphoto/acrepair.png";
import "./PestControl.css";
import { menuOutline } from "ionicons/icons";

const List: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"success"}>
          {/* Hamburger icon button */}
          <IonButton slot="start" onClick={toggleMenu}>
            <IonIcon icon={menuOutline} />
          </IonButton>
          <IonTitle>Our Services</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonSearchbar />
      <IonContent className="ion-padding">
        <div className="serviceContainer">
          <div className="pestControl">
            <img src={PestControl} alt="Pest Control Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/pestcontrol"
              className="serviceButton"
            >
              Pest Control
            </IonButton>
          </div>
          <div className="pestControl">
            <img src={Cleaning} alt="Cleaning Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/cleaning"
              className="serviceButton"
            >
              Cleaning
            </IonButton>
          </div>
        </div>

        <div className="serviceContainer">
          <div className="pestControl">
            <img src={Plumber} alt="Plumber Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/plumbers"
              className="plumberButton"
            >
              Plumber
            </IonButton>
          </div>

          <div className="pestControl">
            <img src={HomePainting} alt="HomePainting Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/painting"
              className="plumberButton"
            >
              Painting
            </IonButton>
          </div>
        </div>

        <div className="serviceContainer">
          <div className="pestControl">
            <img src={Electrician} alt="Electrician Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/electrician"
              className="plumberButton"
            >
              Electrician
            </IonButton>
          </div>
          <div className="pestControl">
            <img src={Carpenter} alt="Carpenter Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/Carpenter"
              className="plumberButton"
            >
              Carpenter's
            </IonButton>
          </div>
        </div>
        <div className="serviceContainer">
          <div className="AcImage">
            <img src={AcRepair} alt="AC Repair Services" />
            <IonButton
              fill="clear"
              color="dark"
              href="/app/list/AcService"
              className="plumberButton"
            >
              AC Services
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default List;
