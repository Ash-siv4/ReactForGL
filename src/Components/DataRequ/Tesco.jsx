import axios from "axios";
import { useEffect, useState } from "react";
import Employee from "./Employee";
import { Spinner, Table } from "reactstrap";

const Tesco = () => {
    //State to store the data as it changes
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);//state to check if the data has loaded
    const [error, setError] = useState(null);//don't know if there will be an error, so set as null

    // const getData = () => {
    //     axios.get("https://reqres.in/api/users")
    //         .then((response) => {
    //             setData(response.data.data)
    //             console.log(response.data.data);
    //         }).catch((error) => {
    //             console.error(error);
    //         })
    // }

    useEffect(() => {
        setTimeout(() => {
            axios.get("https://reqres.in/api/users")
                .then((response) => {
                    setLoaded(true);
                    setData(response.data.data)
                    console.log(response.data.data);

                }).catch((error) => {
                    setError(error);
                    setLoaded(true);
                    // console.error(error);
                })
            // update();
        }, 5000)
    }, [])
    // }, [loaded])

    // const update = () => {
    //     setLoaded(false);
    //     console.log(loaded)
    // }
    // getData();//this line causes an infinite loop, so use USEEFFECT

    if (error) {
        return <h1>Oh noooo! Error: {error.message}</h1>
    } else if (!loaded) {
        return (
            <>
                <p>Loading data...</p>
                <Spinner type="grow" color="primary" />
            </>
        )
    } else {
        return (
            <>
                <h1>Tesco Employees</h1>
                <Table striped>
                    {/* <table> */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((emp) => (
                                <tr>
                                    <Employee person={emp} />
                                    {/* <td>{emp.id}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.first_name}</td>
                                    <td>{emp.last_name}</td>
                                    <td><img src={emp.avatar} /></td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                    {/* </table> */}
                </Table>
            </>
        )
    }

}
export default Tesco;