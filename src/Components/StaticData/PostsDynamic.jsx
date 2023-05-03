import dummyData from "./DummyData.json";
import { Table } from "reactstrap";

const PostsDynamic = () => {
    const myD = dummyData[0];
    const myKey = Object.keys(myD);
    return (
        <>
            <Table bordered striped variant="dark">
                <thead>
                    <tr>
                        {myKey.map((key) => (
                            <th>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dummyData.map((data, index) => (
                        <tr key={index}>
                            {myKey.map((key) => (
                                <td>{data[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default PostsDynamic;