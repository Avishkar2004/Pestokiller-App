import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import WoodBorer1 from "../assets/Wood Borer/woodborer1.jpeg";
import WoodBorer2 from "../assets/Wood Borer/woodborer2.jpg";
import woodborer from "../assets/Wood Borer/woodborer.jpeg";
import "./List.css";

const FlatOptions = [
  { size: "1 BHK", charges: "Rs. 1699" },
  { size: "2 BHK", charges: "Rs. 1899" },
  { size: "3 BHK", charges: "Rs. 2199" },
  { size: "4 BHK", charges: "Rs. 2399" },
  { size: "Other", charges: "Rs. Other" },
];

const WoodBorer: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Wood Borer Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={WoodBorer1} alt="WoodBorer1" className="Cockroach" />
          <img src={WoodBorer2} alt="WoodBorer2" className="Safe" />
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
            <IonButton href="/app/list/pestcontrol/woodborer/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>WOODBORER CONTROL & TREATMENT</h2>
          <p>
            We specialize in effectively treating and eliminating Woodborer from
            your home or business, using proven methods. Our goal is to ensure
            complete eradication and provide a long-term solution to protect
            your property from further Woodborer infestations.
          </p>
          <p>
            Just like with Woodborer, a comprehensive inspection is necessary to
            accurately assess the extent of the Mosquito Issue and determine the
            most appropriate treatment and control measures.
          </p>
          <p>
            For further details or to schedule an inspection, please contact us
            today. We are here to help.
          </p>
          <img src={woodborer} alt="woodborer" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WoodBorer;
