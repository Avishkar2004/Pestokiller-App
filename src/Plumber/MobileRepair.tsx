import {
  IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import React from "react";
  import './MobileRepair.css'
  
  const FlatOptions = [
    { size: "Cracked Screens", charges: "Rs. 699" },
    { size: "Display Issues", charges: "Rs. 999" },
    { size: "Battery Replacement", charges: "Rs. 1299" },
    { size: "Charging Problems", charges: "Rs. 1599" },
    { size: "Charging Problem", charges: "Rs. 1200" },
    { size: "Other", charges: "Rs. Other" },
  ];
  
  const MobileRepair: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>MobileRepair Service</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div className="image-container">
            <img src={""} alt="GlowMobileRepair" className="Cockroach" />
            <img src={""} alt="NormalMobileRepair" className="Safe" />
            <h1>Price</h1>
            <div className="flat-options">
              <h2>Mobile Repair</h2>
              <select className="flat-size-dropdown">
                {FlatOptions.map((option, index) => (
                  <option key={index} value={option.size}>
                    {option.size} - {option.charges}
                  </option>
                ))}
              </select>
              <button>
                <IonButton href="/app/list/plumbers/mobilerepair/bookservice">BOOK SERVICE NOW</IonButton>
              </button>
            </div>
          </div>
          <div className="termite-content">
            <h2>MobileRepair Service's</h2>
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
            <img src={""} alt="MobileRepair" />
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default MobileRepair;
  