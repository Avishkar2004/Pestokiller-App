import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./Kitchen.css";
const FlatOptions = [
  { size: "Sanitization", charges: "Rs. 699" },
  { size: "Thorough Cleaning", charges: "Rs. 999" },
  { size: "Countertops", charges: "Rs. 1299" },
  { size: "Cabinets and Drawers", charges: "Rs. 1599" },
  { size: "Sink and Faucets", charges: "Rs. 1599" },
  { size: "Backsplash and Wall Tiles", charges: "Rs. 1599" },
  { size: "Flooring", charges: "Rs. 1599" },
  { size: "Dishwasher", charges: "Rs. 1599" },
  { size: "Utensils and Cutlery", charges: "Rs. 1599" },
  { size: "Disinfection", charges: "Rs. 1599" },
  { size: "other", charges: "Rs. other" },
];

const Kitchen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kitchen Cleaning</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="Kitchen Cleaning" className="KitchenCleaning" />
          <img src={""} alt="KitchenClean" className="KitchenClean" />
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
              <IonButton href="/app/list/cleaning/kitchen/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="Kitchen-content">
          <h2>Kitchen Cleaning Services</h2>
          <p>
            Thorough Cleaning: Professional kitchen cleaning services offer a
            comprehensive cleaning regimen that covers every nook and cranny.
          </p>
          <p>
            Appliance Care: Kitchen appliances like ovens, microwaves, and
            refrigerators often accumulate grime and grease over time.
          </p>
          <p>
            Sanitization: Ensuring a hygienic kitchen is paramount. Cleaning
            services not only remove visible dirt but also sanitize surfaces to
            eliminate harmful bacteria.
          </p>
          <img src={""} alt="Kitchen Clean" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Kitchen;
