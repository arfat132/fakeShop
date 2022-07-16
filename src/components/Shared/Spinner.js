import React from 'react';

const Spinner = () => {
    return (
        <div className="text-center p-56">
            <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;