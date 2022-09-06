import Student from '@domain/student/entities/Student'

export const studentMock = new Student({
	id: '62f18cb08ac475faddd4559e',
	name: 'any_name',
  email: 'any_email',
  ra: 123456,
  cpf: 'any_cpf',
})


export const studentGotMock = {
	_id: { toString: () => '62f18cb08ac475faddd4559e' },
	name: 'any_name',
  email: 'any_email',
  ra: 123456,
  cpf: 'any_cpf',
}

export const studentUpdatedMock = new Student({
	id: '62f18cb08ac475faddd4559e',
	name: 'any_name updated',
  email: 'any_email updated',
  ra: 123456,
  cpf: 'any_cpf',
})

export const studentToUpdateMock = {
	name: 'any_name updated',
  email: 'any_email updated',
  ra: 123456,
  cpf: 'any_cpf',
}

export const studentUpdatedRawMock = {
	upsertedId: { toString: () => '62f18cb08ac475faddd4559e' },
}

export const studentCreatedRawMock = {
	insertedId: { toString: () => '62f18cb08ac475faddd4559e' },
}

export const studentToCreateMock = {
	id: '62f18cb08ac475faddd4559e',
	name: 'any_name',
  email: 'any_email',
  ra: 123456,
  cpf: 'any_cpf',
}
