/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { NewsSearchAPIClientContext } from "./newsSearchAPIClientContext";

class NewsSearchAPIClient extends NewsSearchAPIClientContext {
  // Operation groups
  news: operations.NewsOperations;

  /**
   * Initializes a new instance of the NewsSearchAPIClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.NewsSearchAPIClientOptions) {
    super(credentials, options);
    this.news = new operations.NewsOperations(this);
  }
}

// Operation Specifications

export {
  NewsSearchAPIClient,
  NewsSearchAPIClientContext,
  Models as NewsSearchAPIModels,
  Mappers as NewsSearchAPIMappers
};
export * from "./operations";