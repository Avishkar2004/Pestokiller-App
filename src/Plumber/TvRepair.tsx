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
  { size: "Diagnosis", charges: "Rs. 699" },
  { size: "Troubleshooting", charges: "Rs. 999" },
  { size: "Repair Estimate", charges: "Rs. 1299" },
  { size: "Part Replacement", charges: "Rs. 1599" },
  { size: "Circuit Repair", charges: "Rs. 1200" },
  { size: "Cleaning and Finishing", charges: "1300" },
  { size: "other", charges: "other" },
];

const TvRepair: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TvRepair Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="image-container">
          <img src={""} alt="GlowTvRepair" className="Cockroach" />
          <img src={""} alt="NormalTvRepair" className="Safe" />
          <h1>Price</h1>
          <div className="flat-options">
            <h2>TV Repair Price</h2>
            <select className="flat-size-dropdown">
              {FlatOptions.map((option, index) => (
                <option key={index} value={option.size}>
                  {option.size} - {option.charges}
                </option>
              ))}
            </select>
            <button>
              <IonButton href="/app/list/plumbers/tvrepair/bookservice">
                BOOK SERVICE NOW
              </IonButton>
            </button>
          </div>
        </div>
        <div className="termite-content">
          <h2>TvRepair Service's</h2>
          <p>
            Expertise: Our team of highly trained technicians possesses the
            knowledge and skillset required to tackle various TV problems. From
            malfunctioning displays to audio glitches, we've got you covered.
          </p>
          <p>
            Advanced Diagnostics: We utilize cutting-edge diagnostic tools to
            identify the root cause of your TV's issues accurately. Our precise
            approach ensures that we address the problem swiftly and
            effectively.
          </p>
          <p>
            Quick Turnaround: We understand that your TV is a central part of
            your entertainment setup
          </p>
          <img src={""} alt="TvRepair" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TvRepair;
