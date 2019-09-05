import React, { Component} from "react";
import { Radio, Form, Input, Select, Message, Header, Button, Responsive, Icon, Container } from 'semantic-ui-react';
import ImageUploader from 'react-images-upload';
import Axios from "axios";
import { connect } from 'react-redux';
import Footer from '../../../includes/footer';
import ResponsiveContainer from '../../../includes/navbar';
import BreadCrumb from "../../../components/BreadCrumb";


const createNewPostLIst = () => {
    
}  

class DesktopContainer extends Component{
    state = {
        loading: false,
        categoryList: [],
        course_published: false,
        modalOpen: false,
        infoMessage: false
    };

    componentDidMount(){
        Axios.get("http://127.0.0.1:8000/api/categories")
        .then((res)=>{
            console.log(res);
            let postLists = [];
            res.data.map((item, key) =>{
                postLists.push({
                    key: key,
                    value: item.id,
                    text: item.category_name
                });
            });
            this.setState({ categoryList: postLists });
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    insertNewCourse = () => {
        this.setState({
            loading: true
        });
        var bodyFormData = new FormData();
        bodyFormData.append('course_image', this.state.image != null ?this.state.image[0]: []);
        bodyFormData.append('course_name', this.state.course_name);
        bodyFormData.append('course_category_id', this.state.course_category_id);
        bodyFormData.append('course_price', this.state.course_price);
        bodyFormData.append('course_published', this.state.course_published);

        Axios.post('http://127.0.0.1:8000/api/post-list/insert', bodyFormData, {
            headers:{
              'Content-Type': 'multipart/form-data'
            }
        })
        .then(res =>{
            this.setState({
                loading: false,
                infoMessage: true
            });
            this.handleOpen();
        })
        .catch(err=>{
            this.setState({
                loading: false
            });
            this.handleOpen();
        });
    }

    imageSelected = (picture) => {
        console.log(picture);
        this.setState(
            {
                image: picture
            }
        );
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        });
    }

    handleDropdownChanged = (e, data) => {
        this.setState({
            course_category_id: data.value
        });
    }

    checkChange = (e) => {
        console.log(e);
        this.setState(
            {
                course_published: this.state.course_published==0?1:0
            }
        );
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })
    
    render(){
        return(
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                {/* {BreadcrumbExample()} */}
                <Container>
                <BreadCrumb />
                <Form loading={ this.state.loading }>
                    {this.state.infoMessage? <Message positive>
                        <Message.Header>Course inserted successfully!</Message.Header>
                        <p>
                        Make amazing course...
                        </p>
                    </Message>: null}
                    <Form.Field
                        control={Select}
                        options={this.state.categoryList}
                        label={{ children: 'Category', htmlFor: 'form-select-control-gender' }}
                        placeholder='Category'
                        search
                        value={this.state.course_category_id}
                        name='course_category_id'
                        onChange={this.handleDropdownChanged}
                        searchInput={{ id: 'form-select-control-gender' }}
                    />

                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='Course Name'
                        placeholder='Course Name'
                        onChange={this.handleChange}
                        name='course_name'
                        value={this.state.course_name}
                    />

                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='Course Price'
                        placeholder='Course Price'
                        onChange={this.handleChange}
                        name='course_price'
                        value={this.state.course_price}
                    />

                    <Form.Field>
                        <Radio toggle label="Drafted/ Publish" onChange={this.checkChange} name="course_published" />
                    </Form.Field>

                    <ImageUploader
                        withIcon={true}
                        singleImage={true}
                        withPreview={true}
                        buttonText='Choose Course image'
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        name='course_image'
                        onChange={this.imageSelected}
                    />
                
                    <Button size="medium" color="green" onClick={this.insertNewCourse}>Create Course</Button>
                </Form>
                </Container>
            </Responsive>
        );
    }
}

class MobileContainer extends Component{
    render(){
        return(
            <div></div>
        );
    }
}

class NewPostListLayout extends Component{
    componentDidMount() {
		document.title = 'Teachmeit - New Course';
	}
    render(){
        return (
            <div>
                <DesktopContainer />
                <MobileContainer />
            </div>
        );
    }
}

export default NewPostListLayout;