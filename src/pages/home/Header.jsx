import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

const Header = ({ projectItems }) => {
    const [toggle, setToggle] = useState(false);
    const [activeRightNav, setActiveRightNav] = useState(false);
    const [listCategory, setListCategory] = useState('react');

    useEffect(() => {
        const body = document.querySelector('body');
        body.onclick = () => {
            setToggle(false);
            setTimeout(() => {
                setActiveRightNav(false);
            }, 400);
        }
    });

    const handleNavToggle = (e) => {
        e.stopPropagation();
        setToggle(!toggle);
        setTimeout(() => {
            setActiveRightNav(false);
        }, 400);
    }

    const handleGoToRightNav = (category) => {
        setActiveRightNav(true);
        setListCategory(category);
    }

    const handleBackToLeftNav = () => {
        setActiveRightNav(false);
    }

    return (
        <div className="relative flex flex-row items-center justify-between h-[100px] w-full">
            {/* logo */}
            <Link to="/" className="logo ml-[0.4rem] relative text-[#fff] text-[2.4rem] font-[700] uppercase no-underline">REACTOR</Link>

            {/* toggle bar */}
            <div onClick={handleNavToggle} className={`toggler ${toggle ? 'active' : null} h-[46px] w-[54px] grid place-items-center cursor-pointer rounded-lg`}>
                <span className="toggleBar relative h-[3px] w-[32px] bg-[#fff] transition-all duration-300 ease-in-out"></span>
            </div>

            {/* navigation */}
            <div onClick={(e) => e.stopPropagation()} className={`${toggle ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'} absolute top-[5rem] right-0 w-[260px] h-auto flex items-start justify-start rounded-[1.2rem] overflow-hidden transition-all ease-in-out duration-300 z-[99999]`} style={toggle ? {transform: 'translateX(0)'} : {transform: 'translateX(2rem)'}}>
                
                {/* left nav */}
                <ul className={`${activeRightNav ? 'pointer-events-none' : 'pointer-events-auto'} list-none h-auto max-h-[400px] min-w-[260px] overflow-y-auto bg-[#222] border-[1px] border-[#000] rounded-[1.2rem] transition-all ease-in-out duration-300`} style={activeRightNav ? {transform: 'translateX(-100%)'} : {transform: 'translateX(0)'}}>
                    <li onClick={() => handleGoToRightNav('react')} className="ps-[0.8rem] h-[46px] flex items-center justify-between cursor-pointer hover:bg-[#333] transition-all ease-in-out duration-300">
                        <span className="text-[1.2rem] font-[500]">React Projects</span>
                        <RiArrowDropRightLine className="text-[2rem]"/>
                    </li>
                    <a href="https://macroos.vercel.app/" className="ps-[0.8rem] h-[46px] flex items-center justify-between cursor-pointer border-t-[1px] border-[#000] hover:bg-[#333] transition-all ease-in-out duration-300">
                        <span className="text-[1.2rem] font-[500]">JavaScript Projects</span>
                        <RiArrowDropRightLine className="text-[2rem]"/>
                    </a>
                    <a href="https://macroos.vercel.app/" className="ps-[0.8rem] h-[46px] flex items-center justify-between cursor-pointer border-t-[1px] border-[#000] hover:bg-[#333] transition-all ease-in-out duration-300">
                        <span className="text-[1.2rem] font-[500]">CSS Projects</span>
                        <RiArrowDropRightLine className="text-[2rem]"/>
                    </a>
                </ul>

                {/* right nav */}
                <div className={`navRight ${activeRightNav ? 'activeRight pointer-events-auto' : 'pointer-events-none'} min-w-[260px] max-h-[400px] bg-[#222] border-[1px] border-[#000] rounded-[1.2rem] overflow-y-auto transition-all ease-in-out duration-300`} style={activeRightNav ? {transform: 'translateX(-100%)'} : {transform: 'translateX(0)'}}>

                    {/* react projects */}
                    <ul className={(listCategory === 'react') ? 'block' : 'hidden'}>
                        <li onClick={handleBackToLeftNav} className="h-[46px] flex items-center justify-start cursor-pointer bg-[#333] border-b-[1px] border-[#000]">
                            <RiArrowDropLeftLine className="text-[2rem]"/>
                            <span className="text-[1.2rem] font-[500]">back</span>
                        </li>
        
                        {projectItems.map((project) => {
                            return <Link to={project.link}>
                                <li className="ps-[0.8rem] text-[1.2rem] font-[500] h-[46px] w-full flex items-center justify-start hover:bg-[#333] transition-all ease-in-out duration-300">{project.name}</li>
                            </Link>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;