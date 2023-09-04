const express = require('express');
const axios = require('axios');
const app = express();

const NEWS_API_KEY = '85940a4d7b23488ba7ecd9e9e7c6533e'; 

app.get('/news', async (req, res) => {
  try {
    const country = req.query.country; 
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${NEWS_API_KEY}`);
    const newsData = response.data.articles;
    res.json(newsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching news data.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
