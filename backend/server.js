const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5956

app.use(express.static(path.join(__dirname, '../', 'build')))

app.get('/', (req, res) => {
  
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, ()=> console.log(`App listening on http://localhost:${PORT}`))