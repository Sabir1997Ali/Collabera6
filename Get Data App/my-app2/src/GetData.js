import React from 'react'
import axios from 'axios'
import './getdata.css';

 class GetData extends React.Component{
    state={
        id: [],
        name:[],
        username:[],
        emails: []
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res=>{
            const id=res.data;
            this.setState({id})
            const name=res.data;
            this.setState({name})
            const username=res.data;
            this.setState({username})
            const emails=res.data;
            this.setState({emails})
        })


    }
    render(){
        return(
            <div className='all'>
            
          

<table className='table' >
  <tr>
    <th>Id</th>
    <th>Name</th>
    <th>UserName</th>
    <th>Email</th>
  </tr>
  <tr>
    <td> {this.state.id.map(id=> <li>{id.id}</li>)}</td>
    <td> {this.state.name.map(name=> <li>{name.name}</li>)}</td>
    <td> {this.state.username.map(username=> <li>{username.username}</li>)}</td>
    <td>{this.state.emails.map(email=> <li>{email.email}</li>)}</td>
   
  </tr>
  
</table>
            </div>
        )
    }
}

export default GetData;