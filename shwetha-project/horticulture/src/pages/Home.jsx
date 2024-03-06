
import { Button } from "semantic-ui-react";
import Header from "../components/common/Header";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <Header title="HORTICULTURE HUB" bgClass="bg-image">
            
             <Button
                content=" CUSTOMERS "
                color="orange"
                as={Link}
                to="/homee"
                size="big"
            />
             <Button
                content=" FLOWERS & VEGETABLES "
                color="green"
                as={Link}
                to="/cropsoil"
                size="big"
            />
            <Button
                content="REMINDERS"
                color="brown"
                as={Link}
                to="/weather"
                size="big"
            />
        </Header>
    )
}

export default Home;