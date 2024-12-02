import React from "react";
import classes from "./PowerStructures.module.css";
import Header from "../../components/nav-header/nav our team";
import Image1 from "../../assets/Works/PowerStructures1.png"
import Footer from "../Footer/Footer";
import background from "../../assets/nav menu/background.svg";
import { Helmet } from "react-helmet";
import { FiArrowUp } from "react-icons/fi";
import { BsFillXCircleFill } from "react-icons/bs";

const PowerStructures = () => {
    return (
        <div className={classes.majorcontainer} id="top" style={{backgroundImage: `url(${background})` ,}}>
          <Helmet>
            <title>Power Structures | Expert AE Solutions</title>
          </Helmet>
          <Header />
          <div className={classes.TopButton}>
            <a
              href="#top"
              style={{ textDecoration: "none", color: "#747474" }}
            >
              <FiArrowUp style={{ fontSize: "40px" }}></FiArrowUp>
            </a>
          </div>
          <center>
            <table className={classes.Members}>
              <tr>
                <td colspan="2">
                  <center>
                    <h2 style={{ marginBottom: "21px" }}>Power Structures</h2>
                  </center>
                </td>
              </tr>
            </table>
          </center>
            <div className={classes.LeftAlign}>
            <ul>  
            <li>
            Rehabilitation measures for main dam and tunnels of Tala HEP, Bhutan 
</li><li>
Rehabilitation measures for old Indraprastha Power House, New Delhi 
</li><li>
Underwater Inspection, investigations and strengthening of Ramnagar Powerhouse, Kalagarh  
            </li>
            {/* Assessment1 */}
            <div className={classes.parent}>
            <img className={classes.ImageHeight} src={Image1} alt="Underwater Investigation & Inspection of Cylindrical Type Power Intake Gate and Associated Structure & Equipment of Ramganga Power House at Kalagarh, Uttarakhand"></img>
<p>Underwater Investigation & Inspection of Cylindrical Type Power Intake Gate and Associated Structure & Equipment of Ramganga Power House at Kalagarh, Uttarakhand</p>
          </div>
          </ul>
            </div>
          <div>
            <Footer />
          </div>
        </div>
      );
    };
    
export default PowerStructures;
