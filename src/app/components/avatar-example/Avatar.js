/* eslint-disable @next/next/no-img-element */
import  "./profile.css";
function Avatar() {
    return (
      <img
        className="avatar"
        src="https://i.imgur.com/1bX5QH6.jpg"
        alt="Lin Lanying"
        width={100}
        height={100}
      />
    );
  }
  
  export default function Profile() {
    return (
      <Avatar />
    );
  }