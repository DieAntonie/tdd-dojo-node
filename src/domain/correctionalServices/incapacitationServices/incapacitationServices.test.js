import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { StandardOperatingProcedures } from "../correctionalService.js";
import {
    ExecutionRequest,
    ExecutionService,
    IncapacitationServices,
    IncarcerationRequest,
    IncarcerationService
} from "./incapacitationServices.js";

describe("Incapacitation Services", async () => {

    it("must extend Correctional Services Standard Operating Procedures.", () => {
        // when
        const incapacitationServices = new IncapacitationServices();

        // then
        assert.ok(incapacitationServices instanceof StandardOperatingProcedures)
    });

    it("must provision incarceration servises.", () => {
        // given
        const incapacitationServices = new IncapacitationServices();

        // when
        let incarcerationService = incapacitationServices.provisionCorrectionalService(new IncarcerationRequest())

        // then
        assert.ok(incarcerationService instanceof IncarcerationService)
    });

    it("must provision execution servises.", () => {
        // given
        const incapacitationServices = new IncapacitationServices();

        // when
        let executionService = incapacitationServices.provisionCorrectionalService(new ExecutionRequest())

        // then
        assert.ok(executionService instanceof ExecutionService)
    });
});
