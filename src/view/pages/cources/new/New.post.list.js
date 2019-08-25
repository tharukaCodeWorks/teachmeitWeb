import React, { Component } from "react";
import { Modal, Form, Input, Select, TextArea, Label, Button } from 'semantic-ui-react';
import ImageUploader from 'react-images-upload';
import Axios from "axios";

class NewPostList extends Component{

    state = {
        categoryList: [],
        loading: false,
        course_name: '',
        course_price: '',
        course_category_id: 0,
        picture: []
    };

    constructor(props){
        super(props);
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            picture: picture,
        });
    }
    handleChange = (e, { name, value }) => {
        console.log(value);
        console.log(name);
        this.setState(
            {
                loading: true
            }
        );
        this.state.loading = true;
    };

    render(){
        return (
            <Modal trigger={<Button positive>Create New Course</Button>}>
                <Modal.Header>Create new Course</Modal.Header>
                <Modal.Content>
                    <Form loading={ this.state.loading }>
                        <Form.Field
                            control={Select}
                            options={this.state.categoryList}
                            label={{ children: 'Category', htmlFor: 'form-select-control-gender' }}
                            placeholder='Category'
                            search
                            name='course_category_id'
                            value={this.state.course_category_id}
                            onChange={this.handleChange}
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

                        <ImageUploader
                            withIcon={true}
                            singleImage={true}
                            withPreview={true}
                            buttonText='Choose Course image'
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                            name='course_image'
                            onChange={this.onDrop}
                        />
                    
                        <Form.Field
                            id='form-button-control-public'
                            control={Button}
                            content='Create Course'
                            style={{ backgroundColor: '#56BB47', color: '#ffffff' }}
                        />
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }

    componentDidMount(){
        this.getCategoryList();
    }

    getCategoryList(){
        Axios.get('http://127.0.0.1:8000/api/categories')
        .then((res)=>{
            let itemList =[];
            res.data.map((item, i) => {
                itemList.push({key: item.id, value: item.id, text: item.category_name})
            });
            this.setState({ 
                categoryList: {...itemList} 
            });
        })
        .catch((e)=>{

        });
    }

   createPostList(){
        Axios.post()
   }
}

export default NewPostList;