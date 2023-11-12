import { useEffect, useState } from 'react'
import './App.css'

const studentRecords = [
  {name:'Khin Moe Moe',age:21,totalMark: 352},
  {name:'Maung Kyaw Moe',age:13,totalMark: 222},
  {name:'Hla Moe',age:19,totalMark: 252},
  {name:'Aung Aung',age:20,totalMark: 200},
  {name:'Kyaw Kyaw',age:22,totalMark: 333},
  {name:'Min Min',age:14,totalMark: 255},

];

function App() {

  const [eightTeenRecords, setEightTeenRecords] = useState(studentRecords);

  const [name,setName] = useState('Fill your name');
  const [age,setAge] = useState(0);
  const [totalmark, setTotalMark] = useState(0);

  const isEightTeen = () =>  {
     const newEightTeenRecords = studentRecords.filter((student) => student.age >= 18);
     setEightTeenRecords([...newEightTeenRecords]);
  }

  const addToStudentRecord = () => {
     setName("");
     setAge(0);
     setTotalMark(0);
     setEightTeenRecords([...eightTeenRecords,{name:name,age:age,totalMark:totalmark}]);
  }


  return (
    <>
     <div>

        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        <h6>{name}</h6>
        <input type='text' value={age} onChange={(e) => setAge(e.target.value)}/>
        <h6>{age}</h6>
        <input type='text' value={totalmark} onChange={(e) => setTotalMark(e.target.value)} />
        <h6>{totalmark}</h6>

        <button onClick={addToStudentRecord}>AddToStudentRecords</button>


        <ul>
          {eightTeenRecords.map((student,index) => {
              if(student.totalMark >= 300){
                return (<li key={index}>GradeA {student.name}</li>)
              } else if 
              (student.totalMark > 200 || student.totalMark < 300)
              {
                return (<li key={index}>GradeB {student.name}</li>);
              } else 
              {
                return (<li key={index}>Grade C {student.name}</li>)
              }
          }
          )}
        </ul>
     </div>
     <button  onClick={isEightTeen}>FilterByAgeEightTeen</button>
    </>
  )
}

export default App
