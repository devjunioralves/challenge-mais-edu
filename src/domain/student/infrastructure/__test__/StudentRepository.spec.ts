import StudentRepository from '@domain/student/infrastructure/StudentRepository'
import {
	studentMock,
	studentToCreateMock,
	studentToUpdateMock,
  studentGotMock,
  studentCreatedRawMock,
  studentUpdatedRawMock
} from '@domain/student/__mocks__/Student'
import { ObjectId } from 'mongodb'

const makeMongoDBClient = () => {
	const MongoDBClientStub = jest.fn().mockImplementation(() => ({
		getCollection: jest.fn().mockReturnThis(),
		find: jest.fn().mockReturnThis(),
		toArray: jest.fn().mockResolvedValue([studentGotMock]),
		findOne: jest.fn().mockResolvedValue(studentGotMock),
		insertOne: jest.fn().mockResolvedValue(studentCreatedRawMock),
		updateOne: jest.fn().mockResolvedValue(studentUpdatedRawMock),
		deleteOne: jest.fn(),
	}))

	return new MongoDBClientStub()
}

const makeSut = () => {
	const mongoDBClientStub = makeMongoDBClient()
	const sut = new StudentRepository(mongoDBClientStub)
	return {
		sut,
		mongoDBClientStub,
	}
}

const id = '62f18cb08ac475faddd4559e'

describe('StudentRepository', () => {
	it('should create an StudentRepository instance successfully', () => {
		const { sut } = makeSut()

		expect(sut).toBeInstanceOf(StudentRepository)
	})

	describe('GetAll', () => {
		it('should return an empty array if does not exist any students', async () => {
			const { sut, mongoDBClientStub } = makeSut()

			jest.spyOn(mongoDBClientStub, 'toArray').mockResolvedValueOnce([])

			const result = await sut.getAll()

			expect(result).toEqual([])
		})

		it('should return a list of students', async () => {
			const { sut, mongoDBClientStub } = makeSut()

			const findSpy = jest.spyOn(mongoDBClientStub, 'find')

			const result = await sut.getAll()

			expect(findSpy).toBeCalledWith({})
			expect(result).toEqual([studentMock])
		})

		it('should throw if find method fails', async () => {
			const { sut, mongoDBClientStub } = makeSut()

			const findSpy = jest
				.spyOn(mongoDBClientStub, 'find')
				.mockImplementationOnce(async () => {
          return await new Promise((_, reject) => reject(new Error()))
        })

			sut.getAll()

			await expect(findSpy).rejects.toThrowError()
		})
	})

	describe('Create', () => {
		it('should create an student successfully', async () => {
			const { sut, mongoDBClientStub } = makeSut()

			const insertOneSpy = jest.spyOn(mongoDBClientStub, 'insertOne')

			const result = await sut.create(studentToCreateMock)

			expect(insertOneSpy).toBeCalledWith(studentToCreateMock)
			expect(result).toEqual(studentMock)
		})

		it('should throw if create method fails', async () => {
			const { sut, mongoDBClientStub } = makeSut()

			const insertOneSpy = jest
				.spyOn(mongoDBClientStub, 'insertOne')
				.mockImplementationOnce(async () => {
          return await new Promise((_, reject) => reject(new Error()))
        })

			sut.create(studentToCreateMock)

			await expect(insertOneSpy).rejects.toThrow()
		})
	})

	describe('Update', () => {
		it('should update an student successfully', async () => {
			const { sut, mongoDBClientStub } = makeSut()

			const updateOneSpy = jest.spyOn(mongoDBClientStub, 'updateOne')

			const result = await sut.update(id, studentToUpdateMock)

			expect(updateOneSpy).toBeCalledWith(
				{ _id: new ObjectId(id) },
				{ $set: studentToUpdateMock }
			)
			expect(result).toEqual(studentMock)
		})

		it('should throw if update method fails', async () => {
			const { sut, mongoDBClientStub } = makeSut()

			const insertOneSpy = jest
				.spyOn(mongoDBClientStub, 'insertOne')
				.mockImplementationOnce(async () => {
          return await new Promise((_, reject) => reject(new Error()))
        })

			sut.update(id, studentToUpdateMock)

			await expect(insertOneSpy).rejects.toThrow()
		})
	})

	describe('Delete', () => {
		it('should delete an student successfully', async () => {
			const { sut, mongoDBClientStub } = makeSut()

			const deleteOneSpy = jest.spyOn(mongoDBClientStub, 'deleteOne')

			const result = await sut.delete(id)

			expect(deleteOneSpy).toBeCalledWith({ _id: new ObjectId(id) })
			expect(result).toEqual(true)
		})

		it('should throw if delete method fails', async () => {
			const { sut, mongoDBClientStub } = makeSut()

			jest
				.spyOn(mongoDBClientStub, 'deleteOne')
				.mockImplementationOnce(async () => {
          return await new Promise((_, reject) => reject(new Error()))
        })
			const result = await sut.delete(id)

			expect(result).toEqual(false)
		})
	})
})