import { useState } from 'react';

export default function AddLink({ onCancel , onClose ,addList}) {
  const [textInput,setTextInput]=useState('');
  return (
    <div className='modal-container'>
      <div className='modal'>
        <div className="modal-header">
        <p>Add new link</p>
            <p className='close' onClick={()=> onClose()} >&times;</p>

        </div>
        <div className="modal-content">
           <form>
                  <p>URL</p>
                  <input type="text" value={textInput} onChange={(e)=> setTextInput(e.target.value) }/>
            </form>
        </div>
        <div className="modal-footer">
            <button className='btn btn-submit' onClick={()=>{addList(textInput);
              setTextInput("")
            }} >Add</button>
            <button className='btn btn-cancel' onClick={()=> onCancel()}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
