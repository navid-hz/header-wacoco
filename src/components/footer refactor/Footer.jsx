import React from "react";
import propTypes from "prop-types";
import { FooterContainer, FooterBody, NavigationFooter, LegalLine, CoInfo, CompanyList, Sublist, ContactList, NavFoorerItem, NavFoorerLink, HeddingFooter } from "./footer.styles";
import { ReactComponent as LinkedinIcon } from "../../assets/LinkedIn-Loggo.svg";
import Logo from "../logo/logo";
import Button from "../button/button";



const Footer = ({items, footerInfo}) => {

  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterBody>
        <CoInfo>
          <Logo type="detailed" />
          <p>{footerInfo.description}</p>
          <Button label={'Contact Us'} size={'small'} backgroundColor={'white'} />
        </CoInfo>
        <NavigationFooter>
        <CompanyList>
          <HeddingFooter>Company</HeddingFooter>
          {items.map((item, index) => {
            return (
              <NavFoorerItem key={index}>
                <NavFoorerLink>
                  {item.title}
                </NavFoorerLink>
              </NavFoorerItem>
            );    
          }
          )}

        </CompanyList>
        <Sublist>
          {items.map((item, index ) => {
            if(item.submenu){
              return (
                <>
                  <HeddingFooter>{item.title}</HeddingFooter>
                  
                    {item.submenu.map((subitem, subIndex) => {
                      return (
                        <NavFoorerItem key={index}>
                          <NavFoorerLink key={subIndex}>
                            {subitem.title}
                          </NavFoorerLink>
                        </NavFoorerItem>
                      );
                    })}
                  
                </>
              );
            } else {
              return null;
            }
          })} 
        </Sublist>
        <ContactList>
          <HeddingFooter>Contact us</HeddingFooter>
          <NavFoorerItem>
            <NavFoorerLink>
              {footerInfo.contact.email}
            </NavFoorerLink>
          </NavFoorerItem>
          <NavFoorerItem>
            <NavFoorerLink>
              {footerInfo.contact.phone}
            </NavFoorerLink>
          </NavFoorerItem>
          <HeddingFooter>Follow us</HeddingFooter>
          <NavFoorerItem>
            <NavFoorerLink>
              <LinkedinIcon fill={"#979CC9"} />
              {footerInfo.social}
            </NavFoorerLink>
          </NavFoorerItem>
          </ContactList>
        </NavigationFooter>
      </FooterBody>
      <LegalLine>
        <p>&copy; WACOCO {currentYear}</p>
        <NavFoorerLink>Privacy Policy</NavFoorerLink>
        <NavFoorerLink>Terms & Conditions</NavFoorerLink>
        <NavFoorerLink>Cookie Policy</NavFoorerLink>
      </LegalLine>
    </FooterContainer>
  );
};




Footer.propTypes = {
    items: propTypes.array.isRequired,
    footerInfo: propTypes.object.isRequired
};

export default Footer;