import dummyData from "./DummyData.json";

const Posts = () => {
    const printData = () =>
        dummyData.map((data, index) => {
            const { id, userId, title, body } = data;
            return (
                <tr key={index}>
                    <td>{userId}</td>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{body}</td>
                </tr>
            )
        })

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {printData()}
                </tbody>
            </table>
        </>
    )
}
export default Posts;