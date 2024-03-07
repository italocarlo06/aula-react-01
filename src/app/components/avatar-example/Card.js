import { Avatar } from './AvatarWithProps';
import './card.css'
export function Card({children}) {
    return (
      <div className="card">
        {children}
      </div>
    );
}

export function Profile() {
    return (
      <Card>
         <Avatar size={100} person={{ name: 'Katusko Saruhashi', imageId: 'Yfe0qp2'}} />
      </Card>
    );
}