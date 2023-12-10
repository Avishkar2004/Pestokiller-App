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
  { size: "Maintenance", charges: "Rs. 499 - 2,000" },
  { size: "Cleaning", charges: "Rs. 300 - 1,000" },
  { size: "Compressor Repair", charges: "Rs. 4,000" },
  { size: "Gas Refill", charges: "Rs. 2,000" },
  { size: " Door Seal ", charges: "Rs. 500" },
  { size: "Thermostat", charges: "Rs. 700" },
  { size: "Water Dispenser", charges: "Rs. 1,500" },
  { size: "Other", charges: "Rs. Other" },
];

const Refrigerant: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Refrigerant Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="Refrigerant" className="Refrigerant" />
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
              <IonButton href="app/list/AcService/Refrigerant/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>Refrigerant</h2>
          <p>
            Carpenters use various tools to cut and shape wood accurately
            according to specific measurements and designs. This may involve
            using saws, chisels, routers, and other hand or power tools.
          </p>
          <p>
            They identify the source of the problem and make the necessary
            repairs to ensure the Refrigerant and proper functioning of the
            electrical system.
          </p>
          <p>
            Testing and Troubleshooting: Electricians use various tools and
            equipment to test circuits, outlets, switches, and other components.
          </p>
          <img src={""} alt="InfoRefrigerant" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Refrigerant;
