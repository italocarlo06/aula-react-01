import { Avatar } from './AvatarWithProps';
import './card.css'
export function Profile(props) {
    return (
      <div className="card">
        <Avatar {...props}/>
      </div>
    );
}