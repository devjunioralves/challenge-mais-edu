import CreateStudentController from '@presentation/http/controllers/student/CreateStudentController'
import StudentAppService from '@application/student/StudentAppService'
import { studentMock } from '@domain/student/__mocks__/Student'
import { IRequest } from '@presentation/http/types/IRequest'
import { InternalException } from '@shared/exceptions/InternalException'

const makeStudentAppService = () => {
	const StudentAppServiceStub = {
		create: jest.fn(),
	} as unknown as StudentAppService

	return StudentAppServiceStub
}

const makeSut = () => {
	const studentAppServiceStub = makeStudentAppService()
	const sut = new CreateStudentController(studentAppServiceStub)

	return {
		sut,
		studentAppServiceStub,
	}
}

const request = {
	body: {
		name: studentMock.getName(),
		email: studentMock.getEmail(),
    ra: studentMock.getRa(),
    cpf: studentMock.getCpf(),
	},
} as unknown as IRequest

describe('CreateStudentController', () => {	
	it('should returns error if create method fails', async () => {
		const { sut, studentAppServiceStub } = makeSut()

		const createSut = jest
			.spyOn(studentAppServiceStub, 'create')
			.mockImplementation(() => {
				throw new InternalException('some error')
			})

		const errorSut = jest.spyOn(sut, 'error')

		await sut.execute(request)

		expect(errorSut).toBeCalledWith(new InternalException('some error'))
		expect(createSut).toBeCalledWith(request.body)
	})
})
