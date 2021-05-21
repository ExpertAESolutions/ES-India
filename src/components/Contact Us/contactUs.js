import React, { useState, useEffect } from "react";
import classes from "./contactUs.module.css";
import Header from "../nav-header/nav contact";
import Footer from "../Footer/Footer";
import background from "../../assets/backgroundContactUs.svg";
import { Helmet } from "react-helmet";
import { FiArrowUp } from "react-icons/fi";
import { MdLocationOn } from "react-icons/all";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


 const schema = yup.object().shape({
    Name: yup.string().required(),
    Number: yup.string().required().length(10),
    Email: yup.string().required("please enter your email").email(),
    Inquiry: yup.string().required(),
  });

  const ContactUs = () => {
    const { register, handleSubmit, errors } = useForm({
      resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
      console.log(data);
      //console.log('test')
      var submitForm = document.getElementById('contact-form');
      submitForm.submit();
    } 
    console.log(errors);

    return (
      <div
        id="top"
        className={classes.majorContainer}
        style={{ backgroundImage: `url(${background})` }}
      >
        <Helmet>
          <title>Contact Us | Expert AE Solutions</title>
        </Helmet>
        <Header />
        <div className={classes.TopButton}>
          <a href="#top" style={{ textDecoration: "none", color: "#747474" }}>
            <FiArrowUp style={{ fontSize: "40px" }}></FiArrowUp>
          </a>
        </div>
        <center className={classes.Container}>
          <div class={classes.formContainer}>
            <h2>Contact Us</h2>
            <hr color="black" className={classes.borderBelow} />
            <form
              onSubmit={handleSubmit(onSubmit)}
              name="contact"
              id="esform"
              action="/"
              method="POST"
              data-netlify="true"
              netlify
              id="contact-form"
            >
              <input type="hidden" name="form-name" value="contact" />
            <table className={classes.ContactForm}>
                <tr>
                  <td>
                    <center>
                      <div>
                        <p>Name</p>

                        <input
                          type="text"
                          name="Name"
                          className={classes.input}
                          ref={register}
                        />
                        <p id={classes.val_msg}>{errors["Name"]?.message}</p>
                      </div>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>
                    <center>
                      <div>
                        <p>Contact #</p>

                        <input
                          type="number"
                          name="Number"
                          className={classes.input}
                          ref={register}
                        />
                        <p id={classes.val_msg}>
                          {errors["Number"]?.message}
                        </p>
                      </div>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>
                    <center>
                      <div>
                        <p>E-mail</p>

                        <input
                          type="text"
                          name="Email"
                          className={classes.input}
                          ref={register}
                        />
                        <p id={classes.val_msg}>{errors["Email"]?.message}</p>
                      </div>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>
                    <center>
                      <div>
                        <p>Inquiry</p>

                        <textarea
                          name="Inquiry"
                          className={classes.input}
                          ref={register}
                          style={{height:"180px",}}
                        ></textarea>
                        <p id={classes.val_msg}>{errors["Inquiry"]?.message}</p>
                      </div>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>
                    <center>
                      <div>
                        <button type="submit" className={classes.button}>
                          Submit
                        </button>
                      </div>
                    </center>
                  </td>
                </tr>
              </table>
            </form>
          </div>
          <div className={classes.AdContainer}>
            <div className={classes.mapouter}>
              <div className={classes.gmap_canvas}>
                <iframe width="400" height="450" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6305.476994288405!2d77.38131090962068!3d28.516633369066682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce89c7435a61f%3A0x3c4fe1b0f909f5a1!2sExpert%20AE%20Solutions!5e0!3m2!1sen!2sus!4v1620982091692!5m2!1sen!2sus" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://123movies-a.com"></a>
                <br/>
                <a href="https://www.embedgooglemap.net"></a>
              </div>
            </div>
          </div>
        </center>
        <div>
          <Footer style={{width: '100%'}} />
        </div>
      </div>
    );
};
export default ContactUs;
