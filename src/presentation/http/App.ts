import express, { Router } from 'express'
import { Routes } from '@presentation/http/Routes'
import { container } from '@di/container'
import { tokens } from '@di/tokens'
import bodyParser from 'body-parser'
import cors from 'cors'

const router = Router()
const routes = container.resolve<Routes>(tokens.Routes)
routes.setupRouter(router)
const App = express()

App.use(cors())
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({ extended: true }))

App.use(router)

export default App
