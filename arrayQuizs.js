// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // My answer
    console.log(fruits.toLocaleString())
    // ellie's answer
    const result = fruits.join();
    console.log(result);
}
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
   // My answer
    const fruitsArray = fruits.split(', ')
    console.log(fruitsArray)
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    //My answer
    console.log(array.reverse());
  }
  
  // Q4. make new array without the first two elements
  {
      //My answer
    const array = [1, 2, 3, 4, 5];
    console.log(array.slice(2));
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      console.log('Quiz 05');
      //My answer
      const result = students.filter(student => student.score == 90)
      console.log(result);

     // Elies's answer
      const eliResults = students.find((student) =>  student.score === 90);
      console.log(eliResults);
  }
  
  // Q6. make an array of enrolled students
  {
    console.log('Quiz 06');
      //My answer
      const result = students.filter(student => student.enrolled);
      console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      console.log('Quiz 07')
      //My answer
      const result = [];
      students.forEach((student) => {
          result.push(student.score);
      });
      console.log(result);

      //Elies' answer
      const elliesResult = students.map((student) => student.score);
      console.log(elliesResult);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      console.log('Quiz 08');
      //My answer
      const result = [];
      students.forEach((student) => {
        result.push(student.score);
        });
      console.log(result.some(element => element < 50));

      //Elies' Answer
      const elieResult = students.some((student) => student.score < 50);
      console.log(elieResult);

      const bonusResults = students.every((student) => student.score > 50);
      console.log(!bonusResults)
  }
  
  // Q9. compute students' average score
  {
      //My answers
      let averageAge = 0;
      let totalAge = 0;
      students.forEach((student) => {
          totalAge = totalAge + student.score;
      })
      averageAge = totalAge / students.length;
      console.log(averageAge);

      //Elies answers
      const result = students.reduce((prev, curr) => {
          console.log('_________');
          console.log(prev);
          console.log(curr);
          return prev + curr.score;
      }, 0)

      //간단버전
      const result2 = students.reduce((prev, curr) => prev + curr.score, 0);
      console.log(result2.length);
      console.log(result / students.length);
      
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    //My answers
    const result = [];
    students.forEach((student) => {
        result.push(student.score);
    });
    console.log(result.join(', '));

    //Elie answer
    const result2 = students
                    .map((student) => student.score)
                    .join();
    console.log(result2);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      //My answers
    const result = [];
    students.forEach((student) => {
        result.push(student.score);
    });
    result.sort();
    console.log(result.join(', '));

    //Elies answer
    const result2 = students.map((student) => student.score)
                        .sort((a, b) => a - b)
                        .join();
    console.log(result2);

  }