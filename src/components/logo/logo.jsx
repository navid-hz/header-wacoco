import React, {useState, useEffect} from 'react';
import propTypes from "prop-types";
import normLogoLg from '../../assets/Wacoco-Loggo-LG.svg';
import normLogeMd from '../../assets/Wacoco-Loggo-MD.svg';
import normLogoSm from '../../assets/Wacoco-Loggo-SM.svg';
import detLogoLg from '../../assets/Wacoco-Loggo-Detailed-LG.svg';
import detLogoMd from '../../assets/Wacoco-Loggo-Detailed-MD.svg';
import detLogoSm from '../../assets/Wacoco-Loggo-Detailed-SM.svg';

//import  styledLogo  from './logo.styles';

const Logo = ({type, url, className}) => {
  const [screenwidth, setScreenwidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenwidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  let logo;
  if (type === 'normal') {
    if (screenwidth > 992) {
      logo = normLogoLg;
    } else if (screenwidth > 768) {
      logo = normLogeMd;
    } else {
      logo = normLogoSm;
    }
  }

    if (type === 'detailed') {
      if (screenwidth > 992) {
        logo = detLogoLg;
      } else if (screenwidth > 768) {
        logo = detLogoMd;
      } else {
        logo = detLogoSm;
      }
    }
    

    return (
      <a href={ {url} ||"#"}>
        <img className={className} src={logo} alt="Wacoco Logo" />
      </a>
    );

}

Logo.propTypes = {
    type: propTypes.oneOf(['normal', 'detailed']).isRequired,
    className: propTypes.string,
    url: propTypes.string,
};

export default Logo;
