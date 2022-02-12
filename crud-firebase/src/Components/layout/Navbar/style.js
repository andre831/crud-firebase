import styled from 'styled-components';

const Nav = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 5px 120px;
    align-items: center;
    background: #15003d;
`;

const NavContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media(min-width: 768px){
        flex-direction: row;
    }
`;

const NavLogo = styled.div`
    margin: 10px;

    @media(min-width: 768px){
        margin: 0;
    }
    
    a{  
        font-size: 20px;
        font-weight: 800;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 3px;
        color: #fff;
    }
`;

const NavContentPaths = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
`;

const NavContentItems = styled.li`
    display: flex;
    flex-direction: row;

    @media(min-width: 768px){
        margin: 0 30px;
    }

    a{  
        padding: 4px 8px;
        font-size: 1.3rem;
        font-weight: 600;
        text-decoration: none;
        color: #fff;
        transition: .3s;

        &:hover{
            box-shadow: 0 5px 0 #7777;
        }
    }
`;

export {Nav, NavLogo, NavContent, NavContentPaths, NavContentItems};