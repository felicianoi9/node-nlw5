import { Router} from "express"
import { MessagesController } from "./controllers/MessagesControler"
import { SettingsController } from "./controllers/SettingsController"
import { UserController } from "./controllers/UserController"


const routes = Router()

const settingsController = new SettingsController()
const userController = new UserController()
const messagesController = new MessagesController()

routes.post('/settings',settingsController.create)
routes.post('/users',userController.create)
routes.post('/messages',messagesController.create)

export { routes }