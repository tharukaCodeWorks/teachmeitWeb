import React, { Component } from 'react';
import { Responsive } from 'semantic-ui-react';
import responsiveContainer from '../../../includes/footer';
import { connect } from 'react-redux';
import Footer from '../../../includes/footer';

class DesktopContainer extends Component{
    render(){
        return(
            <Responsive minWidth={ Responsive.onlyTablet.minWidth }>

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
            <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>

            </Responsive>
        );
    }
}

class CourseOffers extends Component{
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

export default CourseOffers;