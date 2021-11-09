import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { GenerateKeyRequest } from '../models/GenerateKeyRequest';
import { StoreCredentialRequest } from '../models/StoreCredentialRequest';
import { VerifiableCredential } from '../models/VerifiableCredential';
import { ObservableCredentialsApi } from './ObservableAPI';

import { CredentialsApiRequestFactory, CredentialsApiResponseProcessor} from "../apis/CredentialsApi";
export class PromiseCredentialsApi {
    private api: ObservableCredentialsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CredentialsApiRequestFactory,
        responseProcessor?: CredentialsApiResponseProcessor
    ) {
        this.api = new ObservableCredentialsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a specific credential by alias
     * @param alias 
     */
    public deleteCredential(alias: string, _options?: Configuration): Promise<string> {
        const result = this.api.deleteCredential(alias, _options);
        return result.toPromise();
    }

    /**
     * Gets a specific Credential by id
     * @param id 
     */
    public getCredential(id: string, _options?: Configuration): Promise<string> {
        const result = this.api.getCredential(id, _options);
        return result.toPromise();
    }

    /**
     * Lists all credential IDs the custodian knows of
     */
    public listCredentialIds(_options?: Configuration): Promise<string> {
        const result = this.api.listCredentialIds(_options);
        return result.toPromise();
    }

    /**
     * Lists all credentials the custodian knows of
     * @param id 
     */
    public listCredentials(id?: Array<string>, _options?: Configuration): Promise<string> {
        const result = this.api.listCredentials(id, _options);
        return result.toPromise();
    }

    /**
     * Stores a credential
     * @param alias 
     * @param storeCredentialRequest Store Credential Request
     */
    public storeCredential(alias: string, storeCredentialRequest?: StoreCredentialRequest, _options?: Configuration): Promise<string> {
        const result = this.api.storeCredential(alias, storeCredentialRequest, _options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get apiRoutes
     */
    public getApiRoutes(_options?: Configuration): Promise<void> {
        const result = this.api.getApiRoutes(_options);
        return result.toPromise();
    }

    /**
     * Returns HTTP 200 in case all services are up and running
     */
    public health(_options?: Configuration): Promise<string> {
        const result = this.api.health(_options);
        return result.toPromise();
    }


}



import { ObservableKeysApi } from './ObservableAPI';

import { KeysApiRequestFactory, KeysApiResponseProcessor} from "../apis/KeysApi";
export class PromiseKeysApi {
    private api: ObservableKeysApi

    public constructor(
        configuration: Configuration,
        requestFactory?: KeysApiRequestFactory,
        responseProcessor?: KeysApiResponseProcessor
    ) {
        this.api = new ObservableKeysApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a specific key
     * @param id 
     */
    public deleteKey(id: string, _options?: Configuration): Promise<string> {
        const result = this.api.deleteKey(id, _options);
        return result.toPromise();
    }

    /**
     * Generates a key with a specific key algorithm
     * @param generateKeyRequest Generate Key Request
     */
    public generateKey(generateKeyRequest?: GenerateKeyRequest, _options?: Configuration): Promise<string> {
        const result = this.api.generateKey(generateKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * Gets a key specified by its alias
     * @param alias 
     */
    public getKey(alias: string, _options?: Configuration): Promise<string> {
        const result = this.api.getKey(alias, _options);
        return result.toPromise();
    }

    /**
     * Lists all keys the custodian knows of
     */
    public listKeys(_options?: Configuration): Promise<string> {
        const result = this.api.listKeys(_options);
        return result.toPromise();
    }

    /**
     * Stores a key
     */
    public storeKey(_options?: Configuration): Promise<string> {
        const result = this.api.storeKey(_options);
        return result.toPromise();
    }


}



