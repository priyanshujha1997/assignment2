const express = require('express');
const app = express()

const port =  8000 

app.use(express.json()) //enable json request body parsing

//http://localhost:8000/api/info/:id?param=queryParamValue
app.get('/api/info/:id', (req, res) => {
    const { id } = req.params;
    const queryParam = req.query.param;
  
    const info = {
      pathParam: id,
      queryParam: queryParam,
    };
  console.log(info)
    res.json(info);
  });

  const dataArray = [];

  app.post('/api/data', (req, res) => {
    const { data } = req.body;
  
    if (data) {
      dataArray.push(data);
    return  res.json({ success: true, data:dataArray, message: 'Data added successfully' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid data' });
    }
  });
    




app.listen(port,()=>{
    console.log(`Server listen on port ${port}`)
})