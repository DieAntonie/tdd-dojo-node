import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { StandardOperatingProcedures } from "../correctionalService.js";
import { IncapacitationServices } from "./incapacitationServices.js";

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
        const incarcerationRequest = new IncarcerationRequest();

        // when
        incapacitationServices.canProvisionFor(incarcerationRequest);

        // then
        assert.ok(incapacitationServices instanceof StandardOperatingProcedures)
    });
});
