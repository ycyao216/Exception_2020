import React from 'react';
import NavBar from './navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';

class CreateProject extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            username: '',
            text: '',
            date: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/users/')
            .then(resp => resp.json())
            .then(users => this.setState({users: users}))
            .catch(err => console.log(err))
    }

    onChange = (e) => {
        // sets the state variable with the name of evt.target.id(name or email)
        e.preventDefault();
        this.setState({[e.target.id]: e.target.value})
    }

    onSubmit = (e) => {
        const newTweet = {
            username: this.state.username,
            text: this.state.text,
            date: this.state.date
        }
        console.log(newTweet);

        fetch('/tweets/add', {
            method: "POST",
            body: JSON.stringify(newTweet)
        })
            .then(resp => resp.json())
            .then(data => console.log("Success", data))
            .catch(err => console.log(err))
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <NavBar></NavBar>
                <div className = "container" style = {{marginTop: 10}}>
                    <h3>项目详情</h3>
                    <Form onChange={this.onChange} onSubmit={this.onSubmit}>
                        <Form.Group>
                            <Form.Label>用户名:</Form.Label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>LCH</option>
                                <option>YCY</option>
                                <option>ZZJ</option>
                                <option>WRJ</option>
                            </select>
                        </Form.Group>

                        <Form.Group>
                        <Form.Label>项目介绍:</Form.Label>
                        <Form.Control as="textarea" rows="3" id = "text" placeholder='用几个字概括你的项目，更快的找到志同道合的人吧！' />
                        </Form.Group>
                        <Form.Label>图片信息:</Form.Label>
                        <div className = "container" style = {{marginTop: 10}}>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="300x200"
                                />
                                <Figure.Caption>
                                    点击添加
                                </Figure.Caption>
                            </Figure>
                        </div>

                        <Form.Group >
                            <Form.Label>项目标签:</Form.Label>
                            <br></br>
                            <span class="badge badge-pill badge-primary">Java</span>
                            <span class="badge badge-pill badge-secondary">篮球</span>
                            <span class="badge badge-pill badge-success">插画</span>
                            <span class="badge badge-pill badge-danger">动漫</span>
                            <span class="badge badge-pill badge-warning">王者荣耀</span>
                            <span class="badge badge-pill badge-dark">“创建你的标签"</span>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>招募时间</Form.Label>
                            <Form.Control type="text" id = "date" placeholder="Enter Date" ></Form.Control>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>联系方式</Form.Label>
                            <Form.Control type="text" id = "date" placeholder="E.g.:1888888888" ></Form.Control>
                        </Form.Group>

                        <Button variant="dark" type="submit">
                            点击创建
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default CreateProject;