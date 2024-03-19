

import {   PropsWithChildren,ReactNode  } from "react"
interface  CourseGoalProps{
    id:number,
    title:string,
    children:ReactNode;
    onDelete:(id:number)=>void
}
//type CourseGoalProps=PropsWithChildren<{title:string}>
export default function CourseGoals ({title,children,onDelete,id}:CourseGoalProps){
    return (
    <article>
        <div>
            <h1>{title}</h1>
            <p>{children}</p>
            <button onClick={()=>onDelete(id)}>Delete</button>
        </div>

    </article>
    )
}


// const CourseGoal:FC<CourseGoalProps>=({title,children})=>{
//     return (
//              <article>
//                  <div>
//                      <h1>{title}</h1>
//                      <p>{children}</p>
//                      <button>Delete</button>
//                  </div>
        
//              </article>
//     )

// }
//export default CourseGoal