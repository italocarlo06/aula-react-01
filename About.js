function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

const user = {
    firstName: 'Joseph',
    lastName: 'Perez'
}
function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hello {formatName(user)}<br />How do you do?</p>
      </>
    );
}