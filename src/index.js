import React from "react";
import { createRoot } from 'react-dom/client';
import './components/index.css'
import TaskList from "./components/TaskList/TaskList";
import NewTaskForm from "./components/NewTaskForm/NewTaskForm"
import Footer from "./components/Footer/Footer";



let TodoApp = () => {
  let taskValues = [
    {
      id:1,
      statusClass: 'completed',
      view:'view',
      toggle:'toggle',
      description:'description',
      created:'created',
      destroy:'icon icon-destroy',
      edit:'icon icon-edit',
      descriptionText:'Completed task',
      // createdText:'created 17 seconds ago'
    },
    {
      id:2,
      statusClass: 'editing',
      view:'view',
      toggle:'toggle',
      description:'description',
      created:'created',
      destroy:'icon icon-destroy',
      edit:'icon icon-edit',
      descriptionText:'Completed task',
      // createdText:'created 17 seconds ago'
    },
    {
      id:3,
      statusClass: '',
      view:'view',
      toggle:'toggle',
      description:'description',
      created:'created',
      destroy:'icon icon-destroy',
      edit:'icon icon-edit',
      descriptionText:'Active task',
      // createdText:'created 5 minutes ago'
    },
  ]
  let taskFilterBtn = [
    {
      id:1,
      btnClass:'selected',
      btnText:'All'
    },
    {
      id:2,
      btnClass:'',
      btnText:'Active'
    },
    {
      id:3,
      btnClass:'',
      btnText:'Complited'
    }
  ]
  return(
    <section className="todoapp">
      <NewTaskForm/>
     <TaskList taskValues={taskValues}/>
     <Footer taskFilterBtn={taskFilterBtn}/>
    </section>
  )
}
let container =  document.querySelector('#root')
let root = createRoot(container)
root.render(<TodoApp/>)