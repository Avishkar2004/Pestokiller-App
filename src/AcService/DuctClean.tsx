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
  { size: "Residential AC Duct", charges: "Rs. 3,000 - 8,000" },
  { size: "Commercial AC Duct", charges: "Rs. 6999" },
  { size: "Other", charges: "Rs. Other" },
];

const DuctClean: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DuctClean Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="DuctClean" className="DuctClean" />
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
              <IonButton href="app/list/AcService/DuctClean/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>DuctClean</h2>
          <p>
            Carpenters use various tools to cut and shape wood accurately
            according to specific measurements and designs. This may involve
            using saws, chisels, routers, and other hand or power tools.
          </p>
          <p>
            They identify the source of the problem and make the necessary
            repairs to ensure the DuctClean and proper functioning of the
            electrical system.
          </p>
          <p>
            Testing and Troubleshooting: Electricians use various tools and
            equipment to test circuits, outlets, switches, and other components.
          </p>
          <img src={""} alt="InfoDuctClean" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DuctClean;
