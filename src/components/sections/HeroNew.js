import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import Image from "../elements/Image";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const HeroNew = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    "hero section center-content",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Game To Learn",
    paragraph:
      "OffTech was founded to solve the problem of education in Rural Canada. The current method of education is not engaging and does not provide instant feedback. The OffTech game app starts by addressing both problems.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div>
          <div>
            <div className="hero__container">
              <div className="hero-container flex-center">
                <div
                  className="hero__image reveal-from-bottom"
                  data-reveal-container=".hero-container"
                  data-reveal-delay="300"
                >
                  <Image
                    src="/white-none-small.png"
                    alt="Features split 02"
                    style={{
                      width: "400px",
                      height: "400px",
                    }}
                  />
                </div>
              </div>
              <div className="hero-container flex-center">
                <div
                  className="hero__text flex-center reveal-from-bottom"
                  data-reveal-container=".container"
                  data-reveal-delay="300"
                >
                  <div>
                    <div className="text-xxs text-color-primary fw-300 tt-u mb-8">
                      Learn while playing games
                    </div>
                    <h3
                      className="mt-0 mb-12"
                      style={{
                        fontSize: "2.7rem",
                        marginBottom: "40px",
                        lineHeight: "40px",
                      }}
                    >
                      Game To Learn
                    </h3>
                    <p className="mb-30" style={{ fontSize: "0.8rem" }}>
                      OffTech was founded to solve the problem of education in
                      Rural Canada. The current method of education is not
                      engaging and does not provide instant feedback. The
                      OffTech game app starts by addressing both problems.
                    </p>
                    <ButtonGroup>
                      <Button
                        tag="a"
                        color="primary"
                        wideMobile
                        wide={"100%"}
                        href="https://cruip.com/"
                      >
                        Sign Up
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroNew.propTypes = propTypes;
HeroNew.defaultProps = defaultProps;

export default HeroNew;
