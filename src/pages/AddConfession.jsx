import React, { useState } from 'react'
import { app } from '../Firebase'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import './AddConfession.css'
const AddConfession = () => {
  const [confessions, setConfessions] = useState('');
  const db = getFirestore(app);
  const addConfession = async(e)=>{
    e.preventDefault();
    const confession=e.target.confession.value;
    try{
      const docRef = await addDoc(collection(db, "confessions"), {
        confession: confession,
        date:new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      setConfessions('')
    }catch(err){
      console.log(err)
  };
}
  return (
    <div>
      <form onSubmit={addConfession}>
        <input 
        type="text" 
        name='confession' 
        id='confession' 
        value={confessions}
        onChange={(e) => setConfessions(e.target.value)}
        placeholder='Write your confession here' />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AddConfession