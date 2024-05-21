import './Model.css'
import { useState } from 'react';

const Model = ({onCancel,onClose,addList}) => {
  const [textInput,setTextInput]=useState('');
  return (
    <>
    <div className='modal-container'>
      <div className='modal'>
        <div className="modal-header">
        <p> Add Module</p>
            <p className='close' onClick={()=> onClose()} >&times;</p>

        </div>
        <div className="modal-content">
        <form>
                  <p>Module name</p>
                  <input type="text" value={textInput} onChange={(e)=> setTextInput(e.target.value)}/>
                  </form>
        </div>
        <div className="modal-footer">
            <button className='btn btn-submit' onClick={()=>{addList(textInput);
              setTextInput("")
            }}>Submit</button>
            <button className='btn btn-cancel' onClick={()=> onCancel()}>Cancel</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Model
