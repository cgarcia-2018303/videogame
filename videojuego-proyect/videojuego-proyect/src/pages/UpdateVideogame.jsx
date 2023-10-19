import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const UpdateVideogame = () => {
    const [videogame, setvideojuego] = useState({});
    const{id}= useParams();

    const geVideogameId = async()=>{
        try{
            const {data}= await axios(`http://localhost:3000/videogame/getById/${id}`)
            setvideojuego(data.videogame)
        }catch(err){
            console.error(err)
        }
    }

    const update = async()=>{
        try{
            let updateVideogame = {
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value
            }

            const {data} = await axios.put(`http://localhost:3000/videogame/update/${id}`, updateVideogame)
        }catch(err){
            console.error(err)
        }
    }
  return (
    <>
        <form className="m-5 text-center">
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input defaultValue={videogame.name} type="text" className="form-control" id="inputName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescription" className="form-label">Description</label>
          <input defaultValue={videogame.decription} type="text" className="form-control" id="inputDescription" required />
        </div>
        <Link to="/">
          <button onClick={() => update()} className="btn btn-success">UPDATE</button>
        </Link>
        <Link to="/">
          <button className="btn btn-danger">Cancel</button>
        </Link>
      </form>
    </>
  )
}
