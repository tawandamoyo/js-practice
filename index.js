const exercises = [
    {
      id: 1,
      title: "Bench Press (Barbell)",
      muscle_group: "chest",
      other_muscles: ["triceps", "shoulders"],
      type: "weight_reps",
    },
    {
      id: 2,
      title: "Military Press",
      muscle_group: "shoulders",
      other_muscles: ["triceps"],
      type: "weight_reps",
    },
    {
      id: 3,
      title: "Incline Bench Press (Barbell)",
      muscle_group: "chest",
      other_muscles: ["shoulders"],
      type: "weight_reps",
    },
    {
      id: 4,
      title: "Push Up",
      muscle_group: "chest",
      other_muscles: ["triceps", "shoulders"],
      type: "reps_only",
    },
  ]


  /**
 * Problem 1:
 * 
 * Using the exercises array, create an array that contains
 * the titles of all the exercises of type "weight_reps".
 * 
 * Use console.log to log the result.
 */

//   Solution:

let weightRepsExerciseTitles = exercises
  .map((exercise) => {
      if (exercise.type === "weight_reps") {
          return exercise.title
      } 
  })
  .filter(Boolean); // Removes undefined values, since Map() returns undefined for falsy values


console.log('Solution 1: ')
console.log(weightRepsExerciseTitles);

/**
 * Problem 2:
 * 
 * Imagine the user was filtering a list of exercises based on
 * the target muscle group. Write a function that takes a muscle
 * group ("triceps", "shoulders", "chest") and returns an array
 * of all the exercises that use that muscles group.
 * 
 * A muslce_group is used if it's included in either the muscle_group
 * or other_muscles props.
 * 
 * Use console.log to log the result.
 */

// Solution:


 
function getMuscleGroupExercises(muscleGroup) {
    let muscleGroupExercises = exercises.filter((exercise) => {
        if (exercise.muscle_group === muscleGroup || exercise.other_muscles.includes(muscleGroup)) {
            return exercise;
        }
    })
        
    return muscleGroupExercises;
}
console.log('\n Solution 2:')
console.log(getMuscleGroupExercises('chest'));