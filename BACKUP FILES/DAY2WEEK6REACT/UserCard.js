import React from 'react';

function UserCard({ name, age, hobby }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '15px', width: '200px' }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
}

export default UserCard;
