import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Icon, Menu, Responsive} from 'semantic-ui-react';
// Includes
import ResponsiveContainer from '../../includes/navbar';
import Footer from '../../includes/footer';
import NewPostListLayout from './new/New.post.list';
import { Link, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import TopCourses from './top/top-courses';
import MyCourses from './my-courses/my-courses';
import Course from './course/Course';
import CourseOffers from './offers/course-offers';
import Wishlist from './wishlist/Wishlist';

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

class BusinessContainer extends Component{

}

class DesktopContainer extends BusinessContainer{
    state = { activeItem: 'home' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render (){
        const { activeItem } = this.state;
        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                 <Grid style={{ padding: 10 }}>
                    <Grid.Row>
                        <Grid.Column width={3} style={{ padding: 10 }}>
                        <Menu size='large' vertical>

                                <Menu.Item
                                    as={Link}
                                    to="/cources"
                                    name='course'
                                    active={activeItem === 'course'}
                                    onClick={this.handleItemClick}
                                    >
                                    <Icon name='grid layout' />
                                    Cources
                                </Menu.Item>

                                <Menu.Item
                                as={Link}
                                to="/cources/top"
                                name='top'
                                active={activeItem === 'top'}
                                onClick={this.handleItemClick}
                                >
                                <Icon name='gripfire' />
                                Top Courses
                                </Menu.Item>

                                <Menu.Item
                                    as={Link}
                                    to='/cources/offers'
                                    name='offer'
                                    active={activeItem === 'offer'}
                                    onClick={this.handleItemClick}
                                >
                                    <Icon name="tag" />
                                    Offers
                                </Menu.Item>
                                <Menu.Item
                                as={Link}
                                to='/cources/wishlist'
                                name='wishlist'
                                active={activeItem === 'wishlist'}
                                onClick={this.handleItemClick}
                                >
                                    <Icon name="clipboard list" />
                                Whishlist
                                </Menu.Item>
                                <Menu.Item
                                as={Link}
                                to="/cources/my"
                                name='myCourses'
                                active={activeItem === 'myCourses'}
                                onClick={this.handleItemClick}
                                >
                                    <Icon name="unordered list" />
                                My Courses
                                </Menu.Item>
                                <Menu.Item
                                as={Link}
                                to='/cources/new'
                                name='new'
                                active={activeItem === 'new'}
                                onClick={this.handleItemClick}
                                >
                                    <Icon name="sun" />
                                Create New Course
                                </Menu.Item>
                            </Menu>
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <Switch>
                                <Route path='/cources' exact component={Course} />
                                <Route path='/cources/top' exact component={TopCourses} />
                                <Route path='/cources/new' exact component={NewPostListLayout} />
                                <Route path='/cources/my' exact component={MyCourses} />
                                <Route path='/cources/offers' exact component={CourseOffers} />
                                <Route path='/cources/wishlist' exact component={Wishlist} />
                            </Switch>
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