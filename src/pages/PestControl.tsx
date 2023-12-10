import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSearchbar,
  IonSegment,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { trashBinOutline } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";
import "./PestControl.css";
//import InsectPhoto
import Termite from "../assets/InsectPhoto/termite.png";
import Cockroach from "../assets/InsectPhoto/cockroach.png";
import Mosquito from "../assets/InsectPhoto/mosquito.png";
import Mouse from "../assets/InsectPhoto/mouse.png";
import Ant from "../assets/InsectPhoto/ant.png";
import WoodBorer from "../assets/InsectPhoto/wood.png";
import BedBug from "../assets/InsectPhoto/bedbug.png";
import General from "../assets/InsectPhoto/general.png";
import Agriculture from "../assets/InsectPhoto/agriculture.png";
import FleaFly from "../assets/InsectPhoto/flea.png";

const PestControl: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const cardModal = useRef<HTMLIonModalElement>(null);
  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);
  const page = useRef(null);

  const [activeSegment, setActiveSegment] = useState<any>("details");

  const [showContent, setShowContent] = useState<boolean>(false);

  const handleShowContent = () => {
    setShowContent(true);
  };

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar color={"success"}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Pest Control Service's</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon
                slot="icon-only"
                icon={trashBinOutline}
                color={"light"}
              />
            </IonButton>
          </IonButtons>
        </IonToolbar>

        <IonToolbar color={"success"}>
          <IonSearchbar />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed">
          <IonRefresherContent />
        </IonRefresher>

        <div className="service-options-container">
          <IonToolbar>
            <IonSegment
              value={activeSegment}
              onIonChange={(e) => setActiveSegment(e.detail.value)}
            >
              <div className="service-options-container">
                <div
                  className="service-option"
                  onClick={() => setActiveSegment("termite")}
                >
                  <img className="image" src={Termite} alt="Termite" />

                  <IonButton
                    fill="clear"
                    color="dark"
                    href="/app/list/pestcontrol/termite"
                    className="link-button"
                  >
                    Termite
                  </IonButton>
                </div>
                <div
                  className="service-option"
                  onClick={() => setActiveSegment("cockroach")}
                >
                  <img className="image" src={Cockroach} alt="Cockroach" />

                  <IonButton
                    fill="clear"
                    color="dark"
                    href="/app/list/pestcontrol/cockroach"
                  >
                    Cockroach
                  </IonButton>
                </div>
                <div
                  className="service-option"
                  onClick={() => setActiveSegment("mosquito")}
                >
                  <img className="image" src={Mosquito} alt="Mosquito" />

                  <IonButton
                    fill="clear"
                    color="dark"
                    href="/app/list/pestcontrol/mosquito"
                    size="default"
                  >
                    Mosquito
                  </IonButton>
                </div>
                <div
                  className="service-option"
                  onClick={() => setActiveSegment("mouse")}
                >
                  <img className="image" src={Mouse} alt="Mouse" />

                  <IonButton
                    fill="clear"
                    color="dark"
                    href="/app/list/pestcontrol/mouse"
                    className="mouse"
                  >
                    Mouse
                  </IonButton>
                </div>
                <div
                  className="service-option"
                  onClick={() => setActiveSegment("ant")}
                >
                  <img className="image" src={Ant} alt="Ant" />

                  <IonButton
                    fill="clear"
                    color="dark"
                    href="/app/list/pestcontrol/ant"
                    size="default"
                  >
                    Ant
                  </IonButton>
                </div>
                <div
                  className="service-option"
                  onClick={() => setActiveSegment("wood borer")}
                >
                  <img className="image" src={WoodBorer} alt="Wood Borer" />

                  <IonButton
                    fill="clear"
                    color="dark"
                    href="/app/list/pestcontrol/woodborer"
                  >
                    WoodBorer
                  </IonButton>
                </div>
                <div
                  className="service-option"
                  onClick={() => setActiveSegment("bed bug")}
                >
                  <img className="image" src={BedBug} alt="Bed Bug" />

                  <IonButton
                    fill="clear"
                    color="dark"
                    href="/app/list/pestcontrol/bedbug"
                  >
                    BedBug
                  </IonButton>
                </div>
                <div
                  className="service-option"
                  onClick={() => setActiveSegment("flea & fly")}
                >
                  <img className="image" src={FleaFly} alt="Flea & Fly" />
                  <IonButton
                    fill="clear"
                    color="dark"
                    href="/app/list/pestcontrol/fleafly"
                  >
                    Flea & Fly
                  </IonButton>
                </div>
                <div
                  className="service-option"
                  onClick={() => setActiveSegment("general")}
                >
                  <img className="image" src={General} alt="General" />

                  <IonButton
                    fill="clear"
                    color="dark"
                    href="/app/list/pestcontrol/general"
                  >
                    General
                  </IonButton>
                </div>
                <div
                  className="service-option"
                  onClick={() => setActiveSegment("agriculture")}
                >
                  <img className="image" src={Agriculture} alt="Agriculture" />

                  <IonButton
                    fill="clear"
                    color="dark"
                    href="/app/list/pestcontrol/agriculture"
                  >
                    Agriculture
                  </IonButton>
                </div>
              </div>
            </IonSegment>
          </IonToolbar>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PestControl;
