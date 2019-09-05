import React, { Component } from "react";
import { Grid, Image, Card, Responsive} from 'semantic-ui-react';
import TextTruncate from 'react-text-truncate';
import ResponsiveContainer from '../../../includes/navbar';
import Footer from '../../../includes/footer';
import { connect } from 'react-redux';
import BreadCrumb from "../../../components/BreadCrumb";

class DesktopContainer extends Component{
    render(){
        return(
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <BreadCrumb />
                <Grid columns={5}>
                    <Grid.Row>
                        <Grid.Column style={{ padding: 10 }}>    
                            <Card>
                                <Image src='https://i.udemycdn.com/course/240x135/914296_3670_8.jpg' wrapped ui={false} />
                                <Card.Content>
                                <Card.Header>
                                    <TextTruncate
                                        line={2}
                                        element="span"
                                        truncateText="…"
                                        text="Complete Python Bootcamp: Go from zero to hero in Python 3"
                                    />
                                </Card.Header>
                                <Card.Meta>Jose Portilla</Card.Meta>
                                    <Card.Description>
                                        Daniel is a comedian living in Nashville.
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Responsive>
        );
    }
}

class MobileContainer extends Component{
    render(){
        return(
            <Responsive minWidth={Responsive.onlyMobile}>
                <div>MobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobileMobile</div>
            </Responsive>  
        );
    }
}

class TopCourses extends Component{
    componentDidMount() {
		document.title = 'Teachmeit - Top Cources';
	}

	render() {
		return (
        <div>
            <DesktopContainer />
            <MobileContainer />
        </div>
		);
	}
}


export default TopCourses;