import React from "react";
import classes from "./OurClients.module.css";
import ITC from "../../../assets/Clients/ITC.jpg";
import BHEL from "../../../assets/Clients/BHEL.svg";
import GPI from "../../../assets/Clients/GPI.svg";
import BANK from "../../../assets/Clients/BANK.svg";
import MNNIT from "../../../assets/Clients/MNNIT.svg";
import QDA from "../../../assets/Clients/QDA.svg";
import USA from "../../../assets/Clients/USA.svg";
import Client1 from "../../../assets/Clients/client.svg";
import Client2 from "../../../assets/Clients/CLIENT 2.svg";
import Iffco from "../../../assets/Clients/IFFCO.jpg";
import Indus from "../../../assets/Clients/Indus.png";
import Iti from "../../../assets/Clients/ITI.png";
import Pwd from "../../../assets/Clients/PWD.png";
import Ryan from "../../../assets/Clients/RYAN.jpg";
import Survey from "../../../assets/Clients/Survey.jpg";
import ASHOK from "../../../assets/Clients/ASHOK.png";
import BIET from "../../../assets/Clients/BIET.png";
import BM from "../../../assets/Clients/BM.png";
import ELEC from "../../../assets/Clients/ELEC.jpg";
import GB from "../../../assets/Clients/GB.jpg";
import Khurja from "../../../assets/Clients/Khurja.png";
import KK from "../../../assets/Clients/KK.png";
import MOTILAL from "../../../assets/Clients/MOTILAL.png";
import PEDVAK from "../../../assets/Clients/PEDVAK.jpg";
import UPJAL from "../../../assets/Clients/UPJAL.jpg";
import UPRAJ from "../../../assets/Clients/UPRAJ.jpg";
import BDA from "../../../assets/Clients/BDA.jpeg";
import IDPL from "../../../assets/Clients/IDPL.jpeg";
import SamIndia from "../../../assets/Clients/Sam-India.jpg";
import PT from "../../../assets/Clients/PT.jpg";
import TataSteel from "../../../assets/Clients/tata-steel.jpg";
import Tristar from "../../../assets/Clients/Tristar.png";
import UPBC from "../../../assets/Clients/UPBC.jpg";

const OurClients = () => {
  return (
    <div>
      <div className={classes.Container}>
        <div className={classes.Clients} id="clients">
          <h2>Our Clients</h2>
          <p className={classes.subline}>
            Some of the Esteemed Clients are as given below
          </p>
        </div>
        <div className={classes.Section}>
          {/* start */}
          <div className={classes.Content}>
            <img
              className={classes.Image}
              src={USA}
              alt="American Embassy, New Delhi"
            />
          </div>
          <div className={classes.Content}>
            <img
              className={classes.Image}
              src={Survey}
              alt="Archaeological Survey of India, New Delhi"
            />
          </div>
          <div className={classes.Content}>
            <img
              className={classes.Image}
              src={ASHOK}
              alt="Ashok Housing, Agra, UP "
            />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={BHEL} alt="BHEL, Hardwar, UK" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={UPBC} alt="UP State Bridge Corporation" />
          </div>
          {/* end */}
        </div>{" "}
        <div className={classes.Section}>
          {/* start */}
          <div className={classes.Content}>
            <img className={classes.Image} src={BIET} alt="BIET, Jhansi, UP" />
          </div>{" "}
          <div className={classes.Content}>
            <img
              className={classes.Image}
              src={BM}
              alt="BM Institute, Ahmedabad, Gujarat"
            />
          </div>
          <div className={classes.Content}>
            <img
              className={classes.Image}
              src={BDA}
              alt="Bulandshahar Development Authority, UP"
            />
          </div>
          <div className={classes.Content}>
            <img
              className={classes.Image}
              src={GB}
              alt="GB Pant Institute of Social Sciences, Allahabad, UP"
            />
          </div>{" "}
          <div className={classes.Content}>
            <img
              className={classes.Image}
              src={QDA}
              alt="Ghaziabad Development Authority, UP"
            />
          </div>{" "}
          
        </div>{" "}
        {/*   
          <div className={classes.Content}>
            <img className={classes.Image} src={Ryan} alt="" />
          </div>
        </div>{" "}
        <div className={classes.Section}>
          <div className={classes.Content}>
            <img className={classes.Image} src={Pwd} alt="" />
          </div>{" "}
          
          <div className={classes.Content}>
            <img className={classes.Image} src={Indus} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={Survey} alt="" />
          </div>
        </div>{" "}*/}
        <div className={classes.Section}>
        <div className={classes.Content}>
            <img
              className={classes.Image}
              src={GPI}
              alt="Godfrey Philips India Limited, New Delhi"
            />
          </div>
          <div className={classes.Content}>
            <img
              className={classes.Image}
              src={IDPL}
              alt="IDPL, Rishikesh, UK"
            />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={UPJAL} alt="UP Jal Nigam" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={UPRAJ} alt="UP Rajkiya Nirman Nigam" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={Iffco} alt="IFFCO, Phulpur, UP" />
          </div>
          
          {/* <div className={classes.Content}>
            <img className={classes.Image} src={MOTILAL} alt="" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={Client1} alt="" />
          </div> */}
        </div>{" "}
        <div className={classes.Section}>
          <div className={classes.Content}>
            <img className={classes.Image} src={Client2} alt="Indian Institute of Technology, Roorkee, UK" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={Iti} alt="Indian Telephone Industries, UP" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={ITC} alt="International Tobacco Company, Ghaziabad, UP" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={KK} alt="KK Modi University, Durg, Chhattisgarh" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={MNNIT} alt="Motilal Nehru National Institute of Technology, Prayagraj, UP" />
          </div>
        {/*   {" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={ELEC} alt="" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={BANK} alt="" />
          </div>{" "}
          <div className={classes.Content}>
            <img className={classes.Image} src={MNNIT} alt="" />
          </div>
          */}
        </div>{" "} 
        <div className={classes.Section}>
      
          <div className={classes.Content}>
            <img className={classes.Image} src={PEDVAK} alt="Pedvak Technologies Pvt. Ltd, Hyderabad, Telangana" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={Pwd} alt="Public Works Department, New Delhi" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={BANK} alt="Reserve Bank of India, Kanpur, UP" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={Ryan} alt="Ryan Group of Schools, NCR-Delhi" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={SamIndia} alt="SAM India Built Well Pvt. Ltd., Anand Vihar, New Delhi" />
          </div>
        </div>{" "}
        <div className={classes.Section}>
        
          <div className={classes.Content}>
            <img className={classes.Image} src={PT} alt="Tala Hydro-electric Project, Bhutan" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={TataSteel} alt="Tata steel, Jamshedpur" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={Tristar} alt="Tristar Group, New Delhi" />
          </div>
          <div className={classes.Content}>
            <img className={classes.Image} src={ELEC} alt="UP State Electricity Board " />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default OurClients;
