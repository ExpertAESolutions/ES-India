import React from "react";
import classes from "./FireDamagedStructures.module.css";
import Header from "../../components/nav-header/nav our team";
//import Image1 from "../../assets/Works/FireDamagedStructures1.PNG"
import Image1 from "../../assets/Works//Single_FireDamagedStructures/Single_Image1.png"
import Image1_1 from "../../assets/Works//Single_FireDamagedStructures/Single_Image1_1.png"
import Image1_2 from "../../assets/Works//Single_FireDamagedStructures/Single_Image1_2.png"

import Image2 from "../../assets/Works/FireDamagedStructures2.PNG"
//import Image3 from "../../assets/Works/FireDamagedStructures3.PNG"
import Image3 from "../../assets/Works//Single_FireDamagedStructures/Single_Image3.png"
import Image3_1 from "../../assets/Works//Single_FireDamagedStructures/Single_Image3_1.png"
import Image3_2 from "../../assets/Works//Single_FireDamagedStructures/Single_Image3_2.png"

//import Image4 from "../../assets/Works/FireDamagedStructures4.PNG"
import Image4 from "../../assets/Works//Single_FireDamagedStructures/Single_Image4.png"
import Image4_1 from "../../assets/Works//Single_FireDamagedStructures/Single_Image4_1.png"

import Footer from "../Footer/Footer";
import background from "../../assets/nav menu/background.svg";
import { Helmet } from "react-helmet";
import { FiArrowUp } from "react-icons/fi";
import { BsFillXCircleFill } from "react-icons/bs";

const FireDamagedStructures = () => {
    return (
        <div className={classes.majorcontainer} id="top" style={{backgroundImage: `url(${background})` ,}}>
          <Helmet>
            <title>Fire Damaged Structures | Expert AE Solutions</title>
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
                    <h2 style={{ marginBottom: "21px" }}>Fire Damaged Structures</h2>
                  </center>
                </td>
              </tr>
            </table>
          </center>
            <div className={classes.LeftAlign}>
            <ul>  
            <li>
            Assessment and strengthening of Fire Damaged building of M/s K.K. Kapoor Hosiery, Ludhiana, Punjab
            </li><li>
Assessment and strengthening of Fire Damaged building of Rajan Vinayak & Rakesh Kumar in Ludhiana, Punjab 
</li><li>
Strengthening measures for fire damaged building of M/s Bludip Paints and Chemicals, Ghaziabad 
</li><li>
Damage assessment and strengthening measures for fire affected buildings of Palm Green 
</li><li>
Hotel and Resorts, Bakoli, Karnal road, Delhi 

            </li>
            {/* Assessment1 */}
            <div className={classes.parent}>
            <img className={classes.ImageHeightNew} src={Image1} alt="Damage Assessment and Strengthening Measures for Fire Affacted Palm Green Hotel and Resorts, Bakoli, NhH1, G.T. Karnal Road, Delhi"></img>
            <img className={classes.ImageHeightNew} src={Image1_1} alt="Damage Assessment and Strengthening Measures for Fire Affacted Palm Green Hotel and Resorts, Bakoli, NhH1, G.T. Karnal Road, Delhi"></img>
            <img className={classes.ImageHeightNew} src={Image1_2} alt="Damage Assessment and Strengthening Measures for Fire Affacted Palm Green Hotel and Resorts, Bakoli, NhH1, G.T. Karnal Road, Delhi"></img>
<p>Damage Assessment and Strengthening Measures for Fire Affacted Palm Green Hotel and Resorts, Bakoli, NhH1, G.T. Karnal Road, Delhi</p>

<img src={Image2} className={classes.ImageHeightNew} alt="Fire Damage Assessment and Rehabilitation Measures for Bludip Paints and Chemicals Building at Meerut Road Industrial Area, Ghaziabad"></img>
<p>Fire Damage Assessment and Rehabilitation Measures for Bludip Paints and Chemicals
Building at Meerut Road Industrial Area, Ghaziabad
</p>

<img className={classes.ImageHeightNew} src={Image3} alt="Assessment and Strengthening of Fire Damaged Building of Rajan Vinayak & Rakesh Kumar, Ludhiana, Punjab"></img>
<img className={classes.ImageHeightNew} src={Image3_1} alt="Assessment and Strengthening of Fire Damaged Building of Rajan Vinayak & Rakesh Kumar, Ludhiana, Punjab"></img>
<img className={classes.ImageHeightNew} src={Image3_2} alt="Assessment and Strengthening of Fire Damaged Building of Rajan Vinayak & Rakesh Kumar, Ludhiana, Punjab"></img>
<p>Assessment and Strengthening of Fire Damaged Building of Rajan Vinayak & Rakesh Kumar, Ludhiana, Punjab</p>

<img className={classes.ImageHeightNew} src={Image4} alt="Assessment and Strengthening of Fire Damaged K.K. Kapoor Hosiery Building, Ludhiana, Punjab"></img>
<img className={classes.ImageHeightNew} src={Image4_1} alt="Assessment and Strengthening of Fire Damaged K.K. Kapoor Hosiery Building, Ludhiana, Punjab"></img>
<p>Assessment and Strengthening of Fire Damaged K.K. Kapoor Hosiery Building, Ludhiana, Punjab</p>
          </div>
          </ul>
            </div>
          <div>
            <Footer />
          </div>
        </div>
      );
    };
    
export default FireDamagedStructures;
