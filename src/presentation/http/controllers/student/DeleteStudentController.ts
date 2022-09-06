import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'

import BaseController from '@shared/http/controller/BaseController'
import StudentAppService from '@application/student/StudentAppService'

import { BaseError } from '@shared/exceptions/BaseError'
import { IRequest } from '@presentation/http/types/IRequest'

@injectable()
export default class CreateStudentController extends BaseController {
	constructor(
		@inject(tokens.StudentAppService)
		private readonly studentAppService: StudentAppService
	) {
		super()
	}

	public async execute(request: IRequest): Promise<any> {
		try {
			const { id } = request.params
			await this.studentAppService.delete(id)

			return this.sendStatus(204)
		} catch (err) {
			return this.error(err as BaseError)
		}
	}
}
