import React, { Component } from 'react';
import axios from 'axios';

export default class StudentDetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         student:[],
         id:'',
         name:'',
         address:''
    }
}
    componentDidMount(){
        axios.get('http://localhost:4000/student')
        .then(res=>{
            this.setState({
                student:res.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    deleteData(userid)
    {
        // console.log(userid);
        axios.delete('http://localhost:4000/student/'+userid)
        .then(err=>{
            alert('data has been deleted')
        })
        .catch(err=>{
            alert('data not been deleted')
        })
    }
    editData(userid){
        axios.get('http://localhost:4000/student/'+userid)
        .then(res=>{
           this.setState({
            id:res.data.id,
            name:res.data.name,
            address:res.data.address
           })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault();
        const{id,name,address}=this.state
        axios.put('http://localhost:4000/student/' +id,{id,name,address})
        .then(res=>{
            alert('data is updated')
        })
        .catch(err=>{
            alert('data not updated')
        })
    }
  render() {
    const{id,name,address}=this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <input type="text" name="id"  value={id} onChange={this.changeHandler}/>
            <input type="text" name="name" value={name} onChange={this.changeHandler}/>
            <input type="text" name="address" value={address} onChange={this.changeHandler}/>
            <input type="submit" />
        </form><br/><br/>
        <center>
        <table style={{border:"1px solid black"}}>
            <thead style={{border:"1px solid black"}}>
                <tr style={{border:"1px solid black"}}>
                    <th style={{border:"1px solid black"}}>Sno</th>
                    <th style={{border:"1px solid black"}}>Name</th>
                    <th style={{border:"1px solid black"}}>Address</th>
                    
                </tr>
            </thead>
            <tbody style={{border:"1px solid black"}}>
                {
                    this.state.student.map((stu)=>{
                        return(
                            <tr key={stu.id} style={{border:"1px solid black"}}>
                                <td style={{border:"1px solid black"}}>{stu.id}</td>
                                <td style={{border:"1px solid black"}}>{stu.name}</td>
                                <td style={{border:"1px solid black"}}>{stu.address}</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;<button className='btn btn-danger' 
                                    onClick={()=>this.deleteData(stu.id)}>
                                    <i className="fa-sharp fa-solid fa-trash"></i>
                                    </button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button onClick={()=>this.editData(stu.id)} 
                                        className='btn btn-primary'>
                                        <i className="fa-solid fa-pencil"></i>
                                    </button>&nbsp;&nbsp;&nbsp;&nbsp;
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </center>
      </div>
    )
  }
}
