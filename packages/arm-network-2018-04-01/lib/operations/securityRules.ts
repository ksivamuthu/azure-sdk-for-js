/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/securityRulesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a SecurityRules. */
export class SecurityRules {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a SecurityRules.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified network security rule.
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param securityRuleName The name of the security rule.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,networkSecurityGroupName,securityRuleName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Get the specified network security rule.
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param securityRuleName The name of the security rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecurityRulesGetResponse>
   */
  get(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.SecurityRulesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param securityRuleName The name of the security rule.
   * @param callback The callback
   */
  get(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, callback: msRest.ServiceCallback<Models.SecurityRule>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param securityRuleName The name of the security rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityRule>): void;
  get(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SecurityRule>): Promise<Models.SecurityRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkSecurityGroupName,
        securityRuleName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SecurityRulesGetResponse>;
  }

  /**
   * Creates or updates a security rule in the specified network security group.
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param securityRuleName The name of the security rule.
   * @param securityRuleParameters Parameters supplied to the create or update network security rule
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecurityRulesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, securityRuleParameters: Models.SecurityRule, options?: msRest.RequestOptionsBase): Promise<Models.SecurityRulesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,networkSecurityGroupName,securityRuleName,securityRuleParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SecurityRulesCreateOrUpdateResponse>;
  }

  /**
   * Gets all security rules in a network security group.
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecurityRulesListResponse>
   */
  list(resourceGroupName: string, networkSecurityGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.SecurityRulesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param callback The callback
   */
  list(resourceGroupName: string, networkSecurityGroupName: string, callback: msRest.ServiceCallback<Models.SecurityRuleListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, networkSecurityGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityRuleListResult>): void;
  list(resourceGroupName: string, networkSecurityGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SecurityRuleListResult>): Promise<Models.SecurityRulesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkSecurityGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SecurityRulesListResponse>;
  }

  /**
   * Deletes the specified network security rule.
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param securityRuleName The name of the security rule.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        networkSecurityGroupName,
        securityRuleName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a security rule in the specified network security group.
   * @param resourceGroupName The name of the resource group.
   * @param networkSecurityGroupName The name of the network security group.
   * @param securityRuleName The name of the security rule.
   * @param securityRuleParameters Parameters supplied to the create or update network security rule
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, securityRuleParameters: Models.SecurityRule, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        networkSecurityGroupName,
        securityRuleName,
        securityRuleParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all security rules in a network security group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SecurityRulesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SecurityRulesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SecurityRuleListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityRuleListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SecurityRuleListResult>): Promise<Models.SecurityRulesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SecurityRulesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName}/securityRules/{securityRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkSecurityGroupName,
    Parameters.securityRuleName,
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
      bodyMapper: Mappers.SecurityRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName}/securityRules",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkSecurityGroupName,
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
      bodyMapper: Mappers.SecurityRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName}/securityRules/{securityRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkSecurityGroupName,
    Parameters.securityRuleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkSecurityGroups/{networkSecurityGroupName}/securityRules/{securityRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkSecurityGroupName,
    Parameters.securityRuleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "securityRuleParameters",
    mapper: {
      ...Mappers.SecurityRule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SecurityRule
    },
    201: {
      bodyMapper: Mappers.SecurityRule
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
      bodyMapper: Mappers.SecurityRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
