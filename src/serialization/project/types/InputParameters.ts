/**
 * This file auto-generated by Fern from our API Definition.
 */

import { HexApi } from "../../..";
import * as core from "../../../core";

export const InputParameters: core.schemas.ObjectSchema<InputParameters.Raw, HexApi.project.InputParameters> =
  core.schemas.object({
    textInput1: core.schemas.property("text_input_1", core.schemas.string()),
    numericInput1: core.schemas.property("numeric_input_1", core.schemas.number()),
  });

export declare namespace InputParameters {
  interface Raw {
    text_input_1: string;
    numeric_input_1: number;
  }
}
