const quotes = [
    {
        quote: "A good traveler has no fixed plans and is not intent on arriving.",
        author: "Lao Tzu",
    },
    {
        quote: "Life was always a matter of waiting for the right moment to act.",
        author: "Paulo Coelho",
    },
    {
        quote: "Acting is just a way of making a living, the family is life.",
        author: "Denzel Washington",
    },
    {
        quote: "All life is an experiment. The more experiments you make the better.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Any idiot can face a crisis - it's day to day living that wears you out.",
        author: "Anton Chekhov",
    },
    {
        quote: "Life must be lived as play.",
        author: "Plato",
    },
    {
        quote: "Sometimes life hits you in the head with a brick. Don't lose faith.",
        author: "Steve Jobs",
    },
    {
        quote: "We should all start to live before we get too old. Fear is stupid. So are regrets.",
        author: "Marilyn Monroe",
    },
    {
        quote: "Even death is not to be feared by one who has lived wisely.",
        author: "Buddha",
    },
    {
        quote: "Not life, but good life, is to be chiefly valued.",
        author: "Socrates",
    },
    {
        quote: "Life is either a great adventure or nothing.",
        author: "Helen Keller",
    },
    {
        quote: "A man who dares to waste one hour of time has not discovered the value of life.",
        author: "Charles Darwin",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `(${todaysQuote.author})`;
