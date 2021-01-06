import React from 'react';

function Nav({categories}) {

    return (
        <header>
            <h2>
                <a  data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories ?  categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                        >
                            <span>
                                {category.name}
                            </span>
                        </li>
                    ))  : "" }
                </ul>
            </nav>
        </header>
    );
}

export default Nav;