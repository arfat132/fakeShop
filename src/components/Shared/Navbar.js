import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg px-5 shadow-sm py-3 header">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand fs-3 fw-bold logo">FakeShop</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav px-5">
                        <Link to="/" class="nav-link active fw-bold text-light text-Capitalize" aria-current="page">Home</Link>
                        <Link to="/shop" class="nav-link fw-bold text-light text-Capitalize">Shop</Link>
                        <Link to="/contact" class="nav-link fw-bold text-light text-Capitalize">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;