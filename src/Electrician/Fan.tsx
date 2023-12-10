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
    { size: "Dust and Debris Removal", charges: "Rs. 499" },
    { size: "Oiling and Lubrication", charges: "Rs. 6999" },
    { size: "Grease Removal", charges: "Rs. 8999" },
    { size: "Motor Problem", charges: "Rs. 1199" },
    { size: "Blade Replacement", charges: "Rs. 1111" },
    { size: "Speed Control Repair", charges: "Rs. 1111" },
    { size: "Fan Stability", charges: "Rs. 1111" },
    { size: "Other", charges: "Rs. Other" },
  ];
  
  const Fan: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Fan Service</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div className="image-container">
            <img src={''} alt="Fan" className="Fan" />
            <img src={''} alt="Safe" className="Safe" />
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
                <IonButton href="/app/list/electrician/fan/bookservice">BOOK SERVICE NOW</IonButton>
              </button>
            </div>
          </div>
          <div className="termite-content">
            <h2>Fan Repair</h2>
            <p>
              We specialize in effectively treating and eliminating Fan from
              your home or business, using proven methods. Our goal is to ensure
              complete eradication and provide a long-term solution to protect
              your property from further Fan infestations.
            </p>
            <p>
              Just like with termites, a comprehensive inspection is necessary to
              accurately assess the extent of the Fan Issue and determine
              the most appropriate treatment and control measures.
            </p>
            <p>
              For further details or to schedule an inspection, please contact us
              today. We are here to help.
            </p>
            <img src={''} alt="InfoFan" />
          </div>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Fan;
  