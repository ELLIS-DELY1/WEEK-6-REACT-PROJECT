import React from 'react';
import UserCard from './UserCard'; // Import the UserCard component

function App() {
  return (
    <div>
      <h1>React User Cards</h1>
      <UserCard name="Delys" age={17} hobby="Coding" />
      <UserCard name="Alice" age={25} hobby="Reading" />
      <UserCard name="Bob" age={30} hobby="Hiking" />
    </div>
  );
}

export default App;
