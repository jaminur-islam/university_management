import { app } from './app'
import('../src/config/dbConfig')
import config from '../src/config'

app.listen(config.port, () => {
  console.log('Server listing port ', config.port)
})
