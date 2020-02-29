import allQuotes from '../../quotes.json';

export default (req, res) => {
  const { author } = req.query;

  let quotes = allQuotes;

  if (author) {
    quotes = quotes.filter(quote =>
      quote.author.toLowerCase().includes(author.toLowerCase())
    );
  }
  if (!quotes.length) {
    quotes = allQuotes.filter(
      quote => quote.author.toLowerCase() === 'unknown'
    );
  }

  res.status(200).json(quotes[Math.floor(Math.random() * quotes.length)]);
};
