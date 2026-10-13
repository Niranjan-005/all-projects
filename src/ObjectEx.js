import React from 'react'

const ObjectEx=()=> {

    const student = [{
        id:1,
        name:"Arun",
        age:21,
        department:"MCA",
        marks:90
    },
    {
        id:2,
        name:"Arjun",
        age:23,
        department:"MCA",
        marks:95
    }
]

// const data= student.map((i)=>{

//     return(<>
    
//     {console.log(i.name)}

//     </>)
// });

const numbers= [1,2,3,4,5,6];

// console.log("pop",numbers.pop(), numbers)
// console.log("push",numbers.push(7), numbers)
// console.log("shift",numbers.shift(), numbers)
// console.log("unshift",numbers.unshift(0), numbers)

const names = ["niru", "pooju", "nandhu", "moni"]
const spliceres = names.splice(1,2, "added")
console.log(">>>>", spliceres)
console.log(names)
// const result = names.slice(0,2)
// console.log("result", result, names)
// const filtered= numbers.filter(
//     function (x) {
//         return x > 2
//     }
// )

// const filtered = numbers.filter((x)=> x > 2)
// console.log(filtered)

const datamark = student.filter((i)=> i.marks > 90)
// console.log(datamark)


return(
    <>
    
               <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>mark</th> 
                        </tr>
                    </thead>
                     <tbody>
                        <tr>
                        <td>Niranjan</td>
                        <td>19</td>
                        <td>80</td> 
                        </tr>
                        <tr>
                        <td>poojashree</td>
                        <td>20</td>
                        <td>90</td> 
                        </tr>
                    </tbody>

               </table>


               {datamark.map((i)=>{
                  return (
                          <>
                            {i.name}
                          </>
                          )
               })}
       
    
    </>
)
}
export default ObjectEx;