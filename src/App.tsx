import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./pages/Menu";
import Termite from "./pages/Termite";
import Cockroach from "./pages/Cockroach";
import Mosquito from "./pages/Mosquito";
import Mouse from "./pages/Mouse";
import Ant from "./pages/Ant";
import WoodBorer from "./pages/WoodBorer";
import BedBug from "./pages/BedBug";
import FleaFly from "./pages/FleaFly";
import General from "./pages/General";
import Agriculture from "./pages/Agriculture";
import PestControl from "./pages/PestControl";
import Cleaning from "./Cleaning/Cleaning";
import HouseCleaning from "./Cleaning/Housecleaning";
import Bathroom from "./Cleaning/Bathroom";
import Kitchen from "./Cleaning/Kitchen";
import SofaCarpet from "./Cleaning/Sofacarpet";
import Repair from "./Plumber/Repair";
import TvRepair from "./Plumber/TvRepair";
import MotorBike from "./Plumber/MotorBike";
import MobileRepair from "./Plumber/MobileRepair";
import Computer from "./Plumber/Computer";
import CarRepair from "./Plumber/CarRepair";
import Paint from "./Paint/Paint";
import HousePaint from "./Paint/HousePaint";
import OfficePaint from "./Paint/Office";
import BathroomPaint from "./Paint/Bathroom";
import Bedroom from "./Paint/Bedroom";
import Electrician from "./Electrician/Electrician";
import Fan from "./Electrician/Fan";
import Maintenance from "./Electrician/Maintenance";
import Installation from "./Electrician/Installation";
import Safety from "./Electrician/Safety";
import Carpenter from "./Carpenter/Carpenter";
import Cutting from "./Carpenter/Cutting";
import Shaping from "./Carpenter/Shaping";
import Customization from "./Carpenter/Customization";
import AcService from "./AcService/AcService";
import RegularMain from "./AcService/RegularMain";
import AcInstall from "./AcService/AcInstall";
import DuctClean from "./AcService/DuctClean";
import Refrigerant from "./AcService/Refrigerant";
import Evaporator from "./AcService/Evaporator";
import BookService from "./pages/BookService";
import HouseServices from "./Cleaning/HouseServices";
import BathService from "./Cleaning/BathService";
import KitchenSer from "./Cleaning/KitchenSer";
import SofaCarpetSer from "./Cleaning/SofaCarpetSer";
import AcRepairs from "./AcService/AcRepair";
import TvSer from "./Plumber/TvSer";
import MotorSer from "./Plumber/MotorSer";
import MobileSer from "./Plumber/MobileSer";
import CompSer from "./Plumber/CompSer";
import CarSer from "./Plumber/CarSer";
import BathSer from "./Paint/BathSer";
import BedroomSer from "./Paint/BedroomSer";
import OfficeSer from "./Paint/OfficeSer";
import FanSer from "./Electrician/FanSer";
import InstallSer from "./Electrician/InstallSer";
import MainSer from "./Electrician/MainSer";
import SafetySer from "./Electrician/SafetySer";
import CuttingSer from "./Carpenter/CuttingSer";
import ShaperSer from "./Carpenter/ShapeSer";
import InstaSer from "./Carpenter/InStaSer";
import Install from "./Carpenter/Install";
import CustSer from "./Electrician/CustSer";
import RegSer from "./AcService/RegSer";
import AcRepSer from "./AcService/AcRepairSer";
import AcInstSer from "./AcService/AcInstSer";
import DuctSer from "./AcService/DuctSer";
import RefrigerSer from "./AcService/RefrigerSer";
import EvaPorateSer from "./AcService/EvaPorateSer";
import Next from "./pages/Next";
import TerSer from "./TerSer";
import MosSer from "./pages/MosSer";
import AntSer from "./pages/AntSer";
import MousseSer from "./pages/MouseSer";
import WoodSer from "./pages/WoodSer";
import BedSer from "./pages/BedSer";
import FleaSer from "./pages/FleaSer";
import GenSer from "./pages/GenSer";
import Nter from "./pages/Nter";
import MosNext from "./pages/MosNext";
import MouseNext from "./pages/MouseNext";
import AntNext from "./pages/AntNext";
import WoodNext from "./pages/WoodNext";
import BedNext from "./pages/BedNext";
import FleaNext from "./pages/FleaNext";
import GeneralNext from "./pages/GeneralNext";
import HouseClnNext from "./Cleaning/HouseClnNext";
import BathNext from "./Cleaning/BathNext";
import KitchenNext from "./Cleaning/KitchenNext";
import SofaNext from "./Cleaning/SofaNext";
import TvNext from "./Plumber/TvNext";
import MotorNext from "./Plumber/MotorNext";
import MobileNext from "./Plumber/MobileNext";
import CompNext from "./Plumber/CompNext";
import CarNext from "./Plumber/CarNext";
import BathroomNext from "./Paint/BathroomNext";
import BedRoomNext from "./Paint/BedRoomNext";
import HousePntSer from "./Paint/HousePntSer";
import HouseNext from "./Paint/HouseNext";
import OfficeNext from "./Paint/OfficeNext";
import FanNext from "./Electrician/FanNext";
import MainTainNext from "./Electrician/MainTainNext";
import InstallationNext from "./Electrician/InstalltionNext";
import InspectionNext from "./Electrician/InspectionNext";
import CuttingNext from "./Carpenter/CuttingNext";
import ShapingNext from "./Carpenter/ShapingNext";
import CarInstallNext from "./Carpenter/CarInstallNext";
import CutNext from "./Carpenter/CustNext";
import RegularNext from "./AcService/RegularNext";
import AcRepairNext from "./AcService/AcRepairNext";
import AcinstaNext from "./AcService/AcinstaNext";
import DuctNext from "./Electrician/DuctNext";
import RefriGerentNext from "./AcService/RefriGerentNext";
import EvaPorateNext from "./AcService/EvaPorateNext";

