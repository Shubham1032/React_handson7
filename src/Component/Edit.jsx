import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { editData } from '../slice';




function Edit() {
   const array = useSelector((state)=>state.data);
   const location = useLocation(); // returns the location object 
    console.log(location.state) // the id present with the state property of the l;ocation object
   const navigate = useNavigate();
   const index = (location.state.data);
const dispatch=useDispatch();

    const newObj = {
        name: array[index].name,
     
        age: array[index].age,
        course:array[index].course,
        batch:array[index].batch
        
    }
    
    console.log("Index : " + index)
    const handleChange = (event) =>
    {
        newObj[event.target.name] = event.target.value;
       console.log(newObj);     
    }

   const handleUpdate = (event) =>{
       console.log(array[index])
console.log("editUpdate")
     dispatch(editData({newObj,index}))
       navigate('/table');
    }


   return (
    <div className='Maindiv'>
        <label htmlFor='name' className='lableforname'>Name</label>
        <input onChange={handleChange} name='name'  placeholder= {array[index].name}></input>
        <label htmlFor='age' className='lableforage lable'>Age</label>
        
        <input onChange={handleChange} name='age'   placeholder= {array[index].age}></input>
        <br/>
        <label htmlFor='course' className='lableforcourse lable'>Course</label>

        <input onChange={handleChange} name='course'   placeholder= {array[index].course}></input>
        <label htmlFor='batch' className='lableforbatch lable'>Batch</label>

        <input onChange={handleChange} name='batch'   placeholder= {array[index].batch}></input>
     <br></br>   <button className='btnforUpdateEdit' onClick={handleUpdate}>Update</button>
     <Link to='/table'>
     <button className='btnforcancelEdit'>Cancel</button></Link>
    </div>
  )
}

export default Edit;