// import {
//   IonContent,
//   IonHeader,
//   IonPage,
//   IonTitle,
//   IonToolbar,
// } from "@ionic/react";
// import React from "react";
// import './AcRepair.css'

// const FlatOptions = [
//   { size: "1 BHK", charges: "Rs. 699" },
//   { size: "2 BHK", charges: "Rs. 999" },
//   { size: "3 BHK", charges: "Rs. 1299" },
//   { size: "4 BHK", charges: "Rs. 1599" },
//   { size: "Other", charges: "Rs. Other" },
// ];

// const AcRepair: React.FC = () => {
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>AcRepair Service</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent className="ion-padding">
//         <div className="image-container">
//           <img src={""} alt="GlowAcRepair" className="Cockroach" />
//           <img src={""} alt="NormalAcRepair" className="Safe" />
//           <h1>Price</h1>
//           <div className="flat-options">
//             <h2>AC Repair Price</h2>
//             <select className="flat-size-dropdown">
//               {FlatOptions.map((option, index) => (
//                 <option key={index} value={option.size}>
//                   {option.size} - {option.charges}
//                 </option>
//               ))}
//             </select>
//             <button className="book-button">BOOK SERVICE NOW</button>
//           </div>
//         </div>
//         <div className="termite-content">
//           <h2>AcRepair Service's</h2>
//           <p>
//             Experienced Technicians: Our team of skilled technicians brings
//             years of experience to the table
//           </p>
//           <p>
//             Precise Diagnosis: We utilize the latest diagnostic tools to
//             accurately identify the root cause of your AC's problems. This
//             allows us to provide targeted solutions that save you time and
//             money.
//           </p>
//           <p>
//             Swift Repairs: We understand the urgency of AC repairs, especially
//             during the peak of summer.
//           </p>
//           <img src={""} alt="AcRepair" />
//         </div>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default AcRepair;
