import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./CarRepair.css";

const FlatOptions = [
  { size: "Oil Changes", charges: "Rs. 699" },
  { size: "Tire Services", charges: "Rs. 999" },
  { size: "Brake Inspections", charges: "Rs. 1299" },
  { size: "Electrical System Repairs", charges: "Rs. 1599" },
  { size: "A/C Services", charges: "Rs. 1232" },
  { size: "Heating Services", charges: "Rs. 1232" },
  { size: "Exhaust Inspections", charges: "Rs. 1232" },
  { size: "Other", charges: "Rs. Other" },
];

const CarRepair: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CarRepair Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="GlowCarRepair" className="Cockroach" />
          <img src={""} alt="NormalCarRepair" className="Safe" />
          <h1>Price</h1>
          <div className="flat-options">
            <h2>CarRepair Bike</h2>
            <select className="flat-size-dropdown">
              {FlatOptions.map((option, index) => (
                <option key={index} value={option.size}>
                  {option.size} - {option.charges}
                </option>
              ))}
            </select>
            <button>
              <IonButton href="/app/list/plumbers/carepair/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>CarRepair Repair</h2>
          <p>
            Repair: Once we pinpoint the problem, we'll proceed with repairs
            using state-of-the-art tools and techniques.
          </p>
          <p>
            Testing and Quality Check: After repairs, we rigorously test your
            bike to ensure it's running smoothly and safely.
          </p>
          <p>
            Ride Again: Your motorcycle is now ready to hit the road with
            renewed vigor. We'll make sure you're satisfied with the repair
            before you take off.
          </p>
          <img src={""} alt="CarRepair" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default CarRepair;
