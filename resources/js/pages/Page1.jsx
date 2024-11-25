import { Link } from "react-router-dom";

const Page1 = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Page 1</h1>
            <p className="text-center">This is Page 1</p>
            <Link to="/page2">Go to About Page2</Link>
        </div>
    );
}

export default Page1;