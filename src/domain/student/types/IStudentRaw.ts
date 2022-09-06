import { IStudent } from '@domain/student/types/IStudent'

export type IStudentRaw = Omit<IStudent, 'id'> & { _id: string }
