import React from 'react';
import axios from 'axios'
import Calender from './calender'

// let entry=0;

export default class Home extends React.Component{
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
        coupon:''
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
    const { fname,lname,familyname,occupation,phone,address,coupon}=this.state
    
    const data ={
        fname,
        lname,
        familyname,
        occupation,
        phone,
        address, 
        coupon
    }
    axios.post('https://kdpall.herokuapp.com/api/v1/beneficiaries',data)
    .then(res=>{
        this.onLoad()
    }).catch(error=>{alert(error)})
}

render (){
    let row =[]
    
    Object.keys(this.state.receivedData).map((e,i) => {
     
    row.push(<tr key={i}><td>{i+1}</td>
    <td>{this.state.receivedData[e].first_name+' '+this.state.receivedData[e].last_name+' '+this.state.receivedData[e].family_name}</td>
    <td>{this.state.receivedData[e].occupation}</td>
    <td>{this.state.receivedData[e].phone_no}</td>
    <td>{this.state.receivedData[e].address}</td>
    <td>{this.state.receivedData[e].coupon}</td>


    </tr>)


    })
    return (
        <div>
         <div className='row col-md-12' style={{background:'#00d2d2'}}>

<div className='col-md-4'>

</div>
<div>
    Kad Pall
    <br/>
    <form>
  <input onChange={this.handleChange} name='fname' placeholder='First Name'/>
  <input onChange={this.handleChange} name='lname' placeholder='Last Name'/>
  <input onChange={this.handleChange} name='familyname' placeholder='Other Name'/>
  <input onChange={this.handleChange} name='occupation' placeholder='Occupation'/>
  <input onChange={this.handleChange} name='phone' placeholder='Phone no'/>
  <input onChange={this.handleChange} name='address' placeholder='Address'/>
  <input onChange={this.handleChange} name='coupon' placeholder='Coupon id'/>

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

            <table className='table'>
                <thead>
                    <tr>
                        <th>S/N</th><th>Name of Head of Household</th><th>Occupation</th>
                        <th>Phone Number</th><th>Address</th><th>Coupon Id</th>
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