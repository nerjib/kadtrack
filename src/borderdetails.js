import React from 'react';
import axios from 'axios';


export default class BorderDetails extends React.Component {
    constructor(props){
        super(props)
        this.state={
                receivedData:''
        }
    }
componentDidMount=()=>{
    axios.get('https://kdmotor.herokuapp.com/api/v1/allusers')
    .then(res=>{
        this.setState({
            receivedData: res.data
        })
    }).catch(error=>{console.log(error)})
}

render(){
let row =[];
    Object.keys(this.state.receivedData).map((e,i)=>{row.push(<tr><td>{i+1}</td><t>{this.state.receivedData[e].border_name}</t>
    <td>{this.state.receivedData[e].lga}</td><td>{this.state.receivedData[e].uname}</td>{this.state.receivedData[e].pword}
    </tr>)})
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>SN</th><th>Point of Entry</th><th>LGA</th><th>username</th><th>password</th>
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