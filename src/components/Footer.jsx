import{
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";



//responsivo para mobile
const Container = styled.div`
    display:flex;
    ${mobile({flexDirection: 'column'})}
`;

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;

const Logo = styled.h1``;

//description
const Desc = styled.p`
    margin:20px 0px;
`;

const SocialContainer = styled.div`
    display:flex;
`;

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${(props) => props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    cursor:pointer;
    :hover{
        background-color:#1b7474cc;
    }
`;

const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({diplay:"none"})}

`;

const Title = styled.h3`
    margin-bottom:30px;
`;


//lista responsiva
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    cursor:pointer;
`;

const ListItem = styled.li`
    width:50%;
    padding:20px;
    :hover{
        text-decoration: underline;
    }
`;

const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({backgroundColor:"#fff8f8"})}
`;

const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;

const Payment = styled.img`
    width:50%;
`;

const Footer = () =>{
    return(
        <Container>
            <Left>
                <Logo>DG</Logo>
                <Desc>
                    A pretensão deste site é apenas puro conhecimento e prática acadêmica
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Links</Title>
                <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contato</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> Rua professor aloisio de carvalho filho 251
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +55 071981909210
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/> guilhermedantasgoes@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    );
};


export default Footer;