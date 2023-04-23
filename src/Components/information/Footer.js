/*
Footer - this component displays the nesccary links needed for users to go to when they reach the bottom of the page
*/

import React from 'react'
import styled from '@emotion/styled'

const FooterContainer = styled.footer`
    background:#464545;
    height:325px;
    width:100%;
    padding:1.5%;
    position:relative;
    bottom:0;
    @media (max-width: 770px){
        padding-top:50px;
    }
`

const WelcomeLinks = styled.div`
    height:50px;
    margin-bottom:-1.25%;
`

const List = styled.ul`
    list-style:none;
    text-align:center;
`

const ListItem = styled.li`
    display:inline-block;
    margin-left:2%;
`

const Link = styled.a`
    font-size:0.8em;
    font-family:Roboto, sans-serif;
    color:#fff;
    text-decoration:none;
    text-transform:uppercase;
    &:hover{
        text-decoration:underline;
    }
`

const SocialLinks = styled.div`
    height:75px;
    width:40%;
    margin-left:30%;
    margin-bottom:-1.75%;
`

const SocialListItems = styled.li`
    display:inline-block;
    margin:0% 2% 0% 2%;
    height:75px;
    border-radius:50%;
`

const SocialLink = styled.a`
    color:#fff;
`

const Icon = styled.i`
    transition:1s;
    &:hover{
        transform:scale(1.5);
    }
    @media (max-width: 770px){
        font-size:1.5em;
    }
`

const PersonalInfo = styled.div`
    font-size:0.8em;
    font-family:Roboto, sans-serif;
    color:#fff;
    text-align:center;
    margin-top:3%;
`

const SubHeader = styled.h4`
    margin-top:0.75%;
`

const SmallHeader = styled.h3`
    margin-top:0.75%;
`

const HrLine = styled.hr`
    margin:1.5%;
`

const PersonalLink = styled.a`
    color:rgba(255, 255, 255, 0.603);
`

function Footer() {
    return (
        <div>
            <FooterContainer>
            <WelcomeLinks>
                    <List>
                        {/* 
                        Perosonal Links:
                        What We Do -  to show about myself
                        Portfolio - to show of my work
                        Contact - for any enquiries
                        */}
                        <ListItem><Link href="#">What we Do</Link></ListItem>
                        <ListItem><Link href="#">Portfolio</Link></ListItem>
                        <ListItem><Link href="#">Contact</Link></ListItem>
                    </List>
                </WelcomeLinks>

                <SocialLinks>
                    <List>
                        {/* All social media links */}
                        <SocialListItems><SocialLink href="#"><Icon class="fab fa-facebook fa-2x"></Icon></SocialLink></SocialListItems>
                        <SocialListItems><SocialLink href="#"><Icon class="fab fa-twitter fa-2x"></Icon></SocialLink></SocialListItems>
                        <SocialListItems><SocialLink href="#"><Icon class="fab fa-instagram fa-2x"></Icon></SocialLink></SocialListItems>
                        <SocialListItems><SocialLink href="#"><Icon class="fab fa-github fa-2x"></Icon></SocialLink></SocialListItems>
                    </List>
                </SocialLinks>

                <PersonalInfo>
                    {/* Personal location information */}
                    <SubHeader>99 Road Lane Townsville NE34 1JU</SubHeader>
                    <SubHeader>07263634786</SubHeader>
                    <SubHeader><PersonalLink href="#">myemail@gmail.com</PersonalLink></SubHeader>
                    <HrLine></HrLine>
                    <SmallHeader>Copyright &copy; 2015 SomeCompany Ltd</SmallHeader>
                </PersonalInfo>
            </FooterContainer>
        </div>
    )
}

export default Footer

