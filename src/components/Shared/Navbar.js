import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg px-5 shadow-sm py-3 header">
            <div class="container-fluid">
                <a class="navbar-brand fs-3 fw-bold logo" href="#">FakeShop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav px-5">
                        <a class="nav-link active fw-bold text-light text-Capitalize" aria-current="page" href="#">Home</a>
                        <a class="nav-link fw-bold text-light text-Capitalize" href="#">Shop</a>
                        <a class="nav-link fw-bold text-light text-Capitalize" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;