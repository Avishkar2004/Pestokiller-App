import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const FlatOptions = [
  { size: "Window AC", charges: "Rs.1,000 - 3,000" },
  { size: "Split AC", charges: "Rs. 2,000 - 6,000" },
  { size: "Central AC", charges: "Rs. 8999" },
  { size: "Ductless Mini-Split AC ", charges: "Rs. 3,000 - 10,000" },
  { size: "Inverter AC", charges: "Rs. 2,000 - 7,000" },
  { size: "Ceiling Cassette", charges: "Rs. 3,000 - 10,000" },
  { size: "Other", charges: "Rs. Other" },
];

const AcInstall: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AcInstall Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="AcInstall" className="AcInstall" />
          <img src={""} alt="Safe" className="Safe" />
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
              <IonButton href="app/list/AcService/AcInstallation/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>AcInstall</h2>
          <p>
            Carpenters use various tools to cut and shape wood accurately
            according to specific measurements and designs. This may involve
            using saws, chisels, routers, and other hand or power tools.
          </p>
          <p>
            They identify the source of the problem and make the necessary
            repairs to ensure the AcInstall and proper functioning of the
            electrical system.
          </p>
          <p>
            Testing and Troubleshooting: Electricians use various tools and
            equipment to test circuits, outlets, switches, and other components.
          </p>
          <img src={""} alt="InfoAcInstall" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AcInstall;
