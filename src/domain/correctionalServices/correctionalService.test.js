import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { CorrectionalService, CorrectionalServiceRequest, RequestableCorrectionalService, StandardOperatingProcedures } from "./correctionalService.js";
import { MockExtendedRequestableService, MockExtendedSOP, MockRequestA, MockRequestB, MockServiceA, MockServiceB } from "./correctionalServiceMocks.js";

describe("Requestable Correctional Service", async () => {

    it("must be able to detremine whether the Correctional Service can be provisioned for a request.", () => {
        // given
        const requestableServiceRequest = new MockRequestA();
        const nonRequestableServiceRequest = new MockRequestB();

        // when
        const requestedCorrectionalService = new RequestableCorrectionalService(MockRequestA, CorrectionalService);

        // then
        assert.ok(requestedCorrectionalService.canBeProvisionedFor(requestableServiceRequest));
        assert.strictEqual(requestedCorrectionalService.canBeProvisionedFor(nonRequestableServiceRequest), false);
    });

    it("must provision the requested Correctional Service with the provided request.", () => {
        // given
        const serviceRequest = new CorrectionalServiceRequest();
        const requestedCorrectionalService = new RequestableCorrectionalService(CorrectionalServiceRequest, MockServiceA);

        // when
        const requestedService = requestedCorrectionalService.provision(serviceRequest);

        // then
        assert.ok(requestedService instanceof MockServiceA);
        requestedService.assertServiceProvisionedWith(serviceRequest);
    });

    it("must only be provisioned with established request.", () => {
        // given
        const requestedCorrectionalService = new RequestableCorrectionalService(MockServiceA, MockServiceA);
        const nonRequestableServiceRequest = new MockServiceB();

        // when
        const missmatchedServiceProvisionRequest = () => requestedCorrectionalService.provision(nonRequestableServiceRequest);

        // then
        assert.throws(missmatchedServiceProvisionRequest, TypeError);
    });
});

describe("Standard Operating Procedures", async () => {

    it("must be extended to provision ANY Correctional Services.", () => {
        // given
        const requestedCorrectionalService = new RequestableCorrectionalService(CorrectionalServiceRequest, CorrectionalService);

        // when
        const unextendedSOP = () => new StandardOperatingProcedures(requestedCorrectionalService);

        // then
        assert.throws(unextendedSOP, TypeError);
    });

    it("must support additional requestable Correctional Services when extended.", () => {
        // given
        const requestedCorrectionalService = new RequestableCorrectionalService(CorrectionalServiceRequest, CorrectionalService);

        // when
        const extendedSOP = new MockExtendedSOP(requestedCorrectionalService);

        // then
        extendedSOP.assertRequestableCorrectionalServices(requestedCorrectionalService);
    });

    it("must provision the expected Correctional Services when requested.", () => {
        // given
        const requestableA = new MockExtendedRequestableService(MockRequestA, MockServiceA);
        const requestableB = new MockExtendedRequestableService(MockRequestB, MockServiceB);
        const extendedSOP = new MockExtendedSOP(requestableA, requestableB);
        const requestA = new MockRequestA();
        const requestB = new MockRequestB();
        const expectedServiceA = new MockServiceA(requestA);
        const expectedServiceB = new MockServiceB(requestB);

        // when
        const provisionedServiceA = extendedSOP.provisionCorrectionalService(requestA);
        const provisionedServiceB = extendedSOP.provisionCorrectionalService(requestB);

        // then
        assert.deepEqual(provisionedServiceA, expectedServiceA);
        assert.deepEqual(provisionedServiceB, expectedServiceB);
    });
});
