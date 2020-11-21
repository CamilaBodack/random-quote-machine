import React from 'react'
import Behavior from './Behavior'
import ReactDOM from 'react-dom'

let quotes = [
    {
        quote: "To create is to live twice.",
        author: "Albert Camus"
    },
    {
        quote: "It is not your paintings I like, it is your painting.", author: "Albert Camus"
    },
    {
        quote: "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
        author: "Albert Camus"
    },
    {
        quote: "Nobody realizes that some people expend tremendous energy merely to be normal.",
        author: "Albert Camus"
    },
    {
        quote: "Time is the best killer.",
        author: "Agatha Christie"
    },
    {
        quote: "Fear is incomplete knowledge.",
        author: "Agatha Christie"
    },
    {
        quote: "Dreams shape the world.",
        author: "Neil Gailman"
    },
    {
        quote: "By striving to do the impossible, man has always achieved what is possible.",
        author: "Mikhail Bakunin"
    },
    {
        quote: "The more fully the individual is developed, the greater his freedom.",
        author: "Mikhail Bakunin"
    }
]

let quotesLen = quotes.length;
let randomInt = Math.floor(Math.random() * (quotesLen));
let quote = () => quotes[randomInt]


export default function(){
    return <button id="new-quote" onClick={quote} className="btn btn-default">New Quote</button>
}
