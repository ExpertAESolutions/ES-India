import React from "react";
import classes from "./ProofChecking.module.css";
import Header from "../../components/nav-header/nav our team";
import Image1 from "../../assets/Works/ProofChecking1.PNG"
import Image2 from "../../assets/Works/ProofChecking2.PNG"
import Image3 from "../../assets/Works/ProofChecking3.PNG"
import Image4 from "../../assets/Works/ProofChecking4.PNG"
import Footer from "../Footer/Footer";
import background from "../../assets/nav menu/background.svg";
import { Helmet } from "react-helmet";
import { FiArrowUp } from "react-icons/fi";
import { BsFillXCircleFill } from "react-icons/bs";

const ProofChecking = () => {
    return (
        <div className={classes.majorcontainer} id="top" style={{backgroundImage: `url(${background})` ,}}>
          <Helmet>
            <title>Proof Checking, Structural Design and Drawings | Expert AE Solutions</title>
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
                    <h2 style={{ marginBottom: "21px" }}>Proof Checking, Structural Design and Drawings</h2>
                  </center>
                </td>
              </tr>
            </table>
          </center>
            <div className={classes.LeftAlign}>
            <ul>  
            <li>
            Structural design and drawings for addition/alteration in existing four storeyed building at Main Market, Greater Kailash-II, New Delhi 
</li><li>
Structural Analysis and Design of Spans between Existing Pier P6 and Pier P8 of Kolaghat Bridge, District Shahjahanpur, UP
</li><li>
Proof Checking of design and drawings of several structures including buildings; bridges; towers; and advertisement structures 
</li><li>
Structural design and drawings for 80 Number Residential Houses and Community Centre (PMAY) at Rampura, Kasba Baran Bahar, Pragana Baran, Bullandsahar 
</li><li>
Structural design and drawings for extension of existing office building of District Magistrate, Bullandsahar 
</li><li>
Structural design and supervision of GB Pant Institute of Social Sciences, Allahabad 
</li><li>
Structural design and supervision of multi-storeyed dental college building at Aurangabad, Maharashtra.  
</li><li>
Structural design and supervision of multi-storeyed Design Centre building at Motilal Nehru Regional Engineering College, Allahabad 
</li><li>
Structural design and supervision of multi-storeyed Hostel building for BIET, Jhansi 
</li><li>
Structural Design of elevated as well underground water tanks of different capacities  
</li><li>
Structural Design of Lighting Tower at Indira Gandhi stadium at New Delhi 
</li><li>
Structural design of multi-storied residential buildings consisting of half brick thick load bearing walls for Reserve Bank of India, Kanpur 
</li><li>
Structural design and drawings for advertisement structures over DND flyway, Delhi 

            </li>
            {/* Assessment1 */}
            <div className={classes.parent}>
            <img className={classes.ImageHeight} src={Image1} alt="Proof Checking of Design and Drawings of Advertising Structures of DND Flyway, Noida"></img>
<p>Proof Checking of Design and Drawings of Advertising Structures of DND Flyway, Noida</p>

<img src={Image2} className={classes.ImageHeight} alt="Analysis and design of 80 Number Residential Houses and Community Centre (PMAY) at Rampura, Pragana Baran, Bullandsahar, UP"></img>
<p>Analysis and design of 80 Number Residential Houses and Community Centre (PMAY) at Rampura, Pragana Baran, Bullandsahar, UP
</p>

<img className={classes.ImageHeight} src={Image3} alt="Structural Analysis and Design of Spans between Existing Pier P6 and Pier P8 of Kolaghat Bridge, District Shahjahanpur, UP"></img>
<p>Structural Analysis and Design of Spans between Existing Pier P6 and Pier P8 of Kolaghat Bridge, District Shahjahanpur, UP</p>

<img className={classes.ImageHeight} src={Image4} alt="Structural design and drawings for addition/alteration in existing four storeyed building at Main Market, Greater Kailash-II, New Delhi"></img>
<p>Structural design and drawings for addition/alteration in existing four storeyed building at Main Market, Greater Kailash-II, New Delhi</p>
          </div>
          </ul>
            </div>
          <div>
            <Footer />
          </div>
        </div>
      );
    };
    
export default ProofChecking;
