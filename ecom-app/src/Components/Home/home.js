import { Link } from "react-router-dom";
import Loader from "../Loader/loader";


const Home = () => {
    return <p>Welcome to ClipKart. Explore available <Link to="/products">Products</Link></p>;

}

export default Home;