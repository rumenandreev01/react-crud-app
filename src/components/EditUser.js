import React, {useContext, useState, useEffect} from 'react'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import {Link,useHistory} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';


export const EditUser = (props) => {

    const [selectedUser, setSelectedUser] =
    useState(
        {
        id:'',
        name:''
        }
    );
    const { editUser, users } = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id;

    useEffect(()=>{
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === Number(userId));
        setSelectedUser(selectedUser);
    },[currentUserId,users])

    const handleChange = (e) => {
        e.preventDefault();
        setSelectedUser({...selectedUser,[e.target.name]:e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault()
        editUser(selectedUser)
        history.push('/')
    }

    return (
           <Form onSubmit={onSubmit}>
               <FormGroup>
                   <Label>Name</Label>
                   <Input type="text" name="name" placeholder="Enter name" value={selectedUser.name} onChange={handleChange} required></Input>
               </FormGroup>
               <Button type="submit">Update Name</Button>
               <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
           </Form>
    )
}
