import { tokens } from '@di/tokens'
import { container } from 'tsyringe'

import { Routes } from '@presentation/http/Routes'
import { StudentRouter } from '@presentation/http/routes/StudentRouter'

import CreateStudentController from '@presentation/http/controllers/student/CreateStudentController'
import GetStudentController from '@presentation/http/controllers/student/GetStudentController'
import UpdateStudentController from '@presentation/http/controllers/student/UpdateStudentController'
import DeleteStudentController from '@presentation/http/controllers/student/DeleteStudentController'

import StudentAppService from '@application/student/StudentAppService'

import StudentService from '@domain/student/services/StudentService'

import StudentRepository from '@domain/student/infrastructure/StudentRepository'

import { MongoDBClient } from '@infrastructure/mongodb/MongoDBClient'

const childContainer = container.createChildContainer()

childContainer.registerSingleton(tokens.Routes, Routes)
childContainer.registerSingleton(tokens.StudentRouter, StudentRouter)

childContainer.registerSingleton(
	tokens.CreateStudentController,
	CreateStudentController
)
childContainer.registerSingleton(
	tokens.GetStudentController,
	GetStudentController
)
childContainer.registerSingleton(
	tokens.UpdateStudentController,
	UpdateStudentController
)
childContainer.registerSingleton(
	tokens.DeleteStudentController,
	DeleteStudentController
)

childContainer.registerSingleton(tokens.StudentAppService, StudentAppService)

childContainer.registerSingleton(tokens.StudentService, StudentService)

childContainer.registerSingleton(tokens.StudentRepository, StudentRepository)

childContainer.registerSingleton(tokens.MongoDBClient, MongoDBClient)

export { childContainer as container }
