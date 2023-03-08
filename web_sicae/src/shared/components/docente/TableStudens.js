import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {client} from "../../plugins/Axios";

export const TableStudens = () => {

    const [career, setCareer] = useState(null);

    useEffect( () => {
        const getCareer = async () =>{
            const response = await client.get("/career/");
            setCareer(response.data);
        }
        getCareer();
    },[]);

    if (!career) return <h1>error</h1>;

    return(
        <div>
            <table className="table">
                <thead>
                    <th scope="col">Id</th>
                    <th scope="col">Acronimo</th>
                    <th scope="col">Name</th>
                </thead>
                <tbody>
                {
                            <tr key = {career.id}>
                                <td>{career.id}</td>
                                <td>{career.acronim}</td>
                                <td>{career.name}</td>
                            </tr>
                }
                </tbody>
            </table>
            <Outlet/>
        </div>
    )
}