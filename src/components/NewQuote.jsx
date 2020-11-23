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
        this.setState({quote: quotes[randomInt].quote, author: quotes[randomInt].author})
    };

    render() {
        return (<div>
            <p id="text">{this.state.quote}</p>
            <p id="author">{this.state.author}</p>
            <button id="new-quote" onClick={this.randomQuote}>New Quote</button>
            <a id="tweet-quote" href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" target="_blank" data-show-count="false"><img src={twitter} alt="Twitter icon" width="30" height="30"/>Twitter</a>
            <script async="async" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>);
    }
}
