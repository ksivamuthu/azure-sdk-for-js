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
import * as Mappers from "../models/publicIPAddressesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a PublicIPAddresses. */
export class PublicIPAddresses {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a PublicIPAddresses.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified public IP address.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpAddressName The name of the subnet.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, publicIpAddressName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,publicIpAddressName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified public IP address in a specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpAddressName The name of the subnet.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPAddressesGetResponse>
   */
  get(resourceGroupName: string, publicIpAddressName: string, options?: Models.PublicIPAddressesGetOptionalParams): Promise<Models.PublicIPAddressesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param publicIpAddressName The name of the subnet.
   * @param callback The callback
   */
  get(resourceGroupName: string, publicIpAddressName: string, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param publicIpAddressName The name of the subnet.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, publicIpAddressName: string, options: Models.PublicIPAddressesGetOptionalParams, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
  get(resourceGroupName: string, publicIpAddressName: string, options?: Models.PublicIPAddressesGetOptionalParams | msRest.ServiceCallback<Models.PublicIPAddress>, callback?: msRest.ServiceCallback<Models.PublicIPAddress>): Promise<Models.PublicIPAddressesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        publicIpAddressName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PublicIPAddressesGetResponse>;
  }

  /**
   * Creates or updates a static or dynamic public IP address.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpAddressName The name of the public IP address.
   * @param parameters Parameters supplied to the create or update public IP address operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPAddressesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, publicIpAddressName: string, parameters: Models.PublicIPAddress, options?: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,publicIpAddressName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PublicIPAddressesCreateOrUpdateResponse>;
  }

  /**
   * Updates public IP address tags.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpAddressName The name of the public IP address.
   * @param parameters Parameters supplied to update public IP address tags.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPAddressesUpdateTagsResponse>
   */
  updateTags(resourceGroupName: string, publicIpAddressName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressesUpdateTagsResponse> {
    return this.beginUpdateTags(resourceGroupName,publicIpAddressName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PublicIPAddressesUpdateTagsResponse>;
  }

  /**
   * Gets all the public IP addresses in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPAddressesListAllResponse>
   */
  listAll(options?: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressesListAllResponse>;
  /**
   * @param callback The callback
   */
  listAll(callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  listAll(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PublicIPAddressListResult>, callback?: msRest.ServiceCallback<Models.PublicIPAddressListResult>): Promise<Models.PublicIPAddressesListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.PublicIPAddressesListAllResponse>;
  }

  /**
   * Gets all public IP addresses in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPAddressesListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PublicIPAddressListResult>, callback?: msRest.ServiceCallback<Models.PublicIPAddressListResult>): Promise<Models.PublicIPAddressesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PublicIPAddressesListResponse>;
  }

  /**
   * Gets information about all public IP addresses on a virtual machine scale set level.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesResponse>
   */
  listVirtualMachineScaleSetPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, options?: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param callback The callback
   */
  listVirtualMachineScaleSetPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param options The optional parameters
   * @param callback The callback
   */
  listVirtualMachineScaleSetPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  listVirtualMachineScaleSetPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PublicIPAddressListResult>, callback?: msRest.ServiceCallback<Models.PublicIPAddressListResult>): Promise<Models.PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualMachineScaleSetName,
        options
      },
      listVirtualMachineScaleSetPublicIPAddressesOperationSpec,
      callback) as Promise<Models.PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesResponse>;
  }

  /**
   * Gets information about all public IP addresses in a virtual machine IP configuration in a
   * virtual machine scale set.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param networkInterfaceName The network interface name.
   * @param ipConfigurationName The IP configuration name.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesResponse>
   */
  listVirtualMachineScaleSetVMPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param networkInterfaceName The network interface name.
   * @param ipConfigurationName The IP configuration name.
   * @param callback The callback
   */
  listVirtualMachineScaleSetVMPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param networkInterfaceName The network interface name.
   * @param ipConfigurationName The IP configuration name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listVirtualMachineScaleSetVMPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  listVirtualMachineScaleSetVMPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PublicIPAddressListResult>, callback?: msRest.ServiceCallback<Models.PublicIPAddressListResult>): Promise<Models.PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualMachineScaleSetName,
        virtualmachineIndex,
        networkInterfaceName,
        ipConfigurationName,
        options
      },
      listVirtualMachineScaleSetVMPublicIPAddressesOperationSpec,
      callback) as Promise<Models.PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesResponse>;
  }

  /**
   * Get the specified public IP address in a virtual machine scale set.
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param networkInterfaceName The name of the network interface.
   * @param ipConfigurationName The name of the IP configuration.
   * @param publicIpAddressName The name of the public IP Address.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressResponse>
   */
  getVirtualMachineScaleSetPublicIPAddress(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, publicIpAddressName: string, options?: Models.PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams): Promise<Models.PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param networkInterfaceName The name of the network interface.
   * @param ipConfigurationName The name of the IP configuration.
   * @param publicIpAddressName The name of the public IP Address.
   * @param callback The callback
   */
  getVirtualMachineScaleSetPublicIPAddress(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, publicIpAddressName: string, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param virtualMachineScaleSetName The name of the virtual machine scale set.
   * @param virtualmachineIndex The virtual machine index.
   * @param networkInterfaceName The name of the network interface.
   * @param ipConfigurationName The name of the IP configuration.
   * @param publicIpAddressName The name of the public IP Address.
   * @param options The optional parameters
   * @param callback The callback
   */
  getVirtualMachineScaleSetPublicIPAddress(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, publicIpAddressName: string, options: Models.PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams, callback: msRest.ServiceCallback<Models.PublicIPAddress>): void;
  getVirtualMachineScaleSetPublicIPAddress(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, publicIpAddressName: string, options?: Models.PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams | msRest.ServiceCallback<Models.PublicIPAddress>, callback?: msRest.ServiceCallback<Models.PublicIPAddress>): Promise<Models.PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        virtualMachineScaleSetName,
        virtualmachineIndex,
        networkInterfaceName,
        ipConfigurationName,
        publicIpAddressName,
        options
      },
      getVirtualMachineScaleSetPublicIPAddressOperationSpec,
      callback) as Promise<Models.PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressResponse>;
  }

  /**
   * Deletes the specified public IP address.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpAddressName The name of the subnet.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, publicIpAddressName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        publicIpAddressName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a static or dynamic public IP address.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpAddressName The name of the public IP address.
   * @param parameters Parameters supplied to the create or update public IP address operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, publicIpAddressName: string, parameters: Models.PublicIPAddress, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        publicIpAddressName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates public IP address tags.
   * @param resourceGroupName The name of the resource group.
   * @param publicIpAddressName The name of the public IP address.
   * @param parameters Parameters supplied to update public IP address tags.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdateTags(resourceGroupName: string, publicIpAddressName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        publicIpAddressName,
        parameters,
        options
      },
      beginUpdateTagsOperationSpec,
      options);
  }

  /**
   * Gets all the public IP addresses in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPAddressesListAllNextResponse>
   */
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressesListAllNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PublicIPAddressListResult>, callback?: msRest.ServiceCallback<Models.PublicIPAddressListResult>): Promise<Models.PublicIPAddressesListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.PublicIPAddressesListAllNextResponse>;
  }

  /**
   * Gets all public IP addresses in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PublicIPAddressesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PublicIPAddressListResult>, callback?: msRest.ServiceCallback<Models.PublicIPAddressListResult>): Promise<Models.PublicIPAddressesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.PublicIPAddressesListNextResponse>;
  }

  /**
   * Gets information about all public IP addresses on a virtual machine scale set level.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns
   * Promise<Models.PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesNextResponse>
   */
  listVirtualMachineScaleSetPublicIPAddressesNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listVirtualMachineScaleSetPublicIPAddressesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listVirtualMachineScaleSetPublicIPAddressesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  listVirtualMachineScaleSetPublicIPAddressesNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PublicIPAddressListResult>, callback?: msRest.ServiceCallback<Models.PublicIPAddressListResult>): Promise<Models.PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listVirtualMachineScaleSetPublicIPAddressesNextOperationSpec,
      callback) as Promise<Models.PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesNextResponse>;
  }

  /**
   * Gets information about all public IP addresses in a virtual machine IP configuration in a
   * virtual machine scale set.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns
   * Promise<Models.PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesNextResponse>
   */
  listVirtualMachineScaleSetVMPublicIPAddressesNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listVirtualMachineScaleSetVMPublicIPAddressesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listVirtualMachineScaleSetVMPublicIPAddressesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PublicIPAddressListResult>): void;
  listVirtualMachineScaleSetVMPublicIPAddressesNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PublicIPAddressListResult>, callback?: msRest.ServiceCallback<Models.PublicIPAddressListResult>): Promise<Models.PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listVirtualMachineScaleSetVMPublicIPAddressesNextOperationSpec,
      callback) as Promise<Models.PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses/{publicIpAddressName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.publicIpAddressName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddress
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/publicIPAddresses",
  urlParameters: [
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
      bodyMapper: Mappers.PublicIPAddressListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses",
  urlParameters: [
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.PublicIPAddressListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listVirtualMachineScaleSetPublicIPAddressesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/publicipaddresses",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualMachineScaleSetName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddressListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listVirtualMachineScaleSetVMPublicIPAddressesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces/{networkInterfaceName}/ipconfigurations/{ipConfigurationName}/publicipaddresses",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualMachineScaleSetName,
    Parameters.virtualmachineIndex,
    Parameters.networkInterfaceName,
    Parameters.ipConfigurationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddressListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getVirtualMachineScaleSetPublicIPAddressOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces/{networkInterfaceName}/ipconfigurations/{ipConfigurationName}/publicipaddresses/{publicIpAddressName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.virtualMachineScaleSetName,
    Parameters.virtualmachineIndex,
    Parameters.networkInterfaceName,
    Parameters.ipConfigurationName,
    Parameters.publicIpAddressName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddress
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses/{publicIpAddressName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.publicIpAddressName,
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses/{publicIpAddressName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.publicIpAddressName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.PublicIPAddress,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddress
    },
    201: {
      bodyMapper: Mappers.PublicIPAddress
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/publicIPAddresses/{publicIpAddressName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.publicIpAddressName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PublicIPAddress
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.PublicIPAddressListResult
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
      bodyMapper: Mappers.PublicIPAddressListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listVirtualMachineScaleSetPublicIPAddressesNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.PublicIPAddressListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listVirtualMachineScaleSetVMPublicIPAddressesNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.PublicIPAddressListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
