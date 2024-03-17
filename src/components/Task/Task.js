export default function Task(props) {
    // let isEdit = props.statusClass == 'editing'
    return(
       
        <div className={props.view}>
          <input className={props.toggle} type="checkbox"/>
          <label>
            <span className={props.description}>{props.descriptionText} </span>
            <span className={props.created}>{props.createdText}</span>
          </label>
          <button className={props.edit}></button>
          <button className={props.destroy }></button>
        </div>

        // {isEdit &&
        //   <input type="text" className="edit" value="Editing task"/> 
        //  }
      
    )
  }