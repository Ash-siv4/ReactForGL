import dummyData from "./DummyData.json";

const PostsDynamic = () => {
    const myD = dummyData[0];
    const myKey = Object.keys(myD);
    return (
        <>
            <table>
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
            </table>
        </>
    )
}

export default PostsDynamic;