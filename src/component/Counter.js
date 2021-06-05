import React, { Component } from "react";
// import { button } from "react-bootstrap";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

export class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartCount: this.props.qty,
        };
    }


    render() {
        return (
            <div>
                <div className="d-flex justify-content-between align-items-center">
                    <FiMinusCircle
                        size="1.5rem"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            this.updateCount(-1);

                        }}
                    />
                    <input
                        className= " form-control "
                        type="number"
                        min="1"
                        value={this.state.cartCount}
                        style={{
                            maxWidth: "35px",
                            border: "none",
                            padding: "5px",
                            margin: "0px 5px",
                            textAlign: "center",
                        }}
                        onChange={(e) => {
                            
                        }}

                        
                    />

                    <FiPlusCircle
                        size="1.5rem"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            this.updateCount(1);
                        }}
                    />
                </div>
            </div>
        );
    }

    updateCount(val) {
        if (val === -1 && this.state.cartCount > 1 ) {
            this.setState({ cartCount: this.state.cartCount - 1 })

        }
        else if (val === 1) {
            this.setState({ cartCount: this.state.cartCount + 1 })
            // e.target.parentNode.parentNode.parentNode.parentNode.remove();
        }
       
       
    }
}

export default Counter;

