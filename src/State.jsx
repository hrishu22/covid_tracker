import React, {useEffect,useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './State.css'

const State=()=> {
   const [data,setData] = useState([

   ]);
const getCovid= async ()=>{
   const res= await fetch('https://api.covid19india.org/data.json');
   const data=await res.json();
   setData(data.statewise)
}
useEffect(() => {
   getCovid();
}, [])


    return (
       <>
       <div className="container-fluid mt-5" >
          <div  className="main-heading">
          <h1 className="mb-5 text-center " >
             <span className="font-weight-bold" >
                INDIA </span> COVID-19 Dashboard</h1>
          </div>
         
          <div className="table-responsive">
             <table className="table table-hover" >
                <thead className="thead-dark" >
                     <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updated</th>

                     </tr>
                </thead>
                
                   <tbody>
                      {
                         data.map((curr,ind)=>{
                              return(
                                 <tr>
                                    <th>{curr.state}</th>
                                    <td>{curr.confirmed}</td>
                                    <td>{curr.recovered}</td>
                                    <td>{curr.deaths}</td>
                                    <td>{curr.active}</td>
                                    <td>{curr.updated}</td>
                                 </tr>
                              )
                         })
                      }
                  
                     
                   </tbody>
                
             </table>
          </div>

       </div>

       </>
    )
}

export default State;
