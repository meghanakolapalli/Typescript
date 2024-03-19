import React, { useState } from 'react'
import CourseGoals from './CourseGoal';
import { type CourseGoal } from '../App';
type CourseGoalListProp={
    goals:CourseGoal[],
    onDeleteGoal:(id:number)=>void
}

export default function CourseGoalList({goals, onDeleteGoal}:CourseGoalListProp) {
    
    


  return (
    <div>
    
    <ul>
        {goals.map((goal)=>(
          <li key={goal.id}>
            <CourseGoals
            id={goal.id}
             title={goal.title} onDelete={onDeleteGoal}>
              {goal.description}
     
    </CourseGoals>

          </li>

        )
        )}
      </ul>
    </div>
    
  )
}
