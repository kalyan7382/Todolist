import React, { Component } from 'react';
import axios from 'axios';

export default class BasicGet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/student')
        .then(res=>{
            // console.log(res.data);
            this.setState({
                posts:res.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
  render() {
    return (
      <div>
        <h1>Student data</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.posts.map((data)=>{
                        return(
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.address}</td>
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
