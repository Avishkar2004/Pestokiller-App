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
  { size: "Board Cutting", charges: "Rs. 20 per linear foot" },
  { size: " Plywood Cutting", charges: "Rs. 30 per square foot" },
  { size: "Door", charges: "Rs. 200 per cut" },
  { size: "Window Cutting", charges: "Rs. 200 per cut" },
  { size: "Curved Cutting", charges: "Rs. Rs.100 per cut" },
  { size: "Groove Cutting", charges: "Rs. 150 per linear foot" },
  { size: "Rebating", charges: "Rs. 50 per cut" },
  { size: " Custom Shapes", charges: "Rs. Based on complexity" },
  { size: "Other", charges: "Rs. Other" },
];

const Cutting: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cutting Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="Cutting" className="Cutting" />
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
              <IonButton href="app/list/Carpenter/Cutting/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>Cutting</h2>
          <p>
            Carpenters use various tools to cut and shape wood accurately
            according to specific measurements and designs. This may involve
            using saws, chisels, routers, and other hand or power tools.
          </p>
          <p>
            They identify the source of the problem and make the necessary
            repairs to ensure the Cutting and proper functioning of the
            electrical system.
          </p>
          <p>
            Testing and Troubleshooting: Electricians use various tools and
            equipment to test circuits, outlets, switches, and other components.
          </p>
          <img src={""} alt="InfoCutting" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Cutting;
