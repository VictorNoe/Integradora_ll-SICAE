import React, { useState,useEffect } from 'react'
import { Table, Button } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';

export const TablesDocentes=()=> {

    //Consumo Api
    const URL = `http://localhost:8080/api/users/`
    const [Docente,setDocente] = useState([])

    useEffect(()=>{
        fetch(URL).then((response)=>{return response.json()})
        .then((data)=> {
            console.log(data.data);
            setDocente(data.data)
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }, [])

    //Modificaciones
    const [isEnabled, setIsEnabled] = useState(false);
    
    const handleClick = () => {
        setIsEnabled(!isEnabled);
    }
    
    const style = {
        Button: {
        backgroundColor: isEnabled ? 'green' : 'red',
        color: 'white',
        borderRadius: '5px',
        cursor: 'pointer',
        border: 'none',
        }
    };

  return (
    <>
        <Table striped bordered hover>
      <thead style={styles.TableThead}>
        <tr style={styles.TableCabecera}>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Correo</th>
          <th>Usuario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody style={styles.Text}>
        {Docente.map((post)=>{
          return(
            <tr>
              <td>{post.name}</td>
              <td>{post.lastname}</td>
              <td>{post.email}</td>
              <td>{post.name}</td>
              <td>
                <FaRegEdit style={styles.Icon}/>
                <Button style={style.Button} onClick={handleClick}>
                    {isEnabled ? 'Enabled' : 'Disabled'}
                    </Button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    </>
  )
}

const styles = {
    TableThead: {
        backgroundColor: "#255770",
        padding: "100px",
    },
    TableCabecera: {
        color: "white",
        fontSize: "15px",
        fontWeight: "SemiBold",
        fontfamily: "Inter",
        textAlign: "center",
    },
    Text: {
        fontfamily: "Inter",
        fontSize: "15px",
        fontWeight: "SemiBold",
        textAlign: "center",
    },
    Icon: { 
        height: "auto",
        width: "30px",
        marginRight: "10px",
    },
}