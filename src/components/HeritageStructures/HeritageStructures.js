import React from "react";
import classes from "./HeritageStructures.module.css";
import Header from "../../components/nav-header/nav our team";
import Footer from "../Footer/Footer";
import background from "../../assets/nav menu/background.svg";
import { Helmet } from "react-helmet";
import { FiArrowUp } from "react-icons/fi";
import { BsFillXCircleFill } from "react-icons/bs";

const HeritageStructures = () => {
    return (
        <div className={classes.majorcontainer} id="top" style={{backgroundImage: `url(${background})` ,}}>
          <Helmet>
            <title>Heritage Structures | Expert AE Solutions</title>
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
                    <h2 style={{ marginBottom: "21px" }}>Heritage Structures</h2>
                  </center>
                </td>
              </tr>
            </table>
          </center>
            <div className={classes.LeftAlign}>
            <ul>  
            <li>
            Strengthening measures for St. James Church, Kashmiri Gate, New Delhi 
</li><li>
Structural repair measures for mosque at Aden, Yemen.
</li>
          </ul>
            </div>
          <div>
            <Footer />
          </div>
        </div>
      );
    };
    
export default HeritageStructures;
