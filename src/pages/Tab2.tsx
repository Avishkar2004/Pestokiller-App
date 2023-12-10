import React, { useRef, useState } from "react";
import {
  CreateAnimation,
  Gesture,
  GestureDetail,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  createGesture,
  useIonViewDidEnter,
  IonInput,
  IonTextarea,
} from "@ionic/react";
import "./List.css";

const Tab2: React.FC = () => {
  const animationRef = useRef<CreateAnimation | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [showServices, setShowServices] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [bookingData, setBookingData] = useState({
    serviceName: "",
    address: "",
    number: "",
  });

  useIonViewDidEnter(() => {
    animationRef.current?.animation.play();
    const gesture: Gesture = createGesture({
      el: elementRef.current!,
      threshold: 0,
      gestureName: "my-gesture",
      onStart: onStartHandler,
      onMove: onMoveHandler,
      onEnd: onMoveEnd,
    });
    gesture.enable();
  });

  const onStartHandler = (detail: GestureDetail) => {
    elementRef.current!.style.transition = "none";
  };

  const onMoveHandler = (detail: GestureDetail) => {
    const x = detail.currentX - detail.startX;
    const y = detail.currentY - detail.startY;
    elementRef.current!.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onMoveEnd = (detail: GestureDetail) => {
    elementRef.current!.style.transition = "500ms ease-out";
    elementRef.current!.style.transform = "translate(0px, 0px)";
  };

  const servicesOptions = [
    "Termite",
    "Cockroach",
    "Mosquito",
    "Mouse",
    "Ant",
    "Wood Borer",
    "Bed Bug",
    "Flea & Fly",
  ];

  const handleBookServiceClick = (service: string) => {
    setSelectedService(service);
    setBookingData({
      serviceName: service,
      address: "",
      number: "",
    });
  };

  const handleBookButtonClick = () => {
    // Handle booking logic here using the bookingData state
    console.log("Booking data:", bookingData);
    setSelectedService(null);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollY={false}>
        <div className="content-container">
          <CreateAnimation
            ref={animationRef}
            duration={2000}
            iterations={Infinity}
            delay={1000}
            keyframes={[
              { offset: 0, transform: "scale(1)", opacity: "1" },
              { offset: 0.5, transform: "scale(1.5)", opacity: "0.5" },
              { offset: 1, transform: "scale(1)", opacity: "1" },
            ]}
          ></CreateAnimation>

          <div ref={elementRef} className="draggable-element" />

          <IonButton
            expand="block"
            color="secondary"
            className="ion-margin"
            onClick={() => setShowServices(!showServices)}
          >
            Services
          </IonButton>
          {showServices && (
            <div className="service-options-container">
              {servicesOptions.map((service) => (
                <IonButton
                  key={service}
                  expand="block"
                  color="light"
                  className={`ion-margin service-option ${
                    selectedService === service ? "selected" : ""
                  }`}
                  onClick={() => handleBookServiceClick(service)}
                >
                  {service}
                </IonButton>
              ))}
            </div>
          )}
          {selectedService && selectedService !== "Book Service" && (
            <div>
              <IonButton
                expand="block"
                color="primary"
                className="ion-margin"
                onClick={() => setSelectedService("Book Service")}
              >
                Book {selectedService} Service
              </IonButton>
              <IonButton
                expand="block"
                color="medium"
                className="ion-margin"
                onClick={() => setSelectedService(null)}
              >
                Back
              </IonButton>
            </div>
          )}
          {selectedService === "Book Service" && (
            <div>
              <IonInput
                value={bookingData.address}
                placeholder="Enter address"
                onIonChange={(e) =>
                  setBookingData({ ...bookingData, address: e.detail.value! })
                }
              />
              <IonTextarea
                value={bookingData.number}
                placeholder="Enter number"
                onIonChange={(e) =>
                  setBookingData({ ...bookingData, number: e.detail.value! })
                }
              />
              <IonButton
                expand="block"
                color="primary"
                className="ion-margin"
                onClick={handleBookButtonClick}
              >
                Book {bookingData.serviceName} Service
              </IonButton>
              <IonButton
                expand="block"
                color="medium"
                className="ion-margin"
                onClick={() => setSelectedService(null)}
              >
                Back
              </IonButton>
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
