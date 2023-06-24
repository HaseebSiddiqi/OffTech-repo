import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import { Element } from "react-scroll";

import Image from "../elements/Image";

const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
document.head.appendChild(script);


  
 
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
       
        <div className={innerClasses} id="cta">
        
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScC_0xJZSQx59rQNoqcD-i48BBEdx0aVWRGrdBM3hTIfpdwUA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          <div className="cta-slogan">
            <h3 className="m-0">Contact us</h3>
          </div>
        </div>
       
      </div>
    
      <div className="container" id="second" style={{ marginTop: "0px !important", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", justifyItems: "center", alignItems: "center" }}>
  <div>
    <Image
      src="/dmz.svg"
      alt="Features split 01"
      style={{ maxWidth: "150px", height: "300px", margin: 0 }}
    />
  </div>
  <div>
    <Image
      src="/brilliant.png"
      alt="Features split 01"
      style={{ maxWidth: "300px", margin: 100 }}
    />
  </div>
</div>




                  
    </section>
  );
  
  
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
