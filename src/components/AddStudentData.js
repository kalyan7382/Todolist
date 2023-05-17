import React, { Component } from 'react';
import axios from 'axios';

export default class AddStudentData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:'',
         name:'',
         address:''
      }
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault();
        const {id,name,address}=this.state
        axios.post('http://localhost:4000/student',{id,name,address})
        .then(res=> {
            // console.log('Data inserted succefully')
            document.getElementById('Note').innerHTML='Data insereted succesful';
        })
        .catch(err=>{
            // console.log('Data not inserted err')
            document.getElementById('Note').innerHTML='Data not insereted succesful';
        })
    }
  render() {
    const {id,name,address}=this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}  >
            <div>
                <input type="text" name="id" placeholder="ID" value={id} onChange={this.changeHandler}/>
            </div>
            <div>&nbsp;</div>
            <div>
                <input type="text" name="name" placeholder="Name" value={name} onChange={this.changeHandler}/>
            </div>
            <div>&nbsp;</div>
            <div>
                <input type="text" name="address" placeholder="Address" value={address} onChange={this.changeHandler}/>
            </div>
            <div>&nbsp;</div>
            <div>
                <input type="submit" />
            </div>
        </form>
        <div id='Note'></div>
      </div>
    )
  }
}
