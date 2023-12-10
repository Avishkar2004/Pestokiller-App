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
  { size: "1 BHK", charges: "Rs. 499" },
  { size: "2 BHK", charges: "Rs. 999" },
  { size: "3 BHK", charges: "Rs. 1299" },
  { size: "4 BHK", charges: "Rs. 1599" },
  { size: "Other", charges: "Rs. Other" },
];

const BathroomPaint: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BathroomPaint Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img
            src={""}
            alt="BathroomPaintclean"
            className="BathroomPaintclean"
          />
          <img src={""} alt="BathroomPaint" className="BathroomPaint" />
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
              <IonButton href="/app/list/painting/bathroom/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>Office Paint Services</h2>
          <p>
            Moisture Resistance: Bathroom paint is designed to resist moisture
            and humidity. It helps prevent water from seeping into the walls,
            which can lead to paint damage and the growth of mold and mildew.
          </p>
          <p>
            Mildew Resistance: Many bathroom paints include additives that
            inhibit the growth of mold and mildew. These additives help maintain
            a clean and hygienic bathroom environment.
          </p>
          <p>
            Durability: Bathroom paint should be durable enough to withstand
            regular cleaning, scrubbing, and exposure to moisture without easily
            peeling or flaking.
          </p>
          <img src={""} alt="BathroomPaint clean" />
        </div>
      </IonContent>
    </IonPage>
  );
};
export default BathroomPaint;
