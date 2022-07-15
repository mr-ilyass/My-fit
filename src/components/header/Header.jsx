import React, {useState} from 'react';
import './Header.css'
import Logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import {Link} from "react-scroll";
const Header = () => {
    const mobile = window.innerWidth<=768 ? true: false ;
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className="header">
            <img src={Logo} alt="logo" className='logo'/>
            { (menuOpened === false && mobile === true) ?
                <div
                style={{backgroundColor:'var(--appColor)',borderRadius:'5px',padding:'0.5rem'}}
                onClick={()=>setMenuOpened(!menuOpened)}
                ><img src={bars} style={{width:'1.5rem', height:'1.5rem'}}/></div>
                :
                <ul className='header-menu'>
                    <li><Link onClick={()=>setMenuOpened(!menuOpened)} to='home' span={true} smooth={true} >Home</Link></li>
                    <li> <Link onClick={()=>setMenuOpened(!menuOpened)} to='Programs' span={true} smooth={true} >Programs</Link> </li>
                    <li> <Link onClick={()=>setMenuOpened(!menuOpened)} to='Reasons' span={true} smooth={true} >Why us</Link> </li>
                    <li > <Link onClick={()=>setMenuOpened(!menuOpened)} to='plans' span={true} smooth={true} >Plans</Link> </li>
                    <li><Link onClick={()=>setMenuOpened(!menuOpened)} to='Testimonials' span={true} smooth={true}>Testimonials</Link></li>
                </ul> }

        </div>
    );
};

export default Header;
