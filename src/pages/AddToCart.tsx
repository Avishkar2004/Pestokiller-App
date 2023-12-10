import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./AddCart.css";
import Cart from "../assets/Cart/cart.png";

const AddToCart: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cart</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="button">
          <img src={Cart} alt="Add To Cart" />
          <IonButton href="app/list">Explore Services</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddToCart;
