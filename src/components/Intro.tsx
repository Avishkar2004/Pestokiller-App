import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import Intro1Svg from "../assets/intro/1.svg";
import Intro2Svg from "../assets/intro/2.svg";
import Intro3Svg from "../assets/intro/3.svg";
import "./Intro.css";

interface ContainerProps {
  onFinish: () => void;
}

const SwipperButtonText = ({ children }: any) => {
  const swiper = useSwiper();
  return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
};

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src={Intro1Svg} alt="Intro 1" />
        <IonText>
          <h3>Build awesome app with ionic UI Components!</h3>
        </IonText>
        <SwipperButtonText>Next</SwipperButtonText>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Intro2Svg} alt="Intro 2" />
        <IonText>
          <h3>Create powerful native app with Capacitor.</h3>
        </IonText>
        <SwipperButtonText>Next</SwipperButtonText>
      </SwiperSlide>

      <SwiperSlide>
        <img src={Intro3Svg} alt="Intro 3" />
        <IonText>
          <h3>Enjoy Learning to code.</h3>
        </IonText>
        <IonButton onClick={() => onFinish()}>Finish </IonButton>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;
