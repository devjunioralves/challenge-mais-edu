import { IRequest } from '@presentation/http/types/IRequest'
import { BaseError } from '@shared/exceptions/BaseError'
import { InternalException } from '@shared/exceptions/InternalException'

export default abstract class BaseController {
	abstract execute(request: IRequest)

	send(data: unknown): unknown {
		return {
			data,
		}
	}

	sendStatus(status: number): unknown {
		return {
			status,
		}
	}

	error(err: BaseError): unknown {
		if (!err.customError) {
			throw new InternalException(
				`Unexpected Error. Error: ${JSON.stringify(err)}`
			)
		}

		return {
			error: {
				code: err.statusCode,
				message: {
					type: err.name,
					value: err.message,
				},
			},
		}
	}
}
