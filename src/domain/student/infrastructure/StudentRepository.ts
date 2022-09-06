import { tokens } from '@di/tokens'
import Student from '@domain/student/entities/Student'
import { ICreateStudent } from '@domain/student/types/ICreateStudent'
import { MongoDBClient } from '@infrastructure/mongodb/MongoDBClient'
import { NotFoundException } from '@shared/exceptions/NotFoundException'
import { ObjectId } from 'mongodb'
import { inject, injectable } from 'tsyringe'
import { IStudentRaw } from '@domain/student/types/IStudentRaw'

@injectable()
export default class StudentRepository {
	private readonly collectionName = 'students'

	constructor(
		@inject(tokens.MongoDBClient)
		private readonly client: MongoDBClient
	) {}

	async getAll(): Promise<Student[]> {
		const collection = await this.client.getCollection(this.collectionName)

		const students = await collection.find<IStudentRaw>({}).toArray()

		return students.map(
			(student) =>
				new Student({
					...student,
					id: student._id.toString(),
				})
		)
	}

	async getOne(id: string): Promise<Student | null> {
		const collection = await this.client.getCollection(this.collectionName)

		const student = await collection.findOne<IStudentRaw>({
			_id: new ObjectId(id),
		})

		if (student == null) {
			throw new NotFoundException('Student was not found')
		}

		return new Student({
			...student,
			id: student._id.toString(),
		})
	}

	async create(student: ICreateStudent): Promise<Student> {
		const collection = await this.client.getCollection(this.collectionName)

		const studentCreated = await collection.insertOne(student)

		return (await this.getOne(studentCreated.insertedId.toString())) as Student
	}

	async update(id: string, student: ICreateStudent): Promise<Student> {
		const collection = await this.client.getCollection(this.collectionName)

		await collection.updateOne({ _id: new ObjectId(id) }, { $set: student })
		return (await this.getOne(id)) as Student
	}

	async delete(id: string): Promise<boolean> {
		try {
			const collection = await this.client.getCollection(this.collectionName)

			await collection.deleteOne({ _id: new ObjectId(id) })

			return true
		} catch {
			return false
		}
	}
}
