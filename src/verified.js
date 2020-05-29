import React from 'react';
import axios from 'axios'
import Calender from './calender'
import ProPie from './pie'

// let entry=0;

export default class Verified extends React.Component{
constructor(props) {
    super(props)
    this.state = {
        receivedData:'',
        receivedData1:'',
        fname:'',
        lname: '',
        familyname: '',
        address: '',
        phone: '',
        occupation:'',
        dependant:'',
        time:'',
        currentPage: 1,
        beneficiariesPerPage: 5
     }
}
onLoad=()=>{

    axios.get('https://kdpall.herokuapp.com/api/v1/beneficiaries')
    .then(res=>{
        this.setState({
            receivedData: res.data
        })
    }).catch(error=>{console.log(error)})

    axios.get('https://kdpall.herokuapp.com/api/v1/beneficiaries/verified')
    .then(res=>{
        this.setState({
            receivedData1: res.data
        })
    }).catch(error=>{console.log(error)})
}

imgCompress=(e)=>{
    if(e){
    const intialurl = e.substring(0, 49);
const finalurl = e.substring(50, e.length);
return `${intialurl}/q_10/${finalurl}`
    }

}
componentDidMount(){
    this.inTerval=setInterval(()=>this.onLoad(),300000)
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
handleClick = (event) => {
    this.setState({
        currentPage: Number(event.target.id)
      });
}
nextPage = () =>{
//    alert('hello')
    this.setState({
        currentPage: this.state.currentPage+1
    })

}
backPage =()=>{
    this.setState({
        currentPage: this.state.currentPage - 1
    })

}
render (){
    let row =[]
    let row1=[]
/*    
    Object.keys(this.state.receivedData).map((e,i) => {
     if (this.state.receivedData[e].img_url){
    row.push(<tr key={i}><td>{i+1}</td>
    <td>{this.state.receivedData[e].first_name+' '+this.state.receivedData[e].last_name+' '+this.state.receivedData[e].family_name}</td>
    <td>{this.state.receivedData[e].address}</td>
    <td>{this.state.receivedData[e].package_type}</td>
    <td>{this.state.receivedData[e].time}</td>
    <td><img src={this.imgCompress(this.state.receivedData[e].img_urla)} alt={this.state.receivedData[e].coupon}/></td>

    </tr>)
     }

    })
    */
   let total=0;
   let typeA=0;
   let typeB=0;
   let typeC=0;
   let typeD=0;

  
   const { currentPage, beneficiariesPerPage } = this.state;
  
   // Logic for displaying todos
   const indexOfLastTodo = currentPage * beneficiariesPerPage;
   const indexOfFirstTodo = indexOfLastTodo - beneficiariesPerPage;
   const currentBeneficiaries = Object.keys(this.state.receivedData1).slice(indexOfFirstTodo, indexOfLastTodo);

   const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(Object.keys(this.state.receivedData1).length / beneficiariesPerPage); i++) {
     pageNumbers.push(<button key={i}  id={i} onClick={this.handleClick}>{i}</button>);
   }

   currentBeneficiaries.map((e,i) => {

    row1.push(
       <div keys={i}>
           <div>
           {this.state.receivedData1[e].first_name+' '+this.CheckName(this.state.receivedData1[e].last_name)+' '+this.CheckName(this.state.receivedData1[e].family_name)}
         <br/> 
         <div>
              <img  style={{width:250, heigth:400}} src={this.imgCompress(this.state.receivedData1[e].img_url)} alt={this.state.receivedData1[e].coupon}/>
           </div>
               </div>
                       
           <div className='row'>
    <div style={{marginLeft:50}}>{this.state.receivedData1[e].address} | </div><div style={{marginLeft:50}}> Package Type: {this.state.receivedData1[e].package_type} | </div>
    <div style={{marginLeft:50}}>{this.state.receivedData1[e].date}</div>
    <div style={{marginLeft:50}}>GPS:{this.state.receivedData1[e].gps}</div>
           </div>
    <hr/>
       </div>       
       ) }
       )

  Object.keys(this.state.receivedData).map((e,i) => {
        total =total +1
    if (this.state.receivedData[e].package_type){
        if (this.state.receivedData[e].package_type=='A'){
            typeA = typeA + 1
        } else if (this.state.receivedData[e].package_type=='B'){
            typeB = typeB + 1
        } else if (this.state.receivedData[e].package_type=='C'){
            typeC = typeC + 1
        } else if (this.state.receivedData[e].package_type=='D'){
            typeD = typeD + 1
        }
   row.push(
       <div>
           <div>
           {this.state.receivedData[e].first_name+' '+this.CheckName(this.state.receivedData[e].last_name)+' '+this.CheckName(this.state.receivedData[e].family_name)}
         <br/>  <img src={this.imgCompress(this.state.receivedData[e].img_urla)} alt={this.state.receivedData[e].coupon}/>
           </div>
    
           <div className='row'>
<div style={{marginLeft:50}}>{this.state.receivedData[e].address} | </div><div style={{marginLeft:50}}> Package Type: {this.state.receivedData[e].package_type} | </div>
 <div style={{marginLeft:50}}>{this.state.receivedData[e].date}</div>
           </div>
<hr/>
       </div>       
       ) }

   })





    return (
        <div>
         <div className='row col-md-12' style={{background:'#00d2d2'}}>

<div className='col-md-4'>

</div>
 
<div style={{float:'left'}}>
    <br/>
Total Number of Beneficiaries: {total}    <br/>
No. of Packages given:  {typeA+typeB+typeC+typeD}    <br/>
No. of Packages Remaining: {total-(typeA+typeB+typeC+typeD)}  <br/>
 <br/>

 </div><br/>
 
<div style={{float:'left'}}>
 <h3>{this.state.time}</h3>

 </div>
 </div>
 <div >
 
 <br/>
 {/*}
 <div>
 <h4 style={{color:'blue'}}> POINT OF EXIT </h4>
     <h3>  {exitRow.length}</h3>
     
 </div>
 */
    }
 </div>
<ProPie given={(typeA+typeB+typeC+typeD)} remainder={total-(typeA+typeB+typeC+typeD)}/>
    {//pageNumbers
    }
    <button onClick={this.backPage}>Back</button><button onClick={this.nextPage}>Next</button>
                    {row1}
            
        </div>
    )
}

}