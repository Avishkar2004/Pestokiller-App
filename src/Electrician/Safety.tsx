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
  { size: "Safety Precautions", charges: "Rs. 499" },
  { size: "Electrical Panels", charges: "Rs. 6999" },
  { size: "Outlets and Switches", charges: "Rs. 8999" },
  { size: "Electrical Load", charges: "Rs. 1199" },
  { size: "Other", charges: "Rs. Other" },
];

const Safety: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inspection Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="Safety" className="Safety" />
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
              <IonButton href="app/list/electrician/SafetyInspections/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>Safety</h2>
          <p>
            Electricians also maintain and repair existing electrical systems.
            This could involve troubleshooting issues such as power outages,
            faulty wiring, malfunctioning outlets, and more.
          </p>
          <p>
            They identify the source of the problem and make the necessary
            repairs to ensure the safety and proper functioning of the
            electrical system.
          </p>
          <p>
            Testing and Troubleshooting: Electricians use various tools and
            equipment to test circuits, outlets, switches, and other components.
          </p>
          <img src={""} alt="InfoSafety" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Safety;
