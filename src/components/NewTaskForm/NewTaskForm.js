import React, {useCallback} from "react";

export default function NewTaskForm(){
  let autoFocus = useCallback(el => el ? el.focus() : null, [])
    return(
      <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" ref={autoFocus}/>
    </header>
    )
  }