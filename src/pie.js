import React from 'react'
import { Pie } from 'react-chartjs-2';



class ProPie extends React.Component{
   render(){
    return(
        <div>
<Pie
data={{
                    labels: ['Given','Remainder'],
                    datasets: [{
                        data:[this.props.given, this.props.remainder],
                        backgroundColor:['green','blue']
                    }]
                }}
                    height='60%'
                />
                
            </div>
    )
    }
}

export default ProPie;