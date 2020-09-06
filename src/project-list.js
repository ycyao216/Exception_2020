import React from 'react';
import NavBar from './navbar';
import Figure from 'react-bootstrap/Figure';
//import Card from 'react-bootstrap/Card';

class ProjectList extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: []
        }
    }

    componentDidMount() {
        fetch('/tweets/')
            .then(resp => resp.json())
            .then(tweets => this.setState({tweets: tweets}))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <NavBar />
                <div w3-include-html="register.html"></div>
            </div>
        )
    }
}

export default ProjectList;