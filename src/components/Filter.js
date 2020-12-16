import React from 'react';

class Filter extends React.Component{
    render(){
        return(
            <div>
                Order
                <select value={this.props.sort} onChange={this.props.sortProducts} >
                    <option>Latest</option>
                    <option value='lowest'>Lowest</option>
                    <option value='highest'>Highest</option>
                </select>
                Filter
                <select value={this.props.size} onChange={this.props.filterProducts} >
                    <option value=''>ALL</option>
                    <option value='XS'>XS</option>
                    <option value='S'>S</option>
                    <option value='M'>M</option>
                    <option value='L'>L</option>
                    <option value='XL'>XL</option>
                    <option value='XXL'>XXL</option>
                </select>
            </div>
        )
    }
}

export default Filter