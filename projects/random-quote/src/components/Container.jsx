import React , { Fragment } from 'react'
import NewQuoteButton from './NewQuoteButton'

export default function() {
    return <Fragment>
        <div id="quote-box">
            <p id="text"></p>
            <p id="author"></p>
            <NewQuoteButton />
        </div>
    </Fragment>
}
