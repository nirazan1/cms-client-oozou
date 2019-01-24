import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class ContentList extends Component {

  constructor(props) {
    super(props);
    this.state = {contents: [], isLoading: true};
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/contents')
      .then(response => response.json())
      .then(data => this.setState({contents: data, isLoading: false}));
  }

  render() {
    const {contents, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }
    debugger

    const contentsList = contents.map(contents => {
      return <tr key={contents.id}>
        <td style={{whiteSpace: 'nowrap'}}>{contents.title}</td>
        <td style={{whiteSpace: 'nowrap'}}>{contents.published_date}</td>
        <td style={{whiteSpace: 'nowrap'}}>{contents.author}</td>
        <td style={{whiteSpace: 'nowrap'}}>{contents.summary}</td>
        <td style={{whiteSpace: 'nowrap'}}>{contents.content}</td>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Table className="mt-4">
            <thead>
            <tr>
              <th>Name</th>
              <th>Published Date</th>
              <th>Author</th>
              <th>Summary</th>
              <th>Content</th>
            </tr>
            </thead>
            <tbody>
            {contentsList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default ContentList;
