import React from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    return (
        <div>
            <h2 className='person-full-name'>{lastName}, {firstName}</h2>
            <p className='data'>Age: {age}</p>
            <p className='da'>Hair Color: {hairColor}</p>
        </div>
    );
};

export default PersonCard;
