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
  { size: "Refrigerant Leak Repair", charges: "Rs.1,500-5,000" },
  { size: "Compressor Replacement", charges: "Rs. 5,000-15,000" },
  { size: "Fan Motor", charges: "Rs. 2,000 - 6,000" },
  { size: "Capacitor", charges: "Rs. 500, 1500" },
  { size: "Thermostat", charges: "Rs. 1,000 - 3,000" },
  { size: "Evaporator Coil", charges: "Rs. 3,000 - 8,000" },
  { size: "Circuit Board", charges: "Rs. 1,000 - 4,000" },
  { size: "Other", charges: "Rs. Other" },
];

const AcRepairs: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AcRepair Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="AcRepair" className="AcRepair" />
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
              <IonButton href="app/list/AcService/AcRepair/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>AcRepair</h2>
          <p>
            Carpenters use various tools to cut and shape wood accurately
            according to specific measurements and designs. This may involve
            using saws, chisels, routers, and other hand or power tools.
          </p>
          <p>
            They identify the source of the problem and make the necessary
            repairs to ensure the AcRepair and proper functioning of the
            electrical system.
          </p>
          <p>
            Testing and Troubleshooting: Electricians use various tools and
            equipment to test circuits, outlets, switches, and other components.
          </p>
          <img src={""} alt="InfoAcRepair" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AcRepairs;
