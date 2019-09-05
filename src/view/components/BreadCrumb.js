import React, { Component } from "react";
import { Responsive, Breadcrumb, ResponsiveContainer } from "semantic-ui-react";

class DesktopContainer extends Component{
    render(){
        return (
            <Responsive minWidth={Responsive.onlyComputer.minWidth}>
                 <h1>Create Course</h1>
                <Breadcrumb>
                    <Breadcrumb.Section link>Home</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section link>Courses</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section active>New</Breadcrumb.Section>
                </Breadcrumb>
            </Responsive>
        );
    }
}

class TabContainer extends Component{
    render (){
        return(
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>

            </Responsive>
        );
    }
}

class MobileContainer extends Component{
    render (){
        return(
            <Responsive minWidth={Responsive.onlyMobile.minWidth}>

            </Responsive>
        );
    }
}

class BreadCrumb extends Component{
     componentDidMount() {
		document.title = 'Teachmeit - Cources';
	}

	render() {
		return (
			<div style={{ marginBottom: 20 }}>
                <DesktopContainer />
                <TabContainer />
				<MobileContainer />
            </div>	
		);
	}
}

export default BreadCrumb;