const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/bottle-it';
const secret = process.env.SECRET || 'Miracle tonic';
const newsApiKey = process.env.NEWS_API_KEY;
module.exports = {
  dbUri, secret, newsApiKey
};


//API key// c6683032fb904a9cb0ff43714d6a1931
