import React from 'react';

export default function Inventory() {
    return (
        <div>
            <div class="top">
                <h1>
                    Hello World <i class="fas fa-basketball-ball"></i>
                </h1>

                <button className="green-container btn">
                    <span className="btn-text">Create</span>
                    <i class="fas fa-plus-circle"></i>
                </button>

                <button className="red-container btn">
                    <span className="btn-text">Delete</span>
                    <i class="fas fa-trash-alt"></i>
                </button>

                <button className="yellow-container btn">
                    <span className="btn-text">Edit</span>
                    <i class="fas fa-edit"></i>
                </button>

                <button className="blue-container btn">
                    <span className="btn-text">Continue</span>
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>


            <div className="container-example">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <br />

            <a href="#">
                <i class="fas fa-chevron-left"></i> Back
            </a>
        </div>
    );
}