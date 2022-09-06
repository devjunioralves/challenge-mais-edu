import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'

import Student from '@domain/student/entities/Student'

import { ICreateStudent } from '@domain/student/types/ICreateStudent'
import { IStudentService } from '@domain/student/types/IStudentService'
import { IStudentRepository } from '@domain/student/types/IStudentRepository'

@injectable()
export default class StudentService implements IStudentService {
	constructor(
		@inject(tokens.StudentRepository)
		private readonly studentRepository: IStudentRepository
	) {}

	async findAll(): Promise<Student[]> {
		return await this.studentRepository.getAll()
	}

	async create(student: ICreateStudent): Promise<Student> {
		return await this.studentRepository.create(student)
	}

	async update(id: string, student: ICreateStudent): Promise<Student> {
		return await this.studentRepository.update(id, student)
	}

	async delete(id: string): Promise<boolean> {
		return await this.studentRepository.delete(id)
	}
}
