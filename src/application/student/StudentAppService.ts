import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'

import Student from '@domain/student/entities/Student'
import { IStudentService } from '@domain/student/types/IStudentService'
import { ICreateStudent } from '@domain/student/types/ICreateStudent'

@injectable()
export default class StudentAppService {
	constructor(
		@inject(tokens.StudentService)
		private readonly studentService: IStudentService
	) {}

	async findAll(): Promise<Student[]> {
		return await this.studentService.findAll()
	}

	async create(data: ICreateStudent): Promise<Student> {
		return await this.studentService.create(data)
	}

	async update(id: string, data: ICreateStudent): Promise<Student> {
		return await this.studentService.update(id, data)
	}

	async delete(id: string): Promise<boolean> {
		return await this.studentService.delete(id)
	}
}
