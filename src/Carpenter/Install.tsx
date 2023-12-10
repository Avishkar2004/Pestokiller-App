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
  { size: "Furniture", charges: "Rs.500 per piece" },
  { size: "Appliance", charges: "Rs.800 per appliance" },
  { size: "Fixture", charges: "Rs.300 per fixture" },
  { size: "Electrical", charges: "Rs.based on complexity" },
  { size: "Plumbing", charges: "Rs.based on complexity" },
  { size: "HVAC", charges: "Rs.based on system size & complexity" },
  { size: "Flooring", charges: "Rs.based on floor type & area" },
  { size: "Window & Door", charges: "Rs. 1,000 per unit" },
  { size: "Other", charges: "Rs. Other" },
];

const Install: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Install Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="Install" className="Install" />
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
              <IonButton href="app/list/Carpenter/Installation/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>Install</h2>
          <p>
            Carpenters use various tools to cut and shape wood accurately
            according to specific measurements and designs. This may involve
            using saws, chisels, routers, and other hand or power tools.
          </p>
          <p>
            They identify the source of the problem and make the necessary
            repairs to ensure the Install and proper functioning of the
            electrical system.
          </p>
          <p>
            Testing and Troubleshooting: Electricians use various tools and
            equipment to test circuits, outlets, switches, and other components.
          </p>
          <img src={""} alt="InfoInstall" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Install;
