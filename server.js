const express = require('express')
const app = express();
// // const pandas = require('pandas')
// const pd = require('pandas-js')
// // const z = require('zebras')


// // function read_meteor_data(file){
// //   pd.read_csv(file)
// // }
// const data = pd.read_csv('api_meteor_data.csv')
// // const data = z.readCSV('api_meteor_data.csv')

const csv = require('csv-parser');
const fs = require('fs');
var data = []
fs.createReadStream('api_meteor_data.csv')
  .pipe(csv())
  .on('data', (row) => {
    // console.log(row);
    data.push(row)
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });


app.get('/', (req, res) => {
  res.send(data)
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});