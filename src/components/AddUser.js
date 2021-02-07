import React, {useContext, useState} from 'react'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import {Link,useHistory} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';

import { v4 as uuidv4 } from 'uuid';

export const AddUser = () => {
    const [name, setName] = useState("");
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const onSubmit = (e) => {
        const newUser = {
            id:uuidv4(),
            name:name
        }
        addUser(newUser)
        history.push('/')
    }


    return (
        <div>
           <Form onSubmit={onSubmit}>
               <FormGroup>
                   <Label>Name</Label>
                   <Input type="text" placeholder="Enter name" value={name} onChange={handleChange}></Input>
               </FormGroup>
               <Button type="submit">Submit</Button>
               <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
           </Form>
        </div>
    )
}
