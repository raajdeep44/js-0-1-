const course = {
    coursename : "tuf",
    price : "4999",
    courseInstructor: "striver"
}

// de-structure

// course.courseInstructor

const {courseInstructor : Instructor} = course

console.log(Instructor);

//+++++++++++ API +++++++++++++++++++

// {
//     "coursename" : "tuf",
//     "price" : "4999",
//     "courseInstructor:" "striver"
// }
