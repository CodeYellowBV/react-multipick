import React from 'react';

// This is just a quick component to properly display multipick examples

const STYLES = {
    width: 200,
    margin: 30,
};

export default story => (
    <div style={STYLES}>
        {story()}
    </div>
);
