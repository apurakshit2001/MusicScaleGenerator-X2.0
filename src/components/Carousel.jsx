import React from 'react';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';

const Carousel = () => {
    return (
        <div style={{ width: '50%', display: 'block', margin: '0 auto' }}>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..." style={{ height: '70vh', overflow: 'hidden', objectFit:'contain' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." style={{ height: '70vh', overflow: 'hidden', objectFit:'contain' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..." style={{ height: '70vh', overflow: 'hidden', objectFit:'contain' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100" alt="..." style={{ height: '70vh', overflow: 'hidden', objectFit:'contain' }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
