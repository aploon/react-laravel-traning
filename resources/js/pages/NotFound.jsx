import { Link } from "react-router-dom";

const NotFound = () => {
    return <h1>404 - Page Not Found <Link to="/page2">Go to About Page2</Link></h1>;
};

export default NotFound;