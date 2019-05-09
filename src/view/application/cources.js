import React, { Component } from 'react';

class DesktopContainer extends Component{
    render()
    {
        return();
    }
}

class MobileContainer extends Component{
    render()
    {
        return();
    }
}

const responsiveContainer = () =>{
    return (
        <div>
            <DesktopContainer />
            <MobileContainer />
        </div>
    );
}

export default responsiveContainer;