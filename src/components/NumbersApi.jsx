import React from 'react'
import '../App.css'

class NumbersApi extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            num:0,
            data:''
        }
    }

    fetchData = async () =>{
        const res  = await fetch(`http://numbersapi.com/${this.state.num}`)
        const info = await res.text()
        this.setState({data:info})

    }
    async componentDidMount(){
        this.fetchData();
    }
   
    render(){
        return(
        <> 
        <input style={{width:"100px",margin:'10px auto',fontSize:"1.5em"}} type="number" value ={this.state.num} min='10' max='1000' onChange={(e)=>this.setState({num:e.target.value})} />
        <button className='btn-primary' onClick={this.fetchData}>FETCH</button>
        <p>{this.state.data}</p>
        </>
        )

    }
}

export default NumbersApi
