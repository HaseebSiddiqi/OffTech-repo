import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import { Element } from "react-scroll";
import Input from "../elements/Input";
import emailjs from "emailjs-com";


const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
document.head.appendChild(script);

// initialize the emailjs library with your public key
(function() {
  emailjs.init('nasK5bGKgqXeQJfbK');
})();

function sendMail() {
  var params = {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  message: document.getElementById("message").value,
  };

  const serviceID = "service_7svivzp";
  const templateID = "template_1gb8jgb";
  
  emailjs.send(serviceID, templateID, params)
  .then((res) => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  
  console.log(res);
  alert("your message sent successfully");
  
  })
  .catch((err) => console.log(err));



  }
  
  
  
const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container" id="second" style={{ marginTop: "50px" }}>
       <form onSubmit={sendMail}>
        <div className={innerClasses} id="cta">
          <div className="cta-action">
            <Input
              id="message"
              name="message"
              placeholder="Write your message"
            >
              <svg width="20" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
                  fill="#376DF9"
                />
              </svg>
            </Input>
            <div className="cta-action">
              <button type="submit" onClick={sendMail} >Submit</button>
             
            </div>
          </div>
         
          <div className="cta-slogan">
            <h3 className="m-0">Contact us</h3>
          </div>
        </div>
        </form>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
