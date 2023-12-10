import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./MotorBike.css";

const FlatOptions = [
  { size: "Regular Inspections", charges: "Rs. 699" },
  { size: "Fluid Checks", charges: "Rs. 999" },
  { size: "Chain and Sprocket Care", charges: "Rs. 1299" },
  { size: "Tire Maintenance", charges: "Rs. 1599" },
  { size: "Battery Care", charges: "Rs. 1200" },
  { size: "other", charges: "Rs. other" },
];

const MotorBike: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MotorBike Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="GlowMotorBike" className="Cockroach" />
          <img src={""} alt="NormalMotorBike" className="Safe" />
          <h1>Price</h1>
          <div className="flat-options">
            <h2>Motor Bike</h2>
            <select className="flat-size-dropdown">
              {FlatOptions.map((option, index) => (
                <option key={index} value={option.size}>
                  {option.size} - {option.charges}
                </option>
              ))}
            </select>
            <button>
              <IonButton href="/app/list/plumbers/motorbike/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>MotorBike Service's</h2>
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
          <img src={""} alt="MotorBike" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MotorBike;
