import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-image: linear-gradient(180deg, #000639 0%, #252E84 100%) ;
    padding: 70px 9.2vw 45px 9.2vw;
    color: #fff;

    @media (max-width: 992px) {
        padding: 70px 3.2vw 45px 3.2vw;
    }
`;

export const FooterBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    color: #fff;
    font-size: 18px;
`;

export const NavigationFooter = styled.div`
    display: flex;
    
`;

export const NavFoorerItem = styled.li`
    min-height: 40px;
    cursor: pointer;
`;

export const NavFoorerLink = styled.a`
    font-family: 'Helvetica';
    color: #979CC9;
`;

export const HeddingFooter = styled.h2`
    font-size: 18px;
    font-family: 'Inter';
    color: #fff;
    margin-bottom: 20px;
`;

export const CoInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 270px;
    gap: 20px;
    font-family: 'Helvetica';
    font-size: 18px;
    
`;

export const CompanyList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    min-width: 174px;
`;

export const Sublist = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    min-width: 174px;
`;

export const ContactList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    min-width: 174px;
    a {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
`;

export const LegalLine = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    margin-top: 50px;
    font-size: 15px;
    color: #979CC9;
    p {
        font-family: 'Helvetica';
        font-size: 15px;
    }
`;

