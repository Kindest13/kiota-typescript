import {MultiValueLegacyExtendedPropertyCollectionResponse} from '../../../../../../../../../models/';
import {createMultiValueLegacyExtendedPropertyCollectionResponseFromDiscriminatorValue} from '../../../../../../../../../models/createMultiValueLegacyExtendedPropertyCollectionResponseFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from '../../../../../../../../../models/createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {deserializeIntoMultiValueLegacyExtendedProperty} from '../../../../../../../../../models/deserializeIntoMultiValueLegacyExtendedProperty';
import {MultiValueLegacyExtendedProperty} from '../../../../../../../../../models/multiValueLegacyExtendedProperty';
import {serializeMultiValueLegacyExtendedProperty} from '../../../../../../../../../models/serializeMultiValueLegacyExtendedProperty';
import {MultiValueLegacyExtendedPropertyItemRequestBuilder} from './item/multiValueLegacyExtendedPropertyItemRequestBuilder';
import {MultiValueExtendedPropertiesRequestBuilderGetRequestConfiguration} from './multiValueExtendedPropertiesRequestBuilderGetRequestConfiguration';
import {MultiValueExtendedPropertiesRequestBuilderPostRequestConfiguration} from './multiValueExtendedPropertiesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/multiValueExtendedProperties
 */
export class MultiValueExtendedPropertiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.users.item.mailFolders.item.childFolders.item.messages.item.multiValueExtendedProperties.item collection
     * @param multiValueLegacyExtendedPropertyId Unique identifier of the item
     * @returns a MultiValueLegacyExtendedPropertyItemRequestBuilder
     */
    public byMultiValueLegacyExtendedPropertyId(multiValueLegacyExtendedPropertyId: string) : MultiValueLegacyExtendedPropertyItemRequestBuilder {
        if(!multiValueLegacyExtendedPropertyId) throw new Error("multiValueLegacyExtendedPropertyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["multiValueLegacyExtendedProperty%2Did"] = multiValueLegacyExtendedPropertyId
        return new MultiValueLegacyExtendedPropertyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MultiValueExtendedPropertiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messages/{message%2Did}/multiValueExtendedProperties{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The collection of multi-value extended properties defined for the message. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MultiValueLegacyExtendedPropertyCollectionResponse
     */
    public get(requestConfiguration?: MultiValueExtendedPropertiesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MultiValueLegacyExtendedPropertyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<MultiValueLegacyExtendedPropertyCollectionResponse>(requestInfo, createMultiValueLegacyExtendedPropertyCollectionResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to multiValueExtendedProperties for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of MultiValueLegacyExtendedProperty
     */
    public post(body: MultiValueLegacyExtendedProperty | undefined, requestConfiguration?: MultiValueExtendedPropertiesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<MultiValueLegacyExtendedProperty | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<MultiValueLegacyExtendedProperty>(requestInfo, createMultiValueLegacyExtendedPropertyFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The collection of multi-value extended properties defined for the message. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MultiValueExtendedPropertiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Create new navigation property to multiValueExtendedProperties for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MultiValueLegacyExtendedProperty | undefined, requestConfiguration?: MultiValueExtendedPropertiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeMultiValueLegacyExtendedProperty);
        return requestInfo;
    };
}
