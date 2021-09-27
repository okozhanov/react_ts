import {useEffect, useState} from "react";
import {getUsers} from "../services/users.services";
import {IUser} from "../interfaces/users.interfaces";
import {User} from "./User";

export default function Users() {

    let [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    }, [])

    return (
    <div>
        {users.map(value => <User {...value} key={value.id}/>)}
    </div>
  );
}