import { FormEvent, useRef } from "react"
type NewGoalsProps={
    onAddGoal:(goal:string,description:string)=>void
}


export default function NewGoals({onAddGoal}:NewGoalsProps) {
    const goal=useRef<HTMLInputElement>(null);
    const description=useRef<HTMLInputElement>(null);
    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        const enteredGoal=goal.current!.value;
        const entreddescription=description.current!.value;
        event.currentTarget.reset()
        //new FormData(event.currentTarget)
        onAddGoal(enteredGoal,entreddescription)

    }

  return (
   <form onSubmit={handleSubmit}>
    <p>
    <label htmlFor='goal'>Your Goal </label>
        <input id ="goal" type="text"ref={goal}/>
    </p>
    <p>
    <label htmlFor='Description'>Your Description </label>
        <input id ="Description" type="text" ref={description}/>
    </p>
    <button>Add Goal</button>
    
   </form>
  )
}
