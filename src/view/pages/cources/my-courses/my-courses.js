import React, { Component } from "react";
import { Responsive, Container, Tab, Card, Image, Grid} from "semantic-ui-react";
import BreadCrumb from "../../../components/BreadCrumb";
import Axios from "axios";

let dataSet = [];

class TabContent extends Component{
    state = {
        dataSet: []
    }
    componentDidMount(){
        Axios.get(`http://127.0.0.1:8000/api/post-list/my/${this.props.type}`)
        .then(data=>{
            dataSet = data.data;
            console.log(dataSet);
        })
        .catch(err=>{
    
        });
    }
    render (){
        return (
            <Grid>
                <Grid.Row columns={4}>
                   
                        { this.state.dataSet.map(function (item, index){
                            
                            return <Grid.Column style={{ padding: 10 }}>
                                    <Card key={index}>
                                        <Image src='https://i.udemycdn.com/course/240x135/914296_3670_8.jpg' wrapped ui={false} />
                                        <Card.Content>
                                        <Card.Header>Daniel</Card.Header>
                                        <Card.Meta>Joined in 2016</Card.Meta>
                                            <Card.Description>
                                                Daniel is a comedian living in Nashville.
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                        }) }

                </Grid.Row>
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
        dataSet = data.data;
        console.log(dataSet);
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
                    <BreadCrumb />
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
                    MObile
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