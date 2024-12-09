const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;


app.get('/',(req,res)=>{
    res.send('Ghassan Sleyman')
})
app.get('./students',(req,res)=>{
    let.data = [
        {name:'Ghassan',age:20},
        {name:'Afif',age:21},
        {name:'Wael',age:18}];
    res.send(data)
})
app.get('./sleyman',(req,res)=>{
    res.send("Bla Bla Bla")
})
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
