module.exports = {
	// roots: ['<rootDir>/src'],
	rootDir: 'src',
	collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
	coverageDirectory: 'coverage',
	testEnvironment: 'node',
	transform: {
		'.+\\.ts$': 'ts-jest',
	},
	moduleNameMapper: {
		'^@application/(.*)$': '<rootDir>/application/$1',
		'^@config/(.*)$': '<rootDir>/config/$1',
		'^@di/(.*)$': '<rootDir>/di/$1',
		'^@domain/(.*)$': '<rootDir>/domain/$1',
		'^@infrastructure/(.*)$': '<rootDir>/infrastructure/$1',
		'^@logger/(.*)$': '<rootDir>/logger/$1',
		'^@presentation/(.*)$': '<rootDir>/presentation/$1',
		'^@shared/(.*)$': '<rootDir>/shared/$1',
		'^@src/(.*)$': '<rootDir>/$1',
	},
	setupFiles: ['./jest.setup.ts'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
