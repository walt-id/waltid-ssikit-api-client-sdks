/**
 * walt.id Core API
 *
 * The walt.id public API documentation
 *
 * The version of the OpenAPI document: 1.1-SNAPSHOT
 * Contact: office@walt.id
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package org.openapitools.client.models


import com.squareup.moshi.Json

/**
 * 
 *
 * @param vc 
 * @param holderDid 
 * @param domain 
 * @param challenge 
 */

data class PresentVcRequest (

    @Json(name = "vc")
    val vc: kotlin.String,

    @Json(name = "holderDid")
    val holderDid: kotlin.String,

    @Json(name = "domain")
    val domain: kotlin.String? = null,

    @Json(name = "challenge")
    val challenge: kotlin.String? = null

)
