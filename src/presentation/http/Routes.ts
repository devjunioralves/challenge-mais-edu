import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'
import { Router } from 'express'
import { IRouter } from '@presentation/http/routes/IRouter'

@injectable()
export class Routes {
	constructor(
		@inject(tokens.StudentRouter)
		private readonly studentRouter: IRouter
	) {}

	public setupRouter(router: Router): void {
		router.use('/api', this.studentRouter.setup())
	}
}
