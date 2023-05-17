import React, { Component } from 'react';
import axios from 'axios';

export default class StudentData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         student:[]
      }
    }
    componentDidMount()
    {
        axios.get('http://localhost:4000/student')
        .then(res=> {
            this.setState({
                student:res.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
  render() {
    return (
      <div>
        <h1>Student Data</h1>
        <table>
            <thead>
                <tr>
                    <th>SNO</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.student.map((stu)=>{
                        return(
                            <tr key={stu.id}>
                                <td>{stu.id}</td>
                                <td>{stu.name}</td>
                                <td>{stu.address}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
