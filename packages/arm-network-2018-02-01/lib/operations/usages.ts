/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/usagesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a Usages. */
export class Usages {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a Usages.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * List network usages for a subscription.
   * @param location The location where resource usage is queried.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsagesListResponse>
   */
  list(location: string, options?: msRest.RequestOptionsBase): Promise<Models.UsagesListResponse>;
  /**
   * @param location The location where resource usage is queried.
   * @param callback The callback
   */
  list(location: string, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
  /**
   * @param location The location where resource usage is queried.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
  list(location: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.UsagesListResult>): Promise<Models.UsagesListResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.UsagesListResponse>;
  }

  /**
   * List network usages for a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsagesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.UsagesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.UsagesListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.UsagesListResult>): Promise<Models.UsagesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.UsagesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/usages",
  urlParameters: [
    Parameters.location1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UsagesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.UsagesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
