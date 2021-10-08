import React from 'react'
// import { useDispatch } from 'react-redux'
// import { navActions } from '../../store/nav-slice'
// import {AiOutlineMenuUnfold} from "react-icons/ai";
import classes from './Header.module.css'


const Header = () => {

    // const dispatch = useDispatch();
    // const headerHandler = () => {
    //     dispatch(navActions.toggle());
    // }
    return (
        <div className={classes.header}>

            {/* <button onClick={headerHandler}>
                <AiOutlineMenuUnfold style={{color:'white',fontSize:'2rem'}}/>
            </button> */}
            <h2 className={classes.brand}>React Tutorial</h2>
        </div>
    )
}

export default Header
