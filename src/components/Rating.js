import React from 'react'

export default function Rating(rate) {
    if (rate === 5) {
        return <p className='text-yellow-400'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
    }
    else if (rate >= 4.5) {
        return <p className='text-yellow-400'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i></p>
    }
    else if (rate >= 4) {
        return <p className='text-yellow-400'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></p>
    }
    else if (rate >= 3.5) {
        return <p className='text-yellow-400'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i></p>
    }
    else if (rate >= 3) {
        return <p className='text-yellow-400'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i></p>
    }
    else if (rate >= 2.5) {
        return <p className='text-yellow-400'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i></p>
    }
    else if (rate >= 2) {
        return <p className='text-yellow-400'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></p>
    }
    else if (rate >= 1.5) {
        return <p className='text-yellow-400'><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></p>
    }
    else if (rate >= 1) {
        return <p className='text-yellow-400'><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></p>
    }
    else if (rate >= 0.5) {
        return <p className='text-yellow-400'><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></p>
    }
    else if (rate <= 0.5) {
        return <p className='text-yellow-400'><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></p>
    }
}