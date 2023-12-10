import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./SofaCarpet.css";
const FlatOptions = [
  { size: "Vacuuming", charges: "Rs. 699" },
  { size: "Stain Pre-treatment", charges: "Rs. 999" },
  { size: "Fabric Compatibility", charges: "Rs. 1299" },
  { size: "Deep Cleaning", charges: "Rs. 1599" },
  { size: "Odor Removal", charges: "Rs. 1599" },
  { size: "Drying", charges: "Rs. 1599" },
  { size: "other", charges: "Rs. other" },
];

const SofaCarpet: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sofa & Carpet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img
            src={""}
            alt="SofaCarpet Cleaning"
            className="SofaCarpetCleaning"
          />
          <img src={""} alt="SofaCarpet Cleaning" className="SofaCarpetClean" />
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
              <IonButton href="/app/list/cleaning/sofacarpet/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="SofaCarpet-content">
          <h2>Sofa & Carpet Cleaning Services</h2>
          <p>
            Deep Cleaning: SofaCarpet cleaning professionals excel in providing
            a deep and thorough cleaning experience.
          </p>
          <p>
            Tile and Grout Revival: Tiles and grout lines often accumulate dirt,
            mold, and stains over time.
          </p>
          <p>
            Sanitization: Bathrooms are breeding grounds for germs and bacteria.
            Professional cleaning ensures that all surfaces.
          </p>
          <img src={""} alt="SofaCarpet Clean" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SofaCarpet;
