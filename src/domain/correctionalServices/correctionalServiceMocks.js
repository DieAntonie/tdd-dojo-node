import assert from "node:assert/strict";
import { CorrectionalService, CorrectionalServiceRequest, RequestableCorrectionalService, StandardOperatingProcedures } from "./correctionalService.js";

/**
 * Mocked Correctional Service extended to assert that requirements are met.
 */
export class MockCorrectionalService extends CorrectionalService {
    /**
     * Actual request to provision this Correctional Service.
     * @type {CorrectionalServiceRequest}
     */
    _actualProvisionedServiceRequest;

    /**
     * Provision mock Correctional Services with serivce request to assert that requirements are met.
     * @param {CorrectionalServiceRequest} request Request provisioned to be asserted as per requirements.
     */
    constructor(request) {
        super(request);
        this._actualProvisionedServiceRequest = request;
    };

    /**
     * Assert the actual provisoned Correctional Service request matches expected request as per requirements.
     * @param {CorrectionalServiceRequest} expectedServiceRequest Expected Correctional Service request as per requirements.
     * @returns {asserts actual is CorrectionalServiceRequest}
     */
    assertServiceProvisionedWith(expectedServiceRequest) {
        assert.strictEqual(this._actualProvisionedServiceRequest, expectedServiceRequest);
    };
};

/**
 * Mocked Correctional Service "A" extended to assert that requirements are met.
 */
export class MockServiceA extends MockCorrectionalService { };

/**
 * Mocked Correctional Service "B" extended to assert that requirements are met.
 */
export class MockServiceB extends MockCorrectionalService { };

/**
 * Mocked Correctional Service request extended to assert that requirements are met.
 */
export class MockExtendedCorrectionalServiceRequest extends CorrectionalServiceRequest { };

/**
 * Mocked Correctional Service "A" request extended to assert that requirements are met.
 */
export class MockRequestA extends MockExtendedCorrectionalServiceRequest { };

/**
 * Mocked Correctional Service "B" request extended to assert that requirements are met.
 */
export class MockRequestB extends MockExtendedCorrectionalServiceRequest { };

/**
 * Mocked requestable Correctional Service extended to assert that requirements are met.
 */
export class MockExtendedRequestableService extends RequestableCorrectionalService { };

/**
 * Mocked Correctional Services Standard Operating Procedures extended to assert that requirements are met.
 */
export class MockExtendedSOP extends StandardOperatingProcedures {
    /**
     * Actual extention count spy.
     * @type {number}
     */
    _actualExtentionCount = 0;

    /**
     * Actual Correctional Service request spy.
     * @type {CorrectionalServiceRequest}
     */
    _actualServiceRequest;

    /**
     * Extend mock Correctional Services Standard Operating Procedures with requestable services to assert that requirements are met.
     * @param  {...RequestableCorrectionalService} requestableServicesToBeAsserted Requestable Correctional Services to be asserted as per requirements.
     * @returns {MockExtendedSOP} Mocked Correctional Services Standard Operating Procedures.
     */
    constructor(...requestableServicesToBeAsserted) {
        super(requestableServicesToBeAsserted);
        this._actualExtentionCount++;
    };

    /**
     * Spy the actual service request, and provision the requested Correctional Service for asserting requirements.
     * @param {CorrectionalServiceRequest} request Request to be recorded, and to provision Correctional Service.
     * @returns 
     */
    provisionCorrectionalService(request) {
        this._actualServiceRequest = request;
        return super.provisionCorrectionalService(request);
    };

    /**
     * Assert the mocked Standard Operating Procedures extended requestable Correctional Services as per requirements.
     * @param {...RequestableCorrectionalService} expectedRequestableCorrectionalServices Expected Correctional Services request as per requirements.
     * @returns {asserts actual is RequestableCorrectionalService[]}
     */
    assertRequestableCorrectionalServices(...expectedRequestableCorrectionalServices) {
        assert.deepEqual(this._requestableCorrectionalServices, expectedRequestableCorrectionalServices);
    };
};
