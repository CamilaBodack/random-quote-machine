import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import quotes from './QuotesDB';
import twitter from './twitter.png'

export default class Quotes extends Component {
    constructor(props) {
        super(props);

        let randomInt = Math.floor(Math.random() * quotes.length);
        this.state = {
            quote: quotes[randomInt].quote,
            author: quotes[randomInt].author
        }

        this.randomQuote = this.randomQuote.bind(this);
    }

    randomQuote() {
        let randomInt = Math.floor(Math.random() * quotes.length);
        this.setState({quote: quotes[randomInt].quote, author: quotes[randomInt].author})};

    render() {
        return (<div>
            <p id="text">{this.state.quote}</p>
            <p id="author">{this.state.author}</p>
            <button id="new-quote" onClick={this.randomQuote}>New Quote</button>
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"><img src={twitter} alt="Twitter icon" width="30" height="30" />Twitter</a>
        </div>);
    }
}
