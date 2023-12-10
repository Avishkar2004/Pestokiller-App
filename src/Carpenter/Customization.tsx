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
  { size: "Interior Design Services", charges: "Rs.10,000" },
  { size: "Custom Kitchen Cabinets", charges: "Rs.100,000" },
  { size: "Web Development", charges: "Rs.20,000" },
  { size: "Custom Mobile App", charges: "Rs.75,000" },
  { size: "Logo Design", charges: "Rs.3,000-Rs.10,000 or more" },
  { size: "Other", charges: "Rs. Other" },
];

const Customization: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Customization Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="Customization" className="Customization" />
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
              <IonButton href="app/list/Carpenter/Customization/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>Customization</h2>
          <p>
            Carpenters use various tools to cut and shape wood accurately
            according to specific measurements and designs. This may involve
            using saws, chisels, routers, and other hand or power tools.
          </p>
          <p>
            They identify the source of the problem and make the necessary
            repairs to ensure the Customization and proper functioning of the
            electrical system.
          </p>
          <p>
            Testing and Troubleshooting: Electricians use various tools and
            equipment to test circuits, outlets, switches, and other components.
          </p>
          <img src={""} alt="InfoCustomization" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Customization;
