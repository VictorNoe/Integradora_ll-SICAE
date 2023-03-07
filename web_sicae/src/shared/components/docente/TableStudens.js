import {Outlet} from "react-router-dom";
import Axios from "../../plugins/Axios";
import {useEffect, useState} from "react";

export const TableStudens = () => {

    const [career, setCareer] = useState([])

    useEffect(() => {
        getAllCareer();
    }, [])

    const getAllCareer = () => {
        Axios.getAllCareer().then((response) => {
            setCareer(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
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
                    career.map(
                        careers => (
                            <tr key = {careers.id}>
                                <td>{careers.id}</td>
                                <td>{careers.acronim}</td>
                                <td>{careers.name}</td>
                            </tr>
                            )
                    )
                }
                </tbody>
            </table>
            <Outlet/>
        </div>
    )
}