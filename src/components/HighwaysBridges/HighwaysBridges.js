import React from "react";
import classes from "./HighwaysBridges.module.css";
import Header from "../../components/nav-header/nav our team";
import Image1 from "../../assets/Works/HighwaysBridges1.PNG"
import Image2 from "../../assets/Works/HighwaysBridges2.png"
import Footer from "../Footer/Footer";
import background from "../../assets/nav menu/background.svg";
import { Helmet } from "react-helmet";
import { FiArrowUp } from "react-icons/fi";
import { BsFillXCircleFill } from "react-icons/bs";

const HighwaysBridges = () => {
    return (
        <div className={classes.majorcontainer} id="top" style={{backgroundImage: `url(${background})` ,}}>
          <Helmet>
            <title>Highways and Bridges | Expert AE Solutions</title>
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
                    <h2 style={{ marginBottom: "21px" }}>Highways and Bridges</h2>
                  </center>
                </td>
              </tr>
            </table>
          </center>
            <div className={classes.LeftAlign}>
            <ul>  
            <li>
            Design of internal roads of arrival and departure terminal of Hindon Airport, Ghaziabad 
</li><li>
Strengthening measures for Janak Setu, Delhi 
</li><li>
Strengthening measures for old Nizamuddin bridge, New Delhi 
</li><li>
Strengthening measures for old Wazirabad bridge, New Delhi 
</li><li>
Structural design and drawings for addition of one lane in existing bridge in Bullandsahar, UP 
            </li>
            {/* Assessment1 */}
            <div className={classes.parent}>
            <img className={classes.ImageHeight} src={Image1} alt="Strengthening measures for Old Nizamuddin bridge, New Delhi"></img>
<p>Strengthening measures for Old Nizamuddin bridge, New Delhi</p>

<img src={Image2} className={classes.ImageHeight} alt="Strengthening measures for Wazirabad bridge, New Delhi"></img>
<p>Strengthening measures for Wazirabad bridge, New Delhi
</p>
          </div>
          </ul>
            </div>
          <div>
            <Footer />
          </div>
        </div>
      );
    };
    
export default HighwaysBridges;
