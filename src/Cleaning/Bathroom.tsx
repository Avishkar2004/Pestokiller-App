import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./Bathroom.css";
const FlatOptions = [
  { size: "1 Bathroom", charges: "Rs. 699" },
  { size: "2 Bathroom", charges: "Rs. 999" },
  { size: "3 Bathroom", charges: "Rs. 1299" },
  { size: "4 Bathroom", charges: "Rs. 1599" },
  { size: "Other", charges: "Rs. Other" },
];

const Bathroom: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bathroom Cleaning</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="Bathroom Cleaning" className="BathroomCleaning" />
          <img src={""} alt="BathroomClean" className="BathroomClean" />
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
              <IonButton href="/app/list/cleaning/bathroomcleaning/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="Bathroom-content">
          <h2>Bathroom Cleaning Services</h2>
          <p>
            Deep Cleaning: Bathroom cleaning professionals excel in providing a
            deep and thorough cleaning experience.
          </p>
          <p>
            Tile and Grout Revival: Tiles and grout lines often accumulate dirt,
            mold, and stains over time.
          </p>
          <p>
            Sanitization: Bathrooms are breeding grounds for germs and bacteria.
            Professional cleaning ensures that all surfaces.
          </p>
          <img src={""} alt="Bathroom Clean" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Bathroom;
