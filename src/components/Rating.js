import React from 'react';

function getStar(value) {
    switch (value) {
        case 0:
            return 'https://i.ibb.co/XbV3nMZ/grayStar.png';
        case 10:
            return 'https://i.ibb.co/ydSP4D8/star1.png';
        case 20:
            return 'https://i.ibb.co/nm1NTgS/star2.png';
        case 30:
            return 'https://i.ibb.co/RgGPgXb/star3.png';
        case 40:
            return 'https://i.ibb.co/txBRJ7P/star4.png';
        case 50:
            return 'https://i.ibb.co/c6g9P3Z/halfStar.png';
        case 60:
            return 'https://i.ibb.co/mXX7vhX/star6.png';
        case 70:
            return 'https://i.ibb.co/1zVp06Z/star7.png';
        case 80:
            return 'https://i.ibb.co/rvtNNqQ/star8.png';
        case 90:
            return 'https://i.ibb.co/2jZ7SqH/star9.png';
        case 100:
            return 'https://i.ibb.co/f9qSbbD/fullStar.png';
        default:
            break;
    }
}

function getStars(value) {
    switch (parseFloat(value)) {
        case 0.0:
            return [0, 0, 0, 0, 0];
        case 0.5:
            return [50, 0, 0, 0, 0];
        case 1.0:
            return [100, 0, 0, 0, 0];
        case 1.5:
            return [100, 50, 0, 0, 0];
        case 1.9:
            return [100, 90, 0, 0, 0];
        case 2.0:
            return [100, 100, 0, 0, 0];
        case 2.1:
            return [100, 100, 10, 0, 0];
        case 2.2:
            return [100, 100, 20, 0, 0];
        case 2.3:
            return [100, 100, 30, 0, 0];
        case 2.4:
            return [100, 100, 40, 0, 0];
        case 2.5:
            return [100, 100, 50, 0, 0];
        case 2.6:
            return [100, 100, 60, 0, 0];
        case 2.7:
            return [100, 100, 70, 0, 0];
        case 2.8:
            return [100, 100, 80, 0, 0];
        case 2.9:
            return [100, 100, 90, 0, 0];
        case 3.0:
            return [100, 100, 100, 0, 0];
        case 3.1:
            return [100, 100, 100, 10, 0];
        case 3.2:
            return [100, 100, 100, 20, 0];
        case 3.3:
            return [100, 100, 100, 30, 0];
        case 3.4:
            return [100, 100, 100, 40, 0];
        case 3.5:
            return [100, 100, 100, 50, 0];
        case 3.6:
            return [100, 100, 100, 60, 0];
        case 3.7:
            return [100, 100, 100, 70, 0];
        case 3.8:
            return [100, 100, 100, 80, 0];
        case 3.9:
            return [100, 100, 100, 90, 0];
        case 4.0:
            return [100, 100, 100, 100, 0];
        case 4.1:
            return [100, 100, 100, 100, 10];
        case 4.2:
            return [100, 100, 100, 100, 20];
        case 4.3:
            return [100, 100, 100, 100, 30];
        case 4.4:
            return [100, 100, 100, 100, 40];
        case 4.5:
            return [100, 100, 100, 100, 50];
        case 4.6:
            return [100, 100, 100, 100, 60];
        case 4.7:
            return [100, 100, 100, 100, 70];
        case 4.8:
            return [100, 100, 100, 100, 80];
        case 4.9:
            return [100, 100, 100, 100, 90];
        case 5.0:
            return [100, 100, 100, 100, 100];
        default:
            break;
    }
}


const Rating = ({ value }) => {
    return (
        <div className='d-flex'>
            {
                getStars(value)?.map((value) => (
                    <img className='img-fluid w-25 h-25' src={getStar(value)} alt="" />
                ))
            }
        </div>
    );
};

export default Rating;