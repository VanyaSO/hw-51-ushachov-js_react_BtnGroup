import React from "react";
import classNames from "classnames";


// const [activeClass, setActiveClass] = useState("");

class BtnGroup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeClass: ""
        }
    }

    addClass = (event) => {
        if(event.target.value === "leftBtn"){
            return this.setState((state) => {
                return{
                    ...state,
                    activeClass: 'left'
                }
            });
        }
        return this.setState((state) => {
            return{
                ...state,
                activeClass: 'right'
            }
        });
    }

    render() {

        const classLeftBtn = classNames([
            "btn btn-danger",
            "left" === this.state.activeClass ? 'active' : ''
        ])

        const classRightBtn = classNames([
            "btn btn-danger",
            "right" === this.state.activeClass ? 'active' : ''
        ])

        return (
            <div className="d-flex justify-content-center mt-5" role="group">
                <button type="button" onClick={this.addClass} value="leftBtn" className={classLeftBtn}>1</button>
                <button type="button" onClick={this.addClass} value="rightBtn" className={classRightBtn}>2</button>
            </div>
        )
    }


}

export default BtnGroup;


