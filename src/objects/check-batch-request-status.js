/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * CheckBatchRequestStatus
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CheckBatchRequestStatus extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      errors: 'errors',
      errors_total_count: 'errors_total_count',
      handle: 'handle',
      invalid_item_ids: 'invalid_item_ids',
      status: 'status',
      id: 'id'
    });
  }
}
