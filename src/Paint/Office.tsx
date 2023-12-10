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

const OfficePaint: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>OfficePaint Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="OfficePaintclean" className="OfficePaintclean" />
          <img src={""} alt="OfficePaint" className="OfficePaint" />
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
              <IonButton href="/app/list/painting/office/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>Office Paint Services</h2>
          <p>
            Interior Painting: This involves painting the walls, ceilings, and
            other interior surfaces of the office. It could be a complete color
            change or simply refreshing the existing paint.
          </p>
          <p>
            Exterior Painting: If the office building has an exterior, an office
            paint service can handle painting the exterior walls, trim, and
            other exterior features to maintain a professional appearance.
          </p>
          <p>
            Special Finishes: Some offices may require special finishes such as
            faux painting, texture painting, or other decorative techniques to
            achieve a unique look.
          </p>
          <img src={""} alt="OfficePaint clean" />
        </div>
      </IonContent>
    </IonPage>
  );
};
export default OfficePaint;
