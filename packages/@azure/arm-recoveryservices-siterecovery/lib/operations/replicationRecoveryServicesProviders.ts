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
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/replicationRecoveryServicesProvidersMappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClientContext } from "../siteRecoveryManagementClientContext";

/** Class representing a ReplicationRecoveryServicesProviders. */
export class ReplicationRecoveryServicesProviders {
  private readonly client: SiteRecoveryManagementClientContext;

  /**
   * Create a ReplicationRecoveryServicesProviders.
   * @param {SiteRecoveryManagementClientContext} client Reference to the service client.
   */
  constructor(client: SiteRecoveryManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the registered recovery services providers for the specified fabric.
   * @summary Gets the list of registered recovery services providers for the fabric.
   * @param fabricName Fabric name
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryServicesProvidersListByReplicationFabricsResponse>
   */
  listByReplicationFabrics(fabricName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryServicesProvidersListByReplicationFabricsResponse>;
  /**
   * @param fabricName Fabric name
   * @param callback The callback
   */
  listByReplicationFabrics(fabricName: string, callback: msRest.ServiceCallback<Models.RecoveryServicesProviderCollection>): void;
  /**
   * @param fabricName Fabric name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReplicationFabrics(fabricName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoveryServicesProviderCollection>): void;
  listByReplicationFabrics(fabricName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RecoveryServicesProviderCollection>): Promise<Models.ReplicationRecoveryServicesProvidersListByReplicationFabricsResponse> {
    return this.client.sendOperationRequest(
      {
        fabricName,
        options
      },
      listByReplicationFabricsOperationSpec,
      callback) as Promise<Models.ReplicationRecoveryServicesProvidersListByReplicationFabricsResponse>;
  }

  /**
   * Gets the details of registered recovery services provider.
   * @summary Gets the details of a recovery services provider.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryServicesProvidersGetResponse>
   */
  get(fabricName: string, providerName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryServicesProvidersGetResponse>;
  /**
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name
   * @param callback The callback
   */
  get(fabricName: string, providerName: string, callback: msRest.ServiceCallback<Models.RecoveryServicesProvider>): void;
  /**
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(fabricName: string, providerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoveryServicesProvider>): void;
  get(fabricName: string, providerName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RecoveryServicesProvider>): Promise<Models.ReplicationRecoveryServicesProvidersGetResponse> {
    return this.client.sendOperationRequest(
      {
        fabricName,
        providerName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ReplicationRecoveryServicesProvidersGetResponse>;
  }

  /**
   * The operation to purge(force delete) a recovery services provider from the vault.
   * @summary Purges recovery service provider from fabric
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  purge(fabricName: string, providerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginPurge(fabricName,providerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * The operation to refresh the information from the recovery services provider.
   * @summary Refresh details from the recovery services provider.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryServicesProvidersRefreshProviderResponse>
   */
  refreshProvider(fabricName: string, providerName: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryServicesProvidersRefreshProviderResponse> {
    return this.beginRefreshProvider(fabricName,providerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ReplicationRecoveryServicesProvidersRefreshProviderResponse>;
  }

  /**
   * The operation to removes/delete(unregister) a recovery services provider from the vault
   * @summary Deletes provider from fabric. Note: Deleting provider for any fabric other than
   * SingleHost is unsupported. To maintain backward compatibility for released clients the object
   * "deleteRspInput" is used (if the object is empty we assume that it is old client and continue
   * the old behavior).
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(fabricName: string, providerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(fabricName,providerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Lists the registered recovery services providers in the vault
   * @summary Gets the list of registered recovery services providers in the vault. This is a view
   * only api.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryServicesProvidersListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryServicesProvidersListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.RecoveryServicesProviderCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoveryServicesProviderCollection>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RecoveryServicesProviderCollection>): Promise<Models.ReplicationRecoveryServicesProvidersListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ReplicationRecoveryServicesProvidersListResponse>;
  }

  /**
   * The operation to purge(force delete) a recovery services provider from the vault.
   * @summary Purges recovery service provider from fabric
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPurge(fabricName: string, providerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        fabricName,
        providerName,
        options
      },
      beginPurgeOperationSpec,
      options);
  }

  /**
   * The operation to refresh the information from the recovery services provider.
   * @summary Refresh details from the recovery services provider.
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRefreshProvider(fabricName: string, providerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        fabricName,
        providerName,
        options
      },
      beginRefreshProviderOperationSpec,
      options);
  }

  /**
   * The operation to removes/delete(unregister) a recovery services provider from the vault
   * @summary Deletes provider from fabric. Note: Deleting provider for any fabric other than
   * SingleHost is unsupported. To maintain backward compatibility for released clients the object
   * "deleteRspInput" is used (if the object is empty we assume that it is old client and continue
   * the old behavior).
   * @param fabricName Fabric name.
   * @param providerName Recovery services provider name.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(fabricName: string, providerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        fabricName,
        providerName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists the registered recovery services providers for the specified fabric.
   * @summary Gets the list of registered recovery services providers for the fabric.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns
   * Promise<Models.ReplicationRecoveryServicesProvidersListByReplicationFabricsNextResponse>
   */
  listByReplicationFabricsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryServicesProvidersListByReplicationFabricsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByReplicationFabricsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecoveryServicesProviderCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReplicationFabricsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoveryServicesProviderCollection>): void;
  listByReplicationFabricsNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RecoveryServicesProviderCollection>): Promise<Models.ReplicationRecoveryServicesProvidersListByReplicationFabricsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByReplicationFabricsNextOperationSpec,
      callback) as Promise<Models.ReplicationRecoveryServicesProvidersListByReplicationFabricsNextResponse>;
  }

  /**
   * Lists the registered recovery services providers in the vault
   * @summary Gets the list of registered recovery services providers in the vault. This is a view
   * only api.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ReplicationRecoveryServicesProvidersListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ReplicationRecoveryServicesProvidersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RecoveryServicesProviderCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoveryServicesProviderCollection>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RecoveryServicesProviderCollection>): Promise<Models.ReplicationRecoveryServicesProvidersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ReplicationRecoveryServicesProvidersListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByReplicationFabricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryServicesProviderCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.providerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryServicesProvider
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryServicesProviders",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.RecoveryServicesProviderCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginPurgeOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.providerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRefreshProviderOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}/refreshProvider",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.providerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryServicesProvider
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationRecoveryServicesProviders/{providerName}/remove",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.providerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByReplicationFabricsNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.RecoveryServicesProviderCollection
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
      bodyMapper: Mappers.RecoveryServicesProviderCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};