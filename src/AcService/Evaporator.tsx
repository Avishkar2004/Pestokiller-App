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
  { size: "Coil Cleaning", charges: "Rs. 1,500" },
  { size: "Coil Replacement", charges: "Rs. 4,500" },
  { size: " Coil Repair", charges: "Rs. 2,500" },
  { size: "Fin Straightening", charges: "Rs. 699" },
  { size: "Other", charges: "Rs. Other" },
];

const Evaporator: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Evaporator Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="Evaporator" className="Evaporator" />
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
              <IonButton href="app/list/AcService/Evaporator/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>Evaporator</h2>
          <p>
            Carpenters use various tools to cut and shape wood accurately
            according to specific measurements and designs. This may involve
            using saws, chisels, routers, and other hand or power tools.
          </p>
          <p>
            They identify the source of the problem and make the necessary
            repairs to ensure the Evaporator and proper functioning of the
            electrical system.
          </p>
          <p>
            Testing and Troubleshooting: Electricians use various tools and
            equipment to test circuits, outlets, switches, and other components.
          </p>
          <img src={""} alt="InfoEvaporator" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Evaporator;
