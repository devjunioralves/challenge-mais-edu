import Student from '@domain/student/entities/Student'
import { ICreateStudent } from '@domain/student/types/ICreateStudent'

export type IStudentRepository = {
	getAll: () => Promise<Student[]>
	create: (student: ICreateStudent) => Promise<Student>
	update: (id: string, student: ICreateStudent) => Promise<Student>
	delete: (id: string) => Promise<boolean>
}
