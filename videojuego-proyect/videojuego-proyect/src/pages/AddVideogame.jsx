import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
export const AddVideogame = () => {

    const addVideogame = async()=>{
        try{
            let videogame ={
                name: document.getElementById('inputName').value,
                description: document.getElementById('inputDescription').value
            }
            const {data}= await axios.post('http://localhost:3000/videogame/add', videogame)
            alert(data.message)
        }catch(err){
            alert(err.response.data.message)
        }
    }
  return (
    <>
    <h1>Add videogames</h1>
            <form className="m-5 text-center">
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputName" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="inputDescription" required/>
                </div>
                <Link to="/">
                    <button onClick={()=>addVideogame()} className="btn btn-success">ADD</button>
                </Link>
                <Link to="/">
                    <button className="btn btn-danger">Cancel</button>
                </Link>
            </form>
    </>
  )
}
