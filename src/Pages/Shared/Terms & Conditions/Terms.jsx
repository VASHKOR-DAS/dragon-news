import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions. Go to <Link to={'/signup'}>Sign Up</Link></h2>
        </div>
    );
};

export default Terms;