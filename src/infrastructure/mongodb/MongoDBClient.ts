import { Collection, MongoClient } from 'mongodb'

export class MongoDBClient {
	client = null as MongoClient | null
	uri = 'mongodb://localhost:27017/student'
	// uri = null as unknown as string

	public async connect(uri: string): Promise<void> {
		this.uri = uri
		this.client = await new MongoClient(this.uri).connect()
	}

	public async disconnect() {
		await this.client?.close()
		this.client = null
	}

	public async getCollection(name: string): Promise<Collection> {
		if (this.client == null) {
			await this.connect(this.uri)
		}

		return (this.client as MongoClient).db().collection(name)
	}
}
