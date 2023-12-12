// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError, type ODataError } from '../../../../../../../../models/oDataErrors/';
import { RequestInformation, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestAdapter, type RequestConfiguration, type RequestMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/messages/{message-id}/attachments/$count
 */
export interface CountRequestBuilder extends BaseRequestBuilder<CountRequestBuilder> {
    /**
     * Get the number of the resource
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Integer
     */
     get(requestConfiguration?: RequestConfiguration<CountRequestBuilderGetQueryParameters> | undefined) : Promise<number | undefined>;
    /**
     * Get the number of the resource
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CountRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the number of the resource
 */
export interface CountRequestBuilderGetQueryParameters {
    /**
     * Filter items by property values
     */
    filter?: string;
}
const CountRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "filter": "%24filter",
};
export const CountRequestBuilderRequestsMetadata: Record<string, RequestMetadata> = {
    "get": {
        errorMappings: {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>,
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "number",
        queryParametersMapper: CountRequestBuilderGetQueryParametersMapper,
    },
};
export const CountRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/messages/{message%2Did}/attachments/$count{?%24filter}";
// tslint:enable
// eslint-enable
