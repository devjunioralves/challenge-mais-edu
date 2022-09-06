import { Router } from 'express'

export type IRouter = {
	setup: () => Router
}
