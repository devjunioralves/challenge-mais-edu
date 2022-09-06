import { IStudent } from '@domain/student/types/IStudent'

export default class Student {
	private id?: string
	private name!: string
	private email!: string
	private ra!: number
	private cpf!: string

	constructor(data: IStudent) {
		this.setId(data.id)
		this.setName(data.name)
		this.setEmail(data.email)
		this.setRa(data.ra)
		this.setCpf(data.cpf)
	}

	getId() {
		return this.id
	}

	setId(id?: string) {
		this.id = id
	}

	getName() {
		return this.name
	}

	setName(name: string) {
		if (!name) throw new Error('name is invalid')

		this.name = name
	}

	getEmail() {
		return this.email
	}

	setEmail(email: string) {
		if (!email) throw new Error('email is invalid')

		this.email = email
	}

	getRa() {
		return this.ra
	}

	setRa(ra: number) {
		if (!ra) throw new Error('ra is invalid')

		this.ra = ra
	}

	getCpf() {
		return this.cpf
	}

	setCpf(cpf: string) {
		if (!cpf) throw new Error('cpf is invalid')

		this.cpf = cpf
	}
}
