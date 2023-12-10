import {
  IonButton,
  IonContent,
  IonDatetime,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

const Time: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string>("");

  const handleDateChange = (event: CustomEvent<any>) => {
    setSelectedDate(event.detail.value);
  };

  const handleTimeChange = (event: CustomEvent<any>) => {
    setSelectedTime(event.detail.value);
  };

  const handleDayChange = (event: CustomEvent<any>) => {
    setSelectedDay(event.detail.value);
  };

  const handleBookService = () => {
    // Do something with selectedDate, selectedTime, and selectedDay
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
    console.log("Selected Day:", selectedDay);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Page Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonDatetime
          displayFormat="MMM DD, YYYY"
          placeholder="Select Date"
          value={selectedDate}
          onIonChange={handleDateChange}
        ></IonDatetime>
        <IonDatetime
          displayFormat="h:mm A"
          placeholder="Select Time"
          value={selectedTime}
          onIonChange={handleTimeChange}
        ></IonDatetime>
        <IonDatetime
          displayFormat="dddd"
          placeholder="Select Day"
          value={selectedDay}
          onIonChange={handleDayChange}
        ></IonDatetime>
        <IonButton onClick={handleBookService}>Book service now</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Time;
