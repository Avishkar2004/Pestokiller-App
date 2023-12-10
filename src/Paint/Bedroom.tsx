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
  { size: "1 Bedroom", charges: "Rs. 499" },
  { size: "2 Bedroom", charges: "Rs. 999" },
  { size: "3 Bedroom", charges: "Rs. 1299" },
  { size: "4 Bedroom", charges: "Rs. 1599" },
  { size: "Other", charges: "Rs. Other" },
];

const Bedroom: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bedroom Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="Bedroomclean" className="Bedroomclean" />
          <img src={""} alt="Bedroom" className="Bedroom" />
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
              <IonButton href="/app/list/painting/bedroom/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>Office Paint Services</h2>
          <p>
            Color Consultation: Offer guidance to clients on choosing suitable
            color schemes that match their preferences, room size, lighting, and
            overall design aesthetics. Providing a color consultation can
            enhance the overall service experience.
          </p>
          <p>
            Surface Preparation: Proper surface preparation is crucial for a
            smooth and long-lasting paint finish. This involves cleaning walls,
            patching any holes or cracks, and sanding to create a uniform
            surface.
          </p>
          <p>
            Quality Materials: Use high-quality paints, primers, and tools to
            ensure a professional and durable result. Quality materials
            contribute to a better finish and customer satisfaction.
          </p>
          <img src={""} alt="Bedroom clean" />
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Bedroom;
