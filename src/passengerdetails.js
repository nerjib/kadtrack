import React from 'react';
import axios from 'axios';
import Pdf from 'react-to-pdf';


const ref=React.createRef();
const ref1=React.createRef();
export default class PassengerDetails extends React.Component {
constructor(props){
    super(props)
    this.state={
        rid: '',
        pid: '',
        uid: '',
        summary: '',
        summaryfrom: '',
        summaryto: '',
        conclusion: '',
        followup: '',
        date: '',
        compliance: '',
        ptitle: '',
        plocation: '',
        plga: '',
        pgps: '',
        fname: '',
        lname: '',
        phone: '',
        oname: '',
        email: '',
        Activity:'',
        gps:'',
        contractor_id:'',
        companyname:'',
        imgdisplay:'none',
        reportdisplay:'',
        activity1:'',
        activitydate:'',
        activityoutcome:'',
        imgurl:'',
        lot:'',
        projectstage:'',
        gender:''
    }
}


    componentDidMount(){
        const { params } = this.props.match;

        axios.get('https://kdmotor.herokuapp.com/api/v1/passengers/'+params.id)
            .then(res=>{
                const {fulltime,kdaddress,pn,fn,fgn,MN,age,passport, nationality, residence, cv,id, tc, lv, ds,kdtelephone, hc, hcno, ekd, ekdno, da, airline,userid, bordername, flumed, antiviral, antibiotics, paracetamol, bflu, bunwell, bbreathing, bcough, bfever, ill, flu, unwell, breathing, cough, fever, doctor, health,  gender, time} =res.data[0]
              this.setState({
                fulltime,kdaddress,pn,fn,fgn,MN,age,passport, nationality, residence, cv,id, tc, lv, ds,kdtelephone, hc, hcno, ekd, ekdno, da, airline,userid, bordername, flumed, antiviral, antibiotics, paracetamol, bflu, bunwell, bbreathing, bcough, bfever, ill, flu, unwell, breathing, cough, fever, doctor, health,  gender, time
              })
            
            
            })
            
        }

