import React from 'react';
import axios from 'axios'
import Calender from './calender'

// let entry=0;

export default class Passengers extends React.Component{
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
    axios.get('https://kdmotor.herokuapp.com/api/v1/passengers')
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
        

     if(new Date(this.state.receivedData[e].time).getDate()==this.state.day & new Date(this.state.receivedData[e].time).getMonth()==this.state.month){
       entryRow.push(i)
     
    row.push(<tr key={i}><td>{this.state.receivedData[e].pn}</td>
    <td>{this.state.receivedData[e].fn+' '+this.state.receivedData[e].fgn+' '+this.state.receivedData[e].mn}</td>
    <td><a href={`/#/passenger/${this.state.receivedData[e].pid}`} target='_blank'><button className='button btn-primary'>View</button></a></td>
       
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
Passengers with high temperature

    </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Vehicle Number</th><th>NAME</th><th></th>
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