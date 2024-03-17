import Task from "../Task/Task"

export default function TaskList({taskValues}){
    let elementsTask = taskValues.map((item)=>{
      return (
        <li className={item.statusClass} key={item.id}>
        <Task {...item}/>
        </li>
      )
    })
    return(
      <section className="main">
      <ul className="todo-list">
       { elementsTask }
      </ul>
      
    </section>
    )
  }