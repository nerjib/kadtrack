import React from 'react';
import axios from 'axios'
import Calender from './calender'

// let entry=0;

export default class Given extends React.Component{
constructor(props) {
    super(props)
    this.state = {
        receivedData:'',
        fname:'',
        lname: '',
        familyname: '',
        address: '',
        phone: '',
        occupation:'',
        dependant:'',
        currentPage: 1,
        beneficiariesPerPage: 2000
     }
}
onLoad=()=>{

    axios.get('https://kdpall.herokuapp.com/api/v1/beneficiaries')
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
handleClick = (event) => {
    this.setState({
        currentPage: Number(event.target.id)
      });
}
tick2(){
    this.setState({
      time: new Date().toLocaleString()

    })
}

handleChange=(e)=>{
    const { value, name } = e.target;
    this.setState({
        [name]: value
    });
}
onSubmit=()=>{
    const { fname,lname,familyname,occupation,phone,address,dependant}=this.state
    
    const data = {
        fname,
        lname,
        familyname,
        occupation,
        phone,
        address, 
        dependant
    }
    axios.post('https://kdpall.herokuapp.com/api/v1/beneficiaries',data)
    .then(res=>{
        this.onLoad()
    }).catch(error=>{alert(error)})
}

CheckName=(e)=>{
    if(e){
   
return e
    }
return ''
}

checkDay=(a,b,c,d,e)=>{
    if(a){
    //    day1 = day1 +1
        return 'Day 1'
    }
    else if(b){
        return 'Day 2'
    } else if(c){
        return 'Day 3'
    }
    else if(d){
        return 'Day 4'
    }
    else if(e){
        return 'Day 5'
    }
}
render (){
    let row =[]

    const { currentPage, beneficiariesPerPage } = this.state;
  
    // Logic for displaying todos
    const indexOfLastTodo = currentPage * beneficiariesPerPage;
    const indexOfFirstTodo = indexOfLastTodo - beneficiariesPerPage;
    const currentBeneficiaries = Object.keys(this.state.receivedData).slice(indexOfFirstTodo, indexOfLastTodo);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(Object.keys(this.state.receivedData).length / beneficiariesPerPage); i++) {
      pageNumbers.push(<button key={i}  id={i} onClick={this.handleClick}>{i}</button>);
    }


    currentBeneficiaries.map((e,i) => {
     
    row.push(<tr key={i}><td>{indexOfFirstTodo+i+1}</td>
    <td className='text-left'>{this.state.receivedData[e].first_name+' '+this.CheckName(this.state.receivedData[e].last_name)+' '+this.CheckName(this.state.receivedData[e].family_name)}</td>
    <td>{this.state.receivedData[e].phone_no}</td>
    <td>{this.state.receivedData[e].address}</td>
    <td>{this.state.receivedData[e].coupon}</td>
    <td>{this.state.receivedData[e].time1}</td>
    <td>{this.state.receivedData[e].time2}</td>
    <td>{this.state.receivedData[e].time3}</td>
    <td>{this.state.receivedData[e].time4}</td>
    <td>{this.state.receivedData[e].time5}</td>

    </tr>)
 })
let row2=[];
let k=0
let aa=0
let bb=0
let cc=0
let dd=0
let kk2=0
//this.state.receivedData[e].package_type!='A' ||
 Object.keys(this.state.receivedData).map((e,i)=>{
//    if(this.state.receivedData[e].package_type!='' & this.state.receivedData[e].gps!=null  ){
        if(this.state.receivedData[e].package_type=='A' || this.state.receivedData[e].package_type=='B' || this.state.receivedData[e].package_type=='C' || this.state.receivedData[e].package_type=='D'){
        k=k+1
if(this.state.receivedData[e].package_type=='A'){
    aa=aa+1
} else if (this.state.receivedData[e].package_type=='B'){
    bb=bb+1
}
else if(this.state.receivedData[e].package_type=='C'){
    cc=cc+1
}
else if(this.state.receivedData[e].package_type=='D'){
    dd=dd+1
}
//if(this.checkDay(this.checkDay(this.state.receivedData[e].time1,this.state.receivedData[e].time2,this.state.receivedData[e].time3,this.state.receivedData[e].time4,this.state.receivedData[e].time5)=='Day 5')){
  //  kk2=kk2+1
   row2.push(<tr><td>{k}</td><td>{this.state.receivedData[e].first_name}</td><td>{this.state.receivedData[e].gps}</td><td>{this.state.receivedData[e].package_type}</td>    <td>{this.state.receivedData[e].coupon}</td>
           <td>{this.checkDay(this.state.receivedData[e].time1,this.state.receivedData[e].time2,this.state.receivedData[e].time3,this.state.receivedData[e].time4,this.state.receivedData[e].time5)}</td>
    
        </tr>)

    //}
    } 
})
    return (
        <div>
         <div className='row col-md-12' style={{background:'#00d2d2'}}>

<div className='col-md-4'>

</div>
<div>
    Kad Pal
    <br/>
    <form>
  <input onChange={this.handleChange} name='fname' placeholder='Name'/>
  <input onChange={this.handleChange} name='phone' placeholder='Phone no'/>
  <input onChange={this.handleChange} name='address' placeholder='Village'/>
 
    <br/>
    <button onClick={this.onSubmit}>Add</button> 

                </form> 
 <br/>

 </div>
 </div>
 <div style={{float:'left'}}>
   
 
 <br/>
 {/*}
 <div>
 <h4 style={{color:'blue'}}> POINT OF EXIT </h4>
     <h3>  {exitRow.length}</h3>
     
 </div>
 */
    }
 </div>
{pageNumbers}
Package A: {aa} Package B: {bb} Package c: {cc} package D: {dd}<br/>
Day1 :


            <table className='table'>
                <thead>
                    <tr>
                        <th>S/N</th><th>Name of Head of Household</th>
                        <th>GPS</th><th>Package Type</th><th>Coupon Id</th>
                        <th>Day</th>                   

                    </tr>
                </thead>
                <tbody>
                    {row2}
                </tbody>
            </table>
        </div>
    )
}

}