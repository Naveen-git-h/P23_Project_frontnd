import React, { useEffect, useState } from 'react'
import axios from "axios"
const AdminLaptops = () => {
const [laptops,setLaptops]=useState([])
  const fetchLaptops=async()=>{
    const res=await axios.get("http://localhost:9090/admin/laptops",{
      headers:{
          "Authorization":`Bearer ${localStorage.getItem(`token`)}`
      }
    })

    const {data}=res;
    console.log(data)
    setLaptops(data)

  }

  useEffect(()=>{
    fetchLaptops()
  },[])

  const delete_func = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:9090/admin/delete/laptops/${id}`,{
          headers:{
              "Authorization":`Bearer ${localStorage.getItem(`token`)}`
          }
        });
        console.log(res);
    } catch (error) {
        console.error("Error deleting laptop:", error);
    }
};

// const add = ()=>{
//     navigate("/add")
// }

  return (
    <>
            {/* <button onClick={add} style={{marginLeft:350}}>Add Employee</button> */}
            <table border={1}
                   align="center"
                   cellSpacing={10}
                   cellPadding={10}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>Naveen</th>
                        <th>Quantity</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        laptops.map((element,index)=>{
                            return(<tr key={index}>
                                <td>{element.id}</td>
                                <td>
                                    <img src={element.image} width={50} alt="Error"></img>
                                </td>
                                <td>{element.name}</td>
                                <td>{element.quantity}</td>
                                
                                <td>
                                    <i className="fa fa-edit" 
                                       onClick={()=>edit(element.e_id, element.e_name, element.e_sal, element.e_image)}>
                                    </i>
                                </td>
                                <td>
                                    <i className="fa fa-trash" onClick={()=>delete_func(element.id)}></i>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>

                <tfoot></tfoot>
            </table>
        </>

  )
}

export default AdminLaptops