import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'

import BaseController from '@shared/http/controller/BaseController'
import StudentAppService from '@application/student/StudentAppService'

import { BaseError } from '@shared/exceptions/BaseError'

@injectable()
export default class GetStudentController extends BaseController {
	constructor(
		@inject(tokens.StudentAppService)
		private readonly studentAppService: StudentAppService
	) {
		super()
	}

	public async execute(): Promise<any> {
		try {
			const result = await this.studentAppService.findAll()

			return this.send(result)
		} catch (err) {
			return this.error(err as BaseError)
		}
	}
}
