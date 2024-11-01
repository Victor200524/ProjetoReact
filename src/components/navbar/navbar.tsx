import { Button, Image, List, ListItem, Nav, NavLink , Wrapper } from "./navbar.styles";
import logoFipp from "../../assets/images/logo-fipp.png";
import logoUnoeste from "../../assets/images/logo-unoeste.png";
import { MobileNavbar } from "./mobile-navbar";

export const Navbar = () => {
    const openLink = ()=>{
        const url = "https://www.unoeste.com.br/"
        window.open(url,'_black')
    }
    return (
        <Wrapper>
            <Nav>
                <Image src={logoFipp} alt="logo fipp" />
                <List>
                    <ListItem>
                        <NavLink to="/">Home</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/corpo-docente">Corpo-docente</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/contato">Contato</NavLink>
                    </ListItem>

                    <ListItem>
                        <Button onClick={openLink}> <Image src={logoUnoeste} alt="logo unoeste" /></Button>
                    </ListItem>
                </List>

                <MobileNavbar/>
            </Nav>
        </Wrapper>
    );
};
