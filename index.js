require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const bookRoutes = require('./Routes/bookRoutes.js')
const authorRoutes = require('./Routes/authorRoutes.js')
const userRoutes = require('./Routes/userRoutes.js')
const auth0Routes = require('./Routes/auth0Routes.js')
const app = express()
const port = 3000

//middlewares
app.use(cors({
  credentials: true,
  origin: true,
}))//for giving access to this backend
app.use(cookieParser())
app.use(express.json())//to take data/body from request



//Routes
app.get('/', (req, res) => {
  res.send(`
    <p>To use this API, the available routes are:</p>
    <ul>
        <li>/books</li>
        <li>/authors</li>
        <li>/users</li>
        <li>/auth0</li>
    </ul>
  `)
})

app.use('/books', bookRoutes)

app.use('/authors', authorRoutes)

app.use('/users', userRoutes)

app.use('/auth0', auth0Routes)

app.listen(port, () => {
  console.log(`Readgood Backend is now running `)
})

main()
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.log(err))

async function main() {
  await mongoose.connect(process.env.MONGO_DB_LINK)

}