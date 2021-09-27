import {RouteComponentProps} from "react-router";

export default function UserDetails(props: RouteComponentProps) {

    let {location: {state}} = props

    return (
    <div>
        {JSON.stringify(state)}
    </div>
  );
}