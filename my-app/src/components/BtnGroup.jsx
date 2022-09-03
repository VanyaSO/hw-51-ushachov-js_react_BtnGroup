import React, { useState } from "react";
import classNames from "classnames";


const [activeClass, setActiveClass] = useState("");

class BtnGroup extends React.Component{

    classLeftBtn = classNames([
        "btn btn-danger",
        "left" === activeClass ? 'active' : ''
    ])

    classRightBtn = classNames([
        "btn btn-danger",
        "right" === activeClass ? 'active' : ''
    ])

    addClass = (event) => {
        if(event.target.value === "leftBtn") return setActiveClass('left');
        return setActiveClass("right");
    }

    render() {
        return (
            <div className="d-flex justify-content-center mt-5" role="group">
                <button type="button" onClick={this.addClass} value="leftBtn" className={this.classLeftBtn}>1</button>
                <button type="button" onClick={this.addClass} value="rightBtn" className={this.classRightBtn}>2</button>
            </div>
        )
    }


}

export default BtnGroup;


