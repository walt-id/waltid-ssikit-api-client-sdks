/**
 * walt.id Auditor API
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
 * @param overallStatus 
 * @param policyResults 
 */

data class VerificationResult (

    @Json(name = "overallStatus")
    val overallStatus: kotlin.Boolean,

    @Json(name = "policyResults")
    val policyResults: kotlin.collections.Map<kotlin.String, kotlin.Boolean>

)

