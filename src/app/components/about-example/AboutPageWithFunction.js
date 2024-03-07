function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Joseph',
    lastName: 'Perez'
}
export function AboutPage() {
    return (
      <div>
        <h1>About Page</h1>
        <p>Hello {formatName(user)} <br />How do you do?</p>
      </div>
    );
}