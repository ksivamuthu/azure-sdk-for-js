/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/capabilitiesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a Capabilities. */
export class Capabilities {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a Capabilities.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the subscription capabilities available for the specified location.
   * @param locationName The location name whose capabilities are retrieved.
   * @param [options] The optional parameters
   * @returns Promise<Models.CapabilitiesListByLocationResponse>
   */
  listByLocation(locationName: string, options?: msRest.RequestOptionsBase): Promise<Models.CapabilitiesListByLocationResponse>;
  /**
   * @param locationName The location name whose capabilities are retrieved.
   * @param callback The callback
   */
  listByLocation(locationName: string, callback: msRest.ServiceCallback<Models.LocationCapabilities>): void;
  /**
   * @param locationName The location name whose capabilities are retrieved.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByLocation(locationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LocationCapabilities>): void;
  listByLocation(locationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LocationCapabilities>, callback?: msRest.ServiceCallback<Models.LocationCapabilities>): Promise<Models.CapabilitiesListByLocationResponse> {
    return this.client.sendOperationRequest(
      {
        locationName,
        options
      },
      listByLocationOperationSpec,
      callback) as Promise<Models.CapabilitiesListByLocationResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByLocationOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/capabilities",
  urlParameters: [
    Parameters.locationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.LocationCapabilities
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
