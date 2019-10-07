import React, { Component } from "react";
import { Responsive, Breadcrumb, ResponsiveContainer } from "semantic-ui-react";

class DesktopContainer extends Component{

    
    // breadCrumb (){
           
    // };

    render(){
        const rowLen = this.props.breadcrumb.length;
        return (
            <Responsive minWidth={Responsive.onlyComputer.minWidth}>
                 <h1>{this.props.header}</h1>
                <Breadcrumb>
                    {this.props.breadcrumb.map(function(element, i) {
                        return <span>
                                <Breadcrumb.Section link>{element}</Breadcrumb.Section>
                                {rowLen===i+1?null:<Breadcrumb.Divider />}
                            </span>
                    })}
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
                <DesktopContainer header={ this.props.header } breadcrumb={ this.props.breadcrumb }/>
                <TabContainer />
				<MobileContainer />
            </div>	
		);
	}
}

export default BreadCrumb;