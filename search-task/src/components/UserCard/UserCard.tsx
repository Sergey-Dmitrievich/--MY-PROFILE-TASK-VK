import { Data } from "../../Interfaces";
import "./style.css";

export function UserCard(props:Data | any) {
  return (
    <div className="userCard">
      <img className="userPic" src={props.UserCard.image} />
      <div className="userInfo">
        <div>{`${props.firstName} ${props.UserCard.lastName}`}</div>
        <div>{`${props.UserCard.address?.city}`}</div>
      </div>
    </div>
  );
}
