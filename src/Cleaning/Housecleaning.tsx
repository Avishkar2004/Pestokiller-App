import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./HouseClean.css";
const FlatOptions = [
  { size: "1 BHK", charges: "Rs. 699" },
  { size: "2 BHK", charges: "Rs. 999" },
  { size: "3 BHK", charges: "Rs. 1299" },
  { size: "4 BHK", charges: "Rs. 1599" },
  { size: "Other", charges: "Rs. Other" },
];

const HouseCleaning: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>House Cleaning Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="House Cleaning" className="houseCleaning" />
          <img src={""} alt="HouseClean" className="houseclean" />
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
            <IonButton href="/app/list/cleaning/housecleaning/bookservice">
                BOOK SERVICE NOW
              </IonButton>

            </button>
          </div>
        </div>
        <div className="house-content">
          <h2>House Cleaning Services</h2>
          <p>
            Customized Cleaning Plans: Tailor your cleaning services to meet
            each client's specific needs. Offer different cleaning packages or
            options that allow customers to choose the level of cleaning they
            require.
          </p>
          <p>
            Attention to Detail: Emphasize your commitment to thorough cleaning
            by paying attention to every corner and surface.
          </p>
          <p>
            Trained and Trustworthy Staff: Highlight the expertise and
            trustworthiness of your cleaning staff.
          </p>
          <img src={""} alt="House Clean" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HouseCleaning;
