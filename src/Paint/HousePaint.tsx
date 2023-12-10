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

const HousePaint: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HousePaint Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="HousePaintclean" className="HousePaintclean" />
          <img src={""} alt="HousePaint" className="HousePaint" />
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
              <IonButton href="/app/list/painting/housepaint/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>HousePaint Services</h2>
          <p>
            Experience and Expertise: Look for painting services with a good
            track record and experienced painters who are skilled in various
            painting techniques and applications.
          </p>
          <p>
            Reviews and Recommendations: Check online reviews and ask for
            recommendations from friends, family, or neighbors who have used
            painting services in the past.
          </p>
          <p>
            Licensing and Insurance: Ensure that the painting company is
            properly licensed and insured. This protects you from liability in
            case of accidents or damages during the painting process.
          </p>
          <img src={""} alt="HousePaint clean" />
        </div>
      </IonContent>
    </IonPage>
  );
};
export default HousePaint;
