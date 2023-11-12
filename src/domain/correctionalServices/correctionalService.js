/**
 * Correctional Service provisioned.
 */
export class CorrectionalService { };

/**
 * Correctional Service request.
 */
export class CorrectionalServiceRequest { };

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
    canBeProvisionedFor(request) {
        return request instanceof this._request;
    };

    /**
     * Provision this requestable Correctional Service.
     * @param {CorrectionalServiceRequest} request Correctional Service request.
     * @returns {CorrectionalService} requested Correctional Service.
     */
    provision(request) {
        if (this.canBeProvisionedFor(request)) {
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
     * Correctional Services that can be requested.
     * @type {RequestableCorrectionalService[]}
     */
    _requestableCorrectionalServices = [];

    /**
     * Extend Correctional Services Standard Operating Procedures with additional requestable service.
     * @param  {...RequestableCorrectionalService} additionalRequestableServices additional requestable services that extend the Correctional Services Standard Operating Procedures.
     * @returns { StandardOperatingProcedures } extended Standard Operating Procedures for providing Correctional Services.
     * @throws { TypeError } Standard Operating Procedures must be extended to provision ANY Correctional Services.
     */
    constructor(...additionalRequestableServices) {
        if (this.constructor === StandardOperatingProcedures) {
            throw new TypeError("Standard Operating Procedures must be extended to provision ANY Correctional Services.");
        }
        this._requestableCorrectionalServices = [...this._requestableCorrectionalServices, ...additionalRequestableServices.flat()];
    };

    /**
     * Provision the requested Correctional Service.
     * @param {CorrectionalServiceRequest} request Request to provision a Correctional Service.
     * @returns {CorrectionalService} Requested Correctional Service.
     */
    provisionCorrectionalService(request) {
        const requestedService = this._requestableCorrectionalServices.find(requestableService => requestableService.canBeProvisionedFor(request));
        return requestedService.provision(request);
    };
};
