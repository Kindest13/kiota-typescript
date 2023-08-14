import {InferenceClassificationOverrideCollectionResponse} from '../../../../models/';
import {createInferenceClassificationOverrideCollectionResponseFromDiscriminatorValue} from '../../../../models/createInferenceClassificationOverrideCollectionResponseFromDiscriminatorValue';
import {createInferenceClassificationOverrideFromDiscriminatorValue} from '../../../../models/createInferenceClassificationOverrideFromDiscriminatorValue';
import {deserializeIntoInferenceClassificationOverride} from '../../../../models/deserializeIntoInferenceClassificationOverride';
import type {InferenceClassificationOverride} from '../../../../models/inferenceClassificationOverride';
import {serializeInferenceClassificationOverride} from '../../../../models/serializeInferenceClassificationOverride';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {InferenceClassificationOverrideItemRequestBuilder} from './item/inferenceClassificationOverrideItemRequestBuilder';
import {OverridesRequestBuilderGetRequestConfiguration} from './overridesRequestBuilderGetRequestConfiguration';
import {OverridesRequestBuilderPostRequestConfiguration} from './overridesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/inferenceClassification/overrides
 */
export class OverridesRequestBuilder extends BaseRequestBuilder {
    /**
     * The Count property
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the ApiSdk.users.item.inferenceClassification.overrides.item collection
     * @param inferenceClassificationOverrideId The unique identifier of inferenceClassificationOverride
     * @returns a InferenceClassificationOverrideItemRequestBuilder
     */
    public byInferenceClassificationOverrideId(inferenceClassificationOverrideId: string) : InferenceClassificationOverrideItemRequestBuilder {
        if(!inferenceClassificationOverrideId) throw new Error("inferenceClassificationOverrideId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["inferenceClassificationOverride%2Did"] = inferenceClassificationOverrideId
        return new InferenceClassificationOverrideItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new OverridesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/inferenceClassification/overrides{?%24top,%24skip,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * Get the overrides that a user has set up to always classify messages from certain senders in specific ways. Each override corresponds to an SMTP address of a sender. Initially, a user does not have any overrides.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InferenceClassificationOverrideCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/inferenceclassification-list-overrides?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: OverridesRequestBuilderGetRequestConfiguration | undefined) : Promise<InferenceClassificationOverrideCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter.sendAsync<InferenceClassificationOverrideCollectionResponse>(requestInfo, createInferenceClassificationOverrideCollectionResponseFromDiscriminatorValue, undefined);
    };
    /**
     * Create an override for a sender identified by an SMTP address. Future messages from that SMTP address will be consistently classifiedas specified in the override. Note
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InferenceClassificationOverride
     * @see {@link https://learn.microsoft.com/graph/api/inferenceclassification-post-overrides?view=graph-rest-1.0|Find more info here}
     */
    public post(body: InferenceClassificationOverride, requestConfiguration?: OverridesRequestBuilderPostRequestConfiguration | undefined) : Promise<InferenceClassificationOverride | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter.sendAsync<InferenceClassificationOverride>(requestInfo, createInferenceClassificationOverrideFromDiscriminatorValue, undefined);
    };
    /**
     * Get the overrides that a user has set up to always classify messages from certain senders in specific ways. Each override corresponds to an SMTP address of a sender. Initially, a user does not have any overrides.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OverridesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create an override for a sender identified by an SMTP address. Future messages from that SMTP address will be consistently classifiedas specified in the override. Note
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: InferenceClassificationOverride, requestConfiguration?: OverridesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeInferenceClassificationOverride);
        return requestInfo;
    };
}
