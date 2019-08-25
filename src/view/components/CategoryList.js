import React, { Component }  from 'react';
import { Grid, Segment, Image} from 'semantic-ui-react';
import Axios from "axios";

class CategoryList extends Component{
    
    state = {
        postList: []
    }

    render(){
        const categories = this.state.postList.map((item, key) =>
            <Grid.Column>
                <div style={{ padding: 10, cursor: 'pointer', backgroundColor: '#ccc', margin: 5 }}>
                    <Image src={item.category_image} avatar></Image>
                    <span style={{ fontSize: 18, paddingLeft: 10 }}>{item.category_name}</span>
                </div>
            </Grid.Column>
        );
        return (<Grid.Row>
            <Grid.Column>
                <Segment>
                    <Grid columns='equal'>
                        <Grid.Row>
                            <Grid.Column>
                                <h1 style={{ textAlign: "center" }}>Categories</h1>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                            <Grid columns={4} divided>
                                <Grid.Row>
                                    {categories}
                                </Grid.Row>
                            </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid.Row>);
    }

    componentDidMount(){
        Axios.get("http://127.0.0.1:8000/api/categories")
        .then((res)=>{
            console.log(res);
            this.setState({ postList: res.data });
        })
        .catch((error)=>{
            console.log(error);
        });
    }
}

export default CategoryList;