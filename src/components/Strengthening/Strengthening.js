import React from "react";
import classes from "./Strengthening.module.css";
import Header from "../../components/nav-header/nav our team";
import Image1 from "../../assets/Works/Strengthening1.PNG"
import Image2 from "../../assets/Works/Strengthening2.PNG"
import Image3 from "../../assets/Works/Strengthening3.PNG"
import Image4 from "../../assets/Works/Strengthening4.PNG"
import Image5 from "../../assets/Works/Strengthening5.PNG"
//import Image6 from "../../assets/Works/Strengthening6.PNG"
import Image6 from "../../assets/Works/Single_Strength/Simgle_Image6.png"
import Image6_1 from "../../assets/Works/Single_Strength/Simgle_Image6_1.png"
import Image6_2 from "../../assets/Works/Single_Strength/Single_Strengthening_003.PNG"

//import Image7 from "../../assets/Works/Strengthening7.PNG"
import Image7 from "../../assets/Works/Single_Strength/Simgle_Image7.png"
import Image7_1 from "../../assets/Works/Single_Strength/Simgle_Image7_1.png"

import Footer from "../Footer/Footer";
import background from "../../assets/nav menu/background.svg";
import { Helmet } from "react-helmet";
import { FiArrowUp } from "react-icons/fi";
import { BsFillXCircleFill } from "react-icons/bs";

const Strengthening = () => {
    return (
        <div className={classes.majorcontainer} id="top" style={{backgroundImage: `url(${background})` ,}}>
          <Helmet>
            <title>Strengthening of Existing Structures for Seismic Forces | Expert AE Solutions</title>
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
                    <h2 style={{ marginBottom: "21px" }}>Strengthening of Existing Structures for Seismic Forces</h2>
                  </center>
                </td>
              </tr>
            </table>
          </center>
            <div className={classes.LeftAlign}>
            <ul>  
            <li>
            Seismic vulnerability assessment of existing office premises of UNICEF at Lucknow, Patna and Guwahati and suggestions for strengthening measures 
</li><li>
Condition assessment and suggestions for strengthening measures for multi-storeyed buildings of Ryan International School, Sector-21B, Faridabad, Haryana; Sector-39, Noida; Mayur Vihar, Delhi; Sector-25, Rohini, New Delhi; and Vasant Kunj, New Delhi 
</li><li>
Retrofitting of building of IVPS school Noida for vertical extension 
</li><li>
Energy Efficient Green Structures 
</li><li>
Converting existing seven storeyed building of American Centre, New Delhi into a clean air building as per EPA norms 
</li><li>
Water recycling and drip irrigation in American Centre, New Delhi 
            </li>
            {/* Assessment1 */}
            <div className={classes.parent}>
            <img className={classes.ImageHeightNew} src={Image1} alt="Earthquake vulnerability assessment of UNICEF office building at Lucknow, India"></img>
<p>Earthquake vulnerability assessment of UNICEF office building at Lucknow, India</p>

<img src={Image2} className={classes.ImageHeightNew} alt="Earthquake vulnerability assessment of UNICEF office building at Patna, India"></img>
<p>Earthquake vulnerability assessment of UNICEF office building at Patna, India
</p>

<img className={classes.ImageHeightNew} src={Image3} alt="Condition Assessment and Strengthening Measures for Multi-Storeyed Building of Ryan International School, Sector-39, Noida"></img>
<p>Condition Assessment and Strengthening Measures for Multi-Storeyed Building of Ryan International School, Sector-39, Noida</p>

<img className={classes.ImageHeightNew} src={Image4} alt="Earthquake vulnerability assessment of UNICEF office building at Guwahati, India"></img>
<p>Earthquake vulnerability assessment of UNICEF office building at Guwahati, India</p>

<img className={classes.ImageHeightNew} src={Image5} alt="Condition Assessment and Strengthening Measures for Multi-Storeyed Building of Ryan International School, Sector-21B, Faridabad, Haryana"></img>
<p>Condition Assessment and Strengthening Measures for Multi-Storeyed Building of Ryan International School, Sector-21B, Faridabad, Haryana</p>
          
<img className={classes.ImageHeightNew} src={Image6} alt="Condition Assessment and Strengthening Measures for Multi-Storeyed Building of Ryan International School, Mayur Vihar, New Delhi"></img>
<img className={classes.ImageHeightNew} src={Image6_1} alt="Condition Assessment and Strengthening Measures for Multi-Storeyed Building of Ryan International School, Mayur Vihar, New Delhi"></img>
<img className={classes.ImageHeightNew} src={Image6_2} alt="Condition Assessment and Strengthening Measures for Multi-Storeyed Building of Ryan International School, Mayur Vihar, New Delhi"></img>
<p>Condition Assessment and Strengthening Measures for Multi-Storeyed Building of Ryan International School, Mayur Vihar, New Delhi</p>
          
<img className={classes.ImageHeightNew} src={Image7} alt="Condition Assessment and Strengthening Measures for Multi-Storeyed Building of Ryan International School, Sector-25, Rohini, New Delhi"></img>
<img className={classes.ImageHeightNew} src={Image7_1} alt="Condition Assessment and Strengthening Measures for Multi-Storeyed Building of Ryan International School, Sector-25, Rohini, New Delhi"></img>
<p>Condition Assessment and Strengthening Measures for Multi-Storeyed Building of Ryan International School, Sector-25, Rohini, New Delhi</p>

          </div>
          </ul>
            </div>
          <div>
            <Footer />
          </div>
        </div>
      );
    };
    
export default Strengthening;
