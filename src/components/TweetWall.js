import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.state.tweets = this.props.newTweets;
  }

  // TODO: shouldComponentUpdate()
  
  componentWillReceiveProps(nextProps) {
    const currentTweets = this.state.tweets;
    this.setState({
      tweets: nextProps.newTweets.concat(currentTweets)
    });
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
