import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { addData } from '../slice';

const Addstudent = () => {
const dispatch=useDispatch();
  const array = useSelector((state)=>state.data);
const navigate=useNavigate();

const newObj2 = {
  name: "",
  age:"",
  course:"",
  batch:""
}
const handleChange = (event) =>
{
 
  newObj2[event.target.name] = event.target.value;
  console.log(newObj2);     
}

function AddStudentFun(e){
  dispatch(addData(newObj2))

  };

  
    console.log("working add")
    
navigate('/table')
  

  return (
    <div className='Maindiv'>
    <label htmlFor='name' className='lableforname' >Name</label>
    <input  name='name' id='addName'  required onChange={handleChange}></input>
    <label htmlFor='age' className='lableforage lable'>Age</label>
    
    <input  name='age'   id='addAge' onChange={handleChange}></input>
    <br/>
    <label htmlFor='course' className='lableforcourse lable'>Course</label>

    <input  name='course' id='addCourse' onChange={handleChange}></input>
    <label htmlFor='batch' className='lableforbatch lable'>Batch</label>

    <input  name='batch' id='addBatch' onChange={handleChange}></input>
 <br></br>   <button className='btnforUpdateEdit' onClick={AddStudentFun}>Add</button>
 <Link to='/table'>
 <button className='btnforcancelEdit' >Cancel</button>
 </Link>
</div>
  )
}
  
export default Addstudent