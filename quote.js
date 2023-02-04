const quotes=[
    {
        quote:"We cannot solve problems with the kind of thinking we employed when we came up with them.",
        author:" Albert Einstein",
    },
    {
        quote:"Learn as if you will live forever, live like you will die tomorrow.",
        author:"Mahatma Gandhi",
    },
    {
        quote:"When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
        author:"Eleanor Roosevelt",
    },
    {
        quote:"When you change your thoughts, remember to also change your world.",
        author:"Norman Vincent Peale",
    },
    {
        quote:"Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author:"Winston S. Churchill",
    },
    {
        quote:"It is better to fail in originality than to succeed in imitation.",
        author:"Herman Melville",
    },
    {
        quote:"Success usually comes to those who are too busy looking for it.",
        author:"Henry David Thoreau",
    },
    {
        quote:"I never dreamed about success. I worked for it.",
        author:"Estée Lauder",
    },
    {
        quote:"Success is getting what you want, happiness is wanting what you get.",
        author:"W. P. Kinsella",
    },
    {
        quote:"Don’t let yesterday take up too much of today.",
        author:"Will Rogers",
    },
];
const quote=document.querySelector(".printQuote div:first-child");
const author=document.querySelector(".printQuote div:last-child");

const randomQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=randomQuote.quote;
author.innerText=`-${randomQuote.author}-`;