setupIonicReact({
  // mode: 'ios',
  // animated: false,
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Login />
        </Route>
        <Route component={Register} path="/register" exact />
        <Route component={Menu} path="/app" />
        {/* This is for pest control */}
        <Route component={PestControl} path="/app/list/pestcontrol" />
        <Route component={Termite} path="/app/list/pestcontrol/termite" />
        <Route
          component={TerSer}
          path="/app/list/pestcontrol/termite/bookservice"
        />
        <Route
          component={Nter}
          path="/app/list/pestcontrol/termite/bookservice/next"
        />
        <Route component={Cockroach} path="/app/list/pestcontrol/cockroach" />
        <Route
          component={BookService}
          path="/app/list/pestcontrol/cockroach/bookservice"
        />
        <Route
          component={Next}
          path="/app/list/pestcontrol/cockroach/bookservice/next"
        />

        <Route component={Mosquito} path="/app/list/pestcontrol/mosquito" />
        <Route
          component={MosSer}
          path="/app/list/pestcontrol/mosquito/bookservice"
        />
        <Route
          component={MosNext}
          path="/app/list/pestcontrol/mosquito/bookservice/next"
        />

        <Route component={Mouse} path="/app/list/pestcontrol/mouse" />
        <Route
          component={MousseSer}
          path="/app/list/pestcontrol/mouse/bookservice"
        />
        <Route
          component={MouseNext}
          path="/app/list/pestcontrol/mouse/bookservice/next"
        />

        <Route component={Ant} path="/app/list/pestcontrol/ant" />
        <Route
          component={AntSer}
          path="/app/list/pestcontrol/ant/bookservice"
        />
        <Route
          component={AntNext}
          path="/app/list/pestcontrol/ant/bookservice/next"
        />

        <Route component={WoodBorer} path="/app/list/pestcontrol/woodborer" />
        <Route
          component={WoodSer}
          path="/app/list/pestcontrol/woodborer/bookservice"
        />
        <Route
          component={WoodNext}
          path="/app/list/pestcontrol/woodborer/bookservice/next"
        />

        <Route component={BedBug} path="/app/list/pestcontrol/bedbug" />
        <Route
          component={BedSer}
          path="/app/list/pestcontrol/bedbug/bookservice"
        />
        <Route
          component={BedNext}
          path="/app/list/pestcontrol/bedbug/bookservice/next"
        />

        <Route component={FleaFly} path="/app/list/pestcontrol/fleafly" />
        <Route
          component={FleaSer}
          path="/app/list/pestcontrol/fleafly/bookservice"
        />
        <Route
          component={FleaNext}
          path="/app/list/pestcontrol/fleafly/bookservice/next"
        />

        <Route component={General} path="/app/list/pestcontrol/general" />
        <Route
          component={GenSer}
          path="/app/list/pestcontrol/general/bookservice"
        />
        <Route
          component={GeneralNext}
          path="/app/list/pestcontrol/general/bookservice/next"
        />
        <Route
          component={Agriculture}
          path="/app/list/pestcontrol/agriculture"
        />

        {/* This is for Cleaning */}
        <Route component={Cleaning} path="/app/list/cleaning" />
        <Route
          component={HouseCleaning}
          path="/app/list/cleaning/housecleaning"
        />
        <Route
          component={HouseServices}
          path="/app/list/cleaning/housecleaning/bookservice"
        />
        <Route
          component={HouseClnNext}
          path="/app/list/cleaning/housecleaning/bookservice/next"
        />

        <Route
          component={Bathroom}
          path="/app/list/cleaning/bathroomcleaning"
        />
        <Route
          component={BathService}
          path="/app/list/cleaning/bathroomcleaning/bookservice"
        />
        <Route
          component={BathNext}
          path="/app/list/cleaning/bathroomcleaning/bookservice/next"
        />

        <Route component={Kitchen} path="/app/list/cleaning/kitchen" />
        <Route
          component={KitchenSer}
          path="/app/list/cleaning/kitchen/bookservice"
        />
        <Route
          component={KitchenNext}
          path="/app/list/cleaning/kitchen/bookservice/next"
        />

        <Route component={SofaCarpet} path="/app/list/cleaning/sofacarpet" />
        <Route
          component={SofaCarpetSer}
          path="/app/list/cleaning/sofacarpet/bookservice"
        />
        <Route
          component={SofaNext}
          path="/app/list/cleaning/sofacarpet/bookservice/next"
        />

        {/* This is for plumber */}
        <Route component={Repair} path="/app/list/plumbers" />
        <Route component={TvRepair} path="/app/list/plumbers/tvrepair" />
        <Route
          component={TvSer}
          path="/app/list/plumbers/tvrepair/bookservice"
        />
        <Route
          component={TvNext}
          path="/app/list/plumbers/tvrepair/bookservice/next"
        />
        <Route component={MotorBike} path="/app/list/plumbers/motorbike" />
        <Route
          component={MotorSer}
          path="/app/list/plumbers/motorbike/bookservice"
        />
        <Route
          component={MotorNext}
          path="/app/list/plumbers/motorbike/bookservice/next"
        />
        <Route
          component={MobileRepair}
          path="/app/list/plumbers/mobilerepair"
        />
        <Route
          component={MobileSer}
          path="/app/list/plumbers/mobilerepair/bookservice"
        />

        <Route
          component={MobileNext}
          path="/app/list/plumbers/mobilerepair/bookservice/next"
        />

        <Route component={Computer} path="/app/list/plumbers/computer" />
        <Route
          component={CompSer}
          path="/app/list/plumbers/computer/bookservice"
        />
        <Route
          component={CompNext}
          path="/app/list/plumbers/computer/bookservice/next"
        />
        <Route component={CarRepair} path="/app/list/plumbers/carepair" />
        <Route
          component={CarSer}
          path="/app/list/plumbers/carepair/bookservice"
        />
        <Route
          component={CarNext}
          path="/app/list/plumbers/carepair/bookservice/next"
        />

        {/* This is for Painting */}
        <Route component={Paint} path="/app/list/painting" />
        <Route component={HousePaint} path="/app/list/painting/housepaint" />
        <Route
          component={HouseServices}
          path="/app/list/painting/housepaint/bookservice/"
        />
        <Route
          component={HousePntSer}
          path="/app/list/painting/housepaint/bookservice/next"
        />
        <Route
          component={HouseNext}
          path="/app/list/painting/housepaint/bookservice/next"
        />

        <Route component={OfficePaint} path="/app/list/painting/office" />
        <Route
          component={OfficeSer}
          path="/app/list/painting/office/bookservice"
        />

        <Route
          component={OfficeNext}
          path="/app/list/painting/office/bookservice/next"
        />

        <Route component={BathroomPaint} path="/app/list/painting/bathroom" />
        <Route
          component={BathSer}
          path="/app/list/painting/bathroom/bookservice"
        />
        <Route
          component={BathroomNext}
          path="/app/list/painting/bathroom/bookservice/next"
        />

        <Route component={Bedroom} path="/app/list/painting/bedroom" />
        <Route
          component={BedroomSer}
          path="/app/list/painting/bedroom/bookservice"
        />
        <Route
          component={BedRoomNext}
          path="/app/list/painting/bedroom/bookservice/next"
        />

        {/* This is for Electrician */}
        <Route component={Electrician} path="/app/list/electrician" />
        <Route component={Fan} path="/app/list/electrician/fan" />
        <Route
          component={FanSer}
          path="/app/list/electrician/fan/bookservice"
        />
        <Route
          component={FanNext}
          path="/app/list/electrician/fan/bookservice/next"
        />

        <Route
          component={Maintenance}
          path="/app/list/electrician/Maintenance"
        />
        <Route
          component={MainSer}
          path="/app/list/electrician/Maintenance/bookservice"
        />
        <Route
          component={MainTainNext}
          path="/app/list/electrician/Maintenance/bookservice/next"
        />

        <Route
          component={Installation}
          path="/app/list/electrician/Installation"
        />
        <Route
          component={InstallSer}
          path="/app/list/electrician/Installation/bookservice"
        />
        <Route
          component={InstallationNext}
          path="/app/list/electrician/Installation/bookservice/next"
        />
        <Route
          component={Safety}
          path="/app/list/electrician/SafetyInspections"
        />
        <Route
          component={SafetySer}
          path="/app/list/electrician/SafetyInspections/bookservice"
        />
        <Route
          component={InspectionNext}
          path="/app/list/electrician/SafetyInspections/bookservice/next"
        />

        {/* This is for Carpenter */}
        <Route component={Carpenter} path="/app/list/Carpenter" />
        <Route component={Cutting} path="/app/list/Carpenter/Cutting" />
        <Route
          component={CuttingSer}
          path="/app/list/Carpenter/Cutting/bookservice"
        />

        <Route
          component={CuttingNext}
          path="/app/list/Carpenter/Cutting/bookservice/next"
        />

        <Route component={Shaping} path="/app/list/Carpenter/Shaping" />
        <Route
          component={ShaperSer}
          path="/app/list/Carpenter/Shaping/bookservice"
        />
        <Route
          component={ShapingNext}
          path="/app/list/Carpenter/Shaping/bookservice/next"
        />

        <Route component={Install} path="/app/list/Carpenter/Installation" />
        <Route
          component={InstaSer}
          path="/app/list/Carpenter/Installation/bookservice"
        />
        <Route
          component={CarInstallNext}
          path="/app/list/Carpenter/Installation/bookservice/next"
        />

        <Route
          component={Customization}
          path="/app/list/Carpenter/Customization"
        />
        <Route
          component={CustSer}
          path="/app/list/Carpenter/Customization/bookservice"
        />

        <Route
          component={CutNext}
          path="/app/list/Carpenter/Customization/bookservice/next"
        />

        {/* This is for AC Services */}
        <Route component={AcService} path="/app/list/AcService" />
        <Route
          component={RegularMain}
          path="/app/list/AcService/RegularMaintenance"
        />
        <Route
          component={RegSer}
          path="/app/list/AcService/RegularMaintenance/bookservice"
        />
        <Route
          component={RegularNext}
          path="/app/list/AcService/RegularMaintenance/bookservice/next"
        />

        <Route component={AcRepairs} path="/app/list/AcService/AcRepair" />
        <Route
          component={AcRepSer}
          path="/app/list/AcService/AcRepair/bookservice"
        />
        <Route
          component={AcRepairNext}
          path="/app/list/AcService/AcRepair/bookservice/next"
        />

        <Route
          component={AcInstall}
          path="/app/list/AcService/AcInstallation"
        />
        <Route
          component={AcInstSer}
          path="/app/list/AcService/AcInstallation/bookservice"
        />
        <Route
          component={AcinstaNext}
          path="/app/list/AcService/AcInstallation/bookservice/next"
        />

        <Route component={DuctClean} path="/app/list/AcService/DuctClean" />
        <Route
          component={DuctSer}
          path="/app/list/AcService/DuctClean/bookservice"
        />
        <Route
          component={DuctNext}
          path="/app/list/AcService/DuctClean/bookservice/next"
        />

        <Route component={Refrigerant} path="/app/list/AcService/Refrigerant" />
        <Route
          component={RefrigerSer}
          path="/app/list/AcService/Refrigerant/bookservice"
        />
        <Route
          component={RefriGerentNext}
          path="/app/list/AcService/Refrigerant/bookservice/next"
        />

        <Route component={Evaporator} path="/app/list/AcService/Evaporator" />
        <Route
          component={EvaPorateSer}
          path="/app/list/AcService/Evaporator/bookservice"
        />
        <Route
          component={EvaPorateNext}
          path="/app/list/AcService/Evaporator/bookservice/next"
        />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
