import React from 'react';
import { connect } from 'react-redux';

import { FetchPosts } from '../actions';

class PostList extends React.Component {
  render() {
    return <div>PostList</div>;
  }
}

export default connect(null, { FetchPosts })(PostList);
