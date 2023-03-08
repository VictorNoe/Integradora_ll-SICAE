import {Outlet, useParams} from "react-router-dom";

export const TableStudens = () => {

    const {id, ...rest} = useParams();
    console.log(id, rest);
    return(
        <>
            <div className="TableStudens">
                <h1>Mira pa</h1>
            </div>
            <Outlet/>
        </>
    )
}