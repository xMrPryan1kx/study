import Post from './Post';
// import json from './assets/json'
import './styles/style.css';
import WebpackLogo from './assets/webpack-logo.png';
// import xml from './assets/data.xml';
import csv from './assets/data.csv'

const post = new Post('WebPack Post Title', WebpackLogo);

console.log('Post to string' + post.toString());

// console.log('JSON:', json);
// console.log('XML: ', xml);
console.log('CSV: ', csv);