import { useState } from "react";
import classNames from "classnames";


function BtnGroup(){

    const [activeClass, setActiveClass] = useState('');

    const btnLeftClass = classNames([
        'btn cast-btn',
        'left' === activeClass ? 'active' : ''
    ])

    const btnRightClass = classNames([
        'btn cast-btn',
        'right' === activeClass ? 'active' : ''
    ])

    const toggleClass = (event) =>{
        if(event.target.value === 'leftBtn') return setActiveClass('left');

        return setActiveClass('right')
    }

    return(
        <div className="d-flex justify-content-center mt-5"  role="group">
            <button  type="button" onClick={toggleClass} value="leftBtn" className={btnLeftClass}>1</button>
            <button  type="button" onClick={toggleClass} value="rightBtn" className={btnRightClass}>2</button>
        </div>
    );


}

export default BtnGroup;


