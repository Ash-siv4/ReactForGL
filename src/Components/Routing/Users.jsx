import { useParams } from "react-router-dom";

const Users = () => {
    const { id, name } = useParams();
    return (
        <h1>Welcome user the value from the url id {id} and name is {name}</h1>
    )
}
export default Users;