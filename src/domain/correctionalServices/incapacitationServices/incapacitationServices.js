import { CorrectionalService, CorrectionalServiceRequest, RequestableCorrectionalService, StandardOperatingProcedures } from "../correctionalService.js";

/**
 * Request for Incarcerational services.
 */
export class IncarcerationRequest extends CorrectionalServiceRequest { }

/**
 * Incarcerational incapacitating correctional Services
 */
export class IncarcerationService extends CorrectionalService { }

/**
 * Request for Executional services.
 */
export class ExecutionRequest extends CorrectionalServiceRequest { }

/**
 * Executional incapacitating correctional Services
 */
export class ExecutionService extends CorrectionalService { }

/**
 * Incapacitation-based Correctional Services Standard Operating Procedures.
 */
export class IncapacitationServices extends StandardOperatingProcedures {
    _requestableCorrectionalServices = [
        new RequestableCorrectionalService(IncarcerationRequest, IncarcerationService),
        new RequestableCorrectionalService(ExecutionRequest, ExecutionService)
    ]
}