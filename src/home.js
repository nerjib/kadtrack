import React from 'react';
import axios from 'axios'
import Calender from './calender'

// let entry=0;

export default class Home extends React.Component{
constructor(props){
    super(props)
    this.state = {
        receivedData:'',
        day:new Date().getDate(),
        month:new Date().getMonth(),
        entry: 0,
        exit: 0
    }
}
onLoad=()=>{
    axios.get('https://kdmotor.herokuapp.com/api/v1/')
    .then(res=>{
        this.setState({
            receivedData: res.data
        })
    }).catch(error=>{console.log(error)})
}


componentDidMount(){
    this.inTerval=setInterval(()=>this.onLoad(),60000)
    this.onLoad();
    this.inInterval2= setInterval( ()=>this.tick2(), 1000);

}
componentWillMount(){
    clearInterval(this.inTerval)
    clearInterval(this.inInterval2)

}

handleCalender=(day=new Date().getDate(),month=new Date().getMonth())=>{
    this.setState({
            day,
            month,
    })
}

tick2(){
    this.setState({
      time: new Date().toLocaleString()

    })
}

render (){
    let row =[]
    let entryRow=[]
    let exitRow=[]
    
    Object.keys(this.state.receivedData).map((e,i) => {
        

     if(new Date(this.state.receivedData[e].date).getDate()==this.state.day & new Date(this.state.receivedData[e].date).getMonth()==this.state.month){
       entryRow.push(i)
       if(this.state.receivedData[e].euid !=0){
           exitRow.push(i)
       }
    row.push(<tr key={i}><td>{this.state.receivedData[e].vehicle_no}</td>
    <td>{this.state.receivedData[e].vehicle_type}</td><td>{this.state.receivedData[e].driver_no}</td><td>{this.state.receivedData[e].no_kd_passenger}</td>
        <td>{this.state.receivedData[e].no_male}</td><td>{this.state.receivedData[e].no_female}</td><td>{this.state.receivedData[e].temp}</td>
        <td>{this.state.receivedData[e].border_name}</td><td>{this.state.receivedData[e].time}</td><td>{this.state.receivedData[e].gps}</td>
        <td>{this.state.receivedData[e].exit_gate}</td><td>{this.state.receivedData[e].etime}</td>
    </tr>)
}
    }
    )
    return (
        <div>
         <div className='row col-md-12' style={{background:'#00d2d2'}}>

<div className='col-md-4'>
<Calender onCalender={this.handleCalender}/>
</div>
<div>
    <h1>
    KADUNA TRACKING SYSTEM
    <br/>
    {new Date(this.state.time).getHours()}:{new Date(this.state.time).getMinutes()}:{new Date(this.state.time).getSeconds()}
 <br/>
 {this.state.day}/{this.state.month+1}/2020
 </h1>

 </div>
 </div>
 <div>
   {/*  Entry<br/>
   <h3> No of cars: {entryRow.length}</h3>
 </div>
 <div>
     Exit<br/>
     <h3> No of cars: {exitRow.length}</h3>*/
     }
 </div>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Vehicle Number</th><th>Vehicle Type</th><th>Drivers Phone</th>
                        <th>Passengers Alighting in Kaduna</th><th>No of Male Passengers</th><th>No of Female Passengers</th>
                        <th>Passengers With Temp. > 38</th> <th> Point of Entry</th><th>Entry Time</th><th>GPS</th>
                        <th>Exist Point</th><th>Exit Time</th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        </div>
    )
}

}