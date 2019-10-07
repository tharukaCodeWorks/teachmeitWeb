import React, { Component } from "react";
import { Responsive, Container, Tab, Card, Image, Grid} from "semantic-ui-react";
import BreadCrumb from "../../../components/BreadCrumb";
import Axios from "axios";
import TextTruncate from 'react-text-truncate';

// let dataSet = [];

class TabContent extends Component{
    state = {
        dataSet: []
    }
    constructor(props){
        super(props)
        console.log(props);
    }
    componentDidMount(){
        Axios.get(`http://127.0.0.1:8000/api/post-list/my/${this.props.type}`)
        .then(data=>{
            this.setState(
                {
                    dataSet: data.data
                }
            );
            // dataSet = data.data;
            console.log(this.state.dataSet);
        })
        .catch(err=>{
    
        });
    }
    componentWillReceiveProps(newProps){
        Axios.get(`http://127.0.0.1:8000/api/post-list/my/${newProps.type}`)
        .then(data=>{
            this.setState(
                {
                    dataSet: data.data
                }
            );
            // dataSet = data.data;
            console.log(this.state.dataSet);
        })
        .catch(err=>{
    
        });
    }
   
    render (){
        return (
            <Grid columns={4}>
                {
                    this.state.dataSet.map(function(element, index){
                        return (
                            <Grid.Column style={{ padding: 10 }}>
                                <Card key={element.id}>
                                    <Image src={element.course_feature_image} wrapped ui={false} />
                                    <Card.Content>
                                    <Card.Header>{element.course_name}</Card.Header>
                                    <Card.Meta>{element.category.category_name}</Card.Meta>
                                        <Card.Description>
                                            Daniel is a comedian living in Nashville.
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        );
                    })
                }
            </Grid>
        );
    }
}

const panes = [
    {
      menuItem: 'Unpublished',
      render: () => 
      <Tab.Pane attached={false}>
        <TabContent type="unpublished" />
      </Tab.Pane>,
    },
    {
      menuItem: 'Published',
      render: () => 
      <Tab.Pane attached={false}>
            <TabContent type="published" />
      </Tab.Pane>,
    }
  ];

const getPostList = (type) => {
    Axios.get(`http://127.0.0.1:8000/api/post-list/my/${type}`)
    .then(data=>{
        // dataSet = data.data;
        this.setState(
            {
                dataSet: data.data
            }
        );
        // console.log(dataSet);
    })
    .catch(err=>{

    });
}

class DesktopContainer extends Component{
    state = {
        dataset: []
    }
    render (){
        return(
            <Responsive minWidth={Responsive.onlyComputer.minWidth}>
                <Container>
                    <BreadCrumb header="My Courses" breadcrumb={ [ "Home", "Courses", "My" ] }/>
                    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                </Container>
            </Responsive>
        );
    }
}

class TabContainer extends Component{
    render (){
        return(
            <Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
                <Container>
                    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                </Container>
            </Responsive>
        );
    }
}

class MobileContainer extends Component{
    render (){
        return(
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                    Mobile
            </Responsive>
        );
    }
}

class MyCourses extends Component{
    render (){
        return(
            <div>
                <DesktopContainer />
                <MobileContainer />
                <TabContainer />
            </div>
        );
    }
}

export default MyCourses;