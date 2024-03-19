import CourseGoals from "./component/CourseGoal";
import Header from "./component/Header";
import goalsimg from "./assert/goals.jpg"
import { useState } from "react";
import CourseGoalList from "./component/CourseGoalList";
import NewGoals from "./component/NewGoals";
 export type CourseGoal={
  id:number,
  title:string,
  description:string;

} 

export default function App(){
  const [goals,setGoals]=useState<CourseGoal[]>([])
  function handleAddGoal(goal:string,description:string){
    setGoals((prevGoals)=>{
        const newGoals:CourseGoal={
            id:Math.random(),
            title:goal,
            description:description
        }
        return[
            ...prevGoals,newGoals
        ]
    })
}
function handleDeleteGoal(id:number){
  setGoals((prevGoals)=>prevGoals.filter((goals)=>goals.id !== id));

}
  
  return(
    <main>
      <Header image={{src:goalsimg,alt:"A list of goals"}}>
        <h1>Your course goals</h1>
      </Header>
      {/* <button onClick={handleAddGoal}>
        AddGoals
    </button> */}
    <NewGoals onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
      
      
    

    
    </main>
  )
  }