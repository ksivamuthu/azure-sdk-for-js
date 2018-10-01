/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/loadBalancerFrontendIPConfigurationsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a LoadBalancerFrontendIPConfigurations. */
export class LoadBalancerFrontendIPConfigurations {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a LoadBalancerFrontendIPConfigurations.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the load balancer frontend IP configurations.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoadBalancerFrontendIPConfigurationsListResponse>
   */
  list(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase): Promise<Models.LoadBalancerFrontendIPConfigurationsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param callback The callback
   */
  list(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<Models.LoadBalancerFrontendIPConfigurationListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerFrontendIPConfigurationListResult>): void;
  list(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LoadBalancerFrontendIPConfigurationListResult>): Promise<Models.LoadBalancerFrontendIPConfigurationsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.LoadBalancerFrontendIPConfigurationsListResponse>;
  }

  /**
   * Gets load balancer frontend IP configuration.
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param frontendIPConfigurationName The name of the frontend IP configuration.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoadBalancerFrontendIPConfigurationsGetResponse>
   */
  get(resourceGroupName: string, loadBalancerName: string, frontendIPConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<Models.LoadBalancerFrontendIPConfigurationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param frontendIPConfigurationName The name of the frontend IP configuration.
   * @param callback The callback
   */
  get(resourceGroupName: string, loadBalancerName: string, frontendIPConfigurationName: string, callback: msRest.ServiceCallback<Models.FrontendIPConfiguration>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param loadBalancerName The name of the load balancer.
   * @param frontendIPConfigurationName The name of the frontend IP configuration.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, loadBalancerName: string, frontendIPConfigurationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FrontendIPConfiguration>): void;
  get(resourceGroupName: string, loadBalancerName: string, frontendIPConfigurationName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.FrontendIPConfiguration>): Promise<Models.LoadBalancerFrontendIPConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        frontendIPConfigurationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LoadBalancerFrontendIPConfigurationsGetResponse>;
  }

  /**
   * Gets all the load balancer frontend IP configurations.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LoadBalancerFrontendIPConfigurationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.LoadBalancerFrontendIPConfigurationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LoadBalancerFrontendIPConfigurationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerFrontendIPConfigurationListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LoadBalancerFrontendIPConfigurationListResult>): Promise<Models.LoadBalancerFrontendIPConfigurationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.LoadBalancerFrontendIPConfigurationsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/frontendIPConfigurations",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.loadBalancerName,
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
      bodyMapper: Mappers.LoadBalancerFrontendIPConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/frontendIPConfigurations/{frontendIPConfigurationName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.loadBalancerName,
    Parameters.frontendIPConfigurationName,
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
      bodyMapper: Mappers.FrontendIPConfiguration
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
      bodyMapper: Mappers.LoadBalancerFrontendIPConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
