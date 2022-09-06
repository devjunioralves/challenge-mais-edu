import {
	studentMock,
	studentUpdatedMock,
} from '@domain/student/__mocks__/Student'
import StudentService from '@domain/student/services/StudentService'

const makeStudentRepositoryStub = () => {
	const StudentRepositoryStub = {
		getAll: jest.fn().mockReturnValue([studentMock]),
		create: jest.fn().mockReturnValue(studentMock),
		update: jest.fn().mockReturnValue(studentUpdatedMock),
		delete: jest.fn().mockReturnValue(true),
	}

	return StudentRepositoryStub
}

const makeSut = () => {
	const studentRepositoryStub = makeStudentRepositoryStub()
	const sut = new StudentService(studentRepositoryStub)

	return {
		sut,
		studentRepositoryStub,
	}
}

describe('StudentService', () => {
	it('should create an StudentService instance successfully', () => {
		const { sut } = makeSut()

		expect(sut).toBeInstanceOf(StudentService)
	})

	it('should get all Students successfully', async () => {
		const { sut } = makeSut()

		const result = await sut.findAll()

		expect(result).toEqual([studentMock])
	})

	it('should create one Student successfully', async () => {
		const { sut } = makeSut()

		const result = await sut.create({
			name: 'any_name',
      email: 'any_email',
      ra: 123456,
      cpf: 'any_cpf',
		})

		expect(result).toEqual(studentMock)
	})

	it('should update one Student by id successfully', async () => {
		const { sut } = makeSut()

		const result = await sut.update('62f18cb08ac475faddd4559e', {
			name: 'any_name update',
      email: 'any_email update',
      ra: 123456,
      cpf: 'any_cpf update',
		})

		expect(result).toEqual(studentUpdatedMock)
	})

	it('should delete one Student successfully', async () => {
		const { sut } = makeSut()

		const result = await sut.delete('62f18cb08ac475faddd4559e')

		expect(result).toBeTruthy()
	})
})
