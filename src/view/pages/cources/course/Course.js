import React, { Component } from "react";
import { Responsive } from "semantic-ui-react";
import BreadCrumb from "../../../components/BreadCrumb";

class DesktopContainer extends Component{
    render(){
        return (
            <Responsive minWidth={Responsive.onlyComputer.minWidth}>
                <BreadCrumb />
            </Responsive>
        );
    }
}

class TabContainer extends Component{
    render (){
        return (
            <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>

            </Responsive>
        );
    }
}

class MobileContiner extends Component{
    render (){
        return (
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>

            </Responsive>
        );
    }
}

class Course extends Component{
    render (){
        return(
            <div>
                <DesktopContainer />
                <TabContainer />
                <MobileContiner />
            </div>
        );
    }
}

export default Course;