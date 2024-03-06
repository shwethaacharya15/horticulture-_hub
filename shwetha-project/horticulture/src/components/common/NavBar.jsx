
import { Menu } from 'semantic-ui-react';
import { logo } from '../../constants/constant';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Menu borderless fixed="top">
            <Menu.Item>
                <img src={logo} alt="logo" style={{ width: 50 }} />
            </Menu.Item>
           <Menu.Item name="Home" as={Link} to="/" /> 
           <Menu.Item name="Customers" as={Link} to="/homee" /> 
           <Menu.Item name="Flowers and Vegetables" as={Link} to="/cropsoil" /> 
           <Menu.Item name="Reminders" as={Link} to="/weather" />
        </Menu>
    )
}

export default NavBar;