const express = require('express')
const app = express();


const rootCall  = (req, res) => {
    res.send('thank you')
}
app.get('/', (req, res) => {
    res.send('thank you for calling me');
})
app.listen(4200, () => console.log('listen to your port'));