import { tokens } from '@di/tokens'
import BaseController from '@shared/http/controller/BaseController'
import { inject, injectable } from 'tsyringe'
import { IRouter } from '@presentation/http/routes/IRouter'
import { Router } from 'express'
import BaseRouter from '@shared/http/controller/BaseRouter'

@injectable()
export class StudentRouter extends BaseRouter implements IRouter {
	constructor(
		@inject(tokens.CreateStudentController)
		private readonly createStudentController: BaseController,

		@inject(tokens.GetStudentController)
		private readonly getStudentController: BaseController,

		@inject(tokens.UpdateStudentController)
		private readonly updateStudentController: BaseController,

		@inject(tokens.DeleteStudentController)
		private readonly deleteStudentController: BaseController
	) {
		super(Router())
	}

	setup(): Router {
		this.post('/v1/student', this.createStudentController)
		this.get('/v1/student', this.getStudentController)
		this.patch('/v1/student/:id', this.updateStudentController)
		this.delete('/v1/student/:id', this.deleteStudentController)

		return this.getRouter()
	}
}
