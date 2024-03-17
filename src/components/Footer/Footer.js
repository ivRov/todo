import TasksFilter from "../TasksFilter/TasksFilter"

export default function Footer({taskFilterBtn}){
    let elementsBtn = taskFilterBtn.map((item)=>{
        return (
          <li key={item.id}>
            <TasksFilter {...item}/>
          </li>
        )
    })
    return(
  <footer className="footer">
        <span className="todo-count">1 items left</span>
        <ul className="filters">
         {elementsBtn}
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }