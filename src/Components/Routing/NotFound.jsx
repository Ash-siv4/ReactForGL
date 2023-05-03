import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Nothing here!</h2>
            <p>
                <Link to="/">Go back to Home page</Link>
            </p>
        </div>
    )
}
export default NotFound;