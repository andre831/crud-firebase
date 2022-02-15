import { Link } from "react-router-dom";

import { Nav, NavLogo, NavContent, NavContentPaths, NavContentItems } from "./style";

export default function Navbar(){
    return(
        <Nav>
            <NavContent>
                <NavLogo><Link to="/">Cadastro</Link></NavLogo>  
                <NavContentPaths>
                    <NavContentItems><Link to="/formadd">Add</Link></NavContentItems>
                </NavContentPaths>
            </NavContent>
        </Nav>
    )
}