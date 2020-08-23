import React, { Component } from 'react';
import cartItem from './cartItem';

class cart extends Component {
    render() {
        const total = Object.keys(this.state.selected).reduce(
            (acc, curr) => acc + this.state.selected[curr].cost,
            0
          );
          
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                    {summary}
                    <cartItem   />
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {USCurrencyFormat.format(total)}
                    </div>
                </div>
            </section>
        )
    }
}

export default cart