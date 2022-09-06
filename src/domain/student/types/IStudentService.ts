import Student from '@domain/student/entities/Student'
import { ICreateStudent } from '@domain/student/types/ICreateStudent'

export type IStudentService = {
	findAll: () => Promise<Student[]>
	create: (student: ICreateStudent) => Promise<Student>
	update: (id: string, student: ICreateStudent) => Promise<Student>
	delete: (id: string) => Promise<boolean>
}
