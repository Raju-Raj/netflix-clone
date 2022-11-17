import React,{useState} from 'react';
import { Data } from '../Data/Data';
import './Questions.css';

const Questions = () => {
    const [selected,setSelected] = useState(null)

    const toggle = (i) => {
        if(selected===i){
            return setSelected(null)
        }
       setSelected(i)
    }
  return (
    <div>
        {Data.map((item,i)=>(
            <div className='questions' key={i}>
            <div className='heading' onClick={()=>toggle(i)}>
            <h1>{item.head}</h1>
            <span onClick={()=>toggle(i)}>{selected===i ? '-':'+'}</span>
            </div>
            <hr/>
            <div className={selected===i?'content active':'content'}>
                <p>{item.body}</p>
            </div>
         </div>
        ))}
    </div>
  )
}

export default Questions