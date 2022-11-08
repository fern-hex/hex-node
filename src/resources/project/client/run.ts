/**
 * This file auto-generated by Fern from our API Definition.
 */

import { HexApi } from "../../..";
import * as core from "../../../core";

export interface Request {
  /** Unique ID for a Hex project. This can be found in the Variables side bar of the Logic View of a project, or by visiting the Project, and copying the UUID after hex in the URL. */
  projectId: string;
  _body: HexApi.project.RunProjectRequest;
}

export type Response = core.APIResponse<HexApi.project.RunProjectResponse, HexApi.project.run.Error>;
export type Error = Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <Result>(visitor: Error._Visitor<Result>) => Result;
  }

  interface _Visitor<Result> {
    _other: (value: core.Fetcher.Error) => Result;
  }
}