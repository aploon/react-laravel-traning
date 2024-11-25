import { Link } from "react-router-dom";

const Page2 = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Page 2</h1>
            <p className="text-center">This is Page 2</p>
            <Link to="/page1">Go to About Page1</Link>
        </div>
    );
}

export default Page2;