    render(){
        const { params } = this.props.match;
        let row=[];
        
            const options={
                orientation: 'landscape',
                unit: 'px',
                format: [900,400]
            }

            const getpdf=({toPdf})=>{
return (<div>

                <Pdf  targetRef={ref} filename={this.state.lot+'_'+this.state.pid+'_'+this.state.ptitle+'_'+this.state.plga+'_'+this.state.summaryfrom+'_'+this.state.summaryto} 
              x={1} y={1}
              >
                {toPdf}
             </Pdf>
              </div>)
            }

        return(
            <div className='fluid-container'>
{/*
<Pdf>
    {({toPdf, targetRef}) =>  (
        <div style={{width: 500, height: 500, background: 'red'}} onClick={toPdf} ref={targetRef}/>
    )}
</Pdf>
*/}
                <div className='col-md-12'  >
          {/*}
                <Pdf  targetRef={ref} filename={this.state.lot+'_'+this.state.pid+'_'+this.state.ptitle+'_'+this.state.plga+'_'+this.state.summaryfrom+'_'+this.state.summaryto} 
                x={1} y={1}
                >
                    {({toPdf})=><button className='btn btn-default btn-info' onClick={toPdf}>Download Report{this.state.ppstatus}</button>}
                </Pdf>
              */
              }
                </div>
                <div className='row'>
    
               

                <div className='fluid-container col-md-12'ref={ref}>
                <br/><br/>
                <div className='col-md-7 row'>



    </div>
    <br/>
<br/>
                <div className=' col-md-7' style={{display:this.state.reportdisplay }}>
                <div ><span><h5><strong>KADUNA STATE MINISTRY OF HEALTH</strong></h5></span></div>
                <div ><span><h5><strong>PASSENGER REPORTING FORM</strong></h5></span></div>

                <table className='table table-bordered ' style={{border: '1px inset black'}}>
                    <thead>
                        
                        <tr>
                            <th colSpan="2">
                            <strong> Family name: {this.state.fn}</strong>
                            </th>
                            <th>
                            <strong> First Giving Name:</strong> {this.state.fgn}
                            </th>
                            <th>
                            <strong> Middle Name:</strong> {this.state.mn}
                            </th>
                        </tr>
                        </thead>
                        
                        <tbody>
                        <tr className='text-left'>
                            <td ><strong>Gender:</strong> {(this.state.gender).toUpperCase()}</td>
                            <td ><strong>Date of Birth:</strong> {this.state.age}</td>
                            <td><strong>Passport Number:</strong> {this.state.passport}</td>
                            <td><strong>Nationality:</strong> {this.state.nationality}</td>
                       {//     <td>{(new Date(this.state.date).toString()).substr(0,3)}</td>
                       }
                       </tr>
<tr>     
                            <td ><strong>Country of residence:</strong> {this.state.residence}</td>
                            <td><strong>Country Visited:</strong> {this.state.cv}</td>
                            <td><strong>Immediate destination in Kaduna:<br/></strong> {this.state.id}</td>
                            <td ><strong>Duration of Stay in Destination</strong> {this.state.ds}</td>

    </tr>                 
    <tr>     
                            <td colSpan='2'><strong>Towns/Cities Visited:</strong> {this.state.tc}</td>
                            <td colSpan='2'><strong>address of location visited:</strong> {this.state.lv}</td>
                         
    </tr>                 
    <tr>     
                            <td colSpan='4'><strong>Address and Telephone No. while in Kaduna:<br/></strong> {this.state.kdtelephone}</td>
                          
    </tr>                 
    <tr>     
                            <td colSpan='2'>Emergency contact in home country<br/>
                            Name: {this.state.hc}<br/>
                            Phone no. {this.state.hcno}
                            </td>
                            <td colSpan='2'><strong>Emergency contact in Kaduna State:</strong><br/> 
                            Name:{this.state.ekd}<br/>
                            
                            Phone no.:{this.state.ekdno}</td>
    </tr>                 

    <tr>     
                            <td colSpan='2'><strong>Departure and  (Transit) Airport:<br/></strong> {this.state.da}</td>
                            <td colSpan='2'><strong>Name of Airline:</strong> {this.state.airline}<br/>
                            <strong>Where you ill during this trip? :</strong> {this.state.health}<br/>
                            <strong>Did you see a doctor?</strong> {this.state.doctor}
                            </td>
        </tr>                 
        <tr>     
                            <td colSpan='4' ><strong>In the last two weeks did you have any of the following? </strong></td>
                           
    </tr>                 
    <tr>     
                            <td ><strong>Fever:</strong> {this.state.fever}</td>
                            <td><strong>Cough:</strong> {this.state.cough}</td>
                            <td><strong>Difficulty in Breathing:<br/></strong> {this.state.breathing}</td>
                            <td ><strong>Generally feeling unwell</strong> {this.state.unwell}</td>

    </tr>               
      <tr>
          <td colSpan='4'> <strong>Symptomps of flu or Common cold :</strong>  {this.state.flu}</td>
      </tr>
<tr>
                       <td colSpan='4'><strong>In the last 2 weeks have you had contact with anyone who was ill/not feeling well?</strong>{this.state.ill}</td>
</tr>
<tr>     
                            <td colSpan='4' ><strong>If yes above, what symptoms did they have? </strong></td>
                           
    </tr>                 
    <tr>     
                            <td ><strong>Fever:</strong> {this.state.bfever}</td>
                            <td><strong>Cough:</strong> {this.state.bcough}</td>
                            <td><strong>Difficulty in Breathing:<br/></strong> {this.state.bbreathing}</td>
                            <td ><strong>Generally feeling unwell</strong> {this.state.bunwell}</td>

    </tr>               
    <tr>
          <td colSpan='4'> <strong>Symptomps of flu or Common cold :</strong>  {this.state.bflu}</td>
      </tr>
      <tr>     
                            <td colSpan='4' ><strong>Have you taken any of the folloeing medication in the last 24hrs </strong></td>
                           
    </tr>                 
                        <tr>    <td colSpan='4' ><strong>Paracetamol, Ibrofen, other pain relieving medication?:</strong> {this.state.paracetamol}</td>
                        </tr>
                        <tr>
                        <td ><strong>antibiotics:</strong><br></br> {this.state.antibiotics}</td>
                            <td><strong>Antiviral:<br/></strong><br/> {this.state.antiviral}</td>
                            <td colSpan='2'><strong>Flu or Common cold</strong> <br/>{this.state.flumed}</td>

    </tr>               
                    </tbody>

                </table>
              </div>
             
            
            
                     </div>
                     </div>

            </div>            
        )
    }
}