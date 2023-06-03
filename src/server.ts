import { app } from './app'
import('../src/config/dbConfig')
import config from '../src/config'
import { connectToDatabase } from '../src/config/dbConfig'
connectToDatabase()

app.listen(config.port, () => {
  console.log('Server listing port ', `http://localhost:${config.port}`)
})
