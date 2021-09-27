import {IUser} from "../interfaces/users.interfaces";
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // withRouter
} from "react-router-dom";

export const User: React.FC<IUser> = (props) => {

  let {id, name, phone, username} = props

  return (
    <div>
    <h2>{name}</h2>
      <h4>({username})</h4>
      <h5>{phone}</h5>
      {/*<button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {*/}
      {/*}}>details</button>*/}
      <Link to={{pathname: '/users/' + id, state: props}} >details</Link>
      <hr/>
    </div>
  );
}