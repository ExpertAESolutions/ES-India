import React from "react";
import classes from "./Footer.module.css";
import Logo from "../../assets/Logo.svg";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { BiCopyright } from "react-icons/bi";
// import { Mailto } from "react-mailto";
const Footer = () => {
  var d = new Date();
  var n = d.getFullYear();
  return (
    <div>
      <div className={classes.Footer}>
        <div className={classes.Contact2}>
          <a className={classes.Mail} href="mailto:solutionbyexpert@gmail.com">
            <div className={classes.AdContainer}>
              <MdEmail className={classes.Icons} />

              <div>solutionbyexpert@gmail.com</div>
            </div>
          </a>
          <div className={classes.AdContainer}>
            <IoCall className={classes.Icons} />
            <div>+91-9810285722, 9811407026</div>
          </div>
          {/* <div>
            <div className={classes.AdContainer}>
              <div>
                <MdLocationOn className={classes.Icons} />
              </div>

              <div className={classes.Address}>
                Noida Office: BG-06, Parsvnath Prestige Sector-93A, Noida, UP
                PIN-201304 India.
              </div>
            </div>
          </div> */}

          <div>
            <div className={classes.AdContainer}>
              <div>
                <MdLocationOn className={classes.Icons} />
              </div>
              <div className={classes.Address}>
                Ghaziabad Office: II-F-163 Nehru Nagar Ghaziabad, U.P., PIN-201001,
                India
              </div>
            </div>
          </div>
        </div>
        <div className={classes.Contact1}>
          <div className={classes.Content}>
            <img className={classes.Logo} src={Logo} alt="Logo" />
          </div>
          <div className={classes.Content}>
            <div className={classes.Copyright1}>
              Copyright
              <BiCopyright className={classes.Copy} /> {n}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
