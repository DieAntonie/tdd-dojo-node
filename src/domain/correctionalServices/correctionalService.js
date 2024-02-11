/**
 * Correctional Service provisioned.
 */
export class CorrectionalService { };

/**
 * Correctional Service request.
 */
export class CorrectionalServiceRequest {

    /**
     * Correctional Services targeted for provisioning.
     * @type {CorrectionalService.constructor[]}
     */
    _serviceTargets = [];

    /**
     * 
     */
    constructor() {
        if (this._serviceTargets) {
            
        }
        throw new TypeError("Requestable Correctional Service must only be provisioned with established request.");
    }

    /**
     * Check if Correctional Service is targeted. 
     * @param {CorrectionalService.constructor} service Correctional service to check for targeting.
     * @returns {boolean}
     */
    for = service => this._serviceTargets.includes(service)
};

/**
 * Requestable Correctional Service.
 */
export class RequestableCorrectionalService {
    /**
     * Request for this Correctional Service.
     * @type {CorrectionalServiceRequest.constructor}
     */
    _request;

    /**
     * Correctional Service to provision on request.
     * @type {CorrectionalService.constructor}
     */
    _service;

    /**
     * Establish which Correctional Service to provision when requested.
     * @param {CorrectionalServiceRequest.constructor} request Request to provision `service`.
     * @param {CorrectionalService.constructor} service Correctional Service to provision on `request`.
     */
    constructor(request, service) {
        this._request = request;
        this._service = service;
    };

    /**
     * Check if this requestable Correctional Service can be provisoned for the provided request.
     * @param {CorrectionalServiceRequest} request Request to validate for provisionablity.
     * @returns {boolean}
     */
    serivceCanBeProvisionedFor(request) {
        return request instanceof this._request;
    };

    /**
     * Provision this requestable Correctional Service.
     * @param {CorrectionalServiceRequest} request Correctional Service request.
     * @returns {CorrectionalService} requested Correctional Service.
     */
    provision(request) {
        if (this.serivceCanBeProvisionedFor(request)) {
            return new this._service(request);
        }
        throw new TypeError("Requestable Correctional Service must only be provisioned with established request.");
    };
};

/**
 *  Extensible Correctional Service Standard Operating Procedures.
 */
export class StandardOperatingProcedures {
    /**
     * Correctional Services that can be provisioned.
     * @type {CorrectionalService.constructor[]}
     */
    _correctionalServices = [];

    /**
     * Extend Correctional Services Standard Operating Procedures with additional provisionable service.
     * @param  {...CorrectionalService} additionalServices additional provisionable services that extend the Correctional Services Standard Operating Procedures.
     * @returns { StandardOperatingProcedures } extended Standard Operating Procedures for providing Correctional Services.
     * @throws { TypeError } Standard Operating Procedures must be extended to provision ANY Correctional Services.
     */
    constructor(...additionalServices) {
        if (this.constructor === StandardOperatingProcedures) {
            throw new TypeError("Standard Operating Procedures must be extended to provision ANY Correctional Services.");
        }
        this._correctionalServices = [...this._correctionalServices, ...additionalServices.flat()];
    };

    /**
     * Provision the requested Correctional Service.
     * @param {CorrectionalServiceRequest} requested Request to provision a Correctional Service.
     * @returns {CorrectionalService} Requested Correctional Service.
     */
    provision(requested) {
        const requestedService = this._correctionalServices.find(requested.for);
        return requestedService(requested);
    };

    /**
     * Check if a Correctional Service can be provisoned for the provided request.
     * @param {CorrectionalServiceRequest} request Request to validate for provisionablity
     * @returns {boolean}
     */
    canProvisionFor(request) {
        return this._correctionalServices.some(requestableService => requestableService.serivceCanBeProvisionedFor(request));
    }
};
