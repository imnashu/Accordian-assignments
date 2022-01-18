import React, { useState } from 'react';

const MultiAcc = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='onecard'>
            <div className="title">
                <div>{title}</div>
                <div onClick={() => setIsOpen(!isOpen)}>{isOpen ? '-' : '+'}</div> </div>
                {isOpen && <div className="content">{content}</div>}
        </div>
    );
};

export default MultiAcc;