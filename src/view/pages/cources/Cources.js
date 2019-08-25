import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Button, Item, Responsive, Card} from 'semantic-ui-react';
import TextTruncate from 'react-text-truncate';
// Includes
import ResponsiveContainer from '../../includes/navbar';
import Footer from '../../includes/footer';
import NewPostList from './new/New.post.list';
import { Link } from 'react-router-dom';

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

class BusinessContainer extends Component{

}

class DesktopContainer extends BusinessContainer{
    state = {}
    render (){
        const { activeItem } = this.state;
        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                 <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <h3>My Post Lists</h3>
                            <Grid>
                                <Grid.Column textAlign="center">
                                    {/* <NewPostList/> */}
                                    <Button as={Link} to="/course/new">New course</Button>
                                </Grid.Column>
                            </Grid>
                            <Item.Group link>

                                <Item>
                                    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />
                                    <Item.Content>
                                        <Item.Header>Stevie Feliciano</Item.Header>
                                        <Item.Description>{paragraph}</Item.Description>
                                    </Item.Content>
                                </Item>

                                <Item>
                                    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />
                                    <Item.Content>
                                        <Item.Header>Stevie Feliciano</Item.Header>
                                        <Item.Description>{paragraph}</Item.Description>
                                    </Item.Content>
                                </Item>

                                <Item>
                                    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />
                                    <Item.Content>
                                        <Item.Header>Stevie Feliciano</Item.Header>
                                        <Item.Description>{paragraph}</Item.Description>
                                    </Item.Content>
                                </Item>

                                <Item>
                                    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />
                                    <Item.Content>
                                        <Item.Header>Stevie Feliciano</Item.Header>
                                        <Item.Description>{paragraph}</Item.Description>
                                    </Item.Content>
                                </Item>

                                <Item>
                                    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />
                                    <Item.Content>
                                        <Item.Header>Stevie Feliciano</Item.Header>
                                        <Item.Description>{paragraph}</Item.Description>
                                    </Item.Content>
                                </Item>

                                <Item>
                                    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />
                                    <Item.Content>
                                        <Item.Header>Stevie Feliciano</Item.Header>
                                        <Item.Description>{paragraph}</Item.Description>
                                    </Item.Content>
                                </Item>

                                <Item>
                                    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />
                                    <Item.Content>
                                        <Item.Header>Stevie Feliciano</Item.Header>
                                        <Item.Description>{paragraph}</Item.Description>
                                    </Item.Content>
                                </Item>

                                <Item>
                                    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/veronika.jpg' />
                                    <Item.Content>
                                        <Item.Header>Veronika Ossi</Item.Header>
                                        <Item.Description>{paragraph}</Item.Description>
                                    </Item.Content>
                                </Item>

                                <Item>
                                    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
                                    <Item.Content>
                                        <Item.Header>Jenny Hess</Item.Header>
                                        <Item.Description>{paragraph}</Item.Description>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                        </Grid.Column>
                        <Grid.Column width={13}>
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
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Responsive>
        );
    }
}


class MobileContainer extends BusinessContainer{
    render (){
        return (
            <Responsive minWidth={Responsive.onlyMobile.minWidth}>
            </Responsive>
        );
    }
}

class CourcesPageLayout extends Component{
    componentDidMount() {
		document.title = 'Teachmeit - Cources';
	}

	render() {
		const { authenticated } = this.props;

		return (
			<ResponsiveContainer>
				<DesktopContainer authenticated={authenticated} />
				<MobileContainer authenticated={authenticated} />
				{!authenticated.isAuthenticated ? <Footer /> : null}
			</ResponsiveContainer>
		);
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth
	};
}
export default connect(mapStateToProps)(CourcesPageLayout);