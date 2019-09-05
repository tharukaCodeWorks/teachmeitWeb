import React, { Component } from "react";
import { Responsive } from "semantic-ui-react";

class DesktopContainer extends Component{
    render(){
        return(
            <Responsive minWidth={Responsive.onlyComputer.minWidth}>

            </Responsive>
        );
    }
}

class TabContainer extends Component{
    render(){
        return(
            <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>

            </Responsive>
        );
    }
}

class MobileContainer extends Component{
    render(){
        return(
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>

            </Responsive>
        );
    }
}

class Wishlist extends Component {
    render(){
        return(
            <div>
                <DesktopContainer />
                <TabContainer />
                <MobileContainer />
            </div>
        );
    }
}

export default Wishlist;