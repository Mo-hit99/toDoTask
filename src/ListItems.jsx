export default function ListItems(props) {
  return (
    <>
   <li className="list-item">
     {props.item}
    <span className="icon"><i className="fa-solid fa-ellipsis-vertical"></i></span>
      <ul id="hover-container">

        <li onClick={()=>{props?.renameItem({idx: props.index, text: props?.item})}} className="hover-list">
         Rename
         </li>
         <li className="hover-list" onClick={e=> {
        props.deleteList(props.index)
    }}>
         delete
         </li>
    </ul>
   </li>
    </>
  )
}
