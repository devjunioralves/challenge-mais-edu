import { IStudent } from '@domain/student/types/IStudent'

export type ICreateStudent = Omit<IStudent, 'id'>
