import { MongoClient } from 'mongodb'
import { MongoDBClient } from '@infrastructure/mongodb/MongoDBClient'

jest.spyOn(MongoClient.prototype, 'connect').mockReturnThis()

const mockSut = () => {
	const sut = new MongoDBClient()

	return { sut }
}

const uri = 'mongodb://localhost:27017'

describe('MongoDBClient', () => {
	describe('Connect', () => {
		it('should connect if params are correctly', async () => {
			const { sut } = mockSut()
			const result = await sut.connect(uri)

			expect(() => result).not.toThrow()
		})

		it('should not connect if params are not correctly', async () => {
			const { sut } = mockSut()
			const result = sut.connect('fakeConnectionString')

			await expect(result).rejects.toThrow()
		})
	})

	describe('Disconnect', () => {
		it('should disconnect successfully', async () => {
			const { sut } = mockSut()
			await sut.connect(uri)
			const result = sut.disconnect()

			expect(() => result).not.toThrow()
		})
	})

	describe('GetCollection', () => {
		it('should get collection successfully if already is connected', async () => {
			const { sut } = mockSut()
			await sut.connect(uri)

			const connectSpy = jest.spyOn(sut, 'connect')

			const result = await sut.getCollection('fakeCollection')

			expect(connectSpy).not.toBeCalled()
			expect(() => result).not.toThrow()
		})

		it('should connect before get collection when client is disconnected', async () => {
			const { sut } = mockSut()
			const connectSpy = jest.spyOn(sut, 'connect')

			await sut.connect(uri)
			await sut.disconnect()

			const result = await sut.getCollection('fakeCollection')

			expect(connectSpy).toBeCalled()
			expect(() => result).not.toThrow()
		})

		it('should throws to get collection when client was never connected', async () => {
			const { sut } = mockSut()
			const connectSpy = jest.spyOn(sut, 'connect').mockRejectedValueOnce(new Error())

			const result = sut.getCollection('fakeCollection')

			expect(connectSpy).toBeCalled()
			await expect(result).rejects.toThrow()
		})
	})
})
