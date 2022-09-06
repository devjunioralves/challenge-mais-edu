import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'

import BaseController from '@shared/http/controller/BaseController'
import StudentAppService from '@application/student/StudentAppService'

import { BaseError } from '@shared/exceptions/BaseError'
import { IRequest } from '@presentation/http/types/IRequest'
import { ICreateStudent } from '@domain/student/types/ICreateStudent'

@injectable()
export default class CreateStudentController extends BaseController {
	constructor(
		@inject(tokens.StudentAppService)
		private readonly studentAppService: StudentAppService
	) {
		super()
	}

	public async execute(request: IRequest) {
		try {
			const { name, email, ra, cpf } = request.body
			const result = this.studentAppService.create({
				name,
				email,
				ra,
				cpf,
			} as ICreateStudent)

			return this.send(result)
		} catch (err) {
			return this.error(err as BaseError)
		}
	}
}
