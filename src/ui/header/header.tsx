import React from 'react';
import { HeaderContainer } from './header.styles';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <span className='brand-name'>iStore</span>
            </div>
            <div>
                <ul className='items'>
                    <li className='item'>
                        <Link to='/login' className='link'>Login</Link>
                    </li>
                    <li className='item'>
                        <Link to='/register' className='link'>Register</Link> 
                    </li>
                </ul>
            </div>
        </HeaderContainer>
    )
}

export default Header;