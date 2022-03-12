/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = GraphQLTypes["Job"] | GraphQLTypes["Node"] | GraphQLTypes["ObjectWithMetadata"]
type ZEUS_UNIONS = GraphQLTypes["_Entity"] | GraphQLTypes["DeliveryMethod"] | GraphQLTypes["TranslatableItem"]

export type ValueTypes = {
    /** _Any value scalar as defined by Federation spec. */
["_Any"]:unknown;
	/** _Entity union as defined by Federation spec. */
["_Entity"]: AliasType<{		["...on App"] : ValueTypes["App"],
		["...on Address"] : ValueTypes["Address"],
		["...on User"] : ValueTypes["User"],
		["...on Group"] : ValueTypes["Group"],
		["...on ProductVariant"] : ValueTypes["ProductVariant"],
		["...on Product"] : ValueTypes["Product"],
		["...on ProductType"] : ValueTypes["ProductType"],
		["...on Collection"] : ValueTypes["Collection"],
		["...on Category"] : ValueTypes["Category"],
		["...on ProductMedia"] : ValueTypes["ProductMedia"],
		["...on PageType"] : ValueTypes["PageType"]
		__typename?: boolean
}>;
	/** _Service manifest as defined by Federation spec. */
["_Service"]: AliasType<{
	sdl?:boolean,
		__typename?: boolean
}>;
	/** Create a new address for the customer. */
["AccountAddressCreate"]: AliasType<{
	/** A user instance for which the address was created. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
	address?:ValueTypes["Address"],
		__typename?: boolean
}>;
	/** Delete an address of the logged-in user. */
["AccountAddressDelete"]: AliasType<{
	/** A user instance for which the address was deleted. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
	address?:ValueTypes["Address"],
		__typename?: boolean
}>;
	/** Updates an address of the logged-in user. */
["AccountAddressUpdate"]: AliasType<{
	/** A user object for which the address was edited. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
	address?:ValueTypes["Address"],
		__typename?: boolean
}>;
	/** Remove user account. */
["AccountDelete"]: AliasType<{
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	["AccountError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** A type of address that causes the error. */
	addressType?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["AccountErrorCode"]:AccountErrorCode;
	["AccountInput"]: {
	/** Given name. */
	firstName?:string | null,
	/** Family name. */
	lastName?:string | null,
	/** User language code. */
	languageCode?:ValueTypes["LanguageCodeEnum"] | null,
	/** Billing address of the customer. */
	defaultBillingAddress?:ValueTypes["AddressInput"] | null,
	/** Shipping address of the customer. */
	defaultShippingAddress?:ValueTypes["AddressInput"] | null
};
	/** Register a new user. */
["AccountRegister"]: AliasType<{
	/** Informs whether users need to confirm their email address. */
	requiresConfirmation?:boolean,
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	["AccountRegisterInput"]: {
	/** Given name. */
	firstName?:string | null,
	/** Family name. */
	lastName?:string | null,
	/** User language code. */
	languageCode?:ValueTypes["LanguageCodeEnum"] | null,
	/** The email address of the user. */
	email:string,
	/** Password. */
	password:string,
	/** Base of frontend URL that will be needed to create confirmation URL. */
	redirectUrl?:string | null,
	/** User public metadata. */
	metadata?:ValueTypes["MetadataInput"][],
	/** Slug of a channel which will be used to notify users. Optional when only one channel exists. */
	channel?:string | null
};
	/** Sends an email with the account removal link for the logged-in user. */
["AccountRequestDeletion"]: AliasType<{
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** Sets a default address for the authenticated user. */
["AccountSetDefaultAddress"]: AliasType<{
	/** An updated user instance. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** Updates the account of the logged-in user. */
["AccountUpdate"]: AliasType<{
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	/** Represents user address data. */
["Address"]: AliasType<{
	id?:boolean,
	firstName?:boolean,
	lastName?:boolean,
	companyName?:boolean,
	streetAddress1?:boolean,
	streetAddress2?:boolean,
	city?:boolean,
	cityArea?:boolean,
	postalCode?:boolean,
	/** Shop's default country. */
	country?:ValueTypes["CountryDisplay"],
	countryArea?:boolean,
	phone?:boolean,
	/** Address is user's default shipping address. */
	isDefaultShippingAddress?:boolean,
	/** Address is user's default billing address. */
	isDefaultBillingAddress?:boolean,
		__typename?: boolean
}>;
	/** Creates user address. */
["AddressCreate"]: AliasType<{
	/** A user instance for which the address was created. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
	address?:ValueTypes["Address"],
		__typename?: boolean
}>;
	/** Deletes an address. */
["AddressDelete"]: AliasType<{
	/** A user instance for which the address was deleted. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
	address?:ValueTypes["Address"],
		__typename?: boolean
}>;
	["AddressInput"]: {
	/** Given name. */
	firstName?:string | null,
	/** Family name. */
	lastName?:string | null,
	/** Company or organization. */
	companyName?:string | null,
	/** Address. */
	streetAddress1?:string | null,
	/** Address. */
	streetAddress2?:string | null,
	/** City. */
	city?:string | null,
	/** District. */
	cityArea?:string | null,
	/** Postal code. */
	postalCode?:string | null,
	/** Country. */
	country?:ValueTypes["CountryCode"] | null,
	/** State or province. */
	countryArea?:string | null,
	/** Phone number. */
	phone?:string | null
};
	/** Sets a default address for the given user. */
["AddressSetDefault"]: AliasType<{
	/** An updated user instance. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** An enumeration. */
["AddressTypeEnum"]:AddressTypeEnum;
	/** Updates an address. */
["AddressUpdate"]: AliasType<{
	/** A user object for which the address was edited. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
	address?:ValueTypes["Address"],
		__typename?: boolean
}>;
	["AddressValidationData"]: AliasType<{
	countryCode?:boolean,
	countryName?:boolean,
	addressFormat?:boolean,
	addressLatinFormat?:boolean,
	allowedFields?:boolean,
	requiredFields?:boolean,
	upperFields?:boolean,
	countryAreaType?:boolean,
	countryAreaChoices?:ValueTypes["ChoiceValue"],
	cityType?:boolean,
	cityChoices?:ValueTypes["ChoiceValue"],
	cityAreaType?:boolean,
	cityAreaChoices?:ValueTypes["ChoiceValue"],
	postalCodeType?:boolean,
	postalCodeMatchers?:boolean,
	postalCodeExamples?:boolean,
	postalCodePrefix?:boolean,
		__typename?: boolean
}>;
	/** Represents allocation. */
["Allocation"]: AliasType<{
	id?:boolean,
	/** Quantity allocated for orders. */
	quantity?:boolean,
	/** The warehouse were items were allocated. */
	warehouse?:ValueTypes["Warehouse"],
		__typename?: boolean
}>;
	/** Represents app data. */
["App"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	/** List of the app's permissions. */
	permissions?:ValueTypes["Permission"],
	/** The date and time when the app was created. */
	created?:boolean,
	/** Determine if app will be set active or not. */
	isActive?:boolean,
	/** Name of the app. */
	name?:boolean,
	/** Type of the app. */
	type?:boolean,
	/** Last 4 characters of the tokens. */
	tokens?:ValueTypes["AppToken"],
	/** List of webhooks assigned to this app. */
	webhooks?:ValueTypes["Webhook"],
	/** Description of this app. */
	aboutApp?:boolean,
	/** Description of the data privacy defined for this app. */
	dataPrivacy?:boolean,
	/** Url to details about the privacy policy on the app owner page. */
	dataPrivacyUrl?:boolean,
	/** Homepage of the app. */
	homepageUrl?:boolean,
	/** Support page for the app. */
	supportUrl?:boolean,
	/** Url to iframe with the configuration for the app. */
	configurationUrl?:boolean,
	/** Url to iframe with the app. */
	appUrl?:boolean,
	/** Version number of the app. */
	version?:boolean,
	/** JWT token used to authenticate by thridparty app. */
	accessToken?:boolean,
	/** New in Saleor 3.1. App's dashboard extensions. Note: this feature is in a
preview state and can be subject to changes at later point. */
	extensions?:ValueTypes["AppExtension"],
		__typename?: boolean
}>;
	/** Activate the app. */
["AppActivate"]: AliasType<{
	appErrors?:ValueTypes["AppError"],
	errors?:ValueTypes["AppError"],
	app?:ValueTypes["App"],
		__typename?: boolean
}>;
	["AppCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["AppCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["AppCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["App"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates a new app. */
["AppCreate"]: AliasType<{
	/** The newly created authentication token. */
	authToken?:boolean,
	appErrors?:ValueTypes["AppError"],
	errors?:ValueTypes["AppError"],
	app?:ValueTypes["App"],
		__typename?: boolean
}>;
	/** Deactivate the app. */
["AppDeactivate"]: AliasType<{
	appErrors?:ValueTypes["AppError"],
	errors?:ValueTypes["AppError"],
	app?:ValueTypes["App"],
		__typename?: boolean
}>;
	/** Deletes an app. */
["AppDelete"]: AliasType<{
	appErrors?:ValueTypes["AppError"],
	errors?:ValueTypes["AppError"],
	app?:ValueTypes["App"],
		__typename?: boolean
}>;
	/** Delete failed installation. */
["AppDeleteFailedInstallation"]: AliasType<{
	appErrors?:ValueTypes["AppError"],
	errors?:ValueTypes["AppError"],
	appInstallation?:ValueTypes["AppInstallation"],
		__typename?: boolean
}>;
	["AppError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** List of permissions which causes the error. */
	permissions?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["AppErrorCode"]:AppErrorCode;
	/** Represents app data. */
["AppExtension"]: AliasType<{
	id?:boolean,
	/** List of the app extension's permissions. */
	permissions?:ValueTypes["Permission"],
	/** Label of the extension to show in the dashboard. */
	label?:boolean,
	/** URL of a view where extension's iframe is placed. */
	url?:boolean,
	/** Place where given extension will be mounted. */
	mount?:boolean,
	/** Type of way how app extension will be opened. */
	target?:boolean,
	app?:ValueTypes["App"],
	/** JWT token used to authenticate by thridparty app extension. */
	accessToken?:boolean,
		__typename?: boolean
}>;
	["AppExtensionCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["AppExtensionCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["AppExtensionCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["AppExtension"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["AppExtensionFilterInput"]: {
	mount?:(ValueTypes["AppExtensionMountEnum"] | undefined | null)[],
	target?:ValueTypes["AppExtensionTargetEnum"] | null
};
	/** All places where app extension can be mounted. */
["AppExtensionMountEnum"]:AppExtensionMountEnum;
	/** All available ways of opening an app extension.

    POPUP - app's extension will be mounted as a popup window
    APP_PAGE - redirect to app's page */
["AppExtensionTargetEnum"]:AppExtensionTargetEnum;
	/** Fetch and validate manifest. */
["AppFetchManifest"]: AliasType<{
	manifest?:ValueTypes["Manifest"],
	appErrors?:ValueTypes["AppError"],
	errors?:ValueTypes["AppError"],
		__typename?: boolean
}>;
	["AppFilterInput"]: {
	search?:string | null,
	isActive?:boolean | null,
	type?:ValueTypes["AppTypeEnum"] | null
};
	["AppInput"]: {
	/** Name of the app. */
	name?:string | null,
	/** List of permission code names to assign to this app. */
	permissions?:(ValueTypes["PermissionEnum"] | undefined | null)[]
};
	/** Install new app by using app manifest. */
["AppInstall"]: AliasType<{
	appErrors?:ValueTypes["AppError"],
	errors?:ValueTypes["AppError"],
	appInstallation?:ValueTypes["AppInstallation"],
		__typename?: boolean
}>;
	/** Represents ongoing installation of app. */
["AppInstallation"]: AliasType<{
	id?:boolean,
	/** Job status. */
	status?:boolean,
	/** Created date time of job in ISO 8601 format. */
	createdAt?:boolean,
	/** Date time of job last update in ISO 8601 format. */
	updatedAt?:boolean,
	/** Job message. */
	message?:boolean,
	appName?:boolean,
	manifestUrl?:boolean,
		__typename?: boolean
}>;
	["AppInstallInput"]: {
	/** Name of the app to install. */
	appName?:string | null,
	/** Url to app's manifest in JSON format. */
	manifestUrl?:string | null,
	/** Determine if app will be set active or not. */
	activateAfterInstallation?:boolean | null,
	/** List of permission code names to assign to this app. */
	permissions?:(ValueTypes["PermissionEnum"] | undefined | null)[]
};
	["AppManifestExtension"]: AliasType<{
	/** List of the app extension's permissions. */
	permissions?:ValueTypes["Permission"],
	/** Label of the extension to show in the dashboard. */
	label?:boolean,
	/** URL of a view where extension's iframe is placed. */
	url?:boolean,
	/** Place where given extension will be mounted. */
	mount?:boolean,
	/** Type of way how app extension will be opened. */
	target?:boolean,
		__typename?: boolean
}>;
	/** Retry failed installation of new app. */
["AppRetryInstall"]: AliasType<{
	appErrors?:ValueTypes["AppError"],
	errors?:ValueTypes["AppError"],
	appInstallation?:ValueTypes["AppInstallation"],
		__typename?: boolean
}>;
	["AppSortField"]:AppSortField;
	["AppSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort apps by the selected field. */
	field:ValueTypes["AppSortField"]
};
	/** Represents token data. */
["AppToken"]: AliasType<{
	id?:boolean,
	/** Name of the authenticated token. */
	name?:boolean,
	/** Last 4 characters of the token. */
	authToken?:boolean,
		__typename?: boolean
}>;
	/** Creates a new token. */
["AppTokenCreate"]: AliasType<{
	/** The newly created authentication token. */
	authToken?:boolean,
	appErrors?:ValueTypes["AppError"],
	errors?:ValueTypes["AppError"],
	appToken?:ValueTypes["AppToken"],
		__typename?: boolean
}>;
	/** Deletes an authentication token assigned to app. */
["AppTokenDelete"]: AliasType<{
	appErrors?:ValueTypes["AppError"],
	errors?:ValueTypes["AppError"],
	appToken?:ValueTypes["AppToken"],
		__typename?: boolean
}>;
	["AppTokenInput"]: {
	/** Name of the token. */
	name?:string | null,
	/** ID of app. */
	app:string
};
	/** Verify provided app token. */
["AppTokenVerify"]: AliasType<{
	/** Determine if token is valid or not. */
	valid?:boolean,
	appErrors?:ValueTypes["AppError"],
	errors?:ValueTypes["AppError"],
		__typename?: boolean
}>;
	/** Enum determining type of your App. */
["AppTypeEnum"]:AppTypeEnum;
	/** Updates an existing app. */
["AppUpdate"]: AliasType<{
	appErrors?:ValueTypes["AppError"],
	errors?:ValueTypes["AppError"],
	app?:ValueTypes["App"],
		__typename?: boolean
}>;
	/** An enumeration. */
["AreaUnitsEnum"]:AreaUnitsEnum;
	/** New in Saleor 3.1. Represents assigned attribute to variant with variant selection attached. */
["AssignedVariantAttribute"]: AliasType<{
	/** Attribute assigned to variant. */
	attribute?:ValueTypes["Attribute"],
	/** Determines, whether assigned attribute is allowed for variant selection.
Supported variant types for variant selection are: ['dropdown', 'boolean',
'swatch', 'numeric'] */
	variantSelection?:boolean,
		__typename?: boolean
}>;
	/** Assigns storefront's navigation menus. */
["AssignNavigation"]: AliasType<{
	/** Assigned navigation menu. */
	menu?:ValueTypes["Menu"],
	menuErrors?:ValueTypes["MenuError"],
	errors?:ValueTypes["MenuError"],
		__typename?: boolean
}>;
	/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
["Attribute"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	/** The input type to use for entering attribute values in the dashboard. */
	inputType?:boolean,
	/** The entity type which can be used as a reference. */
	entityType?:boolean,
	/** Name of an attribute displayed in the interface. */
	name?:boolean,
	/** Internal representation of an attribute name. */
	slug?:boolean,
	/** The attribute type. */
	type?:boolean,
	/** The unit of attribute values. */
	unit?:boolean,
choices?: [{	/** Sort attribute choices. */
	sortBy?:ValueTypes["AttributeChoicesSortingInput"] | null,	/** Filtering options for attribute choices. */
	filter?:ValueTypes["AttributeValueFilterInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["AttributeValueCountableConnection"]],
	/** Whether the attribute requires values to be passed or not. */
	valueRequired?:boolean,
	/** Whether the attribute should be visible or not in storefront. */
	visibleInStorefront?:boolean,
	/** Whether the attribute can be filtered in storefront. */
	filterableInStorefront?:boolean,
	/** Whether the attribute can be filtered in dashboard. */
	filterableInDashboard?:boolean,
	/** Whether the attribute can be displayed in the admin product list. */
	availableInGrid?:boolean,
translation?: [{	/** A language code to return the translation for attribute. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["AttributeTranslation"]],
	/** The position of the attribute in the storefront navigation (0 by default). */
	storefrontSearchPosition?:boolean,
	/** Flag indicating that attribute has predefined choices. */
	withChoices?:boolean,
productTypes?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ProductTypeCountableConnection"]],
productVariantTypes?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ProductTypeCountableConnection"]],
		__typename?: boolean
}>;
	/** Deletes attributes. */
["AttributeBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	attributeErrors?:ValueTypes["AttributeError"],
	errors?:ValueTypes["AttributeError"],
		__typename?: boolean
}>;
	["AttributeChoicesSortField"]:AttributeChoicesSortField;
	["AttributeChoicesSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort attribute choices by the selected field. */
	field:ValueTypes["AttributeChoicesSortField"]
};
	["AttributeCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["AttributeCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["AttributeCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["Attribute"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates an attribute. */
["AttributeCreate"]: AliasType<{
	attribute?:ValueTypes["Attribute"],
	attributeErrors?:ValueTypes["AttributeError"],
	errors?:ValueTypes["AttributeError"],
		__typename?: boolean
}>;
	["AttributeCreateInput"]: {
	/** The input type to use for entering attribute values in the dashboard. */
	inputType?:ValueTypes["AttributeInputTypeEnum"] | null,
	/** The entity type which can be used as a reference. */
	entityType?:ValueTypes["AttributeEntityTypeEnum"] | null,
	/** Name of an attribute displayed in the interface. */
	name:string,
	/** Internal representation of an attribute name. */
	slug?:string | null,
	/** The attribute type. */
	type:ValueTypes["AttributeTypeEnum"],
	/** The unit of attribute values. */
	unit?:ValueTypes["MeasurementUnitsEnum"] | null,
	/** List of attribute's values. */
	values?:(ValueTypes["AttributeValueCreateInput"] | undefined | null)[],
	/** Whether the attribute requires values to be passed or not. */
	valueRequired?:boolean | null,
	/** Whether the attribute is for variants only. */
	isVariantOnly?:boolean | null,
	/** Whether the attribute should be visible or not in storefront. */
	visibleInStorefront?:boolean | null,
	/** Whether the attribute can be filtered in storefront. */
	filterableInStorefront?:boolean | null,
	/** Whether the attribute can be filtered in dashboard. */
	filterableInDashboard?:boolean | null,
	/** The position of the attribute in the storefront navigation (0 by default). */
	storefrontSearchPosition?:number | null,
	/** Whether the attribute can be displayed in the admin product list. */
	availableInGrid?:boolean | null
};
	/** Deletes an attribute. */
["AttributeDelete"]: AliasType<{
	attributeErrors?:ValueTypes["AttributeError"],
	errors?:ValueTypes["AttributeError"],
	attribute?:ValueTypes["Attribute"],
		__typename?: boolean
}>;
	/** An enumeration. */
["AttributeEntityTypeEnum"]:AttributeEntityTypeEnum;
	["AttributeError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["AttributeErrorCode"]:AttributeErrorCode;
	["AttributeFilterInput"]: {
	valueRequired?:boolean | null,
	isVariantOnly?:boolean | null,
	visibleInStorefront?:boolean | null,
	filterableInStorefront?:boolean | null,
	filterableInDashboard?:boolean | null,
	availableInGrid?:boolean | null,
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[],
	search?:string | null,
	ids?:(string | undefined | null)[],
	type?:ValueTypes["AttributeTypeEnum"] | null,
	inCollection?:string | null,
	inCategory?:string | null,
	/** Specifies the channel by which the data should be filtered. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?:string | null
};
	["AttributeInput"]: {
	/** Internal representation of an attribute name. */
	slug:string,
	/** Internal representation of a value (unique per attribute). */
	values?:(string | undefined | null)[],
	/** The range that the returned values should be in. */
	valuesRange?:ValueTypes["IntRangeInput"] | null,
	/** The date time range that the returned values should be in. */
	dateTime?:ValueTypes["DateTimeRangeInput"] | null,
	/** The date range that the returned values should be in. */
	date?:ValueTypes["DateRangeInput"] | null,
	/** The boolean value of the attribute. */
	boolean?:boolean | null
};
	/** An enumeration. */
["AttributeInputTypeEnum"]:AttributeInputTypeEnum;
	/** Reorder the values of an attribute. */
["AttributeReorderValues"]: AliasType<{
	/** Attribute from which values are reordered. */
	attribute?:ValueTypes["Attribute"],
	attributeErrors?:ValueTypes["AttributeError"],
	errors?:ValueTypes["AttributeError"],
		__typename?: boolean
}>;
	["AttributeSortField"]:AttributeSortField;
	["AttributeSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort attributes by the selected field. */
	field:ValueTypes["AttributeSortField"]
};
	["AttributeTranslatableContent"]: AliasType<{
	id?:boolean,
	name?:boolean,
translation?: [{	/** A language code to return the translation for attribute. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["AttributeTranslation"]],
	/** Custom attribute of a product. */
	attribute?:ValueTypes["Attribute"],
		__typename?: boolean
}>;
	/** Creates/updates translations for an attribute. */
["AttributeTranslate"]: AliasType<{
	translationErrors?:ValueTypes["TranslationError"],
	errors?:ValueTypes["TranslationError"],
	attribute?:ValueTypes["Attribute"],
		__typename?: boolean
}>;
	["AttributeTranslation"]: AliasType<{
	id?:boolean,
	/** Translation language. */
	language?:ValueTypes["LanguageDisplay"],
	name?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["AttributeTypeEnum"]:AttributeTypeEnum;
	/** Updates attribute. */
["AttributeUpdate"]: AliasType<{
	attribute?:ValueTypes["Attribute"],
	attributeErrors?:ValueTypes["AttributeError"],
	errors?:ValueTypes["AttributeError"],
		__typename?: boolean
}>;
	["AttributeUpdateInput"]: {
	/** Name of an attribute displayed in the interface. */
	name?:string | null,
	/** Internal representation of an attribute name. */
	slug?:string | null,
	/** The unit of attribute values. */
	unit?:ValueTypes["MeasurementUnitsEnum"] | null,
	/** IDs of values to be removed from this attribute. */
	removeValues?:(string | undefined | null)[],
	/** New values to be created for this attribute. */
	addValues?:(ValueTypes["AttributeValueUpdateInput"] | undefined | null)[],
	/** Whether the attribute requires values to be passed or not. */
	valueRequired?:boolean | null,
	/** Whether the attribute is for variants only. */
	isVariantOnly?:boolean | null,
	/** Whether the attribute should be visible or not in storefront. */
	visibleInStorefront?:boolean | null,
	/** Whether the attribute can be filtered in storefront. */
	filterableInStorefront?:boolean | null,
	/** Whether the attribute can be filtered in dashboard. */
	filterableInDashboard?:boolean | null,
	/** The position of the attribute in the storefront navigation (0 by default). */
	storefrontSearchPosition?:number | null,
	/** Whether the attribute can be displayed in the admin product list. */
	availableInGrid?:boolean | null
};
	/** Represents a value of an attribute. */
["AttributeValue"]: AliasType<{
	id?:boolean,
	/** Name of a value displayed in the interface. */
	name?:boolean,
	/** Internal representation of a value (unique per attribute). */
	slug?:boolean,
	/** Represent value of the attribute value (e.g. color values for swatch attributes). */
	value?:boolean,
translation?: [{	/** A language code to return the translation for attribute value. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["AttributeValueTranslation"]],
	/** The input type to use for entering attribute values in the dashboard. */
	inputType?:boolean,
	/** The ID of the attribute reference. */
	reference?:boolean,
	/** Represents file URL and content type (if attribute value is a file). */
	file?:ValueTypes["File"],
	/** Represents the text (JSON) of the attribute value. */
	richText?:boolean,
	/** Represents the boolean value of the attribute value. */
	boolean?:boolean,
	/** Represents the date value of the attribute value. */
	date?:boolean,
	/** Represents the date time value of the attribute value. */
	dateTime?:boolean,
		__typename?: boolean
}>;
	/** Deletes values of attributes. */
["AttributeValueBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	attributeErrors?:ValueTypes["AttributeError"],
	errors?:ValueTypes["AttributeError"],
		__typename?: boolean
}>;
	["AttributeValueCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["AttributeValueCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["AttributeValueCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["AttributeValue"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates a value for an attribute. */
["AttributeValueCreate"]: AliasType<{
	/** The updated attribute. */
	attribute?:ValueTypes["Attribute"],
	attributeErrors?:ValueTypes["AttributeError"],
	errors?:ValueTypes["AttributeError"],
	attributeValue?:ValueTypes["AttributeValue"],
		__typename?: boolean
}>;
	["AttributeValueCreateInput"]: {
	/** Represent value of the attribute value (e.g. color values for swatch attributes). */
	value?:string | null,
	/** Represents the text (JSON) of the attribute value. */
	richText?:ValueTypes["JSONString"] | null,
	/** URL of the file attribute. Every time, a new value is created. */
	fileUrl?:string | null,
	/** File content type. */
	contentType?:string | null,
	/** Name of a value displayed in the interface. */
	name:string
};
	/** Deletes a value of an attribute. */
["AttributeValueDelete"]: AliasType<{
	/** The updated attribute. */
	attribute?:ValueTypes["Attribute"],
	attributeErrors?:ValueTypes["AttributeError"],
	errors?:ValueTypes["AttributeError"],
	attributeValue?:ValueTypes["AttributeValue"],
		__typename?: boolean
}>;
	["AttributeValueFilterInput"]: {
	search?:string | null
};
	["AttributeValueInput"]: {
	/** ID of the selected attribute. */
	id?:string | null,
	/** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
	values?:string[],
	/** URL of the file attribute. Every time, a new value is created. */
	file?:string | null,
	/** File content type. */
	contentType?:string | null,
	/** List of entity IDs that will be used as references. */
	references?:string[],
	/** Text content in JSON format. */
	richText?:ValueTypes["JSONString"] | null,
	/** Represents the boolean value of the attribute value. */
	boolean?:boolean | null,
	/** Represents the date value of the attribute value. */
	date?:ValueTypes["Date"] | null,
	/** Represents the date time value of the attribute value. */
	dateTime?:ValueTypes["DateTime"] | null
};
	["AttributeValueTranslatableContent"]: AliasType<{
	id?:boolean,
	name?:boolean,
	richText?:boolean,
translation?: [{	/** A language code to return the translation for attribute value. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["AttributeValueTranslation"]],
	/** Represents a value of an attribute. */
	attributeValue?:ValueTypes["AttributeValue"],
		__typename?: boolean
}>;
	/** Creates/updates translations for an attribute value. */
["AttributeValueTranslate"]: AliasType<{
	translationErrors?:ValueTypes["TranslationError"],
	errors?:ValueTypes["TranslationError"],
	attributeValue?:ValueTypes["AttributeValue"],
		__typename?: boolean
}>;
	["AttributeValueTranslation"]: AliasType<{
	id?:boolean,
	/** Translation language. */
	language?:ValueTypes["LanguageDisplay"],
	name?:boolean,
	richText?:boolean,
		__typename?: boolean
}>;
	["AttributeValueTranslationInput"]: {
	name?:string | null,
	richText?:ValueTypes["JSONString"] | null
};
	/** Updates value of an attribute. */
["AttributeValueUpdate"]: AliasType<{
	/** The updated attribute. */
	attribute?:ValueTypes["Attribute"],
	attributeErrors?:ValueTypes["AttributeError"],
	errors?:ValueTypes["AttributeError"],
	attributeValue?:ValueTypes["AttributeValue"],
		__typename?: boolean
}>;
	["AttributeValueUpdateInput"]: {
	/** Represent value of the attribute value (e.g. color values for swatch attributes). */
	value?:string | null,
	/** Represents the text (JSON) of the attribute value. */
	richText?:ValueTypes["JSONString"] | null,
	/** URL of the file attribute. Every time, a new value is created. */
	fileUrl?:string | null,
	/** File content type. */
	contentType?:string | null,
	/** Name of a value displayed in the interface. */
	name?:string | null
};
	["BulkAttributeValueInput"]: {
	/** ID of the selected attribute. */
	id?:string | null,
	/** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
	values?:string[],
	/** The boolean value of an attribute to resolve. If the passed value is non-existent, it will be created. */
	boolean?:boolean | null
};
	["BulkProductError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** List of attributes IDs which causes the error. */
	attributes?:boolean,
	/** List of attribute values IDs which causes the error. */
	values?:boolean,
	/** Index of an input list item that caused the error. */
	index?:boolean,
	/** List of warehouse IDs which causes the error. */
	warehouses?:boolean,
	/** List of channel IDs which causes the error. */
	channels?:boolean,
		__typename?: boolean
}>;
	["BulkStockError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** List of attributes IDs which causes the error. */
	attributes?:boolean,
	/** List of attribute values IDs which causes the error. */
	values?:boolean,
	/** Index of an input list item that caused the error. */
	index?:boolean,
		__typename?: boolean
}>;
	["CardInput"]: {
	/** Payment method nonce, a token returned by the appropriate provider's SDK. */
	code:string,
	/** Card security code. */
	cvc?:string | null,
	/** Information about currency and amount. */
	money:ValueTypes["MoneyInput"]
};
	["CatalogueInput"]: {
	/** Products related to the discount. */
	products?:(string | undefined | null)[],
	/** Categories related to the discount. */
	categories?:(string | undefined | null)[],
	/** Collections related to the discount. */
	collections?:(string | undefined | null)[],
	/** New in Saleor 3.1. Product variant related to the discount. */
	variants?:(string | undefined | null)[]
};
	/** Represents a single category of products. Categories allow to organize products
in a tree-hierarchies which can be used for navigation in the storefront. */
["Category"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	seoTitle?:boolean,
	seoDescription?:boolean,
	name?:boolean,
	description?:boolean,
	slug?:boolean,
	parent?:ValueTypes["Category"],
	level?:boolean,
	/** Description of the category (JSON). */
	descriptionJson?:boolean,
ancestors?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["CategoryCountableConnection"]],
products?: [{	/** Slug of a channel for which the data should be returned. */
	channel?:string | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ProductCountableConnection"]],
children?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["CategoryCountableConnection"]],
backgroundImage?: [{	/** Size of the image. */
	size?:number | null},ValueTypes["Image"]],
translation?: [{	/** A language code to return the translation for category. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["CategoryTranslation"]],
		__typename?: boolean
}>;
	/** Deletes categories. */
["CategoryBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	["CategoryCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["CategoryCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["CategoryCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["Category"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates a new category. */
["CategoryCreate"]: AliasType<{
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
	category?:ValueTypes["Category"],
		__typename?: boolean
}>;
	/** Deletes a category. */
["CategoryDelete"]: AliasType<{
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
	category?:ValueTypes["Category"],
		__typename?: boolean
}>;
	["CategoryFilterInput"]: {
	search?:string | null,
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[],
	ids?:(string | undefined | null)[]
};
	["CategoryInput"]: {
	/** Category description (JSON). */
	description?:ValueTypes["JSONString"] | null,
	/** Category name. */
	name?:string | null,
	/** Category slug. */
	slug?:string | null,
	/** Search engine optimization fields. */
	seo?:ValueTypes["SeoInput"] | null,
	/** Background image file. */
	backgroundImage?:ValueTypes["Upload"] | null,
	/** Alt text for a product media. */
	backgroundImageAlt?:string | null
};
	["CategorySortField"]:CategorySortField;
	["CategorySortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Specifies the channel in which to sort the data. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?:string | null,
	/** Sort categories by the selected field. */
	field:ValueTypes["CategorySortField"]
};
	["CategoryTranslatableContent"]: AliasType<{
	id?:boolean,
	seoTitle?:boolean,
	seoDescription?:boolean,
	name?:boolean,
	description?:boolean,
	/** Description of the category (JSON). */
	descriptionJson?:boolean,
translation?: [{	/** A language code to return the translation for category. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["CategoryTranslation"]],
	/** Represents a single category of products. */
	category?:ValueTypes["Category"],
		__typename?: boolean
}>;
	/** Creates/updates translations for a category. */
["CategoryTranslate"]: AliasType<{
	translationErrors?:ValueTypes["TranslationError"],
	errors?:ValueTypes["TranslationError"],
	category?:ValueTypes["Category"],
		__typename?: boolean
}>;
	["CategoryTranslation"]: AliasType<{
	id?:boolean,
	/** Translation language. */
	language?:ValueTypes["LanguageDisplay"],
	seoTitle?:boolean,
	seoDescription?:boolean,
	name?:boolean,
	description?:boolean,
	/** Translated description of the product (JSON). */
	descriptionJson?:boolean,
		__typename?: boolean
}>;
	/** Updates a category. */
["CategoryUpdate"]: AliasType<{
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
	category?:ValueTypes["Category"],
		__typename?: boolean
}>;
	/** Represents channel. */
["Channel"]: AliasType<{
	id?:boolean,
	name?:boolean,
	isActive?:boolean,
	currencyCode?:boolean,
	slug?:boolean,
	/** Whether a channel has associated orders. */
	hasOrders?:boolean,
	/** New in Saleor 3.1. Default country for the channel. Default country can be
used in checkout to determine the stock quantities or calculate taxes when the
country was not explicitly provided. */
	defaultCountry?:ValueTypes["CountryDisplay"],
		__typename?: boolean
}>;
	/** Activate a channel. */
["ChannelActivate"]: AliasType<{
	/** Activated channel. */
	channel?:ValueTypes["Channel"],
	channelErrors?:ValueTypes["ChannelError"],
	errors?:ValueTypes["ChannelError"],
		__typename?: boolean
}>;
	/** Creates new channel. */
["ChannelCreate"]: AliasType<{
	channelErrors?:ValueTypes["ChannelError"],
	errors?:ValueTypes["ChannelError"],
	channel?:ValueTypes["Channel"],
		__typename?: boolean
}>;
	["ChannelCreateInput"]: {
	/** isActive flag. */
	isActive?:boolean | null,
	/** Name of the channel. */
	name:string,
	/** Slug of the channel. */
	slug:string,
	/** Currency of the channel. */
	currencyCode:string,
	/** New in Saleor 3.1. Default country for the channel. Default country can be
used in checkout to determine the stock quantities or calculate taxes when the
country was not explicitly provided. */
	defaultCountry:ValueTypes["CountryCode"],
	/** List of shipping zones to assign to the channel. */
	addShippingZones?:string[]
};
	/** Deactivate a channel. */
["ChannelDeactivate"]: AliasType<{
	/** Deactivated channel. */
	channel?:ValueTypes["Channel"],
	channelErrors?:ValueTypes["ChannelError"],
	errors?:ValueTypes["ChannelError"],
		__typename?: boolean
}>;
	/** Delete a channel. Orders associated with the deleted channel will be moved to
the target channel. Checkouts, product availability, and pricing will be removed. */
["ChannelDelete"]: AliasType<{
	channelErrors?:ValueTypes["ChannelError"],
	errors?:ValueTypes["ChannelError"],
	channel?:ValueTypes["Channel"],
		__typename?: boolean
}>;
	["ChannelDeleteInput"]: {
	/** ID of channel to migrate orders from origin channel. */
	channelId:string
};
	["ChannelError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** List of shipping zone IDs which causes the error. */
	shippingZones?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["ChannelErrorCode"]:ChannelErrorCode;
	/** Update a channel. */
["ChannelUpdate"]: AliasType<{
	channelErrors?:ValueTypes["ChannelError"],
	errors?:ValueTypes["ChannelError"],
	channel?:ValueTypes["Channel"],
		__typename?: boolean
}>;
	["ChannelUpdateInput"]: {
	/** isActive flag. */
	isActive?:boolean | null,
	/** Name of the channel. */
	name?:string | null,
	/** Slug of the channel. */
	slug?:string | null,
	/** New in Saleor 3.1. Default country for the channel. Default country can be
used in checkout to determine the stock quantities or calculate taxes when the
country was not explicitly provided. */
	defaultCountry?:ValueTypes["CountryCode"] | null,
	/** List of shipping zones to assign to the channel. */
	addShippingZones?:string[],
	/** List of shipping zones to unassign from the channel. */
	removeShippingZones?:string[]
};
	/** Checkout object. */
["Checkout"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	created?:boolean,
	lastChange?:boolean,
	user?:ValueTypes["User"],
	channel?:ValueTypes["Channel"],
	billingAddress?:ValueTypes["Address"],
	shippingAddress?:ValueTypes["Address"],
	note?:boolean,
	discount?:ValueTypes["Money"],
	discountName?:boolean,
	translatedDiscountName?:boolean,
	voucherCode?:boolean,
	/** Shipping methods that can be used with this checkout. */
	availableShippingMethods?:ValueTypes["ShippingMethod"],
	/** Shipping methods that can be used with this checkout. */
	shippingMethods?:ValueTypes["ShippingMethod"],
	/** New in Saleor 3.1. Collection points that can be used for this order. Note:
this feature is in a preview state and can be subject to changes at later point. */
	availableCollectionPoints?:ValueTypes["Warehouse"],
	/** List of available payment gateways. */
	availablePaymentGateways?:ValueTypes["PaymentGateway"],
	/** Email of a customer. */
	email?:boolean,
	/** List of gift cards associated with this checkout. */
	giftCards?:ValueTypes["GiftCard"],
	/** Returns True, if checkout requires shipping. */
	isShippingRequired?:boolean,
	/** The number of items purchased. */
	quantity?:boolean,
	/** New in Saleor 3.1. Date when oldest stock reservation for this checkout  expires or null if no stock is reserved. */
	stockReservationExpires?:boolean,
	/** A list of checkout lines, each containing information about an item in the checkout. */
	lines?:ValueTypes["CheckoutLine"],
	/** The price of the shipping, with all the taxes included. */
	shippingPrice?:ValueTypes["TaxedMoney"],
	/** The shipping method related with checkout. */
	shippingMethod?:ValueTypes["ShippingMethod"],
	/** New in Saleor 3.1. The delivery method selected for this checkout. Note: this
feature is in a preview state and can be subject to changes at later point. */
	deliveryMethod?:ValueTypes["DeliveryMethod"],
	/** The price of the checkout before shipping, with taxes included. */
	subtotalPrice?:ValueTypes["TaxedMoney"],
	/** The checkout's token. */
	token?:boolean,
	/** The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included. */
	totalPrice?:ValueTypes["TaxedMoney"],
	/** Checkout language code. */
	languageCode?:boolean,
		__typename?: boolean
}>;
	/** Adds a gift card or a voucher to a checkout. */
["CheckoutAddPromoCode"]: AliasType<{
	/** The checkout with the added gift card or voucher. */
	checkout?:ValueTypes["Checkout"],
	checkoutErrors?:ValueTypes["CheckoutError"],
	errors?:ValueTypes["CheckoutError"],
		__typename?: boolean
}>;
	/** Update billing address in the existing checkout. */
["CheckoutBillingAddressUpdate"]: AliasType<{
	/** An updated checkout. */
	checkout?:ValueTypes["Checkout"],
	checkoutErrors?:ValueTypes["CheckoutError"],
	errors?:ValueTypes["CheckoutError"],
		__typename?: boolean
}>;
	/** Completes the checkout. As a result a new order is created and a payment charge
is made. This action requires a successful payment before it can be performed.
In case additional confirmation step as 3D secure is required confirmationNeeded
flag will be set to True and no order created until payment is confirmed with
second call of this mutation. */
["CheckoutComplete"]: AliasType<{
	/** Placed order. */
	order?:ValueTypes["Order"],
	/** Set to true if payment needs to be confirmed before checkout is complete. */
	confirmationNeeded?:boolean,
	/** Confirmation data used to process additional authorization steps. */
	confirmationData?:boolean,
	checkoutErrors?:ValueTypes["CheckoutError"],
	errors?:ValueTypes["CheckoutError"],
		__typename?: boolean
}>;
	["CheckoutCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["CheckoutCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["CheckoutCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["Checkout"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Create a new checkout. */
["CheckoutCreate"]: AliasType<{
	/** Whether the checkout was created or the current active one was returned. Refer
to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout. */
	created?:boolean,
	checkoutErrors?:ValueTypes["CheckoutError"],
	errors?:ValueTypes["CheckoutError"],
	checkout?:ValueTypes["Checkout"],
		__typename?: boolean
}>;
	["CheckoutCreateInput"]: {
	/** Slug of a channel in which to create a checkout. */
	channel?:string | null,
	/** A list of checkout lines, each containing information about an item in the checkout. */
	lines?:ValueTypes["CheckoutLineInput"][],
	/** The customer's email address. */
	email?:string | null,
	/** The mailing address to where the checkout will be shipped. Note: the address
will be ignored if the checkout doesn't contain shippable items. */
	shippingAddress?:ValueTypes["AddressInput"] | null,
	/** Billing address of the customer. */
	billingAddress?:ValueTypes["AddressInput"] | null,
	/** Checkout language code. */
	languageCode?:ValueTypes["LanguageCodeEnum"] | null
};
	/** Sets the customer as the owner of the checkout. */
["CheckoutCustomerAttach"]: AliasType<{
	/** An updated checkout. */
	checkout?:ValueTypes["Checkout"],
	checkoutErrors?:ValueTypes["CheckoutError"],
	errors?:ValueTypes["CheckoutError"],
		__typename?: boolean
}>;
	/** Removes the user assigned as the owner of the checkout. */
["CheckoutCustomerDetach"]: AliasType<{
	/** An updated checkout. */
	checkout?:ValueTypes["Checkout"],
	checkoutErrors?:ValueTypes["CheckoutError"],
	errors?:ValueTypes["CheckoutError"],
		__typename?: boolean
}>;
	/** New in Saleor 3.1. Updates the delivery method (shipping method or pick up
point) of the checkout. Note: this feature is in a preview state and can be
subject to changes at later point. */
["CheckoutDeliveryMethodUpdate"]: AliasType<{
	/** An updated checkout. */
	checkout?:ValueTypes["Checkout"],
	errors?:ValueTypes["CheckoutError"],
		__typename?: boolean
}>;
	/** Updates email address in the existing checkout object. */
["CheckoutEmailUpdate"]: AliasType<{
	/** An updated checkout. */
	checkout?:ValueTypes["Checkout"],
	checkoutErrors?:ValueTypes["CheckoutError"],
	errors?:ValueTypes["CheckoutError"],
		__typename?: boolean
}>;
	["CheckoutError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** List of varint IDs which causes the error. */
	variants?:boolean,
	/** List of line Ids which cause the error. */
	lines?:boolean,
	/** A type of address that causes the error. */
	addressType?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["CheckoutErrorCode"]:CheckoutErrorCode;
	["CheckoutFilterInput"]: {
	customer?:string | null,
	created?:ValueTypes["DateRangeInput"] | null,
	search?:string | null,
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[],
	channels?:(string | undefined | null)[]
};
	/** Update language code in the existing checkout. */
["CheckoutLanguageCodeUpdate"]: AliasType<{
	/** An updated checkout. */
	checkout?:ValueTypes["Checkout"],
	checkoutErrors?:ValueTypes["CheckoutError"],
	errors?:ValueTypes["CheckoutError"],
		__typename?: boolean
}>;
	/** Represents an item in the checkout. */
["CheckoutLine"]: AliasType<{
	id?:boolean,
	variant?:ValueTypes["ProductVariant"],
	quantity?:boolean,
	/** The sum of the checkout line price, taxes and discounts. */
	totalPrice?:ValueTypes["TaxedMoney"],
	/** Indicates whether the item need to be delivered. */
	requiresShipping?:boolean,
		__typename?: boolean
}>;
	["CheckoutLineCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["CheckoutLineCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["CheckoutLineCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["CheckoutLine"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Deletes a CheckoutLine. */
["CheckoutLineDelete"]: AliasType<{
	/** An updated checkout. */
	checkout?:ValueTypes["Checkout"],
	checkoutErrors?:ValueTypes["CheckoutError"],
	errors?:ValueTypes["CheckoutError"],
		__typename?: boolean
}>;
	["CheckoutLineInput"]: {
	/** The number of items purchased. */
	quantity:number,
	/** ID of the product variant. */
	variantId:string
};
	/** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
["CheckoutLinesAdd"]: AliasType<{
	/** An updated checkout. */
	checkout?:ValueTypes["Checkout"],
	checkoutErrors?:ValueTypes["CheckoutError"],
	errors?:ValueTypes["CheckoutError"],
		__typename?: boolean
}>;
	/** Deletes checkout lines. */
["CheckoutLinesDelete"]: AliasType<{
	/** An updated checkout. */
	checkout?:ValueTypes["Checkout"],
	errors?:ValueTypes["CheckoutError"],
		__typename?: boolean
}>;
	/** Updates checkout line in the existing checkout. */
["CheckoutLinesUpdate"]: AliasType<{
	/** An updated checkout. */
	checkout?:ValueTypes["Checkout"],
	checkoutErrors?:ValueTypes["CheckoutError"],
	errors?:ValueTypes["CheckoutError"],
		__typename?: boolean
}>;
	/** Create a new payment for given checkout. */
["CheckoutPaymentCreate"]: AliasType<{
	/** Related checkout object. */
	checkout?:ValueTypes["Checkout"],
	/** A newly created payment. */
	payment?:ValueTypes["Payment"],
	paymentErrors?:ValueTypes["PaymentError"],
	errors?:ValueTypes["PaymentError"],
		__typename?: boolean
}>;
	/** Remove a gift card or a voucher from a checkout. */
["CheckoutRemovePromoCode"]: AliasType<{
	/** The checkout with the removed gift card or voucher. */
	checkout?:ValueTypes["Checkout"],
	checkoutErrors?:ValueTypes["CheckoutError"],
	errors?:ValueTypes["CheckoutError"],
		__typename?: boolean
}>;
	/** Update shipping address in the existing checkout. */
["CheckoutShippingAddressUpdate"]: AliasType<{
	/** An updated checkout. */
	checkout?:ValueTypes["Checkout"],
	checkoutErrors?:ValueTypes["CheckoutError"],
	errors?:ValueTypes["CheckoutError"],
		__typename?: boolean
}>;
	/** Updates the shipping method of the checkout. */
["CheckoutShippingMethodUpdate"]: AliasType<{
	/** An updated checkout. */
	checkout?:ValueTypes["Checkout"],
	checkoutErrors?:ValueTypes["CheckoutError"],
	errors?:ValueTypes["CheckoutError"],
		__typename?: boolean
}>;
	["CheckoutSortField"]:CheckoutSortField;
	["CheckoutSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort checkouts by the selected field. */
	field:ValueTypes["CheckoutSortField"]
};
	["ChoiceValue"]: AliasType<{
	raw?:boolean,
	verbose?:boolean,
		__typename?: boolean
}>;
	/** Represents a collection of products. */
["Collection"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	seoTitle?:boolean,
	seoDescription?:boolean,
	name?:boolean,
	description?:boolean,
	slug?:boolean,
	/** Channel given to retrieve this collection. Also used by federation gateway to resolve this object in a federated query. */
	channel?:boolean,
	/** Description of the collection (JSON). */
	descriptionJson?:boolean,
products?: [{	/** Filtering options for products. */
	filter?:ValueTypes["ProductFilterInput"] | null,	/** Sort products. */
	sortBy?:ValueTypes["ProductOrder"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ProductCountableConnection"]],
backgroundImage?: [{	/** Size of the image. */
	size?:number | null},ValueTypes["Image"]],
translation?: [{	/** A language code to return the translation for collection. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["CollectionTranslation"]],
	/** List of channels in which the collection is available. */
	channelListings?:ValueTypes["CollectionChannelListing"],
		__typename?: boolean
}>;
	/** Adds products to a collection. */
["CollectionAddProducts"]: AliasType<{
	/** Collection to which products will be added. */
	collection?:ValueTypes["Collection"],
	collectionErrors?:ValueTypes["CollectionError"],
	errors?:ValueTypes["CollectionError"],
		__typename?: boolean
}>;
	/** Deletes collections. */
["CollectionBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	collectionErrors?:ValueTypes["CollectionError"],
	errors?:ValueTypes["CollectionError"],
		__typename?: boolean
}>;
	/** Represents collection channel listing. */
["CollectionChannelListing"]: AliasType<{
	id?:boolean,
	publicationDate?:boolean,
	isPublished?:boolean,
	channel?:ValueTypes["Channel"],
		__typename?: boolean
}>;
	["CollectionChannelListingError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** List of attributes IDs which causes the error. */
	attributes?:boolean,
	/** List of attribute values IDs which causes the error. */
	values?:boolean,
	/** List of channels IDs which causes the error. */
	channels?:boolean,
		__typename?: boolean
}>;
	/** Manage collection's availability in channels. */
["CollectionChannelListingUpdate"]: AliasType<{
	/** An updated collection instance. */
	collection?:ValueTypes["Collection"],
	collectionChannelListingErrors?:ValueTypes["CollectionChannelListingError"],
	errors?:ValueTypes["CollectionChannelListingError"],
		__typename?: boolean
}>;
	["CollectionChannelListingUpdateInput"]: {
	/** List of channels to which the collection should be assigned. */
	addChannels?:ValueTypes["PublishableChannelListingInput"][],
	/** List of channels from which the collection should be unassigned. */
	removeChannels?:string[]
};
	["CollectionCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["CollectionCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["CollectionCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["Collection"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates a new collection. */
["CollectionCreate"]: AliasType<{
	collectionErrors?:ValueTypes["CollectionError"],
	errors?:ValueTypes["CollectionError"],
	collection?:ValueTypes["Collection"],
		__typename?: boolean
}>;
	["CollectionCreateInput"]: {
	/** Informs whether a collection is published. */
	isPublished?:boolean | null,
	/** Name of the collection. */
	name?:string | null,
	/** Slug of the collection. */
	slug?:string | null,
	/** Description of the collection (JSON). */
	description?:ValueTypes["JSONString"] | null,
	/** Background image file. */
	backgroundImage?:ValueTypes["Upload"] | null,
	/** Alt text for an image. */
	backgroundImageAlt?:string | null,
	/** Search engine optimization fields. */
	seo?:ValueTypes["SeoInput"] | null,
	/** Publication date. ISO 8601 standard. */
	publicationDate?:ValueTypes["Date"] | null,
	/** List of products to be added to the collection. */
	products?:(string | undefined | null)[]
};
	/** Deletes a collection. */
["CollectionDelete"]: AliasType<{
	collectionErrors?:ValueTypes["CollectionError"],
	errors?:ValueTypes["CollectionError"],
	collection?:ValueTypes["Collection"],
		__typename?: boolean
}>;
	["CollectionError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** List of products IDs which causes the error. */
	products?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["CollectionErrorCode"]:CollectionErrorCode;
	["CollectionFilterInput"]: {
	published?:ValueTypes["CollectionPublished"] | null,
	search?:string | null,
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[],
	ids?:(string | undefined | null)[],
	/** Specifies the channel by which the data should be filtered. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?:string | null
};
	["CollectionInput"]: {
	/** Informs whether a collection is published. */
	isPublished?:boolean | null,
	/** Name of the collection. */
	name?:string | null,
	/** Slug of the collection. */
	slug?:string | null,
	/** Description of the collection (JSON). */
	description?:ValueTypes["JSONString"] | null,
	/** Background image file. */
	backgroundImage?:ValueTypes["Upload"] | null,
	/** Alt text for an image. */
	backgroundImageAlt?:string | null,
	/** Search engine optimization fields. */
	seo?:ValueTypes["SeoInput"] | null,
	/** Publication date. ISO 8601 standard. */
	publicationDate?:ValueTypes["Date"] | null
};
	["CollectionPublished"]:CollectionPublished;
	/** Remove products from a collection. */
["CollectionRemoveProducts"]: AliasType<{
	/** Collection from which products will be removed. */
	collection?:ValueTypes["Collection"],
	collectionErrors?:ValueTypes["CollectionError"],
	errors?:ValueTypes["CollectionError"],
		__typename?: boolean
}>;
	/** Reorder the products of a collection. */
["CollectionReorderProducts"]: AliasType<{
	/** Collection from which products are reordered. */
	collection?:ValueTypes["Collection"],
	collectionErrors?:ValueTypes["CollectionError"],
	errors?:ValueTypes["CollectionError"],
		__typename?: boolean
}>;
	["CollectionSortField"]:CollectionSortField;
	["CollectionSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Specifies the channel in which to sort the data. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?:string | null,
	/** Sort collections by the selected field. */
	field:ValueTypes["CollectionSortField"]
};
	["CollectionTranslatableContent"]: AliasType<{
	id?:boolean,
	seoTitle?:boolean,
	seoDescription?:boolean,
	name?:boolean,
	description?:boolean,
	/** Description of the collection (JSON). */
	descriptionJson?:boolean,
translation?: [{	/** A language code to return the translation for collection. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["CollectionTranslation"]],
	/** Represents a collection of products. */
	collection?:ValueTypes["Collection"],
		__typename?: boolean
}>;
	/** Creates/updates translations for a collection. */
["CollectionTranslate"]: AliasType<{
	translationErrors?:ValueTypes["TranslationError"],
	errors?:ValueTypes["TranslationError"],
	collection?:ValueTypes["Collection"],
		__typename?: boolean
}>;
	["CollectionTranslation"]: AliasType<{
	id?:boolean,
	/** Translation language. */
	language?:ValueTypes["LanguageDisplay"],
	seoTitle?:boolean,
	seoDescription?:boolean,
	name?:boolean,
	description?:boolean,
	/** Translated description of the product (JSON). */
	descriptionJson?:boolean,
		__typename?: boolean
}>;
	/** Updates a collection. */
["CollectionUpdate"]: AliasType<{
	collectionErrors?:ValueTypes["CollectionError"],
	errors?:ValueTypes["CollectionError"],
	collection?:ValueTypes["Collection"],
		__typename?: boolean
}>;
	/** Stores information about a single configuration field. */
["ConfigurationItem"]: AliasType<{
	/** Name of the field. */
	name?:boolean,
	/** Current value of the field. */
	value?:boolean,
	/** Type of the field. */
	type?:boolean,
	/** Help text for the field. */
	helpText?:boolean,
	/** Label for the field. */
	label?:boolean,
		__typename?: boolean
}>;
	["ConfigurationItemInput"]: {
	/** Name of the field to update. */
	name:string,
	/** Value of the given field to update. */
	value?:string | null
};
	/** An enumeration. */
["ConfigurationTypeFieldEnum"]:ConfigurationTypeFieldEnum;
	/** Confirm user account with token sent by email during registration. */
["ConfirmAccount"]: AliasType<{
	/** An activated user account. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** Confirm the email change of the logged-in user. */
["ConfirmEmailChange"]: AliasType<{
	/** A user instance with a new email. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** An enumeration. */
["CountryCode"]:CountryCode;
	["CountryDisplay"]: AliasType<{
	/** Country code. */
	code?:boolean,
	/** Country name. */
	country?:boolean,
	/** Country tax. */
	vat?:ValueTypes["VAT"],
		__typename?: boolean
}>;
	["CountryFilterInput"]: {
	/** Boolean for filtering countries by having shipping zone assigned.If 'true',
return countries with shipping zone assigned.If 'false', return countries
without any shipping zone assigned.If the argument is not provided (null),
return all countries. */
	attachedToShippingZones?:boolean | null
};
	/** Create JWT token. */
["CreateToken"]: AliasType<{
	/** JWT token, required to authenticate. */
	token?:boolean,
	/** JWT refresh token, required to re-generate access token. */
	refreshToken?:boolean,
	/** CSRF token required to re-generate access token. */
	csrfToken?:boolean,
	/** A user instance. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	["CreditCard"]: AliasType<{
	/** Card brand. */
	brand?:boolean,
	/** First 4 digits of the card number. */
	firstDigits?:boolean,
	/** Last 4 digits of the card number. */
	lastDigits?:boolean,
	/** Two-digit number representing the card’s expiration month. */
	expMonth?:boolean,
	/** Four-digit number representing the card’s expiration year. */
	expYear?:boolean,
		__typename?: boolean
}>;
	/** Deletes customers. */
["CustomerBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** Creates a new customer. */
["CustomerCreate"]: AliasType<{
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	/** Deletes a customer. */
["CustomerDelete"]: AliasType<{
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	/** History log of the customer. */
["CustomerEvent"]: AliasType<{
	id?:boolean,
	/** Date when event happened at in ISO 8601 format. */
	date?:boolean,
	/** Customer event type. */
	type?:boolean,
	/** User who performed the action. */
	user?:ValueTypes["User"],
	/** App that performed the action. */
	app?:ValueTypes["App"],
	/** Content of the event. */
	message?:boolean,
	/** Number of objects concerned by the event. */
	count?:boolean,
	/** The concerned order. */
	order?:ValueTypes["Order"],
	/** The concerned order line. */
	orderLine?:ValueTypes["OrderLine"],
		__typename?: boolean
}>;
	/** An enumeration. */
["CustomerEventsEnum"]:CustomerEventsEnum;
	["CustomerFilterInput"]: {
	dateJoined?:ValueTypes["DateRangeInput"] | null,
	numberOfOrders?:ValueTypes["IntRangeInput"] | null,
	placedOrders?:ValueTypes["DateRangeInput"] | null,
	search?:string | null,
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[],
	updatedAt?:ValueTypes["DateTimeRangeInput"] | null
};
	["CustomerInput"]: {
	/** Billing address of the customer. */
	defaultBillingAddress?:ValueTypes["AddressInput"] | null,
	/** Shipping address of the customer. */
	defaultShippingAddress?:ValueTypes["AddressInput"] | null,
	/** Given name. */
	firstName?:string | null,
	/** Family name. */
	lastName?:string | null,
	/** The unique email address of the user. */
	email?:string | null,
	/** User account is active. */
	isActive?:boolean | null,
	/** A note about the user. */
	note?:string | null,
	/** User language code. */
	languageCode?:ValueTypes["LanguageCodeEnum"] | null
};
	/** Updates an existing customer. */
["CustomerUpdate"]: AliasType<{
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	/** The `Date` scalar type represents a Date
value as specified by
[iso8601](https://en.wikipedia.org/wiki/ISO_8601). */
["Date"]:unknown;
	["DateRangeInput"]: {
	/** Start date. */
	gte?:ValueTypes["Date"] | null,
	/** End date. */
	lte?:ValueTypes["Date"] | null
};
	/** The `DateTime` scalar type represents a DateTime
value as specified by
[iso8601](https://en.wikipedia.org/wiki/ISO_8601). */
["DateTime"]:unknown;
	["DateTimeRangeInput"]: {
	/** Start date. */
	gte?:ValueTypes["DateTime"] | null,
	/** End date. */
	lte?:ValueTypes["DateTime"] | null
};
	/** Deactivate all JWT tokens of the currently authenticated user. */
["DeactivateAllUserTokens"]: AliasType<{
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** Delete metadata of an object. */
["DeleteMetadata"]: AliasType<{
	metadataErrors?:ValueTypes["MetadataError"],
	errors?:ValueTypes["MetadataError"],
	item?:ValueTypes["ObjectWithMetadata"],
		__typename?: boolean
}>;
	/** Delete object's private metadata. */
["DeletePrivateMetadata"]: AliasType<{
	metadataErrors?:ValueTypes["MetadataError"],
	errors?:ValueTypes["MetadataError"],
	item?:ValueTypes["ObjectWithMetadata"],
		__typename?: boolean
}>;
	/** New in Saleor 3.1. Represents a delivery method chosen for the checkout.
`Warehouse` type is used when checkout is marked as "click and collect" and
`ShippingMethod` otherwise. Note: this feature is in a preview state and can be
subject to changes at later point. */
["DeliveryMethod"]: AliasType<{		["...on Warehouse"] : ValueTypes["Warehouse"],
		["...on ShippingMethod"] : ValueTypes["ShippingMethod"]
		__typename?: boolean
}>;
	["DigitalContent"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	useDefaultSettings?:boolean,
	automaticFulfillment?:boolean,
	contentFile?:boolean,
	maxDownloads?:boolean,
	urlValidDays?:boolean,
	/** List of URLs for the digital variant. */
	urls?:ValueTypes["DigitalContentUrl"],
	/** Product variant assigned to digital content. */
	productVariant?:ValueTypes["ProductVariant"],
		__typename?: boolean
}>;
	["DigitalContentCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["DigitalContentCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["DigitalContentCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["DigitalContent"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Create new digital content. This mutation must be sent as a `multipart` request.
More detailed specs of the upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
["DigitalContentCreate"]: AliasType<{
	variant?:ValueTypes["ProductVariant"],
	content?:ValueTypes["DigitalContent"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	/** Remove digital content assigned to given variant. */
["DigitalContentDelete"]: AliasType<{
	variant?:ValueTypes["ProductVariant"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	["DigitalContentInput"]: {
	/** Use default digital content settings for this product. */
	useDefaultSettings:boolean,
	/** Determines how many times a download link can be accessed by a customer. */
	maxDownloads?:number | null,
	/** Determines for how many days a download link is active since it was generated. */
	urlValidDays?:number | null,
	/** Overwrite default automatic_fulfillment setting for variant. */
	automaticFulfillment?:boolean | null
};
	/** Update digital content. */
["DigitalContentUpdate"]: AliasType<{
	variant?:ValueTypes["ProductVariant"],
	content?:ValueTypes["DigitalContent"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	["DigitalContentUploadInput"]: {
	/** Use default digital content settings for this product. */
	useDefaultSettings:boolean,
	/** Determines how many times a download link can be accessed by a customer. */
	maxDownloads?:number | null,
	/** Determines for how many days a download link is active since it was generated. */
	urlValidDays?:number | null,
	/** Overwrite default automatic_fulfillment setting for variant. */
	automaticFulfillment?:boolean | null,
	/** Represents an file in a multipart request. */
	contentFile:ValueTypes["Upload"]
};
	["DigitalContentUrl"]: AliasType<{
	id?:boolean,
	content?:ValueTypes["DigitalContent"],
	created?:boolean,
	downloadNum?:boolean,
	/** URL for digital content. */
	url?:boolean,
	/** UUID of digital content. */
	token?:boolean,
		__typename?: boolean
}>;
	/** Generate new URL to digital content. */
["DigitalContentUrlCreate"]: AliasType<{
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
	digitalContentUrl?:ValueTypes["DigitalContentUrl"],
		__typename?: boolean
}>;
	["DigitalContentUrlCreateInput"]: {
	/** Digital content ID which URL will belong to. */
	content:string
};
	["DiscountError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** List of products IDs which causes the error. */
	products?:boolean,
	/** The error code. */
	code?:boolean,
	/** List of channels IDs which causes the error. */
	channels?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["DiscountErrorCode"]:DiscountErrorCode;
	["DiscountStatusEnum"]:DiscountStatusEnum;
	["DiscountValueTypeEnum"]:DiscountValueTypeEnum;
	/** An enumeration. */
["DistanceUnitsEnum"]:DistanceUnitsEnum;
	/** Represents shop's domain. */
["Domain"]: AliasType<{
	/** The host name of the domain. */
	host?:boolean,
	/** Inform if SSL is enabled. */
	sslEnabled?:boolean,
	/** Shop's absolute URL. */
	url?:boolean,
		__typename?: boolean
}>;
	/** Deletes draft orders. */
["DraftOrderBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	/** Completes creating an order. */
["DraftOrderComplete"]: AliasType<{
	/** Completed order. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	/** Creates a new draft order. */
["DraftOrderCreate"]: AliasType<{
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
	order?:ValueTypes["Order"],
		__typename?: boolean
}>;
	["DraftOrderCreateInput"]: {
	/** Billing address of the customer. */
	billingAddress?:ValueTypes["AddressInput"] | null,
	/** Customer associated with the draft order. */
	user?:string | null,
	/** Email address of the customer. */
	userEmail?:string | null,
	/** Discount amount for the order. */
	discount?:ValueTypes["PositiveDecimal"] | null,
	/** Shipping address of the customer. */
	shippingAddress?:ValueTypes["AddressInput"] | null,
	/** ID of a selected shipping method. */
	shippingMethod?:string | null,
	/** ID of the voucher associated with the order. */
	voucher?:string | null,
	/** A note from a customer. Visible by customers in the order summary. */
	customerNote?:string | null,
	/** ID of the channel associated with the order. */
	channelId?:string | null,
	/** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
	redirectUrl?:string | null,
	/** Variant line input consisting of variant ID and quantity of products. */
	lines?:(ValueTypes["OrderLineCreateInput"] | undefined | null)[]
};
	/** Deletes a draft order. */
["DraftOrderDelete"]: AliasType<{
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
	order?:ValueTypes["Order"],
		__typename?: boolean
}>;
	["DraftOrderInput"]: {
	/** Billing address of the customer. */
	billingAddress?:ValueTypes["AddressInput"] | null,
	/** Customer associated with the draft order. */
	user?:string | null,
	/** Email address of the customer. */
	userEmail?:string | null,
	/** Discount amount for the order. */
	discount?:ValueTypes["PositiveDecimal"] | null,
	/** Shipping address of the customer. */
	shippingAddress?:ValueTypes["AddressInput"] | null,
	/** ID of a selected shipping method. */
	shippingMethod?:string | null,
	/** ID of the voucher associated with the order. */
	voucher?:string | null,
	/** A note from a customer. Visible by customers in the order summary. */
	customerNote?:string | null,
	/** ID of the channel associated with the order. */
	channelId?:string | null,
	/** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
	redirectUrl?:string | null
};
	/** Deletes order lines. */
["DraftOrderLinesBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	/** Updates a draft order. */
["DraftOrderUpdate"]: AliasType<{
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
	order?:ValueTypes["Order"],
		__typename?: boolean
}>;
	/** Event delivery. */
["EventDelivery"]: AliasType<{
	id?:boolean,
	createdAt?:boolean,
	/** Event delivery status. */
	status?:boolean,
	/** Webhook event type. */
	eventType?:boolean,
attempts?: [{	/** Event delivery sorter */
	sortBy?:ValueTypes["EventDeliveryAttemptSortingInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["EventDeliveryAttemptCountableConnection"]],
	/** Event payload. */
	payload?:boolean,
		__typename?: boolean
}>;
	/** Event delivery attempts. */
["EventDeliveryAttempt"]: AliasType<{
	id?:boolean,
	/** Event delivery creation date and time. */
	createdAt?:boolean,
	taskId?:boolean,
	duration?:boolean,
	response?:boolean,
	responseHeaders?:boolean,
	requestHeaders?:boolean,
	/** Event delivery status. */
	status?:boolean,
		__typename?: boolean
}>;
	["EventDeliveryAttemptCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["EventDeliveryAttemptCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["EventDeliveryAttemptCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["EventDeliveryAttempt"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["EventDeliveryAttemptSortField"]:EventDeliveryAttemptSortField;
	["EventDeliveryAttemptSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort attempts by the selected field. */
	field:ValueTypes["EventDeliveryAttemptSortField"]
};
	["EventDeliveryCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["EventDeliveryCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["EventDeliveryCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["EventDelivery"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["EventDeliveryFilterInput"]: {
	status?:ValueTypes["EventDeliveryStatusEnum"] | null,
	eventType?:ValueTypes["WebhookEventTypeEnum"] | null
};
	/** Retries event delivery. */
["EventDeliveryRetry"]: AliasType<{
	/** Event delivery. */
	delivery?:ValueTypes["EventDelivery"],
	errors?:ValueTypes["WebhookError"],
		__typename?: boolean
}>;
	["EventDeliverySortField"]:EventDeliverySortField;
	["EventDeliverySortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort deliveries by the selected field. */
	field:ValueTypes["EventDeliverySortField"]
};
	["EventDeliveryStatusEnum"]:EventDeliveryStatusEnum;
	["ExportError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["ExportErrorCode"]:ExportErrorCode;
	/** History log of export file. */
["ExportEvent"]: AliasType<{
	/** The ID of the object. */
	id?:boolean,
	/** Date when event happened at in ISO 8601 format. */
	date?:boolean,
	/** Export event type. */
	type?:boolean,
	/** User who performed the action. */
	user?:ValueTypes["User"],
	/** App which performed the action. */
	app?:ValueTypes["App"],
	/** Content of the event. */
	message?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["ExportEventsEnum"]:ExportEventsEnum;
	/** Represents a job data of exported file. */
["ExportFile"]: AliasType<{
	id?:boolean,
	/** Job status. */
	status?:boolean,
	/** Created date time of job in ISO 8601 format. */
	createdAt?:boolean,
	/** Date time of job last update in ISO 8601 format. */
	updatedAt?:boolean,
	/** Job message. */
	message?:boolean,
	/** The URL of field to download. */
	url?:boolean,
	/** List of events associated with the export. */
	events?:ValueTypes["ExportEvent"],
	user?:ValueTypes["User"],
	app?:ValueTypes["App"],
		__typename?: boolean
}>;
	["ExportFileCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["ExportFileCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["ExportFileCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["ExportFile"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["ExportFileFilterInput"]: {
	createdAt?:ValueTypes["DateTimeRangeInput"] | null,
	updatedAt?:ValueTypes["DateTimeRangeInput"] | null,
	status?:ValueTypes["JobStatusEnum"] | null,
	user?:string | null,
	app?:string | null
};
	["ExportFileSortField"]:ExportFileSortField;
	["ExportFileSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort export file by the selected field. */
	field:ValueTypes["ExportFileSortField"]
};
	/** New in Saleor 3.1. Export gift cards to csv file. Note: this feature is in a
preview state and can be subject to changes at later point. */
["ExportGiftCards"]: AliasType<{
	/** The newly created export file job which is responsible for export data. */
	exportFile?:ValueTypes["ExportFile"],
	errors?:ValueTypes["ExportError"],
		__typename?: boolean
}>;
	["ExportGiftCardsInput"]: {
	/** Determine which gift cards should be exported. */
	scope:ValueTypes["ExportScope"],
	/** Filtering options for gift cards. */
	filter?:ValueTypes["GiftCardFilterInput"] | null,
	/** List of gift cards IDs to export. */
	ids?:string[],
	/** Type of exported file. */
	fileType:ValueTypes["FileTypesEnum"]
};
	["ExportInfoInput"]: {
	/** List of attribute ids witch should be exported. */
	attributes?:string[],
	/** List of warehouse ids witch should be exported. */
	warehouses?:string[],
	/** List of channels ids which should be exported. */
	channels?:string[],
	/** List of product fields witch should be exported. */
	fields?:ValueTypes["ProductFieldEnum"][]
};
	/** Export products to csv file. */
["ExportProducts"]: AliasType<{
	/** The newly created export file job which is responsible for export data. */
	exportFile?:ValueTypes["ExportFile"],
	exportErrors?:ValueTypes["ExportError"],
	errors?:ValueTypes["ExportError"],
		__typename?: boolean
}>;
	["ExportProductsInput"]: {
	/** Determine which products should be exported. */
	scope:ValueTypes["ExportScope"],
	/** Filtering options for products. */
	filter?:ValueTypes["ProductFilterInput"] | null,
	/** List of products IDs to export. */
	ids?:string[],
	/** Input with info about fields which should be exported. */
	exportInfo?:ValueTypes["ExportInfoInput"] | null,
	/** Type of exported file. */
	fileType:ValueTypes["FileTypesEnum"]
};
	["ExportScope"]:ExportScope;
	["ExternalAuthentication"]: AliasType<{
	/** ID of external authentication plugin. */
	id?:boolean,
	/** Name of external authentication plugin. */
	name?:boolean,
		__typename?: boolean
}>;
	/** Prepare external authentication url for user by custom plugin. */
["ExternalAuthenticationUrl"]: AliasType<{
	/** The data returned by authentication plugin. */
	authenticationData?:boolean,
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** Logout user by custom plugin. */
["ExternalLogout"]: AliasType<{
	/** The data returned by authentication plugin. */
	logoutData?:boolean,
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	["ExternalNotificationError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["ExternalNotificationErrorCodes"]:ExternalNotificationErrorCodes;
	/** New in Saleor 3.1. Trigger sending a notification with the notify plugin method.
Serializes nodes provided as ids parameter and includes this data in the
notification payload. */
["ExternalNotificationTrigger"]: AliasType<{
	errors?:ValueTypes["ExternalNotificationError"],
		__typename?: boolean
}>;
	["ExternalNotificationTriggerInput"]: {
	/** The list of customers or orders node IDs that will be serialized and included in the notification payload. */
	ids?:string[],
	/** Additional payload that will be merged with the one based on the bussines object ID. */
	extraPayload?:ValueTypes["JSONString"] | null,
	/** External event type. This field is passed to a plugin as an event type. */
	externalEventType:string
};
	/** Obtain external access tokens for user by custom plugin. */
["ExternalObtainAccessTokens"]: AliasType<{
	/** The token, required to authenticate. */
	token?:boolean,
	/** The refresh token, required to re-generate external access token. */
	refreshToken?:boolean,
	/** CSRF token required to re-generate external access token. */
	csrfToken?:boolean,
	/** A user instance. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** Refresh user's access by custom plugin. */
["ExternalRefresh"]: AliasType<{
	/** The token, required to authenticate. */
	token?:boolean,
	/** The refresh token, required to re-generate external access token. */
	refreshToken?:boolean,
	/** CSRF token required to re-generate external access token. */
	csrfToken?:boolean,
	/** A user instance. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** Verify external authentication data by plugin. */
["ExternalVerify"]: AliasType<{
	/** User assigned to data. */
	user?:ValueTypes["User"],
	/** Determine if authentication data is valid or not. */
	isValid?:boolean,
	/** External data. */
	verifyData?:boolean,
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	["File"]: AliasType<{
	/** The URL of the file. */
	url?:boolean,
	/** Content type of the file. */
	contentType?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["FileTypesEnum"]:FileTypesEnum;
	/** Upload a file. This mutation must be sent as a `multipart` request. More
detailed specs of the upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
["FileUpload"]: AliasType<{
	uploadedFile?:ValueTypes["File"],
	uploadErrors?:ValueTypes["UploadError"],
	errors?:ValueTypes["UploadError"],
		__typename?: boolean
}>;
	/** Represents order fulfillment. */
["Fulfillment"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	fulfillmentOrder?:boolean,
	status?:boolean,
	trackingNumber?:boolean,
	created?:boolean,
	/** List of lines for the fulfillment. */
	lines?:ValueTypes["FulfillmentLine"],
	/** User-friendly fulfillment status. */
	statusDisplay?:boolean,
	/** Warehouse from fulfillment was fulfilled. */
	warehouse?:ValueTypes["Warehouse"],
		__typename?: boolean
}>;
	/** New in Saleor 3.1. Approve existing fulfillment. */
["FulfillmentApprove"]: AliasType<{
	/** An approved fulfillment. */
	fulfillment?:ValueTypes["Fulfillment"],
	/** Order which fulfillment was approved. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	/** Cancels existing fulfillment and optionally restocks items. */
["FulfillmentCancel"]: AliasType<{
	/** A canceled fulfillment. */
	fulfillment?:ValueTypes["Fulfillment"],
	/** Order which fulfillment was cancelled. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	["FulfillmentCancelInput"]: {
	/** ID of a warehouse where items will be restocked. Optional when fulfillment is in WAITING_FOR_APPROVAL state. */
	warehouseId?:string | null
};
	/** Represents line of the fulfillment. */
["FulfillmentLine"]: AliasType<{
	id?:boolean,
	quantity?:boolean,
	orderLine?:ValueTypes["OrderLine"],
		__typename?: boolean
}>;
	/** Refund products. */
["FulfillmentRefundProducts"]: AliasType<{
	/** A refunded fulfillment. */
	fulfillment?:ValueTypes["Fulfillment"],
	/** Order which fulfillment was refunded. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	/** Return products. */
["FulfillmentReturnProducts"]: AliasType<{
	/** A return fulfillment. */
	returnFulfillment?:ValueTypes["Fulfillment"],
	/** A replace fulfillment. */
	replaceFulfillment?:ValueTypes["Fulfillment"],
	/** Order which fulfillment was returned. */
	order?:ValueTypes["Order"],
	/** A draft order which was created for products with replace flag. */
	replaceOrder?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	/** An enumeration. */
["FulfillmentStatus"]:FulfillmentStatus;
	/** Updates a fulfillment for an order. */
["FulfillmentUpdateTracking"]: AliasType<{
	/** A fulfillment with updated tracking. */
	fulfillment?:ValueTypes["Fulfillment"],
	/** Order for which fulfillment was updated. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	["FulfillmentUpdateTrackingInput"]: {
	/** Fulfillment tracking number. */
	trackingNumber?:string | null,
	/** If true, send an email notification to the customer. */
	notifyCustomer?:boolean | null
};
	/** Payment gateway client configuration key and value pair. */
["GatewayConfigLine"]: AliasType<{
	/** Gateway config key. */
	field?:boolean,
	/** Gateway config value for key. */
	value?:boolean,
		__typename?: boolean
}>;
	/** The `GenericScalar` scalar type represents a generic
GraphQL scalar value that could be:
String, Boolean, Int, Float, List or Object. */
["GenericScalar"]:unknown;
	/** A gift card is a prepaid electronic payment card accepted in stores. They can be
used during checkout by providing a valid gift card codes. */
["GiftCard"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	/** Code in format which allows displaying in a user interface. */
	displayCode?:boolean,
	/** Last 4 characters of gift card code. */
	last4CodeChars?:boolean,
	/** Gift card code. Can be fetched by staff member with manage gift card
permission when gift card wasn't used yet and by the gift card owner. */
	code?:boolean,
	created?:boolean,
	/** New in Saleor 3.1. The user who bought or issued a gift card. Note: this
feature is in a preview state and can be subject to changes at later point. */
	createdBy?:ValueTypes["User"],
	/** New in Saleor 3.1. The customer who used a gift card. Note: this feature is in
a preview state and can be subject to changes at later point. */
	usedBy?:ValueTypes["User"],
	/** New in Saleor 3.1. Email address of the user who bought or issued gift card.
Note: this feature is in a preview state and can be subject to changes at later point. */
	createdByEmail?:boolean,
	/** New in Saleor 3.1. Email address of the customer who used a gift card. Note:
this feature is in a preview state and can be subject to changes at later point. */
	usedByEmail?:boolean,
	lastUsedOn?:boolean,
	expiryDate?:boolean,
	/** New in Saleor 3.1. App which created the gift card. Note: this feature is in a
preview state and can be subject to changes at later point. */
	app?:ValueTypes["App"],
	/** New in Saleor 3.1. Related gift card product. Note: this feature is in a
preview state and can be subject to changes at later point. */
	product?:ValueTypes["Product"],
events?: [{	/** Filtering options for gift card events. */
	filter?:ValueTypes["GiftCardEventFilterInput"] | null},ValueTypes["GiftCardEvent"]],
	/** New in Saleor 3.1. The gift card tag. Note: this feature is in a preview state
and can be subject to changes at later point. */
	tags?:ValueTypes["GiftCardTag"],
	/** New in Saleor 3.1. Slug of the channel where the gift card was bought. Note:
this feature is in a preview state and can be subject to changes at later point. */
	boughtInChannel?:boolean,
	isActive?:boolean,
	initialBalance?:ValueTypes["Money"],
	currentBalance?:ValueTypes["Money"],
	/** The customer who bought a gift card. */
	user?:ValueTypes["User"],
	/** End date of gift card. */
	endDate?:boolean,
	/** Start date of gift card. */
	startDate?:boolean,
		__typename?: boolean
}>;
	/** Activate a gift card. */
["GiftCardActivate"]: AliasType<{
	/** Activated gift card. */
	giftCard?:ValueTypes["GiftCard"],
	giftCardErrors?:ValueTypes["GiftCardError"],
	errors?:ValueTypes["GiftCardError"],
		__typename?: boolean
}>;
	/** New in Saleor 3.1. Adds note to the gift card. Note: this feature is in a
preview state and can be subject to changes at later point. */
["GiftCardAddNote"]: AliasType<{
	/** Gift card with the note added. */
	giftCard?:ValueTypes["GiftCard"],
	/** Gift card note created. */
	event?:ValueTypes["GiftCardEvent"],
	errors?:ValueTypes["GiftCardError"],
		__typename?: boolean
}>;
	["GiftCardAddNoteInput"]: {
	/** Note message. */
	message:string
};
	/** New in Saleor 3.1. Activate gift cards. Note: this feature is in a preview state
and can be subject to changes at later point. */
["GiftCardBulkActivate"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	errors?:ValueTypes["GiftCardError"],
		__typename?: boolean
}>;
	/** New in Saleor 3.1. Create gift cards. Note: this feature is in a preview state and can be subject to changes at later point. */
["GiftCardBulkCreate"]: AliasType<{
	/** Returns how many objects were created. */
	count?:boolean,
	/** List of created gift cards. */
	giftCards?:ValueTypes["GiftCard"],
	errors?:ValueTypes["GiftCardError"],
		__typename?: boolean
}>;
	["GiftCardBulkCreateInput"]: {
	/** The number of cards to issue. */
	count:number,
	/** Balance of the gift card. */
	balance:ValueTypes["PriceInput"],
	/** The gift card tags. */
	tags?:string[],
	/** The gift card expiry date. */
	expiryDate?:ValueTypes["Date"] | null,
	/** Determine if gift card is active. */
	isActive:boolean
};
	/** New in Saleor 3.1. Deactivate gift cards. Note: this feature is in a preview
state and can be subject to changes at later point. */
["GiftCardBulkDeactivate"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	errors?:ValueTypes["GiftCardError"],
		__typename?: boolean
}>;
	/** New in Saleor 3.1. Delete gift cards. Note: this feature is in a preview state and can be subject to changes at later point. */
["GiftCardBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	errors?:ValueTypes["GiftCardError"],
		__typename?: boolean
}>;
	["GiftCardCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["GiftCardCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["GiftCardCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["GiftCard"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates a new gift card. */
["GiftCardCreate"]: AliasType<{
	giftCardErrors?:ValueTypes["GiftCardError"],
	errors?:ValueTypes["GiftCardError"],
	giftCard?:ValueTypes["GiftCard"],
		__typename?: boolean
}>;
	["GiftCardCreateInput"]: {
	/** New in Saleor 3.1. The gift card tags to add. Note: this feature is in a
preview state and can be subject to changes at later point. */
	addTags?:string[],
	/** New in Saleor 3.1. The gift card expiry date. Note: this feature is in a
preview state and can be subject to changes at later point. */
	expiryDate?:ValueTypes["Date"] | null,
	/** Start date of the gift card in ISO 8601 format. 

DEPRECATED: this field will be removed in Saleor 4.0. */
	startDate?:ValueTypes["Date"] | null,
	/** End date of the gift card in ISO 8601 format. 

DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead. */
	endDate?:ValueTypes["Date"] | null,
	/** Balance of the gift card. */
	balance:ValueTypes["PriceInput"],
	/** Email of the customer to whom gift card will be sent. */
	userEmail?:string | null,
	/** New in Saleor 3.1. Slug of a channel from which the email should be sent.
Note: this feature is in a preview state and can be subject to changes at later point. */
	channel?:string | null,
	/** New in Saleor 3.1. Determine if gift card is active. Note: this feature is in
a preview state and can be subject to changes at later point. */
	isActive:boolean,
	/** Code to use the gift card. 

DEPRECATED: this field will be removed in Saleor 4.0. The code is now auto generated. */
	code?:string | null,
	/** New in Saleor 3.1. The gift card note from the staff member. Note: this
feature is in a preview state and can be subject to changes at later point. */
	note?:string | null
};
	/** Deactivate a gift card. */
["GiftCardDeactivate"]: AliasType<{
	/** Deactivated gift card. */
	giftCard?:ValueTypes["GiftCard"],
	giftCardErrors?:ValueTypes["GiftCardError"],
	errors?:ValueTypes["GiftCardError"],
		__typename?: boolean
}>;
	/** New in Saleor 3.1. Delete gift card. Note: this feature is in a preview state and can be subject to changes at later point. */
["GiftCardDelete"]: AliasType<{
	giftCardErrors?:ValueTypes["GiftCardError"],
	errors?:ValueTypes["GiftCardError"],
	giftCard?:ValueTypes["GiftCard"],
		__typename?: boolean
}>;
	["GiftCardError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** List of tag values that cause the error. */
	tags?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["GiftCardErrorCode"]:GiftCardErrorCode;
	/** New in Saleor 3.1. History log of the gift card. Note: this feature is in a
preview state and can be subject to changes at later point. */
["GiftCardEvent"]: AliasType<{
	id?:boolean,
	/** Date when event happened at in ISO 8601 format. */
	date?:boolean,
	/** Gift card event type. */
	type?:boolean,
	/** User who performed the action. */
	user?:ValueTypes["User"],
	/** App that performed the action. */
	app?:ValueTypes["App"],
	/** Content of the event. */
	message?:boolean,
	/** Email of the customer. */
	email?:boolean,
	/** The order ID where gift card was used or bought. */
	orderId?:boolean,
	/** User-friendly number of an order where gift card was used or bought. */
	orderNumber?:boolean,
	/** The list of gift card tags. */
	tags?:boolean,
	/** The list of old gift card tags. */
	oldTags?:boolean,
	/** The gift card balance. */
	balance?:ValueTypes["GiftCardEventBalance"],
	/** The gift card expiry date. */
	expiryDate?:boolean,
	/** Previous gift card expiry date. */
	oldExpiryDate?:boolean,
		__typename?: boolean
}>;
	["GiftCardEventBalance"]: AliasType<{
	/** Initial balance of the gift card. */
	initialBalance?:ValueTypes["Money"],
	/** Current balance of the gift card. */
	currentBalance?:ValueTypes["Money"],
	/** Previous initial balance of the gift card. */
	oldInitialBalance?:ValueTypes["Money"],
	/** Previous current balance of the gift card. */
	oldCurrentBalance?:ValueTypes["Money"],
		__typename?: boolean
}>;
	["GiftCardEventFilterInput"]: {
	type?:ValueTypes["GiftCardEventsEnum"] | null,
	orders?:string[]
};
	/** An enumeration. */
["GiftCardEventsEnum"]:GiftCardEventsEnum;
	["GiftCardFilterInput"]: {
	isActive?:boolean | null,
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[],
	tags?:(string | undefined | null)[],
	products?:(string | undefined | null)[],
	usedBy?:(string | undefined | null)[],
	used?:boolean | null,
	currency?:string | null,
	currentBalance?:ValueTypes["PriceRangeInput"] | null,
	initialBalance?:ValueTypes["PriceRangeInput"] | null,
	code?:string | null
};
	/** New in Saleor 3.1. Resend a gift card. Note: this feature is in a preview state
and can be subject to changes at later point. */
["GiftCardResend"]: AliasType<{
	/** Gift card which has been sent. */
	giftCard?:ValueTypes["GiftCard"],
	errors?:ValueTypes["GiftCardError"],
		__typename?: boolean
}>;
	["GiftCardResendInput"]: {
	/** ID of a gift card to resend. */
	id:string,
	/** Email to which gift card should be send. */
	email?:string | null,
	/** Slug of a channel from which the email should be sent. */
	channel:string
};
	/** Gift card related settings from site settings. */
["GiftCardSettings"]: AliasType<{
	/** The gift card expiry type settings. */
	expiryType?:boolean,
	/** The gift card expiry period settings. */
	expiryPeriod?:ValueTypes["TimePeriod"],
		__typename?: boolean
}>;
	["GiftCardSettingsError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["GiftCardSettingsErrorCode"]:GiftCardSettingsErrorCode;
	/** An enumeration. */
["GiftCardSettingsExpiryTypeEnum"]:GiftCardSettingsExpiryTypeEnum;
	/** Update gift card settings. */
["GiftCardSettingsUpdate"]: AliasType<{
	/** Gift card settings. */
	giftCardSettings?:ValueTypes["GiftCardSettings"],
	errors?:ValueTypes["GiftCardSettingsError"],
		__typename?: boolean
}>;
	["GiftCardSettingsUpdateInput"]: {
	/** Defines gift card default expiry settings. */
	expiryType?:ValueTypes["GiftCardSettingsExpiryTypeEnum"] | null,
	/** Defines gift card expiry period. */
	expiryPeriod?:ValueTypes["TimePeriodInputType"] | null
};
	["GiftCardSortField"]:GiftCardSortField;
	["GiftCardSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort gift cards by the selected field. */
	field:ValueTypes["GiftCardSortField"]
};
	/** New in Saleor 3.1. The gift card tag. Note: this feature is in a preview state and can be subject to changes at later point. */
["GiftCardTag"]: AliasType<{
	id?:boolean,
	name?:boolean,
		__typename?: boolean
}>;
	["GiftCardTagCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["GiftCardTagCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["GiftCardTagCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["GiftCardTag"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["GiftCardTagFilterInput"]: {
	search?:string | null
};
	/** Update a gift card. */
["GiftCardUpdate"]: AliasType<{
	giftCardErrors?:ValueTypes["GiftCardError"],
	errors?:ValueTypes["GiftCardError"],
	giftCard?:ValueTypes["GiftCard"],
		__typename?: boolean
}>;
	["GiftCardUpdateInput"]: {
	/** New in Saleor 3.1. The gift card tags to add. Note: this feature is in a
preview state and can be subject to changes at later point. */
	addTags?:string[],
	/** New in Saleor 3.1. The gift card expiry date. Note: this feature is in a
preview state and can be subject to changes at later point. */
	expiryDate?:ValueTypes["Date"] | null,
	/** Start date of the gift card in ISO 8601 format. 

DEPRECATED: this field will be removed in Saleor 4.0. */
	startDate?:ValueTypes["Date"] | null,
	/** End date of the gift card in ISO 8601 format. 

DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead. */
	endDate?:ValueTypes["Date"] | null,
	/** New in Saleor 3.1. The gift card tags to remove. Note: this feature is in a
preview state and can be subject to changes at later point. */
	removeTags?:string[],
	/** New in Saleor 3.1. The gift card balance amount. Note: this feature is in a
preview state and can be subject to changes at later point. */
	balanceAmount?:ValueTypes["PositiveDecimal"] | null
};
	/** Represents permission group data. */
["Group"]: AliasType<{
	id?:boolean,
	name?:boolean,
	/** List of group users */
	users?:ValueTypes["User"],
	/** List of group permissions */
	permissions?:ValueTypes["Permission"],
	/** True, if the currently authenticated user has rights to manage a group. */
	userCanManage?:boolean,
		__typename?: boolean
}>;
	["GroupCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["GroupCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["GroupCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["Group"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Represents an image. */
["Image"]: AliasType<{
	/** The URL of the image. */
	url?:boolean,
	/** Alt text for an image. */
	alt?:boolean,
		__typename?: boolean
}>;
	["IntRangeInput"]: {
	/** Value greater than or equal to. */
	gte?:number | null,
	/** Value less than or equal to. */
	lte?:number | null
};
	/** Represents an Invoice. */
["Invoice"]: AliasType<{
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	/** Job status. */
	status?:boolean,
	createdAt?:boolean,
	updatedAt?:boolean,
	message?:boolean,
	/** The ID of the object. */
	id?:boolean,
	number?:boolean,
	externalUrl?:boolean,
	/** URL to download an invoice. */
	url?:boolean,
		__typename?: boolean
}>;
	/** Creates a ready to send invoice. */
["InvoiceCreate"]: AliasType<{
	invoiceErrors?:ValueTypes["InvoiceError"],
	errors?:ValueTypes["InvoiceError"],
	invoice?:ValueTypes["Invoice"],
		__typename?: boolean
}>;
	["InvoiceCreateInput"]: {
	/** Invoice number. */
	number:string,
	/** URL of an invoice to download. */
	url:string
};
	/** Deletes an invoice. */
["InvoiceDelete"]: AliasType<{
	invoiceErrors?:ValueTypes["InvoiceError"],
	errors?:ValueTypes["InvoiceError"],
	invoice?:ValueTypes["Invoice"],
		__typename?: boolean
}>;
	["InvoiceError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["InvoiceErrorCode"]:InvoiceErrorCode;
	/** Request an invoice for the order using plugin. */
["InvoiceRequest"]: AliasType<{
	/** Order related to an invoice. */
	order?:ValueTypes["Order"],
	invoiceErrors?:ValueTypes["InvoiceError"],
	errors?:ValueTypes["InvoiceError"],
	invoice?:ValueTypes["Invoice"],
		__typename?: boolean
}>;
	/** Requests deletion of an invoice. */
["InvoiceRequestDelete"]: AliasType<{
	invoiceErrors?:ValueTypes["InvoiceError"],
	errors?:ValueTypes["InvoiceError"],
	invoice?:ValueTypes["Invoice"],
		__typename?: boolean
}>;
	/** Send an invoice notification to the customer. */
["InvoiceSendNotification"]: AliasType<{
	invoiceErrors?:ValueTypes["InvoiceError"],
	errors?:ValueTypes["InvoiceError"],
	invoice?:ValueTypes["Invoice"],
		__typename?: boolean
}>;
	/** Updates an invoice. */
["InvoiceUpdate"]: AliasType<{
	invoiceErrors?:ValueTypes["InvoiceError"],
	errors?:ValueTypes["InvoiceError"],
	invoice?:ValueTypes["Invoice"],
		__typename?: boolean
}>;
	["Job"]:AliasType<{
		/** Job status. */
	status?:boolean,
	/** Created date time of job in ISO 8601 format. */
	createdAt?:boolean,
	/** Date time of job last update in ISO 8601 format. */
	updatedAt?:boolean,
	/** Job message. */
	message?:boolean;
		['...on AppInstallation']?: Omit<ValueTypes["AppInstallation"],keyof ValueTypes["Job"]>;
		['...on ExportFile']?: Omit<ValueTypes["ExportFile"],keyof ValueTypes["Job"]>;
		['...on Invoice']?: Omit<ValueTypes["Invoice"],keyof ValueTypes["Job"]>;
		__typename?: boolean
}>;
	/** An enumeration. */
["JobStatusEnum"]:JobStatusEnum;
	["JSONString"]:unknown;
	/** An enumeration. */
["LanguageCodeEnum"]:LanguageCodeEnum;
	["LanguageDisplay"]: AliasType<{
	/** ISO 639 representation of the language name. */
	code?:boolean,
	/** Full name of the language. */
	language?:boolean,
		__typename?: boolean
}>;
	["LimitInfo"]: AliasType<{
	/** Defines the current resource usage. */
	currentUsage?:ValueTypes["Limits"],
	/** Defines the allowed maximum resource usage, null means unlimited. */
	allowedUsage?:ValueTypes["Limits"],
		__typename?: boolean
}>;
	["Limits"]: AliasType<{
	channels?:boolean,
	orders?:boolean,
	productVariants?:boolean,
	staffUsers?:boolean,
	warehouses?:boolean,
		__typename?: boolean
}>;
	/** The manifest definition. */
["Manifest"]: AliasType<{
	identifier?:boolean,
	version?:boolean,
	name?:boolean,
	about?:boolean,
	permissions?:ValueTypes["Permission"],
	appUrl?:boolean,
	configurationUrl?:boolean,
	tokenTargetUrl?:boolean,
	dataPrivacy?:boolean,
	dataPrivacyUrl?:boolean,
	homepageUrl?:boolean,
	supportUrl?:boolean,
	extensions?:ValueTypes["AppManifestExtension"],
		__typename?: boolean
}>;
	["Margin"]: AliasType<{
	start?:boolean,
	stop?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["MeasurementUnitsEnum"]:MeasurementUnitsEnum;
	/** Represents a single menu - an object that is used to help navigate through the store. */
["Menu"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	name?:boolean,
	slug?:boolean,
	items?:ValueTypes["MenuItem"],
		__typename?: boolean
}>;
	/** Deletes menus. */
["MenuBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	menuErrors?:ValueTypes["MenuError"],
	errors?:ValueTypes["MenuError"],
		__typename?: boolean
}>;
	["MenuCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["MenuCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["MenuCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["Menu"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates a new Menu. */
["MenuCreate"]: AliasType<{
	menuErrors?:ValueTypes["MenuError"],
	errors?:ValueTypes["MenuError"],
	menu?:ValueTypes["Menu"],
		__typename?: boolean
}>;
	["MenuCreateInput"]: {
	/** Name of the menu. */
	name:string,
	/** Slug of the menu. Will be generated if not provided. */
	slug?:string | null,
	/** List of menu items. */
	items?:(ValueTypes["MenuItemInput"] | undefined | null)[]
};
	/** Deletes a menu. */
["MenuDelete"]: AliasType<{
	menuErrors?:ValueTypes["MenuError"],
	errors?:ValueTypes["MenuError"],
	menu?:ValueTypes["Menu"],
		__typename?: boolean
}>;
	["MenuError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["MenuErrorCode"]:MenuErrorCode;
	["MenuFilterInput"]: {
	search?:string | null,
	slug?:(string | undefined | null)[],
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[]
};
	["MenuInput"]: {
	/** Name of the menu. */
	name?:string | null,
	/** Slug of the menu. */
	slug?:string | null
};
	/** Represents a single item of the related menu. Can store categories, collection or pages. */
["MenuItem"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	name?:boolean,
	menu?:ValueTypes["Menu"],
	parent?:ValueTypes["MenuItem"],
	category?:ValueTypes["Category"],
	collection?:ValueTypes["Collection"],
	page?:ValueTypes["Page"],
	level?:boolean,
	children?:ValueTypes["MenuItem"],
	/** URL to the menu item. */
	url?:boolean,
translation?: [{	/** A language code to return the translation for menu item. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["MenuItemTranslation"]],
		__typename?: boolean
}>;
	/** Deletes menu items. */
["MenuItemBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	menuErrors?:ValueTypes["MenuError"],
	errors?:ValueTypes["MenuError"],
		__typename?: boolean
}>;
	["MenuItemCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["MenuItemCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["MenuItemCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["MenuItem"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates a new menu item. */
["MenuItemCreate"]: AliasType<{
	menuErrors?:ValueTypes["MenuError"],
	errors?:ValueTypes["MenuError"],
	menuItem?:ValueTypes["MenuItem"],
		__typename?: boolean
}>;
	["MenuItemCreateInput"]: {
	/** Name of the menu item. */
	name:string,
	/** URL of the pointed item. */
	url?:string | null,
	/** Category to which item points. */
	category?:string | null,
	/** Collection to which item points. */
	collection?:string | null,
	/** Page to which item points. */
	page?:string | null,
	/** Menu to which item belongs. */
	menu:string,
	/** ID of the parent menu. If empty, menu will be top level menu. */
	parent?:string | null
};
	/** Deletes a menu item. */
["MenuItemDelete"]: AliasType<{
	menuErrors?:ValueTypes["MenuError"],
	errors?:ValueTypes["MenuError"],
	menuItem?:ValueTypes["MenuItem"],
		__typename?: boolean
}>;
	["MenuItemFilterInput"]: {
	search?:string | null,
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[]
};
	["MenuItemInput"]: {
	/** Name of the menu item. */
	name?:string | null,
	/** URL of the pointed item. */
	url?:string | null,
	/** Category to which item points. */
	category?:string | null,
	/** Collection to which item points. */
	collection?:string | null,
	/** Page to which item points. */
	page?:string | null
};
	/** Moves items of menus. */
["MenuItemMove"]: AliasType<{
	/** Assigned menu to move within. */
	menu?:ValueTypes["Menu"],
	menuErrors?:ValueTypes["MenuError"],
	errors?:ValueTypes["MenuError"],
		__typename?: boolean
}>;
	["MenuItemMoveInput"]: {
	/** The menu item ID to move. */
	itemId:string,
	/** ID of the parent menu. If empty, menu will be top level menu. */
	parentId?:string | null,
	/** The new relative sorting position of the item (from -inf to +inf). 1 moves the
item one position forward, -1 moves the item one position backward, 0 leaves
the item unchanged. */
	sortOrder?:number | null
};
	["MenuItemSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort menu items by the selected field. */
	field:ValueTypes["MenuItemsSortField"]
};
	["MenuItemsSortField"]:MenuItemsSortField;
	["MenuItemTranslatableContent"]: AliasType<{
	id?:boolean,
	name?:boolean,
translation?: [{	/** A language code to return the translation for menu item. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["MenuItemTranslation"]],
	/** Represents a single item of the related menu. Can store categories, collection or pages. */
	menuItem?:ValueTypes["MenuItem"],
		__typename?: boolean
}>;
	/** Creates/updates translations for a menu item. */
["MenuItemTranslate"]: AliasType<{
	translationErrors?:ValueTypes["TranslationError"],
	errors?:ValueTypes["TranslationError"],
	menuItem?:ValueTypes["MenuItem"],
		__typename?: boolean
}>;
	["MenuItemTranslation"]: AliasType<{
	id?:boolean,
	/** Translation language. */
	language?:ValueTypes["LanguageDisplay"],
	name?:boolean,
		__typename?: boolean
}>;
	/** Updates a menu item. */
["MenuItemUpdate"]: AliasType<{
	menuErrors?:ValueTypes["MenuError"],
	errors?:ValueTypes["MenuError"],
	menuItem?:ValueTypes["MenuItem"],
		__typename?: boolean
}>;
	["MenuSortField"]:MenuSortField;
	["MenuSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort menus by the selected field. */
	field:ValueTypes["MenuSortField"]
};
	/** Updates a menu. */
["MenuUpdate"]: AliasType<{
	menuErrors?:ValueTypes["MenuError"],
	errors?:ValueTypes["MenuError"],
	menu?:ValueTypes["Menu"],
		__typename?: boolean
}>;
	["MetadataError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["MetadataErrorCode"]:MetadataErrorCode;
	["MetadataFilter"]: {
	/** Key of a metadata item. */
	key:string,
	/** Value of a metadata item. */
	value?:string | null
};
	["MetadataInput"]: {
	/** Key of a metadata item. */
	key:string,
	/** Value of a metadata item. */
	value:string
};
	["MetadataItem"]: AliasType<{
	/** Key of a metadata item. */
	key?:boolean,
	/** Value of a metadata item. */
	value?:boolean,
		__typename?: boolean
}>;
	/** Represents amount of money in specific currency. */
["Money"]: AliasType<{
	/** Currency code. */
	currency?:boolean,
	/** Amount of money. */
	amount?:boolean,
		__typename?: boolean
}>;
	["MoneyInput"]: {
	/** Currency code. */
	currency:string,
	/** Amount of money. */
	amount:ValueTypes["PositiveDecimal"]
};
	/** Represents a range of amounts of money. */
["MoneyRange"]: AliasType<{
	/** Lower bound of a price range. */
	start?:ValueTypes["Money"],
	/** Upper bound of a price range. */
	stop?:ValueTypes["Money"],
		__typename?: boolean
}>;
	["MoveProductInput"]: {
	/** The ID of the product to move. */
	productId:string,
	/** The relative sorting position of the product (from -inf to +inf) starting from
the first given product's actual position.1 moves the item one position
forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
	sortOrder?:number | null
};
	["Mutation"]: AliasType<{
webhookCreate?: [{	/** Fields required to create a webhook. */
	input:ValueTypes["WebhookCreateInput"]},ValueTypes["WebhookCreate"]],
webhookDelete?: [{	/** ID of a webhook to delete. */
	id:string},ValueTypes["WebhookDelete"]],
webhookUpdate?: [{	/** ID of a webhook to update. */
	id:string,	/** Fields required to update a webhook. */
	input:ValueTypes["WebhookUpdateInput"]},ValueTypes["WebhookUpdate"]],
eventDeliveryRetry?: [{	/** ID of the event delivery to retry. */
	id:string},ValueTypes["EventDeliveryRetry"]],
createWarehouse?: [{	/** Fields required to create warehouse. */
	input:ValueTypes["WarehouseCreateInput"]},ValueTypes["WarehouseCreate"]],
updateWarehouse?: [{	/** ID of a warehouse to update. */
	id:string,	/** Fields required to update warehouse. */
	input:ValueTypes["WarehouseUpdateInput"]},ValueTypes["WarehouseUpdate"]],
deleteWarehouse?: [{	/** ID of a warehouse to delete. */
	id:string},ValueTypes["WarehouseDelete"]],
assignWarehouseShippingZone?: [{	/** ID of a warehouse to update. */
	id:string,	/** List of shipping zone IDs. */
	shippingZoneIds:string[]},ValueTypes["WarehouseShippingZoneAssign"]],
unassignWarehouseShippingZone?: [{	/** ID of a warehouse to update. */
	id:string,	/** List of shipping zone IDs. */
	shippingZoneIds:string[]},ValueTypes["WarehouseShippingZoneUnassign"]],
staffNotificationRecipientCreate?: [{	/** Fields required to create a staff notification recipient. */
	input:ValueTypes["StaffNotificationRecipientInput"]},ValueTypes["StaffNotificationRecipientCreate"]],
staffNotificationRecipientUpdate?: [{	/** ID of a staff notification recipient to update. */
	id:string,	/** Fields required to update a staff notification recipient. */
	input:ValueTypes["StaffNotificationRecipientInput"]},ValueTypes["StaffNotificationRecipientUpdate"]],
staffNotificationRecipientDelete?: [{	/** ID of a staff notification recipient to delete. */
	id:string},ValueTypes["StaffNotificationRecipientDelete"]],
shopDomainUpdate?: [{	/** Fields required to update site. */
	input?:ValueTypes["SiteDomainInput"] | null},ValueTypes["ShopDomainUpdate"]],
shopSettingsUpdate?: [{	/** Fields required to update shop settings. */
	input:ValueTypes["ShopSettingsInput"]},ValueTypes["ShopSettingsUpdate"]],
	/** Fetch tax rates. */
	shopFetchTaxRates?:ValueTypes["ShopFetchTaxRates"],
shopSettingsTranslate?: [{	/** Fields required to update shop settings translations. */
	input:ValueTypes["ShopSettingsTranslationInput"],	/** Translation language code. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["ShopSettingsTranslate"]],
shopAddressUpdate?: [{	/** Fields required to update shop address. */
	input?:ValueTypes["AddressInput"] | null},ValueTypes["ShopAddressUpdate"]],
orderSettingsUpdate?: [{	/** Fields required to update shop order settings. */
	input:ValueTypes["OrderSettingsUpdateInput"]},ValueTypes["OrderSettingsUpdate"]],
giftCardSettingsUpdate?: [{	/** Fields required to update gift card settings. */
	input:ValueTypes["GiftCardSettingsUpdateInput"]},ValueTypes["GiftCardSettingsUpdate"]],
shippingMethodChannelListingUpdate?: [{	/** ID of a shipping method to update. */
	id:string,	/** Fields required to update shipping method channel listings. */
	input:ValueTypes["ShippingMethodChannelListingInput"]},ValueTypes["ShippingMethodChannelListingUpdate"]],
shippingPriceCreate?: [{	/** Fields required to create a shipping price. */
	input:ValueTypes["ShippingPriceInput"]},ValueTypes["ShippingPriceCreate"]],
shippingPriceDelete?: [{	/** ID of a shipping price to delete. */
	id:string},ValueTypes["ShippingPriceDelete"]],
shippingPriceBulkDelete?: [{	/** List of shipping price IDs to delete. */
	ids?:string[]},ValueTypes["ShippingPriceBulkDelete"]],
shippingPriceUpdate?: [{	/** ID of a shipping price to update. */
	id:string,	/** Fields required to update a shipping price. */
	input:ValueTypes["ShippingPriceInput"]},ValueTypes["ShippingPriceUpdate"]],
shippingPriceTranslate?: [{	/** ('ShippingMethodType ID or ShippingMethodTranslatableContent ID.',) */
	id:string,	input:ValueTypes["ShippingPriceTranslationInput"],	/** Translation language code. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["ShippingPriceTranslate"]],
shippingPriceExcludeProducts?: [{	/** ID of a shipping price. */
	id:string,	/** Exclude products input. */
	input:ValueTypes["ShippingPriceExcludeProductsInput"]},ValueTypes["ShippingPriceExcludeProducts"]],
shippingPriceRemoveProductFromExclude?: [{	/** ID of a shipping price. */
	id:string,	/** List of products which will be removed from excluded list. */
	products?:string[]},ValueTypes["ShippingPriceRemoveProductFromExclude"]],
shippingZoneCreate?: [{	/** Fields required to create a shipping zone. */
	input:ValueTypes["ShippingZoneCreateInput"]},ValueTypes["ShippingZoneCreate"]],
shippingZoneDelete?: [{	/** ID of a shipping zone to delete. */
	id:string},ValueTypes["ShippingZoneDelete"]],
shippingZoneBulkDelete?: [{	/** List of shipping zone IDs to delete. */
	ids?:string[]},ValueTypes["ShippingZoneBulkDelete"]],
shippingZoneUpdate?: [{	/** ID of a shipping zone to update. */
	id:string,	/** Fields required to update a shipping zone. */
	input:ValueTypes["ShippingZoneUpdateInput"]},ValueTypes["ShippingZoneUpdate"]],
productAttributeAssign?: [{	/** The operations to perform. */
	operations?:ValueTypes["ProductAttributeAssignInput"][],	/** ID of the product type to assign the attributes into. */
	productTypeId:string},ValueTypes["ProductAttributeAssign"]],
productAttributeAssignmentUpdate?: [{	/** The operations to perform. */
	operations?:ValueTypes["ProductAttributeAssignmentUpdateInput"][],	/** ID of the product type to assign the attributes into. */
	productTypeId:string},ValueTypes["ProductAttributeAssignmentUpdate"]],
productAttributeUnassign?: [{	/** The IDs of the attributes to unassign. */
	attributeIds?:string[],	/** ID of the product type from which the attributes should be unassigned. */
	productTypeId:string},ValueTypes["ProductAttributeUnassign"]],
categoryCreate?: [{	/** Fields required to create a category. */
	input:ValueTypes["CategoryInput"],	/** ID of the parent category. If empty, category will be top level category. */
	parent?:string | null},ValueTypes["CategoryCreate"]],
categoryDelete?: [{	/** ID of a category to delete. */
	id:string},ValueTypes["CategoryDelete"]],
categoryBulkDelete?: [{	/** List of category IDs to delete. */
	ids?:string[]},ValueTypes["CategoryBulkDelete"]],
categoryUpdate?: [{	/** ID of a category to update. */
	id:string,	/** Fields required to update a category. */
	input:ValueTypes["CategoryInput"]},ValueTypes["CategoryUpdate"]],
categoryTranslate?: [{	/** Category ID or CategoryTranslatableContent ID. */
	id:string,	input:ValueTypes["TranslationInput"],	/** Translation language code. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["CategoryTranslate"]],
collectionAddProducts?: [{	/** ID of a collection. */
	collectionId:string,	/** List of product IDs. */
	products?:string[]},ValueTypes["CollectionAddProducts"]],
collectionCreate?: [{	/** Fields required to create a collection. */
	input:ValueTypes["CollectionCreateInput"]},ValueTypes["CollectionCreate"]],
collectionDelete?: [{	/** ID of a collection to delete. */
	id:string},ValueTypes["CollectionDelete"]],
collectionReorderProducts?: [{	/** ID of a collection. */
	collectionId:string,	/** The collection products position operations. */
	moves?:ValueTypes["MoveProductInput"][]},ValueTypes["CollectionReorderProducts"]],
collectionBulkDelete?: [{	/** List of collection IDs to delete. */
	ids?:string[]},ValueTypes["CollectionBulkDelete"]],
collectionRemoveProducts?: [{	/** ID of a collection. */
	collectionId:string,	/** List of product IDs. */
	products?:string[]},ValueTypes["CollectionRemoveProducts"]],
collectionUpdate?: [{	/** ID of a collection to update. */
	id:string,	/** Fields required to update a collection. */
	input:ValueTypes["CollectionInput"]},ValueTypes["CollectionUpdate"]],
collectionTranslate?: [{	/** Collection ID or CollectionTranslatableContent ID. */
	id:string,	input:ValueTypes["TranslationInput"],	/** Translation language code. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["CollectionTranslate"]],
collectionChannelListingUpdate?: [{	/** ID of a collection to update. */
	id:string,	/** Fields required to create or update collection channel listings. */
	input:ValueTypes["CollectionChannelListingUpdateInput"]},ValueTypes["CollectionChannelListingUpdate"]],
productCreate?: [{	/** Fields required to create a product. */
	input:ValueTypes["ProductCreateInput"]},ValueTypes["ProductCreate"]],
productDelete?: [{	/** ID of a product to delete. */
	id:string},ValueTypes["ProductDelete"]],
productBulkDelete?: [{	/** List of product IDs to delete. */
	ids?:string[]},ValueTypes["ProductBulkDelete"]],
productUpdate?: [{	/** ID of a product to update. */
	id:string,	/** Fields required to update a product. */
	input:ValueTypes["ProductInput"]},ValueTypes["ProductUpdate"]],
productTranslate?: [{	/** Product ID or ProductTranslatableContent ID. */
	id:string,	input:ValueTypes["TranslationInput"],	/** Translation language code. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["ProductTranslate"]],
productChannelListingUpdate?: [{	/** ID of a product to update. */
	id:string,	/** Fields required to create or update product channel listings. */
	input:ValueTypes["ProductChannelListingUpdateInput"]},ValueTypes["ProductChannelListingUpdate"]],
productMediaCreate?: [{	/** Fields required to create a product media. */
	input:ValueTypes["ProductMediaCreateInput"]},ValueTypes["ProductMediaCreate"]],
productVariantReorder?: [{	/** The list of variant reordering operations. */
	moves?:ValueTypes["ReorderInput"][],	/** Id of product that variants order will be altered. */
	productId:string},ValueTypes["ProductVariantReorder"]],
productMediaDelete?: [{	/** ID of a product media to delete. */
	id:string},ValueTypes["ProductMediaDelete"]],
productMediaBulkDelete?: [{	/** List of product media IDs to delete. */
	ids?:string[]},ValueTypes["ProductMediaBulkDelete"]],
productMediaReorder?: [{	/** IDs of a product media in the desired order. */
	mediaIds?:string[],	/** ID of product that media order will be altered. */
	productId:string},ValueTypes["ProductMediaReorder"]],
productMediaUpdate?: [{	/** ID of a product media to update. */
	id:string,	/** Fields required to update a product media. */
	input:ValueTypes["ProductMediaUpdateInput"]},ValueTypes["ProductMediaUpdate"]],
productTypeCreate?: [{	/** Fields required to create a product type. */
	input:ValueTypes["ProductTypeInput"]},ValueTypes["ProductTypeCreate"]],
productTypeDelete?: [{	/** ID of a product type to delete. */
	id:string},ValueTypes["ProductTypeDelete"]],
productTypeBulkDelete?: [{	/** List of product type IDs to delete. */
	ids?:string[]},ValueTypes["ProductTypeBulkDelete"]],
productTypeUpdate?: [{	/** ID of a product type to update. */
	id:string,	/** Fields required to update a product type. */
	input:ValueTypes["ProductTypeInput"]},ValueTypes["ProductTypeUpdate"]],
productTypeReorderAttributes?: [{	/** The list of attribute reordering operations. */
	moves?:ValueTypes["ReorderInput"][],	/** ID of a product type. */
	productTypeId:string,	/** The attribute type to reorder. */
	type:ValueTypes["ProductAttributeType"]},ValueTypes["ProductTypeReorderAttributes"]],
productReorderAttributeValues?: [{	/** ID of an attribute. */
	attributeId:string,	/** The list of reordering operations for given attribute values. */
	moves?:ValueTypes["ReorderInput"][],	/** ID of a product. */
	productId:string},ValueTypes["ProductReorderAttributeValues"]],
digitalContentCreate?: [{	/** Fields required to create a digital content. */
	input:ValueTypes["DigitalContentUploadInput"],	/** ID of a product variant to upload digital content. */
	variantId:string},ValueTypes["DigitalContentCreate"]],
digitalContentDelete?: [{	/** ID of a product variant with digital content to remove. */
	variantId:string},ValueTypes["DigitalContentDelete"]],
digitalContentUpdate?: [{	/** Fields required to update a digital content. */
	input:ValueTypes["DigitalContentInput"],	/** ID of a product variant with digital content to update. */
	variantId:string},ValueTypes["DigitalContentUpdate"]],
digitalContentUrlCreate?: [{	/** Fields required to create a new url. */
	input:ValueTypes["DigitalContentUrlCreateInput"]},ValueTypes["DigitalContentUrlCreate"]],
productVariantCreate?: [{	/** Fields required to create a product variant. */
	input:ValueTypes["ProductVariantCreateInput"]},ValueTypes["ProductVariantCreate"]],
productVariantDelete?: [{	/** ID of a product variant to delete. */
	id:string},ValueTypes["ProductVariantDelete"]],
productVariantBulkCreate?: [{	/** ID of the product to create the variants for. */
	product:string,	/** Input list of product variants to create. */
	variants?:ValueTypes["ProductVariantBulkCreateInput"][]},ValueTypes["ProductVariantBulkCreate"]],
productVariantBulkDelete?: [{	/** List of product variant IDs to delete. */
	ids?:string[]},ValueTypes["ProductVariantBulkDelete"]],
productVariantStocksCreate?: [{	/** Input list of stocks to create. */
	stocks:ValueTypes["StockInput"][],	/** ID of a product variant for which stocks will be created. */
	variantId:string},ValueTypes["ProductVariantStocksCreate"]],
productVariantStocksDelete?: [{	/** ID of product variant for which stocks will be deleted. */
	variantId:string,	warehouseIds?:string[]},ValueTypes["ProductVariantStocksDelete"]],
productVariantStocksUpdate?: [{	/** Input list of stocks to create. */
	stocks:ValueTypes["StockInput"][],	/** ID of a product variant for which stocks will be created. */
	variantId:string},ValueTypes["ProductVariantStocksUpdate"]],
productVariantUpdate?: [{	/** ID of a product variant to update. */
	id:string,	/** Fields required to update a product variant. */
	input:ValueTypes["ProductVariantInput"]},ValueTypes["ProductVariantUpdate"]],
productVariantSetDefault?: [{	/** Id of a product that will have the default variant set. */
	productId:string,	/** Id of a variant that will be set as default. */
	variantId:string},ValueTypes["ProductVariantSetDefault"]],
productVariantTranslate?: [{	/** ProductVariant ID or ProductVariantTranslatableContent ID. */
	id:string,	input:ValueTypes["NameTranslationInput"],	/** Translation language code. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["ProductVariantTranslate"]],
productVariantChannelListingUpdate?: [{	/** ID of a product variant to update. */
	id:string,	/** List of fields required to create or upgrade product variant channel listings. */
	input:ValueTypes["ProductVariantChannelListingAddInput"][]},ValueTypes["ProductVariantChannelListingUpdate"]],
productVariantReorderAttributeValues?: [{	/** ID of an attribute. */
	attributeId:string,	/** The list of reordering operations for given attribute values. */
	moves?:ValueTypes["ReorderInput"][],	/** ID of a product variant. */
	variantId:string},ValueTypes["ProductVariantReorderAttributeValues"]],
productVariantPreorderDeactivate?: [{	/** ID of a variant which preorder should be deactivated. */
	id:string},ValueTypes["ProductVariantPreorderDeactivate"]],
variantMediaAssign?: [{	/** ID of a product media to assign to a variant. */
	mediaId:string,	/** ID of a product variant. */
	variantId:string},ValueTypes["VariantMediaAssign"]],
variantMediaUnassign?: [{	/** ID of a product media to unassign from a variant. */
	mediaId:string,	/** ID of a product variant. */
	variantId:string},ValueTypes["VariantMediaUnassign"]],
paymentCapture?: [{	/** Transaction amount. */
	amount?:ValueTypes["PositiveDecimal"] | null,	/** Payment ID. */
	paymentId:string},ValueTypes["PaymentCapture"]],
paymentRefund?: [{	/** Transaction amount. */
	amount?:ValueTypes["PositiveDecimal"] | null,	/** Payment ID. */
	paymentId:string},ValueTypes["PaymentRefund"]],
paymentVoid?: [{	/** Payment ID. */
	paymentId:string},ValueTypes["PaymentVoid"]],
paymentInitialize?: [{	/** Slug of a channel for which the data should be returned. */
	channel?:string | null,	/** A gateway name used to initialize the payment. */
	gateway:string,	/** Client-side generated data required to initialize the payment. */
	paymentData?:ValueTypes["JSONString"] | null},ValueTypes["PaymentInitialize"]],
paymentCheckBalance?: [{	/** Fields required to check payment balance. */
	input:ValueTypes["PaymentCheckBalanceInput"]},ValueTypes["PaymentCheckBalance"]],
paymentCreate?: [{	/** The ID of the checkout or order. */
	id:string,	/** Input data required to create a new payment object. */
	payment:ValueTypes["PaymentPOCCreateInput"],	/** Data that defines a payment transaction. */
	transaction?:ValueTypes["TransactionInput"] | null},ValueTypes["PaymentCreate"]],
paymentUpdate?: [{	/** The ID of the payment. */
	id:string,	/** Input data required to create a new payment object. */
	payment:ValueTypes["PaymentPOCUpdateInput"],	/** Data that defines a payment transaction. */
	transaction?:ValueTypes["TransactionInput"] | null},ValueTypes["PaymentUpdate"]],
pageCreate?: [{	/** Fields required to create a page. */
	input:ValueTypes["PageCreateInput"]},ValueTypes["PageCreate"]],
pageDelete?: [{	/** ID of a page to delete. */
	id:string},ValueTypes["PageDelete"]],
pageBulkDelete?: [{	/** List of page IDs to delete. */
	ids?:string[]},ValueTypes["PageBulkDelete"]],
pageBulkPublish?: [{	/** List of page IDs to (un)publish. */
	ids?:string[],	/** Determine if pages will be published or not. */
	isPublished:boolean},ValueTypes["PageBulkPublish"]],
pageUpdate?: [{	/** ID of a page to update. */
	id:string,	/** Fields required to update a page. */
	input:ValueTypes["PageInput"]},ValueTypes["PageUpdate"]],
pageTranslate?: [{	/** Page ID or PageTranslatableContent ID. */
	id:string,	input:ValueTypes["PageTranslationInput"],	/** Translation language code. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["PageTranslate"]],
pageTypeCreate?: [{	/** Fields required to create page type. */
	input:ValueTypes["PageTypeCreateInput"]},ValueTypes["PageTypeCreate"]],
pageTypeUpdate?: [{	/** ID of the page type to update. */
	id?:string | null,	/** Fields required to update page type. */
	input:ValueTypes["PageTypeUpdateInput"]},ValueTypes["PageTypeUpdate"]],
pageTypeDelete?: [{	/** ID of the page type to delete. */
	id:string},ValueTypes["PageTypeDelete"]],
pageTypeBulkDelete?: [{	/** List of page type IDs to delete */
	ids:string[]},ValueTypes["PageTypeBulkDelete"]],
pageAttributeAssign?: [{	/** The IDs of the attributes to assign. */
	attributeIds:string[],	/** ID of the page type to assign the attributes into. */
	pageTypeId:string},ValueTypes["PageAttributeAssign"]],
pageAttributeUnassign?: [{	/** The IDs of the attributes to unassign. */
	attributeIds:string[],	/** ID of the page type from which the attributes should be unassign. */
	pageTypeId:string},ValueTypes["PageAttributeUnassign"]],
pageTypeReorderAttributes?: [{	/** The list of attribute reordering operations. */
	moves:ValueTypes["ReorderInput"][],	/** ID of a page type. */
	pageTypeId:string},ValueTypes["PageTypeReorderAttributes"]],
pageReorderAttributeValues?: [{	/** ID of an attribute. */
	attributeId:string,	/** The list of reordering operations for given attribute values. */
	moves?:ValueTypes["ReorderInput"][],	/** ID of a page. */
	pageId:string},ValueTypes["PageReorderAttributeValues"]],
draftOrderComplete?: [{	/** ID of the order that will be completed. */
	id:string},ValueTypes["DraftOrderComplete"]],
draftOrderCreate?: [{	/** Fields required to create an order. */
	input:ValueTypes["DraftOrderCreateInput"]},ValueTypes["DraftOrderCreate"]],
draftOrderDelete?: [{	/** ID of a draft order to delete. */
	id:string},ValueTypes["DraftOrderDelete"]],
draftOrderBulkDelete?: [{	/** List of draft order IDs to delete. */
	ids?:string[]},ValueTypes["DraftOrderBulkDelete"]],
draftOrderLinesBulkDelete?: [{	/** List of order lines IDs to delete. */
	ids?:string[]},ValueTypes["DraftOrderLinesBulkDelete"]],
draftOrderUpdate?: [{	/** ID of a draft order to update. */
	id:string,	/** Fields required to update an order. */
	input:ValueTypes["DraftOrderInput"]},ValueTypes["DraftOrderUpdate"]],
orderAddNote?: [{	/** ID of the order to add a note for. */
	order:string,	/** Fields required to create a note for the order. */
	input:ValueTypes["OrderAddNoteInput"]},ValueTypes["OrderAddNote"]],
orderCancel?: [{	/** ID of the order to cancel. */
	id:string},ValueTypes["OrderCancel"]],
orderCapture?: [{	/** Amount of money to capture. */
	amount:ValueTypes["PositiveDecimal"],	/** ID of the order to capture. */
	id:string},ValueTypes["OrderCapture"]],
orderConfirm?: [{	/** ID of an order to confirm. */
	id:string},ValueTypes["OrderConfirm"]],
orderFulfill?: [{	/** Fields required to create a fulfillment. */
	input:ValueTypes["OrderFulfillInput"],	/** ID of the order to be fulfilled. */
	order?:string | null},ValueTypes["OrderFulfill"]],
orderFulfillmentCancel?: [{	/** ID of a fulfillment to cancel. */
	id:string,	/** Fields required to cancel a fulfillment. */
	input?:ValueTypes["FulfillmentCancelInput"] | null},ValueTypes["FulfillmentCancel"]],
orderFulfillmentApprove?: [{	/** True if stock could be exceeded. */
	allowStockToBeExceeded?:boolean | null,	/** ID of a fulfillment to approve. */
	id:string,	/** True if confirmation email should be send. */
	notifyCustomer:boolean},ValueTypes["FulfillmentApprove"]],
orderFulfillmentUpdateTracking?: [{	/** ID of a fulfillment to update. */
	id:string,	/** Fields required to update a fulfillment. */
	input:ValueTypes["FulfillmentUpdateTrackingInput"]},ValueTypes["FulfillmentUpdateTracking"]],
orderFulfillmentRefundProducts?: [{	/** Fields required to create an refund fulfillment. */
	input:ValueTypes["OrderRefundProductsInput"],	/** ID of the order to be refunded. */
	order:string},ValueTypes["FulfillmentRefundProducts"]],
orderFulfillmentReturnProducts?: [{	/** Fields required to return products. */
	input:ValueTypes["OrderReturnProductsInput"],	/** ID of the order to be returned. */
	order:string},ValueTypes["FulfillmentReturnProducts"]],
orderLinesCreate?: [{	/** ID of the order to add the lines to. */
	id:string,	/** Fields required to add order lines. */
	input?:ValueTypes["OrderLineCreateInput"][]},ValueTypes["OrderLinesCreate"]],
orderLineDelete?: [{	/** ID of the order line to delete. */
	id:string},ValueTypes["OrderLineDelete"]],
orderLineUpdate?: [{	/** ID of the order line to update. */
	id:string,	/** Fields required to update an order line. */
	input:ValueTypes["OrderLineInput"]},ValueTypes["OrderLineUpdate"]],
orderDiscountAdd?: [{	/** Fields required to create a discount for the order. */
	input:ValueTypes["OrderDiscountCommonInput"],	/** ID of an order to discount. */
	orderId:string},ValueTypes["OrderDiscountAdd"]],
orderDiscountUpdate?: [{	/** ID of a discount to update. */
	discountId:string,	/** Fields required to update a discount for the order. */
	input:ValueTypes["OrderDiscountCommonInput"]},ValueTypes["OrderDiscountUpdate"]],
orderDiscountDelete?: [{	/** ID of a discount to remove. */
	discountId:string},ValueTypes["OrderDiscountDelete"]],
orderLineDiscountUpdate?: [{	/** Fields required to update price for the order line. */
	input:ValueTypes["OrderDiscountCommonInput"],	/** ID of a order line to update price */
	orderLineId:string},ValueTypes["OrderLineDiscountUpdate"]],
orderLineDiscountRemove?: [{	/** ID of a order line to remove its discount */
	orderLineId:string},ValueTypes["OrderLineDiscountRemove"]],
orderMarkAsPaid?: [{	/** ID of the order to mark paid. */
	id:string,	/** The external transaction reference. */
	transactionReference?:string | null},ValueTypes["OrderMarkAsPaid"]],
orderRefund?: [{	/** Amount of money to refund. */
	amount:ValueTypes["PositiveDecimal"],	/** ID of the order to refund. */
	id:string},ValueTypes["OrderRefund"]],
orderUpdate?: [{	/** ID of an order to update. */
	id:string,	/** Fields required to update an order. */
	input:ValueTypes["OrderUpdateInput"]},ValueTypes["OrderUpdate"]],
orderUpdateShipping?: [{	/** ID of the order to update a shipping method. */
	order:string,	/** Fields required to change shipping method of the order. */
	input:ValueTypes["OrderUpdateShippingInput"]},ValueTypes["OrderUpdateShipping"]],
orderVoid?: [{	/** ID of the order to void. */
	id:string},ValueTypes["OrderVoid"]],
orderBulkCancel?: [{	/** List of orders IDs to cancel. */
	ids?:string[]},ValueTypes["OrderBulkCancel"]],
deleteMetadata?: [{	/** ID or token (for Order and Checkout) of an object to update. */
	id:string,	/** Metadata keys to delete. */
	keys:string[]},ValueTypes["DeleteMetadata"]],
deletePrivateMetadata?: [{	/** ID or token (for Order and Checkout) of an object to update. */
	id:string,	/** Metadata keys to delete. */
	keys:string[]},ValueTypes["DeletePrivateMetadata"]],
updateMetadata?: [{	/** ID or token (for Order and Checkout) of an object to update. */
	id:string,	/** Fields required to update the object's metadata. */
	input:ValueTypes["MetadataInput"][]},ValueTypes["UpdateMetadata"]],
updatePrivateMetadata?: [{	/** ID or token (for Order and Checkout) of an object to update. */
	id:string,	/** Fields required to update the object's metadata. */
	input:ValueTypes["MetadataInput"][]},ValueTypes["UpdatePrivateMetadata"]],
assignNavigation?: [{	/** ID of the menu. */
	menu?:string | null,	/** Type of the navigation bar to assign the menu to. */
	navigationType:ValueTypes["NavigationType"]},ValueTypes["AssignNavigation"]],
menuCreate?: [{	/** Fields required to create a menu. */
	input:ValueTypes["MenuCreateInput"]},ValueTypes["MenuCreate"]],
menuDelete?: [{	/** ID of a menu to delete. */
	id:string},ValueTypes["MenuDelete"]],
menuBulkDelete?: [{	/** List of menu IDs to delete. */
	ids?:string[]},ValueTypes["MenuBulkDelete"]],
menuUpdate?: [{	/** ID of a menu to update. */
	id:string,	/** Fields required to update a menu. */
	input:ValueTypes["MenuInput"]},ValueTypes["MenuUpdate"]],
menuItemCreate?: [{	/** Fields required to update a menu item. Only one of `url`, `category`, `page`, `collection` is allowed per item. */
	input:ValueTypes["MenuItemCreateInput"]},ValueTypes["MenuItemCreate"]],
menuItemDelete?: [{	/** ID of a menu item to delete. */
	id:string},ValueTypes["MenuItemDelete"]],
menuItemBulkDelete?: [{	/** List of menu item IDs to delete. */
	ids?:string[]},ValueTypes["MenuItemBulkDelete"]],
menuItemUpdate?: [{	/** ID of a menu item to update. */
	id:string,	/** Fields required to update a menu item. Only one of `url`, `category`, `page`, `collection` is allowed per item. */
	input:ValueTypes["MenuItemInput"]},ValueTypes["MenuItemUpdate"]],
menuItemTranslate?: [{	/** MenuItem ID or MenuItemTranslatableContent ID. */
	id:string,	input:ValueTypes["NameTranslationInput"],	/** Translation language code. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["MenuItemTranslate"]],
menuItemMove?: [{	/** ID of the menu. */
	menu:string,	/** The menu position data. */
	moves?:ValueTypes["MenuItemMoveInput"][]},ValueTypes["MenuItemMove"]],
invoiceRequest?: [{	/** Invoice number, if not provided it will be generated. */
	number?:string | null,	/** ID of the order related to invoice. */
	orderId:string},ValueTypes["InvoiceRequest"]],
invoiceRequestDelete?: [{	/** ID of an invoice to request the deletion. */
	id:string},ValueTypes["InvoiceRequestDelete"]],
invoiceCreate?: [{	/** Fields required when creating an invoice. */
	input:ValueTypes["InvoiceCreateInput"],	/** ID of the order related to invoice. */
	orderId:string},ValueTypes["InvoiceCreate"]],
invoiceDelete?: [{	/** ID of an invoice to delete. */
	id:string},ValueTypes["InvoiceDelete"]],
invoiceUpdate?: [{	/** ID of an invoice to update. */
	id:string,	/** Fields to use when updating an invoice. */
	input:ValueTypes["UpdateInvoiceInput"]},ValueTypes["InvoiceUpdate"]],
invoiceSendNotification?: [{	/** ID of an invoice to be sent. */
	id:string},ValueTypes["InvoiceSendNotification"]],
giftCardActivate?: [{	/** ID of a gift card to activate. */
	id:string},ValueTypes["GiftCardActivate"]],
giftCardCreate?: [{	/** Fields required to create a gift card. */
	input:ValueTypes["GiftCardCreateInput"]},ValueTypes["GiftCardCreate"]],
giftCardDelete?: [{	/** ID of the gift card to delete. */
	id:string},ValueTypes["GiftCardDelete"]],
giftCardDeactivate?: [{	/** ID of a gift card to deactivate. */
	id:string},ValueTypes["GiftCardDeactivate"]],
giftCardUpdate?: [{	/** ID of a gift card to update. */
	id:string,	/** Fields required to update a gift card. */
	input:ValueTypes["GiftCardUpdateInput"]},ValueTypes["GiftCardUpdate"]],
giftCardResend?: [{	/** Fields required to resend a gift card. */
	input:ValueTypes["GiftCardResendInput"]},ValueTypes["GiftCardResend"]],
giftCardAddNote?: [{	/** ID of the gift card to add a note for. */
	id:string,	/** Fields required to create a note for the gift card. */
	input:ValueTypes["GiftCardAddNoteInput"]},ValueTypes["GiftCardAddNote"]],
giftCardBulkCreate?: [{	/** Fields required to create gift cards. */
	input:ValueTypes["GiftCardBulkCreateInput"]},ValueTypes["GiftCardBulkCreate"]],
giftCardBulkDelete?: [{	/** List of gift card IDs to delete. */
	ids?:string[]},ValueTypes["GiftCardBulkDelete"]],
giftCardBulkActivate?: [{	/** List of gift card IDs to activate. */
	ids?:string[]},ValueTypes["GiftCardBulkActivate"]],
giftCardBulkDeactivate?: [{	/** List of gift card IDs to deactivate. */
	ids?:string[]},ValueTypes["GiftCardBulkDeactivate"]],
pluginUpdate?: [{	/** ID of a channel for which the data should be modified. */
	channelId?:string | null,	/** ID of plugin to update. */
	id:string,	/** Fields required to update a plugin configuration. */
	input:ValueTypes["PluginUpdateInput"]},ValueTypes["PluginUpdate"]],
externalNotificationTrigger?: [{	/** Channel slug. Saleor will send a notification within a provided channel.
Please, make sure that necessary plugins are active. */
	channel:string,	/** Input for External Notification Trigger.  */
	input:ValueTypes["ExternalNotificationTriggerInput"],	/** The ID of notification plugin. */
	pluginId?:string | null},ValueTypes["ExternalNotificationTrigger"]],
saleCreate?: [{	/** Fields required to create a sale. */
	input:ValueTypes["SaleInput"]},ValueTypes["SaleCreate"]],
saleDelete?: [{	/** ID of a sale to delete. */
	id:string},ValueTypes["SaleDelete"]],
saleBulkDelete?: [{	/** List of sale IDs to delete. */
	ids?:string[]},ValueTypes["SaleBulkDelete"]],
saleUpdate?: [{	/** ID of a sale to update. */
	id:string,	/** Fields required to update a sale. */
	input:ValueTypes["SaleInput"]},ValueTypes["SaleUpdate"]],
saleCataloguesAdd?: [{	/** ID of a sale. */
	id:string,	/** Fields required to modify catalogue IDs of sale. */
	input:ValueTypes["CatalogueInput"]},ValueTypes["SaleAddCatalogues"]],
saleCataloguesRemove?: [{	/** ID of a sale. */
	id:string,	/** Fields required to modify catalogue IDs of sale. */
	input:ValueTypes["CatalogueInput"]},ValueTypes["SaleRemoveCatalogues"]],
saleTranslate?: [{	/** Sale ID or SaleTranslatableContent ID. */
	id:string,	input:ValueTypes["NameTranslationInput"],	/** Translation language code. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["SaleTranslate"]],
saleChannelListingUpdate?: [{	/** ID of a sale to update. */
	id:string,	/** Fields required to update sale channel listings. */
	input:ValueTypes["SaleChannelListingInput"]},ValueTypes["SaleChannelListingUpdate"]],
voucherCreate?: [{	/** Fields required to create a voucher. */
	input:ValueTypes["VoucherInput"]},ValueTypes["VoucherCreate"]],
voucherDelete?: [{	/** ID of a voucher to delete. */
	id:string},ValueTypes["VoucherDelete"]],
voucherBulkDelete?: [{	/** List of voucher IDs to delete. */
	ids?:string[]},ValueTypes["VoucherBulkDelete"]],
voucherUpdate?: [{	/** ID of a voucher to update. */
	id:string,	/** Fields required to update a voucher. */
	input:ValueTypes["VoucherInput"]},ValueTypes["VoucherUpdate"]],
voucherCataloguesAdd?: [{	/** ID of a voucher. */
	id:string,	/** Fields required to modify catalogue IDs of voucher. */
	input:ValueTypes["CatalogueInput"]},ValueTypes["VoucherAddCatalogues"]],
voucherCataloguesRemove?: [{	/** ID of a voucher. */
	id:string,	/** Fields required to modify catalogue IDs of voucher. */
	input:ValueTypes["CatalogueInput"]},ValueTypes["VoucherRemoveCatalogues"]],
voucherTranslate?: [{	/** Voucher ID or VoucherTranslatableContent ID. */
	id:string,	input:ValueTypes["NameTranslationInput"],	/** Translation language code. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["VoucherTranslate"]],
voucherChannelListingUpdate?: [{	/** ID of a voucher to update. */
	id:string,	/** Fields required to update voucher channel listings. */
	input:ValueTypes["VoucherChannelListingInput"]},ValueTypes["VoucherChannelListingUpdate"]],
exportProducts?: [{	/** Fields required to export product data. */
	input:ValueTypes["ExportProductsInput"]},ValueTypes["ExportProducts"]],
exportGiftCards?: [{	/** Fields required to export gift cards data. */
	input:ValueTypes["ExportGiftCardsInput"]},ValueTypes["ExportGiftCards"]],
fileUpload?: [{	/** Represents a file in a multipart request. */
	file:ValueTypes["Upload"]},ValueTypes["FileUpload"]],
checkoutAddPromoCode?: [{	/** The ID of the checkout. 

DEPRECATED: this field will be removed in Saleor 4.0. Use token instead. */
	checkoutId?:string | null,	/** Gift card code or voucher code. */
	promoCode:string,	/** Checkout token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["CheckoutAddPromoCode"]],
checkoutBillingAddressUpdate?: [{	/** The billing address of the checkout. */
	billingAddress:ValueTypes["AddressInput"],	/** The ID of the checkout. 

DEPRECATED: this field will be removed in Saleor 4.0. Use token instead. */
	checkoutId?:string | null,	/** Checkout token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["CheckoutBillingAddressUpdate"]],
checkoutComplete?: [{	/** The ID of the checkout. 

DEPRECATED: this field will be removed in Saleor 4.0. Use token instead. */
	checkoutId?:string | null,	/** Client-side generated data required to finalize the payment. */
	paymentData?:ValueTypes["JSONString"] | null,	/** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
	redirectUrl?:string | null,	/** Determines whether to store the payment source for future usage. 

DEPRECATED: this field will be removed in Saleor 4.0. Use checkoutPaymentCreate for this action. */
	storeSource?:boolean | null,	/** Checkout token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["CheckoutComplete"]],
checkoutCreate?: [{	/** Fields required to create checkout. */
	input:ValueTypes["CheckoutCreateInput"]},ValueTypes["CheckoutCreate"]],
checkoutCustomerAttach?: [{	/** The ID of the checkout. 

DEPRECATED: this field will be removed in Saleor 4.0. Use token instead. */
	checkoutId?:string | null,	/** ID of customer to attach to checkout. Can be used to attach customer to
checkout by staff or app. Requires IMPERSONATE_USER permission. */
	customerId?:string | null,	/** Checkout token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["CheckoutCustomerAttach"]],
checkoutCustomerDetach?: [{	/** The ID of the checkout. 

DEPRECATED: this field will be removed in Saleor 4.0. Use token instead. */
	checkoutId?:string | null,	/** Checkout token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["CheckoutCustomerDetach"]],
checkoutEmailUpdate?: [{	/** The ID of the checkout. 

DEPRECATED: this field will be removed in Saleor 4.0. Use token instead. */
	checkoutId?:string | null,	/** email. */
	email:string,	/** Checkout token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["CheckoutEmailUpdate"]],
checkoutLineDelete?: [{	/** The ID of the checkout. 

DEPRECATED: this field will be removed in Saleor 4.0. Use token instead. */
	checkoutId?:string | null,	/** ID of the checkout line to delete. */
	lineId?:string | null,	/** Checkout token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["CheckoutLineDelete"]],
checkoutLinesDelete?: [{	/** A list of checkout lines. */
	linesIds?:string[],	/** Checkout token. */
	token:ValueTypes["UUID"]},ValueTypes["CheckoutLinesDelete"]],
checkoutLinesAdd?: [{	/** The ID of the checkout. 

DEPRECATED: this field will be removed in Saleor 4.0. Use token instead. */
	checkoutId?:string | null,	/** A list of checkout lines, each containing information about an item in the checkout. */
	lines?:ValueTypes["CheckoutLineInput"][],	/** Checkout token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["CheckoutLinesAdd"]],
checkoutLinesUpdate?: [{	/** The ID of the checkout. 

DEPRECATED: this field will be removed in Saleor 4.0. Use token instead. */
	checkoutId?:string | null,	/** A list of checkout lines, each containing information about an item in the checkout. */
	lines?:ValueTypes["CheckoutLineInput"][],	/** Checkout token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["CheckoutLinesUpdate"]],
checkoutRemovePromoCode?: [{	/** The ID of the checkout. 

DEPRECATED: this field will be removed in Saleor 4.0. Use token instead. */
	checkoutId?:string | null,	/** Gift card code or voucher code. */
	promoCode?:string | null,	/** Gift card or voucher ID. */
	promoCodeId?:string | null,	/** Checkout token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["CheckoutRemovePromoCode"]],
checkoutPaymentCreate?: [{	/** The ID of the checkout. 

DEPRECATED: this field will be removed in Saleor 4.0. Use token instead. */
	checkoutId?:string | null,	/** Data required to create a new payment. */
	input:ValueTypes["PaymentInput"],	/** Checkout token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["CheckoutPaymentCreate"]],
checkoutShippingAddressUpdate?: [{	/** The ID of the checkout. 

DEPRECATED: this field will be removed in Saleor 4.0. Use token instead. */
	checkoutId?:string | null,	/** The mailing address to where the checkout will be shipped. */
	shippingAddress:ValueTypes["AddressInput"],	/** Checkout token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["CheckoutShippingAddressUpdate"]],
checkoutShippingMethodUpdate?: [{	/** The ID of the checkout. 

DEPRECATED: this field will be removed in Saleor 4.0. Use token instead. */
	checkoutId?:string | null,	/** Shipping method. */
	shippingMethodId:string,	/** Checkout token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["CheckoutShippingMethodUpdate"]],
checkoutDeliveryMethodUpdate?: [{	/** Delivery Method ID (`Warehouse` ID or `ShippingMethod` ID). */
	deliveryMethodId?:string | null,	/** Checkout token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["CheckoutDeliveryMethodUpdate"]],
checkoutLanguageCodeUpdate?: [{	/** The ID of the checkout. 

DEPRECATED: this field will be removed in Saleor 4.0. Use token instead. */
	checkoutId?:string | null,	/** New language code. */
	languageCode:ValueTypes["LanguageCodeEnum"],	/** Checkout token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["CheckoutLanguageCodeUpdate"]],
orderFromCheckoutCreate?: [{	/** ID of a checkout that will be converted to an order. */
	id:string},ValueTypes["OrderFromCheckoutCreate"]],
channelCreate?: [{	/** Fields required to create channel. */
	input:ValueTypes["ChannelCreateInput"]},ValueTypes["ChannelCreate"]],
channelUpdate?: [{	/** ID of a channel to update. */
	id:string,	/** Fields required to update a channel. */
	input:ValueTypes["ChannelUpdateInput"]},ValueTypes["ChannelUpdate"]],
channelDelete?: [{	/** ID of a channel to delete. */
	id:string,	/** Fields required to delete a channel. */
	input?:ValueTypes["ChannelDeleteInput"] | null},ValueTypes["ChannelDelete"]],
channelActivate?: [{	/** ID of the channel to activate. */
	id:string},ValueTypes["ChannelActivate"]],
channelDeactivate?: [{	/** ID of the channel to deactivate. */
	id:string},ValueTypes["ChannelDeactivate"]],
attributeCreate?: [{	/** Fields required to create an attribute. */
	input:ValueTypes["AttributeCreateInput"]},ValueTypes["AttributeCreate"]],
attributeDelete?: [{	/** ID of an attribute to delete. */
	id:string},ValueTypes["AttributeDelete"]],
attributeUpdate?: [{	/** ID of an attribute to update. */
	id:string,	/** Fields required to update an attribute. */
	input:ValueTypes["AttributeUpdateInput"]},ValueTypes["AttributeUpdate"]],
attributeTranslate?: [{	/** Attribute ID or AttributeTranslatableContent ID. */
	id:string,	input:ValueTypes["NameTranslationInput"],	/** Translation language code. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["AttributeTranslate"]],
attributeBulkDelete?: [{	/** List of attribute IDs to delete. */
	ids?:string[]},ValueTypes["AttributeBulkDelete"]],
attributeValueBulkDelete?: [{	/** List of attribute value IDs to delete. */
	ids?:string[]},ValueTypes["AttributeValueBulkDelete"]],
attributeValueCreate?: [{	/** Attribute to which value will be assigned. */
	attribute:string,	/** Fields required to create an AttributeValue. */
	input:ValueTypes["AttributeValueCreateInput"]},ValueTypes["AttributeValueCreate"]],
attributeValueDelete?: [{	/** ID of a value to delete. */
	id:string},ValueTypes["AttributeValueDelete"]],
attributeValueUpdate?: [{	/** ID of an AttributeValue to update. */
	id:string,	/** Fields required to update an AttributeValue. */
	input:ValueTypes["AttributeValueUpdateInput"]},ValueTypes["AttributeValueUpdate"]],
attributeValueTranslate?: [{	/** AttributeValue ID or AttributeValueTranslatableContent ID. */
	id:string,	input:ValueTypes["AttributeValueTranslationInput"],	/** Translation language code. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["AttributeValueTranslate"]],
attributeReorderValues?: [{	/** ID of an attribute. */
	attributeId:string,	/** The list of reordering operations for given attribute values. */
	moves?:ValueTypes["ReorderInput"][]},ValueTypes["AttributeReorderValues"]],
appCreate?: [{	/** Fields required to create a new app. */
	input:ValueTypes["AppInput"]},ValueTypes["AppCreate"]],
appUpdate?: [{	/** ID of an app to update. */
	id:string,	/** Fields required to update an existing app. */
	input:ValueTypes["AppInput"]},ValueTypes["AppUpdate"]],
appDelete?: [{	/** ID of an app to delete. */
	id:string},ValueTypes["AppDelete"]],
appTokenCreate?: [{	/** Fields required to create a new auth token. */
	input:ValueTypes["AppTokenInput"]},ValueTypes["AppTokenCreate"]],
appTokenDelete?: [{	/** ID of an auth token to delete. */
	id:string},ValueTypes["AppTokenDelete"]],
appTokenVerify?: [{	/** App token to verify. */
	token:string},ValueTypes["AppTokenVerify"]],
appInstall?: [{	/** Fields required to install a new app. */
	input:ValueTypes["AppInstallInput"]},ValueTypes["AppInstall"]],
appRetryInstall?: [{	/** Determine if app will be set active or not. */
	activateAfterInstallation?:boolean | null,	/** ID of failed installation. */
	id:string},ValueTypes["AppRetryInstall"]],
appDeleteFailedInstallation?: [{	/** ID of failed installation to delete. */
	id:string},ValueTypes["AppDeleteFailedInstallation"]],
appFetchManifest?: [{	manifestUrl:string},ValueTypes["AppFetchManifest"]],
appActivate?: [{	/** ID of app to activate. */
	id:string},ValueTypes["AppActivate"]],
appDeactivate?: [{	/** ID of app to deactivate. */
	id:string},ValueTypes["AppDeactivate"]],
tokenCreate?: [{	/** Email of a user. */
	email:string,	/** Password of a user. */
	password:string},ValueTypes["CreateToken"]],
tokenRefresh?: [{	/** CSRF token required to refresh token. This argument is required when refreshToken is provided as a cookie. */
	csrfToken?:string | null,	/** Refresh token. */
	refreshToken?:string | null},ValueTypes["RefreshToken"]],
tokenVerify?: [{	/** JWT token to validate. */
	token:string},ValueTypes["VerifyToken"]],
	/** Deactivate all JWT tokens of the currently authenticated user. */
	tokensDeactivateAll?:ValueTypes["DeactivateAllUserTokens"],
externalAuthenticationUrl?: [{	/** The data required by plugin to create external authentication url. */
	input:ValueTypes["JSONString"],	/** The ID of the authentication plugin. */
	pluginId:string},ValueTypes["ExternalAuthenticationUrl"]],
externalObtainAccessTokens?: [{	/** The data required by plugin to create authentication data. */
	input:ValueTypes["JSONString"],	/** The ID of the authentication plugin. */
	pluginId:string},ValueTypes["ExternalObtainAccessTokens"]],
externalRefresh?: [{	/** The data required by plugin to proceed the refresh process. */
	input:ValueTypes["JSONString"],	/** The ID of the authentication plugin. */
	pluginId:string},ValueTypes["ExternalRefresh"]],
externalLogout?: [{	/** The data required by plugin to proceed the logout process. */
	input:ValueTypes["JSONString"],	/** The ID of the authentication plugin. */
	pluginId:string},ValueTypes["ExternalLogout"]],
externalVerify?: [{	/** The data required by plugin to proceed the verification. */
	input:ValueTypes["JSONString"],	/** The ID of the authentication plugin. */
	pluginId:string},ValueTypes["ExternalVerify"]],
requestPasswordReset?: [{	/** Slug of a channel which will be used for notify user. Optional when only one channel exists. */
	channel?:string | null,	/** Email of the user that will be used for password recovery. */
	email:string,	/** URL of a view where users should be redirected to reset the password. URL in RFC 1808 format. */
	redirectUrl:string},ValueTypes["RequestPasswordReset"]],
confirmAccount?: [{	/** E-mail of the user performing account confirmation. */
	email:string,	/** A one-time token required to confirm the account. */
	token:string},ValueTypes["ConfirmAccount"]],
setPassword?: [{	/** Email of a user. */
	email:string,	/** Password of a user. */
	password:string,	/** A one-time token required to set the password. */
	token:string},ValueTypes["SetPassword"]],
passwordChange?: [{	/** New user password. */
	newPassword:string,	/** Current user password. */
	oldPassword:string},ValueTypes["PasswordChange"]],
requestEmailChange?: [{	/** Slug of a channel which will be used to notify users. Optional when only one channel exists. */
	channel?:string | null,	/** New user email. */
	newEmail:string,	/** User password. */
	password:string,	/** URL of a view where users should be redirected to update the email address. URL in RFC 1808 format. */
	redirectUrl:string},ValueTypes["RequestEmailChange"]],
confirmEmailChange?: [{	/** Slug of a channel which will be used to notify users. Optional when only one channel exists. */
	channel?:string | null,	/** A one-time token required to change the email. */
	token:string},ValueTypes["ConfirmEmailChange"]],
accountAddressCreate?: [{	/** Fields required to create address. */
	input:ValueTypes["AddressInput"],	/** A type of address. If provided, the new address will be automatically
assigned as the customer's default address of that type. */
	type?:ValueTypes["AddressTypeEnum"] | null},ValueTypes["AccountAddressCreate"]],
accountAddressUpdate?: [{	/** ID of the address to update. */
	id:string,	/** Fields required to update the address. */
	input:ValueTypes["AddressInput"]},ValueTypes["AccountAddressUpdate"]],
accountAddressDelete?: [{	/** ID of the address to delete. */
	id:string},ValueTypes["AccountAddressDelete"]],
accountSetDefaultAddress?: [{	/** ID of the address to set as default. */
	id:string,	/** The type of address. */
	type:ValueTypes["AddressTypeEnum"]},ValueTypes["AccountSetDefaultAddress"]],
accountRegister?: [{	/** Fields required to create a user. */
	input:ValueTypes["AccountRegisterInput"]},ValueTypes["AccountRegister"]],
accountUpdate?: [{	/** Fields required to update the account of the logged-in user. */
	input:ValueTypes["AccountInput"]},ValueTypes["AccountUpdate"]],
accountRequestDeletion?: [{	/** Slug of a channel which will be used to notify users. Optional when only one channel exists. */
	channel?:string | null,	/** URL of a view where users should be redirected to delete their account. URL in RFC 1808 format. */
	redirectUrl:string},ValueTypes["AccountRequestDeletion"]],
accountDelete?: [{	/** A one-time token required to remove account. Sent by email using AccountRequestDeletion mutation. */
	token:string},ValueTypes["AccountDelete"]],
addressCreate?: [{	/** Fields required to create address. */
	input:ValueTypes["AddressInput"],	/** ID of a user to create address for. */
	userId:string},ValueTypes["AddressCreate"]],
addressUpdate?: [{	/** ID of the address to update. */
	id:string,	/** Fields required to update the address. */
	input:ValueTypes["AddressInput"]},ValueTypes["AddressUpdate"]],
addressDelete?: [{	/** ID of the address to delete. */
	id:string},ValueTypes["AddressDelete"]],
addressSetDefault?: [{	/** ID of the address. */
	addressId:string,	/** The type of address. */
	type:ValueTypes["AddressTypeEnum"],	/** ID of the user to change the address for. */
	userId:string},ValueTypes["AddressSetDefault"]],
customerCreate?: [{	/** Fields required to create a customer. */
	input:ValueTypes["UserCreateInput"]},ValueTypes["CustomerCreate"]],
customerUpdate?: [{	/** ID of a customer to update. */
	id:string,	/** Fields required to update a customer. */
	input:ValueTypes["CustomerInput"]},ValueTypes["CustomerUpdate"]],
customerDelete?: [{	/** ID of a customer to delete. */
	id:string},ValueTypes["CustomerDelete"]],
customerBulkDelete?: [{	/** List of user IDs to delete. */
	ids?:string[]},ValueTypes["CustomerBulkDelete"]],
staffCreate?: [{	/** Fields required to create a staff user. */
	input:ValueTypes["StaffCreateInput"]},ValueTypes["StaffCreate"]],
staffUpdate?: [{	/** ID of a staff user to update. */
	id:string,	/** Fields required to update a staff user. */
	input:ValueTypes["StaffUpdateInput"]},ValueTypes["StaffUpdate"]],
staffDelete?: [{	/** ID of a staff user to delete. */
	id:string},ValueTypes["StaffDelete"]],
staffBulkDelete?: [{	/** List of user IDs to delete. */
	ids?:string[]},ValueTypes["StaffBulkDelete"]],
userAvatarUpdate?: [{	/** Represents an image file in a multipart request. */
	image:ValueTypes["Upload"]},ValueTypes["UserAvatarUpdate"]],
	/** Deletes a user avatar. Only for staff members. */
	userAvatarDelete?:ValueTypes["UserAvatarDelete"],
userBulkSetActive?: [{	/** List of user IDs to (de)activate). */
	ids?:string[],	/** Determine if users will be set active or not. */
	isActive:boolean},ValueTypes["UserBulkSetActive"]],
permissionGroupCreate?: [{	/** Input fields to create permission group. */
	input:ValueTypes["PermissionGroupCreateInput"]},ValueTypes["PermissionGroupCreate"]],
permissionGroupUpdate?: [{	/** ID of the group to update. */
	id:string,	/** Input fields to create permission group. */
	input:ValueTypes["PermissionGroupUpdateInput"]},ValueTypes["PermissionGroupUpdate"]],
permissionGroupDelete?: [{	/** ID of the group to delete. */
	id:string},ValueTypes["PermissionGroupDelete"]],
		__typename?: boolean
}>;
	["NameTranslationInput"]: {
	name?:string | null
};
	["NavigationType"]:NavigationType;
	/** An object with an ID */
["Node"]:AliasType<{
		/** The ID of the object. */
	id?:boolean;
		['...on Address']?: Omit<ValueTypes["Address"],keyof ValueTypes["Node"]>;
		['...on Allocation']?: Omit<ValueTypes["Allocation"],keyof ValueTypes["Node"]>;
		['...on App']?: Omit<ValueTypes["App"],keyof ValueTypes["Node"]>;
		['...on AppExtension']?: Omit<ValueTypes["AppExtension"],keyof ValueTypes["Node"]>;
		['...on AppInstallation']?: Omit<ValueTypes["AppInstallation"],keyof ValueTypes["Node"]>;
		['...on AppToken']?: Omit<ValueTypes["AppToken"],keyof ValueTypes["Node"]>;
		['...on Attribute']?: Omit<ValueTypes["Attribute"],keyof ValueTypes["Node"]>;
		['...on AttributeTranslatableContent']?: Omit<ValueTypes["AttributeTranslatableContent"],keyof ValueTypes["Node"]>;
		['...on AttributeTranslation']?: Omit<ValueTypes["AttributeTranslation"],keyof ValueTypes["Node"]>;
		['...on AttributeValue']?: Omit<ValueTypes["AttributeValue"],keyof ValueTypes["Node"]>;
		['...on AttributeValueTranslatableContent']?: Omit<ValueTypes["AttributeValueTranslatableContent"],keyof ValueTypes["Node"]>;
		['...on AttributeValueTranslation']?: Omit<ValueTypes["AttributeValueTranslation"],keyof ValueTypes["Node"]>;
		['...on Category']?: Omit<ValueTypes["Category"],keyof ValueTypes["Node"]>;
		['...on CategoryTranslatableContent']?: Omit<ValueTypes["CategoryTranslatableContent"],keyof ValueTypes["Node"]>;
		['...on CategoryTranslation']?: Omit<ValueTypes["CategoryTranslation"],keyof ValueTypes["Node"]>;
		['...on Channel']?: Omit<ValueTypes["Channel"],keyof ValueTypes["Node"]>;
		['...on Checkout']?: Omit<ValueTypes["Checkout"],keyof ValueTypes["Node"]>;
		['...on CheckoutLine']?: Omit<ValueTypes["CheckoutLine"],keyof ValueTypes["Node"]>;
		['...on Collection']?: Omit<ValueTypes["Collection"],keyof ValueTypes["Node"]>;
		['...on CollectionChannelListing']?: Omit<ValueTypes["CollectionChannelListing"],keyof ValueTypes["Node"]>;
		['...on CollectionTranslatableContent']?: Omit<ValueTypes["CollectionTranslatableContent"],keyof ValueTypes["Node"]>;
		['...on CollectionTranslation']?: Omit<ValueTypes["CollectionTranslation"],keyof ValueTypes["Node"]>;
		['...on CustomerEvent']?: Omit<ValueTypes["CustomerEvent"],keyof ValueTypes["Node"]>;
		['...on DigitalContent']?: Omit<ValueTypes["DigitalContent"],keyof ValueTypes["Node"]>;
		['...on DigitalContentUrl']?: Omit<ValueTypes["DigitalContentUrl"],keyof ValueTypes["Node"]>;
		['...on EventDelivery']?: Omit<ValueTypes["EventDelivery"],keyof ValueTypes["Node"]>;
		['...on EventDeliveryAttempt']?: Omit<ValueTypes["EventDeliveryAttempt"],keyof ValueTypes["Node"]>;
		['...on ExportEvent']?: Omit<ValueTypes["ExportEvent"],keyof ValueTypes["Node"]>;
		['...on ExportFile']?: Omit<ValueTypes["ExportFile"],keyof ValueTypes["Node"]>;
		['...on Fulfillment']?: Omit<ValueTypes["Fulfillment"],keyof ValueTypes["Node"]>;
		['...on FulfillmentLine']?: Omit<ValueTypes["FulfillmentLine"],keyof ValueTypes["Node"]>;
		['...on GiftCard']?: Omit<ValueTypes["GiftCard"],keyof ValueTypes["Node"]>;
		['...on GiftCardEvent']?: Omit<ValueTypes["GiftCardEvent"],keyof ValueTypes["Node"]>;
		['...on GiftCardTag']?: Omit<ValueTypes["GiftCardTag"],keyof ValueTypes["Node"]>;
		['...on Group']?: Omit<ValueTypes["Group"],keyof ValueTypes["Node"]>;
		['...on Invoice']?: Omit<ValueTypes["Invoice"],keyof ValueTypes["Node"]>;
		['...on Menu']?: Omit<ValueTypes["Menu"],keyof ValueTypes["Node"]>;
		['...on MenuItem']?: Omit<ValueTypes["MenuItem"],keyof ValueTypes["Node"]>;
		['...on MenuItemTranslatableContent']?: Omit<ValueTypes["MenuItemTranslatableContent"],keyof ValueTypes["Node"]>;
		['...on MenuItemTranslation']?: Omit<ValueTypes["MenuItemTranslation"],keyof ValueTypes["Node"]>;
		['...on Order']?: Omit<ValueTypes["Order"],keyof ValueTypes["Node"]>;
		['...on OrderDiscount']?: Omit<ValueTypes["OrderDiscount"],keyof ValueTypes["Node"]>;
		['...on OrderEvent']?: Omit<ValueTypes["OrderEvent"],keyof ValueTypes["Node"]>;
		['...on OrderLine']?: Omit<ValueTypes["OrderLine"],keyof ValueTypes["Node"]>;
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["Node"]>;
		['...on PageTranslatableContent']?: Omit<ValueTypes["PageTranslatableContent"],keyof ValueTypes["Node"]>;
		['...on PageTranslation']?: Omit<ValueTypes["PageTranslation"],keyof ValueTypes["Node"]>;
		['...on PageType']?: Omit<ValueTypes["PageType"],keyof ValueTypes["Node"]>;
		['...on Payment']?: Omit<ValueTypes["Payment"],keyof ValueTypes["Node"]>;
		['...on PaymentPOC']?: Omit<ValueTypes["PaymentPOC"],keyof ValueTypes["Node"]>;
		['...on Product']?: Omit<ValueTypes["Product"],keyof ValueTypes["Node"]>;
		['...on ProductChannelListing']?: Omit<ValueTypes["ProductChannelListing"],keyof ValueTypes["Node"]>;
		['...on ProductMedia']?: Omit<ValueTypes["ProductMedia"],keyof ValueTypes["Node"]>;
		['...on ProductTranslatableContent']?: Omit<ValueTypes["ProductTranslatableContent"],keyof ValueTypes["Node"]>;
		['...on ProductTranslation']?: Omit<ValueTypes["ProductTranslation"],keyof ValueTypes["Node"]>;
		['...on ProductType']?: Omit<ValueTypes["ProductType"],keyof ValueTypes["Node"]>;
		['...on ProductVariant']?: Omit<ValueTypes["ProductVariant"],keyof ValueTypes["Node"]>;
		['...on ProductVariantChannelListing']?: Omit<ValueTypes["ProductVariantChannelListing"],keyof ValueTypes["Node"]>;
		['...on ProductVariantTranslatableContent']?: Omit<ValueTypes["ProductVariantTranslatableContent"],keyof ValueTypes["Node"]>;
		['...on ProductVariantTranslation']?: Omit<ValueTypes["ProductVariantTranslation"],keyof ValueTypes["Node"]>;
		['...on Sale']?: Omit<ValueTypes["Sale"],keyof ValueTypes["Node"]>;
		['...on SaleChannelListing']?: Omit<ValueTypes["SaleChannelListing"],keyof ValueTypes["Node"]>;
		['...on SaleTranslatableContent']?: Omit<ValueTypes["SaleTranslatableContent"],keyof ValueTypes["Node"]>;
		['...on SaleTranslation']?: Omit<ValueTypes["SaleTranslation"],keyof ValueTypes["Node"]>;
		['...on ShippingMethod']?: Omit<ValueTypes["ShippingMethod"],keyof ValueTypes["Node"]>;
		['...on ShippingMethodChannelListing']?: Omit<ValueTypes["ShippingMethodChannelListing"],keyof ValueTypes["Node"]>;
		['...on ShippingMethodPostalCodeRule']?: Omit<ValueTypes["ShippingMethodPostalCodeRule"],keyof ValueTypes["Node"]>;
		['...on ShippingMethodTranslatableContent']?: Omit<ValueTypes["ShippingMethodTranslatableContent"],keyof ValueTypes["Node"]>;
		['...on ShippingMethodTranslation']?: Omit<ValueTypes["ShippingMethodTranslation"],keyof ValueTypes["Node"]>;
		['...on ShippingMethodType']?: Omit<ValueTypes["ShippingMethodType"],keyof ValueTypes["Node"]>;
		['...on ShippingZone']?: Omit<ValueTypes["ShippingZone"],keyof ValueTypes["Node"]>;
		['...on ShopTranslation']?: Omit<ValueTypes["ShopTranslation"],keyof ValueTypes["Node"]>;
		['...on StaffNotificationRecipient']?: Omit<ValueTypes["StaffNotificationRecipient"],keyof ValueTypes["Node"]>;
		['...on Stock']?: Omit<ValueTypes["Stock"],keyof ValueTypes["Node"]>;
		['...on Transaction']?: Omit<ValueTypes["Transaction"],keyof ValueTypes["Node"]>;
		['...on User']?: Omit<ValueTypes["User"],keyof ValueTypes["Node"]>;
		['...on Voucher']?: Omit<ValueTypes["Voucher"],keyof ValueTypes["Node"]>;
		['...on VoucherChannelListing']?: Omit<ValueTypes["VoucherChannelListing"],keyof ValueTypes["Node"]>;
		['...on VoucherTranslatableContent']?: Omit<ValueTypes["VoucherTranslatableContent"],keyof ValueTypes["Node"]>;
		['...on VoucherTranslation']?: Omit<ValueTypes["VoucherTranslation"],keyof ValueTypes["Node"]>;
		['...on Warehouse']?: Omit<ValueTypes["Warehouse"],keyof ValueTypes["Node"]>;
		['...on Webhook']?: Omit<ValueTypes["Webhook"],keyof ValueTypes["Node"]>;
		__typename?: boolean
}>;
	["ObjectWithMetadata"]:AliasType<{
		/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"];
		['...on App']?: Omit<ValueTypes["App"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on Attribute']?: Omit<ValueTypes["Attribute"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on Category']?: Omit<ValueTypes["Category"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on Checkout']?: Omit<ValueTypes["Checkout"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on Collection']?: Omit<ValueTypes["Collection"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on DigitalContent']?: Omit<ValueTypes["DigitalContent"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on Fulfillment']?: Omit<ValueTypes["Fulfillment"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on GiftCard']?: Omit<ValueTypes["GiftCard"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on Invoice']?: Omit<ValueTypes["Invoice"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on Menu']?: Omit<ValueTypes["Menu"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on MenuItem']?: Omit<ValueTypes["MenuItem"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on Order']?: Omit<ValueTypes["Order"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on PageType']?: Omit<ValueTypes["PageType"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on Payment']?: Omit<ValueTypes["Payment"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on PaymentPOC']?: Omit<ValueTypes["PaymentPOC"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on Product']?: Omit<ValueTypes["Product"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on ProductType']?: Omit<ValueTypes["ProductType"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on ProductVariant']?: Omit<ValueTypes["ProductVariant"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on Sale']?: Omit<ValueTypes["Sale"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on ShippingMethod']?: Omit<ValueTypes["ShippingMethod"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on ShippingMethodType']?: Omit<ValueTypes["ShippingMethodType"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on ShippingZone']?: Omit<ValueTypes["ShippingZone"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on User']?: Omit<ValueTypes["User"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on Voucher']?: Omit<ValueTypes["Voucher"],keyof ValueTypes["ObjectWithMetadata"]>;
		['...on Warehouse']?: Omit<ValueTypes["Warehouse"],keyof ValueTypes["ObjectWithMetadata"]>;
		__typename?: boolean
}>;
	/** Represents an order in the shop. */
["Order"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	created?:boolean,
	updatedAt?:boolean,
	status?:boolean,
	user?:ValueTypes["User"],
	trackingClientId?:boolean,
	billingAddress?:ValueTypes["Address"],
	shippingAddress?:ValueTypes["Address"],
	shippingMethodName?:boolean,
	collectionPointName?:boolean,
	channel?:ValueTypes["Channel"],
	/** List of shipments for the order. */
	fulfillments?:ValueTypes["Fulfillment"],
	/** List of order lines. */
	lines?:ValueTypes["OrderLine"],
	/** List of actions that can be performed in the current state of an order. */
	actions?:boolean,
	/** Shipping methods that can be used with this order. */
	availableShippingMethods?:ValueTypes["ShippingMethod"],
	/** Shipping methods related to this order. */
	shippingMethods?:ValueTypes["ShippingMethod"],
	/** New in Saleor 3.1. Collection points that can be used for this order. Note:
this feature is in a preview state and can be subject to changes at later point. */
	availableCollectionPoints?:ValueTypes["Warehouse"],
	/** List of order invoices. */
	invoices?:ValueTypes["Invoice"],
	/** User-friendly number of an order. */
	number?:boolean,
	/** The ID of the order that was the base for this order. */
	original?:boolean,
	/** The order origin. */
	origin?:boolean,
	/** Informs if an order is fully paid. */
	isPaid?:boolean,
	/** Internal payment status. */
	paymentStatus?:boolean,
	/** User-friendly payment status. */
	paymentStatusDisplay?:boolean,
	/** List of payments for the order. */
	payments?:ValueTypes["Payment"],
	/** List of payments for the order */
	pocPayments?:ValueTypes["PaymentPOC"],
	/** Total amount of the order. */
	total?:ValueTypes["TaxedMoney"],
	/** Undiscounted total amount of the order. */
	undiscountedTotal?:ValueTypes["TaxedMoney"],
	/** Shipping method for this order. */
	shippingMethod?:ValueTypes["ShippingMethod"],
	/** Total price of shipping. */
	shippingPrice?:ValueTypes["TaxedMoney"],
	shippingTaxRate?:boolean,
	token?:boolean,
	voucher?:ValueTypes["Voucher"],
	/** List of user gift cards. */
	giftCards?:ValueTypes["GiftCard"],
	displayGrossPrices?:boolean,
	customerNote?:boolean,
	weight?:ValueTypes["Weight"],
	redirectUrl?:boolean,
	/** The sum of line prices not including shipping. */
	subtotal?:ValueTypes["TaxedMoney"],
	/** User-friendly order status. */
	statusDisplay?:boolean,
	/** Informs whether a draft order can be finalized(turned into a regular order). */
	canFinalize?:boolean,
	/** Amount authorized for the order. */
	totalAuthorized?:ValueTypes["Money"],
	/** Amount captured by payment. */
	totalCaptured?:ValueTypes["Money"],
	/** List of events associated with the order. */
	events?:ValueTypes["OrderEvent"],
	/** The difference between the paid and the order total amount. */
	totalBalance?:ValueTypes["Money"],
	/** Email address of the customer. */
	userEmail?:boolean,
	/** Returns True, if order requires shipping. */
	isShippingRequired?:boolean,
	/** New in Saleor 3.1. The delivery method selected for this checkout. Note: this
feature is in a preview state and can be subject to changes at later point. */
	deliveryMethod?:ValueTypes["DeliveryMethod"],
	languageCode?:boolean,
	/** Order language code. */
	languageCodeEnum?:boolean,
	/** Returns applied discount. */
	discount?:ValueTypes["Money"],
	/** Discount name. */
	discountName?:boolean,
	/** Translated discount name. */
	translatedDiscountName?:boolean,
	/** List of all discounts assigned to the order. */
	discounts?:ValueTypes["OrderDiscount"],
	/** List of errors that occurred during order validation. */
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	["OrderAction"]:OrderAction;
	/** Adds note to the order. */
["OrderAddNote"]: AliasType<{
	/** Order with the note added. */
	order?:ValueTypes["Order"],
	/** Order note created. */
	event?:ValueTypes["OrderEvent"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	["OrderAddNoteInput"]: {
	/** Note message. */
	message:string
};
	/** Cancels orders. */
["OrderBulkCancel"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	/** Cancel an order. */
["OrderCancel"]: AliasType<{
	/** Canceled order. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	/** Capture an order. */
["OrderCapture"]: AliasType<{
	/** Captured order. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	/** Confirms an unconfirmed order by changing status to unfulfilled. */
["OrderConfirm"]: AliasType<{
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	["OrderCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["OrderCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["OrderCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["Order"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["OrderDirection"]:OrderDirection;
	/** Contains all details related to the applied discount to the order. */
["OrderDiscount"]: AliasType<{
	id?:boolean,
	type?:boolean,
	name?:boolean,
	translatedName?:boolean,
	/** Type of the discount: fixed or percent */
	valueType?:boolean,
	/** Value of the discount. Can store fixed value or percent value */
	value?:boolean,
	/** Explanation for the applied discount. */
	reason?:boolean,
	/** Returns amount of discount. */
	amount?:ValueTypes["Money"],
		__typename?: boolean
}>;
	/** Adds discount to the order. */
["OrderDiscountAdd"]: AliasType<{
	/** Order which has been discounted. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	["OrderDiscountCommonInput"]: {
	/** Type of the discount: fixed or percent */
	valueType:ValueTypes["DiscountValueTypeEnum"],
	/** Value of the discount. Can store fixed value or percent value */
	value:ValueTypes["PositiveDecimal"],
	/** Explanation for the applied discount. */
	reason?:string | null
};
	/** Remove discount from the order. */
["OrderDiscountDelete"]: AliasType<{
	/** Order which has removed discount. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	/** An enumeration. */
["OrderDiscountType"]:OrderDiscountType;
	/** Update discount for the order. */
["OrderDiscountUpdate"]: AliasType<{
	/** Order which has been discounted. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	["OrderDraftFilterInput"]: {
	customer?:string | null,
	created?:ValueTypes["DateRangeInput"] | null,
	search?:string | null,
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[],
	channels?:(string | undefined | null)[]
};
	["OrderError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** Warehouse ID which causes the error. */
	warehouse?:boolean,
	/** List of order line IDs that cause the error. */
	orderLines?:boolean,
	/** List of product variants that are associated with the error */
	variants?:boolean,
	/** A type of address that causes the error. */
	addressType?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["OrderErrorCode"]:OrderErrorCode;
	/** History log of the order. */
["OrderEvent"]: AliasType<{
	id?:boolean,
	/** Date when event happened at in ISO 8601 format. */
	date?:boolean,
	/** Order event type. */
	type?:boolean,
	/** User who performed the action. */
	user?:ValueTypes["User"],
	/** App that performed the action. */
	app?:ValueTypes["App"],
	/** Content of the event. */
	message?:boolean,
	/** Email of the customer. */
	email?:boolean,
	/** Type of an email sent to the customer. */
	emailType?:boolean,
	/** Amount of money. */
	amount?:boolean,
	/** The payment ID from the payment gateway. */
	paymentId?:boolean,
	/** The payment gateway of the payment. */
	paymentGateway?:boolean,
	/** Number of items. */
	quantity?:boolean,
	/** Composed ID of the Fulfillment. */
	composedId?:boolean,
	/** User-friendly number of an order. */
	orderNumber?:boolean,
	/** Number of an invoice related to the order. */
	invoiceNumber?:boolean,
	/** List of oversold lines names. */
	oversoldItems?:boolean,
	/** The concerned lines. */
	lines?:ValueTypes["OrderEventOrderLineObject"],
	/** The lines fulfilled. */
	fulfilledItems?:ValueTypes["FulfillmentLine"],
	/** The warehouse were items were restocked. */
	warehouse?:ValueTypes["Warehouse"],
	/** The transaction reference of captured payment. */
	transactionReference?:boolean,
	/** Define if shipping costs were included to the refund. */
	shippingCostsIncluded?:boolean,
	/** The order which is related to this order. */
	relatedOrder?:ValueTypes["Order"],
	/** The discount applied to the order. */
	discount?:ValueTypes["OrderEventDiscountObject"],
	/** The status of payment's transaction. */
	status?:boolean,
	/** The reference of payment's transaction. */
	reference?:boolean,
		__typename?: boolean
}>;
	["OrderEventCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["OrderEventCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["OrderEventCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["OrderEvent"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["OrderEventDiscountObject"]: AliasType<{
	/** Type of the discount: fixed or percent. */
	valueType?:boolean,
	/** Value of the discount. Can store fixed value or percent value. */
	value?:boolean,
	/** Explanation for the applied discount. */
	reason?:boolean,
	/** Returns amount of discount. */
	amount?:ValueTypes["Money"],
	/** Type of the discount: fixed or percent. */
	oldValueType?:boolean,
	/** Value of the discount. Can store fixed value or percent value. */
	oldValue?:boolean,
	/** Returns amount of discount. */
	oldAmount?:ValueTypes["Money"],
		__typename?: boolean
}>;
	["OrderEventOrderLineObject"]: AliasType<{
	/** The variant quantity. */
	quantity?:boolean,
	/** The order line. */
	orderLine?:ValueTypes["OrderLine"],
	/** The variant name. */
	itemName?:boolean,
	/** The discount applied to the order line. */
	discount?:ValueTypes["OrderEventDiscountObject"],
		__typename?: boolean
}>;
	/** An enumeration. */
["OrderEventsEmailsEnum"]:OrderEventsEmailsEnum;
	/** An enumeration. */
["OrderEventsEnum"]:OrderEventsEnum;
	["OrderFilterInput"]: {
	paymentStatus?:(ValueTypes["PaymentChargeStatusEnum"] | undefined | null)[],
	status?:(ValueTypes["OrderStatusFilter"] | undefined | null)[],
	customer?:string | null,
	created?:ValueTypes["DateRangeInput"] | null,
	search?:string | null,
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[],
	channels?:(string | undefined | null)[],
	updatedAt?:ValueTypes["DateTimeRangeInput"] | null,
	isClickAndCollect?:boolean | null,
	isPreorder?:boolean | null,
	ids?:(string | undefined | null)[],
	giftCardUsed?:boolean | null,
	giftCardBought?:boolean | null
};
	/** Create new order from existing checkout. */
["OrderFromCheckoutCreate"]: AliasType<{
	/** Placed order. */
	order?:ValueTypes["Order"],
	checkoutErrors?:ValueTypes["OrderFromCheckoutCreateError"],
	errors?:ValueTypes["OrderFromCheckoutCreateError"],
		__typename?: boolean
}>;
	["OrderFromCheckoutCreateError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** List of varint IDs which causes the error. */
	variants?:boolean,
	/** List of line Ids which cause the error. */
	lines?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["OrderFromCheckoutCreateErrorCode"]:OrderFromCheckoutCreateErrorCode;
	/** Creates new fulfillments for an order. */
["OrderFulfill"]: AliasType<{
	/** List of created fulfillments. */
	fulfillments?:ValueTypes["Fulfillment"],
	/** Fulfilled order. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	["OrderFulfillInput"]: {
	/** List of items informing how to fulfill the order. */
	lines:ValueTypes["OrderFulfillLineInput"][],
	/** If true, send an email notification to the customer. */
	notifyCustomer?:boolean | null,
	/** If true, then allow proceed fulfillment when stock is exceeded. */
	allowStockToBeExceeded?:boolean | null
};
	["OrderFulfillLineInput"]: {
	/** The ID of the order line. */
	orderLineId?:string | null,
	/** List of stock items to create. */
	stocks:ValueTypes["OrderFulfillStockInput"][]
};
	["OrderFulfillStockInput"]: {
	/** The number of line items to be fulfilled from given warehouse. */
	quantity:number,
	/** ID of the warehouse from which the item will be fulfilled. */
	warehouse:string
};
	/** Represents order line of particular order. */
["OrderLine"]: AliasType<{
	id?:boolean,
	productName?:boolean,
	variantName?:boolean,
	productSku?:boolean,
	productVariantId?:boolean,
	isShippingRequired?:boolean,
	quantity?:boolean,
	quantityFulfilled?:boolean,
	unitDiscountReason?:boolean,
	taxRate?:boolean,
	digitalContentUrl?:ValueTypes["DigitalContentUrl"],
thumbnail?: [{	/** Size of thumbnail. */
	size?:number | null},ValueTypes["Image"]],
	/** Price of the single item in the order line. */
	unitPrice?:ValueTypes["TaxedMoney"],
	/** Price of the single item in the order line without applied an order line discount. */
	undiscountedUnitPrice?:ValueTypes["TaxedMoney"],
	/** The discount applied to the single order line. */
	unitDiscount?:ValueTypes["Money"],
	/** Value of the discount. Can store fixed value or percent value */
	unitDiscountValue?:boolean,
	/** Price of the order line. */
	totalPrice?:ValueTypes["TaxedMoney"],
	/** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. */
	variant?:ValueTypes["ProductVariant"],
	/** Product name in the customer's language */
	translatedProductName?:boolean,
	/** Variant name in the customer's language */
	translatedVariantName?:boolean,
	/** List of allocations across warehouses. */
	allocations?:ValueTypes["Allocation"],
	/** New in Saleor 3.1. A quantity of items remaining to be fulfilled. */
	quantityToFulfill?:boolean,
	/** Type of the discount: fixed or percent */
	unitDiscountType?:boolean,
		__typename?: boolean
}>;
	["OrderLineCreateInput"]: {
	/** Number of variant items ordered. */
	quantity:number,
	/** Product variant ID. */
	variantId:string
};
	/** Deletes an order line from an order. */
["OrderLineDelete"]: AliasType<{
	/** A related order. */
	order?:ValueTypes["Order"],
	/** An order line that was deleted. */
	orderLine?:ValueTypes["OrderLine"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	/** Remove discount applied to the order line. */
["OrderLineDiscountRemove"]: AliasType<{
	/** Order line which has removed discount. */
	orderLine?:ValueTypes["OrderLine"],
	/** Order which is related to line which has removed discount. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	/** Update discount for the order line. */
["OrderLineDiscountUpdate"]: AliasType<{
	/** Order line which has been discounted. */
	orderLine?:ValueTypes["OrderLine"],
	/** Order which is related to the discounted line. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	["OrderLineInput"]: {
	/** Number of variant items ordered. */
	quantity:number
};
	/** Create order lines for an order. */
["OrderLinesCreate"]: AliasType<{
	/** Related order. */
	order?:ValueTypes["Order"],
	/** List of added order lines. */
	orderLines?:ValueTypes["OrderLine"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	/** Updates an order line of an order. */
["OrderLineUpdate"]: AliasType<{
	/** Related order. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
	orderLine?:ValueTypes["OrderLine"],
		__typename?: boolean
}>;
	/** Mark order as manually paid. */
["OrderMarkAsPaid"]: AliasType<{
	/** Order marked as paid. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	/** An enumeration. */
["OrderOriginEnum"]:OrderOriginEnum;
	/** Refund an order. */
["OrderRefund"]: AliasType<{
	/** A refunded order. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	["OrderRefundFulfillmentLineInput"]: {
	/** The ID of the fulfillment line to refund. */
	fulfillmentLineId:string,
	/** The number of items to be refunded. */
	quantity:number
};
	["OrderRefundLineInput"]: {
	/** The ID of the order line to refund. */
	orderLineId:string,
	/** The number of items to be refunded. */
	quantity:number
};
	["OrderRefundProductsInput"]: {
	/** List of unfulfilled lines to refund. */
	orderLines?:ValueTypes["OrderRefundLineInput"][],
	/** List of fulfilled lines to refund. */
	fulfillmentLines?:ValueTypes["OrderRefundFulfillmentLineInput"][],
	/** The total amount of refund when the value is provided manually. */
	amountToRefund?:ValueTypes["PositiveDecimal"] | null,
	/** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
	includeShippingCosts?:boolean | null
};
	["OrderReturnFulfillmentLineInput"]: {
	/** The ID of the fulfillment line to return. */
	fulfillmentLineId:string,
	/** The number of items to be returned. */
	quantity:number,
	/** Determines, if the line should be added to replace order. */
	replace?:boolean | null
};
	["OrderReturnLineInput"]: {
	/** The ID of the order line to return. */
	orderLineId:string,
	/** The number of items to be returned. */
	quantity:number,
	/** Determines, if the line should be added to replace order. */
	replace?:boolean | null
};
	["OrderReturnProductsInput"]: {
	/** List of unfulfilled lines to return. */
	orderLines?:ValueTypes["OrderReturnLineInput"][],
	/** List of fulfilled lines to return. */
	fulfillmentLines?:ValueTypes["OrderReturnFulfillmentLineInput"][],
	/** The total amount of refund when the value is provided manually. */
	amountToRefund?:ValueTypes["PositiveDecimal"] | null,
	/** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
	includeShippingCosts?:boolean | null,
	/** If true, Saleor will call refund action for all lines. */
	refund?:boolean | null
};
	/** Order related settings from site settings. */
["OrderSettings"]: AliasType<{
	automaticallyConfirmAllNewOrders?:boolean,
	automaticallyFulfillNonShippableGiftCard?:boolean,
		__typename?: boolean
}>;
	["OrderSettingsError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["OrderSettingsErrorCode"]:OrderSettingsErrorCode;
	/** Update shop order settings. */
["OrderSettingsUpdate"]: AliasType<{
	/** Order settings. */
	orderSettings?:ValueTypes["OrderSettings"],
	orderSettingsErrors?:ValueTypes["OrderSettingsError"],
	errors?:ValueTypes["OrderSettingsError"],
		__typename?: boolean
}>;
	["OrderSettingsUpdateInput"]: {
	/** When disabled, all new orders from checkout will be marked as unconfirmed.
When enabled orders from checkout will become unfulfilled immediately. */
	automaticallyConfirmAllNewOrders?:boolean | null,
	/** When enabled, all non-shippable gift card orders will be fulfilled automatically. */
	automaticallyFulfillNonShippableGiftCard?:boolean | null
};
	["OrderSortField"]:OrderSortField;
	["OrderSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort orders by the selected field. */
	field:ValueTypes["OrderSortField"]
};
	/** An enumeration. */
["OrderStatus"]:OrderStatus;
	["OrderStatusFilter"]:OrderStatusFilter;
	/** Updates an order. */
["OrderUpdate"]: AliasType<{
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
	order?:ValueTypes["Order"],
		__typename?: boolean
}>;
	["OrderUpdateInput"]: {
	/** Billing address of the customer. */
	billingAddress?:ValueTypes["AddressInput"] | null,
	/** Email address of the customer. */
	userEmail?:string | null,
	/** Shipping address of the customer. */
	shippingAddress?:ValueTypes["AddressInput"] | null
};
	/** Updates a shipping method of the order. Requires shipping method ID to update,
when null is passed then currently assigned shipping method is removed. */
["OrderUpdateShipping"]: AliasType<{
	/** Order with updated shipping method. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	["OrderUpdateShippingInput"]: {
	/** ID of the selected shipping method, pass null to remove currently assigned shipping method. */
	shippingMethod?:string | null
};
	/** Void an order. */
["OrderVoid"]: AliasType<{
	/** A voided order. */
	order?:ValueTypes["Order"],
	orderErrors?:ValueTypes["OrderError"],
	errors?:ValueTypes["OrderError"],
		__typename?: boolean
}>;
	/** A static page that can be manually added by a shop operator through the dashboard. */
["Page"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	seoTitle?:boolean,
	seoDescription?:boolean,
	title?:boolean,
	/** Content of the page (JSON). */
	content?:boolean,
	publicationDate?:boolean,
	isPublished?:boolean,
	slug?:boolean,
	pageType?:ValueTypes["PageType"],
	created?:boolean,
	/** Content of the page (JSON). */
	contentJson?:boolean,
translation?: [{	/** A language code to return the translation for page. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["PageTranslation"]],
	/** List of attributes assigned to this product. */
	attributes?:ValueTypes["SelectedAttribute"],
		__typename?: boolean
}>;
	/** Assign attributes to a given page type. */
["PageAttributeAssign"]: AliasType<{
	/** The updated page type. */
	pageType?:ValueTypes["PageType"],
	pageErrors?:ValueTypes["PageError"],
	errors?:ValueTypes["PageError"],
		__typename?: boolean
}>;
	/** Unassign attributes from a given page type. */
["PageAttributeUnassign"]: AliasType<{
	/** The updated page type. */
	pageType?:ValueTypes["PageType"],
	pageErrors?:ValueTypes["PageError"],
	errors?:ValueTypes["PageError"],
		__typename?: boolean
}>;
	/** Deletes pages. */
["PageBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	pageErrors?:ValueTypes["PageError"],
	errors?:ValueTypes["PageError"],
		__typename?: boolean
}>;
	/** Publish pages. */
["PageBulkPublish"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	pageErrors?:ValueTypes["PageError"],
	errors?:ValueTypes["PageError"],
		__typename?: boolean
}>;
	["PageCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["PageCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["PageCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["Page"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates a new page. */
["PageCreate"]: AliasType<{
	pageErrors?:ValueTypes["PageError"],
	errors?:ValueTypes["PageError"],
	page?:ValueTypes["Page"],
		__typename?: boolean
}>;
	["PageCreateInput"]: {
	/** Page internal name. */
	slug?:string | null,
	/** Page title. */
	title?:string | null,
	/** Page content in JSON format. */
	content?:ValueTypes["JSONString"] | null,
	/** List of attributes. */
	attributes?:ValueTypes["AttributeValueInput"][],
	/** Determines if page is visible in the storefront. */
	isPublished?:boolean | null,
	/** Publication date. ISO 8601 standard. */
	publicationDate?:string | null,
	/** Search engine optimization fields. */
	seo?:ValueTypes["SeoInput"] | null,
	/** ID of the page type that page belongs to. */
	pageType:string
};
	/** Deletes a page. */
["PageDelete"]: AliasType<{
	pageErrors?:ValueTypes["PageError"],
	errors?:ValueTypes["PageError"],
	page?:ValueTypes["Page"],
		__typename?: boolean
}>;
	["PageError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** List of attributes IDs which causes the error. */
	attributes?:boolean,
	/** List of attribute values IDs which causes the error. */
	values?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["PageErrorCode"]:PageErrorCode;
	["PageFilterInput"]: {
	search?:string | null,
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[],
	pageTypes?:(string | undefined | null)[],
	ids?:(string | undefined | null)[]
};
	/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
["PageInfo"]: AliasType<{
	/** When paginating forwards, are there more items? */
	hasNextPage?:boolean,
	/** When paginating backwards, are there more items? */
	hasPreviousPage?:boolean,
	/** When paginating backwards, the cursor to continue. */
	startCursor?:boolean,
	/** When paginating forwards, the cursor to continue. */
	endCursor?:boolean,
		__typename?: boolean
}>;
	["PageInput"]: {
	/** Page internal name. */
	slug?:string | null,
	/** Page title. */
	title?:string | null,
	/** Page content in JSON format. */
	content?:ValueTypes["JSONString"] | null,
	/** List of attributes. */
	attributes?:ValueTypes["AttributeValueInput"][],
	/** Determines if page is visible in the storefront. */
	isPublished?:boolean | null,
	/** Publication date. ISO 8601 standard. */
	publicationDate?:string | null,
	/** Search engine optimization fields. */
	seo?:ValueTypes["SeoInput"] | null
};
	/** Reorder page attribute values. */
["PageReorderAttributeValues"]: AliasType<{
	/** Page from which attribute values are reordered. */
	page?:ValueTypes["Page"],
	pageErrors?:ValueTypes["PageError"],
	errors?:ValueTypes["PageError"],
		__typename?: boolean
}>;
	["PageSortField"]:PageSortField;
	["PageSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort pages by the selected field. */
	field:ValueTypes["PageSortField"]
};
	["PageTranslatableContent"]: AliasType<{
	id?:boolean,
	seoTitle?:boolean,
	seoDescription?:boolean,
	title?:boolean,
	content?:boolean,
	/** Content of the page (JSON). */
	contentJson?:boolean,
translation?: [{	/** A language code to return the translation for page. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["PageTranslation"]],
	/** ('A static page that can be manually added by a shop operator ', 'through the dashboard.') */
	page?:ValueTypes["Page"],
	/** List of page content attribute values that can be translated. */
	attributeValues?:ValueTypes["AttributeValueTranslatableContent"],
		__typename?: boolean
}>;
	/** Creates/updates translations for a page. */
["PageTranslate"]: AliasType<{
	translationErrors?:ValueTypes["TranslationError"],
	errors?:ValueTypes["TranslationError"],
	page?:ValueTypes["PageTranslatableContent"],
		__typename?: boolean
}>;
	["PageTranslation"]: AliasType<{
	id?:boolean,
	/** Translation language. */
	language?:ValueTypes["LanguageDisplay"],
	seoTitle?:boolean,
	seoDescription?:boolean,
	title?:boolean,
	content?:boolean,
	/** Translated description of the page (JSON). */
	contentJson?:boolean,
		__typename?: boolean
}>;
	["PageTranslationInput"]: {
	seoTitle?:string | null,
	seoDescription?:string | null,
	title?:string | null,
	content?:ValueTypes["JSONString"] | null
};
	/** Represents a type of page. It defines what attributes are available to pages of this type. */
["PageType"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	name?:boolean,
	slug?:boolean,
	/** Page attributes of that page type. */
	attributes?:ValueTypes["Attribute"],
availableAttributes?: [{	filter?:ValueTypes["AttributeFilterInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["AttributeCountableConnection"]],
	/** Whether page type has pages assigned. */
	hasPages?:boolean,
		__typename?: boolean
}>;
	/** Delete page types. */
["PageTypeBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	pageErrors?:ValueTypes["PageError"],
	errors?:ValueTypes["PageError"],
		__typename?: boolean
}>;
	["PageTypeCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["PageTypeCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["PageTypeCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["PageType"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Create a new page type. */
["PageTypeCreate"]: AliasType<{
	pageErrors?:ValueTypes["PageError"],
	errors?:ValueTypes["PageError"],
	pageType?:ValueTypes["PageType"],
		__typename?: boolean
}>;
	["PageTypeCreateInput"]: {
	/** Name of the page type. */
	name?:string | null,
	/** Page type slug. */
	slug?:string | null,
	/** List of attribute IDs to be assigned to the page type. */
	addAttributes?:string[]
};
	/** Delete a page type. */
["PageTypeDelete"]: AliasType<{
	pageErrors?:ValueTypes["PageError"],
	errors?:ValueTypes["PageError"],
	pageType?:ValueTypes["PageType"],
		__typename?: boolean
}>;
	["PageTypeFilterInput"]: {
	search?:string | null
};
	/** Reorder the attributes of a page type. */
["PageTypeReorderAttributes"]: AliasType<{
	/** Page type from which attributes are reordered. */
	pageType?:ValueTypes["PageType"],
	pageErrors?:ValueTypes["PageError"],
	errors?:ValueTypes["PageError"],
		__typename?: boolean
}>;
	["PageTypeSortField"]:PageTypeSortField;
	["PageTypeSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort page types by the selected field. */
	field:ValueTypes["PageTypeSortField"]
};
	/** Update page type. */
["PageTypeUpdate"]: AliasType<{
	pageErrors?:ValueTypes["PageError"],
	errors?:ValueTypes["PageError"],
	pageType?:ValueTypes["PageType"],
		__typename?: boolean
}>;
	["PageTypeUpdateInput"]: {
	/** Name of the page type. */
	name?:string | null,
	/** Page type slug. */
	slug?:string | null,
	/** List of attribute IDs to be assigned to the page type. */
	addAttributes?:string[],
	/** List of attribute IDs to be assigned to the page type. */
	removeAttributes?:string[]
};
	/** Updates an existing page. */
["PageUpdate"]: AliasType<{
	pageErrors?:ValueTypes["PageError"],
	errors?:ValueTypes["PageError"],
	page?:ValueTypes["Page"],
		__typename?: boolean
}>;
	/** Change the password of the logged in user. */
["PasswordChange"]: AliasType<{
	/** A user instance with a new password. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** Represents a payment of a given type. */
["Payment"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	gateway?:boolean,
	isActive?:boolean,
	created?:boolean,
	modified?:boolean,
	token?:boolean,
	checkout?:ValueTypes["Checkout"],
	order?:ValueTypes["Order"],
	paymentMethodType?:boolean,
	customerIpAddress?:boolean,
	/** Internal payment status. */
	chargeStatus?:boolean,
	/** List of actions that can be performed in the current state of a payment. */
	actions?:boolean,
	/** Total amount of the payment. */
	total?:ValueTypes["Money"],
	/** Total amount captured for this payment. */
	capturedAmount?:ValueTypes["Money"],
	/** List of all transactions within this payment. */
	transactions?:ValueTypes["Transaction"],
	/** Maximum amount of money that can be captured. */
	availableCaptureAmount?:ValueTypes["Money"],
	/** Maximum amount of money that can be refunded. */
	availableRefundAmount?:ValueTypes["Money"],
	/** The details of the card used for this payment. */
	creditCard?:ValueTypes["CreditCard"],
		__typename?: boolean
}>;
	/** An enumeration. */
["PaymentActionEnum"]:PaymentActionEnum;
	/** Captures the authorized payment amount. */
["PaymentCapture"]: AliasType<{
	/** Updated payment. */
	payment?:ValueTypes["Payment"],
	paymentErrors?:ValueTypes["PaymentError"],
	errors?:ValueTypes["PaymentError"],
		__typename?: boolean
}>;
	/** An enumeration. */
["PaymentChargeStatusEnum"]:PaymentChargeStatusEnum;
	/** Check payment balance. */
["PaymentCheckBalance"]: AliasType<{
	/** Response from the gateway. */
	data?:boolean,
	paymentErrors?:ValueTypes["PaymentError"],
	errors?:ValueTypes["PaymentError"],
		__typename?: boolean
}>;
	["PaymentCheckBalanceInput"]: {
	/** An ID of a payment gateway to check. */
	gatewayId:string,
	/** Payment method name. */
	method:string,
	/** Slug of a channel for which the data should be returned. */
	channel:string,
	/** Information about card. */
	card:ValueTypes["CardInput"]
};
	["PaymentCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["PaymentCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["PaymentCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["Payment"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Create payment for checkout or order. */
["PaymentCreate"]: AliasType<{
	payment?:ValueTypes["PaymentPOC"],
	errors?:ValueTypes["PaymentCreateError"],
		__typename?: boolean
}>;
	["PaymentCreateError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["PaymentCreateErrorCode"]:PaymentCreateErrorCode;
	["PaymentError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** List of varint IDs which causes the error. */
	variants?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["PaymentErrorCode"]:PaymentErrorCode;
	["PaymentFilterInput"]: {
	checkouts?:(string | undefined | null)[]
};
	/** Available payment gateway backend with configuration necessary to setup client. */
["PaymentGateway"]: AliasType<{
	/** Payment gateway name. */
	name?:boolean,
	/** Payment gateway ID. */
	id?:boolean,
	/** Payment gateway client configuration. */
	config?:ValueTypes["GatewayConfigLine"],
	/** Payment gateway supported currencies. */
	currencies?:boolean,
		__typename?: boolean
}>;
	/** Initializes payment process when it is required by gateway. */
["PaymentInitialize"]: AliasType<{
	initializedPayment?:ValueTypes["PaymentInitialized"],
	paymentErrors?:ValueTypes["PaymentError"],
	errors?:ValueTypes["PaymentError"],
		__typename?: boolean
}>;
	/** Server-side data generated by a payment gateway. Optional step when the payment
provider requires an additional action to initialize payment session. */
["PaymentInitialized"]: AliasType<{
	/** ID of a payment gateway. */
	gateway?:boolean,
	/** Payment gateway name. */
	name?:boolean,
	/** Initialized data by gateway. */
	data?:boolean,
		__typename?: boolean
}>;
	["PaymentInput"]: {
	/** A gateway to use with that payment. */
	gateway:string,
	/** Client-side generated payment token, representing customer's billing data in a secure manner. */
	token?:string | null,
	/** Total amount of the transaction, including all taxes and discounts. If no
amount is provided, the checkout total will be used. */
	amount?:ValueTypes["PositiveDecimal"] | null,
	/** URL of a storefront view where user should be redirected after requiring
additional actions. Payment with additional actions will not be finished if
this field is not provided. */
	returnUrl?:string | null,
	/** New in Saleor 3.1. Payment store type. */
	storePaymentMethod?:ValueTypes["StorePaymentMethodEnum"] | null,
	/** New in Saleor 3.1. User public metadata. */
	metadata?:ValueTypes["MetadataInput"][]
};
	/** Represents a payment of a given type. */
["PaymentPOC"]: AliasType<{
	/** The ID of the object. */
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	status?:boolean,
	type?:boolean,
	reference?:boolean,
	/** List of all possible actions for the payment */
	availableActions?:boolean,
	/** Amount authorized by this payment. */
	amountAuthorized?:ValueTypes["Money"],
	/** Amount captured by this payment. */
	amountCaptured?:ValueTypes["Money"],
	/** Amount refunded by this payment. */
	amountRefunded?:ValueTypes["Money"],
	/** Amount voided by this payment. */
	amountVoided?:ValueTypes["Money"],
		__typename?: boolean
}>;
	["PaymentPOCCreateInput"]: {
	/** Status of the payment. */
	status:string,
	/** Payment type used for this payment. */
	type:string,
	/** Reference of the payment. */
	reference?:string | null,
	/** List of all possible actions for the payment */
	availableActions?:ValueTypes["PaymentActionEnum"][],
	/** Amount authorized by this payment. */
	amountAuthorized?:ValueTypes["MoneyInput"] | null,
	/** Amount captured by this payment. */
	amountCaptured?:ValueTypes["MoneyInput"] | null,
	/** Amount refunded by this payment. */
	amountRefunded?:ValueTypes["MoneyInput"] | null,
	/** Amount refunded by this payment. */
	amountVoided?:ValueTypes["MoneyInput"] | null,
	/** New in Saleor 3.1. User public metadata. */
	publicMetadata?:ValueTypes["MetadataInput"][],
	/** New in Saleor 3.1. User public metadata. */
	privateMetadata?:ValueTypes["MetadataInput"][]
};
	["PaymentPOCUpdateInput"]: {
	/** Status of the payment. */
	status?:string | null,
	/** Payment type used for this payment. */
	type?:string | null,
	/** Reference of the payment. */
	reference?:string | null,
	/** List of all possible actions for the payment */
	availableActions?:ValueTypes["PaymentActionEnum"][],
	/** Amount authorized by this payment. */
	amountAuthorized?:ValueTypes["MoneyInput"] | null,
	/** Amount captured by this payment. */
	amountCaptured?:ValueTypes["MoneyInput"] | null,
	/** Amount refunded by this payment. */
	amountRefunded?:ValueTypes["MoneyInput"] | null,
	/** Amount refunded by this payment. */
	amountVoided?:ValueTypes["MoneyInput"] | null,
	/** New in Saleor 3.1. User public metadata. */
	publicMetadata?:ValueTypes["MetadataInput"][],
	/** New in Saleor 3.1. User public metadata. */
	privateMetadata?:ValueTypes["MetadataInput"][]
};
	/** Refunds the captured payment amount. */
["PaymentRefund"]: AliasType<{
	/** Updated payment. */
	payment?:ValueTypes["Payment"],
	paymentErrors?:ValueTypes["PaymentError"],
	errors?:ValueTypes["PaymentError"],
		__typename?: boolean
}>;
	/** Represents a payment source stored for user in payment gateway, such as credit card. */
["PaymentSource"]: AliasType<{
	/** Payment gateway name. */
	gateway?:boolean,
	/** ID of stored payment method. */
	paymentMethodId?:boolean,
	/** Stored credit card details if available. */
	creditCardInfo?:ValueTypes["CreditCard"],
	/** New in Saleor 3.1. List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
		__typename?: boolean
}>;
	/** Create payment for checkout or order. */
["PaymentUpdate"]: AliasType<{
	payment?:ValueTypes["PaymentPOC"],
	errors?:ValueTypes["PaymentCreateError"],
		__typename?: boolean
}>;
	/** Voids the authorized payment. */
["PaymentVoid"]: AliasType<{
	/** Updated payment. */
	payment?:ValueTypes["Payment"],
	paymentErrors?:ValueTypes["PaymentError"],
	errors?:ValueTypes["PaymentError"],
		__typename?: boolean
}>;
	/** Represents a permission object in a friendly form. */
["Permission"]: AliasType<{
	/** Internal code for permission. */
	code?:boolean,
	/** Describe action(s) allowed to do by permission. */
	name?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["PermissionEnum"]:PermissionEnum;
	/** Create new permission group. */
["PermissionGroupCreate"]: AliasType<{
	permissionGroupErrors?:ValueTypes["PermissionGroupError"],
	errors?:ValueTypes["PermissionGroupError"],
	group?:ValueTypes["Group"],
		__typename?: boolean
}>;
	["PermissionGroupCreateInput"]: {
	/** List of permission code names to assign to this group. */
	addPermissions?:ValueTypes["PermissionEnum"][],
	/** List of users to assign to this group. */
	addUsers?:string[],
	/** Group name. */
	name:string
};
	/** Delete permission group. */
["PermissionGroupDelete"]: AliasType<{
	permissionGroupErrors?:ValueTypes["PermissionGroupError"],
	errors?:ValueTypes["PermissionGroupError"],
	group?:ValueTypes["Group"],
		__typename?: boolean
}>;
	["PermissionGroupError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** List of permissions which causes the error. */
	permissions?:boolean,
	/** List of user IDs which causes the error. */
	users?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["PermissionGroupErrorCode"]:PermissionGroupErrorCode;
	["PermissionGroupFilterInput"]: {
	search?:string | null,
	ids?:(string | undefined | null)[]
};
	["PermissionGroupSortField"]:PermissionGroupSortField;
	["PermissionGroupSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort permission group by the selected field. */
	field:ValueTypes["PermissionGroupSortField"]
};
	/** Update permission group. */
["PermissionGroupUpdate"]: AliasType<{
	permissionGroupErrors?:ValueTypes["PermissionGroupError"],
	errors?:ValueTypes["PermissionGroupError"],
	group?:ValueTypes["Group"],
		__typename?: boolean
}>;
	["PermissionGroupUpdateInput"]: {
	/** List of permission code names to assign to this group. */
	addPermissions?:ValueTypes["PermissionEnum"][],
	/** List of users to assign to this group. */
	addUsers?:string[],
	/** Group name. */
	name?:string | null,
	/** List of permission code names to unassign from this group. */
	removePermissions?:ValueTypes["PermissionEnum"][],
	/** List of users to unassign from this group. */
	removeUsers?:string[]
};
	/** Plugin. */
["Plugin"]: AliasType<{
	/** Identifier of the plugin. */
	id?:boolean,
	/** Name of the plugin. */
	name?:boolean,
	/** Description of the plugin. */
	description?:boolean,
	/** Global configuration of the plugin (not channel-specific). */
	globalConfiguration?:ValueTypes["PluginConfiguration"],
	/** Channel-specific plugin configuration. */
	channelConfigurations?:ValueTypes["PluginConfiguration"],
		__typename?: boolean
}>;
	/** Stores information about a configuration of plugin. */
["PluginConfiguration"]: AliasType<{
	/** Determines if plugin is active or not. */
	active?:boolean,
	/** The channel to which the plugin configuration is assigned to. */
	channel?:ValueTypes["Channel"],
	/** Configuration of the plugin. */
	configuration?:ValueTypes["ConfigurationItem"],
		__typename?: boolean
}>;
	["PluginConfigurationType"]:PluginConfigurationType;
	["PluginCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["PluginCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["PluginCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["Plugin"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["PluginError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["PluginErrorCode"]:PluginErrorCode;
	["PluginFilterInput"]: {
	statusInChannels?:ValueTypes["PluginStatusInChannelsInput"] | null,
	search?:string | null,
	type?:ValueTypes["PluginConfigurationType"] | null
};
	["PluginSortField"]:PluginSortField;
	["PluginSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort plugins by the selected field. */
	field:ValueTypes["PluginSortField"]
};
	["PluginStatusInChannelsInput"]: {
	active:boolean,
	channels:string[]
};
	/** Update plugin configuration. */
["PluginUpdate"]: AliasType<{
	plugin?:ValueTypes["Plugin"],
	pluginsErrors?:ValueTypes["PluginError"],
	errors?:ValueTypes["PluginError"],
		__typename?: boolean
}>;
	["PluginUpdateInput"]: {
	/** Indicates whether the plugin should be enabled. */
	active?:boolean | null,
	/** Configuration of the plugin. */
	configuration?:(ValueTypes["ConfigurationItemInput"] | undefined | null)[]
};
	/** Positive Decimal scalar implementation.

Should be used in places where value must be positive. */
["PositiveDecimal"]:unknown;
	/** An enumeration. */
["PostalCodeRuleInclusionTypeEnum"]:PostalCodeRuleInclusionTypeEnum;
	/** Represents preorder settings for product variant. */
["PreorderData"]: AliasType<{
	/** The global preorder threshold for product variant. */
	globalThreshold?:boolean,
	/** Total number of sold product variant during preorder. */
	globalSoldUnits?:boolean,
	/** Preorder end date. */
	endDate?:boolean,
		__typename?: boolean
}>;
	["PreorderSettingsInput"]: {
	/** The global threshold for preorder variant. */
	globalThreshold?:number | null,
	/** The end date for preorder. */
	endDate?:ValueTypes["DateTime"] | null
};
	/** Represents preorder variant data for channel. */
["PreorderThreshold"]: AliasType<{
	/** Preorder threshold for product variant in this channel. */
	quantity?:boolean,
	/** Number of sold product variant in this channel. */
	soldUnits?:boolean,
		__typename?: boolean
}>;
	["PriceInput"]: {
	/** Currency code. */
	currency:string,
	/** Amount of money. */
	amount:ValueTypes["PositiveDecimal"]
};
	["PriceRangeInput"]: {
	/** Price greater than or equal to. */
	gte?:number | null,
	/** Price less than or equal to. */
	lte?:number | null
};
	/** Represents an individual item for sale in the storefront. */
["Product"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	seoTitle?:boolean,
	seoDescription?:boolean,
	name?:boolean,
	description?:boolean,
	productType?:ValueTypes["ProductType"],
	slug?:boolean,
	category?:ValueTypes["Category"],
	created?:boolean,
	updatedAt?:boolean,
	chargeTaxes?:boolean,
	weight?:ValueTypes["Weight"],
	defaultVariant?:ValueTypes["ProductVariant"],
	rating?:boolean,
	/** Channel given to retrieve this product. Also used by federation gateway to resolve this object in a federated query. */
	channel?:boolean,
	/** Description of the product (JSON). */
	descriptionJson?:boolean,
thumbnail?: [{	/** Size of thumbnail. */
	size?:number | null},ValueTypes["Image"]],
pricing?: [{	/** Destination address used to find warehouses where stock availability for
this product is checked. If address is empty, uses `Shop.companyAddress` or
fallbacks to server's `settings.DEFAULT_COUNTRY` configuration. */
	address?:ValueTypes["AddressInput"] | null},ValueTypes["ProductPricingInfo"]],
isAvailable?: [{	/** Destination address used to find warehouses where stock availability for
this product is checked. If address is empty, uses `Shop.companyAddress` or
fallbacks to server's `settings.DEFAULT_COUNTRY` configuration. */
	address?:ValueTypes["AddressInput"] | null},boolean],
	/** A type of tax. Assigned by enabled tax gateway */
	taxType?:ValueTypes["TaxType"],
	/** List of attributes assigned to this product. */
	attributes?:ValueTypes["SelectedAttribute"],
	/** List of availability in channels for the product. */
	channelListings?:ValueTypes["ProductChannelListing"],
mediaById?: [{	/** ID of a product media. */
	id?:string | null},ValueTypes["ProductMedia"]],
imageById?: [{	/** ID of a product image. */
	id?:string | null},ValueTypes["ProductImage"]],
	/** List of variants for the product. */
	variants?:ValueTypes["ProductVariant"],
	/** List of media for the product. */
	media?:ValueTypes["ProductMedia"],
	/** List of images for the product. */
	images?:ValueTypes["ProductImage"],
	/** List of collections for the product. */
	collections?:ValueTypes["Collection"],
translation?: [{	/** A language code to return the translation for product. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["ProductTranslation"]],
	/** Date when product is available for purchase.  */
	availableForPurchase?:boolean,
	/** Whether the product is available for purchase. */
	isAvailableForPurchase?:boolean,
		__typename?: boolean
}>;
	/** Assign attributes to a given product type. */
["ProductAttributeAssign"]: AliasType<{
	/** The updated product type. */
	productType?:ValueTypes["ProductType"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	["ProductAttributeAssignInput"]: {
	/** The ID of the attribute to assign. */
	id:string,
	/** The attribute type to be assigned as. */
	type:ValueTypes["ProductAttributeType"],
	/** New in Saleor 3.1. Whether attribute is allowed in variant selection. Allowed
types are: ['dropdown', 'boolean', 'swatch', 'numeric']. */
	variantSelection?:boolean | null
};
	/** New in Saleor 3.1. Update attributes assigned to product variant for given product type. */
["ProductAttributeAssignmentUpdate"]: AliasType<{
	/** The updated product type. */
	productType?:ValueTypes["ProductType"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	["ProductAttributeAssignmentUpdateInput"]: {
	/** The ID of the attribute to assign. */
	id:string,
	/** New in Saleor 3.1. Whether attribute is allowed in variant selection. Allowed
types are: ['dropdown', 'boolean', 'swatch', 'numeric']. */
	variantSelection:boolean
};
	["ProductAttributeType"]:ProductAttributeType;
	/** Un-assign attributes from a given product type. */
["ProductAttributeUnassign"]: AliasType<{
	/** The updated product type. */
	productType?:ValueTypes["ProductType"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	/** Deletes products. */
["ProductBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	/** Represents product channel listing. */
["ProductChannelListing"]: AliasType<{
	id?:boolean,
	publicationDate?:boolean,
	isPublished?:boolean,
	channel?:ValueTypes["Channel"],
	visibleInListings?:boolean,
	availableForPurchase?:boolean,
	/** The price of the cheapest variant (including discounts). */
	discountedPrice?:ValueTypes["Money"],
	/** Purchase cost of product. */
	purchaseCost?:ValueTypes["MoneyRange"],
	/** Range of margin percentage value. */
	margin?:ValueTypes["Margin"],
	/** Whether the product is available for purchase. */
	isAvailableForPurchase?:boolean,
pricing?: [{	/** Destination address used to find warehouses where stock availability for
this product is checked. If address is empty, uses `Shop.companyAddress` or
fallbacks to server's `settings.DEFAULT_COUNTRY` configuration. */
	address?:ValueTypes["AddressInput"] | null},ValueTypes["ProductPricingInfo"]],
		__typename?: boolean
}>;
	["ProductChannelListingAddInput"]: {
	/** ID of a channel. */
	channelId:string,
	/** Determines if object is visible to customers. */
	isPublished?:boolean | null,
	/** Publication date. ISO 8601 standard. */
	publicationDate?:ValueTypes["Date"] | null,
	/** Determines if product is visible in product listings (doesn't apply to product collections). */
	visibleInListings?:boolean | null,
	/** Determine if product should be available for purchase. */
	isAvailableForPurchase?:boolean | null,
	/** A start date from which a product will be available for purchase. When not set
and isAvailable is set to True, the current day is assumed. */
	availableForPurchaseDate?:ValueTypes["Date"] | null,
	/** List of variants to which the channel should be assigned. */
	addVariants?:string[],
	/** List of variants from which the channel should be unassigned. */
	removeVariants?:string[]
};
	["ProductChannelListingError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** List of attributes IDs which causes the error. */
	attributes?:boolean,
	/** List of attribute values IDs which causes the error. */
	values?:boolean,
	/** List of channels IDs which causes the error. */
	channels?:boolean,
	/** List of variants IDs which causes the error. */
	variants?:boolean,
		__typename?: boolean
}>;
	/** Manage product's availability in channels. */
["ProductChannelListingUpdate"]: AliasType<{
	/** An updated product instance. */
	product?:ValueTypes["Product"],
	productChannelListingErrors?:ValueTypes["ProductChannelListingError"],
	errors?:ValueTypes["ProductChannelListingError"],
		__typename?: boolean
}>;
	["ProductChannelListingUpdateInput"]: {
	/** List of channels to which the product should be assigned or updated. */
	updateChannels?:ValueTypes["ProductChannelListingAddInput"][],
	/** List of channels from which the product should be unassigned. */
	removeChannels?:string[]
};
	["ProductCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["ProductCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["ProductCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["Product"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates a new product. */
["ProductCreate"]: AliasType<{
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
	product?:ValueTypes["Product"],
		__typename?: boolean
}>;
	["ProductCreateInput"]: {
	/** List of attributes. */
	attributes?:ValueTypes["AttributeValueInput"][],
	/** ID of the product's category. */
	category?:string | null,
	/** Determine if taxes are being charged for the product. */
	chargeTaxes?:boolean | null,
	/** List of IDs of collections that the product belongs to. */
	collections?:string[],
	/** Product description (JSON). */
	description?:ValueTypes["JSONString"] | null,
	/** Product name. */
	name?:string | null,
	/** Product slug. */
	slug?:string | null,
	/** Tax rate for enabled tax gateway. */
	taxCode?:string | null,
	/** Search engine optimization fields. */
	seo?:ValueTypes["SeoInput"] | null,
	/** Weight of the Product. */
	weight?:ValueTypes["WeightScalar"] | null,
	/** Defines the product rating value. */
	rating?:number | null,
	/** ID of the type that product belongs to. */
	productType:string
};
	/** Deletes a product. */
["ProductDelete"]: AliasType<{
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
	product?:ValueTypes["Product"],
		__typename?: boolean
}>;
	["ProductError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** List of attributes IDs which causes the error. */
	attributes?:boolean,
	/** List of attribute values IDs which causes the error. */
	values?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["ProductErrorCode"]:ProductErrorCode;
	["ProductFieldEnum"]:ProductFieldEnum;
	["ProductFilterInput"]: {
	isPublished?:boolean | null,
	collections?:(string | undefined | null)[],
	categories?:(string | undefined | null)[],
	hasCategory?:boolean | null,
	attributes?:(ValueTypes["AttributeInput"] | undefined | null)[],
	stockAvailability?:ValueTypes["StockAvailability"] | null,
	stocks?:ValueTypes["ProductStockFilterInput"] | null,
	search?:string | null,
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[],
	price?:ValueTypes["PriceRangeInput"] | null,
	minimalPrice?:ValueTypes["PriceRangeInput"] | null,
	updatedAt?:ValueTypes["DateTimeRangeInput"] | null,
	productTypes?:(string | undefined | null)[],
	giftCard?:boolean | null,
	ids?:(string | undefined | null)[],
	hasPreorderedVariants?:boolean | null,
	/** Specifies the channel by which the data should be filtered. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?:string | null
};
	/** Represents a product image. */
["ProductImage"]: AliasType<{
	/** The ID of the image. */
	id?:boolean,
	/** The alt text of the image. */
	alt?:boolean,
	/** The new relative sorting position of the item (from -inf to +inf). 1 moves the
item one position forward, -1 moves the item one position backward, 0 leaves
the item unchanged. */
	sortOrder?:boolean,
url?: [{	/** Size of the image. */
	size?:number | null},boolean],
		__typename?: boolean
}>;
	["ProductInput"]: {
	/** List of attributes. */
	attributes?:ValueTypes["AttributeValueInput"][],
	/** ID of the product's category. */
	category?:string | null,
	/** Determine if taxes are being charged for the product. */
	chargeTaxes?:boolean | null,
	/** List of IDs of collections that the product belongs to. */
	collections?:string[],
	/** Product description (JSON). */
	description?:ValueTypes["JSONString"] | null,
	/** Product name. */
	name?:string | null,
	/** Product slug. */
	slug?:string | null,
	/** Tax rate for enabled tax gateway. */
	taxCode?:string | null,
	/** Search engine optimization fields. */
	seo?:ValueTypes["SeoInput"] | null,
	/** Weight of the Product. */
	weight?:ValueTypes["WeightScalar"] | null,
	/** Defines the product rating value. */
	rating?:number | null
};
	/** Represents a product media. */
["ProductMedia"]: AliasType<{
	id?:boolean,
	sortOrder?:boolean,
	alt?:boolean,
	type?:boolean,
	oembedData?:boolean,
url?: [{	/** Size of the image. */
	size?:number | null},boolean],
		__typename?: boolean
}>;
	/** Deletes product media. */
["ProductMediaBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	/** Create a media object (image or video URL) associated with product. For image,
this mutation must be sent as a `multipart` request. More detailed specs of the
upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
["ProductMediaCreate"]: AliasType<{
	product?:ValueTypes["Product"],
	media?:ValueTypes["ProductMedia"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	["ProductMediaCreateInput"]: {
	/** Alt text for a product media. */
	alt?:string | null,
	/** Represents an image file in a multipart request. */
	image?:ValueTypes["Upload"] | null,
	/** ID of an product. */
	product:string,
	/** Represents an URL to an external media. */
	mediaUrl?:string | null
};
	/** Deletes a product media. */
["ProductMediaDelete"]: AliasType<{
	product?:ValueTypes["Product"],
	media?:ValueTypes["ProductMedia"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	/** Changes ordering of the product media. */
["ProductMediaReorder"]: AliasType<{
	product?:ValueTypes["Product"],
	media?:ValueTypes["ProductMedia"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	/** An enumeration. */
["ProductMediaType"]:ProductMediaType;
	/** Updates a product media. */
["ProductMediaUpdate"]: AliasType<{
	product?:ValueTypes["Product"],
	media?:ValueTypes["ProductMedia"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	["ProductMediaUpdateInput"]: {
	/** Alt text for a product media. */
	alt?:string | null
};
	["ProductOrder"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Specifies the channel in which to sort the data. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?:string | null,
	/** Sort product by the selected attribute's values.
Note: this doesn't take translations into account yet. */
	attributeId?:string | null,
	/** Sort products by the selected field. */
	field?:ValueTypes["ProductOrderField"] | null
};
	["ProductOrderField"]:ProductOrderField;
	/** Represents availability of a product in the storefront. */
["ProductPricingInfo"]: AliasType<{
	/** Whether it is in sale or not. */
	onSale?:boolean,
	/** The discount amount if in sale (null otherwise). */
	discount?:ValueTypes["TaxedMoney"],
	/** The discount amount in the local currency. */
	discountLocalCurrency?:ValueTypes["TaxedMoney"],
	/** The discounted price range of the product variants. */
	priceRange?:ValueTypes["TaxedMoneyRange"],
	/** The undiscounted price range of the product variants. */
	priceRangeUndiscounted?:ValueTypes["TaxedMoneyRange"],
	/** The discounted price range of the product variants in the local currency. */
	priceRangeLocalCurrency?:ValueTypes["TaxedMoneyRange"],
		__typename?: boolean
}>;
	/** Reorder product attribute values. */
["ProductReorderAttributeValues"]: AliasType<{
	/** Product from which attribute values are reordered. */
	product?:ValueTypes["Product"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	["ProductStockFilterInput"]: {
	warehouseIds?:string[],
	quantity?:ValueTypes["IntRangeInput"] | null
};
	["ProductTranslatableContent"]: AliasType<{
	id?:boolean,
	seoTitle?:boolean,
	seoDescription?:boolean,
	name?:boolean,
	description?:boolean,
	/** Description of the product (JSON). */
	descriptionJson?:boolean,
translation?: [{	/** A language code to return the translation for product. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["ProductTranslation"]],
	/** Represents an individual item for sale in the storefront. */
	product?:ValueTypes["Product"],
	/** List of product attribute values that can be translated. */
	attributeValues?:ValueTypes["AttributeValueTranslatableContent"],
		__typename?: boolean
}>;
	/** Creates/updates translations for a product. */
["ProductTranslate"]: AliasType<{
	translationErrors?:ValueTypes["TranslationError"],
	errors?:ValueTypes["TranslationError"],
	product?:ValueTypes["Product"],
		__typename?: boolean
}>;
	["ProductTranslation"]: AliasType<{
	id?:boolean,
	/** Translation language. */
	language?:ValueTypes["LanguageDisplay"],
	seoTitle?:boolean,
	seoDescription?:boolean,
	name?:boolean,
	description?:boolean,
	/** Translated description of the product (JSON). */
	descriptionJson?:boolean,
		__typename?: boolean
}>;
	/** Represents a type of product. It defines what attributes are available to products of this type. */
["ProductType"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	name?:boolean,
	slug?:boolean,
	hasVariants?:boolean,
	isShippingRequired?:boolean,
	isDigital?:boolean,
	weight?:ValueTypes["Weight"],
	/** The product type kind. */
	kind?:boolean,
products?: [{	/** Slug of a channel for which the data should be returned. */
	channel?:string | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ProductCountableConnection"]],
	/** A type of tax. Assigned by enabled tax gateway */
	taxType?:ValueTypes["TaxType"],
variantAttributes?: [{	/** Define scope of returned attributes. */
	variantSelection?:ValueTypes["VariantAttributeScope"] | null},ValueTypes["Attribute"]],
assignedVariantAttributes?: [{	/** Define scope of returned attributes. */
	variantSelection?:ValueTypes["VariantAttributeScope"] | null},ValueTypes["AssignedVariantAttribute"]],
	/** Product attributes of that product type. */
	productAttributes?:ValueTypes["Attribute"],
availableAttributes?: [{	filter?:ValueTypes["AttributeFilterInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["AttributeCountableConnection"]],
		__typename?: boolean
}>;
	/** Deletes product types. */
["ProductTypeBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	["ProductTypeConfigurable"]:ProductTypeConfigurable;
	["ProductTypeCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["ProductTypeCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["ProductTypeCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["ProductType"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates a new product type. */
["ProductTypeCreate"]: AliasType<{
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
	productType?:ValueTypes["ProductType"],
		__typename?: boolean
}>;
	/** Deletes a product type. */
["ProductTypeDelete"]: AliasType<{
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
	productType?:ValueTypes["ProductType"],
		__typename?: boolean
}>;
	["ProductTypeEnum"]:ProductTypeEnum;
	["ProductTypeFilterInput"]: {
	search?:string | null,
	configurable?:ValueTypes["ProductTypeConfigurable"] | null,
	productType?:ValueTypes["ProductTypeEnum"] | null,
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[],
	kind?:ValueTypes["ProductTypeKindEnum"] | null,
	ids?:(string | undefined | null)[]
};
	["ProductTypeInput"]: {
	/** Name of the product type. */
	name?:string | null,
	/** Product type slug. */
	slug?:string | null,
	/** The product type kind. */
	kind?:ValueTypes["ProductTypeKindEnum"] | null,
	/** Determines if product of this type has multiple variants. This option mainly
simplifies product management in the dashboard. There is always at least one
variant created under the hood. */
	hasVariants?:boolean | null,
	/** List of attributes shared among all product variants. */
	productAttributes?:(string | undefined | null)[],
	/** List of attributes used to distinguish between different variants of a product. */
	variantAttributes?:(string | undefined | null)[],
	/** Determines if shipping is required for products of this variant. */
	isShippingRequired?:boolean | null,
	/** Determines if products are digital. */
	isDigital?:boolean | null,
	/** Weight of the ProductType items. */
	weight?:ValueTypes["WeightScalar"] | null,
	/** Tax rate for enabled tax gateway. */
	taxCode?:string | null
};
	/** An enumeration. */
["ProductTypeKindEnum"]:ProductTypeKindEnum;
	/** Reorder the attributes of a product type. */
["ProductTypeReorderAttributes"]: AliasType<{
	/** Product type from which attributes are reordered. */
	productType?:ValueTypes["ProductType"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	["ProductTypeSortField"]:ProductTypeSortField;
	["ProductTypeSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort product types by the selected field. */
	field:ValueTypes["ProductTypeSortField"]
};
	/** Updates an existing product type. */
["ProductTypeUpdate"]: AliasType<{
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
	productType?:ValueTypes["ProductType"],
		__typename?: boolean
}>;
	/** Updates an existing product. */
["ProductUpdate"]: AliasType<{
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
	product?:ValueTypes["Product"],
		__typename?: boolean
}>;
	/** Represents a version of a product such as different size or color. */
["ProductVariant"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	name?:boolean,
	sku?:boolean,
	product?:ValueTypes["Product"],
	trackInventory?:boolean,
	quantityLimitPerCustomer?:boolean,
	weight?:ValueTypes["Weight"],
	/** Channel given to retrieve this product variant. Also used by federation
gateway to resolve this object in a federated query. */
	channel?:boolean,
	/** List of price information in channels for the product. */
	channelListings?:ValueTypes["ProductVariantChannelListing"],
pricing?: [{	/** Destination address used to find warehouses where stock availability for
this product is checked. If address is empty, uses `Shop.companyAddress` or
fallbacks to server's `settings.DEFAULT_COUNTRY` configuration. */
	address?:ValueTypes["AddressInput"] | null},ValueTypes["VariantPricingInfo"]],
attributes?: [{	/** Define scope of returned attributes. */
	variantSelection?:ValueTypes["VariantAttributeScope"] | null},ValueTypes["SelectedAttribute"]],
	/** Gross margin percentage value. */
	margin?:boolean,
	/** Total quantity ordered. */
	quantityOrdered?:boolean,
revenue?: [{	period?:ValueTypes["ReportingPeriod"] | null},ValueTypes["TaxedMoney"]],
	/** List of images for the product variant. */
	images?:ValueTypes["ProductImage"],
	/** List of media for the product variant. */
	media?:ValueTypes["ProductMedia"],
translation?: [{	/** A language code to return the translation for product variant. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["ProductVariantTranslation"]],
	/** Digital content for the product variant. */
	digitalContent?:ValueTypes["DigitalContent"],
stocks?: [{	/** Destination address used to find warehouses where stock availability for
this product is checked. If address is empty, uses `Shop.companyAddress` or
fallbacks to server's `settings.DEFAULT_COUNTRY` configuration. */
	address?:ValueTypes["AddressInput"] | null,	/** Two-letter ISO 3166-1 country code. 

DEPRECATED: this field will be removed in Saleor 4.0. Use `address` argument instead. */
	countryCode?:ValueTypes["CountryCode"] | null},ValueTypes["Stock"]],
quantityAvailable?: [{	/** Destination address used to find warehouses where stock availability for
this product is checked. If address is empty, uses `Shop.companyAddress` or
fallbacks to server's `settings.DEFAULT_COUNTRY` configuration. */
	address?:ValueTypes["AddressInput"] | null,	/** Two-letter ISO 3166-1 country code. When provided, the exact quantity from a
warehouse operating in shipping zones that contain this country will be
returned. Otherwise, it will return the maximum quantity from all shipping zones. 

DEPRECATED: this field will be removed in Saleor 4.0. Use `address` argument instead. */
	countryCode?:ValueTypes["CountryCode"] | null},boolean],
	/** New in Saleor 3.1. Preorder data for product variant. Note: this feature is in
a preview state and can be subject to changes at later point. */
	preorder?:ValueTypes["PreorderData"],
	created?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** Creates product variants for a given product. */
["ProductVariantBulkCreate"]: AliasType<{
	/** Returns how many objects were created. */
	count?:boolean,
	/** List of the created variants. */
	productVariants?:ValueTypes["ProductVariant"],
	bulkProductErrors?:ValueTypes["BulkProductError"],
	errors?:ValueTypes["BulkProductError"],
		__typename?: boolean
}>;
	["ProductVariantBulkCreateInput"]: {
	/** List of attributes specific to this variant. */
	attributes:ValueTypes["BulkAttributeValueInput"][],
	/** Stock keeping unit. */
	sku?:string | null,
	/** Determines if the inventory of this variant should be tracked. If false, the
quantity won't change when customers buy this item. */
	trackInventory?:boolean | null,
	/** Weight of the Product Variant. */
	weight?:ValueTypes["WeightScalar"] | null,
	/** New in Saleor 3.1. Determines if variant is in preorder. Note: this feature is
in a preview state and can be subject to changes at later point. */
	preorder?:ValueTypes["PreorderSettingsInput"] | null,
	/** New in Saleor 3.1. Determines maximum quantity of `ProductVariant`,that can be
bought in a single checkout. Note: this feature is in a preview state and can
be subject to changes at later point. */
	quantityLimitPerCustomer?:number | null,
	/** Stocks of a product available for sale. */
	stocks?:ValueTypes["StockInput"][],
	/** List of prices assigned to channels. */
	channelListings?:ValueTypes["ProductVariantChannelListingAddInput"][]
};
	/** Deletes product variants. */
["ProductVariantBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	/** Represents product varaint channel listing. */
["ProductVariantChannelListing"]: AliasType<{
	id?:boolean,
	channel?:ValueTypes["Channel"],
	price?:ValueTypes["Money"],
	/** Cost price of the variant. */
	costPrice?:ValueTypes["Money"],
	/** Gross margin percentage value. */
	margin?:boolean,
	/** New in Saleor 3.1. Preorder variant data. Note: this feature is in a preview
state and can be subject to changes at later point. */
	preorderThreshold?:ValueTypes["PreorderThreshold"],
		__typename?: boolean
}>;
	["ProductVariantChannelListingAddInput"]: {
	/** ID of a channel. */
	channelId:string,
	/** Price of the particular variant in channel. */
	price:ValueTypes["PositiveDecimal"],
	/** Cost price of the variant in channel. */
	costPrice?:ValueTypes["PositiveDecimal"] | null,
	/** New in Saleor 3.1. The threshold for preorder variant in channel. Note: this
feature is in a preview state and can be subject to changes at later point. */
	preorderThreshold?:number | null
};
	/** Manage product variant prices in channels. */
["ProductVariantChannelListingUpdate"]: AliasType<{
	/** An updated product variant instance. */
	variant?:ValueTypes["ProductVariant"],
	productChannelListingErrors?:ValueTypes["ProductChannelListingError"],
	errors?:ValueTypes["ProductChannelListingError"],
		__typename?: boolean
}>;
	["ProductVariantCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["ProductVariantCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["ProductVariantCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["ProductVariant"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates a new variant for a product. */
["ProductVariantCreate"]: AliasType<{
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
	productVariant?:ValueTypes["ProductVariant"],
		__typename?: boolean
}>;
	["ProductVariantCreateInput"]: {
	/** List of attributes specific to this variant. */
	attributes:ValueTypes["AttributeValueInput"][],
	/** Stock keeping unit. */
	sku?:string | null,
	/** Determines if the inventory of this variant should be tracked. If false, the
quantity won't change when customers buy this item. */
	trackInventory?:boolean | null,
	/** Weight of the Product Variant. */
	weight?:ValueTypes["WeightScalar"] | null,
	/** New in Saleor 3.1. Determines if variant is in preorder. Note: this feature is
in a preview state and can be subject to changes at later point. */
	preorder?:ValueTypes["PreorderSettingsInput"] | null,
	/** New in Saleor 3.1. Determines maximum quantity of `ProductVariant`,that can be
bought in a single checkout. Note: this feature is in a preview state and can
be subject to changes at later point. */
	quantityLimitPerCustomer?:number | null,
	/** Product ID of which type is the variant. */
	product:string,
	/** Stocks of a product available for sale. */
	stocks?:ValueTypes["StockInput"][]
};
	/** Deletes a product variant. */
["ProductVariantDelete"]: AliasType<{
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
	productVariant?:ValueTypes["ProductVariant"],
		__typename?: boolean
}>;
	["ProductVariantFilterInput"]: {
	search?:string | null,
	sku?:(string | undefined | null)[],
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[],
	isPreorder?:boolean | null,
	updatedAt?:ValueTypes["DateTimeRangeInput"] | null
};
	["ProductVariantInput"]: {
	/** List of attributes specific to this variant. */
	attributes?:ValueTypes["AttributeValueInput"][],
	/** Stock keeping unit. */
	sku?:string | null,
	/** Determines if the inventory of this variant should be tracked. If false, the
quantity won't change when customers buy this item. */
	trackInventory?:boolean | null,
	/** Weight of the Product Variant. */
	weight?:ValueTypes["WeightScalar"] | null,
	/** New in Saleor 3.1. Determines if variant is in preorder. Note: this feature is
in a preview state and can be subject to changes at later point. */
	preorder?:ValueTypes["PreorderSettingsInput"] | null,
	/** New in Saleor 3.1. Determines maximum quantity of `ProductVariant`,that can be
bought in a single checkout. Note: this feature is in a preview state and can
be subject to changes at later point. */
	quantityLimitPerCustomer?:number | null
};
	/** New in Saleor 3.1. Deactivates product variant preorder. It changes all preorder
allocation into regular allocation. Note: this feature is in a preview state and
can be subject to changes at later point. */
["ProductVariantPreorderDeactivate"]: AliasType<{
	/** Product variant with ended preorder. */
	productVariant?:ValueTypes["ProductVariant"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	/** Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook. */
["ProductVariantReorder"]: AliasType<{
	product?:ValueTypes["Product"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	/** Reorder product variant attribute values. */
["ProductVariantReorderAttributeValues"]: AliasType<{
	/** Product variant from which attribute values are reordered. */
	productVariant?:ValueTypes["ProductVariant"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	/** Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook. */
["ProductVariantSetDefault"]: AliasType<{
	product?:ValueTypes["Product"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	/** Creates stocks for product variant. */
["ProductVariantStocksCreate"]: AliasType<{
	/** Updated product variant. */
	productVariant?:ValueTypes["ProductVariant"],
	bulkStockErrors?:ValueTypes["BulkStockError"],
	errors?:ValueTypes["BulkStockError"],
		__typename?: boolean
}>;
	/** Delete stocks from product variant. */
["ProductVariantStocksDelete"]: AliasType<{
	/** Updated product variant. */
	productVariant?:ValueTypes["ProductVariant"],
	stockErrors?:ValueTypes["StockError"],
	errors?:ValueTypes["StockError"],
		__typename?: boolean
}>;
	/** Update stocks for product variant. */
["ProductVariantStocksUpdate"]: AliasType<{
	/** Updated product variant. */
	productVariant?:ValueTypes["ProductVariant"],
	bulkStockErrors?:ValueTypes["BulkStockError"],
	errors?:ValueTypes["BulkStockError"],
		__typename?: boolean
}>;
	["ProductVariantTranslatableContent"]: AliasType<{
	id?:boolean,
	name?:boolean,
translation?: [{	/** A language code to return the translation for product variant. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["ProductVariantTranslation"]],
	/** Represents a version of a product such as different size or color. */
	productVariant?:ValueTypes["ProductVariant"],
	/** List of product variant attribute values that can be translated. */
	attributeValues?:ValueTypes["AttributeValueTranslatableContent"],
		__typename?: boolean
}>;
	/** Creates/updates translations for a product variant. */
["ProductVariantTranslate"]: AliasType<{
	translationErrors?:ValueTypes["TranslationError"],
	errors?:ValueTypes["TranslationError"],
	productVariant?:ValueTypes["ProductVariant"],
		__typename?: boolean
}>;
	["ProductVariantTranslation"]: AliasType<{
	id?:boolean,
	/** Translation language. */
	language?:ValueTypes["LanguageDisplay"],
	name?:boolean,
		__typename?: boolean
}>;
	/** Updates an existing variant for product. */
["ProductVariantUpdate"]: AliasType<{
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
	productVariant?:ValueTypes["ProductVariant"],
		__typename?: boolean
}>;
	["PublishableChannelListingInput"]: {
	/** ID of a channel. */
	channelId:string,
	/** Determines if object is visible to customers. */
	isPublished?:boolean | null,
	/** Publication date. ISO 8601 standard. */
	publicationDate?:ValueTypes["Date"] | null
};
	["Query"]: AliasType<{
webhook?: [{	/** ID of the webhook. */
	id:string},ValueTypes["Webhook"]],
	/** List of all available webhook events. */
	webhookEvents?:ValueTypes["WebhookEvent"],
webhookSamplePayload?: [{	/** Name of the requested event type. */
	eventType:ValueTypes["WebhookSampleEventTypeEnum"]},boolean],
warehouse?: [{	/** ID of an warehouse */
	id:string},ValueTypes["Warehouse"]],
warehouses?: [{	filter?:ValueTypes["WarehouseFilterInput"] | null,	sortBy?:ValueTypes["WarehouseSortingInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["WarehouseCountableConnection"]],
translations?: [{	/** Kind of objects to retrieve. */
	kind:ValueTypes["TranslatableKinds"],	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["TranslatableItemConnection"]],
translation?: [{	/** ID of the object to retrieve. */
	id:string,	/** Kind of the object to retrieve. */
	kind:ValueTypes["TranslatableKinds"]},ValueTypes["TranslatableItem"]],
stock?: [{	/** ID of an warehouse */
	id:string},ValueTypes["Stock"]],
stocks?: [{	filter?:ValueTypes["StockFilterInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["StockCountableConnection"]],
	/** Return information about the shop. */
	shop?:ValueTypes["Shop"],
	/** Order related settings from site settings. */
	orderSettings?:ValueTypes["OrderSettings"],
	/** Gift card related settings from site settings. */
	giftCardSettings?:ValueTypes["GiftCardSettings"],
shippingZone?: [{	/** ID of the shipping zone. */
	id:string,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null},ValueTypes["ShippingZone"]],
shippingZones?: [{	/** Filtering options for shipping zones. */
	filter?:ValueTypes["ShippingZoneFilterInput"] | null,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ShippingZoneCountableConnection"]],
digitalContent?: [{	/** ID of the digital content. */
	id:string},ValueTypes["DigitalContent"]],
digitalContents?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["DigitalContentCountableConnection"]],
categories?: [{	/** Filtering options for categories. */
	filter?:ValueTypes["CategoryFilterInput"] | null,	/** Sort categories. */
	sortBy?:ValueTypes["CategorySortingInput"] | null,	/** Filter categories by the nesting level in the category tree. */
	level?:number | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["CategoryCountableConnection"]],
category?: [{	/** ID of the category. */
	id?:string | null,	/** Slug of the category */
	slug?:string | null},ValueTypes["Category"]],
collection?: [{	/** ID of the collection. */
	id?:string | null,	/** Slug of the category */
	slug?:string | null,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null},ValueTypes["Collection"]],
collections?: [{	/** Filtering options for collections. */
	filter?:ValueTypes["CollectionFilterInput"] | null,	/** Sort collections. */
	sortBy?:ValueTypes["CollectionSortingInput"] | null,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["CollectionCountableConnection"]],
product?: [{	/** ID of the product. */
	id?:string | null,	/** Slug of the product. */
	slug?:string | null,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null},ValueTypes["Product"]],
products?: [{	/** Filtering options for products. */
	filter?:ValueTypes["ProductFilterInput"] | null,	/** Sort products. */
	sortBy?:ValueTypes["ProductOrder"] | null,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ProductCountableConnection"]],
productType?: [{	/** ID of the product type. */
	id:string},ValueTypes["ProductType"]],
productTypes?: [{	/** Filtering options for product types. */
	filter?:ValueTypes["ProductTypeFilterInput"] | null,	/** Sort product types. */
	sortBy?:ValueTypes["ProductTypeSortingInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ProductTypeCountableConnection"]],
productVariant?: [{	/** ID of the product variant. */
	id?:string | null,	/** Sku of the product variant. */
	sku?:string | null,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null},ValueTypes["ProductVariant"]],
productVariants?: [{	/** Filter product variants by given IDs. */
	ids?:(string | undefined | null)[],	/** Slug of a channel for which the data should be returned. */
	channel?:string | null,	/** Filtering options for product variant. */
	filter?:ValueTypes["ProductVariantFilterInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ProductVariantCountableConnection"]],
reportProductSales?: [{	/** Span of time. */
	period:ValueTypes["ReportingPeriod"],	/** Slug of a channel for which the data should be returned. */
	channel:string,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ProductVariantCountableConnection"]],
payment?: [{	/** ID of the payment. */
	id:string},ValueTypes["Payment"]],
payments?: [{	/** Filtering options for payments. */
	filter?:ValueTypes["PaymentFilterInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["PaymentCountableConnection"]],
page?: [{	/** ID of the page. */
	id?:string | null,	/** The slug of the page. */
	slug?:string | null},ValueTypes["Page"]],
pages?: [{	/** Sort pages. */
	sortBy?:ValueTypes["PageSortingInput"] | null,	/** Filtering options for pages. */
	filter?:ValueTypes["PageFilterInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["PageCountableConnection"]],
pageType?: [{	/** ID of the page type. */
	id:string},ValueTypes["PageType"]],
pageTypes?: [{	/** Sort page types. */
	sortBy?:ValueTypes["PageTypeSortingInput"] | null,	/** Filtering options for page types. */
	filter?:ValueTypes["PageTypeFilterInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["PageTypeCountableConnection"]],
homepageEvents?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["OrderEventCountableConnection"]],
order?: [{	/** ID of an order. */
	id:string},ValueTypes["Order"]],
orders?: [{	/** Sort orders. */
	sortBy?:ValueTypes["OrderSortingInput"] | null,	/** Filtering options for orders. */
	filter?:ValueTypes["OrderFilterInput"] | null,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["OrderCountableConnection"]],
draftOrders?: [{	/** Sort draft orders. */
	sortBy?:ValueTypes["OrderSortingInput"] | null,	/** Filtering options for draft orders. */
	filter?:ValueTypes["OrderDraftFilterInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["OrderCountableConnection"]],
ordersTotal?: [{	/** A period of time. */
	period?:ValueTypes["ReportingPeriod"] | null,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null},ValueTypes["TaxedMoney"]],
orderByToken?: [{	/** The order's token. */
	token:ValueTypes["UUID"]},ValueTypes["Order"]],
menu?: [{	/** Slug of a channel for which the data should be returned. */
	channel?:string | null,	/** ID of the menu. */
	id?:string | null,	/** The menu's name. */
	name?:string | null,	/** The menu's slug. */
	slug?:string | null},ValueTypes["Menu"]],
menus?: [{	/** Slug of a channel for which the data should be returned. */
	channel?:string | null,	/** Sort menus. */
	sortBy?:ValueTypes["MenuSortingInput"] | null,	/** Filtering options for menus. */
	filter?:ValueTypes["MenuFilterInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["MenuCountableConnection"]],
menuItem?: [{	/** ID of the menu item. */
	id:string,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null},ValueTypes["MenuItem"]],
menuItems?: [{	/** Slug of a channel for which the data should be returned. */
	channel?:string | null,	/** Sort menus items. */
	sortBy?:ValueTypes["MenuItemSortingInput"] | null,	/** Filtering options for menu items. */
	filter?:ValueTypes["MenuItemFilterInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["MenuItemCountableConnection"]],
giftCard?: [{	/** ID of the gift card. */
	id:string},ValueTypes["GiftCard"]],
giftCards?: [{	/** New in Saleor 3.1. Sort gift cards. Note: this feature is in a preview state
and can be subject to changes at later point. */
	sortBy?:ValueTypes["GiftCardSortingInput"] | null,	/** New in Saleor 3.1. Filtering options for gift cards. Note: this feature is
in a preview state and can be subject to changes at later point. */
	filter?:ValueTypes["GiftCardFilterInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["GiftCardCountableConnection"]],
	/** New in Saleor 3.1. List of gift card currencies. Note: this feature is in a
preview state and can be subject to changes at later point. */
	giftCardCurrencies?:boolean,
giftCardTags?: [{	/** Filtering options for gift card tags. */
	filter?:ValueTypes["GiftCardTagFilterInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["GiftCardTagCountableConnection"]],
plugin?: [{	/** ID of the plugin. */
	id:string},ValueTypes["Plugin"]],
plugins?: [{	/** Filtering options for plugins. */
	filter?:ValueTypes["PluginFilterInput"] | null,	/** Sort plugins. */
	sortBy?:ValueTypes["PluginSortingInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["PluginCountableConnection"]],
sale?: [{	/** ID of the sale. */
	id:string,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null},ValueTypes["Sale"]],
sales?: [{	/** Filtering options for sales. */
	filter?:ValueTypes["SaleFilterInput"] | null,	/** Sort sales. */
	sortBy?:ValueTypes["SaleSortingInput"] | null,	/** Search sales by name, value or type. 

DEPRECATED: this field will be removed in Saleor 4.0. Use `filter.search` input instead. */
	query?:string | null,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["SaleCountableConnection"]],
voucher?: [{	/** ID of the voucher. */
	id:string,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null},ValueTypes["Voucher"]],
vouchers?: [{	/** Filtering options for vouchers. */
	filter?:ValueTypes["VoucherFilterInput"] | null,	/** Sort voucher. */
	sortBy?:ValueTypes["VoucherSortingInput"] | null,	/** Search vouchers by name or code. 

DEPRECATED: this field will be removed in Saleor 4.0. Use `filter.search` input instead. */
	query?:string | null,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["VoucherCountableConnection"]],
exportFile?: [{	/** ID of the export file job. */
	id:string},ValueTypes["ExportFile"]],
exportFiles?: [{	/** Filtering options for export files. */
	filter?:ValueTypes["ExportFileFilterInput"] | null,	/** Sort export files. */
	sortBy?:ValueTypes["ExportFileSortingInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ExportFileCountableConnection"]],
	/** List of all tax rates available from tax gateway. */
	taxTypes?:ValueTypes["TaxType"],
checkout?: [{	/** The checkout's token. */
	token?:ValueTypes["UUID"] | null},ValueTypes["Checkout"]],
checkouts?: [{	/** New in Saleor 3.1. Sort checkouts. */
	sortBy?:ValueTypes["CheckoutSortingInput"] | null,	/** New in Saleor 3.1. Filtering options for checkouts. */
	filter?:ValueTypes["CheckoutFilterInput"] | null,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["CheckoutCountableConnection"]],
checkoutLines?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["CheckoutLineCountableConnection"]],
channel?: [{	/** ID of the channel. */
	id?:string | null},ValueTypes["Channel"]],
	/** List of all channels. */
	channels?:ValueTypes["Channel"],
attributes?: [{	/** Filtering options for attributes. */
	filter?:ValueTypes["AttributeFilterInput"] | null,	/** Sorting options for attributes. */
	sortBy?:ValueTypes["AttributeSortingInput"] | null,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["AttributeCountableConnection"]],
attribute?: [{	/** ID of the attribute. */
	id?:string | null,	/** Slug of the attribute. */
	slug?:string | null},ValueTypes["Attribute"]],
	/** List of all apps installations */
	appsInstallations?:ValueTypes["AppInstallation"],
apps?: [{	/** Filtering options for apps. */
	filter?:ValueTypes["AppFilterInput"] | null,	/** Sort apps. */
	sortBy?:ValueTypes["AppSortingInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["AppCountableConnection"]],
app?: [{	/** ID of the app. */
	id?:string | null},ValueTypes["App"]],
appExtensions?: [{	/** Filtering options for apps extensions. */
	filter?:ValueTypes["AppExtensionFilterInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["AppExtensionCountableConnection"]],
appExtension?: [{	/** ID of the app extension. */
	id:string},ValueTypes["AppExtension"]],
addressValidationRules?: [{	/** Two-letter ISO 3166-1 country code. */
	countryCode:ValueTypes["CountryCode"],	/** Designation of a region, province or state. */
	countryArea?:string | null,	/** City or a town name. */
	city?:string | null,	/** Sublocality like a district. */
	cityArea?:string | null},ValueTypes["AddressValidationData"]],
address?: [{	/** ID of an address. */
	id:string},ValueTypes["Address"]],
customers?: [{	/** Filtering options for customers. */
	filter?:ValueTypes["CustomerFilterInput"] | null,	/** Sort customers. */
	sortBy?:ValueTypes["UserSortingInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["UserCountableConnection"]],
permissionGroups?: [{	/** Filtering options for permission groups. */
	filter?:ValueTypes["PermissionGroupFilterInput"] | null,	/** Sort permission groups. */
	sortBy?:ValueTypes["PermissionGroupSortingInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["GroupCountableConnection"]],
permissionGroup?: [{	/** ID of the group. */
	id:string},ValueTypes["Group"]],
	/** Return the currently authenticated user. */
	me?:ValueTypes["User"],
staffUsers?: [{	/** Filtering options for staff users. */
	filter?:ValueTypes["StaffUserInput"] | null,	/** Sort staff users. */
	sortBy?:ValueTypes["UserSortingInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["UserCountableConnection"]],
user?: [{	/** ID of the user. */
	id?:string | null,	/** Email address of the user. */
	email?:string | null},ValueTypes["User"]],
_entities?: [{	representations?:(ValueTypes["_Any"] | undefined | null)[]},ValueTypes["_Entity"]],
	_service?:ValueTypes["_Service"],
		__typename?: boolean
}>;
	/** Represents a reduced VAT rate for a particular type of goods. */
["ReducedRate"]: AliasType<{
	/** Reduced VAT rate in percent. */
	rate?:boolean,
	/** A type of goods. */
	rateType?:boolean,
		__typename?: boolean
}>;
	/** Refresh JWT token. Mutation tries to take refreshToken from the input.If it
fails it will try to take refreshToken from the http-only cookie -refreshToken.
csrfToken is required when refreshToken is provided as a cookie. */
["RefreshToken"]: AliasType<{
	/** JWT token, required to authenticate. */
	token?:boolean,
	/** A user instance. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	["ReorderInput"]: {
	/** The ID of the item to move. */
	id:string,
	/** The new relative sorting position of the item (from -inf to +inf). 1 moves the
item one position forward, -1 moves the item one position backward, 0 leaves
the item unchanged. */
	sortOrder?:number | null
};
	["ReportingPeriod"]:ReportingPeriod;
	/** Request email change of the logged in user. */
["RequestEmailChange"]: AliasType<{
	/** A user instance. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** Sends an email with the account password modification link. */
["RequestPasswordReset"]: AliasType<{
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
["Sale"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	name?:boolean,
	type?:boolean,
	startDate?:boolean,
	endDate?:boolean,
	created?:boolean,
	updatedAt?:boolean,
categories?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["CategoryCountableConnection"]],
collections?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["CollectionCountableConnection"]],
products?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ProductCountableConnection"]],
variants?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ProductVariantCountableConnection"]],
translation?: [{	/** A language code to return the translation for sale. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["SaleTranslation"]],
	/** List of channels available for the sale. */
	channelListings?:ValueTypes["SaleChannelListing"],
	/** Sale value. */
	discountValue?:boolean,
	/** Currency code for sale. */
	currency?:boolean,
		__typename?: boolean
}>;
	/** Adds products, categories, collections to a voucher. */
["SaleAddCatalogues"]: AliasType<{
	/** Sale of which catalogue IDs will be modified. */
	sale?:ValueTypes["Sale"],
	discountErrors?:ValueTypes["DiscountError"],
	errors?:ValueTypes["DiscountError"],
		__typename?: boolean
}>;
	/** Deletes sales. */
["SaleBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	discountErrors?:ValueTypes["DiscountError"],
	errors?:ValueTypes["DiscountError"],
		__typename?: boolean
}>;
	/** Represents sale channel listing. */
["SaleChannelListing"]: AliasType<{
	id?:boolean,
	channel?:ValueTypes["Channel"],
	discountValue?:boolean,
	currency?:boolean,
		__typename?: boolean
}>;
	["SaleChannelListingAddInput"]: {
	/** ID of a channel. */
	channelId:string,
	/** The value of the discount. */
	discountValue:ValueTypes["PositiveDecimal"]
};
	["SaleChannelListingInput"]: {
	/** List of channels to which the sale should be assigned. */
	addChannels?:ValueTypes["SaleChannelListingAddInput"][],
	/** List of channels from which the sale should be unassigned. */
	removeChannels?:string[]
};
	/** Manage sale's availability in channels. */
["SaleChannelListingUpdate"]: AliasType<{
	/** An updated sale instance. */
	sale?:ValueTypes["Sale"],
	discountErrors?:ValueTypes["DiscountError"],
	errors?:ValueTypes["DiscountError"],
		__typename?: boolean
}>;
	["SaleCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["SaleCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["SaleCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["Sale"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates a new sale. */
["SaleCreate"]: AliasType<{
	discountErrors?:ValueTypes["DiscountError"],
	errors?:ValueTypes["DiscountError"],
	sale?:ValueTypes["Sale"],
		__typename?: boolean
}>;
	/** Deletes a sale. */
["SaleDelete"]: AliasType<{
	discountErrors?:ValueTypes["DiscountError"],
	errors?:ValueTypes["DiscountError"],
	sale?:ValueTypes["Sale"],
		__typename?: boolean
}>;
	["SaleFilterInput"]: {
	status?:(ValueTypes["DiscountStatusEnum"] | undefined | null)[],
	saleType?:ValueTypes["DiscountValueTypeEnum"] | null,
	started?:ValueTypes["DateTimeRangeInput"] | null,
	search?:string | null,
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[],
	updatedAt?:ValueTypes["DateTimeRangeInput"] | null
};
	["SaleInput"]: {
	/** Voucher name. */
	name?:string | null,
	/** Fixed or percentage. */
	type?:ValueTypes["DiscountValueTypeEnum"] | null,
	/** Value of the voucher. */
	value?:ValueTypes["PositiveDecimal"] | null,
	/** Products related to the discount. */
	products?:(string | undefined | null)[],
	variants?:(string | undefined | null)[],
	/** Categories related to the discount. */
	categories?:(string | undefined | null)[],
	/** Collections related to the discount. */
	collections?:(string | undefined | null)[],
	/** Start date of the voucher in ISO 8601 format. */
	startDate?:ValueTypes["DateTime"] | null,
	/** End date of the voucher in ISO 8601 format. */
	endDate?:ValueTypes["DateTime"] | null
};
	/** Removes products, categories, collections from a sale. */
["SaleRemoveCatalogues"]: AliasType<{
	/** Sale of which catalogue IDs will be modified. */
	sale?:ValueTypes["Sale"],
	discountErrors?:ValueTypes["DiscountError"],
	errors?:ValueTypes["DiscountError"],
		__typename?: boolean
}>;
	["SaleSortField"]:SaleSortField;
	["SaleSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Specifies the channel in which to sort the data. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?:string | null,
	/** Sort sales by the selected field. */
	field:ValueTypes["SaleSortField"]
};
	["SaleTranslatableContent"]: AliasType<{
	id?:boolean,
	name?:boolean,
translation?: [{	/** A language code to return the translation for sale. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["SaleTranslation"]],
	/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
	sale?:ValueTypes["Sale"],
		__typename?: boolean
}>;
	/** Creates/updates translations for a sale. */
["SaleTranslate"]: AliasType<{
	translationErrors?:ValueTypes["TranslationError"],
	errors?:ValueTypes["TranslationError"],
	sale?:ValueTypes["Sale"],
		__typename?: boolean
}>;
	["SaleTranslation"]: AliasType<{
	id?:boolean,
	/** Translation language. */
	language?:ValueTypes["LanguageDisplay"],
	name?:boolean,
		__typename?: boolean
}>;
	["SaleType"]:SaleType;
	/** Updates a sale. */
["SaleUpdate"]: AliasType<{
	discountErrors?:ValueTypes["DiscountError"],
	errors?:ValueTypes["DiscountError"],
	sale?:ValueTypes["Sale"],
		__typename?: boolean
}>;
	/** Represents a custom attribute. */
["SelectedAttribute"]: AliasType<{
	/** Name of an attribute displayed in the interface. */
	attribute?:ValueTypes["Attribute"],
	/** Values of an attribute. */
	values?:ValueTypes["AttributeValue"],
		__typename?: boolean
}>;
	["SeoInput"]: {
	/** SEO title. */
	title?:string | null,
	/** SEO description. */
	description?:string | null
};
	/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
["SetPassword"]: AliasType<{
	/** JWT token, required to authenticate. */
	token?:boolean,
	/** JWT refresh token, required to re-generate access token. */
	refreshToken?:boolean,
	/** CSRF token required to re-generate access token. */
	csrfToken?:boolean,
	/** A user instance. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	["ShippingError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** List of warehouse IDs which causes the error. */
	warehouses?:boolean,
	/** List of channels IDs which causes the error. */
	channels?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["ShippingErrorCode"]:ShippingErrorCode;
	/** Shipping methods that can be used as means of shipping for orders and checkouts. */
["ShippingMethod"]: AliasType<{
	/** Unique ID of ShippingMethod available for Order. */
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	/** Type of the shipping method. */
	type?:boolean,
	/** Shipping method name. */
	name?:boolean,
	/** Shipping method description (JSON). */
	description?:boolean,
	/** Maximum delivery days for this shipping method. */
	maximumDeliveryDays?:boolean,
	/** Minimum delivery days for this shipping method. */
	minimumDeliveryDays?:boolean,
	/** Maximum order weight for this shipping method. */
	maximumOrderWeight?:ValueTypes["Weight"],
	/** Minimum order weight for this shipping method. */
	minimumOrderWeight?:ValueTypes["Weight"],
translation?: [{	/** A language code to return the translation for shipping method. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["ShippingMethodTranslation"]],
	/** The price of selected shipping method. */
	price?:ValueTypes["Money"],
	/** Maximum order price for this shipping method. */
	maximumOrderPrice?:ValueTypes["Money"],
	/** Minimal order price for this shipping method. */
	minimumOrderPrice?:ValueTypes["Money"],
	/** Describes if this shipping method is active and can be selected. */
	active?:boolean,
	/** Message connected to this shipping method. */
	message?:boolean,
		__typename?: boolean
}>;
	/** Represents shipping method channel listing. */
["ShippingMethodChannelListing"]: AliasType<{
	id?:boolean,
	channel?:ValueTypes["Channel"],
	maximumOrderPrice?:ValueTypes["Money"],
	minimumOrderPrice?:ValueTypes["Money"],
	price?:ValueTypes["Money"],
		__typename?: boolean
}>;
	["ShippingMethodChannelListingAddInput"]: {
	/** ID of a channel. */
	channelId:string,
	/** Shipping price of the shipping method in this channel. */
	price?:ValueTypes["PositiveDecimal"] | null,
	/** Minimum order price to use this shipping method. */
	minimumOrderPrice?:ValueTypes["PositiveDecimal"] | null,
	/** Maximum order price to use this shipping method. */
	maximumOrderPrice?:ValueTypes["PositiveDecimal"] | null
};
	["ShippingMethodChannelListingInput"]: {
	/** List of channels to which the shipping method should be assigned. */
	addChannels?:ValueTypes["ShippingMethodChannelListingAddInput"][],
	/** List of channels from which the shipping method should be unassigned. */
	removeChannels?:string[]
};
	/** Manage shipping method's availability in channels. */
["ShippingMethodChannelListingUpdate"]: AliasType<{
	/** An updated shipping method instance. */
	shippingMethod?:ValueTypes["ShippingMethodType"],
	shippingErrors?:ValueTypes["ShippingError"],
	errors?:ValueTypes["ShippingError"],
		__typename?: boolean
}>;
	/** Represents shipping method postal code rule. */
["ShippingMethodPostalCodeRule"]: AliasType<{
	/** The ID of the object. */
	id?:boolean,
	/** Start address range. */
	start?:boolean,
	/** End address range. */
	end?:boolean,
	/** Inclusion type of the postal code rule. */
	inclusionType?:boolean,
		__typename?: boolean
}>;
	["ShippingMethodTranslatableContent"]: AliasType<{
	id?:boolean,
	name?:boolean,
	description?:boolean,
translation?: [{	/** A language code to return the translation for shipping method. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["ShippingMethodTranslation"]],
	/** Shipping method are the methods you'll use to get customer's orders  to them. They are directly exposed to the customers. */
	shippingMethod?:ValueTypes["ShippingMethodType"],
		__typename?: boolean
}>;
	["ShippingMethodTranslation"]: AliasType<{
	id?:boolean,
	/** Translation language. */
	language?:ValueTypes["LanguageDisplay"],
	name?:boolean,
	description?:boolean,
		__typename?: boolean
}>;
	/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
["ShippingMethodType"]: AliasType<{
	/** Shipping method ID. */
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	/** Shipping method name. */
	name?:boolean,
	/** Shipping method description. */
	description?:boolean,
	/** Type of the shipping method. */
	type?:boolean,
translation?: [{	/** A language code to return the translation for shipping method. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["ShippingMethodTranslation"]],
	/** List of channels available for the method. */
	channelListings?:ValueTypes["ShippingMethodChannelListing"],
	/** The price of the cheapest variant (including discounts). */
	maximumOrderPrice?:ValueTypes["Money"],
	/** The price of the cheapest variant (including discounts). */
	minimumOrderPrice?:ValueTypes["Money"],
	/** Postal code ranges rule of exclusion or inclusion of the shipping method. */
	postalCodeRules?:ValueTypes["ShippingMethodPostalCodeRule"],
excludedProducts?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ProductCountableConnection"]],
	/** Minimum order weight to use this shipping method. */
	minimumOrderWeight?:ValueTypes["Weight"],
	/** Maximum order weight to use this shipping method. */
	maximumOrderWeight?:ValueTypes["Weight"],
	/** Maximum number of days for delivery. */
	maximumDeliveryDays?:boolean,
	/** Minimal number of days for delivery. */
	minimumDeliveryDays?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["ShippingMethodTypeEnum"]:ShippingMethodTypeEnum;
	["ShippingPostalCodeRulesCreateInputRange"]: {
	/** Start range of the postal code. */
	start:string,
	/** End range of the postal code. */
	end?:string | null
};
	/** Deletes shipping prices. */
["ShippingPriceBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	shippingErrors?:ValueTypes["ShippingError"],
	errors?:ValueTypes["ShippingError"],
		__typename?: boolean
}>;
	/** Creates a new shipping price. */
["ShippingPriceCreate"]: AliasType<{
	/** A shipping zone to which the shipping method belongs. */
	shippingZone?:ValueTypes["ShippingZone"],
	shippingMethod?:ValueTypes["ShippingMethodType"],
	shippingErrors?:ValueTypes["ShippingError"],
	errors?:ValueTypes["ShippingError"],
		__typename?: boolean
}>;
	/** Deletes a shipping price. */
["ShippingPriceDelete"]: AliasType<{
	/** A shipping method to delete. */
	shippingMethod?:ValueTypes["ShippingMethodType"],
	/** A shipping zone to which the shipping method belongs. */
	shippingZone?:ValueTypes["ShippingZone"],
	shippingErrors?:ValueTypes["ShippingError"],
	errors?:ValueTypes["ShippingError"],
		__typename?: boolean
}>;
	/** Exclude products from shipping price. */
["ShippingPriceExcludeProducts"]: AliasType<{
	/** A shipping method with new list of excluded products. */
	shippingMethod?:ValueTypes["ShippingMethodType"],
	shippingErrors?:ValueTypes["ShippingError"],
	errors?:ValueTypes["ShippingError"],
		__typename?: boolean
}>;
	["ShippingPriceExcludeProductsInput"]: {
	/** List of products which will be excluded. */
	products?:string[]
};
	["ShippingPriceInput"]: {
	/** Name of the shipping method. */
	name?:string | null,
	/** Shipping method description. */
	description?:ValueTypes["JSONString"] | null,
	/** Minimum order weight to use this shipping method. */
	minimumOrderWeight?:ValueTypes["WeightScalar"] | null,
	/** Maximum order weight to use this shipping method. */
	maximumOrderWeight?:ValueTypes["WeightScalar"] | null,
	/** Maximum number of days for delivery. */
	maximumDeliveryDays?:number | null,
	/** Minimal number of days for delivery. */
	minimumDeliveryDays?:number | null,
	/** Shipping type: price or weight based. */
	type?:ValueTypes["ShippingMethodTypeEnum"] | null,
	/** Shipping zone this method belongs to. */
	shippingZone?:string | null,
	/** Postal code rules to add. */
	addPostalCodeRules?:ValueTypes["ShippingPostalCodeRulesCreateInputRange"][],
	/** Postal code rules to delete. */
	deletePostalCodeRules?:string[],
	/** Inclusion type for currently assigned postal code rules. */
	inclusionType?:ValueTypes["PostalCodeRuleInclusionTypeEnum"] | null
};
	/** Remove product from excluded list for shipping price. */
["ShippingPriceRemoveProductFromExclude"]: AliasType<{
	/** A shipping method with new list of excluded products. */
	shippingMethod?:ValueTypes["ShippingMethodType"],
	shippingErrors?:ValueTypes["ShippingError"],
	errors?:ValueTypes["ShippingError"],
		__typename?: boolean
}>;
	/** Creates/updates translations for a shipping method. */
["ShippingPriceTranslate"]: AliasType<{
	translationErrors?:ValueTypes["TranslationError"],
	errors?:ValueTypes["TranslationError"],
	shippingMethod?:ValueTypes["ShippingMethodType"],
		__typename?: boolean
}>;
	["ShippingPriceTranslationInput"]: {
	name?:string | null,
	/** Translated shipping method description (JSON). */
	description?:ValueTypes["JSONString"] | null
};
	/** Updates a new shipping price. */
["ShippingPriceUpdate"]: AliasType<{
	/** A shipping zone to which the shipping method belongs. */
	shippingZone?:ValueTypes["ShippingZone"],
	shippingMethod?:ValueTypes["ShippingMethodType"],
	shippingErrors?:ValueTypes["ShippingError"],
	errors?:ValueTypes["ShippingError"],
		__typename?: boolean
}>;
	/** Represents a shipping zone in the shop. Zones are the concept used only for
grouping shipping methods in the dashboard, and are never exposed to the
customers directly. */
["ShippingZone"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	name?:boolean,
	default?:boolean,
	/** Lowest and highest prices for the shipping. */
	priceRange?:ValueTypes["MoneyRange"],
	/** List of countries available for the method. */
	countries?:ValueTypes["CountryDisplay"],
	/** List of shipping methods available for orders shipped to countries within this shipping zone. */
	shippingMethods?:ValueTypes["ShippingMethodType"],
	/** List of warehouses for shipping zone. */
	warehouses?:ValueTypes["Warehouse"],
	/** List of channels for shipping zone. */
	channels?:ValueTypes["Channel"],
	/** Description of a shipping zone. */
	description?:boolean,
		__typename?: boolean
}>;
	/** Deletes shipping zones. */
["ShippingZoneBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	shippingErrors?:ValueTypes["ShippingError"],
	errors?:ValueTypes["ShippingError"],
		__typename?: boolean
}>;
	["ShippingZoneCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["ShippingZoneCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["ShippingZoneCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["ShippingZone"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates a new shipping zone. */
["ShippingZoneCreate"]: AliasType<{
	shippingErrors?:ValueTypes["ShippingError"],
	errors?:ValueTypes["ShippingError"],
	shippingZone?:ValueTypes["ShippingZone"],
		__typename?: boolean
}>;
	["ShippingZoneCreateInput"]: {
	/** Shipping zone's name. Visible only to the staff. */
	name?:string | null,
	/** Description of the shipping zone. */
	description?:string | null,
	/** List of countries in this shipping zone. */
	countries?:(string | undefined | null)[],
	/** Default shipping zone will be used for countries not covered by other zones. */
	default?:boolean | null,
	/** List of warehouses to assign to a shipping zone */
	addWarehouses?:(string | undefined | null)[],
	/** List of channels to assign to the shipping zone. */
	addChannels?:string[]
};
	/** Deletes a shipping zone. */
["ShippingZoneDelete"]: AliasType<{
	shippingErrors?:ValueTypes["ShippingError"],
	errors?:ValueTypes["ShippingError"],
	shippingZone?:ValueTypes["ShippingZone"],
		__typename?: boolean
}>;
	["ShippingZoneFilterInput"]: {
	search?:string | null,
	channels?:(string | undefined | null)[]
};
	/** Updates a new shipping zone. */
["ShippingZoneUpdate"]: AliasType<{
	shippingErrors?:ValueTypes["ShippingError"],
	errors?:ValueTypes["ShippingError"],
	shippingZone?:ValueTypes["ShippingZone"],
		__typename?: boolean
}>;
	["ShippingZoneUpdateInput"]: {
	/** Shipping zone's name. Visible only to the staff. */
	name?:string | null,
	/** Description of the shipping zone. */
	description?:string | null,
	/** List of countries in this shipping zone. */
	countries?:(string | undefined | null)[],
	/** Default shipping zone will be used for countries not covered by other zones. */
	default?:boolean | null,
	/** List of warehouses to assign to a shipping zone */
	addWarehouses?:(string | undefined | null)[],
	/** List of channels to assign to the shipping zone. */
	addChannels?:string[],
	/** List of warehouses to unassign from a shipping zone */
	removeWarehouses?:(string | undefined | null)[],
	/** List of channels to unassign from the shipping zone. */
	removeChannels?:string[]
};
	/** Represents a shop resource containing general shop data and configuration. */
["Shop"]: AliasType<{
availablePaymentGateways?: [{	/** A currency for which gateways will be returned. 

DEPRECATED: this field will be removed in Saleor 4.0. Use `channel` argument instead. */
	currency?:string | null,	/** Slug of a channel for which the data should be returned. */
	channel?:string | null},ValueTypes["PaymentGateway"]],
	/** List of available external authentications. */
	availableExternalAuthentications?:ValueTypes["ExternalAuthentication"],
availableShippingMethods?: [{	/** Slug of a channel for which the data should be returned. */
	channel:string,	/** Address for which available shipping methods should be returned. */
	address?:ValueTypes["AddressInput"] | null},ValueTypes["ShippingMethod"]],
	/** New in Saleor 3.1. List of all currencies supported by shop's channels. */
	channelCurrencies?:boolean,
countries?: [{	/** A language code to return the translation for. 

DEPRECATED: this field will be removed in Saleor 4.0. */
	languageCode?:ValueTypes["LanguageCodeEnum"] | null,	/** Filtering options for countries */
	filter?:ValueTypes["CountryFilterInput"] | null},ValueTypes["CountryDisplay"]],
	/** Shop's default country. */
	defaultCountry?:ValueTypes["CountryDisplay"],
	/** Default shop's email sender's name. */
	defaultMailSenderName?:boolean,
	/** Default shop's email sender's address. */
	defaultMailSenderAddress?:boolean,
	/** Shop's description. */
	description?:boolean,
	/** Shop's domain data. */
	domain?:ValueTypes["Domain"],
	/** List of the shops's supported languages. */
	languages?:ValueTypes["LanguageDisplay"],
	/** Shop's name. */
	name?:boolean,
	/** List of available permissions. */
	permissions?:ValueTypes["Permission"],
	/** List of possible phone prefixes. */
	phonePrefixes?:boolean,
	/** Header text. */
	headerText?:boolean,
	/** Include taxes in prices. */
	includeTaxesInPrices?:boolean,
	/** New in Saleor 3.1. Automatically approve all new fulfillments. */
	fulfillmentAutoApprove?:boolean,
	/** New in Saleor 3.1. Allow to approve fulfillments which are unpaid. */
	fulfillmentAllowUnpaid?:boolean,
	/** Display prices with tax in store. */
	displayGrossPrices?:boolean,
	/** Charge taxes on shipping. */
	chargeTaxesOnShipping?:boolean,
	/** Enable inventory tracking. */
	trackInventoryByDefault?:boolean,
	/** Default weight unit. */
	defaultWeightUnit?:boolean,
translation?: [{	/** A language code to return the translation for shop. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["ShopTranslation"]],
	/** Enable automatic fulfillment for all digital products. */
	automaticFulfillmentDigitalProducts?:boolean,
	/** New in Saleor 3.1. Default number of minutes stock will be reserved for
anonymous checkout or null when stock reservation is disabled. */
	reserveStockDurationAnonymousUser?:boolean,
	/** New in Saleor 3.1. Default number of minutes stock will be reserved for
authenticated checkout or null when stock reservation is disabled. */
	reserveStockDurationAuthenticatedUser?:boolean,
	/** New in Saleor 3.1. Default number of maximum line quantity in single checkout
(per single checkout line). Note: this feature is in a preview state and can
be subject to changes at later point. */
	limitQuantityPerCheckout?:boolean,
	/** Default number of max downloads per digital content URL. */
	defaultDigitalMaxDownloads?:boolean,
	/** Default number of days which digital content URL will be valid. */
	defaultDigitalUrlValidDays?:boolean,
	/** Company address. */
	companyAddress?:ValueTypes["Address"],
	/** URL of a view where customers can set their password. */
	customerSetPasswordUrl?:boolean,
	/** List of staff notification recipients. */
	staffNotificationRecipients?:ValueTypes["StaffNotificationRecipient"],
	/** Resource limitations and current usage if any set for a shop */
	limits?:ValueTypes["LimitInfo"],
	/** Saleor API version. */
	version?:boolean,
		__typename?: boolean
}>;
	/** Update the shop's address. If the `null` value is passed, the currently selected address will be deleted. */
["ShopAddressUpdate"]: AliasType<{
	/** Updated shop. */
	shop?:ValueTypes["Shop"],
	shopErrors?:ValueTypes["ShopError"],
	errors?:ValueTypes["ShopError"],
		__typename?: boolean
}>;
	/** Updates site domain of the shop. */
["ShopDomainUpdate"]: AliasType<{
	/** Updated shop. */
	shop?:ValueTypes["Shop"],
	shopErrors?:ValueTypes["ShopError"],
	errors?:ValueTypes["ShopError"],
		__typename?: boolean
}>;
	["ShopError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["ShopErrorCode"]:ShopErrorCode;
	/** Fetch tax rates. */
["ShopFetchTaxRates"]: AliasType<{
	/** Updated shop. */
	shop?:ValueTypes["Shop"],
	shopErrors?:ValueTypes["ShopError"],
	errors?:ValueTypes["ShopError"],
		__typename?: boolean
}>;
	["ShopSettingsInput"]: {
	/** Header text. */
	headerText?:string | null,
	/** SEO description. */
	description?:string | null,
	/** Include taxes in prices. */
	includeTaxesInPrices?:boolean | null,
	/** Display prices with tax in store. */
	displayGrossPrices?:boolean | null,
	/** Charge taxes on shipping. */
	chargeTaxesOnShipping?:boolean | null,
	/** Enable inventory tracking. */
	trackInventoryByDefault?:boolean | null,
	/** Default weight unit. */
	defaultWeightUnit?:ValueTypes["WeightUnitsEnum"] | null,
	/** Enable automatic fulfillment for all digital products. */
	automaticFulfillmentDigitalProducts?:boolean | null,
	/** New in Saleor 3.1. Enable automatic approval of all new fulfillments. */
	fulfillmentAutoApprove?:boolean | null,
	/** New in Saleor 3.1. Enable ability to approve fulfillments which are unpaid. */
	fulfillmentAllowUnpaid?:boolean | null,
	/** Default number of max downloads per digital content URL. */
	defaultDigitalMaxDownloads?:number | null,
	/** Default number of days which digital content URL will be valid. */
	defaultDigitalUrlValidDays?:number | null,
	/** Default email sender's name. */
	defaultMailSenderName?:string | null,
	/** Default email sender's address. */
	defaultMailSenderAddress?:string | null,
	/** URL of a view where customers can set their password. */
	customerSetPasswordUrl?:string | null,
	/** New in Saleor 3.1. Default number of minutes stock will be reserved for anonymous checkout. Enter 0 or null to disable. */
	reserveStockDurationAnonymousUser?:number | null,
	/** New in Saleor 3.1. Default number of minutes stock will be reserved for
authenticated checkout. Enter 0 or null to disable. */
	reserveStockDurationAuthenticatedUser?:number | null,
	/** New in Saleor 3.1. Default number of maximum line quantity in single checkout.
Minimum possible value is 1, default value is 50. Note: this feature is in a
preview state and can be subject to changes at later point. */
	limitQuantityPerCheckout?:number | null
};
	/** Creates/updates translations for shop settings. */
["ShopSettingsTranslate"]: AliasType<{
	/** Updated shop settings. */
	shop?:ValueTypes["Shop"],
	translationErrors?:ValueTypes["TranslationError"],
	errors?:ValueTypes["TranslationError"],
		__typename?: boolean
}>;
	["ShopSettingsTranslationInput"]: {
	headerText?:string | null,
	description?:string | null
};
	/** Updates shop settings. */
["ShopSettingsUpdate"]: AliasType<{
	/** Updated shop. */
	shop?:ValueTypes["Shop"],
	shopErrors?:ValueTypes["ShopError"],
	errors?:ValueTypes["ShopError"],
		__typename?: boolean
}>;
	["ShopTranslation"]: AliasType<{
	id?:boolean,
	/** Translation language. */
	language?:ValueTypes["LanguageDisplay"],
	headerText?:boolean,
	description?:boolean,
		__typename?: boolean
}>;
	["SiteDomainInput"]: {
	/** Domain name for shop. */
	domain?:string | null,
	/** Shop site name. */
	name?:string | null
};
	/** Deletes staff users. */
["StaffBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	staffErrors?:ValueTypes["StaffError"],
	errors?:ValueTypes["StaffError"],
		__typename?: boolean
}>;
	/** Creates a new staff user. */
["StaffCreate"]: AliasType<{
	staffErrors?:ValueTypes["StaffError"],
	errors?:ValueTypes["StaffError"],
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	["StaffCreateInput"]: {
	/** Given name. */
	firstName?:string | null,
	/** Family name. */
	lastName?:string | null,
	/** The unique email address of the user. */
	email?:string | null,
	/** User account is active. */
	isActive?:boolean | null,
	/** A note about the user. */
	note?:string | null,
	/** List of permission group IDs to which user should be assigned. */
	addGroups?:string[],
	/** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
	redirectUrl?:string | null
};
	/** Deletes a staff user. */
["StaffDelete"]: AliasType<{
	staffErrors?:ValueTypes["StaffError"],
	errors?:ValueTypes["StaffError"],
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	["StaffError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
	/** A type of address that causes the error. */
	addressType?:boolean,
	/** List of permissions which causes the error. */
	permissions?:boolean,
	/** List of permission group IDs which cause the error. */
	groups?:boolean,
	/** List of user IDs which causes the error. */
	users?:boolean,
		__typename?: boolean
}>;
	["StaffMemberStatus"]:StaffMemberStatus;
	/** Represents a recipient of email notifications send by Saleor, such as
notifications about new orders. Notifications can be assigned to staff users or
arbitrary email addresses. */
["StaffNotificationRecipient"]: AliasType<{
	id?:boolean,
	/** Returns a user subscribed to email notifications. */
	user?:ValueTypes["User"],
	/** Returns email address of a user subscribed to email notifications. */
	email?:boolean,
	/** Determines if a notification active. */
	active?:boolean,
		__typename?: boolean
}>;
	/** Creates a new staff notification recipient. */
["StaffNotificationRecipientCreate"]: AliasType<{
	shopErrors?:ValueTypes["ShopError"],
	errors?:ValueTypes["ShopError"],
	staffNotificationRecipient?:ValueTypes["StaffNotificationRecipient"],
		__typename?: boolean
}>;
	/** Delete staff notification recipient. */
["StaffNotificationRecipientDelete"]: AliasType<{
	shopErrors?:ValueTypes["ShopError"],
	errors?:ValueTypes["ShopError"],
	staffNotificationRecipient?:ValueTypes["StaffNotificationRecipient"],
		__typename?: boolean
}>;
	["StaffNotificationRecipientInput"]: {
	/** The ID of the user subscribed to email notifications.. */
	user?:string | null,
	/** Email address of a user subscribed to email notifications. */
	email?:string | null,
	/** Determines if a notification active. */
	active?:boolean | null
};
	/** Updates a staff notification recipient. */
["StaffNotificationRecipientUpdate"]: AliasType<{
	shopErrors?:ValueTypes["ShopError"],
	errors?:ValueTypes["ShopError"],
	staffNotificationRecipient?:ValueTypes["StaffNotificationRecipient"],
		__typename?: boolean
}>;
	/** Updates an existing staff user. */
["StaffUpdate"]: AliasType<{
	staffErrors?:ValueTypes["StaffError"],
	errors?:ValueTypes["StaffError"],
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	["StaffUpdateInput"]: {
	/** Given name. */
	firstName?:string | null,
	/** Family name. */
	lastName?:string | null,
	/** The unique email address of the user. */
	email?:string | null,
	/** User account is active. */
	isActive?:boolean | null,
	/** A note about the user. */
	note?:string | null,
	/** List of permission group IDs to which user should be assigned. */
	addGroups?:string[],
	/** List of permission group IDs from which user should be unassigned. */
	removeGroups?:string[]
};
	["StaffUserInput"]: {
	status?:ValueTypes["StaffMemberStatus"] | null,
	search?:string | null,
	ids?:(string | undefined | null)[]
};
	/** Represents stock. */
["Stock"]: AliasType<{
	id?:boolean,
	warehouse?:ValueTypes["Warehouse"],
	productVariant?:ValueTypes["ProductVariant"],
	/** Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment. */
	quantity?:boolean,
	/** Quantity allocated for orders */
	quantityAllocated?:boolean,
	/** Quantity reserved for checkouts */
	quantityReserved?:boolean,
		__typename?: boolean
}>;
	["StockAvailability"]:StockAvailability;
	["StockCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["StockCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["StockCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["Stock"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["StockError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["StockErrorCode"]:StockErrorCode;
	["StockFilterInput"]: {
	quantity?:number | null,
	search?:string | null
};
	["StockInput"]: {
	/** Warehouse in which stock is located. */
	warehouse:string,
	/** Quantity of items available for sell. */
	quantity:number
};
	/** Enum representing the type of a payment storage in a gateway. */
["StorePaymentMethodEnum"]:StorePaymentMethodEnum;
	/** Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal. */
["TaxedMoney"]: AliasType<{
	/** Currency code. */
	currency?:boolean,
	/** Amount of money including taxes. */
	gross?:ValueTypes["Money"],
	/** Amount of money without taxes. */
	net?:ValueTypes["Money"],
	/** Amount of taxes. */
	tax?:ValueTypes["Money"],
		__typename?: boolean
}>;
	/** Represents a range of monetary values. */
["TaxedMoneyRange"]: AliasType<{
	/** Lower bound of a price range. */
	start?:ValueTypes["TaxedMoney"],
	/** Upper bound of a price range. */
	stop?:ValueTypes["TaxedMoney"],
		__typename?: boolean
}>;
	/** Representation of tax types fetched from tax gateway. */
["TaxType"]: AliasType<{
	/** Description of the tax type. */
	description?:boolean,
	/** External tax code used to identify given tax group. */
	taxCode?:boolean,
		__typename?: boolean
}>;
	["TimePeriod"]: AliasType<{
	/** The length of the period. */
	amount?:boolean,
	/** The type of the period. */
	type?:boolean,
		__typename?: boolean
}>;
	["TimePeriodInputType"]: {
	/** The length of the period. */
	amount:number,
	/** The type of the period. */
	type:ValueTypes["TimePeriodTypeEnum"]
};
	/** An enumeration. */
["TimePeriodTypeEnum"]:TimePeriodTypeEnum;
	/** An object representing a single payment. */
["Transaction"]: AliasType<{
	id?:boolean,
	created?:boolean,
	payment?:ValueTypes["Payment"],
	token?:boolean,
	kind?:boolean,
	isSuccess?:boolean,
	error?:boolean,
	gatewayResponse?:boolean,
	/** Total amount of the transaction. */
	amount?:ValueTypes["Money"],
		__typename?: boolean
}>;
	["TransactionInput"]: {
	/** Current status of the payment transaction. */
	status:ValueTypes["TransactionStatus"],
	/** Reference of the transaction. */
	reference?:string | null,
	/** Name of the transaction. */
	name?:string | null
};
	/** An enumeration. */
["TransactionKind"]:TransactionKind;
	/** An enumeration. */
["TransactionStatus"]:TransactionStatus;
	["TranslatableItem"]: AliasType<{		["...on ProductTranslatableContent"] : ValueTypes["ProductTranslatableContent"],
		["...on CollectionTranslatableContent"] : ValueTypes["CollectionTranslatableContent"],
		["...on CategoryTranslatableContent"] : ValueTypes["CategoryTranslatableContent"],
		["...on AttributeTranslatableContent"] : ValueTypes["AttributeTranslatableContent"],
		["...on AttributeValueTranslatableContent"] : ValueTypes["AttributeValueTranslatableContent"],
		["...on ProductVariantTranslatableContent"] : ValueTypes["ProductVariantTranslatableContent"],
		["...on PageTranslatableContent"] : ValueTypes["PageTranslatableContent"],
		["...on ShippingMethodTranslatableContent"] : ValueTypes["ShippingMethodTranslatableContent"],
		["...on SaleTranslatableContent"] : ValueTypes["SaleTranslatableContent"],
		["...on VoucherTranslatableContent"] : ValueTypes["VoucherTranslatableContent"],
		["...on MenuItemTranslatableContent"] : ValueTypes["MenuItemTranslatableContent"]
		__typename?: boolean
}>;
	["TranslatableItemConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["TranslatableItemEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["TranslatableItemEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["TranslatableItem"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["TranslatableKinds"]:TranslatableKinds;
	["TranslationError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["TranslationErrorCode"]:TranslationErrorCode;
	["TranslationInput"]: {
	seoTitle?:string | null,
	seoDescription?:string | null,
	name?:string | null,
	description?:ValueTypes["JSONString"] | null
};
	["UpdateInvoiceInput"]: {
	/** Invoice number */
	number?:string | null,
	/** URL of an invoice to download. */
	url?:string | null
};
	/** Updates metadata of an object. */
["UpdateMetadata"]: AliasType<{
	metadataErrors?:ValueTypes["MetadataError"],
	errors?:ValueTypes["MetadataError"],
	item?:ValueTypes["ObjectWithMetadata"],
		__typename?: boolean
}>;
	/** Updates private metadata of an object. */
["UpdatePrivateMetadata"]: AliasType<{
	metadataErrors?:ValueTypes["MetadataError"],
	errors?:ValueTypes["MetadataError"],
	item?:ValueTypes["ObjectWithMetadata"],
		__typename?: boolean
}>;
	/** Variables of this type must be set to null in mutations. They will be replaced
with a filename from a following multipart part containing a binary file. See:
https://github.com/jaydenseric/graphql-multipart-request-spec. */
["Upload"]:unknown;
	["UploadError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["UploadErrorCode"]:UploadErrorCode;
	/** Represents user data. */
["User"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	email?:boolean,
	firstName?:boolean,
	lastName?:boolean,
	isStaff?:boolean,
	isActive?:boolean,
	/** List of all user's addresses. */
	addresses?:ValueTypes["Address"],
	/** Returns the last open checkout of this user. */
	checkout?:ValueTypes["Checkout"],
checkoutTokens?: [{	/** Slug of a channel for which the data should be returned. */
	channel?:string | null},boolean],
giftCards?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["GiftCardCountableConnection"]],
	/** A note about the customer. */
	note?:boolean,
orders?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["OrderCountableConnection"]],
	/** List of user's permissions. */
	userPermissions?:ValueTypes["UserPermission"],
	/** List of user's permission groups. */
	permissionGroups?:ValueTypes["Group"],
	/** List of user's permission groups which user can manage. */
	editableGroups?:ValueTypes["Group"],
avatar?: [{	/** Size of the avatar. */
	size?:number | null},ValueTypes["Image"]],
	/** List of events associated with the user. */
	events?:ValueTypes["CustomerEvent"],
storedPaymentSources?: [{	/** Slug of a channel for which the data should be returned. */
	channel?:string | null},ValueTypes["PaymentSource"]],
	/** User language code. */
	languageCode?:boolean,
	defaultShippingAddress?:ValueTypes["Address"],
	defaultBillingAddress?:ValueTypes["Address"],
	lastLogin?:boolean,
	dateJoined?:boolean,
	updatedAt?:boolean,
		__typename?: boolean
}>;
	/** Deletes a user avatar. Only for staff members. */
["UserAvatarDelete"]: AliasType<{
	/** An updated user instance. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** Create a user avatar. Only for staff members. This mutation must be sent as a
`multipart` request. More detailed specs of the upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
["UserAvatarUpdate"]: AliasType<{
	/** An updated user instance. */
	user?:ValueTypes["User"],
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** Activate or deactivate users. */
["UserBulkSetActive"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	["UserCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["UserCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["UserCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["User"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["UserCreateInput"]: {
	/** Billing address of the customer. */
	defaultBillingAddress?:ValueTypes["AddressInput"] | null,
	/** Shipping address of the customer. */
	defaultShippingAddress?:ValueTypes["AddressInput"] | null,
	/** Given name. */
	firstName?:string | null,
	/** Family name. */
	lastName?:string | null,
	/** The unique email address of the user. */
	email?:string | null,
	/** User account is active. */
	isActive?:boolean | null,
	/** A note about the user. */
	note?:string | null,
	/** User language code. */
	languageCode?:ValueTypes["LanguageCodeEnum"] | null,
	/** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
	redirectUrl?:string | null,
	/** Slug of a channel which will be used for notify user. Optional when only one channel exists. */
	channel?:string | null
};
	["UserPermission"]: AliasType<{
	/** Internal code for permission. */
	code?:boolean,
	/** Describe action(s) allowed to do by permission. */
	name?:boolean,
sourcePermissionGroups?: [{	/** ID of user whose groups should be returned. */
	userId:string},ValueTypes["Group"]],
		__typename?: boolean
}>;
	["UserSortField"]:UserSortField;
	["UserSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort users by the selected field. */
	field:ValueTypes["UserSortField"]
};
	["UUID"]:unknown;
	["VariantAttributeScope"]:VariantAttributeScope;
	/** Assign an media to a product variant. */
["VariantMediaAssign"]: AliasType<{
	productVariant?:ValueTypes["ProductVariant"],
	media?:ValueTypes["ProductMedia"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	/** Unassign an media from a product variant. */
["VariantMediaUnassign"]: AliasType<{
	productVariant?:ValueTypes["ProductVariant"],
	media?:ValueTypes["ProductMedia"],
	productErrors?:ValueTypes["ProductError"],
	errors?:ValueTypes["ProductError"],
		__typename?: boolean
}>;
	/** Represents availability of a variant in the storefront. */
["VariantPricingInfo"]: AliasType<{
	/** Whether it is in sale or not. */
	onSale?:boolean,
	/** The discount amount if in sale (null otherwise). */
	discount?:ValueTypes["TaxedMoney"],
	/** The discount amount in the local currency. */
	discountLocalCurrency?:ValueTypes["TaxedMoney"],
	/** The price, with any discount subtracted. */
	price?:ValueTypes["TaxedMoney"],
	/** The price without any discount. */
	priceUndiscounted?:ValueTypes["TaxedMoney"],
	/** The discounted price in the local currency. */
	priceLocalCurrency?:ValueTypes["TaxedMoney"],
		__typename?: boolean
}>;
	/** Represents a VAT rate for a country. */
["VAT"]: AliasType<{
	/** Country code. */
	countryCode?:boolean,
	/** Standard VAT rate in percent. */
	standardRate?:boolean,
	/** Country's VAT rate exceptions for specific types of goods. */
	reducedRates?:ValueTypes["ReducedRate"],
		__typename?: boolean
}>;
	/** Verify JWT token. */
["VerifyToken"]: AliasType<{
	/** User assigned to token. */
	user?:ValueTypes["User"],
	/** Determine if token is valid or not. */
	isValid?:boolean,
	/** JWT payload. */
	payload?:boolean,
	accountErrors?:ValueTypes["AccountError"],
	errors?:ValueTypes["AccountError"],
		__typename?: boolean
}>;
	/** An enumeration. */
["VolumeUnitsEnum"]:VolumeUnitsEnum;
	/** Vouchers allow giving discounts to particular customers on categories,
collections or specific products. They can be used during checkout by providing
valid voucher codes. */
["Voucher"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	name?:boolean,
	code?:boolean,
	usageLimit?:boolean,
	used?:boolean,
	startDate?:boolean,
	endDate?:boolean,
	applyOncePerOrder?:boolean,
	applyOncePerCustomer?:boolean,
	onlyForStaff?:boolean,
	minCheckoutItemsQuantity?:boolean,
categories?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["CategoryCountableConnection"]],
collections?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["CollectionCountableConnection"]],
products?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ProductCountableConnection"]],
variants?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ProductVariantCountableConnection"]],
	/** List of countries available for the shipping voucher. */
	countries?:ValueTypes["CountryDisplay"],
translation?: [{	/** A language code to return the translation for voucher. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["VoucherTranslation"]],
	/** Determines a type of discount for voucher - value or percentage */
	discountValueType?:boolean,
	/** Voucher value. */
	discountValue?:boolean,
	/** Currency code for voucher. */
	currency?:boolean,
	/** Minimum order value to apply voucher. */
	minSpent?:ValueTypes["Money"],
	/** Determines a type of voucher. */
	type?:boolean,
	/** List of availability in channels for the voucher. */
	channelListings?:ValueTypes["VoucherChannelListing"],
		__typename?: boolean
}>;
	/** Adds products, categories, collections to a voucher. */
["VoucherAddCatalogues"]: AliasType<{
	/** Voucher of which catalogue IDs will be modified. */
	voucher?:ValueTypes["Voucher"],
	discountErrors?:ValueTypes["DiscountError"],
	errors?:ValueTypes["DiscountError"],
		__typename?: boolean
}>;
	/** Deletes vouchers. */
["VoucherBulkDelete"]: AliasType<{
	/** Returns how many objects were affected. */
	count?:boolean,
	discountErrors?:ValueTypes["DiscountError"],
	errors?:ValueTypes["DiscountError"],
		__typename?: boolean
}>;
	/** Represents voucher channel listing. */
["VoucherChannelListing"]: AliasType<{
	id?:boolean,
	channel?:ValueTypes["Channel"],
	discountValue?:boolean,
	currency?:boolean,
	minSpent?:ValueTypes["Money"],
		__typename?: boolean
}>;
	["VoucherChannelListingAddInput"]: {
	/** ID of a channel. */
	channelId:string,
	/** Value of the voucher. */
	discountValue?:ValueTypes["PositiveDecimal"] | null,
	/** Min purchase amount required to apply the voucher. */
	minAmountSpent?:ValueTypes["PositiveDecimal"] | null
};
	["VoucherChannelListingInput"]: {
	/** List of channels to which the voucher should be assigned. */
	addChannels?:ValueTypes["VoucherChannelListingAddInput"][],
	/** List of channels from which the voucher should be unassigned. */
	removeChannels?:string[]
};
	/** Manage voucher's availability in channels. */
["VoucherChannelListingUpdate"]: AliasType<{
	/** An updated voucher instance. */
	voucher?:ValueTypes["Voucher"],
	discountErrors?:ValueTypes["DiscountError"],
	errors?:ValueTypes["DiscountError"],
		__typename?: boolean
}>;
	["VoucherCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["VoucherCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["VoucherCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["Voucher"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates a new voucher. */
["VoucherCreate"]: AliasType<{
	discountErrors?:ValueTypes["DiscountError"],
	errors?:ValueTypes["DiscountError"],
	voucher?:ValueTypes["Voucher"],
		__typename?: boolean
}>;
	/** Deletes a voucher. */
["VoucherDelete"]: AliasType<{
	discountErrors?:ValueTypes["DiscountError"],
	errors?:ValueTypes["DiscountError"],
	voucher?:ValueTypes["Voucher"],
		__typename?: boolean
}>;
	["VoucherDiscountType"]:VoucherDiscountType;
	["VoucherFilterInput"]: {
	status?:(ValueTypes["DiscountStatusEnum"] | undefined | null)[],
	timesUsed?:ValueTypes["IntRangeInput"] | null,
	discountType?:(ValueTypes["VoucherDiscountType"] | undefined | null)[],
	started?:ValueTypes["DateTimeRangeInput"] | null,
	search?:string | null,
	metadata?:(ValueTypes["MetadataFilter"] | undefined | null)[]
};
	["VoucherInput"]: {
	/** Voucher type: PRODUCT, CATEGORY SHIPPING or ENTIRE_ORDER. */
	type?:ValueTypes["VoucherTypeEnum"] | null,
	/** Voucher name. */
	name?:string | null,
	/** Code to use the voucher. */
	code?:string | null,
	/** Start date of the voucher in ISO 8601 format. */
	startDate?:ValueTypes["DateTime"] | null,
	/** End date of the voucher in ISO 8601 format. */
	endDate?:ValueTypes["DateTime"] | null,
	/** Choices: fixed or percentage. */
	discountValueType?:ValueTypes["DiscountValueTypeEnum"] | null,
	/** Products discounted by the voucher. */
	products?:(string | undefined | null)[],
	/** New in Saleor 3.1. Variants discounted by the voucher. */
	variants?:(string | undefined | null)[],
	/** Collections discounted by the voucher. */
	collections?:(string | undefined | null)[],
	/** Categories discounted by the voucher. */
	categories?:(string | undefined | null)[],
	/** Minimal quantity of checkout items required to apply the voucher. */
	minCheckoutItemsQuantity?:number | null,
	/** Country codes that can be used with the shipping voucher. */
	countries?:(string | undefined | null)[],
	/** Voucher should be applied to the cheapest item or entire order. */
	applyOncePerOrder?:boolean | null,
	/** Voucher should be applied once per customer. */
	applyOncePerCustomer?:boolean | null,
	/** Voucher can be used only by staff user. */
	onlyForStaff?:boolean | null,
	/** Limit number of times this voucher can be used in total. */
	usageLimit?:number | null
};
	/** Removes products, categories, collections from a voucher. */
["VoucherRemoveCatalogues"]: AliasType<{
	/** Voucher of which catalogue IDs will be modified. */
	voucher?:ValueTypes["Voucher"],
	discountErrors?:ValueTypes["DiscountError"],
	errors?:ValueTypes["DiscountError"],
		__typename?: boolean
}>;
	["VoucherSortField"]:VoucherSortField;
	["VoucherSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Specifies the channel in which to sort the data. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?:string | null,
	/** Sort vouchers by the selected field. */
	field:ValueTypes["VoucherSortField"]
};
	["VoucherTranslatableContent"]: AliasType<{
	id?:boolean,
	name?:boolean,
translation?: [{	/** A language code to return the translation for voucher. */
	languageCode:ValueTypes["LanguageCodeEnum"]},ValueTypes["VoucherTranslation"]],
	/** Vouchers allow giving discounts to particular customers on categories,
collections or specific products. They can be used during checkout by
providing valid voucher codes. */
	voucher?:ValueTypes["Voucher"],
		__typename?: boolean
}>;
	/** Creates/updates translations for a voucher. */
["VoucherTranslate"]: AliasType<{
	translationErrors?:ValueTypes["TranslationError"],
	errors?:ValueTypes["TranslationError"],
	voucher?:ValueTypes["Voucher"],
		__typename?: boolean
}>;
	["VoucherTranslation"]: AliasType<{
	id?:boolean,
	/** Translation language. */
	language?:ValueTypes["LanguageDisplay"],
	name?:boolean,
		__typename?: boolean
}>;
	["VoucherTypeEnum"]:VoucherTypeEnum;
	/** Updates a voucher. */
["VoucherUpdate"]: AliasType<{
	discountErrors?:ValueTypes["DiscountError"],
	errors?:ValueTypes["DiscountError"],
	voucher?:ValueTypes["Voucher"],
		__typename?: boolean
}>;
	/** Represents warehouse. */
["Warehouse"]: AliasType<{
	id?:boolean,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ValueTypes["MetadataItem"],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ValueTypes["MetadataItem"],
	name?:boolean,
	slug?:boolean,
	email?:boolean,
	isPrivate?:boolean,
	address?:ValueTypes["Address"],
	/** Warehouse company name. */
	companyName?:boolean,
	/** New in Saleor 3.1. Click and collect options: local, all or disabled. Note:
this feature is in a preview state and can be subject to changes at later point. */
	clickAndCollectOption?:boolean,
shippingZones?: [{	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["ShippingZoneCountableConnection"]],
		__typename?: boolean
}>;
	/** An enumeration. */
["WarehouseClickAndCollectOptionEnum"]:WarehouseClickAndCollectOptionEnum;
	["WarehouseCountableConnection"]: AliasType<{
	/** Pagination data for this connection. */
	pageInfo?:ValueTypes["PageInfo"],
	edges?:ValueTypes["WarehouseCountableEdge"],
	/** A total count of items in the collection. */
	totalCount?:boolean,
		__typename?: boolean
}>;
	["WarehouseCountableEdge"]: AliasType<{
	/** The item at the end of the edge. */
	node?:ValueTypes["Warehouse"],
	/** A cursor for use in pagination. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Creates new warehouse. */
["WarehouseCreate"]: AliasType<{
	warehouseErrors?:ValueTypes["WarehouseError"],
	errors?:ValueTypes["WarehouseError"],
	warehouse?:ValueTypes["Warehouse"],
		__typename?: boolean
}>;
	["WarehouseCreateInput"]: {
	/** Warehouse slug. */
	slug?:string | null,
	/** The email address of the warehouse. */
	email?:string | null,
	/** Warehouse name. */
	name:string,
	/** Address of the warehouse. */
	address:ValueTypes["AddressInput"],
	/** Shipping zones supported by the warehouse. */
	shippingZones?:(string | undefined | null)[]
};
	/** Deletes selected warehouse. */
["WarehouseDelete"]: AliasType<{
	warehouseErrors?:ValueTypes["WarehouseError"],
	errors?:ValueTypes["WarehouseError"],
	warehouse?:ValueTypes["Warehouse"],
		__typename?: boolean
}>;
	["WarehouseError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["WarehouseErrorCode"]:WarehouseErrorCode;
	["WarehouseFilterInput"]: {
	clickAndCollectOption?:ValueTypes["WarehouseClickAndCollectOptionEnum"] | null,
	search?:string | null,
	ids?:(string | undefined | null)[],
	isPrivate?:boolean | null
};
	/** Add shipping zone to given warehouse. */
["WarehouseShippingZoneAssign"]: AliasType<{
	warehouseErrors?:ValueTypes["WarehouseError"],
	errors?:ValueTypes["WarehouseError"],
	warehouse?:ValueTypes["Warehouse"],
		__typename?: boolean
}>;
	/** Remove shipping zone from given warehouse. */
["WarehouseShippingZoneUnassign"]: AliasType<{
	warehouseErrors?:ValueTypes["WarehouseError"],
	errors?:ValueTypes["WarehouseError"],
	warehouse?:ValueTypes["Warehouse"],
		__typename?: boolean
}>;
	["WarehouseSortField"]:WarehouseSortField;
	["WarehouseSortingInput"]: {
	/** Specifies the direction in which to sort products. */
	direction:ValueTypes["OrderDirection"],
	/** Sort warehouses by the selected field. */
	field:ValueTypes["WarehouseSortField"]
};
	/** Updates given warehouse. */
["WarehouseUpdate"]: AliasType<{
	warehouseErrors?:ValueTypes["WarehouseError"],
	errors?:ValueTypes["WarehouseError"],
	warehouse?:ValueTypes["Warehouse"],
		__typename?: boolean
}>;
	["WarehouseUpdateInput"]: {
	/** Warehouse slug. */
	slug?:string | null,
	/** The email address of the warehouse. */
	email?:string | null,
	/** Warehouse name. */
	name?:string | null,
	/** Address of the warehouse. */
	address?:ValueTypes["AddressInput"] | null,
	/** New in Saleor 3.1. Click and collect options: local, all or disabled. Note:
this feature is in a preview state and can be subject to changes at later point. */
	clickAndCollectOption?:ValueTypes["WarehouseClickAndCollectOptionEnum"] | null,
	/** New in Saleor 3.1. Visibility of warehouse stocks. Note: this feature is in a
preview state and can be subject to changes at later point. */
	isPrivate?:boolean | null
};
	/** Webhook. */
["Webhook"]: AliasType<{
	id?:boolean,
	name?:boolean,
	/** List of webhook events. */
	events?:ValueTypes["WebhookEvent"],
	/** List of synchronous webhook events. */
	syncEvents?:ValueTypes["WebhookEventSync"],
	/** List of asynchronous webhook events. */
	asyncEvents?:ValueTypes["WebhookEventAsync"],
	app?:ValueTypes["App"],
eventDeliveries?: [{	/** Event delivery sorter. */
	sortBy?:ValueTypes["EventDeliverySortingInput"] | null,	/** Event delivery filter options. */
	filter?:ValueTypes["EventDeliveryFilterInput"] | null,	/** Return the elements in the list that come before the specified cursor. */
	before?:string | null,	/** Return the elements in the list that come after the specified cursor. */
	after?:string | null,	/** Return the first n elements from the list. */
	first?:number | null,	/** Return the last n elements from the list. */
	last?:number | null},ValueTypes["EventDeliveryCountableConnection"]],
	targetUrl?:boolean,
	isActive?:boolean,
	secretKey?:boolean,
		__typename?: boolean
}>;
	/** Creates a new webhook subscription. */
["WebhookCreate"]: AliasType<{
	webhookErrors?:ValueTypes["WebhookError"],
	errors?:ValueTypes["WebhookError"],
	webhook?:ValueTypes["Webhook"],
		__typename?: boolean
}>;
	["WebhookCreateInput"]: {
	/** The name of the webhook. */
	name?:string | null,
	/** The url to receive the payload. */
	targetUrl?:string | null,
	/** The events that webhook wants to subscribe. 

DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead. */
	events?:(ValueTypes["WebhookEventTypeEnum"] | undefined | null)[],
	/** The asynchronous events that webhook wants to subscribe. */
	asyncEvents?:ValueTypes["WebhookEventTypeAsyncEnum"][],
	/** The synchronous events that webhook wants to subscribe. */
	syncEvents?:ValueTypes["WebhookEventTypeSyncEnum"][],
	/** ID of the app to which webhook belongs. */
	app?:string | null,
	/** Determine if webhook will be set active or not. */
	isActive?:boolean | null,
	/** The secret key used to create a hash signature with each payload. */
	secretKey?:string | null
};
	/** Deletes a webhook subscription. */
["WebhookDelete"]: AliasType<{
	webhookErrors?:ValueTypes["WebhookError"],
	errors?:ValueTypes["WebhookError"],
	webhook?:ValueTypes["Webhook"],
		__typename?: boolean
}>;
	["WebhookError"]: AliasType<{
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:boolean,
	/** The error message. */
	message?:boolean,
	/** The error code. */
	code?:boolean,
		__typename?: boolean
}>;
	/** An enumeration. */
["WebhookErrorCode"]:WebhookErrorCode;
	/** Webhook event. */
["WebhookEvent"]: AliasType<{
	/** Display name of the event. */
	name?:boolean,
	/** Internal name of the event type. */
	eventType?:boolean,
		__typename?: boolean
}>;
	/** Asynchronous webhook event. */
["WebhookEventAsync"]: AliasType<{
	/** Display name of the event. */
	name?:boolean,
	/** Internal name of the event type. */
	eventType?:boolean,
		__typename?: boolean
}>;
	/** Synchronous webhook event. */
["WebhookEventSync"]: AliasType<{
	/** Display name of the event. */
	name?:boolean,
	/** Internal name of the event type. */
	eventType?:boolean,
		__typename?: boolean
}>;
	/** Enum determining type of webhook. */
["WebhookEventTypeAsyncEnum"]:WebhookEventTypeAsyncEnum;
	/** Enum determining type of webhook. */
["WebhookEventTypeEnum"]:WebhookEventTypeEnum;
	/** Enum determining type of webhook. */
["WebhookEventTypeSyncEnum"]:WebhookEventTypeSyncEnum;
	/** An enumeration. */
["WebhookSampleEventTypeEnum"]:WebhookSampleEventTypeEnum;
	/** Updates a webhook subscription. */
["WebhookUpdate"]: AliasType<{
	webhookErrors?:ValueTypes["WebhookError"],
	errors?:ValueTypes["WebhookError"],
	webhook?:ValueTypes["Webhook"],
		__typename?: boolean
}>;
	["WebhookUpdateInput"]: {
	/** The new name of the webhook. */
	name?:string | null,
	/** The url to receive the payload. */
	targetUrl?:string | null,
	/** The events that webhook wants to subscribe. 

DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead. */
	events?:(ValueTypes["WebhookEventTypeEnum"] | undefined | null)[],
	/** The asynchronous events that webhook wants to subscribe. */
	asyncEvents?:ValueTypes["WebhookEventTypeAsyncEnum"][],
	/** The synchronous events that webhook wants to subscribe. */
	syncEvents?:ValueTypes["WebhookEventTypeSyncEnum"][],
	/** ID of the app to which webhook belongs. */
	app?:string | null,
	/** Determine if webhook will be set active or not. */
	isActive?:boolean | null,
	/** Use to create a hash signature with each payload. */
	secretKey?:string | null
};
	/** Represents weight value in a specific weight unit. */
["Weight"]: AliasType<{
	/** Weight unit. */
	unit?:boolean,
	/** Weight value. */
	value?:boolean,
		__typename?: boolean
}>;
	["WeightScalar"]:unknown;
	/** An enumeration. */
["WeightUnitsEnum"]:WeightUnitsEnum
  }

export type ModelTypes = {
    /** _Any value scalar as defined by Federation spec. */
["_Any"]:any;
	/** _Entity union as defined by Federation spec. */
["_Entity"]:ModelTypes["App"] | ModelTypes["Address"] | ModelTypes["User"] | ModelTypes["Group"] | ModelTypes["ProductVariant"] | ModelTypes["Product"] | ModelTypes["ProductType"] | ModelTypes["Collection"] | ModelTypes["Category"] | ModelTypes["ProductMedia"] | ModelTypes["PageType"];
	/** _Service manifest as defined by Federation spec. */
["_Service"]: {
		sdl?:string
};
	/** Create a new address for the customer. */
["AccountAddressCreate"]: {
		/** A user instance for which the address was created. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][],
	address?:ModelTypes["Address"]
};
	/** Delete an address of the logged-in user. */
["AccountAddressDelete"]: {
		/** A user instance for which the address was deleted. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][],
	address?:ModelTypes["Address"]
};
	/** Updates an address of the logged-in user. */
["AccountAddressUpdate"]: {
		/** A user object for which the address was edited. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][],
	address?:ModelTypes["Address"]
};
	/** Remove user account. */
["AccountDelete"]: {
		accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][],
	user?:ModelTypes["User"]
};
	["AccountError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["AccountErrorCode"],
	/** A type of address that causes the error. */
	addressType?:ModelTypes["AddressTypeEnum"]
};
	/** An enumeration. */
["AccountErrorCode"]: GraphQLTypes["AccountErrorCode"];
	["AccountInput"]: GraphQLTypes["AccountInput"];
	/** Register a new user. */
["AccountRegister"]: {
		/** Informs whether users need to confirm their email address. */
	requiresConfirmation?:boolean,
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][],
	user?:ModelTypes["User"]
};
	["AccountRegisterInput"]: GraphQLTypes["AccountRegisterInput"];
	/** Sends an email with the account removal link for the logged-in user. */
["AccountRequestDeletion"]: {
		accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** Sets a default address for the authenticated user. */
["AccountSetDefaultAddress"]: {
		/** An updated user instance. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** Updates the account of the logged-in user. */
["AccountUpdate"]: {
		accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][],
	user?:ModelTypes["User"]
};
	/** Represents user address data. */
["Address"]: {
		id:string,
	firstName:string,
	lastName:string,
	companyName:string,
	streetAddress1:string,
	streetAddress2:string,
	city:string,
	cityArea:string,
	postalCode:string,
	/** Shop's default country. */
	country:ModelTypes["CountryDisplay"],
	countryArea:string,
	phone?:string,
	/** Address is user's default shipping address. */
	isDefaultShippingAddress?:boolean,
	/** Address is user's default billing address. */
	isDefaultBillingAddress?:boolean
};
	/** Creates user address. */
["AddressCreate"]: {
		/** A user instance for which the address was created. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][],
	address?:ModelTypes["Address"]
};
	/** Deletes an address. */
["AddressDelete"]: {
		/** A user instance for which the address was deleted. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][],
	address?:ModelTypes["Address"]
};
	["AddressInput"]: GraphQLTypes["AddressInput"];
	/** Sets a default address for the given user. */
["AddressSetDefault"]: {
		/** An updated user instance. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** An enumeration. */
["AddressTypeEnum"]: GraphQLTypes["AddressTypeEnum"];
	/** Updates an address. */
["AddressUpdate"]: {
		/** A user object for which the address was edited. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][],
	address?:ModelTypes["Address"]
};
	["AddressValidationData"]: {
		countryCode?:string,
	countryName?:string,
	addressFormat?:string,
	addressLatinFormat?:string,
	allowedFields?:(string | undefined)[],
	requiredFields?:(string | undefined)[],
	upperFields?:(string | undefined)[],
	countryAreaType?:string,
	countryAreaChoices?:(ModelTypes["ChoiceValue"] | undefined)[],
	cityType?:string,
	cityChoices?:(ModelTypes["ChoiceValue"] | undefined)[],
	cityAreaType?:string,
	cityAreaChoices?:(ModelTypes["ChoiceValue"] | undefined)[],
	postalCodeType?:string,
	postalCodeMatchers?:(string | undefined)[],
	postalCodeExamples?:(string | undefined)[],
	postalCodePrefix?:string
};
	/** Represents allocation. */
["Allocation"]: {
		id:string,
	/** Quantity allocated for orders. */
	quantity:number,
	/** The warehouse were items were allocated. */
	warehouse:ModelTypes["Warehouse"]
};
	/** Represents app data. */
["App"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	/** List of the app's permissions. */
	permissions?:(ModelTypes["Permission"] | undefined)[],
	/** The date and time when the app was created. */
	created?:ModelTypes["DateTime"],
	/** Determine if app will be set active or not. */
	isActive?:boolean,
	/** Name of the app. */
	name?:string,
	/** Type of the app. */
	type?:ModelTypes["AppTypeEnum"],
	/** Last 4 characters of the tokens. */
	tokens?:(ModelTypes["AppToken"] | undefined)[],
	/** List of webhooks assigned to this app. */
	webhooks?:(ModelTypes["Webhook"] | undefined)[],
	/** Description of this app. */
	aboutApp?:string,
	/** Description of the data privacy defined for this app. */
	dataPrivacy?:string,
	/** Url to details about the privacy policy on the app owner page. */
	dataPrivacyUrl?:string,
	/** Homepage of the app. */
	homepageUrl?:string,
	/** Support page for the app. */
	supportUrl?:string,
	/** Url to iframe with the configuration for the app. */
	configurationUrl?:string,
	/** Url to iframe with the app. */
	appUrl?:string,
	/** Version number of the app. */
	version?:string,
	/** JWT token used to authenticate by thridparty app. */
	accessToken?:string,
	/** New in Saleor 3.1. App's dashboard extensions. Note: this feature is in a
preview state and can be subject to changes at later point. */
	extensions:ModelTypes["AppExtension"][]
};
	/** Activate the app. */
["AppActivate"]: {
		appErrors:ModelTypes["AppError"][],
	errors:ModelTypes["AppError"][],
	app?:ModelTypes["App"]
};
	["AppCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["AppCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["AppCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["App"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates a new app. */
["AppCreate"]: {
		/** The newly created authentication token. */
	authToken?:string,
	appErrors:ModelTypes["AppError"][],
	errors:ModelTypes["AppError"][],
	app?:ModelTypes["App"]
};
	/** Deactivate the app. */
["AppDeactivate"]: {
		appErrors:ModelTypes["AppError"][],
	errors:ModelTypes["AppError"][],
	app?:ModelTypes["App"]
};
	/** Deletes an app. */
["AppDelete"]: {
		appErrors:ModelTypes["AppError"][],
	errors:ModelTypes["AppError"][],
	app?:ModelTypes["App"]
};
	/** Delete failed installation. */
["AppDeleteFailedInstallation"]: {
		appErrors:ModelTypes["AppError"][],
	errors:ModelTypes["AppError"][],
	appInstallation?:ModelTypes["AppInstallation"]
};
	["AppError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["AppErrorCode"],
	/** List of permissions which causes the error. */
	permissions?:ModelTypes["PermissionEnum"][]
};
	/** An enumeration. */
["AppErrorCode"]: GraphQLTypes["AppErrorCode"];
	/** Represents app data. */
["AppExtension"]: {
		id:string,
	/** List of the app extension's permissions. */
	permissions:ModelTypes["Permission"][],
	/** Label of the extension to show in the dashboard. */
	label:string,
	/** URL of a view where extension's iframe is placed. */
	url:string,
	/** Place where given extension will be mounted. */
	mount:ModelTypes["AppExtensionMountEnum"],
	/** Type of way how app extension will be opened. */
	target:ModelTypes["AppExtensionTargetEnum"],
	app:ModelTypes["App"],
	/** JWT token used to authenticate by thridparty app extension. */
	accessToken?:string
};
	["AppExtensionCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["AppExtensionCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["AppExtensionCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["AppExtension"],
	/** A cursor for use in pagination. */
	cursor:string
};
	["AppExtensionFilterInput"]: GraphQLTypes["AppExtensionFilterInput"];
	/** All places where app extension can be mounted. */
["AppExtensionMountEnum"]: GraphQLTypes["AppExtensionMountEnum"];
	/** All available ways of opening an app extension.

    POPUP - app's extension will be mounted as a popup window
    APP_PAGE - redirect to app's page */
["AppExtensionTargetEnum"]: GraphQLTypes["AppExtensionTargetEnum"];
	/** Fetch and validate manifest. */
["AppFetchManifest"]: {
		manifest?:ModelTypes["Manifest"],
	appErrors:ModelTypes["AppError"][],
	errors:ModelTypes["AppError"][]
};
	["AppFilterInput"]: GraphQLTypes["AppFilterInput"];
	["AppInput"]: GraphQLTypes["AppInput"];
	/** Install new app by using app manifest. */
["AppInstall"]: {
		appErrors:ModelTypes["AppError"][],
	errors:ModelTypes["AppError"][],
	appInstallation?:ModelTypes["AppInstallation"]
};
	/** Represents ongoing installation of app. */
["AppInstallation"]: {
		id:string,
	/** Job status. */
	status:ModelTypes["JobStatusEnum"],
	/** Created date time of job in ISO 8601 format. */
	createdAt:ModelTypes["DateTime"],
	/** Date time of job last update in ISO 8601 format. */
	updatedAt:ModelTypes["DateTime"],
	/** Job message. */
	message?:string,
	appName:string,
	manifestUrl:string
};
	["AppInstallInput"]: GraphQLTypes["AppInstallInput"];
	["AppManifestExtension"]: {
		/** List of the app extension's permissions. */
	permissions:ModelTypes["Permission"][],
	/** Label of the extension to show in the dashboard. */
	label:string,
	/** URL of a view where extension's iframe is placed. */
	url:string,
	/** Place where given extension will be mounted. */
	mount:ModelTypes["AppExtensionMountEnum"],
	/** Type of way how app extension will be opened. */
	target:ModelTypes["AppExtensionTargetEnum"]
};
	/** Retry failed installation of new app. */
["AppRetryInstall"]: {
		appErrors:ModelTypes["AppError"][],
	errors:ModelTypes["AppError"][],
	appInstallation?:ModelTypes["AppInstallation"]
};
	["AppSortField"]: GraphQLTypes["AppSortField"];
	["AppSortingInput"]: GraphQLTypes["AppSortingInput"];
	/** Represents token data. */
["AppToken"]: {
		id:string,
	/** Name of the authenticated token. */
	name?:string,
	/** Last 4 characters of the token. */
	authToken?:string
};
	/** Creates a new token. */
["AppTokenCreate"]: {
		/** The newly created authentication token. */
	authToken?:string,
	appErrors:ModelTypes["AppError"][],
	errors:ModelTypes["AppError"][],
	appToken?:ModelTypes["AppToken"]
};
	/** Deletes an authentication token assigned to app. */
["AppTokenDelete"]: {
		appErrors:ModelTypes["AppError"][],
	errors:ModelTypes["AppError"][],
	appToken?:ModelTypes["AppToken"]
};
	["AppTokenInput"]: GraphQLTypes["AppTokenInput"];
	/** Verify provided app token. */
["AppTokenVerify"]: {
		/** Determine if token is valid or not. */
	valid:boolean,
	appErrors:ModelTypes["AppError"][],
	errors:ModelTypes["AppError"][]
};
	/** Enum determining type of your App. */
["AppTypeEnum"]: GraphQLTypes["AppTypeEnum"];
	/** Updates an existing app. */
["AppUpdate"]: {
		appErrors:ModelTypes["AppError"][],
	errors:ModelTypes["AppError"][],
	app?:ModelTypes["App"]
};
	/** An enumeration. */
["AreaUnitsEnum"]: GraphQLTypes["AreaUnitsEnum"];
	/** New in Saleor 3.1. Represents assigned attribute to variant with variant selection attached. */
["AssignedVariantAttribute"]: {
		/** Attribute assigned to variant. */
	attribute:ModelTypes["Attribute"],
	/** Determines, whether assigned attribute is allowed for variant selection.
Supported variant types for variant selection are: ['dropdown', 'boolean',
'swatch', 'numeric'] */
	variantSelection:boolean
};
	/** Assigns storefront's navigation menus. */
["AssignNavigation"]: {
		/** Assigned navigation menu. */
	menu?:ModelTypes["Menu"],
	menuErrors:ModelTypes["MenuError"][],
	errors:ModelTypes["MenuError"][]
};
	/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
["Attribute"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	/** The input type to use for entering attribute values in the dashboard. */
	inputType?:ModelTypes["AttributeInputTypeEnum"],
	/** The entity type which can be used as a reference. */
	entityType?:ModelTypes["AttributeEntityTypeEnum"],
	/** Name of an attribute displayed in the interface. */
	name?:string,
	/** Internal representation of an attribute name. */
	slug?:string,
	/** The attribute type. */
	type?:ModelTypes["AttributeTypeEnum"],
	/** The unit of attribute values. */
	unit?:ModelTypes["MeasurementUnitsEnum"],
	/** List of attribute's values. */
	choices?:ModelTypes["AttributeValueCountableConnection"],
	/** Whether the attribute requires values to be passed or not. */
	valueRequired:boolean,
	/** Whether the attribute should be visible or not in storefront. */
	visibleInStorefront:boolean,
	/** Whether the attribute can be filtered in storefront. */
	filterableInStorefront:boolean,
	/** Whether the attribute can be filtered in dashboard. */
	filterableInDashboard:boolean,
	/** Whether the attribute can be displayed in the admin product list. */
	availableInGrid:boolean,
	/** Returns translated attribute fields for the given language code. */
	translation?:ModelTypes["AttributeTranslation"],
	/** The position of the attribute in the storefront navigation (0 by default). */
	storefrontSearchPosition:number,
	/** Flag indicating that attribute has predefined choices. */
	withChoices:boolean,
	productTypes:ModelTypes["ProductTypeCountableConnection"],
	productVariantTypes:ModelTypes["ProductTypeCountableConnection"]
};
	/** Deletes attributes. */
["AttributeBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	attributeErrors:ModelTypes["AttributeError"][],
	errors:ModelTypes["AttributeError"][]
};
	["AttributeChoicesSortField"]: GraphQLTypes["AttributeChoicesSortField"];
	["AttributeChoicesSortingInput"]: GraphQLTypes["AttributeChoicesSortingInput"];
	["AttributeCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["AttributeCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["AttributeCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["Attribute"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates an attribute. */
["AttributeCreate"]: {
		attribute?:ModelTypes["Attribute"],
	attributeErrors:ModelTypes["AttributeError"][],
	errors:ModelTypes["AttributeError"][]
};
	["AttributeCreateInput"]: GraphQLTypes["AttributeCreateInput"];
	/** Deletes an attribute. */
["AttributeDelete"]: {
		attributeErrors:ModelTypes["AttributeError"][],
	errors:ModelTypes["AttributeError"][],
	attribute?:ModelTypes["Attribute"]
};
	/** An enumeration. */
["AttributeEntityTypeEnum"]: GraphQLTypes["AttributeEntityTypeEnum"];
	["AttributeError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["AttributeErrorCode"]
};
	/** An enumeration. */
["AttributeErrorCode"]: GraphQLTypes["AttributeErrorCode"];
	["AttributeFilterInput"]: GraphQLTypes["AttributeFilterInput"];
	["AttributeInput"]: GraphQLTypes["AttributeInput"];
	/** An enumeration. */
["AttributeInputTypeEnum"]: GraphQLTypes["AttributeInputTypeEnum"];
	/** Reorder the values of an attribute. */
["AttributeReorderValues"]: {
		/** Attribute from which values are reordered. */
	attribute?:ModelTypes["Attribute"],
	attributeErrors:ModelTypes["AttributeError"][],
	errors:ModelTypes["AttributeError"][]
};
	["AttributeSortField"]: GraphQLTypes["AttributeSortField"];
	["AttributeSortingInput"]: GraphQLTypes["AttributeSortingInput"];
	["AttributeTranslatableContent"]: {
		id:string,
	name:string,
	/** Returns translated attribute fields for the given language code. */
	translation?:ModelTypes["AttributeTranslation"],
	/** Custom attribute of a product. */
	attribute?:ModelTypes["Attribute"]
};
	/** Creates/updates translations for an attribute. */
["AttributeTranslate"]: {
		translationErrors:ModelTypes["TranslationError"][],
	errors:ModelTypes["TranslationError"][],
	attribute?:ModelTypes["Attribute"]
};
	["AttributeTranslation"]: {
		id:string,
	/** Translation language. */
	language:ModelTypes["LanguageDisplay"],
	name:string
};
	/** An enumeration. */
["AttributeTypeEnum"]: GraphQLTypes["AttributeTypeEnum"];
	/** Updates attribute. */
["AttributeUpdate"]: {
		attribute?:ModelTypes["Attribute"],
	attributeErrors:ModelTypes["AttributeError"][],
	errors:ModelTypes["AttributeError"][]
};
	["AttributeUpdateInput"]: GraphQLTypes["AttributeUpdateInput"];
	/** Represents a value of an attribute. */
["AttributeValue"]: {
		id:string,
	/** Name of a value displayed in the interface. */
	name?:string,
	/** Internal representation of a value (unique per attribute). */
	slug?:string,
	/** Represent value of the attribute value (e.g. color values for swatch attributes). */
	value?:string,
	/** Returns translated attribute value fields for the given language code. */
	translation?:ModelTypes["AttributeValueTranslation"],
	/** The input type to use for entering attribute values in the dashboard. */
	inputType?:ModelTypes["AttributeInputTypeEnum"],
	/** The ID of the attribute reference. */
	reference?:string,
	/** Represents file URL and content type (if attribute value is a file). */
	file?:ModelTypes["File"],
	/** Represents the text (JSON) of the attribute value. */
	richText?:ModelTypes["JSONString"],
	/** Represents the boolean value of the attribute value. */
	boolean?:boolean,
	/** Represents the date value of the attribute value. */
	date?:ModelTypes["Date"],
	/** Represents the date time value of the attribute value. */
	dateTime?:ModelTypes["DateTime"]
};
	/** Deletes values of attributes. */
["AttributeValueBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	attributeErrors:ModelTypes["AttributeError"][],
	errors:ModelTypes["AttributeError"][]
};
	["AttributeValueCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["AttributeValueCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["AttributeValueCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["AttributeValue"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates a value for an attribute. */
["AttributeValueCreate"]: {
		/** The updated attribute. */
	attribute?:ModelTypes["Attribute"],
	attributeErrors:ModelTypes["AttributeError"][],
	errors:ModelTypes["AttributeError"][],
	attributeValue?:ModelTypes["AttributeValue"]
};
	["AttributeValueCreateInput"]: GraphQLTypes["AttributeValueCreateInput"];
	/** Deletes a value of an attribute. */
["AttributeValueDelete"]: {
		/** The updated attribute. */
	attribute?:ModelTypes["Attribute"],
	attributeErrors:ModelTypes["AttributeError"][],
	errors:ModelTypes["AttributeError"][],
	attributeValue?:ModelTypes["AttributeValue"]
};
	["AttributeValueFilterInput"]: GraphQLTypes["AttributeValueFilterInput"];
	["AttributeValueInput"]: GraphQLTypes["AttributeValueInput"];
	["AttributeValueTranslatableContent"]: {
		id:string,
	name:string,
	richText?:ModelTypes["JSONString"],
	/** Returns translated attribute value fields for the given language code. */
	translation?:ModelTypes["AttributeValueTranslation"],
	/** Represents a value of an attribute. */
	attributeValue?:ModelTypes["AttributeValue"]
};
	/** Creates/updates translations for an attribute value. */
["AttributeValueTranslate"]: {
		translationErrors:ModelTypes["TranslationError"][],
	errors:ModelTypes["TranslationError"][],
	attributeValue?:ModelTypes["AttributeValue"]
};
	["AttributeValueTranslation"]: {
		id:string,
	/** Translation language. */
	language:ModelTypes["LanguageDisplay"],
	name:string,
	richText?:ModelTypes["JSONString"]
};
	["AttributeValueTranslationInput"]: GraphQLTypes["AttributeValueTranslationInput"];
	/** Updates value of an attribute. */
["AttributeValueUpdate"]: {
		/** The updated attribute. */
	attribute?:ModelTypes["Attribute"],
	attributeErrors:ModelTypes["AttributeError"][],
	errors:ModelTypes["AttributeError"][],
	attributeValue?:ModelTypes["AttributeValue"]
};
	["AttributeValueUpdateInput"]: GraphQLTypes["AttributeValueUpdateInput"];
	["BulkAttributeValueInput"]: GraphQLTypes["BulkAttributeValueInput"];
	["BulkProductError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["ProductErrorCode"],
	/** List of attributes IDs which causes the error. */
	attributes?:string[],
	/** List of attribute values IDs which causes the error. */
	values?:string[],
	/** Index of an input list item that caused the error. */
	index?:number,
	/** List of warehouse IDs which causes the error. */
	warehouses?:string[],
	/** List of channel IDs which causes the error. */
	channels?:string[]
};
	["BulkStockError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["ProductErrorCode"],
	/** List of attributes IDs which causes the error. */
	attributes?:string[],
	/** List of attribute values IDs which causes the error. */
	values?:string[],
	/** Index of an input list item that caused the error. */
	index?:number
};
	["CardInput"]: GraphQLTypes["CardInput"];
	["CatalogueInput"]: GraphQLTypes["CatalogueInput"];
	/** Represents a single category of products. Categories allow to organize products
in a tree-hierarchies which can be used for navigation in the storefront. */
["Category"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	seoTitle?:string,
	seoDescription?:string,
	name:string,
	description?:ModelTypes["JSONString"],
	slug:string,
	parent?:ModelTypes["Category"],
	level:number,
	/** Description of the category (JSON). */
	descriptionJson?:ModelTypes["JSONString"],
	/** List of ancestors of the category. */
	ancestors?:ModelTypes["CategoryCountableConnection"],
	/** List of products in the category. */
	products?:ModelTypes["ProductCountableConnection"],
	/** List of children of the category. */
	children?:ModelTypes["CategoryCountableConnection"],
	backgroundImage?:ModelTypes["Image"],
	/** Returns translated category fields for the given language code. */
	translation?:ModelTypes["CategoryTranslation"]
};
	/** Deletes categories. */
["CategoryBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	["CategoryCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["CategoryCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["CategoryCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["Category"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates a new category. */
["CategoryCreate"]: {
		productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][],
	category?:ModelTypes["Category"]
};
	/** Deletes a category. */
["CategoryDelete"]: {
		productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][],
	category?:ModelTypes["Category"]
};
	["CategoryFilterInput"]: GraphQLTypes["CategoryFilterInput"];
	["CategoryInput"]: GraphQLTypes["CategoryInput"];
	["CategorySortField"]: GraphQLTypes["CategorySortField"];
	["CategorySortingInput"]: GraphQLTypes["CategorySortingInput"];
	["CategoryTranslatableContent"]: {
		id:string,
	seoTitle?:string,
	seoDescription?:string,
	name:string,
	description?:ModelTypes["JSONString"],
	/** Description of the category (JSON). */
	descriptionJson?:ModelTypes["JSONString"],
	/** Returns translated category fields for the given language code. */
	translation?:ModelTypes["CategoryTranslation"],
	/** Represents a single category of products. */
	category?:ModelTypes["Category"]
};
	/** Creates/updates translations for a category. */
["CategoryTranslate"]: {
		translationErrors:ModelTypes["TranslationError"][],
	errors:ModelTypes["TranslationError"][],
	category?:ModelTypes["Category"]
};
	["CategoryTranslation"]: {
		id:string,
	/** Translation language. */
	language:ModelTypes["LanguageDisplay"],
	seoTitle?:string,
	seoDescription?:string,
	name?:string,
	description?:ModelTypes["JSONString"],
	/** Translated description of the product (JSON). */
	descriptionJson?:ModelTypes["JSONString"]
};
	/** Updates a category. */
["CategoryUpdate"]: {
		productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][],
	category?:ModelTypes["Category"]
};
	/** Represents channel. */
["Channel"]: {
		id:string,
	name:string,
	isActive:boolean,
	currencyCode:string,
	slug:string,
	/** Whether a channel has associated orders. */
	hasOrders:boolean,
	/** New in Saleor 3.1. Default country for the channel. Default country can be
used in checkout to determine the stock quantities or calculate taxes when the
country was not explicitly provided. */
	defaultCountry:ModelTypes["CountryDisplay"]
};
	/** Activate a channel. */
["ChannelActivate"]: {
		/** Activated channel. */
	channel?:ModelTypes["Channel"],
	channelErrors:ModelTypes["ChannelError"][],
	errors:ModelTypes["ChannelError"][]
};
	/** Creates new channel. */
["ChannelCreate"]: {
		channelErrors:ModelTypes["ChannelError"][],
	errors:ModelTypes["ChannelError"][],
	channel?:ModelTypes["Channel"]
};
	["ChannelCreateInput"]: GraphQLTypes["ChannelCreateInput"];
	/** Deactivate a channel. */
["ChannelDeactivate"]: {
		/** Deactivated channel. */
	channel?:ModelTypes["Channel"],
	channelErrors:ModelTypes["ChannelError"][],
	errors:ModelTypes["ChannelError"][]
};
	/** Delete a channel. Orders associated with the deleted channel will be moved to
the target channel. Checkouts, product availability, and pricing will be removed. */
["ChannelDelete"]: {
		channelErrors:ModelTypes["ChannelError"][],
	errors:ModelTypes["ChannelError"][],
	channel?:ModelTypes["Channel"]
};
	["ChannelDeleteInput"]: GraphQLTypes["ChannelDeleteInput"];
	["ChannelError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["ChannelErrorCode"],
	/** List of shipping zone IDs which causes the error. */
	shippingZones?:string[]
};
	/** An enumeration. */
["ChannelErrorCode"]: GraphQLTypes["ChannelErrorCode"];
	/** Update a channel. */
["ChannelUpdate"]: {
		channelErrors:ModelTypes["ChannelError"][],
	errors:ModelTypes["ChannelError"][],
	channel?:ModelTypes["Channel"]
};
	["ChannelUpdateInput"]: GraphQLTypes["ChannelUpdateInput"];
	/** Checkout object. */
["Checkout"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	created:ModelTypes["DateTime"],
	lastChange:ModelTypes["DateTime"],
	user?:ModelTypes["User"],
	channel:ModelTypes["Channel"],
	billingAddress?:ModelTypes["Address"],
	shippingAddress?:ModelTypes["Address"],
	note:string,
	discount?:ModelTypes["Money"],
	discountName?:string,
	translatedDiscountName?:string,
	voucherCode?:string,
	/** Shipping methods that can be used with this checkout. */
	availableShippingMethods?:ModelTypes["ShippingMethod"][],
	/** Shipping methods that can be used with this checkout. */
	shippingMethods?:ModelTypes["ShippingMethod"][],
	/** New in Saleor 3.1. Collection points that can be used for this order. Note:
this feature is in a preview state and can be subject to changes at later point. */
	availableCollectionPoints:ModelTypes["Warehouse"][],
	/** List of available payment gateways. */
	availablePaymentGateways:ModelTypes["PaymentGateway"][],
	/** Email of a customer. */
	email?:string,
	/** List of gift cards associated with this checkout. */
	giftCards?:(ModelTypes["GiftCard"] | undefined)[],
	/** Returns True, if checkout requires shipping. */
	isShippingRequired:boolean,
	/** The number of items purchased. */
	quantity:number,
	/** New in Saleor 3.1. Date when oldest stock reservation for this checkout  expires or null if no stock is reserved. */
	stockReservationExpires?:ModelTypes["DateTime"],
	/** A list of checkout lines, each containing information about an item in the checkout. */
	lines?:(ModelTypes["CheckoutLine"] | undefined)[],
	/** The price of the shipping, with all the taxes included. */
	shippingPrice?:ModelTypes["TaxedMoney"],
	/** The shipping method related with checkout. */
	shippingMethod?:ModelTypes["ShippingMethod"],
	/** New in Saleor 3.1. The delivery method selected for this checkout. Note: this
feature is in a preview state and can be subject to changes at later point. */
	deliveryMethod?:ModelTypes["DeliveryMethod"],
	/** The price of the checkout before shipping, with taxes included. */
	subtotalPrice?:ModelTypes["TaxedMoney"],
	/** The checkout's token. */
	token:ModelTypes["UUID"],
	/** The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included. */
	totalPrice?:ModelTypes["TaxedMoney"],
	/** Checkout language code. */
	languageCode:ModelTypes["LanguageCodeEnum"]
};
	/** Adds a gift card or a voucher to a checkout. */
["CheckoutAddPromoCode"]: {
		/** The checkout with the added gift card or voucher. */
	checkout?:ModelTypes["Checkout"],
	checkoutErrors:ModelTypes["CheckoutError"][],
	errors:ModelTypes["CheckoutError"][]
};
	/** Update billing address in the existing checkout. */
["CheckoutBillingAddressUpdate"]: {
		/** An updated checkout. */
	checkout?:ModelTypes["Checkout"],
	checkoutErrors:ModelTypes["CheckoutError"][],
	errors:ModelTypes["CheckoutError"][]
};
	/** Completes the checkout. As a result a new order is created and a payment charge
is made. This action requires a successful payment before it can be performed.
In case additional confirmation step as 3D secure is required confirmationNeeded
flag will be set to True and no order created until payment is confirmed with
second call of this mutation. */
["CheckoutComplete"]: {
		/** Placed order. */
	order?:ModelTypes["Order"],
	/** Set to true if payment needs to be confirmed before checkout is complete. */
	confirmationNeeded:boolean,
	/** Confirmation data used to process additional authorization steps. */
	confirmationData?:ModelTypes["JSONString"],
	checkoutErrors:ModelTypes["CheckoutError"][],
	errors:ModelTypes["CheckoutError"][]
};
	["CheckoutCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["CheckoutCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["CheckoutCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["Checkout"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Create a new checkout. */
["CheckoutCreate"]: {
		/** Whether the checkout was created or the current active one was returned. Refer
to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout. */
	created?:boolean,
	checkoutErrors:ModelTypes["CheckoutError"][],
	errors:ModelTypes["CheckoutError"][],
	checkout?:ModelTypes["Checkout"]
};
	["CheckoutCreateInput"]: GraphQLTypes["CheckoutCreateInput"];
	/** Sets the customer as the owner of the checkout. */
["CheckoutCustomerAttach"]: {
		/** An updated checkout. */
	checkout?:ModelTypes["Checkout"],
	checkoutErrors:ModelTypes["CheckoutError"][],
	errors:ModelTypes["CheckoutError"][]
};
	/** Removes the user assigned as the owner of the checkout. */
["CheckoutCustomerDetach"]: {
		/** An updated checkout. */
	checkout?:ModelTypes["Checkout"],
	checkoutErrors:ModelTypes["CheckoutError"][],
	errors:ModelTypes["CheckoutError"][]
};
	/** New in Saleor 3.1. Updates the delivery method (shipping method or pick up
point) of the checkout. Note: this feature is in a preview state and can be
subject to changes at later point. */
["CheckoutDeliveryMethodUpdate"]: {
		/** An updated checkout. */
	checkout?:ModelTypes["Checkout"],
	errors:ModelTypes["CheckoutError"][]
};
	/** Updates email address in the existing checkout object. */
["CheckoutEmailUpdate"]: {
		/** An updated checkout. */
	checkout?:ModelTypes["Checkout"],
	checkoutErrors:ModelTypes["CheckoutError"][],
	errors:ModelTypes["CheckoutError"][]
};
	["CheckoutError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["CheckoutErrorCode"],
	/** List of varint IDs which causes the error. */
	variants?:string[],
	/** List of line Ids which cause the error. */
	lines?:string[],
	/** A type of address that causes the error. */
	addressType?:ModelTypes["AddressTypeEnum"]
};
	/** An enumeration. */
["CheckoutErrorCode"]: GraphQLTypes["CheckoutErrorCode"];
	["CheckoutFilterInput"]: GraphQLTypes["CheckoutFilterInput"];
	/** Update language code in the existing checkout. */
["CheckoutLanguageCodeUpdate"]: {
		/** An updated checkout. */
	checkout?:ModelTypes["Checkout"],
	checkoutErrors:ModelTypes["CheckoutError"][],
	errors:ModelTypes["CheckoutError"][]
};
	/** Represents an item in the checkout. */
["CheckoutLine"]: {
		id:string,
	variant:ModelTypes["ProductVariant"],
	quantity:number,
	/** The sum of the checkout line price, taxes and discounts. */
	totalPrice?:ModelTypes["TaxedMoney"],
	/** Indicates whether the item need to be delivered. */
	requiresShipping?:boolean
};
	["CheckoutLineCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["CheckoutLineCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["CheckoutLineCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["CheckoutLine"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Deletes a CheckoutLine. */
["CheckoutLineDelete"]: {
		/** An updated checkout. */
	checkout?:ModelTypes["Checkout"],
	checkoutErrors:ModelTypes["CheckoutError"][],
	errors:ModelTypes["CheckoutError"][]
};
	["CheckoutLineInput"]: GraphQLTypes["CheckoutLineInput"];
	/** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
["CheckoutLinesAdd"]: {
		/** An updated checkout. */
	checkout?:ModelTypes["Checkout"],
	checkoutErrors:ModelTypes["CheckoutError"][],
	errors:ModelTypes["CheckoutError"][]
};
	/** Deletes checkout lines. */
["CheckoutLinesDelete"]: {
		/** An updated checkout. */
	checkout?:ModelTypes["Checkout"],
	errors:ModelTypes["CheckoutError"][]
};
	/** Updates checkout line in the existing checkout. */
["CheckoutLinesUpdate"]: {
		/** An updated checkout. */
	checkout?:ModelTypes["Checkout"],
	checkoutErrors:ModelTypes["CheckoutError"][],
	errors:ModelTypes["CheckoutError"][]
};
	/** Create a new payment for given checkout. */
["CheckoutPaymentCreate"]: {
		/** Related checkout object. */
	checkout?:ModelTypes["Checkout"],
	/** A newly created payment. */
	payment?:ModelTypes["Payment"],
	paymentErrors:ModelTypes["PaymentError"][],
	errors:ModelTypes["PaymentError"][]
};
	/** Remove a gift card or a voucher from a checkout. */
["CheckoutRemovePromoCode"]: {
		/** The checkout with the removed gift card or voucher. */
	checkout?:ModelTypes["Checkout"],
	checkoutErrors:ModelTypes["CheckoutError"][],
	errors:ModelTypes["CheckoutError"][]
};
	/** Update shipping address in the existing checkout. */
["CheckoutShippingAddressUpdate"]: {
		/** An updated checkout. */
	checkout?:ModelTypes["Checkout"],
	checkoutErrors:ModelTypes["CheckoutError"][],
	errors:ModelTypes["CheckoutError"][]
};
	/** Updates the shipping method of the checkout. */
["CheckoutShippingMethodUpdate"]: {
		/** An updated checkout. */
	checkout?:ModelTypes["Checkout"],
	checkoutErrors:ModelTypes["CheckoutError"][],
	errors:ModelTypes["CheckoutError"][]
};
	["CheckoutSortField"]: GraphQLTypes["CheckoutSortField"];
	["CheckoutSortingInput"]: GraphQLTypes["CheckoutSortingInput"];
	["ChoiceValue"]: {
		raw?:string,
	verbose?:string
};
	/** Represents a collection of products. */
["Collection"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	seoTitle?:string,
	seoDescription?:string,
	name:string,
	description?:ModelTypes["JSONString"],
	slug:string,
	/** Channel given to retrieve this collection. Also used by federation gateway to resolve this object in a federated query. */
	channel?:string,
	/** Description of the collection (JSON). */
	descriptionJson?:ModelTypes["JSONString"],
	/** List of products in this collection. */
	products?:ModelTypes["ProductCountableConnection"],
	backgroundImage?:ModelTypes["Image"],
	/** Returns translated collection fields for the given language code. */
	translation?:ModelTypes["CollectionTranslation"],
	/** List of channels in which the collection is available. */
	channelListings?:ModelTypes["CollectionChannelListing"][]
};
	/** Adds products to a collection. */
["CollectionAddProducts"]: {
		/** Collection to which products will be added. */
	collection?:ModelTypes["Collection"],
	collectionErrors:ModelTypes["CollectionError"][],
	errors:ModelTypes["CollectionError"][]
};
	/** Deletes collections. */
["CollectionBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	collectionErrors:ModelTypes["CollectionError"][],
	errors:ModelTypes["CollectionError"][]
};
	/** Represents collection channel listing. */
["CollectionChannelListing"]: {
		id:string,
	publicationDate?:ModelTypes["Date"],
	isPublished:boolean,
	channel:ModelTypes["Channel"]
};
	["CollectionChannelListingError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["ProductErrorCode"],
	/** List of attributes IDs which causes the error. */
	attributes?:string[],
	/** List of attribute values IDs which causes the error. */
	values?:string[],
	/** List of channels IDs which causes the error. */
	channels?:string[]
};
	/** Manage collection's availability in channels. */
["CollectionChannelListingUpdate"]: {
		/** An updated collection instance. */
	collection?:ModelTypes["Collection"],
	collectionChannelListingErrors:ModelTypes["CollectionChannelListingError"][],
	errors:ModelTypes["CollectionChannelListingError"][]
};
	["CollectionChannelListingUpdateInput"]: GraphQLTypes["CollectionChannelListingUpdateInput"];
	["CollectionCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["CollectionCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["CollectionCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["Collection"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates a new collection. */
["CollectionCreate"]: {
		collectionErrors:ModelTypes["CollectionError"][],
	errors:ModelTypes["CollectionError"][],
	collection?:ModelTypes["Collection"]
};
	["CollectionCreateInput"]: GraphQLTypes["CollectionCreateInput"];
	/** Deletes a collection. */
["CollectionDelete"]: {
		collectionErrors:ModelTypes["CollectionError"][],
	errors:ModelTypes["CollectionError"][],
	collection?:ModelTypes["Collection"]
};
	["CollectionError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** List of products IDs which causes the error. */
	products?:string[],
	/** The error code. */
	code:ModelTypes["CollectionErrorCode"]
};
	/** An enumeration. */
["CollectionErrorCode"]: GraphQLTypes["CollectionErrorCode"];
	["CollectionFilterInput"]: GraphQLTypes["CollectionFilterInput"];
	["CollectionInput"]: GraphQLTypes["CollectionInput"];
	["CollectionPublished"]: GraphQLTypes["CollectionPublished"];
	/** Remove products from a collection. */
["CollectionRemoveProducts"]: {
		/** Collection from which products will be removed. */
	collection?:ModelTypes["Collection"],
	collectionErrors:ModelTypes["CollectionError"][],
	errors:ModelTypes["CollectionError"][]
};
	/** Reorder the products of a collection. */
["CollectionReorderProducts"]: {
		/** Collection from which products are reordered. */
	collection?:ModelTypes["Collection"],
	collectionErrors:ModelTypes["CollectionError"][],
	errors:ModelTypes["CollectionError"][]
};
	["CollectionSortField"]: GraphQLTypes["CollectionSortField"];
	["CollectionSortingInput"]: GraphQLTypes["CollectionSortingInput"];
	["CollectionTranslatableContent"]: {
		id:string,
	seoTitle?:string,
	seoDescription?:string,
	name:string,
	description?:ModelTypes["JSONString"],
	/** Description of the collection (JSON). */
	descriptionJson?:ModelTypes["JSONString"],
	/** Returns translated collection fields for the given language code. */
	translation?:ModelTypes["CollectionTranslation"],
	/** Represents a collection of products. */
	collection?:ModelTypes["Collection"]
};
	/** Creates/updates translations for a collection. */
["CollectionTranslate"]: {
		translationErrors:ModelTypes["TranslationError"][],
	errors:ModelTypes["TranslationError"][],
	collection?:ModelTypes["Collection"]
};
	["CollectionTranslation"]: {
		id:string,
	/** Translation language. */
	language:ModelTypes["LanguageDisplay"],
	seoTitle?:string,
	seoDescription?:string,
	name?:string,
	description?:ModelTypes["JSONString"],
	/** Translated description of the product (JSON). */
	descriptionJson?:ModelTypes["JSONString"]
};
	/** Updates a collection. */
["CollectionUpdate"]: {
		collectionErrors:ModelTypes["CollectionError"][],
	errors:ModelTypes["CollectionError"][],
	collection?:ModelTypes["Collection"]
};
	/** Stores information about a single configuration field. */
["ConfigurationItem"]: {
		/** Name of the field. */
	name:string,
	/** Current value of the field. */
	value?:string,
	/** Type of the field. */
	type?:ModelTypes["ConfigurationTypeFieldEnum"],
	/** Help text for the field. */
	helpText?:string,
	/** Label for the field. */
	label?:string
};
	["ConfigurationItemInput"]: GraphQLTypes["ConfigurationItemInput"];
	/** An enumeration. */
["ConfigurationTypeFieldEnum"]: GraphQLTypes["ConfigurationTypeFieldEnum"];
	/** Confirm user account with token sent by email during registration. */
["ConfirmAccount"]: {
		/** An activated user account. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** Confirm the email change of the logged-in user. */
["ConfirmEmailChange"]: {
		/** A user instance with a new email. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** An enumeration. */
["CountryCode"]: GraphQLTypes["CountryCode"];
	["CountryDisplay"]: {
		/** Country code. */
	code:string,
	/** Country name. */
	country:string,
	/** Country tax. */
	vat?:ModelTypes["VAT"]
};
	["CountryFilterInput"]: GraphQLTypes["CountryFilterInput"];
	/** Create JWT token. */
["CreateToken"]: {
		/** JWT token, required to authenticate. */
	token?:string,
	/** JWT refresh token, required to re-generate access token. */
	refreshToken?:string,
	/** CSRF token required to re-generate access token. */
	csrfToken?:string,
	/** A user instance. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	["CreditCard"]: {
		/** Card brand. */
	brand:string,
	/** First 4 digits of the card number. */
	firstDigits?:string,
	/** Last 4 digits of the card number. */
	lastDigits:string,
	/** Two-digit number representing the card’s expiration month. */
	expMonth?:number,
	/** Four-digit number representing the card’s expiration year. */
	expYear?:number
};
	/** Deletes customers. */
["CustomerBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** Creates a new customer. */
["CustomerCreate"]: {
		accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][],
	user?:ModelTypes["User"]
};
	/** Deletes a customer. */
["CustomerDelete"]: {
		accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][],
	user?:ModelTypes["User"]
};
	/** History log of the customer. */
["CustomerEvent"]: {
		id:string,
	/** Date when event happened at in ISO 8601 format. */
	date?:ModelTypes["DateTime"],
	/** Customer event type. */
	type?:ModelTypes["CustomerEventsEnum"],
	/** User who performed the action. */
	user?:ModelTypes["User"],
	/** App that performed the action. */
	app?:ModelTypes["App"],
	/** Content of the event. */
	message?:string,
	/** Number of objects concerned by the event. */
	count?:number,
	/** The concerned order. */
	order?:ModelTypes["Order"],
	/** The concerned order line. */
	orderLine?:ModelTypes["OrderLine"]
};
	/** An enumeration. */
["CustomerEventsEnum"]: GraphQLTypes["CustomerEventsEnum"];
	["CustomerFilterInput"]: GraphQLTypes["CustomerFilterInput"];
	["CustomerInput"]: GraphQLTypes["CustomerInput"];
	/** Updates an existing customer. */
["CustomerUpdate"]: {
		accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][],
	user?:ModelTypes["User"]
};
	/** The `Date` scalar type represents a Date
value as specified by
[iso8601](https://en.wikipedia.org/wiki/ISO_8601). */
["Date"]:any;
	["DateRangeInput"]: GraphQLTypes["DateRangeInput"];
	/** The `DateTime` scalar type represents a DateTime
value as specified by
[iso8601](https://en.wikipedia.org/wiki/ISO_8601). */
["DateTime"]:any;
	["DateTimeRangeInput"]: GraphQLTypes["DateTimeRangeInput"];
	/** Deactivate all JWT tokens of the currently authenticated user. */
["DeactivateAllUserTokens"]: {
		accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** Delete metadata of an object. */
["DeleteMetadata"]: {
		metadataErrors:ModelTypes["MetadataError"][],
	errors:ModelTypes["MetadataError"][],
	item?:ModelTypes["ObjectWithMetadata"]
};
	/** Delete object's private metadata. */
["DeletePrivateMetadata"]: {
		metadataErrors:ModelTypes["MetadataError"][],
	errors:ModelTypes["MetadataError"][],
	item?:ModelTypes["ObjectWithMetadata"]
};
	/** New in Saleor 3.1. Represents a delivery method chosen for the checkout.
`Warehouse` type is used when checkout is marked as "click and collect" and
`ShippingMethod` otherwise. Note: this feature is in a preview state and can be
subject to changes at later point. */
["DeliveryMethod"]:ModelTypes["Warehouse"] | ModelTypes["ShippingMethod"];
	["DigitalContent"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	useDefaultSettings:boolean,
	automaticFulfillment:boolean,
	contentFile:string,
	maxDownloads?:number,
	urlValidDays?:number,
	/** List of URLs for the digital variant. */
	urls?:(ModelTypes["DigitalContentUrl"] | undefined)[],
	/** Product variant assigned to digital content. */
	productVariant:ModelTypes["ProductVariant"]
};
	["DigitalContentCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["DigitalContentCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["DigitalContentCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["DigitalContent"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Create new digital content. This mutation must be sent as a `multipart` request.
More detailed specs of the upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
["DigitalContentCreate"]: {
		variant?:ModelTypes["ProductVariant"],
	content?:ModelTypes["DigitalContent"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	/** Remove digital content assigned to given variant. */
["DigitalContentDelete"]: {
		variant?:ModelTypes["ProductVariant"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	["DigitalContentInput"]: GraphQLTypes["DigitalContentInput"];
	/** Update digital content. */
["DigitalContentUpdate"]: {
		variant?:ModelTypes["ProductVariant"],
	content?:ModelTypes["DigitalContent"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	["DigitalContentUploadInput"]: GraphQLTypes["DigitalContentUploadInput"];
	["DigitalContentUrl"]: {
		id:string,
	content:ModelTypes["DigitalContent"],
	created:ModelTypes["DateTime"],
	downloadNum:number,
	/** URL for digital content. */
	url?:string,
	/** UUID of digital content. */
	token:ModelTypes["UUID"]
};
	/** Generate new URL to digital content. */
["DigitalContentUrlCreate"]: {
		productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][],
	digitalContentUrl?:ModelTypes["DigitalContentUrl"]
};
	["DigitalContentUrlCreateInput"]: GraphQLTypes["DigitalContentUrlCreateInput"];
	["DiscountError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** List of products IDs which causes the error. */
	products?:string[],
	/** The error code. */
	code:ModelTypes["DiscountErrorCode"],
	/** List of channels IDs which causes the error. */
	channels?:string[]
};
	/** An enumeration. */
["DiscountErrorCode"]: GraphQLTypes["DiscountErrorCode"];
	["DiscountStatusEnum"]: GraphQLTypes["DiscountStatusEnum"];
	["DiscountValueTypeEnum"]: GraphQLTypes["DiscountValueTypeEnum"];
	/** An enumeration. */
["DistanceUnitsEnum"]: GraphQLTypes["DistanceUnitsEnum"];
	/** Represents shop's domain. */
["Domain"]: {
		/** The host name of the domain. */
	host:string,
	/** Inform if SSL is enabled. */
	sslEnabled:boolean,
	/** Shop's absolute URL. */
	url:string
};
	/** Deletes draft orders. */
["DraftOrderBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	/** Completes creating an order. */
["DraftOrderComplete"]: {
		/** Completed order. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	/** Creates a new draft order. */
["DraftOrderCreate"]: {
		orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][],
	order?:ModelTypes["Order"]
};
	["DraftOrderCreateInput"]: GraphQLTypes["DraftOrderCreateInput"];
	/** Deletes a draft order. */
["DraftOrderDelete"]: {
		orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][],
	order?:ModelTypes["Order"]
};
	["DraftOrderInput"]: GraphQLTypes["DraftOrderInput"];
	/** Deletes order lines. */
["DraftOrderLinesBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	/** Updates a draft order. */
["DraftOrderUpdate"]: {
		orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][],
	order?:ModelTypes["Order"]
};
	/** Event delivery. */
["EventDelivery"]: {
		id:string,
	createdAt:ModelTypes["DateTime"],
	/** Event delivery status. */
	status:ModelTypes["EventDeliveryStatusEnum"],
	/** Webhook event type. */
	eventType:ModelTypes["WebhookEventTypeEnum"],
	/** Event delivery attempts. */
	attempts?:ModelTypes["EventDeliveryAttemptCountableConnection"],
	/** Event payload. */
	payload?:string
};
	/** Event delivery attempts. */
["EventDeliveryAttempt"]: {
		id:string,
	/** Event delivery creation date and time. */
	createdAt:ModelTypes["DateTime"],
	taskId?:string,
	duration?:number,
	response?:string,
	responseHeaders?:string,
	requestHeaders?:string,
	/** Event delivery status. */
	status:ModelTypes["EventDeliveryStatusEnum"]
};
	["EventDeliveryAttemptCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["EventDeliveryAttemptCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["EventDeliveryAttemptCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["EventDeliveryAttempt"],
	/** A cursor for use in pagination. */
	cursor:string
};
	["EventDeliveryAttemptSortField"]: GraphQLTypes["EventDeliveryAttemptSortField"];
	["EventDeliveryAttemptSortingInput"]: GraphQLTypes["EventDeliveryAttemptSortingInput"];
	["EventDeliveryCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["EventDeliveryCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["EventDeliveryCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["EventDelivery"],
	/** A cursor for use in pagination. */
	cursor:string
};
	["EventDeliveryFilterInput"]: GraphQLTypes["EventDeliveryFilterInput"];
	/** Retries event delivery. */
["EventDeliveryRetry"]: {
		/** Event delivery. */
	delivery?:ModelTypes["EventDelivery"],
	errors:ModelTypes["WebhookError"][]
};
	["EventDeliverySortField"]: GraphQLTypes["EventDeliverySortField"];
	["EventDeliverySortingInput"]: GraphQLTypes["EventDeliverySortingInput"];
	["EventDeliveryStatusEnum"]: GraphQLTypes["EventDeliveryStatusEnum"];
	["ExportError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["ExportErrorCode"]
};
	/** An enumeration. */
["ExportErrorCode"]: GraphQLTypes["ExportErrorCode"];
	/** History log of export file. */
["ExportEvent"]: {
		/** The ID of the object. */
	id:string,
	/** Date when event happened at in ISO 8601 format. */
	date:ModelTypes["DateTime"],
	/** Export event type. */
	type:ModelTypes["ExportEventsEnum"],
	/** User who performed the action. */
	user?:ModelTypes["User"],
	/** App which performed the action. */
	app?:ModelTypes["App"],
	/** Content of the event. */
	message:string
};
	/** An enumeration. */
["ExportEventsEnum"]: GraphQLTypes["ExportEventsEnum"];
	/** Represents a job data of exported file. */
["ExportFile"]: {
		id:string,
	/** Job status. */
	status:ModelTypes["JobStatusEnum"],
	/** Created date time of job in ISO 8601 format. */
	createdAt:ModelTypes["DateTime"],
	/** Date time of job last update in ISO 8601 format. */
	updatedAt:ModelTypes["DateTime"],
	/** Job message. */
	message?:string,
	/** The URL of field to download. */
	url?:string,
	/** List of events associated with the export. */
	events?:ModelTypes["ExportEvent"][],
	user?:ModelTypes["User"],
	app?:ModelTypes["App"]
};
	["ExportFileCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["ExportFileCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["ExportFileCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["ExportFile"],
	/** A cursor for use in pagination. */
	cursor:string
};
	["ExportFileFilterInput"]: GraphQLTypes["ExportFileFilterInput"];
	["ExportFileSortField"]: GraphQLTypes["ExportFileSortField"];
	["ExportFileSortingInput"]: GraphQLTypes["ExportFileSortingInput"];
	/** New in Saleor 3.1. Export gift cards to csv file. Note: this feature is in a
preview state and can be subject to changes at later point. */
["ExportGiftCards"]: {
		/** The newly created export file job which is responsible for export data. */
	exportFile?:ModelTypes["ExportFile"],
	errors:ModelTypes["ExportError"][]
};
	["ExportGiftCardsInput"]: GraphQLTypes["ExportGiftCardsInput"];
	["ExportInfoInput"]: GraphQLTypes["ExportInfoInput"];
	/** Export products to csv file. */
["ExportProducts"]: {
		/** The newly created export file job which is responsible for export data. */
	exportFile?:ModelTypes["ExportFile"],
	exportErrors:ModelTypes["ExportError"][],
	errors:ModelTypes["ExportError"][]
};
	["ExportProductsInput"]: GraphQLTypes["ExportProductsInput"];
	["ExportScope"]: GraphQLTypes["ExportScope"];
	["ExternalAuthentication"]: {
		/** ID of external authentication plugin. */
	id:string,
	/** Name of external authentication plugin. */
	name?:string
};
	/** Prepare external authentication url for user by custom plugin. */
["ExternalAuthenticationUrl"]: {
		/** The data returned by authentication plugin. */
	authenticationData?:ModelTypes["JSONString"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** Logout user by custom plugin. */
["ExternalLogout"]: {
		/** The data returned by authentication plugin. */
	logoutData?:ModelTypes["JSONString"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	["ExternalNotificationError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["ExternalNotificationErrorCodes"]
};
	/** An enumeration. */
["ExternalNotificationErrorCodes"]: GraphQLTypes["ExternalNotificationErrorCodes"];
	/** New in Saleor 3.1. Trigger sending a notification with the notify plugin method.
Serializes nodes provided as ids parameter and includes this data in the
notification payload. */
["ExternalNotificationTrigger"]: {
		errors:ModelTypes["ExternalNotificationError"][]
};
	["ExternalNotificationTriggerInput"]: GraphQLTypes["ExternalNotificationTriggerInput"];
	/** Obtain external access tokens for user by custom plugin. */
["ExternalObtainAccessTokens"]: {
		/** The token, required to authenticate. */
	token?:string,
	/** The refresh token, required to re-generate external access token. */
	refreshToken?:string,
	/** CSRF token required to re-generate external access token. */
	csrfToken?:string,
	/** A user instance. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** Refresh user's access by custom plugin. */
["ExternalRefresh"]: {
		/** The token, required to authenticate. */
	token?:string,
	/** The refresh token, required to re-generate external access token. */
	refreshToken?:string,
	/** CSRF token required to re-generate external access token. */
	csrfToken?:string,
	/** A user instance. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** Verify external authentication data by plugin. */
["ExternalVerify"]: {
		/** User assigned to data. */
	user?:ModelTypes["User"],
	/** Determine if authentication data is valid or not. */
	isValid:boolean,
	/** External data. */
	verifyData?:ModelTypes["JSONString"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	["File"]: {
		/** The URL of the file. */
	url:string,
	/** Content type of the file. */
	contentType?:string
};
	/** An enumeration. */
["FileTypesEnum"]: GraphQLTypes["FileTypesEnum"];
	/** Upload a file. This mutation must be sent as a `multipart` request. More
detailed specs of the upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
["FileUpload"]: {
		uploadedFile?:ModelTypes["File"],
	uploadErrors:ModelTypes["UploadError"][],
	errors:ModelTypes["UploadError"][]
};
	/** Represents order fulfillment. */
["Fulfillment"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	fulfillmentOrder:number,
	status:ModelTypes["FulfillmentStatus"],
	trackingNumber:string,
	created:ModelTypes["DateTime"],
	/** List of lines for the fulfillment. */
	lines?:(ModelTypes["FulfillmentLine"] | undefined)[],
	/** User-friendly fulfillment status. */
	statusDisplay?:string,
	/** Warehouse from fulfillment was fulfilled. */
	warehouse?:ModelTypes["Warehouse"]
};
	/** New in Saleor 3.1. Approve existing fulfillment. */
["FulfillmentApprove"]: {
		/** An approved fulfillment. */
	fulfillment?:ModelTypes["Fulfillment"],
	/** Order which fulfillment was approved. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	/** Cancels existing fulfillment and optionally restocks items. */
["FulfillmentCancel"]: {
		/** A canceled fulfillment. */
	fulfillment?:ModelTypes["Fulfillment"],
	/** Order which fulfillment was cancelled. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	["FulfillmentCancelInput"]: GraphQLTypes["FulfillmentCancelInput"];
	/** Represents line of the fulfillment. */
["FulfillmentLine"]: {
		id:string,
	quantity:number,
	orderLine?:ModelTypes["OrderLine"]
};
	/** Refund products. */
["FulfillmentRefundProducts"]: {
		/** A refunded fulfillment. */
	fulfillment?:ModelTypes["Fulfillment"],
	/** Order which fulfillment was refunded. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	/** Return products. */
["FulfillmentReturnProducts"]: {
		/** A return fulfillment. */
	returnFulfillment?:ModelTypes["Fulfillment"],
	/** A replace fulfillment. */
	replaceFulfillment?:ModelTypes["Fulfillment"],
	/** Order which fulfillment was returned. */
	order?:ModelTypes["Order"],
	/** A draft order which was created for products with replace flag. */
	replaceOrder?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	/** An enumeration. */
["FulfillmentStatus"]: GraphQLTypes["FulfillmentStatus"];
	/** Updates a fulfillment for an order. */
["FulfillmentUpdateTracking"]: {
		/** A fulfillment with updated tracking. */
	fulfillment?:ModelTypes["Fulfillment"],
	/** Order for which fulfillment was updated. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	["FulfillmentUpdateTrackingInput"]: GraphQLTypes["FulfillmentUpdateTrackingInput"];
	/** Payment gateway client configuration key and value pair. */
["GatewayConfigLine"]: {
		/** Gateway config key. */
	field:string,
	/** Gateway config value for key. */
	value?:string
};
	/** The `GenericScalar` scalar type represents a generic
GraphQL scalar value that could be:
String, Boolean, Int, Float, List or Object. */
["GenericScalar"]:any;
	/** A gift card is a prepaid electronic payment card accepted in stores. They can be
used during checkout by providing a valid gift card codes. */
["GiftCard"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	/** Code in format which allows displaying in a user interface. */
	displayCode:string,
	/** Last 4 characters of gift card code. */
	last4CodeChars:string,
	/** Gift card code. Can be fetched by staff member with manage gift card
permission when gift card wasn't used yet and by the gift card owner. */
	code:string,
	created:ModelTypes["DateTime"],
	/** New in Saleor 3.1. The user who bought or issued a gift card. Note: this
feature is in a preview state and can be subject to changes at later point. */
	createdBy?:ModelTypes["User"],
	/** New in Saleor 3.1. The customer who used a gift card. Note: this feature is in
a preview state and can be subject to changes at later point. */
	usedBy?:ModelTypes["User"],
	/** New in Saleor 3.1. Email address of the user who bought or issued gift card.
Note: this feature is in a preview state and can be subject to changes at later point. */
	createdByEmail?:string,
	/** New in Saleor 3.1. Email address of the customer who used a gift card. Note:
this feature is in a preview state and can be subject to changes at later point. */
	usedByEmail?:string,
	lastUsedOn?:ModelTypes["DateTime"],
	expiryDate?:ModelTypes["Date"],
	/** New in Saleor 3.1. App which created the gift card. Note: this feature is in a
preview state and can be subject to changes at later point. */
	app?:ModelTypes["App"],
	/** New in Saleor 3.1. Related gift card product. Note: this feature is in a
preview state and can be subject to changes at later point. */
	product?:ModelTypes["Product"],
	/** New in Saleor 3.1. List of events associated with the gift card. Note: this
feature is in a preview state and can be subject to changes at later point. */
	events:ModelTypes["GiftCardEvent"][],
	/** New in Saleor 3.1. The gift card tag. Note: this feature is in a preview state
and can be subject to changes at later point. */
	tags:ModelTypes["GiftCardTag"][],
	/** New in Saleor 3.1. Slug of the channel where the gift card was bought. Note:
this feature is in a preview state and can be subject to changes at later point. */
	boughtInChannel?:string,
	isActive:boolean,
	initialBalance?:ModelTypes["Money"],
	currentBalance?:ModelTypes["Money"],
	/** The customer who bought a gift card. */
	user?:ModelTypes["User"],
	/** End date of gift card. */
	endDate?:ModelTypes["DateTime"],
	/** Start date of gift card. */
	startDate?:ModelTypes["DateTime"]
};
	/** Activate a gift card. */
["GiftCardActivate"]: {
		/** Activated gift card. */
	giftCard?:ModelTypes["GiftCard"],
	giftCardErrors:ModelTypes["GiftCardError"][],
	errors:ModelTypes["GiftCardError"][]
};
	/** New in Saleor 3.1. Adds note to the gift card. Note: this feature is in a
preview state and can be subject to changes at later point. */
["GiftCardAddNote"]: {
		/** Gift card with the note added. */
	giftCard?:ModelTypes["GiftCard"],
	/** Gift card note created. */
	event?:ModelTypes["GiftCardEvent"],
	errors:ModelTypes["GiftCardError"][]
};
	["GiftCardAddNoteInput"]: GraphQLTypes["GiftCardAddNoteInput"];
	/** New in Saleor 3.1. Activate gift cards. Note: this feature is in a preview state
and can be subject to changes at later point. */
["GiftCardBulkActivate"]: {
		/** Returns how many objects were affected. */
	count:number,
	errors:ModelTypes["GiftCardError"][]
};
	/** New in Saleor 3.1. Create gift cards. Note: this feature is in a preview state and can be subject to changes at later point. */
["GiftCardBulkCreate"]: {
		/** Returns how many objects were created. */
	count:number,
	/** List of created gift cards. */
	giftCards:ModelTypes["GiftCard"][],
	errors:ModelTypes["GiftCardError"][]
};
	["GiftCardBulkCreateInput"]: GraphQLTypes["GiftCardBulkCreateInput"];
	/** New in Saleor 3.1. Deactivate gift cards. Note: this feature is in a preview
state and can be subject to changes at later point. */
["GiftCardBulkDeactivate"]: {
		/** Returns how many objects were affected. */
	count:number,
	errors:ModelTypes["GiftCardError"][]
};
	/** New in Saleor 3.1. Delete gift cards. Note: this feature is in a preview state and can be subject to changes at later point. */
["GiftCardBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	errors:ModelTypes["GiftCardError"][]
};
	["GiftCardCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["GiftCardCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["GiftCardCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["GiftCard"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates a new gift card. */
["GiftCardCreate"]: {
		giftCardErrors:ModelTypes["GiftCardError"][],
	errors:ModelTypes["GiftCardError"][],
	giftCard?:ModelTypes["GiftCard"]
};
	["GiftCardCreateInput"]: GraphQLTypes["GiftCardCreateInput"];
	/** Deactivate a gift card. */
["GiftCardDeactivate"]: {
		/** Deactivated gift card. */
	giftCard?:ModelTypes["GiftCard"],
	giftCardErrors:ModelTypes["GiftCardError"][],
	errors:ModelTypes["GiftCardError"][]
};
	/** New in Saleor 3.1. Delete gift card. Note: this feature is in a preview state and can be subject to changes at later point. */
["GiftCardDelete"]: {
		giftCardErrors:ModelTypes["GiftCardError"][],
	errors:ModelTypes["GiftCardError"][],
	giftCard?:ModelTypes["GiftCard"]
};
	["GiftCardError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["GiftCardErrorCode"],
	/** List of tag values that cause the error. */
	tags?:string[]
};
	/** An enumeration. */
["GiftCardErrorCode"]: GraphQLTypes["GiftCardErrorCode"];
	/** New in Saleor 3.1. History log of the gift card. Note: this feature is in a
preview state and can be subject to changes at later point. */
["GiftCardEvent"]: {
		id:string,
	/** Date when event happened at in ISO 8601 format. */
	date?:ModelTypes["DateTime"],
	/** Gift card event type. */
	type?:ModelTypes["GiftCardEventsEnum"],
	/** User who performed the action. */
	user?:ModelTypes["User"],
	/** App that performed the action. */
	app?:ModelTypes["App"],
	/** Content of the event. */
	message?:string,
	/** Email of the customer. */
	email?:string,
	/** The order ID where gift card was used or bought. */
	orderId?:string,
	/** User-friendly number of an order where gift card was used or bought. */
	orderNumber?:string,
	/** The list of gift card tags. */
	tags?:string[],
	/** The list of old gift card tags. */
	oldTags?:string[],
	/** The gift card balance. */
	balance?:ModelTypes["GiftCardEventBalance"],
	/** The gift card expiry date. */
	expiryDate?:ModelTypes["Date"],
	/** Previous gift card expiry date. */
	oldExpiryDate?:ModelTypes["Date"]
};
	["GiftCardEventBalance"]: {
		/** Initial balance of the gift card. */
	initialBalance?:ModelTypes["Money"],
	/** Current balance of the gift card. */
	currentBalance:ModelTypes["Money"],
	/** Previous initial balance of the gift card. */
	oldInitialBalance?:ModelTypes["Money"],
	/** Previous current balance of the gift card. */
	oldCurrentBalance?:ModelTypes["Money"]
};
	["GiftCardEventFilterInput"]: GraphQLTypes["GiftCardEventFilterInput"];
	/** An enumeration. */
["GiftCardEventsEnum"]: GraphQLTypes["GiftCardEventsEnum"];
	["GiftCardFilterInput"]: GraphQLTypes["GiftCardFilterInput"];
	/** New in Saleor 3.1. Resend a gift card. Note: this feature is in a preview state
and can be subject to changes at later point. */
["GiftCardResend"]: {
		/** Gift card which has been sent. */
	giftCard?:ModelTypes["GiftCard"],
	errors:ModelTypes["GiftCardError"][]
};
	["GiftCardResendInput"]: GraphQLTypes["GiftCardResendInput"];
	/** Gift card related settings from site settings. */
["GiftCardSettings"]: {
		/** The gift card expiry type settings. */
	expiryType:ModelTypes["GiftCardSettingsExpiryTypeEnum"],
	/** The gift card expiry period settings. */
	expiryPeriod?:ModelTypes["TimePeriod"]
};
	["GiftCardSettingsError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["GiftCardSettingsErrorCode"]
};
	/** An enumeration. */
["GiftCardSettingsErrorCode"]: GraphQLTypes["GiftCardSettingsErrorCode"];
	/** An enumeration. */
["GiftCardSettingsExpiryTypeEnum"]: GraphQLTypes["GiftCardSettingsExpiryTypeEnum"];
	/** Update gift card settings. */
["GiftCardSettingsUpdate"]: {
		/** Gift card settings. */
	giftCardSettings?:ModelTypes["GiftCardSettings"],
	errors:ModelTypes["GiftCardSettingsError"][]
};
	["GiftCardSettingsUpdateInput"]: GraphQLTypes["GiftCardSettingsUpdateInput"];
	["GiftCardSortField"]: GraphQLTypes["GiftCardSortField"];
	["GiftCardSortingInput"]: GraphQLTypes["GiftCardSortingInput"];
	/** New in Saleor 3.1. The gift card tag. Note: this feature is in a preview state and can be subject to changes at later point. */
["GiftCardTag"]: {
		id:string,
	name:string
};
	["GiftCardTagCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["GiftCardTagCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["GiftCardTagCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["GiftCardTag"],
	/** A cursor for use in pagination. */
	cursor:string
};
	["GiftCardTagFilterInput"]: GraphQLTypes["GiftCardTagFilterInput"];
	/** Update a gift card. */
["GiftCardUpdate"]: {
		giftCardErrors:ModelTypes["GiftCardError"][],
	errors:ModelTypes["GiftCardError"][],
	giftCard?:ModelTypes["GiftCard"]
};
	["GiftCardUpdateInput"]: GraphQLTypes["GiftCardUpdateInput"];
	/** Represents permission group data. */
["Group"]: {
		id:string,
	name:string,
	/** List of group users */
	users?:(ModelTypes["User"] | undefined)[],
	/** List of group permissions */
	permissions?:(ModelTypes["Permission"] | undefined)[],
	/** True, if the currently authenticated user has rights to manage a group. */
	userCanManage:boolean
};
	["GroupCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["GroupCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["GroupCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["Group"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Represents an image. */
["Image"]: {
		/** The URL of the image. */
	url:string,
	/** Alt text for an image. */
	alt?:string
};
	["IntRangeInput"]: GraphQLTypes["IntRangeInput"];
	/** Represents an Invoice. */
["Invoice"]: {
		/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	/** Job status. */
	status:ModelTypes["JobStatusEnum"],
	createdAt:ModelTypes["DateTime"],
	updatedAt:ModelTypes["DateTime"],
	message?:string,
	/** The ID of the object. */
	id:string,
	number?:string,
	externalUrl?:string,
	/** URL to download an invoice. */
	url?:string
};
	/** Creates a ready to send invoice. */
["InvoiceCreate"]: {
		invoiceErrors:ModelTypes["InvoiceError"][],
	errors:ModelTypes["InvoiceError"][],
	invoice?:ModelTypes["Invoice"]
};
	["InvoiceCreateInput"]: GraphQLTypes["InvoiceCreateInput"];
	/** Deletes an invoice. */
["InvoiceDelete"]: {
		invoiceErrors:ModelTypes["InvoiceError"][],
	errors:ModelTypes["InvoiceError"][],
	invoice?:ModelTypes["Invoice"]
};
	["InvoiceError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["InvoiceErrorCode"]
};
	/** An enumeration. */
["InvoiceErrorCode"]: GraphQLTypes["InvoiceErrorCode"];
	/** Request an invoice for the order using plugin. */
["InvoiceRequest"]: {
		/** Order related to an invoice. */
	order?:ModelTypes["Order"],
	invoiceErrors:ModelTypes["InvoiceError"][],
	errors:ModelTypes["InvoiceError"][],
	invoice?:ModelTypes["Invoice"]
};
	/** Requests deletion of an invoice. */
["InvoiceRequestDelete"]: {
		invoiceErrors:ModelTypes["InvoiceError"][],
	errors:ModelTypes["InvoiceError"][],
	invoice?:ModelTypes["Invoice"]
};
	/** Send an invoice notification to the customer. */
["InvoiceSendNotification"]: {
		invoiceErrors:ModelTypes["InvoiceError"][],
	errors:ModelTypes["InvoiceError"][],
	invoice?:ModelTypes["Invoice"]
};
	/** Updates an invoice. */
["InvoiceUpdate"]: {
		invoiceErrors:ModelTypes["InvoiceError"][],
	errors:ModelTypes["InvoiceError"][],
	invoice?:ModelTypes["Invoice"]
};
	["Job"]: ModelTypes["AppInstallation"] | ModelTypes["ExportFile"] | ModelTypes["Invoice"];
	/** An enumeration. */
["JobStatusEnum"]: GraphQLTypes["JobStatusEnum"];
	["JSONString"]:any;
	/** An enumeration. */
["LanguageCodeEnum"]: GraphQLTypes["LanguageCodeEnum"];
	["LanguageDisplay"]: {
		/** ISO 639 representation of the language name. */
	code:ModelTypes["LanguageCodeEnum"],
	/** Full name of the language. */
	language:string
};
	["LimitInfo"]: {
		/** Defines the current resource usage. */
	currentUsage:ModelTypes["Limits"],
	/** Defines the allowed maximum resource usage, null means unlimited. */
	allowedUsage:ModelTypes["Limits"]
};
	["Limits"]: {
		channels?:number,
	orders?:number,
	productVariants?:number,
	staffUsers?:number,
	warehouses?:number
};
	/** The manifest definition. */
["Manifest"]: {
		identifier:string,
	version:string,
	name:string,
	about?:string,
	permissions?:(ModelTypes["Permission"] | undefined)[],
	appUrl?:string,
	configurationUrl?:string,
	tokenTargetUrl?:string,
	dataPrivacy?:string,
	dataPrivacyUrl?:string,
	homepageUrl?:string,
	supportUrl?:string,
	extensions:ModelTypes["AppManifestExtension"][]
};
	["Margin"]: {
		start?:number,
	stop?:number
};
	/** An enumeration. */
["MeasurementUnitsEnum"]: GraphQLTypes["MeasurementUnitsEnum"];
	/** Represents a single menu - an object that is used to help navigate through the store. */
["Menu"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	name:string,
	slug:string,
	items?:(ModelTypes["MenuItem"] | undefined)[]
};
	/** Deletes menus. */
["MenuBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	menuErrors:ModelTypes["MenuError"][],
	errors:ModelTypes["MenuError"][]
};
	["MenuCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["MenuCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["MenuCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["Menu"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates a new Menu. */
["MenuCreate"]: {
		menuErrors:ModelTypes["MenuError"][],
	errors:ModelTypes["MenuError"][],
	menu?:ModelTypes["Menu"]
};
	["MenuCreateInput"]: GraphQLTypes["MenuCreateInput"];
	/** Deletes a menu. */
["MenuDelete"]: {
		menuErrors:ModelTypes["MenuError"][],
	errors:ModelTypes["MenuError"][],
	menu?:ModelTypes["Menu"]
};
	["MenuError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["MenuErrorCode"]
};
	/** An enumeration. */
["MenuErrorCode"]: GraphQLTypes["MenuErrorCode"];
	["MenuFilterInput"]: GraphQLTypes["MenuFilterInput"];
	["MenuInput"]: GraphQLTypes["MenuInput"];
	/** Represents a single item of the related menu. Can store categories, collection or pages. */
["MenuItem"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	name:string,
	menu:ModelTypes["Menu"],
	parent?:ModelTypes["MenuItem"],
	category?:ModelTypes["Category"],
	collection?:ModelTypes["Collection"],
	page?:ModelTypes["Page"],
	level:number,
	children?:(ModelTypes["MenuItem"] | undefined)[],
	/** URL to the menu item. */
	url?:string,
	/** Returns translated menu item fields for the given language code. */
	translation?:ModelTypes["MenuItemTranslation"]
};
	/** Deletes menu items. */
["MenuItemBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	menuErrors:ModelTypes["MenuError"][],
	errors:ModelTypes["MenuError"][]
};
	["MenuItemCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["MenuItemCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["MenuItemCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["MenuItem"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates a new menu item. */
["MenuItemCreate"]: {
		menuErrors:ModelTypes["MenuError"][],
	errors:ModelTypes["MenuError"][],
	menuItem?:ModelTypes["MenuItem"]
};
	["MenuItemCreateInput"]: GraphQLTypes["MenuItemCreateInput"];
	/** Deletes a menu item. */
["MenuItemDelete"]: {
		menuErrors:ModelTypes["MenuError"][],
	errors:ModelTypes["MenuError"][],
	menuItem?:ModelTypes["MenuItem"]
};
	["MenuItemFilterInput"]: GraphQLTypes["MenuItemFilterInput"];
	["MenuItemInput"]: GraphQLTypes["MenuItemInput"];
	/** Moves items of menus. */
["MenuItemMove"]: {
		/** Assigned menu to move within. */
	menu?:ModelTypes["Menu"],
	menuErrors:ModelTypes["MenuError"][],
	errors:ModelTypes["MenuError"][]
};
	["MenuItemMoveInput"]: GraphQLTypes["MenuItemMoveInput"];
	["MenuItemSortingInput"]: GraphQLTypes["MenuItemSortingInput"];
	["MenuItemsSortField"]: GraphQLTypes["MenuItemsSortField"];
	["MenuItemTranslatableContent"]: {
		id:string,
	name:string,
	/** Returns translated menu item fields for the given language code. */
	translation?:ModelTypes["MenuItemTranslation"],
	/** Represents a single item of the related menu. Can store categories, collection or pages. */
	menuItem?:ModelTypes["MenuItem"]
};
	/** Creates/updates translations for a menu item. */
["MenuItemTranslate"]: {
		translationErrors:ModelTypes["TranslationError"][],
	errors:ModelTypes["TranslationError"][],
	menuItem?:ModelTypes["MenuItem"]
};
	["MenuItemTranslation"]: {
		id:string,
	/** Translation language. */
	language:ModelTypes["LanguageDisplay"],
	name:string
};
	/** Updates a menu item. */
["MenuItemUpdate"]: {
		menuErrors:ModelTypes["MenuError"][],
	errors:ModelTypes["MenuError"][],
	menuItem?:ModelTypes["MenuItem"]
};
	["MenuSortField"]: GraphQLTypes["MenuSortField"];
	["MenuSortingInput"]: GraphQLTypes["MenuSortingInput"];
	/** Updates a menu. */
["MenuUpdate"]: {
		menuErrors:ModelTypes["MenuError"][],
	errors:ModelTypes["MenuError"][],
	menu?:ModelTypes["Menu"]
};
	["MetadataError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["MetadataErrorCode"]
};
	/** An enumeration. */
["MetadataErrorCode"]: GraphQLTypes["MetadataErrorCode"];
	["MetadataFilter"]: GraphQLTypes["MetadataFilter"];
	["MetadataInput"]: GraphQLTypes["MetadataInput"];
	["MetadataItem"]: {
		/** Key of a metadata item. */
	key:string,
	/** Value of a metadata item. */
	value:string
};
	/** Represents amount of money in specific currency. */
["Money"]: {
		/** Currency code. */
	currency:string,
	/** Amount of money. */
	amount:number
};
	["MoneyInput"]: GraphQLTypes["MoneyInput"];
	/** Represents a range of amounts of money. */
["MoneyRange"]: {
		/** Lower bound of a price range. */
	start?:ModelTypes["Money"],
	/** Upper bound of a price range. */
	stop?:ModelTypes["Money"]
};
	["MoveProductInput"]: GraphQLTypes["MoveProductInput"];
	["Mutation"]: {
		/** Creates a new webhook subscription. */
	webhookCreate?:ModelTypes["WebhookCreate"],
	/** Deletes a webhook subscription. */
	webhookDelete?:ModelTypes["WebhookDelete"],
	/** Updates a webhook subscription. */
	webhookUpdate?:ModelTypes["WebhookUpdate"],
	/** Retries event delivery. */
	eventDeliveryRetry?:ModelTypes["EventDeliveryRetry"],
	/** Creates new warehouse. */
	createWarehouse?:ModelTypes["WarehouseCreate"],
	/** Updates given warehouse. */
	updateWarehouse?:ModelTypes["WarehouseUpdate"],
	/** Deletes selected warehouse. */
	deleteWarehouse?:ModelTypes["WarehouseDelete"],
	/** Add shipping zone to given warehouse. */
	assignWarehouseShippingZone?:ModelTypes["WarehouseShippingZoneAssign"],
	/** Remove shipping zone from given warehouse. */
	unassignWarehouseShippingZone?:ModelTypes["WarehouseShippingZoneUnassign"],
	/** Creates a new staff notification recipient. */
	staffNotificationRecipientCreate?:ModelTypes["StaffNotificationRecipientCreate"],
	/** Updates a staff notification recipient. */
	staffNotificationRecipientUpdate?:ModelTypes["StaffNotificationRecipientUpdate"],
	/** Delete staff notification recipient. */
	staffNotificationRecipientDelete?:ModelTypes["StaffNotificationRecipientDelete"],
	/** Updates site domain of the shop. */
	shopDomainUpdate?:ModelTypes["ShopDomainUpdate"],
	/** Updates shop settings. */
	shopSettingsUpdate?:ModelTypes["ShopSettingsUpdate"],
	/** Fetch tax rates. */
	shopFetchTaxRates?:ModelTypes["ShopFetchTaxRates"],
	/** Creates/updates translations for shop settings. */
	shopSettingsTranslate?:ModelTypes["ShopSettingsTranslate"],
	/** Update the shop's address. If the `null` value is passed, the currently selected address will be deleted. */
	shopAddressUpdate?:ModelTypes["ShopAddressUpdate"],
	/** Update shop order settings. */
	orderSettingsUpdate?:ModelTypes["OrderSettingsUpdate"],
	/** Update gift card settings. */
	giftCardSettingsUpdate?:ModelTypes["GiftCardSettingsUpdate"],
	/** Manage shipping method's availability in channels. */
	shippingMethodChannelListingUpdate?:ModelTypes["ShippingMethodChannelListingUpdate"],
	/** Creates a new shipping price. */
	shippingPriceCreate?:ModelTypes["ShippingPriceCreate"],
	/** Deletes a shipping price. */
	shippingPriceDelete?:ModelTypes["ShippingPriceDelete"],
	/** Deletes shipping prices. */
	shippingPriceBulkDelete?:ModelTypes["ShippingPriceBulkDelete"],
	/** Updates a new shipping price. */
	shippingPriceUpdate?:ModelTypes["ShippingPriceUpdate"],
	/** Creates/updates translations for a shipping method. */
	shippingPriceTranslate?:ModelTypes["ShippingPriceTranslate"],
	/** Exclude products from shipping price. */
	shippingPriceExcludeProducts?:ModelTypes["ShippingPriceExcludeProducts"],
	/** Remove product from excluded list for shipping price. */
	shippingPriceRemoveProductFromExclude?:ModelTypes["ShippingPriceRemoveProductFromExclude"],
	/** Creates a new shipping zone. */
	shippingZoneCreate?:ModelTypes["ShippingZoneCreate"],
	/** Deletes a shipping zone. */
	shippingZoneDelete?:ModelTypes["ShippingZoneDelete"],
	/** Deletes shipping zones. */
	shippingZoneBulkDelete?:ModelTypes["ShippingZoneBulkDelete"],
	/** Updates a new shipping zone. */
	shippingZoneUpdate?:ModelTypes["ShippingZoneUpdate"],
	/** Assign attributes to a given product type. */
	productAttributeAssign?:ModelTypes["ProductAttributeAssign"],
	/** New in Saleor 3.1. Update attributes assigned to product variant for given product type. */
	productAttributeAssignmentUpdate?:ModelTypes["ProductAttributeAssignmentUpdate"],
	/** Un-assign attributes from a given product type. */
	productAttributeUnassign?:ModelTypes["ProductAttributeUnassign"],
	/** Creates a new category. */
	categoryCreate?:ModelTypes["CategoryCreate"],
	/** Deletes a category. */
	categoryDelete?:ModelTypes["CategoryDelete"],
	/** Deletes categories. */
	categoryBulkDelete?:ModelTypes["CategoryBulkDelete"],
	/** Updates a category. */
	categoryUpdate?:ModelTypes["CategoryUpdate"],
	/** Creates/updates translations for a category. */
	categoryTranslate?:ModelTypes["CategoryTranslate"],
	/** Adds products to a collection. */
	collectionAddProducts?:ModelTypes["CollectionAddProducts"],
	/** Creates a new collection. */
	collectionCreate?:ModelTypes["CollectionCreate"],
	/** Deletes a collection. */
	collectionDelete?:ModelTypes["CollectionDelete"],
	/** Reorder the products of a collection. */
	collectionReorderProducts?:ModelTypes["CollectionReorderProducts"],
	/** Deletes collections. */
	collectionBulkDelete?:ModelTypes["CollectionBulkDelete"],
	/** Remove products from a collection. */
	collectionRemoveProducts?:ModelTypes["CollectionRemoveProducts"],
	/** Updates a collection. */
	collectionUpdate?:ModelTypes["CollectionUpdate"],
	/** Creates/updates translations for a collection. */
	collectionTranslate?:ModelTypes["CollectionTranslate"],
	/** Manage collection's availability in channels. */
	collectionChannelListingUpdate?:ModelTypes["CollectionChannelListingUpdate"],
	/** Creates a new product. */
	productCreate?:ModelTypes["ProductCreate"],
	/** Deletes a product. */
	productDelete?:ModelTypes["ProductDelete"],
	/** Deletes products. */
	productBulkDelete?:ModelTypes["ProductBulkDelete"],
	/** Updates an existing product. */
	productUpdate?:ModelTypes["ProductUpdate"],
	/** Creates/updates translations for a product. */
	productTranslate?:ModelTypes["ProductTranslate"],
	/** Manage product's availability in channels. */
	productChannelListingUpdate?:ModelTypes["ProductChannelListingUpdate"],
	/** Create a media object (image or video URL) associated with product. For image,
this mutation must be sent as a `multipart` request. More detailed specs of
the upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
	productMediaCreate?:ModelTypes["ProductMediaCreate"],
	/** Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook. */
	productVariantReorder?:ModelTypes["ProductVariantReorder"],
	/** Deletes a product media. */
	productMediaDelete?:ModelTypes["ProductMediaDelete"],
	/** Deletes product media. */
	productMediaBulkDelete?:ModelTypes["ProductMediaBulkDelete"],
	/** Changes ordering of the product media. */
	productMediaReorder?:ModelTypes["ProductMediaReorder"],
	/** Updates a product media. */
	productMediaUpdate?:ModelTypes["ProductMediaUpdate"],
	/** Creates a new product type. */
	productTypeCreate?:ModelTypes["ProductTypeCreate"],
	/** Deletes a product type. */
	productTypeDelete?:ModelTypes["ProductTypeDelete"],
	/** Deletes product types. */
	productTypeBulkDelete?:ModelTypes["ProductTypeBulkDelete"],
	/** Updates an existing product type. */
	productTypeUpdate?:ModelTypes["ProductTypeUpdate"],
	/** Reorder the attributes of a product type. */
	productTypeReorderAttributes?:ModelTypes["ProductTypeReorderAttributes"],
	/** Reorder product attribute values. */
	productReorderAttributeValues?:ModelTypes["ProductReorderAttributeValues"],
	/** Create new digital content. This mutation must be sent as a `multipart`
request. More detailed specs of the upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
	digitalContentCreate?:ModelTypes["DigitalContentCreate"],
	/** Remove digital content assigned to given variant. */
	digitalContentDelete?:ModelTypes["DigitalContentDelete"],
	/** Update digital content. */
	digitalContentUpdate?:ModelTypes["DigitalContentUpdate"],
	/** Generate new URL to digital content. */
	digitalContentUrlCreate?:ModelTypes["DigitalContentUrlCreate"],
	/** Creates a new variant for a product. */
	productVariantCreate?:ModelTypes["ProductVariantCreate"],
	/** Deletes a product variant. */
	productVariantDelete?:ModelTypes["ProductVariantDelete"],
	/** Creates product variants for a given product. */
	productVariantBulkCreate?:ModelTypes["ProductVariantBulkCreate"],
	/** Deletes product variants. */
	productVariantBulkDelete?:ModelTypes["ProductVariantBulkDelete"],
	/** Creates stocks for product variant. */
	productVariantStocksCreate?:ModelTypes["ProductVariantStocksCreate"],
	/** Delete stocks from product variant. */
	productVariantStocksDelete?:ModelTypes["ProductVariantStocksDelete"],
	/** Update stocks for product variant. */
	productVariantStocksUpdate?:ModelTypes["ProductVariantStocksUpdate"],
	/** Updates an existing variant for product. */
	productVariantUpdate?:ModelTypes["ProductVariantUpdate"],
	/** Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook. */
	productVariantSetDefault?:ModelTypes["ProductVariantSetDefault"],
	/** Creates/updates translations for a product variant. */
	productVariantTranslate?:ModelTypes["ProductVariantTranslate"],
	/** Manage product variant prices in channels. */
	productVariantChannelListingUpdate?:ModelTypes["ProductVariantChannelListingUpdate"],
	/** Reorder product variant attribute values. */
	productVariantReorderAttributeValues?:ModelTypes["ProductVariantReorderAttributeValues"],
	/** New in Saleor 3.1. Deactivates product variant preorder. It changes all
preorder allocation into regular allocation. Note: this feature is in a
preview state and can be subject to changes at later point. */
	productVariantPreorderDeactivate?:ModelTypes["ProductVariantPreorderDeactivate"],
	/** Assign an media to a product variant. */
	variantMediaAssign?:ModelTypes["VariantMediaAssign"],
	/** Unassign an media from a product variant. */
	variantMediaUnassign?:ModelTypes["VariantMediaUnassign"],
	/** Captures the authorized payment amount. */
	paymentCapture?:ModelTypes["PaymentCapture"],
	/** Refunds the captured payment amount. */
	paymentRefund?:ModelTypes["PaymentRefund"],
	/** Voids the authorized payment. */
	paymentVoid?:ModelTypes["PaymentVoid"],
	/** Initializes payment process when it is required by gateway. */
	paymentInitialize?:ModelTypes["PaymentInitialize"],
	/** Check payment balance. */
	paymentCheckBalance?:ModelTypes["PaymentCheckBalance"],
	/** Create payment for checkout or order. */
	paymentCreate?:ModelTypes["PaymentCreate"],
	/** Create payment for checkout or order. */
	paymentUpdate?:ModelTypes["PaymentUpdate"],
	/** Creates a new page. */
	pageCreate?:ModelTypes["PageCreate"],
	/** Deletes a page. */
	pageDelete?:ModelTypes["PageDelete"],
	/** Deletes pages. */
	pageBulkDelete?:ModelTypes["PageBulkDelete"],
	/** Publish pages. */
	pageBulkPublish?:ModelTypes["PageBulkPublish"],
	/** Updates an existing page. */
	pageUpdate?:ModelTypes["PageUpdate"],
	/** Creates/updates translations for a page. */
	pageTranslate?:ModelTypes["PageTranslate"],
	/** Create a new page type. */
	pageTypeCreate?:ModelTypes["PageTypeCreate"],
	/** Update page type. */
	pageTypeUpdate?:ModelTypes["PageTypeUpdate"],
	/** Delete a page type. */
	pageTypeDelete?:ModelTypes["PageTypeDelete"],
	/** Delete page types. */
	pageTypeBulkDelete?:ModelTypes["PageTypeBulkDelete"],
	/** Assign attributes to a given page type. */
	pageAttributeAssign?:ModelTypes["PageAttributeAssign"],
	/** Unassign attributes from a given page type. */
	pageAttributeUnassign?:ModelTypes["PageAttributeUnassign"],
	/** Reorder the attributes of a page type. */
	pageTypeReorderAttributes?:ModelTypes["PageTypeReorderAttributes"],
	/** Reorder page attribute values. */
	pageReorderAttributeValues?:ModelTypes["PageReorderAttributeValues"],
	/** Completes creating an order. */
	draftOrderComplete?:ModelTypes["DraftOrderComplete"],
	/** Creates a new draft order. */
	draftOrderCreate?:ModelTypes["DraftOrderCreate"],
	/** Deletes a draft order. */
	draftOrderDelete?:ModelTypes["DraftOrderDelete"],
	/** Deletes draft orders. */
	draftOrderBulkDelete?:ModelTypes["DraftOrderBulkDelete"],
	/** Deletes order lines. */
	draftOrderLinesBulkDelete?:ModelTypes["DraftOrderLinesBulkDelete"],
	/** Updates a draft order. */
	draftOrderUpdate?:ModelTypes["DraftOrderUpdate"],
	/** Adds note to the order. */
	orderAddNote?:ModelTypes["OrderAddNote"],
	/** Cancel an order. */
	orderCancel?:ModelTypes["OrderCancel"],
	/** Capture an order. */
	orderCapture?:ModelTypes["OrderCapture"],
	/** Confirms an unconfirmed order by changing status to unfulfilled. */
	orderConfirm?:ModelTypes["OrderConfirm"],
	/** Creates new fulfillments for an order. */
	orderFulfill?:ModelTypes["OrderFulfill"],
	/** Cancels existing fulfillment and optionally restocks items. */
	orderFulfillmentCancel?:ModelTypes["FulfillmentCancel"],
	/** New in Saleor 3.1. Approve existing fulfillment. */
	orderFulfillmentApprove?:ModelTypes["FulfillmentApprove"],
	/** Updates a fulfillment for an order. */
	orderFulfillmentUpdateTracking?:ModelTypes["FulfillmentUpdateTracking"],
	/** Refund products. */
	orderFulfillmentRefundProducts?:ModelTypes["FulfillmentRefundProducts"],
	/** Return products. */
	orderFulfillmentReturnProducts?:ModelTypes["FulfillmentReturnProducts"],
	/** Create order lines for an order. */
	orderLinesCreate?:ModelTypes["OrderLinesCreate"],
	/** Deletes an order line from an order. */
	orderLineDelete?:ModelTypes["OrderLineDelete"],
	/** Updates an order line of an order. */
	orderLineUpdate?:ModelTypes["OrderLineUpdate"],
	/** Adds discount to the order. */
	orderDiscountAdd?:ModelTypes["OrderDiscountAdd"],
	/** Update discount for the order. */
	orderDiscountUpdate?:ModelTypes["OrderDiscountUpdate"],
	/** Remove discount from the order. */
	orderDiscountDelete?:ModelTypes["OrderDiscountDelete"],
	/** Update discount for the order line. */
	orderLineDiscountUpdate?:ModelTypes["OrderLineDiscountUpdate"],
	/** Remove discount applied to the order line. */
	orderLineDiscountRemove?:ModelTypes["OrderLineDiscountRemove"],
	/** Mark order as manually paid. */
	orderMarkAsPaid?:ModelTypes["OrderMarkAsPaid"],
	/** Refund an order. */
	orderRefund?:ModelTypes["OrderRefund"],
	/** Updates an order. */
	orderUpdate?:ModelTypes["OrderUpdate"],
	/** Updates a shipping method of the order. Requires shipping method ID to update,
when null is passed then currently assigned shipping method is removed. */
	orderUpdateShipping?:ModelTypes["OrderUpdateShipping"],
	/** Void an order. */
	orderVoid?:ModelTypes["OrderVoid"],
	/** Cancels orders. */
	orderBulkCancel?:ModelTypes["OrderBulkCancel"],
	/** Delete metadata of an object. */
	deleteMetadata?:ModelTypes["DeleteMetadata"],
	/** Delete object's private metadata. */
	deletePrivateMetadata?:ModelTypes["DeletePrivateMetadata"],
	/** Updates metadata of an object. */
	updateMetadata?:ModelTypes["UpdateMetadata"],
	/** Updates private metadata of an object. */
	updatePrivateMetadata?:ModelTypes["UpdatePrivateMetadata"],
	/** Assigns storefront's navigation menus. */
	assignNavigation?:ModelTypes["AssignNavigation"],
	/** Creates a new Menu. */
	menuCreate?:ModelTypes["MenuCreate"],
	/** Deletes a menu. */
	menuDelete?:ModelTypes["MenuDelete"],
	/** Deletes menus. */
	menuBulkDelete?:ModelTypes["MenuBulkDelete"],
	/** Updates a menu. */
	menuUpdate?:ModelTypes["MenuUpdate"],
	/** Creates a new menu item. */
	menuItemCreate?:ModelTypes["MenuItemCreate"],
	/** Deletes a menu item. */
	menuItemDelete?:ModelTypes["MenuItemDelete"],
	/** Deletes menu items. */
	menuItemBulkDelete?:ModelTypes["MenuItemBulkDelete"],
	/** Updates a menu item. */
	menuItemUpdate?:ModelTypes["MenuItemUpdate"],
	/** Creates/updates translations for a menu item. */
	menuItemTranslate?:ModelTypes["MenuItemTranslate"],
	/** Moves items of menus. */
	menuItemMove?:ModelTypes["MenuItemMove"],
	/** Request an invoice for the order using plugin. */
	invoiceRequest?:ModelTypes["InvoiceRequest"],
	/** Requests deletion of an invoice. */
	invoiceRequestDelete?:ModelTypes["InvoiceRequestDelete"],
	/** Creates a ready to send invoice. */
	invoiceCreate?:ModelTypes["InvoiceCreate"],
	/** Deletes an invoice. */
	invoiceDelete?:ModelTypes["InvoiceDelete"],
	/** Updates an invoice. */
	invoiceUpdate?:ModelTypes["InvoiceUpdate"],
	/** Send an invoice notification to the customer. */
	invoiceSendNotification?:ModelTypes["InvoiceSendNotification"],
	/** Activate a gift card. */
	giftCardActivate?:ModelTypes["GiftCardActivate"],
	/** Creates a new gift card. */
	giftCardCreate?:ModelTypes["GiftCardCreate"],
	/** New in Saleor 3.1. Delete gift card. Note: this feature is in a preview state
and can be subject to changes at later point. */
	giftCardDelete?:ModelTypes["GiftCardDelete"],
	/** Deactivate a gift card. */
	giftCardDeactivate?:ModelTypes["GiftCardDeactivate"],
	/** Update a gift card. */
	giftCardUpdate?:ModelTypes["GiftCardUpdate"],
	/** New in Saleor 3.1. Resend a gift card. Note: this feature is in a preview
state and can be subject to changes at later point. */
	giftCardResend?:ModelTypes["GiftCardResend"],
	/** New in Saleor 3.1. Adds note to the gift card. Note: this feature is in a
preview state and can be subject to changes at later point. */
	giftCardAddNote?:ModelTypes["GiftCardAddNote"],
	/** New in Saleor 3.1. Create gift cards. Note: this feature is in a preview state
and can be subject to changes at later point. */
	giftCardBulkCreate?:ModelTypes["GiftCardBulkCreate"],
	/** New in Saleor 3.1. Delete gift cards. Note: this feature is in a preview state
and can be subject to changes at later point. */
	giftCardBulkDelete?:ModelTypes["GiftCardBulkDelete"],
	/** New in Saleor 3.1. Activate gift cards. Note: this feature is in a preview
state and can be subject to changes at later point. */
	giftCardBulkActivate?:ModelTypes["GiftCardBulkActivate"],
	/** New in Saleor 3.1. Deactivate gift cards. Note: this feature is in a preview
state and can be subject to changes at later point. */
	giftCardBulkDeactivate?:ModelTypes["GiftCardBulkDeactivate"],
	/** Update plugin configuration. */
	pluginUpdate?:ModelTypes["PluginUpdate"],
	/** New in Saleor 3.1. Trigger sending a notification with the notify plugin
method. Serializes nodes provided as ids parameter and includes this data in
the notification payload. */
	externalNotificationTrigger?:ModelTypes["ExternalNotificationTrigger"],
	/** Creates a new sale. */
	saleCreate?:ModelTypes["SaleCreate"],
	/** Deletes a sale. */
	saleDelete?:ModelTypes["SaleDelete"],
	/** Deletes sales. */
	saleBulkDelete?:ModelTypes["SaleBulkDelete"],
	/** Updates a sale. */
	saleUpdate?:ModelTypes["SaleUpdate"],
	/** Adds products, categories, collections to a voucher. */
	saleCataloguesAdd?:ModelTypes["SaleAddCatalogues"],
	/** Removes products, categories, collections from a sale. */
	saleCataloguesRemove?:ModelTypes["SaleRemoveCatalogues"],
	/** Creates/updates translations for a sale. */
	saleTranslate?:ModelTypes["SaleTranslate"],
	/** Manage sale's availability in channels. */
	saleChannelListingUpdate?:ModelTypes["SaleChannelListingUpdate"],
	/** Creates a new voucher. */
	voucherCreate?:ModelTypes["VoucherCreate"],
	/** Deletes a voucher. */
	voucherDelete?:ModelTypes["VoucherDelete"],
	/** Deletes vouchers. */
	voucherBulkDelete?:ModelTypes["VoucherBulkDelete"],
	/** Updates a voucher. */
	voucherUpdate?:ModelTypes["VoucherUpdate"],
	/** Adds products, categories, collections to a voucher. */
	voucherCataloguesAdd?:ModelTypes["VoucherAddCatalogues"],
	/** Removes products, categories, collections from a voucher. */
	voucherCataloguesRemove?:ModelTypes["VoucherRemoveCatalogues"],
	/** Creates/updates translations for a voucher. */
	voucherTranslate?:ModelTypes["VoucherTranslate"],
	/** Manage voucher's availability in channels. */
	voucherChannelListingUpdate?:ModelTypes["VoucherChannelListingUpdate"],
	/** Export products to csv file. */
	exportProducts?:ModelTypes["ExportProducts"],
	/** New in Saleor 3.1. Export gift cards to csv file. Note: this feature is in a
preview state and can be subject to changes at later point. */
	exportGiftCards?:ModelTypes["ExportGiftCards"],
	/** Upload a file. This mutation must be sent as a `multipart` request. More
detailed specs of the upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
	fileUpload?:ModelTypes["FileUpload"],
	/** Adds a gift card or a voucher to a checkout. */
	checkoutAddPromoCode?:ModelTypes["CheckoutAddPromoCode"],
	/** Update billing address in the existing checkout. */
	checkoutBillingAddressUpdate?:ModelTypes["CheckoutBillingAddressUpdate"],
	/** Completes the checkout. As a result a new order is created and a payment
charge is made. This action requires a successful payment before it can be
performed. In case additional confirmation step as 3D secure is required
confirmationNeeded flag will be set to True and no order created until payment
is confirmed with second call of this mutation. */
	checkoutComplete?:ModelTypes["CheckoutComplete"],
	/** Create a new checkout. */
	checkoutCreate?:ModelTypes["CheckoutCreate"],
	/** Sets the customer as the owner of the checkout. */
	checkoutCustomerAttach?:ModelTypes["CheckoutCustomerAttach"],
	/** Removes the user assigned as the owner of the checkout. */
	checkoutCustomerDetach?:ModelTypes["CheckoutCustomerDetach"],
	/** Updates email address in the existing checkout object. */
	checkoutEmailUpdate?:ModelTypes["CheckoutEmailUpdate"],
	/** Deletes a CheckoutLine. */
	checkoutLineDelete?:ModelTypes["CheckoutLineDelete"],
	/** Deletes checkout lines. */
	checkoutLinesDelete?:ModelTypes["CheckoutLinesDelete"],
	/** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
	checkoutLinesAdd?:ModelTypes["CheckoutLinesAdd"],
	/** Updates checkout line in the existing checkout. */
	checkoutLinesUpdate?:ModelTypes["CheckoutLinesUpdate"],
	/** Remove a gift card or a voucher from a checkout. */
	checkoutRemovePromoCode?:ModelTypes["CheckoutRemovePromoCode"],
	/** Create a new payment for given checkout. */
	checkoutPaymentCreate?:ModelTypes["CheckoutPaymentCreate"],
	/** Update shipping address in the existing checkout. */
	checkoutShippingAddressUpdate?:ModelTypes["CheckoutShippingAddressUpdate"],
	/** Updates the shipping method of the checkout. */
	checkoutShippingMethodUpdate?:ModelTypes["CheckoutShippingMethodUpdate"],
	/** New in Saleor 3.1. Updates the delivery method (shipping method or pick up
point) of the checkout. Note: this feature is in a preview state and can be
subject to changes at later point. */
	checkoutDeliveryMethodUpdate?:ModelTypes["CheckoutDeliveryMethodUpdate"],
	/** Update language code in the existing checkout. */
	checkoutLanguageCodeUpdate?:ModelTypes["CheckoutLanguageCodeUpdate"],
	/** Create new order from existing checkout. */
	orderFromCheckoutCreate?:ModelTypes["OrderFromCheckoutCreate"],
	/** Creates new channel. */
	channelCreate?:ModelTypes["ChannelCreate"],
	/** Update a channel. */
	channelUpdate?:ModelTypes["ChannelUpdate"],
	/** Delete a channel. Orders associated with the deleted channel will be moved to
the target channel. Checkouts, product availability, and pricing will be removed. */
	channelDelete?:ModelTypes["ChannelDelete"],
	/** Activate a channel. */
	channelActivate?:ModelTypes["ChannelActivate"],
	/** Deactivate a channel. */
	channelDeactivate?:ModelTypes["ChannelDeactivate"],
	/** Creates an attribute. */
	attributeCreate?:ModelTypes["AttributeCreate"],
	/** Deletes an attribute. */
	attributeDelete?:ModelTypes["AttributeDelete"],
	/** Updates attribute. */
	attributeUpdate?:ModelTypes["AttributeUpdate"],
	/** Creates/updates translations for an attribute. */
	attributeTranslate?:ModelTypes["AttributeTranslate"],
	/** Deletes attributes. */
	attributeBulkDelete?:ModelTypes["AttributeBulkDelete"],
	/** Deletes values of attributes. */
	attributeValueBulkDelete?:ModelTypes["AttributeValueBulkDelete"],
	/** Creates a value for an attribute. */
	attributeValueCreate?:ModelTypes["AttributeValueCreate"],
	/** Deletes a value of an attribute. */
	attributeValueDelete?:ModelTypes["AttributeValueDelete"],
	/** Updates value of an attribute. */
	attributeValueUpdate?:ModelTypes["AttributeValueUpdate"],
	/** Creates/updates translations for an attribute value. */
	attributeValueTranslate?:ModelTypes["AttributeValueTranslate"],
	/** Reorder the values of an attribute. */
	attributeReorderValues?:ModelTypes["AttributeReorderValues"],
	/** Creates a new app. */
	appCreate?:ModelTypes["AppCreate"],
	/** Updates an existing app. */
	appUpdate?:ModelTypes["AppUpdate"],
	/** Deletes an app. */
	appDelete?:ModelTypes["AppDelete"],
	/** Creates a new token. */
	appTokenCreate?:ModelTypes["AppTokenCreate"],
	/** Deletes an authentication token assigned to app. */
	appTokenDelete?:ModelTypes["AppTokenDelete"],
	/** Verify provided app token. */
	appTokenVerify?:ModelTypes["AppTokenVerify"],
	/** Install new app by using app manifest. */
	appInstall?:ModelTypes["AppInstall"],
	/** Retry failed installation of new app. */
	appRetryInstall?:ModelTypes["AppRetryInstall"],
	/** Delete failed installation. */
	appDeleteFailedInstallation?:ModelTypes["AppDeleteFailedInstallation"],
	/** Fetch and validate manifest. */
	appFetchManifest?:ModelTypes["AppFetchManifest"],
	/** Activate the app. */
	appActivate?:ModelTypes["AppActivate"],
	/** Deactivate the app. */
	appDeactivate?:ModelTypes["AppDeactivate"],
	/** Create JWT token. */
	tokenCreate?:ModelTypes["CreateToken"],
	/** Refresh JWT token. Mutation tries to take refreshToken from the input.If it
fails it will try to take refreshToken from the http-only cookie
-refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
	tokenRefresh?:ModelTypes["RefreshToken"],
	/** Verify JWT token. */
	tokenVerify?:ModelTypes["VerifyToken"],
	/** Deactivate all JWT tokens of the currently authenticated user. */
	tokensDeactivateAll?:ModelTypes["DeactivateAllUserTokens"],
	/** Prepare external authentication url for user by custom plugin. */
	externalAuthenticationUrl?:ModelTypes["ExternalAuthenticationUrl"],
	/** Obtain external access tokens for user by custom plugin. */
	externalObtainAccessTokens?:ModelTypes["ExternalObtainAccessTokens"],
	/** Refresh user's access by custom plugin. */
	externalRefresh?:ModelTypes["ExternalRefresh"],
	/** Logout user by custom plugin. */
	externalLogout?:ModelTypes["ExternalLogout"],
	/** Verify external authentication data by plugin. */
	externalVerify?:ModelTypes["ExternalVerify"],
	/** Sends an email with the account password modification link. */
	requestPasswordReset?:ModelTypes["RequestPasswordReset"],
	/** Confirm user account with token sent by email during registration. */
	confirmAccount?:ModelTypes["ConfirmAccount"],
	/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
	setPassword?:ModelTypes["SetPassword"],
	/** Change the password of the logged in user. */
	passwordChange?:ModelTypes["PasswordChange"],
	/** Request email change of the logged in user. */
	requestEmailChange?:ModelTypes["RequestEmailChange"],
	/** Confirm the email change of the logged-in user. */
	confirmEmailChange?:ModelTypes["ConfirmEmailChange"],
	/** Create a new address for the customer. */
	accountAddressCreate?:ModelTypes["AccountAddressCreate"],
	/** Updates an address of the logged-in user. */
	accountAddressUpdate?:ModelTypes["AccountAddressUpdate"],
	/** Delete an address of the logged-in user. */
	accountAddressDelete?:ModelTypes["AccountAddressDelete"],
	/** Sets a default address for the authenticated user. */
	accountSetDefaultAddress?:ModelTypes["AccountSetDefaultAddress"],
	/** Register a new user. */
	accountRegister?:ModelTypes["AccountRegister"],
	/** Updates the account of the logged-in user. */
	accountUpdate?:ModelTypes["AccountUpdate"],
	/** Sends an email with the account removal link for the logged-in user. */
	accountRequestDeletion?:ModelTypes["AccountRequestDeletion"],
	/** Remove user account. */
	accountDelete?:ModelTypes["AccountDelete"],
	/** Creates user address. */
	addressCreate?:ModelTypes["AddressCreate"],
	/** Updates an address. */
	addressUpdate?:ModelTypes["AddressUpdate"],
	/** Deletes an address. */
	addressDelete?:ModelTypes["AddressDelete"],
	/** Sets a default address for the given user. */
	addressSetDefault?:ModelTypes["AddressSetDefault"],
	/** Creates a new customer. */
	customerCreate?:ModelTypes["CustomerCreate"],
	/** Updates an existing customer. */
	customerUpdate?:ModelTypes["CustomerUpdate"],
	/** Deletes a customer. */
	customerDelete?:ModelTypes["CustomerDelete"],
	/** Deletes customers. */
	customerBulkDelete?:ModelTypes["CustomerBulkDelete"],
	/** Creates a new staff user. */
	staffCreate?:ModelTypes["StaffCreate"],
	/** Updates an existing staff user. */
	staffUpdate?:ModelTypes["StaffUpdate"],
	/** Deletes a staff user. */
	staffDelete?:ModelTypes["StaffDelete"],
	/** Deletes staff users. */
	staffBulkDelete?:ModelTypes["StaffBulkDelete"],
	/** Create a user avatar. Only for staff members. This mutation must be sent as a
`multipart` request. More detailed specs of the upload format can be found
here: https://github.com/jaydenseric/graphql-multipart-request-spec */
	userAvatarUpdate?:ModelTypes["UserAvatarUpdate"],
	/** Deletes a user avatar. Only for staff members. */
	userAvatarDelete?:ModelTypes["UserAvatarDelete"],
	/** Activate or deactivate users. */
	userBulkSetActive?:ModelTypes["UserBulkSetActive"],
	/** Create new permission group. */
	permissionGroupCreate?:ModelTypes["PermissionGroupCreate"],
	/** Update permission group. */
	permissionGroupUpdate?:ModelTypes["PermissionGroupUpdate"],
	/** Delete permission group. */
	permissionGroupDelete?:ModelTypes["PermissionGroupDelete"]
};
	["NameTranslationInput"]: GraphQLTypes["NameTranslationInput"];
	["NavigationType"]: GraphQLTypes["NavigationType"];
	/** An object with an ID */
["Node"]: ModelTypes["Address"] | ModelTypes["Allocation"] | ModelTypes["App"] | ModelTypes["AppExtension"] | ModelTypes["AppInstallation"] | ModelTypes["AppToken"] | ModelTypes["Attribute"] | ModelTypes["AttributeTranslatableContent"] | ModelTypes["AttributeTranslation"] | ModelTypes["AttributeValue"] | ModelTypes["AttributeValueTranslatableContent"] | ModelTypes["AttributeValueTranslation"] | ModelTypes["Category"] | ModelTypes["CategoryTranslatableContent"] | ModelTypes["CategoryTranslation"] | ModelTypes["Channel"] | ModelTypes["Checkout"] | ModelTypes["CheckoutLine"] | ModelTypes["Collection"] | ModelTypes["CollectionChannelListing"] | ModelTypes["CollectionTranslatableContent"] | ModelTypes["CollectionTranslation"] | ModelTypes["CustomerEvent"] | ModelTypes["DigitalContent"] | ModelTypes["DigitalContentUrl"] | ModelTypes["EventDelivery"] | ModelTypes["EventDeliveryAttempt"] | ModelTypes["ExportEvent"] | ModelTypes["ExportFile"] | ModelTypes["Fulfillment"] | ModelTypes["FulfillmentLine"] | ModelTypes["GiftCard"] | ModelTypes["GiftCardEvent"] | ModelTypes["GiftCardTag"] | ModelTypes["Group"] | ModelTypes["Invoice"] | ModelTypes["Menu"] | ModelTypes["MenuItem"] | ModelTypes["MenuItemTranslatableContent"] | ModelTypes["MenuItemTranslation"] | ModelTypes["Order"] | ModelTypes["OrderDiscount"] | ModelTypes["OrderEvent"] | ModelTypes["OrderLine"] | ModelTypes["Page"] | ModelTypes["PageTranslatableContent"] | ModelTypes["PageTranslation"] | ModelTypes["PageType"] | ModelTypes["Payment"] | ModelTypes["PaymentPOC"] | ModelTypes["Product"] | ModelTypes["ProductChannelListing"] | ModelTypes["ProductMedia"] | ModelTypes["ProductTranslatableContent"] | ModelTypes["ProductTranslation"] | ModelTypes["ProductType"] | ModelTypes["ProductVariant"] | ModelTypes["ProductVariantChannelListing"] | ModelTypes["ProductVariantTranslatableContent"] | ModelTypes["ProductVariantTranslation"] | ModelTypes["Sale"] | ModelTypes["SaleChannelListing"] | ModelTypes["SaleTranslatableContent"] | ModelTypes["SaleTranslation"] | ModelTypes["ShippingMethod"] | ModelTypes["ShippingMethodChannelListing"] | ModelTypes["ShippingMethodPostalCodeRule"] | ModelTypes["ShippingMethodTranslatableContent"] | ModelTypes["ShippingMethodTranslation"] | ModelTypes["ShippingMethodType"] | ModelTypes["ShippingZone"] | ModelTypes["ShopTranslation"] | ModelTypes["StaffNotificationRecipient"] | ModelTypes["Stock"] | ModelTypes["Transaction"] | ModelTypes["User"] | ModelTypes["Voucher"] | ModelTypes["VoucherChannelListing"] | ModelTypes["VoucherTranslatableContent"] | ModelTypes["VoucherTranslation"] | ModelTypes["Warehouse"] | ModelTypes["Webhook"];
	["ObjectWithMetadata"]: ModelTypes["App"] | ModelTypes["Attribute"] | ModelTypes["Category"] | ModelTypes["Checkout"] | ModelTypes["Collection"] | ModelTypes["DigitalContent"] | ModelTypes["Fulfillment"] | ModelTypes["GiftCard"] | ModelTypes["Invoice"] | ModelTypes["Menu"] | ModelTypes["MenuItem"] | ModelTypes["Order"] | ModelTypes["Page"] | ModelTypes["PageType"] | ModelTypes["Payment"] | ModelTypes["PaymentPOC"] | ModelTypes["Product"] | ModelTypes["ProductType"] | ModelTypes["ProductVariant"] | ModelTypes["Sale"] | ModelTypes["ShippingMethod"] | ModelTypes["ShippingMethodType"] | ModelTypes["ShippingZone"] | ModelTypes["User"] | ModelTypes["Voucher"] | ModelTypes["Warehouse"];
	/** Represents an order in the shop. */
["Order"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	created:ModelTypes["DateTime"],
	updatedAt:ModelTypes["DateTime"],
	status:ModelTypes["OrderStatus"],
	user?:ModelTypes["User"],
	trackingClientId:string,
	billingAddress?:ModelTypes["Address"],
	shippingAddress?:ModelTypes["Address"],
	shippingMethodName?:string,
	collectionPointName?:string,
	channel:ModelTypes["Channel"],
	/** List of shipments for the order. */
	fulfillments?:ModelTypes["Fulfillment"][],
	/** List of order lines. */
	lines?:ModelTypes["OrderLine"][],
	/** List of actions that can be performed in the current state of an order. */
	actions?:ModelTypes["OrderAction"][],
	/** Shipping methods that can be used with this order. */
	availableShippingMethods?:(ModelTypes["ShippingMethod"] | undefined)[],
	/** Shipping methods related to this order. */
	shippingMethods?:(ModelTypes["ShippingMethod"] | undefined)[],
	/** New in Saleor 3.1. Collection points that can be used for this order. Note:
this feature is in a preview state and can be subject to changes at later point. */
	availableCollectionPoints:ModelTypes["Warehouse"][],
	/** List of order invoices. */
	invoices?:(ModelTypes["Invoice"] | undefined)[],
	/** User-friendly number of an order. */
	number?:string,
	/** The ID of the order that was the base for this order. */
	original?:string,
	/** The order origin. */
	origin:ModelTypes["OrderOriginEnum"],
	/** Informs if an order is fully paid. */
	isPaid:boolean,
	/** Internal payment status. */
	paymentStatus:ModelTypes["PaymentChargeStatusEnum"],
	/** User-friendly payment status. */
	paymentStatusDisplay:string,
	/** List of payments for the order. */
	payments?:(ModelTypes["Payment"] | undefined)[],
	/** List of payments for the order */
	pocPayments:ModelTypes["PaymentPOC"][],
	/** Total amount of the order. */
	total:ModelTypes["TaxedMoney"],
	/** Undiscounted total amount of the order. */
	undiscountedTotal:ModelTypes["TaxedMoney"],
	/** Shipping method for this order. */
	shippingMethod?:ModelTypes["ShippingMethod"],
	/** Total price of shipping. */
	shippingPrice:ModelTypes["TaxedMoney"],
	shippingTaxRate:number,
	token:string,
	voucher?:ModelTypes["Voucher"],
	/** List of user gift cards. */
	giftCards?:(ModelTypes["GiftCard"] | undefined)[],
	displayGrossPrices:boolean,
	customerNote:string,
	weight?:ModelTypes["Weight"],
	redirectUrl?:string,
	/** The sum of line prices not including shipping. */
	subtotal:ModelTypes["TaxedMoney"],
	/** User-friendly order status. */
	statusDisplay?:string,
	/** Informs whether a draft order can be finalized(turned into a regular order). */
	canFinalize:boolean,
	/** Amount authorized for the order. */
	totalAuthorized:ModelTypes["Money"],
	/** Amount captured by payment. */
	totalCaptured:ModelTypes["Money"],
	/** List of events associated with the order. */
	events?:(ModelTypes["OrderEvent"] | undefined)[],
	/** The difference between the paid and the order total amount. */
	totalBalance:ModelTypes["Money"],
	/** Email address of the customer. */
	userEmail?:string,
	/** Returns True, if order requires shipping. */
	isShippingRequired:boolean,
	/** New in Saleor 3.1. The delivery method selected for this checkout. Note: this
feature is in a preview state and can be subject to changes at later point. */
	deliveryMethod?:ModelTypes["DeliveryMethod"],
	languageCode:string,
	/** Order language code. */
	languageCodeEnum:ModelTypes["LanguageCodeEnum"],
	/** Returns applied discount. */
	discount?:ModelTypes["Money"],
	/** Discount name. */
	discountName?:string,
	/** Translated discount name. */
	translatedDiscountName?:string,
	/** List of all discounts assigned to the order. */
	discounts?:ModelTypes["OrderDiscount"][],
	/** List of errors that occurred during order validation. */
	errors:ModelTypes["OrderError"][]
};
	["OrderAction"]: GraphQLTypes["OrderAction"];
	/** Adds note to the order. */
["OrderAddNote"]: {
		/** Order with the note added. */
	order?:ModelTypes["Order"],
	/** Order note created. */
	event?:ModelTypes["OrderEvent"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	["OrderAddNoteInput"]: GraphQLTypes["OrderAddNoteInput"];
	/** Cancels orders. */
["OrderBulkCancel"]: {
		/** Returns how many objects were affected. */
	count:number,
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	/** Cancel an order. */
["OrderCancel"]: {
		/** Canceled order. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	/** Capture an order. */
["OrderCapture"]: {
		/** Captured order. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	/** Confirms an unconfirmed order by changing status to unfulfilled. */
["OrderConfirm"]: {
		order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	["OrderCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["OrderCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["OrderCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["Order"],
	/** A cursor for use in pagination. */
	cursor:string
};
	["OrderDirection"]: GraphQLTypes["OrderDirection"];
	/** Contains all details related to the applied discount to the order. */
["OrderDiscount"]: {
		id:string,
	type:ModelTypes["OrderDiscountType"],
	name?:string,
	translatedName?:string,
	/** Type of the discount: fixed or percent */
	valueType:ModelTypes["DiscountValueTypeEnum"],
	/** Value of the discount. Can store fixed value or percent value */
	value:ModelTypes["PositiveDecimal"],
	/** Explanation for the applied discount. */
	reason?:string,
	/** Returns amount of discount. */
	amount:ModelTypes["Money"]
};
	/** Adds discount to the order. */
["OrderDiscountAdd"]: {
		/** Order which has been discounted. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	["OrderDiscountCommonInput"]: GraphQLTypes["OrderDiscountCommonInput"];
	/** Remove discount from the order. */
["OrderDiscountDelete"]: {
		/** Order which has removed discount. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	/** An enumeration. */
["OrderDiscountType"]: GraphQLTypes["OrderDiscountType"];
	/** Update discount for the order. */
["OrderDiscountUpdate"]: {
		/** Order which has been discounted. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	["OrderDraftFilterInput"]: GraphQLTypes["OrderDraftFilterInput"];
	["OrderError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["OrderErrorCode"],
	/** Warehouse ID which causes the error. */
	warehouse?:string,
	/** List of order line IDs that cause the error. */
	orderLines?:string[],
	/** List of product variants that are associated with the error */
	variants?:string[],
	/** A type of address that causes the error. */
	addressType?:ModelTypes["AddressTypeEnum"]
};
	/** An enumeration. */
["OrderErrorCode"]: GraphQLTypes["OrderErrorCode"];
	/** History log of the order. */
["OrderEvent"]: {
		id:string,
	/** Date when event happened at in ISO 8601 format. */
	date?:ModelTypes["DateTime"],
	/** Order event type. */
	type?:ModelTypes["OrderEventsEnum"],
	/** User who performed the action. */
	user?:ModelTypes["User"],
	/** App that performed the action. */
	app?:ModelTypes["App"],
	/** Content of the event. */
	message?:string,
	/** Email of the customer. */
	email?:string,
	/** Type of an email sent to the customer. */
	emailType?:ModelTypes["OrderEventsEmailsEnum"],
	/** Amount of money. */
	amount?:number,
	/** The payment ID from the payment gateway. */
	paymentId?:string,
	/** The payment gateway of the payment. */
	paymentGateway?:string,
	/** Number of items. */
	quantity?:number,
	/** Composed ID of the Fulfillment. */
	composedId?:string,
	/** User-friendly number of an order. */
	orderNumber?:string,
	/** Number of an invoice related to the order. */
	invoiceNumber?:string,
	/** List of oversold lines names. */
	oversoldItems?:(string | undefined)[],
	/** The concerned lines. */
	lines?:(ModelTypes["OrderEventOrderLineObject"] | undefined)[],
	/** The lines fulfilled. */
	fulfilledItems?:(ModelTypes["FulfillmentLine"] | undefined)[],
	/** The warehouse were items were restocked. */
	warehouse?:ModelTypes["Warehouse"],
	/** The transaction reference of captured payment. */
	transactionReference?:string,
	/** Define if shipping costs were included to the refund. */
	shippingCostsIncluded?:boolean,
	/** The order which is related to this order. */
	relatedOrder?:ModelTypes["Order"],
	/** The discount applied to the order. */
	discount?:ModelTypes["OrderEventDiscountObject"],
	/** The status of payment's transaction. */
	status?:ModelTypes["TransactionStatus"],
	/** The reference of payment's transaction. */
	reference?:string
};
	["OrderEventCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["OrderEventCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["OrderEventCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["OrderEvent"],
	/** A cursor for use in pagination. */
	cursor:string
};
	["OrderEventDiscountObject"]: {
		/** Type of the discount: fixed or percent. */
	valueType:ModelTypes["DiscountValueTypeEnum"],
	/** Value of the discount. Can store fixed value or percent value. */
	value:ModelTypes["PositiveDecimal"],
	/** Explanation for the applied discount. */
	reason?:string,
	/** Returns amount of discount. */
	amount?:ModelTypes["Money"],
	/** Type of the discount: fixed or percent. */
	oldValueType?:ModelTypes["DiscountValueTypeEnum"],
	/** Value of the discount. Can store fixed value or percent value. */
	oldValue?:ModelTypes["PositiveDecimal"],
	/** Returns amount of discount. */
	oldAmount?:ModelTypes["Money"]
};
	["OrderEventOrderLineObject"]: {
		/** The variant quantity. */
	quantity?:number,
	/** The order line. */
	orderLine?:ModelTypes["OrderLine"],
	/** The variant name. */
	itemName?:string,
	/** The discount applied to the order line. */
	discount?:ModelTypes["OrderEventDiscountObject"]
};
	/** An enumeration. */
["OrderEventsEmailsEnum"]: GraphQLTypes["OrderEventsEmailsEnum"];
	/** An enumeration. */
["OrderEventsEnum"]: GraphQLTypes["OrderEventsEnum"];
	["OrderFilterInput"]: GraphQLTypes["OrderFilterInput"];
	/** Create new order from existing checkout. */
["OrderFromCheckoutCreate"]: {
		/** Placed order. */
	order?:ModelTypes["Order"],
	checkoutErrors:ModelTypes["OrderFromCheckoutCreateError"][],
	errors:ModelTypes["OrderFromCheckoutCreateError"][]
};
	["OrderFromCheckoutCreateError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["OrderFromCheckoutCreateErrorCode"],
	/** List of varint IDs which causes the error. */
	variants?:string[],
	/** List of line Ids which cause the error. */
	lines?:string[]
};
	/** An enumeration. */
["OrderFromCheckoutCreateErrorCode"]: GraphQLTypes["OrderFromCheckoutCreateErrorCode"];
	/** Creates new fulfillments for an order. */
["OrderFulfill"]: {
		/** List of created fulfillments. */
	fulfillments?:(ModelTypes["Fulfillment"] | undefined)[],
	/** Fulfilled order. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	["OrderFulfillInput"]: GraphQLTypes["OrderFulfillInput"];
	["OrderFulfillLineInput"]: GraphQLTypes["OrderFulfillLineInput"];
	["OrderFulfillStockInput"]: GraphQLTypes["OrderFulfillStockInput"];
	/** Represents order line of particular order. */
["OrderLine"]: {
		id:string,
	productName:string,
	variantName:string,
	productSku?:string,
	productVariantId?:string,
	isShippingRequired:boolean,
	quantity:number,
	quantityFulfilled:number,
	unitDiscountReason?:string,
	taxRate:number,
	digitalContentUrl?:ModelTypes["DigitalContentUrl"],
	/** The main thumbnail for the ordered product. */
	thumbnail?:ModelTypes["Image"],
	/** Price of the single item in the order line. */
	unitPrice:ModelTypes["TaxedMoney"],
	/** Price of the single item in the order line without applied an order line discount. */
	undiscountedUnitPrice:ModelTypes["TaxedMoney"],
	/** The discount applied to the single order line. */
	unitDiscount:ModelTypes["Money"],
	/** Value of the discount. Can store fixed value or percent value */
	unitDiscountValue:ModelTypes["PositiveDecimal"],
	/** Price of the order line. */
	totalPrice:ModelTypes["TaxedMoney"],
	/** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. */
	variant?:ModelTypes["ProductVariant"],
	/** Product name in the customer's language */
	translatedProductName:string,
	/** Variant name in the customer's language */
	translatedVariantName:string,
	/** List of allocations across warehouses. */
	allocations?:ModelTypes["Allocation"][],
	/** New in Saleor 3.1. A quantity of items remaining to be fulfilled. */
	quantityToFulfill:number,
	/** Type of the discount: fixed or percent */
	unitDiscountType?:ModelTypes["DiscountValueTypeEnum"]
};
	["OrderLineCreateInput"]: GraphQLTypes["OrderLineCreateInput"];
	/** Deletes an order line from an order. */
["OrderLineDelete"]: {
		/** A related order. */
	order?:ModelTypes["Order"],
	/** An order line that was deleted. */
	orderLine?:ModelTypes["OrderLine"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	/** Remove discount applied to the order line. */
["OrderLineDiscountRemove"]: {
		/** Order line which has removed discount. */
	orderLine?:ModelTypes["OrderLine"],
	/** Order which is related to line which has removed discount. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	/** Update discount for the order line. */
["OrderLineDiscountUpdate"]: {
		/** Order line which has been discounted. */
	orderLine?:ModelTypes["OrderLine"],
	/** Order which is related to the discounted line. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	["OrderLineInput"]: GraphQLTypes["OrderLineInput"];
	/** Create order lines for an order. */
["OrderLinesCreate"]: {
		/** Related order. */
	order?:ModelTypes["Order"],
	/** List of added order lines. */
	orderLines?:ModelTypes["OrderLine"][],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	/** Updates an order line of an order. */
["OrderLineUpdate"]: {
		/** Related order. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][],
	orderLine?:ModelTypes["OrderLine"]
};
	/** Mark order as manually paid. */
["OrderMarkAsPaid"]: {
		/** Order marked as paid. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	/** An enumeration. */
["OrderOriginEnum"]: GraphQLTypes["OrderOriginEnum"];
	/** Refund an order. */
["OrderRefund"]: {
		/** A refunded order. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	["OrderRefundFulfillmentLineInput"]: GraphQLTypes["OrderRefundFulfillmentLineInput"];
	["OrderRefundLineInput"]: GraphQLTypes["OrderRefundLineInput"];
	["OrderRefundProductsInput"]: GraphQLTypes["OrderRefundProductsInput"];
	["OrderReturnFulfillmentLineInput"]: GraphQLTypes["OrderReturnFulfillmentLineInput"];
	["OrderReturnLineInput"]: GraphQLTypes["OrderReturnLineInput"];
	["OrderReturnProductsInput"]: GraphQLTypes["OrderReturnProductsInput"];
	/** Order related settings from site settings. */
["OrderSettings"]: {
		automaticallyConfirmAllNewOrders:boolean,
	automaticallyFulfillNonShippableGiftCard:boolean
};
	["OrderSettingsError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["OrderSettingsErrorCode"]
};
	/** An enumeration. */
["OrderSettingsErrorCode"]: GraphQLTypes["OrderSettingsErrorCode"];
	/** Update shop order settings. */
["OrderSettingsUpdate"]: {
		/** Order settings. */
	orderSettings?:ModelTypes["OrderSettings"],
	orderSettingsErrors:ModelTypes["OrderSettingsError"][],
	errors:ModelTypes["OrderSettingsError"][]
};
	["OrderSettingsUpdateInput"]: GraphQLTypes["OrderSettingsUpdateInput"];
	["OrderSortField"]: GraphQLTypes["OrderSortField"];
	["OrderSortingInput"]: GraphQLTypes["OrderSortingInput"];
	/** An enumeration. */
["OrderStatus"]: GraphQLTypes["OrderStatus"];
	["OrderStatusFilter"]: GraphQLTypes["OrderStatusFilter"];
	/** Updates an order. */
["OrderUpdate"]: {
		orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][],
	order?:ModelTypes["Order"]
};
	["OrderUpdateInput"]: GraphQLTypes["OrderUpdateInput"];
	/** Updates a shipping method of the order. Requires shipping method ID to update,
when null is passed then currently assigned shipping method is removed. */
["OrderUpdateShipping"]: {
		/** Order with updated shipping method. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	["OrderUpdateShippingInput"]: GraphQLTypes["OrderUpdateShippingInput"];
	/** Void an order. */
["OrderVoid"]: {
		/** A voided order. */
	order?:ModelTypes["Order"],
	orderErrors:ModelTypes["OrderError"][],
	errors:ModelTypes["OrderError"][]
};
	/** A static page that can be manually added by a shop operator through the dashboard. */
["Page"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	seoTitle?:string,
	seoDescription?:string,
	title:string,
	/** Content of the page (JSON). */
	content?:ModelTypes["JSONString"],
	publicationDate?:ModelTypes["Date"],
	isPublished:boolean,
	slug:string,
	pageType:ModelTypes["PageType"],
	created:ModelTypes["DateTime"],
	/** Content of the page (JSON). */
	contentJson:ModelTypes["JSONString"],
	/** Returns translated page fields for the given language code. */
	translation?:ModelTypes["PageTranslation"],
	/** List of attributes assigned to this product. */
	attributes:ModelTypes["SelectedAttribute"][]
};
	/** Assign attributes to a given page type. */
["PageAttributeAssign"]: {
		/** The updated page type. */
	pageType?:ModelTypes["PageType"],
	pageErrors:ModelTypes["PageError"][],
	errors:ModelTypes["PageError"][]
};
	/** Unassign attributes from a given page type. */
["PageAttributeUnassign"]: {
		/** The updated page type. */
	pageType?:ModelTypes["PageType"],
	pageErrors:ModelTypes["PageError"][],
	errors:ModelTypes["PageError"][]
};
	/** Deletes pages. */
["PageBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	pageErrors:ModelTypes["PageError"][],
	errors:ModelTypes["PageError"][]
};
	/** Publish pages. */
["PageBulkPublish"]: {
		/** Returns how many objects were affected. */
	count:number,
	pageErrors:ModelTypes["PageError"][],
	errors:ModelTypes["PageError"][]
};
	["PageCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["PageCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["PageCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["Page"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates a new page. */
["PageCreate"]: {
		pageErrors:ModelTypes["PageError"][],
	errors:ModelTypes["PageError"][],
	page?:ModelTypes["Page"]
};
	["PageCreateInput"]: GraphQLTypes["PageCreateInput"];
	/** Deletes a page. */
["PageDelete"]: {
		pageErrors:ModelTypes["PageError"][],
	errors:ModelTypes["PageError"][],
	page?:ModelTypes["Page"]
};
	["PageError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["PageErrorCode"],
	/** List of attributes IDs which causes the error. */
	attributes?:string[],
	/** List of attribute values IDs which causes the error. */
	values?:string[]
};
	/** An enumeration. */
["PageErrorCode"]: GraphQLTypes["PageErrorCode"];
	["PageFilterInput"]: GraphQLTypes["PageFilterInput"];
	/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
["PageInfo"]: {
		/** When paginating forwards, are there more items? */
	hasNextPage:boolean,
	/** When paginating backwards, are there more items? */
	hasPreviousPage:boolean,
	/** When paginating backwards, the cursor to continue. */
	startCursor?:string,
	/** When paginating forwards, the cursor to continue. */
	endCursor?:string
};
	["PageInput"]: GraphQLTypes["PageInput"];
	/** Reorder page attribute values. */
["PageReorderAttributeValues"]: {
		/** Page from which attribute values are reordered. */
	page?:ModelTypes["Page"],
	pageErrors:ModelTypes["PageError"][],
	errors:ModelTypes["PageError"][]
};
	["PageSortField"]: GraphQLTypes["PageSortField"];
	["PageSortingInput"]: GraphQLTypes["PageSortingInput"];
	["PageTranslatableContent"]: {
		id:string,
	seoTitle?:string,
	seoDescription?:string,
	title:string,
	content?:ModelTypes["JSONString"],
	/** Content of the page (JSON). */
	contentJson?:ModelTypes["JSONString"],
	/** Returns translated page fields for the given language code. */
	translation?:ModelTypes["PageTranslation"],
	/** ('A static page that can be manually added by a shop operator ', 'through the dashboard.') */
	page?:ModelTypes["Page"],
	/** List of page content attribute values that can be translated. */
	attributeValues:ModelTypes["AttributeValueTranslatableContent"][]
};
	/** Creates/updates translations for a page. */
["PageTranslate"]: {
		translationErrors:ModelTypes["TranslationError"][],
	errors:ModelTypes["TranslationError"][],
	page?:ModelTypes["PageTranslatableContent"]
};
	["PageTranslation"]: {
		id:string,
	/** Translation language. */
	language:ModelTypes["LanguageDisplay"],
	seoTitle?:string,
	seoDescription?:string,
	title?:string,
	content?:ModelTypes["JSONString"],
	/** Translated description of the page (JSON). */
	contentJson?:ModelTypes["JSONString"]
};
	["PageTranslationInput"]: GraphQLTypes["PageTranslationInput"];
	/** Represents a type of page. It defines what attributes are available to pages of this type. */
["PageType"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	name:string,
	slug:string,
	/** Page attributes of that page type. */
	attributes?:(ModelTypes["Attribute"] | undefined)[],
	/** Attributes that can be assigned to the page type. */
	availableAttributes?:ModelTypes["AttributeCountableConnection"],
	/** Whether page type has pages assigned. */
	hasPages?:boolean
};
	/** Delete page types. */
["PageTypeBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	pageErrors:ModelTypes["PageError"][],
	errors:ModelTypes["PageError"][]
};
	["PageTypeCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["PageTypeCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["PageTypeCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["PageType"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Create a new page type. */
["PageTypeCreate"]: {
		pageErrors:ModelTypes["PageError"][],
	errors:ModelTypes["PageError"][],
	pageType?:ModelTypes["PageType"]
};
	["PageTypeCreateInput"]: GraphQLTypes["PageTypeCreateInput"];
	/** Delete a page type. */
["PageTypeDelete"]: {
		pageErrors:ModelTypes["PageError"][],
	errors:ModelTypes["PageError"][],
	pageType?:ModelTypes["PageType"]
};
	["PageTypeFilterInput"]: GraphQLTypes["PageTypeFilterInput"];
	/** Reorder the attributes of a page type. */
["PageTypeReorderAttributes"]: {
		/** Page type from which attributes are reordered. */
	pageType?:ModelTypes["PageType"],
	pageErrors:ModelTypes["PageError"][],
	errors:ModelTypes["PageError"][]
};
	["PageTypeSortField"]: GraphQLTypes["PageTypeSortField"];
	["PageTypeSortingInput"]: GraphQLTypes["PageTypeSortingInput"];
	/** Update page type. */
["PageTypeUpdate"]: {
		pageErrors:ModelTypes["PageError"][],
	errors:ModelTypes["PageError"][],
	pageType?:ModelTypes["PageType"]
};
	["PageTypeUpdateInput"]: GraphQLTypes["PageTypeUpdateInput"];
	/** Updates an existing page. */
["PageUpdate"]: {
		pageErrors:ModelTypes["PageError"][],
	errors:ModelTypes["PageError"][],
	page?:ModelTypes["Page"]
};
	/** Change the password of the logged in user. */
["PasswordChange"]: {
		/** A user instance with a new password. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** Represents a payment of a given type. */
["Payment"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	gateway:string,
	isActive:boolean,
	created:ModelTypes["DateTime"],
	modified:ModelTypes["DateTime"],
	token:string,
	checkout?:ModelTypes["Checkout"],
	order?:ModelTypes["Order"],
	paymentMethodType:string,
	customerIpAddress?:string,
	/** Internal payment status. */
	chargeStatus:ModelTypes["PaymentChargeStatusEnum"],
	/** List of actions that can be performed in the current state of a payment. */
	actions?:ModelTypes["OrderAction"][],
	/** Total amount of the payment. */
	total?:ModelTypes["Money"],
	/** Total amount captured for this payment. */
	capturedAmount?:ModelTypes["Money"],
	/** List of all transactions within this payment. */
	transactions?:(ModelTypes["Transaction"] | undefined)[],
	/** Maximum amount of money that can be captured. */
	availableCaptureAmount?:ModelTypes["Money"],
	/** Maximum amount of money that can be refunded. */
	availableRefundAmount?:ModelTypes["Money"],
	/** The details of the card used for this payment. */
	creditCard?:ModelTypes["CreditCard"]
};
	/** An enumeration. */
["PaymentActionEnum"]: GraphQLTypes["PaymentActionEnum"];
	/** Captures the authorized payment amount. */
["PaymentCapture"]: {
		/** Updated payment. */
	payment?:ModelTypes["Payment"],
	paymentErrors:ModelTypes["PaymentError"][],
	errors:ModelTypes["PaymentError"][]
};
	/** An enumeration. */
["PaymentChargeStatusEnum"]: GraphQLTypes["PaymentChargeStatusEnum"];
	/** Check payment balance. */
["PaymentCheckBalance"]: {
		/** Response from the gateway. */
	data?:ModelTypes["JSONString"],
	paymentErrors:ModelTypes["PaymentError"][],
	errors:ModelTypes["PaymentError"][]
};
	["PaymentCheckBalanceInput"]: GraphQLTypes["PaymentCheckBalanceInput"];
	["PaymentCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["PaymentCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["PaymentCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["Payment"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Create payment for checkout or order. */
["PaymentCreate"]: {
		payment:ModelTypes["PaymentPOC"],
	errors:ModelTypes["PaymentCreateError"][]
};
	["PaymentCreateError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["PaymentCreateErrorCode"]
};
	/** An enumeration. */
["PaymentCreateErrorCode"]: GraphQLTypes["PaymentCreateErrorCode"];
	["PaymentError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["PaymentErrorCode"],
	/** List of varint IDs which causes the error. */
	variants?:string[]
};
	/** An enumeration. */
["PaymentErrorCode"]: GraphQLTypes["PaymentErrorCode"];
	["PaymentFilterInput"]: GraphQLTypes["PaymentFilterInput"];
	/** Available payment gateway backend with configuration necessary to setup client. */
["PaymentGateway"]: {
		/** Payment gateway name. */
	name:string,
	/** Payment gateway ID. */
	id:string,
	/** Payment gateway client configuration. */
	config:ModelTypes["GatewayConfigLine"][],
	/** Payment gateway supported currencies. */
	currencies?:string[]
};
	/** Initializes payment process when it is required by gateway. */
["PaymentInitialize"]: {
		initializedPayment?:ModelTypes["PaymentInitialized"],
	paymentErrors:ModelTypes["PaymentError"][],
	errors:ModelTypes["PaymentError"][]
};
	/** Server-side data generated by a payment gateway. Optional step when the payment
provider requires an additional action to initialize payment session. */
["PaymentInitialized"]: {
		/** ID of a payment gateway. */
	gateway:string,
	/** Payment gateway name. */
	name:string,
	/** Initialized data by gateway. */
	data?:ModelTypes["JSONString"]
};
	["PaymentInput"]: GraphQLTypes["PaymentInput"];
	/** Represents a payment of a given type. */
["PaymentPOC"]: {
		/** The ID of the object. */
	id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	status:string,
	type:string,
	reference:string,
	/** List of all possible actions for the payment */
	availableActions:ModelTypes["PaymentActionEnum"][],
	/** Amount authorized by this payment. */
	amountAuthorized:ModelTypes["Money"],
	/** Amount captured by this payment. */
	amountCaptured:ModelTypes["Money"],
	/** Amount refunded by this payment. */
	amountRefunded:ModelTypes["Money"],
	/** Amount voided by this payment. */
	amountVoided:ModelTypes["Money"]
};
	["PaymentPOCCreateInput"]: GraphQLTypes["PaymentPOCCreateInput"];
	["PaymentPOCUpdateInput"]: GraphQLTypes["PaymentPOCUpdateInput"];
	/** Refunds the captured payment amount. */
["PaymentRefund"]: {
		/** Updated payment. */
	payment?:ModelTypes["Payment"],
	paymentErrors:ModelTypes["PaymentError"][],
	errors:ModelTypes["PaymentError"][]
};
	/** Represents a payment source stored for user in payment gateway, such as credit card. */
["PaymentSource"]: {
		/** Payment gateway name. */
	gateway:string,
	/** ID of stored payment method. */
	paymentMethodId?:string,
	/** Stored credit card details if available. */
	creditCardInfo?:ModelTypes["CreditCard"],
	/** New in Saleor 3.1. List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][]
};
	/** Create payment for checkout or order. */
["PaymentUpdate"]: {
		payment:ModelTypes["PaymentPOC"],
	errors:ModelTypes["PaymentCreateError"][]
};
	/** Voids the authorized payment. */
["PaymentVoid"]: {
		/** Updated payment. */
	payment?:ModelTypes["Payment"],
	paymentErrors:ModelTypes["PaymentError"][],
	errors:ModelTypes["PaymentError"][]
};
	/** Represents a permission object in a friendly form. */
["Permission"]: {
		/** Internal code for permission. */
	code:ModelTypes["PermissionEnum"],
	/** Describe action(s) allowed to do by permission. */
	name:string
};
	/** An enumeration. */
["PermissionEnum"]: GraphQLTypes["PermissionEnum"];
	/** Create new permission group. */
["PermissionGroupCreate"]: {
		permissionGroupErrors:ModelTypes["PermissionGroupError"][],
	errors:ModelTypes["PermissionGroupError"][],
	group?:ModelTypes["Group"]
};
	["PermissionGroupCreateInput"]: GraphQLTypes["PermissionGroupCreateInput"];
	/** Delete permission group. */
["PermissionGroupDelete"]: {
		permissionGroupErrors:ModelTypes["PermissionGroupError"][],
	errors:ModelTypes["PermissionGroupError"][],
	group?:ModelTypes["Group"]
};
	["PermissionGroupError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["PermissionGroupErrorCode"],
	/** List of permissions which causes the error. */
	permissions?:ModelTypes["PermissionEnum"][],
	/** List of user IDs which causes the error. */
	users?:string[]
};
	/** An enumeration. */
["PermissionGroupErrorCode"]: GraphQLTypes["PermissionGroupErrorCode"];
	["PermissionGroupFilterInput"]: GraphQLTypes["PermissionGroupFilterInput"];
	["PermissionGroupSortField"]: GraphQLTypes["PermissionGroupSortField"];
	["PermissionGroupSortingInput"]: GraphQLTypes["PermissionGroupSortingInput"];
	/** Update permission group. */
["PermissionGroupUpdate"]: {
		permissionGroupErrors:ModelTypes["PermissionGroupError"][],
	errors:ModelTypes["PermissionGroupError"][],
	group?:ModelTypes["Group"]
};
	["PermissionGroupUpdateInput"]: GraphQLTypes["PermissionGroupUpdateInput"];
	/** Plugin. */
["Plugin"]: {
		/** Identifier of the plugin. */
	id:string,
	/** Name of the plugin. */
	name:string,
	/** Description of the plugin. */
	description:string,
	/** Global configuration of the plugin (not channel-specific). */
	globalConfiguration?:ModelTypes["PluginConfiguration"],
	/** Channel-specific plugin configuration. */
	channelConfigurations:ModelTypes["PluginConfiguration"][]
};
	/** Stores information about a configuration of plugin. */
["PluginConfiguration"]: {
		/** Determines if plugin is active or not. */
	active:boolean,
	/** The channel to which the plugin configuration is assigned to. */
	channel?:ModelTypes["Channel"],
	/** Configuration of the plugin. */
	configuration?:(ModelTypes["ConfigurationItem"] | undefined)[]
};
	["PluginConfigurationType"]: GraphQLTypes["PluginConfigurationType"];
	["PluginCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["PluginCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["PluginCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["Plugin"],
	/** A cursor for use in pagination. */
	cursor:string
};
	["PluginError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["PluginErrorCode"]
};
	/** An enumeration. */
["PluginErrorCode"]: GraphQLTypes["PluginErrorCode"];
	["PluginFilterInput"]: GraphQLTypes["PluginFilterInput"];
	["PluginSortField"]: GraphQLTypes["PluginSortField"];
	["PluginSortingInput"]: GraphQLTypes["PluginSortingInput"];
	["PluginStatusInChannelsInput"]: GraphQLTypes["PluginStatusInChannelsInput"];
	/** Update plugin configuration. */
["PluginUpdate"]: {
		plugin?:ModelTypes["Plugin"],
	pluginsErrors:ModelTypes["PluginError"][],
	errors:ModelTypes["PluginError"][]
};
	["PluginUpdateInput"]: GraphQLTypes["PluginUpdateInput"];
	/** Positive Decimal scalar implementation.

Should be used in places where value must be positive. */
["PositiveDecimal"]:any;
	/** An enumeration. */
["PostalCodeRuleInclusionTypeEnum"]: GraphQLTypes["PostalCodeRuleInclusionTypeEnum"];
	/** Represents preorder settings for product variant. */
["PreorderData"]: {
		/** The global preorder threshold for product variant. */
	globalThreshold?:number,
	/** Total number of sold product variant during preorder. */
	globalSoldUnits:number,
	/** Preorder end date. */
	endDate?:ModelTypes["DateTime"]
};
	["PreorderSettingsInput"]: GraphQLTypes["PreorderSettingsInput"];
	/** Represents preorder variant data for channel. */
["PreorderThreshold"]: {
		/** Preorder threshold for product variant in this channel. */
	quantity?:number,
	/** Number of sold product variant in this channel. */
	soldUnits:number
};
	["PriceInput"]: GraphQLTypes["PriceInput"];
	["PriceRangeInput"]: GraphQLTypes["PriceRangeInput"];
	/** Represents an individual item for sale in the storefront. */
["Product"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	seoTitle?:string,
	seoDescription?:string,
	name:string,
	description?:ModelTypes["JSONString"],
	productType:ModelTypes["ProductType"],
	slug:string,
	category?:ModelTypes["Category"],
	created:ModelTypes["DateTime"],
	updatedAt:ModelTypes["DateTime"],
	chargeTaxes:boolean,
	weight?:ModelTypes["Weight"],
	defaultVariant?:ModelTypes["ProductVariant"],
	rating?:number,
	/** Channel given to retrieve this product. Also used by federation gateway to resolve this object in a federated query. */
	channel?:string,
	/** Description of the product (JSON). */
	descriptionJson?:ModelTypes["JSONString"],
	/** The main thumbnail for a product. */
	thumbnail?:ModelTypes["Image"],
	/** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
	pricing?:ModelTypes["ProductPricingInfo"],
	/** Whether the product is in stock and visible or not. */
	isAvailable?:boolean,
	/** A type of tax. Assigned by enabled tax gateway */
	taxType?:ModelTypes["TaxType"],
	/** List of attributes assigned to this product. */
	attributes:ModelTypes["SelectedAttribute"][],
	/** List of availability in channels for the product. */
	channelListings?:ModelTypes["ProductChannelListing"][],
	/** Get a single product media by ID. */
	mediaById?:ModelTypes["ProductMedia"],
	/** Get a single product image by ID. */
	imageById?:ModelTypes["ProductImage"],
	/** List of variants for the product. */
	variants?:(ModelTypes["ProductVariant"] | undefined)[],
	/** List of media for the product. */
	media?:ModelTypes["ProductMedia"][],
	/** List of images for the product. */
	images?:(ModelTypes["ProductImage"] | undefined)[],
	/** List of collections for the product. */
	collections?:(ModelTypes["Collection"] | undefined)[],
	/** Returns translated product fields for the given language code. */
	translation?:ModelTypes["ProductTranslation"],
	/** Date when product is available for purchase.  */
	availableForPurchase?:ModelTypes["Date"],
	/** Whether the product is available for purchase. */
	isAvailableForPurchase?:boolean
};
	/** Assign attributes to a given product type. */
["ProductAttributeAssign"]: {
		/** The updated product type. */
	productType?:ModelTypes["ProductType"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	["ProductAttributeAssignInput"]: GraphQLTypes["ProductAttributeAssignInput"];
	/** New in Saleor 3.1. Update attributes assigned to product variant for given product type. */
["ProductAttributeAssignmentUpdate"]: {
		/** The updated product type. */
	productType?:ModelTypes["ProductType"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	["ProductAttributeAssignmentUpdateInput"]: GraphQLTypes["ProductAttributeAssignmentUpdateInput"];
	["ProductAttributeType"]: GraphQLTypes["ProductAttributeType"];
	/** Un-assign attributes from a given product type. */
["ProductAttributeUnassign"]: {
		/** The updated product type. */
	productType?:ModelTypes["ProductType"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	/** Deletes products. */
["ProductBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	/** Represents product channel listing. */
["ProductChannelListing"]: {
		id:string,
	publicationDate?:ModelTypes["Date"],
	isPublished:boolean,
	channel:ModelTypes["Channel"],
	visibleInListings:boolean,
	availableForPurchase?:ModelTypes["Date"],
	/** The price of the cheapest variant (including discounts). */
	discountedPrice?:ModelTypes["Money"],
	/** Purchase cost of product. */
	purchaseCost?:ModelTypes["MoneyRange"],
	/** Range of margin percentage value. */
	margin?:ModelTypes["Margin"],
	/** Whether the product is available for purchase. */
	isAvailableForPurchase?:boolean,
	/** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
	pricing?:ModelTypes["ProductPricingInfo"]
};
	["ProductChannelListingAddInput"]: GraphQLTypes["ProductChannelListingAddInput"];
	["ProductChannelListingError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["ProductErrorCode"],
	/** List of attributes IDs which causes the error. */
	attributes?:string[],
	/** List of attribute values IDs which causes the error. */
	values?:string[],
	/** List of channels IDs which causes the error. */
	channels?:string[],
	/** List of variants IDs which causes the error. */
	variants?:string[]
};
	/** Manage product's availability in channels. */
["ProductChannelListingUpdate"]: {
		/** An updated product instance. */
	product?:ModelTypes["Product"],
	productChannelListingErrors:ModelTypes["ProductChannelListingError"][],
	errors:ModelTypes["ProductChannelListingError"][]
};
	["ProductChannelListingUpdateInput"]: GraphQLTypes["ProductChannelListingUpdateInput"];
	["ProductCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["ProductCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["ProductCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["Product"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates a new product. */
["ProductCreate"]: {
		productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][],
	product?:ModelTypes["Product"]
};
	["ProductCreateInput"]: GraphQLTypes["ProductCreateInput"];
	/** Deletes a product. */
["ProductDelete"]: {
		productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][],
	product?:ModelTypes["Product"]
};
	["ProductError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["ProductErrorCode"],
	/** List of attributes IDs which causes the error. */
	attributes?:string[],
	/** List of attribute values IDs which causes the error. */
	values?:string[]
};
	/** An enumeration. */
["ProductErrorCode"]: GraphQLTypes["ProductErrorCode"];
	["ProductFieldEnum"]: GraphQLTypes["ProductFieldEnum"];
	["ProductFilterInput"]: GraphQLTypes["ProductFilterInput"];
	/** Represents a product image. */
["ProductImage"]: {
		/** The ID of the image. */
	id:string,
	/** The alt text of the image. */
	alt?:string,
	/** The new relative sorting position of the item (from -inf to +inf). 1 moves the
item one position forward, -1 moves the item one position backward, 0 leaves
the item unchanged. */
	sortOrder?:number,
	/** The URL of the image. */
	url:string
};
	["ProductInput"]: GraphQLTypes["ProductInput"];
	/** Represents a product media. */
["ProductMedia"]: {
		id:string,
	sortOrder?:number,
	alt:string,
	type:ModelTypes["ProductMediaType"],
	oembedData:ModelTypes["JSONString"],
	/** The URL of the media. */
	url:string
};
	/** Deletes product media. */
["ProductMediaBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	/** Create a media object (image or video URL) associated with product. For image,
this mutation must be sent as a `multipart` request. More detailed specs of the
upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
["ProductMediaCreate"]: {
		product?:ModelTypes["Product"],
	media?:ModelTypes["ProductMedia"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	["ProductMediaCreateInput"]: GraphQLTypes["ProductMediaCreateInput"];
	/** Deletes a product media. */
["ProductMediaDelete"]: {
		product?:ModelTypes["Product"],
	media?:ModelTypes["ProductMedia"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	/** Changes ordering of the product media. */
["ProductMediaReorder"]: {
		product?:ModelTypes["Product"],
	media?:ModelTypes["ProductMedia"][],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	/** An enumeration. */
["ProductMediaType"]: GraphQLTypes["ProductMediaType"];
	/** Updates a product media. */
["ProductMediaUpdate"]: {
		product?:ModelTypes["Product"],
	media?:ModelTypes["ProductMedia"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	["ProductMediaUpdateInput"]: GraphQLTypes["ProductMediaUpdateInput"];
	["ProductOrder"]: GraphQLTypes["ProductOrder"];
	["ProductOrderField"]: GraphQLTypes["ProductOrderField"];
	/** Represents availability of a product in the storefront. */
["ProductPricingInfo"]: {
		/** Whether it is in sale or not. */
	onSale?:boolean,
	/** The discount amount if in sale (null otherwise). */
	discount?:ModelTypes["TaxedMoney"],
	/** The discount amount in the local currency. */
	discountLocalCurrency?:ModelTypes["TaxedMoney"],
	/** The discounted price range of the product variants. */
	priceRange?:ModelTypes["TaxedMoneyRange"],
	/** The undiscounted price range of the product variants. */
	priceRangeUndiscounted?:ModelTypes["TaxedMoneyRange"],
	/** The discounted price range of the product variants in the local currency. */
	priceRangeLocalCurrency?:ModelTypes["TaxedMoneyRange"]
};
	/** Reorder product attribute values. */
["ProductReorderAttributeValues"]: {
		/** Product from which attribute values are reordered. */
	product?:ModelTypes["Product"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	["ProductStockFilterInput"]: GraphQLTypes["ProductStockFilterInput"];
	["ProductTranslatableContent"]: {
		id:string,
	seoTitle?:string,
	seoDescription?:string,
	name:string,
	description?:ModelTypes["JSONString"],
	/** Description of the product (JSON). */
	descriptionJson?:ModelTypes["JSONString"],
	/** Returns translated product fields for the given language code. */
	translation?:ModelTypes["ProductTranslation"],
	/** Represents an individual item for sale in the storefront. */
	product?:ModelTypes["Product"],
	/** List of product attribute values that can be translated. */
	attributeValues:ModelTypes["AttributeValueTranslatableContent"][]
};
	/** Creates/updates translations for a product. */
["ProductTranslate"]: {
		translationErrors:ModelTypes["TranslationError"][],
	errors:ModelTypes["TranslationError"][],
	product?:ModelTypes["Product"]
};
	["ProductTranslation"]: {
		id:string,
	/** Translation language. */
	language:ModelTypes["LanguageDisplay"],
	seoTitle?:string,
	seoDescription?:string,
	name?:string,
	description?:ModelTypes["JSONString"],
	/** Translated description of the product (JSON). */
	descriptionJson?:ModelTypes["JSONString"]
};
	/** Represents a type of product. It defines what attributes are available to products of this type. */
["ProductType"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	name:string,
	slug:string,
	hasVariants:boolean,
	isShippingRequired:boolean,
	isDigital:boolean,
	weight?:ModelTypes["Weight"],
	/** The product type kind. */
	kind:ModelTypes["ProductTypeKindEnum"],
	/** List of products of this type. */
	products?:ModelTypes["ProductCountableConnection"],
	/** A type of tax. Assigned by enabled tax gateway */
	taxType?:ModelTypes["TaxType"],
	/** Variant attributes of that product type. */
	variantAttributes?:(ModelTypes["Attribute"] | undefined)[],
	/** New in Saleor 3.1. Variant attributes of that product type with attached variant selection. */
	assignedVariantAttributes?:(ModelTypes["AssignedVariantAttribute"] | undefined)[],
	/** Product attributes of that product type. */
	productAttributes?:(ModelTypes["Attribute"] | undefined)[],
	availableAttributes?:ModelTypes["AttributeCountableConnection"]
};
	/** Deletes product types. */
["ProductTypeBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	["ProductTypeConfigurable"]: GraphQLTypes["ProductTypeConfigurable"];
	["ProductTypeCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["ProductTypeCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["ProductTypeCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["ProductType"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates a new product type. */
["ProductTypeCreate"]: {
		productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][],
	productType?:ModelTypes["ProductType"]
};
	/** Deletes a product type. */
["ProductTypeDelete"]: {
		productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][],
	productType?:ModelTypes["ProductType"]
};
	["ProductTypeEnum"]: GraphQLTypes["ProductTypeEnum"];
	["ProductTypeFilterInput"]: GraphQLTypes["ProductTypeFilterInput"];
	["ProductTypeInput"]: GraphQLTypes["ProductTypeInput"];
	/** An enumeration. */
["ProductTypeKindEnum"]: GraphQLTypes["ProductTypeKindEnum"];
	/** Reorder the attributes of a product type. */
["ProductTypeReorderAttributes"]: {
		/** Product type from which attributes are reordered. */
	productType?:ModelTypes["ProductType"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	["ProductTypeSortField"]: GraphQLTypes["ProductTypeSortField"];
	["ProductTypeSortingInput"]: GraphQLTypes["ProductTypeSortingInput"];
	/** Updates an existing product type. */
["ProductTypeUpdate"]: {
		productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][],
	productType?:ModelTypes["ProductType"]
};
	/** Updates an existing product. */
["ProductUpdate"]: {
		productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][],
	product?:ModelTypes["Product"]
};
	/** Represents a version of a product such as different size or color. */
["ProductVariant"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	name:string,
	sku?:string,
	product:ModelTypes["Product"],
	trackInventory:boolean,
	quantityLimitPerCustomer?:number,
	weight?:ModelTypes["Weight"],
	/** Channel given to retrieve this product variant. Also used by federation
gateway to resolve this object in a federated query. */
	channel?:string,
	/** List of price information in channels for the product. */
	channelListings?:ModelTypes["ProductVariantChannelListing"][],
	/** Lists the storefront variant's pricing, the current price and discounts, only meant for displaying. */
	pricing?:ModelTypes["VariantPricingInfo"],
	/** List of attributes assigned to this variant. */
	attributes:ModelTypes["SelectedAttribute"][],
	/** Gross margin percentage value. */
	margin?:number,
	/** Total quantity ordered. */
	quantityOrdered?:number,
	/** Total revenue generated by a variant in given period of time. Note: this field
should be queried using `reportProductSales` query as it uses optimizations
suitable for such calculations. */
	revenue?:ModelTypes["TaxedMoney"],
	/** List of images for the product variant. */
	images?:(ModelTypes["ProductImage"] | undefined)[],
	/** List of media for the product variant. */
	media?:ModelTypes["ProductMedia"][],
	/** Returns translated product variant fields for the given language code. */
	translation?:ModelTypes["ProductVariantTranslation"],
	/** Digital content for the product variant. */
	digitalContent?:ModelTypes["DigitalContent"],
	/** Stocks for the product variant. */
	stocks?:(ModelTypes["Stock"] | undefined)[],
	/** Quantity of a product available for sale in one checkout. Field value will be
`null` when no `limitQuantityPerCheckout` in global settings has been set, and
`productVariant` stocks are not tracked. */
	quantityAvailable?:number,
	/** New in Saleor 3.1. Preorder data for product variant. Note: this feature is in
a preview state and can be subject to changes at later point. */
	preorder?:ModelTypes["PreorderData"],
	created:ModelTypes["DateTime"],
	updatedAt:ModelTypes["DateTime"]
};
	/** Creates product variants for a given product. */
["ProductVariantBulkCreate"]: {
		/** Returns how many objects were created. */
	count:number,
	/** List of the created variants. */
	productVariants:ModelTypes["ProductVariant"][],
	bulkProductErrors:ModelTypes["BulkProductError"][],
	errors:ModelTypes["BulkProductError"][]
};
	["ProductVariantBulkCreateInput"]: GraphQLTypes["ProductVariantBulkCreateInput"];
	/** Deletes product variants. */
["ProductVariantBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	/** Represents product varaint channel listing. */
["ProductVariantChannelListing"]: {
		id:string,
	channel:ModelTypes["Channel"],
	price?:ModelTypes["Money"],
	/** Cost price of the variant. */
	costPrice?:ModelTypes["Money"],
	/** Gross margin percentage value. */
	margin?:number,
	/** New in Saleor 3.1. Preorder variant data. Note: this feature is in a preview
state and can be subject to changes at later point. */
	preorderThreshold?:ModelTypes["PreorderThreshold"]
};
	["ProductVariantChannelListingAddInput"]: GraphQLTypes["ProductVariantChannelListingAddInput"];
	/** Manage product variant prices in channels. */
["ProductVariantChannelListingUpdate"]: {
		/** An updated product variant instance. */
	variant?:ModelTypes["ProductVariant"],
	productChannelListingErrors:ModelTypes["ProductChannelListingError"][],
	errors:ModelTypes["ProductChannelListingError"][]
};
	["ProductVariantCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["ProductVariantCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["ProductVariantCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["ProductVariant"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates a new variant for a product. */
["ProductVariantCreate"]: {
		productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][],
	productVariant?:ModelTypes["ProductVariant"]
};
	["ProductVariantCreateInput"]: GraphQLTypes["ProductVariantCreateInput"];
	/** Deletes a product variant. */
["ProductVariantDelete"]: {
		productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][],
	productVariant?:ModelTypes["ProductVariant"]
};
	["ProductVariantFilterInput"]: GraphQLTypes["ProductVariantFilterInput"];
	["ProductVariantInput"]: GraphQLTypes["ProductVariantInput"];
	/** New in Saleor 3.1. Deactivates product variant preorder. It changes all preorder
allocation into regular allocation. Note: this feature is in a preview state and
can be subject to changes at later point. */
["ProductVariantPreorderDeactivate"]: {
		/** Product variant with ended preorder. */
	productVariant?:ModelTypes["ProductVariant"],
	errors:ModelTypes["ProductError"][]
};
	/** Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook. */
["ProductVariantReorder"]: {
		product?:ModelTypes["Product"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	/** Reorder product variant attribute values. */
["ProductVariantReorderAttributeValues"]: {
		/** Product variant from which attribute values are reordered. */
	productVariant?:ModelTypes["ProductVariant"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	/** Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook. */
["ProductVariantSetDefault"]: {
		product?:ModelTypes["Product"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	/** Creates stocks for product variant. */
["ProductVariantStocksCreate"]: {
		/** Updated product variant. */
	productVariant?:ModelTypes["ProductVariant"],
	bulkStockErrors:ModelTypes["BulkStockError"][],
	errors:ModelTypes["BulkStockError"][]
};
	/** Delete stocks from product variant. */
["ProductVariantStocksDelete"]: {
		/** Updated product variant. */
	productVariant?:ModelTypes["ProductVariant"],
	stockErrors:ModelTypes["StockError"][],
	errors:ModelTypes["StockError"][]
};
	/** Update stocks for product variant. */
["ProductVariantStocksUpdate"]: {
		/** Updated product variant. */
	productVariant?:ModelTypes["ProductVariant"],
	bulkStockErrors:ModelTypes["BulkStockError"][],
	errors:ModelTypes["BulkStockError"][]
};
	["ProductVariantTranslatableContent"]: {
		id:string,
	name:string,
	/** Returns translated product variant fields for the given language code. */
	translation?:ModelTypes["ProductVariantTranslation"],
	/** Represents a version of a product such as different size or color. */
	productVariant?:ModelTypes["ProductVariant"],
	/** List of product variant attribute values that can be translated. */
	attributeValues:ModelTypes["AttributeValueTranslatableContent"][]
};
	/** Creates/updates translations for a product variant. */
["ProductVariantTranslate"]: {
		translationErrors:ModelTypes["TranslationError"][],
	errors:ModelTypes["TranslationError"][],
	productVariant?:ModelTypes["ProductVariant"]
};
	["ProductVariantTranslation"]: {
		id:string,
	/** Translation language. */
	language:ModelTypes["LanguageDisplay"],
	name:string
};
	/** Updates an existing variant for product. */
["ProductVariantUpdate"]: {
		productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][],
	productVariant?:ModelTypes["ProductVariant"]
};
	["PublishableChannelListingInput"]: GraphQLTypes["PublishableChannelListingInput"];
	["Query"]: {
		/** Look up a webhook by ID. */
	webhook?:ModelTypes["Webhook"],
	/** List of all available webhook events. */
	webhookEvents?:(ModelTypes["WebhookEvent"] | undefined)[],
	/** Retrieve a sample payload for a given webhook event based on real data. It can
be useful for some integrations where sample payload is required. */
	webhookSamplePayload?:ModelTypes["JSONString"],
	/** Look up a warehouse by ID. */
	warehouse?:ModelTypes["Warehouse"],
	/** List of warehouses. */
	warehouses?:ModelTypes["WarehouseCountableConnection"],
	/** Returns a list of all translatable items of a given kind. */
	translations?:ModelTypes["TranslatableItemConnection"],
	translation?:ModelTypes["TranslatableItem"],
	/** Look up a stock by ID */
	stock?:ModelTypes["Stock"],
	/** List of stocks. */
	stocks?:ModelTypes["StockCountableConnection"],
	/** Return information about the shop. */
	shop:ModelTypes["Shop"],
	/** Order related settings from site settings. */
	orderSettings?:ModelTypes["OrderSettings"],
	/** Gift card related settings from site settings. */
	giftCardSettings:ModelTypes["GiftCardSettings"],
	/** Look up a shipping zone by ID. */
	shippingZone?:ModelTypes["ShippingZone"],
	/** List of the shop's shipping zones. */
	shippingZones?:ModelTypes["ShippingZoneCountableConnection"],
	/** Look up digital content by ID. */
	digitalContent?:ModelTypes["DigitalContent"],
	/** List of digital content. */
	digitalContents?:ModelTypes["DigitalContentCountableConnection"],
	/** List of the shop's categories. */
	categories?:ModelTypes["CategoryCountableConnection"],
	/** Look up a category by ID or slug. */
	category?:ModelTypes["Category"],
	/** Look up a collection by ID. */
	collection?:ModelTypes["Collection"],
	/** List of the shop's collections. */
	collections?:ModelTypes["CollectionCountableConnection"],
	/** Look up a product by ID. */
	product?:ModelTypes["Product"],
	/** List of the shop's products. */
	products?:ModelTypes["ProductCountableConnection"],
	/** Look up a product type by ID. */
	productType?:ModelTypes["ProductType"],
	/** List of the shop's product types. */
	productTypes?:ModelTypes["ProductTypeCountableConnection"],
	/** Look up a product variant by ID or SKU. */
	productVariant?:ModelTypes["ProductVariant"],
	/** List of product variants. */
	productVariants?:ModelTypes["ProductVariantCountableConnection"],
	/** List of top selling products. */
	reportProductSales?:ModelTypes["ProductVariantCountableConnection"],
	/** Look up a payment by ID. */
	payment?:ModelTypes["Payment"],
	/** List of payments. */
	payments?:ModelTypes["PaymentCountableConnection"],
	/** Look up a page by ID or slug. */
	page?:ModelTypes["Page"],
	/** List of the shop's pages. */
	pages?:ModelTypes["PageCountableConnection"],
	/** Look up a page type by ID. */
	pageType?:ModelTypes["PageType"],
	/** List of the page types. */
	pageTypes?:ModelTypes["PageTypeCountableConnection"],
	/** List of activity events to display on homepage (at the moment it only contains order-events). */
	homepageEvents?:ModelTypes["OrderEventCountableConnection"],
	/** Look up an order by ID. */
	order?:ModelTypes["Order"],
	/** List of orders. */
	orders?:ModelTypes["OrderCountableConnection"],
	/** List of draft orders. */
	draftOrders?:ModelTypes["OrderCountableConnection"],
	/** Return the total sales amount from a specific period. */
	ordersTotal?:ModelTypes["TaxedMoney"],
	/** Look up an order by token. */
	orderByToken?:ModelTypes["Order"],
	/** Look up a navigation menu by ID or name. */
	menu?:ModelTypes["Menu"],
	/** List of the storefront's menus. */
	menus?:ModelTypes["MenuCountableConnection"],
	/** Look up a menu item by ID. */
	menuItem?:ModelTypes["MenuItem"],
	/** List of the storefronts's menu items. */
	menuItems?:ModelTypes["MenuItemCountableConnection"],
	/** Look up a gift card by ID. */
	giftCard?:ModelTypes["GiftCard"],
	/** List of gift cards. */
	giftCards?:ModelTypes["GiftCardCountableConnection"],
	/** New in Saleor 3.1. List of gift card currencies. Note: this feature is in a
preview state and can be subject to changes at later point. */
	giftCardCurrencies:string[],
	/** New in Saleor 3.1. List of gift card tags. Note: this feature is in a preview
state and can be subject to changes at later point. */
	giftCardTags?:ModelTypes["GiftCardTagCountableConnection"],
	/** Look up a plugin by ID. */
	plugin?:ModelTypes["Plugin"],
	/** List of plugins. */
	plugins?:ModelTypes["PluginCountableConnection"],
	/** Look up a sale by ID. */
	sale?:ModelTypes["Sale"],
	/** List of the shop's sales. */
	sales?:ModelTypes["SaleCountableConnection"],
	/** Look up a voucher by ID. */
	voucher?:ModelTypes["Voucher"],
	/** List of the shop's vouchers. */
	vouchers?:ModelTypes["VoucherCountableConnection"],
	/** Look up a export file by ID. */
	exportFile?:ModelTypes["ExportFile"],
	/** List of export files. */
	exportFiles?:ModelTypes["ExportFileCountableConnection"],
	/** List of all tax rates available from tax gateway. */
	taxTypes?:(ModelTypes["TaxType"] | undefined)[],
	/** Look up a checkout by token and slug of channel. */
	checkout?:ModelTypes["Checkout"],
	/** List of checkouts. */
	checkouts?:ModelTypes["CheckoutCountableConnection"],
	/** List of checkout lines. */
	checkoutLines?:ModelTypes["CheckoutLineCountableConnection"],
	/** Look up a channel by ID. */
	channel?:ModelTypes["Channel"],
	/** List of all channels. */
	channels?:ModelTypes["Channel"][],
	/** List of the shop's attributes. */
	attributes?:ModelTypes["AttributeCountableConnection"],
	/** Look up an attribute by ID. */
	attribute?:ModelTypes["Attribute"],
	/** List of all apps installations */
	appsInstallations:ModelTypes["AppInstallation"][],
	/** List of the apps. */
	apps?:ModelTypes["AppCountableConnection"],
	/** Look up an app by ID. If ID is not provided, return the currently authenticated app. */
	app?:ModelTypes["App"],
	/** New in Saleor 3.1. List of all extensions. Note: this feature is in a preview
state and can be subject to changes at later point. */
	appExtensions?:ModelTypes["AppExtensionCountableConnection"],
	/** New in Saleor 3.1. Look up an app extension by ID. Note: this feature is in a
preview state and can be subject to changes at later point. */
	appExtension?:ModelTypes["AppExtension"],
	/** Returns address validation rules. */
	addressValidationRules?:ModelTypes["AddressValidationData"],
	/** Look up an address by ID. */
	address?:ModelTypes["Address"],
	/** List of the shop's customers. */
	customers?:ModelTypes["UserCountableConnection"],
	/** List of permission groups. */
	permissionGroups?:ModelTypes["GroupCountableConnection"],
	/** Look up permission group by ID. */
	permissionGroup?:ModelTypes["Group"],
	/** Return the currently authenticated user. */
	me?:ModelTypes["User"],
	/** List of the shop's staff users. */
	staffUsers?:ModelTypes["UserCountableConnection"],
	/** Look up a user by ID or email address. */
	user?:ModelTypes["User"],
	_entities?:(ModelTypes["_Entity"] | undefined)[],
	_service?:ModelTypes["_Service"]
};
	/** Represents a reduced VAT rate for a particular type of goods. */
["ReducedRate"]: {
		/** Reduced VAT rate in percent. */
	rate:number,
	/** A type of goods. */
	rateType:string
};
	/** Refresh JWT token. Mutation tries to take refreshToken from the input.If it
fails it will try to take refreshToken from the http-only cookie -refreshToken.
csrfToken is required when refreshToken is provided as a cookie. */
["RefreshToken"]: {
		/** JWT token, required to authenticate. */
	token?:string,
	/** A user instance. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	["ReorderInput"]: GraphQLTypes["ReorderInput"];
	["ReportingPeriod"]: GraphQLTypes["ReportingPeriod"];
	/** Request email change of the logged in user. */
["RequestEmailChange"]: {
		/** A user instance. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** Sends an email with the account password modification link. */
["RequestPasswordReset"]: {
		accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
["Sale"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	name:string,
	type:ModelTypes["SaleType"],
	startDate:ModelTypes["DateTime"],
	endDate?:ModelTypes["DateTime"],
	created:ModelTypes["DateTime"],
	updatedAt:ModelTypes["DateTime"],
	/** List of categories this sale applies to. */
	categories?:ModelTypes["CategoryCountableConnection"],
	/** List of collections this sale applies to. */
	collections?:ModelTypes["CollectionCountableConnection"],
	/** List of products this sale applies to. */
	products?:ModelTypes["ProductCountableConnection"],
	/** New in Saleor 3.1. List of product variants this sale applies to. */
	variants?:ModelTypes["ProductVariantCountableConnection"],
	/** Returns translated sale fields for the given language code. */
	translation?:ModelTypes["SaleTranslation"],
	/** List of channels available for the sale. */
	channelListings?:ModelTypes["SaleChannelListing"][],
	/** Sale value. */
	discountValue?:number,
	/** Currency code for sale. */
	currency?:string
};
	/** Adds products, categories, collections to a voucher. */
["SaleAddCatalogues"]: {
		/** Sale of which catalogue IDs will be modified. */
	sale?:ModelTypes["Sale"],
	discountErrors:ModelTypes["DiscountError"][],
	errors:ModelTypes["DiscountError"][]
};
	/** Deletes sales. */
["SaleBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	discountErrors:ModelTypes["DiscountError"][],
	errors:ModelTypes["DiscountError"][]
};
	/** Represents sale channel listing. */
["SaleChannelListing"]: {
		id:string,
	channel:ModelTypes["Channel"],
	discountValue:number,
	currency:string
};
	["SaleChannelListingAddInput"]: GraphQLTypes["SaleChannelListingAddInput"];
	["SaleChannelListingInput"]: GraphQLTypes["SaleChannelListingInput"];
	/** Manage sale's availability in channels. */
["SaleChannelListingUpdate"]: {
		/** An updated sale instance. */
	sale?:ModelTypes["Sale"],
	discountErrors:ModelTypes["DiscountError"][],
	errors:ModelTypes["DiscountError"][]
};
	["SaleCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["SaleCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["SaleCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["Sale"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates a new sale. */
["SaleCreate"]: {
		discountErrors:ModelTypes["DiscountError"][],
	errors:ModelTypes["DiscountError"][],
	sale?:ModelTypes["Sale"]
};
	/** Deletes a sale. */
["SaleDelete"]: {
		discountErrors:ModelTypes["DiscountError"][],
	errors:ModelTypes["DiscountError"][],
	sale?:ModelTypes["Sale"]
};
	["SaleFilterInput"]: GraphQLTypes["SaleFilterInput"];
	["SaleInput"]: GraphQLTypes["SaleInput"];
	/** Removes products, categories, collections from a sale. */
["SaleRemoveCatalogues"]: {
		/** Sale of which catalogue IDs will be modified. */
	sale?:ModelTypes["Sale"],
	discountErrors:ModelTypes["DiscountError"][],
	errors:ModelTypes["DiscountError"][]
};
	["SaleSortField"]: GraphQLTypes["SaleSortField"];
	["SaleSortingInput"]: GraphQLTypes["SaleSortingInput"];
	["SaleTranslatableContent"]: {
		id:string,
	name:string,
	/** Returns translated sale fields for the given language code. */
	translation?:ModelTypes["SaleTranslation"],
	/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
	sale?:ModelTypes["Sale"]
};
	/** Creates/updates translations for a sale. */
["SaleTranslate"]: {
		translationErrors:ModelTypes["TranslationError"][],
	errors:ModelTypes["TranslationError"][],
	sale?:ModelTypes["Sale"]
};
	["SaleTranslation"]: {
		id:string,
	/** Translation language. */
	language:ModelTypes["LanguageDisplay"],
	name?:string
};
	["SaleType"]: GraphQLTypes["SaleType"];
	/** Updates a sale. */
["SaleUpdate"]: {
		discountErrors:ModelTypes["DiscountError"][],
	errors:ModelTypes["DiscountError"][],
	sale?:ModelTypes["Sale"]
};
	/** Represents a custom attribute. */
["SelectedAttribute"]: {
		/** Name of an attribute displayed in the interface. */
	attribute:ModelTypes["Attribute"],
	/** Values of an attribute. */
	values?:ModelTypes["AttributeValue"][]
};
	["SeoInput"]: GraphQLTypes["SeoInput"];
	/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
["SetPassword"]: {
		/** JWT token, required to authenticate. */
	token?:string,
	/** JWT refresh token, required to re-generate access token. */
	refreshToken?:string,
	/** CSRF token required to re-generate access token. */
	csrfToken?:string,
	/** A user instance. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	["ShippingError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["ShippingErrorCode"],
	/** List of warehouse IDs which causes the error. */
	warehouses?:string[],
	/** List of channels IDs which causes the error. */
	channels?:string[]
};
	/** An enumeration. */
["ShippingErrorCode"]: GraphQLTypes["ShippingErrorCode"];
	/** Shipping methods that can be used as means of shipping for orders and checkouts. */
["ShippingMethod"]: {
		/** Unique ID of ShippingMethod available for Order. */
	id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	/** Type of the shipping method. */
	type?:ModelTypes["ShippingMethodTypeEnum"],
	/** Shipping method name. */
	name:string,
	/** Shipping method description (JSON). */
	description?:ModelTypes["JSONString"],
	/** Maximum delivery days for this shipping method. */
	maximumDeliveryDays?:number,
	/** Minimum delivery days for this shipping method. */
	minimumDeliveryDays?:number,
	/** Maximum order weight for this shipping method. */
	maximumOrderWeight?:ModelTypes["Weight"],
	/** Minimum order weight for this shipping method. */
	minimumOrderWeight?:ModelTypes["Weight"],
	/** Returns translated shipping method fields for the given language code. */
	translation?:ModelTypes["ShippingMethodTranslation"],
	/** The price of selected shipping method. */
	price:ModelTypes["Money"],
	/** Maximum order price for this shipping method. */
	maximumOrderPrice?:ModelTypes["Money"],
	/** Minimal order price for this shipping method. */
	minimumOrderPrice?:ModelTypes["Money"],
	/** Describes if this shipping method is active and can be selected. */
	active:boolean,
	/** Message connected to this shipping method. */
	message?:string
};
	/** Represents shipping method channel listing. */
["ShippingMethodChannelListing"]: {
		id:string,
	channel:ModelTypes["Channel"],
	maximumOrderPrice?:ModelTypes["Money"],
	minimumOrderPrice?:ModelTypes["Money"],
	price?:ModelTypes["Money"]
};
	["ShippingMethodChannelListingAddInput"]: GraphQLTypes["ShippingMethodChannelListingAddInput"];
	["ShippingMethodChannelListingInput"]: GraphQLTypes["ShippingMethodChannelListingInput"];
	/** Manage shipping method's availability in channels. */
["ShippingMethodChannelListingUpdate"]: {
		/** An updated shipping method instance. */
	shippingMethod?:ModelTypes["ShippingMethodType"],
	shippingErrors:ModelTypes["ShippingError"][],
	errors:ModelTypes["ShippingError"][]
};
	/** Represents shipping method postal code rule. */
["ShippingMethodPostalCodeRule"]: {
		/** The ID of the object. */
	id:string,
	/** Start address range. */
	start?:string,
	/** End address range. */
	end?:string,
	/** Inclusion type of the postal code rule. */
	inclusionType?:ModelTypes["PostalCodeRuleInclusionTypeEnum"]
};
	["ShippingMethodTranslatableContent"]: {
		id:string,
	name:string,
	description?:ModelTypes["JSONString"],
	/** Returns translated shipping method fields for the given language code. */
	translation?:ModelTypes["ShippingMethodTranslation"],
	/** Shipping method are the methods you'll use to get customer's orders  to them. They are directly exposed to the customers. */
	shippingMethod?:ModelTypes["ShippingMethodType"]
};
	["ShippingMethodTranslation"]: {
		id:string,
	/** Translation language. */
	language:ModelTypes["LanguageDisplay"],
	name?:string,
	description?:ModelTypes["JSONString"]
};
	/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
["ShippingMethodType"]: {
		/** Shipping method ID. */
	id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	/** Shipping method name. */
	name:string,
	/** Shipping method description. */
	description?:ModelTypes["JSONString"],
	/** Type of the shipping method. */
	type?:ModelTypes["ShippingMethodTypeEnum"],
	/** Returns translated shipping method fields for the given language code. */
	translation?:ModelTypes["ShippingMethodTranslation"],
	/** List of channels available for the method. */
	channelListings?:ModelTypes["ShippingMethodChannelListing"][],
	/** The price of the cheapest variant (including discounts). */
	maximumOrderPrice?:ModelTypes["Money"],
	/** The price of the cheapest variant (including discounts). */
	minimumOrderPrice?:ModelTypes["Money"],
	/** Postal code ranges rule of exclusion or inclusion of the shipping method. */
	postalCodeRules?:(ModelTypes["ShippingMethodPostalCodeRule"] | undefined)[],
	/** List of excluded products for the shipping method. */
	excludedProducts?:ModelTypes["ProductCountableConnection"],
	/** Minimum order weight to use this shipping method. */
	minimumOrderWeight?:ModelTypes["Weight"],
	/** Maximum order weight to use this shipping method. */
	maximumOrderWeight?:ModelTypes["Weight"],
	/** Maximum number of days for delivery. */
	maximumDeliveryDays?:number,
	/** Minimal number of days for delivery. */
	minimumDeliveryDays?:number
};
	/** An enumeration. */
["ShippingMethodTypeEnum"]: GraphQLTypes["ShippingMethodTypeEnum"];
	["ShippingPostalCodeRulesCreateInputRange"]: GraphQLTypes["ShippingPostalCodeRulesCreateInputRange"];
	/** Deletes shipping prices. */
["ShippingPriceBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	shippingErrors:ModelTypes["ShippingError"][],
	errors:ModelTypes["ShippingError"][]
};
	/** Creates a new shipping price. */
["ShippingPriceCreate"]: {
		/** A shipping zone to which the shipping method belongs. */
	shippingZone?:ModelTypes["ShippingZone"],
	shippingMethod?:ModelTypes["ShippingMethodType"],
	shippingErrors:ModelTypes["ShippingError"][],
	errors:ModelTypes["ShippingError"][]
};
	/** Deletes a shipping price. */
["ShippingPriceDelete"]: {
		/** A shipping method to delete. */
	shippingMethod?:ModelTypes["ShippingMethodType"],
	/** A shipping zone to which the shipping method belongs. */
	shippingZone?:ModelTypes["ShippingZone"],
	shippingErrors:ModelTypes["ShippingError"][],
	errors:ModelTypes["ShippingError"][]
};
	/** Exclude products from shipping price. */
["ShippingPriceExcludeProducts"]: {
		/** A shipping method with new list of excluded products. */
	shippingMethod?:ModelTypes["ShippingMethodType"],
	shippingErrors:ModelTypes["ShippingError"][],
	errors:ModelTypes["ShippingError"][]
};
	["ShippingPriceExcludeProductsInput"]: GraphQLTypes["ShippingPriceExcludeProductsInput"];
	["ShippingPriceInput"]: GraphQLTypes["ShippingPriceInput"];
	/** Remove product from excluded list for shipping price. */
["ShippingPriceRemoveProductFromExclude"]: {
		/** A shipping method with new list of excluded products. */
	shippingMethod?:ModelTypes["ShippingMethodType"],
	shippingErrors:ModelTypes["ShippingError"][],
	errors:ModelTypes["ShippingError"][]
};
	/** Creates/updates translations for a shipping method. */
["ShippingPriceTranslate"]: {
		translationErrors:ModelTypes["TranslationError"][],
	errors:ModelTypes["TranslationError"][],
	shippingMethod?:ModelTypes["ShippingMethodType"]
};
	["ShippingPriceTranslationInput"]: GraphQLTypes["ShippingPriceTranslationInput"];
	/** Updates a new shipping price. */
["ShippingPriceUpdate"]: {
		/** A shipping zone to which the shipping method belongs. */
	shippingZone?:ModelTypes["ShippingZone"],
	shippingMethod?:ModelTypes["ShippingMethodType"],
	shippingErrors:ModelTypes["ShippingError"][],
	errors:ModelTypes["ShippingError"][]
};
	/** Represents a shipping zone in the shop. Zones are the concept used only for
grouping shipping methods in the dashboard, and are never exposed to the
customers directly. */
["ShippingZone"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	name:string,
	default:boolean,
	/** Lowest and highest prices for the shipping. */
	priceRange?:ModelTypes["MoneyRange"],
	/** List of countries available for the method. */
	countries?:(ModelTypes["CountryDisplay"] | undefined)[],
	/** List of shipping methods available for orders shipped to countries within this shipping zone. */
	shippingMethods?:(ModelTypes["ShippingMethodType"] | undefined)[],
	/** List of warehouses for shipping zone. */
	warehouses:ModelTypes["Warehouse"][],
	/** List of channels for shipping zone. */
	channels:ModelTypes["Channel"][],
	/** Description of a shipping zone. */
	description?:string
};
	/** Deletes shipping zones. */
["ShippingZoneBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	shippingErrors:ModelTypes["ShippingError"][],
	errors:ModelTypes["ShippingError"][]
};
	["ShippingZoneCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["ShippingZoneCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["ShippingZoneCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["ShippingZone"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates a new shipping zone. */
["ShippingZoneCreate"]: {
		shippingErrors:ModelTypes["ShippingError"][],
	errors:ModelTypes["ShippingError"][],
	shippingZone?:ModelTypes["ShippingZone"]
};
	["ShippingZoneCreateInput"]: GraphQLTypes["ShippingZoneCreateInput"];
	/** Deletes a shipping zone. */
["ShippingZoneDelete"]: {
		shippingErrors:ModelTypes["ShippingError"][],
	errors:ModelTypes["ShippingError"][],
	shippingZone?:ModelTypes["ShippingZone"]
};
	["ShippingZoneFilterInput"]: GraphQLTypes["ShippingZoneFilterInput"];
	/** Updates a new shipping zone. */
["ShippingZoneUpdate"]: {
		shippingErrors:ModelTypes["ShippingError"][],
	errors:ModelTypes["ShippingError"][],
	shippingZone?:ModelTypes["ShippingZone"]
};
	["ShippingZoneUpdateInput"]: GraphQLTypes["ShippingZoneUpdateInput"];
	/** Represents a shop resource containing general shop data and configuration. */
["Shop"]: {
		/** List of available payment gateways. */
	availablePaymentGateways:ModelTypes["PaymentGateway"][],
	/** List of available external authentications. */
	availableExternalAuthentications:ModelTypes["ExternalAuthentication"][],
	/** Shipping methods that are available for the shop. */
	availableShippingMethods?:(ModelTypes["ShippingMethod"] | undefined)[],
	/** New in Saleor 3.1. List of all currencies supported by shop's channels. */
	channelCurrencies:string[],
	/** List of countries available in the shop. */
	countries:ModelTypes["CountryDisplay"][],
	/** Shop's default country. */
	defaultCountry?:ModelTypes["CountryDisplay"],
	/** Default shop's email sender's name. */
	defaultMailSenderName?:string,
	/** Default shop's email sender's address. */
	defaultMailSenderAddress?:string,
	/** Shop's description. */
	description?:string,
	/** Shop's domain data. */
	domain:ModelTypes["Domain"],
	/** List of the shops's supported languages. */
	languages?:ModelTypes["LanguageDisplay"][],
	/** Shop's name. */
	name:string,
	/** List of available permissions. */
	permissions?:ModelTypes["Permission"][],
	/** List of possible phone prefixes. */
	phonePrefixes?:string[],
	/** Header text. */
	headerText?:string,
	/** Include taxes in prices. */
	includeTaxesInPrices:boolean,
	/** New in Saleor 3.1. Automatically approve all new fulfillments. */
	fulfillmentAutoApprove:boolean,
	/** New in Saleor 3.1. Allow to approve fulfillments which are unpaid. */
	fulfillmentAllowUnpaid:boolean,
	/** Display prices with tax in store. */
	displayGrossPrices:boolean,
	/** Charge taxes on shipping. */
	chargeTaxesOnShipping:boolean,
	/** Enable inventory tracking. */
	trackInventoryByDefault?:boolean,
	/** Default weight unit. */
	defaultWeightUnit?:ModelTypes["WeightUnitsEnum"],
	/** Returns translated shop fields for the given language code. */
	translation?:ModelTypes["ShopTranslation"],
	/** Enable automatic fulfillment for all digital products. */
	automaticFulfillmentDigitalProducts?:boolean,
	/** New in Saleor 3.1. Default number of minutes stock will be reserved for
anonymous checkout or null when stock reservation is disabled. */
	reserveStockDurationAnonymousUser?:number,
	/** New in Saleor 3.1. Default number of minutes stock will be reserved for
authenticated checkout or null when stock reservation is disabled. */
	reserveStockDurationAuthenticatedUser?:number,
	/** New in Saleor 3.1. Default number of maximum line quantity in single checkout
(per single checkout line). Note: this feature is in a preview state and can
be subject to changes at later point. */
	limitQuantityPerCheckout?:number,
	/** Default number of max downloads per digital content URL. */
	defaultDigitalMaxDownloads?:number,
	/** Default number of days which digital content URL will be valid. */
	defaultDigitalUrlValidDays?:number,
	/** Company address. */
	companyAddress?:ModelTypes["Address"],
	/** URL of a view where customers can set their password. */
	customerSetPasswordUrl?:string,
	/** List of staff notification recipients. */
	staffNotificationRecipients?:(ModelTypes["StaffNotificationRecipient"] | undefined)[],
	/** Resource limitations and current usage if any set for a shop */
	limits:ModelTypes["LimitInfo"],
	/** Saleor API version. */
	version:string
};
	/** Update the shop's address. If the `null` value is passed, the currently selected address will be deleted. */
["ShopAddressUpdate"]: {
		/** Updated shop. */
	shop?:ModelTypes["Shop"],
	shopErrors:ModelTypes["ShopError"][],
	errors:ModelTypes["ShopError"][]
};
	/** Updates site domain of the shop. */
["ShopDomainUpdate"]: {
		/** Updated shop. */
	shop?:ModelTypes["Shop"],
	shopErrors:ModelTypes["ShopError"][],
	errors:ModelTypes["ShopError"][]
};
	["ShopError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["ShopErrorCode"]
};
	/** An enumeration. */
["ShopErrorCode"]: GraphQLTypes["ShopErrorCode"];
	/** Fetch tax rates. */
["ShopFetchTaxRates"]: {
		/** Updated shop. */
	shop?:ModelTypes["Shop"],
	shopErrors:ModelTypes["ShopError"][],
	errors:ModelTypes["ShopError"][]
};
	["ShopSettingsInput"]: GraphQLTypes["ShopSettingsInput"];
	/** Creates/updates translations for shop settings. */
["ShopSettingsTranslate"]: {
		/** Updated shop settings. */
	shop?:ModelTypes["Shop"],
	translationErrors:ModelTypes["TranslationError"][],
	errors:ModelTypes["TranslationError"][]
};
	["ShopSettingsTranslationInput"]: GraphQLTypes["ShopSettingsTranslationInput"];
	/** Updates shop settings. */
["ShopSettingsUpdate"]: {
		/** Updated shop. */
	shop?:ModelTypes["Shop"],
	shopErrors:ModelTypes["ShopError"][],
	errors:ModelTypes["ShopError"][]
};
	["ShopTranslation"]: {
		id:string,
	/** Translation language. */
	language:ModelTypes["LanguageDisplay"],
	headerText:string,
	description:string
};
	["SiteDomainInput"]: GraphQLTypes["SiteDomainInput"];
	/** Deletes staff users. */
["StaffBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	staffErrors:ModelTypes["StaffError"][],
	errors:ModelTypes["StaffError"][]
};
	/** Creates a new staff user. */
["StaffCreate"]: {
		staffErrors:ModelTypes["StaffError"][],
	errors:ModelTypes["StaffError"][],
	user?:ModelTypes["User"]
};
	["StaffCreateInput"]: GraphQLTypes["StaffCreateInput"];
	/** Deletes a staff user. */
["StaffDelete"]: {
		staffErrors:ModelTypes["StaffError"][],
	errors:ModelTypes["StaffError"][],
	user?:ModelTypes["User"]
};
	["StaffError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["AccountErrorCode"],
	/** A type of address that causes the error. */
	addressType?:ModelTypes["AddressTypeEnum"],
	/** List of permissions which causes the error. */
	permissions?:ModelTypes["PermissionEnum"][],
	/** List of permission group IDs which cause the error. */
	groups?:string[],
	/** List of user IDs which causes the error. */
	users?:string[]
};
	["StaffMemberStatus"]: GraphQLTypes["StaffMemberStatus"];
	/** Represents a recipient of email notifications send by Saleor, such as
notifications about new orders. Notifications can be assigned to staff users or
arbitrary email addresses. */
["StaffNotificationRecipient"]: {
		id:string,
	/** Returns a user subscribed to email notifications. */
	user?:ModelTypes["User"],
	/** Returns email address of a user subscribed to email notifications. */
	email?:string,
	/** Determines if a notification active. */
	active?:boolean
};
	/** Creates a new staff notification recipient. */
["StaffNotificationRecipientCreate"]: {
		shopErrors:ModelTypes["ShopError"][],
	errors:ModelTypes["ShopError"][],
	staffNotificationRecipient?:ModelTypes["StaffNotificationRecipient"]
};
	/** Delete staff notification recipient. */
["StaffNotificationRecipientDelete"]: {
		shopErrors:ModelTypes["ShopError"][],
	errors:ModelTypes["ShopError"][],
	staffNotificationRecipient?:ModelTypes["StaffNotificationRecipient"]
};
	["StaffNotificationRecipientInput"]: GraphQLTypes["StaffNotificationRecipientInput"];
	/** Updates a staff notification recipient. */
["StaffNotificationRecipientUpdate"]: {
		shopErrors:ModelTypes["ShopError"][],
	errors:ModelTypes["ShopError"][],
	staffNotificationRecipient?:ModelTypes["StaffNotificationRecipient"]
};
	/** Updates an existing staff user. */
["StaffUpdate"]: {
		staffErrors:ModelTypes["StaffError"][],
	errors:ModelTypes["StaffError"][],
	user?:ModelTypes["User"]
};
	["StaffUpdateInput"]: GraphQLTypes["StaffUpdateInput"];
	["StaffUserInput"]: GraphQLTypes["StaffUserInput"];
	/** Represents stock. */
["Stock"]: {
		id:string,
	warehouse:ModelTypes["Warehouse"],
	productVariant:ModelTypes["ProductVariant"],
	/** Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment. */
	quantity:number,
	/** Quantity allocated for orders */
	quantityAllocated:number,
	/** Quantity reserved for checkouts */
	quantityReserved:number
};
	["StockAvailability"]: GraphQLTypes["StockAvailability"];
	["StockCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["StockCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["StockCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["Stock"],
	/** A cursor for use in pagination. */
	cursor:string
};
	["StockError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["StockErrorCode"]
};
	/** An enumeration. */
["StockErrorCode"]: GraphQLTypes["StockErrorCode"];
	["StockFilterInput"]: GraphQLTypes["StockFilterInput"];
	["StockInput"]: GraphQLTypes["StockInput"];
	/** Enum representing the type of a payment storage in a gateway. */
["StorePaymentMethodEnum"]: GraphQLTypes["StorePaymentMethodEnum"];
	/** Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal. */
["TaxedMoney"]: {
		/** Currency code. */
	currency:string,
	/** Amount of money including taxes. */
	gross:ModelTypes["Money"],
	/** Amount of money without taxes. */
	net:ModelTypes["Money"],
	/** Amount of taxes. */
	tax:ModelTypes["Money"]
};
	/** Represents a range of monetary values. */
["TaxedMoneyRange"]: {
		/** Lower bound of a price range. */
	start?:ModelTypes["TaxedMoney"],
	/** Upper bound of a price range. */
	stop?:ModelTypes["TaxedMoney"]
};
	/** Representation of tax types fetched from tax gateway. */
["TaxType"]: {
		/** Description of the tax type. */
	description?:string,
	/** External tax code used to identify given tax group. */
	taxCode?:string
};
	["TimePeriod"]: {
		/** The length of the period. */
	amount:number,
	/** The type of the period. */
	type:ModelTypes["TimePeriodTypeEnum"]
};
	["TimePeriodInputType"]: GraphQLTypes["TimePeriodInputType"];
	/** An enumeration. */
["TimePeriodTypeEnum"]: GraphQLTypes["TimePeriodTypeEnum"];
	/** An object representing a single payment. */
["Transaction"]: {
		id:string,
	created:ModelTypes["DateTime"],
	payment:ModelTypes["Payment"],
	token:string,
	kind:ModelTypes["TransactionKind"],
	isSuccess:boolean,
	error?:string,
	gatewayResponse:ModelTypes["JSONString"],
	/** Total amount of the transaction. */
	amount?:ModelTypes["Money"]
};
	["TransactionInput"]: GraphQLTypes["TransactionInput"];
	/** An enumeration. */
["TransactionKind"]: GraphQLTypes["TransactionKind"];
	/** An enumeration. */
["TransactionStatus"]: GraphQLTypes["TransactionStatus"];
	["TranslatableItem"]:ModelTypes["ProductTranslatableContent"] | ModelTypes["CollectionTranslatableContent"] | ModelTypes["CategoryTranslatableContent"] | ModelTypes["AttributeTranslatableContent"] | ModelTypes["AttributeValueTranslatableContent"] | ModelTypes["ProductVariantTranslatableContent"] | ModelTypes["PageTranslatableContent"] | ModelTypes["ShippingMethodTranslatableContent"] | ModelTypes["SaleTranslatableContent"] | ModelTypes["VoucherTranslatableContent"] | ModelTypes["MenuItemTranslatableContent"];
	["TranslatableItemConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["TranslatableItemEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["TranslatableItemEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["TranslatableItem"],
	/** A cursor for use in pagination. */
	cursor:string
};
	["TranslatableKinds"]: GraphQLTypes["TranslatableKinds"];
	["TranslationError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["TranslationErrorCode"]
};
	/** An enumeration. */
["TranslationErrorCode"]: GraphQLTypes["TranslationErrorCode"];
	["TranslationInput"]: GraphQLTypes["TranslationInput"];
	["UpdateInvoiceInput"]: GraphQLTypes["UpdateInvoiceInput"];
	/** Updates metadata of an object. */
["UpdateMetadata"]: {
		metadataErrors:ModelTypes["MetadataError"][],
	errors:ModelTypes["MetadataError"][],
	item?:ModelTypes["ObjectWithMetadata"]
};
	/** Updates private metadata of an object. */
["UpdatePrivateMetadata"]: {
		metadataErrors:ModelTypes["MetadataError"][],
	errors:ModelTypes["MetadataError"][],
	item?:ModelTypes["ObjectWithMetadata"]
};
	/** Variables of this type must be set to null in mutations. They will be replaced
with a filename from a following multipart part containing a binary file. See:
https://github.com/jaydenseric/graphql-multipart-request-spec. */
["Upload"]:any;
	["UploadError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["UploadErrorCode"]
};
	/** An enumeration. */
["UploadErrorCode"]: GraphQLTypes["UploadErrorCode"];
	/** Represents user data. */
["User"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	email:string,
	firstName:string,
	lastName:string,
	isStaff:boolean,
	isActive:boolean,
	/** List of all user's addresses. */
	addresses?:(ModelTypes["Address"] | undefined)[],
	/** Returns the last open checkout of this user. */
	checkout?:ModelTypes["Checkout"],
	/** Returns the checkout UUID's assigned to this user. */
	checkoutTokens?:ModelTypes["UUID"][],
	/** List of the user gift cards. */
	giftCards?:ModelTypes["GiftCardCountableConnection"],
	/** A note about the customer. */
	note?:string,
	/** List of user's orders. */
	orders?:ModelTypes["OrderCountableConnection"],
	/** List of user's permissions. */
	userPermissions?:(ModelTypes["UserPermission"] | undefined)[],
	/** List of user's permission groups. */
	permissionGroups?:(ModelTypes["Group"] | undefined)[],
	/** List of user's permission groups which user can manage. */
	editableGroups?:(ModelTypes["Group"] | undefined)[],
	avatar?:ModelTypes["Image"],
	/** List of events associated with the user. */
	events?:(ModelTypes["CustomerEvent"] | undefined)[],
	/** List of stored payment sources. */
	storedPaymentSources?:(ModelTypes["PaymentSource"] | undefined)[],
	/** User language code. */
	languageCode:ModelTypes["LanguageCodeEnum"],
	defaultShippingAddress?:ModelTypes["Address"],
	defaultBillingAddress?:ModelTypes["Address"],
	lastLogin?:ModelTypes["DateTime"],
	dateJoined:ModelTypes["DateTime"],
	updatedAt:ModelTypes["DateTime"]
};
	/** Deletes a user avatar. Only for staff members. */
["UserAvatarDelete"]: {
		/** An updated user instance. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** Create a user avatar. Only for staff members. This mutation must be sent as a
`multipart` request. More detailed specs of the upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
["UserAvatarUpdate"]: {
		/** An updated user instance. */
	user?:ModelTypes["User"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** Activate or deactivate users. */
["UserBulkSetActive"]: {
		/** Returns how many objects were affected. */
	count:number,
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	["UserCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["UserCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["UserCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["User"],
	/** A cursor for use in pagination. */
	cursor:string
};
	["UserCreateInput"]: GraphQLTypes["UserCreateInput"];
	["UserPermission"]: {
		/** Internal code for permission. */
	code:ModelTypes["PermissionEnum"],
	/** Describe action(s) allowed to do by permission. */
	name:string,
	/** List of user permission groups which contains this permission. */
	sourcePermissionGroups?:ModelTypes["Group"][]
};
	["UserSortField"]: GraphQLTypes["UserSortField"];
	["UserSortingInput"]: GraphQLTypes["UserSortingInput"];
	["UUID"]:any;
	["VariantAttributeScope"]: GraphQLTypes["VariantAttributeScope"];
	/** Assign an media to a product variant. */
["VariantMediaAssign"]: {
		productVariant?:ModelTypes["ProductVariant"],
	media?:ModelTypes["ProductMedia"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	/** Unassign an media from a product variant. */
["VariantMediaUnassign"]: {
		productVariant?:ModelTypes["ProductVariant"],
	media?:ModelTypes["ProductMedia"],
	productErrors:ModelTypes["ProductError"][],
	errors:ModelTypes["ProductError"][]
};
	/** Represents availability of a variant in the storefront. */
["VariantPricingInfo"]: {
		/** Whether it is in sale or not. */
	onSale?:boolean,
	/** The discount amount if in sale (null otherwise). */
	discount?:ModelTypes["TaxedMoney"],
	/** The discount amount in the local currency. */
	discountLocalCurrency?:ModelTypes["TaxedMoney"],
	/** The price, with any discount subtracted. */
	price?:ModelTypes["TaxedMoney"],
	/** The price without any discount. */
	priceUndiscounted?:ModelTypes["TaxedMoney"],
	/** The discounted price in the local currency. */
	priceLocalCurrency?:ModelTypes["TaxedMoney"]
};
	/** Represents a VAT rate for a country. */
["VAT"]: {
		/** Country code. */
	countryCode:string,
	/** Standard VAT rate in percent. */
	standardRate?:number,
	/** Country's VAT rate exceptions for specific types of goods. */
	reducedRates?:ModelTypes["ReducedRate"][]
};
	/** Verify JWT token. */
["VerifyToken"]: {
		/** User assigned to token. */
	user?:ModelTypes["User"],
	/** Determine if token is valid or not. */
	isValid:boolean,
	/** JWT payload. */
	payload?:ModelTypes["GenericScalar"],
	accountErrors:ModelTypes["AccountError"][],
	errors:ModelTypes["AccountError"][]
};
	/** An enumeration. */
["VolumeUnitsEnum"]: GraphQLTypes["VolumeUnitsEnum"];
	/** Vouchers allow giving discounts to particular customers on categories,
collections or specific products. They can be used during checkout by providing
valid voucher codes. */
["Voucher"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	name?:string,
	code:string,
	usageLimit?:number,
	used:number,
	startDate:ModelTypes["DateTime"],
	endDate?:ModelTypes["DateTime"],
	applyOncePerOrder:boolean,
	applyOncePerCustomer:boolean,
	onlyForStaff:boolean,
	minCheckoutItemsQuantity?:number,
	/** List of categories this voucher applies to. */
	categories?:ModelTypes["CategoryCountableConnection"],
	/** List of collections this voucher applies to. */
	collections?:ModelTypes["CollectionCountableConnection"],
	/** List of products this voucher applies to. */
	products?:ModelTypes["ProductCountableConnection"],
	/** New in Saleor 3.1. List of product variants this voucher applies to. */
	variants?:ModelTypes["ProductVariantCountableConnection"],
	/** List of countries available for the shipping voucher. */
	countries?:(ModelTypes["CountryDisplay"] | undefined)[],
	/** Returns translated voucher fields for the given language code. */
	translation?:ModelTypes["VoucherTranslation"],
	/** Determines a type of discount for voucher - value or percentage */
	discountValueType:ModelTypes["DiscountValueTypeEnum"],
	/** Voucher value. */
	discountValue?:number,
	/** Currency code for voucher. */
	currency?:string,
	/** Minimum order value to apply voucher. */
	minSpent?:ModelTypes["Money"],
	/** Determines a type of voucher. */
	type:ModelTypes["VoucherTypeEnum"],
	/** List of availability in channels for the voucher. */
	channelListings?:ModelTypes["VoucherChannelListing"][]
};
	/** Adds products, categories, collections to a voucher. */
["VoucherAddCatalogues"]: {
		/** Voucher of which catalogue IDs will be modified. */
	voucher?:ModelTypes["Voucher"],
	discountErrors:ModelTypes["DiscountError"][],
	errors:ModelTypes["DiscountError"][]
};
	/** Deletes vouchers. */
["VoucherBulkDelete"]: {
		/** Returns how many objects were affected. */
	count:number,
	discountErrors:ModelTypes["DiscountError"][],
	errors:ModelTypes["DiscountError"][]
};
	/** Represents voucher channel listing. */
["VoucherChannelListing"]: {
		id:string,
	channel:ModelTypes["Channel"],
	discountValue:number,
	currency:string,
	minSpent?:ModelTypes["Money"]
};
	["VoucherChannelListingAddInput"]: GraphQLTypes["VoucherChannelListingAddInput"];
	["VoucherChannelListingInput"]: GraphQLTypes["VoucherChannelListingInput"];
	/** Manage voucher's availability in channels. */
["VoucherChannelListingUpdate"]: {
		/** An updated voucher instance. */
	voucher?:ModelTypes["Voucher"],
	discountErrors:ModelTypes["DiscountError"][],
	errors:ModelTypes["DiscountError"][]
};
	["VoucherCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["VoucherCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["VoucherCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["Voucher"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates a new voucher. */
["VoucherCreate"]: {
		discountErrors:ModelTypes["DiscountError"][],
	errors:ModelTypes["DiscountError"][],
	voucher?:ModelTypes["Voucher"]
};
	/** Deletes a voucher. */
["VoucherDelete"]: {
		discountErrors:ModelTypes["DiscountError"][],
	errors:ModelTypes["DiscountError"][],
	voucher?:ModelTypes["Voucher"]
};
	["VoucherDiscountType"]: GraphQLTypes["VoucherDiscountType"];
	["VoucherFilterInput"]: GraphQLTypes["VoucherFilterInput"];
	["VoucherInput"]: GraphQLTypes["VoucherInput"];
	/** Removes products, categories, collections from a voucher. */
["VoucherRemoveCatalogues"]: {
		/** Voucher of which catalogue IDs will be modified. */
	voucher?:ModelTypes["Voucher"],
	discountErrors:ModelTypes["DiscountError"][],
	errors:ModelTypes["DiscountError"][]
};
	["VoucherSortField"]: GraphQLTypes["VoucherSortField"];
	["VoucherSortingInput"]: GraphQLTypes["VoucherSortingInput"];
	["VoucherTranslatableContent"]: {
		id:string,
	name?:string,
	/** Returns translated voucher fields for the given language code. */
	translation?:ModelTypes["VoucherTranslation"],
	/** Vouchers allow giving discounts to particular customers on categories,
collections or specific products. They can be used during checkout by
providing valid voucher codes. */
	voucher?:ModelTypes["Voucher"]
};
	/** Creates/updates translations for a voucher. */
["VoucherTranslate"]: {
		translationErrors:ModelTypes["TranslationError"][],
	errors:ModelTypes["TranslationError"][],
	voucher?:ModelTypes["Voucher"]
};
	["VoucherTranslation"]: {
		id:string,
	/** Translation language. */
	language:ModelTypes["LanguageDisplay"],
	name?:string
};
	["VoucherTypeEnum"]: GraphQLTypes["VoucherTypeEnum"];
	/** Updates a voucher. */
["VoucherUpdate"]: {
		discountErrors:ModelTypes["DiscountError"][],
	errors:ModelTypes["DiscountError"][],
	voucher?:ModelTypes["Voucher"]
};
	/** Represents warehouse. */
["Warehouse"]: {
		id:string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?:ModelTypes["MetadataItem"][],
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?:ModelTypes["MetadataItem"][],
	name:string,
	slug:string,
	email:string,
	isPrivate:boolean,
	address:ModelTypes["Address"],
	/** Warehouse company name. */
	companyName:string,
	/** New in Saleor 3.1. Click and collect options: local, all or disabled. Note:
this feature is in a preview state and can be subject to changes at later point. */
	clickAndCollectOption:ModelTypes["WarehouseClickAndCollectOptionEnum"],
	shippingZones:ModelTypes["ShippingZoneCountableConnection"]
};
	/** An enumeration. */
["WarehouseClickAndCollectOptionEnum"]: GraphQLTypes["WarehouseClickAndCollectOptionEnum"];
	["WarehouseCountableConnection"]: {
		/** Pagination data for this connection. */
	pageInfo:ModelTypes["PageInfo"],
	edges:ModelTypes["WarehouseCountableEdge"][],
	/** A total count of items in the collection. */
	totalCount?:number
};
	["WarehouseCountableEdge"]: {
		/** The item at the end of the edge. */
	node:ModelTypes["Warehouse"],
	/** A cursor for use in pagination. */
	cursor:string
};
	/** Creates new warehouse. */
["WarehouseCreate"]: {
		warehouseErrors:ModelTypes["WarehouseError"][],
	errors:ModelTypes["WarehouseError"][],
	warehouse?:ModelTypes["Warehouse"]
};
	["WarehouseCreateInput"]: GraphQLTypes["WarehouseCreateInput"];
	/** Deletes selected warehouse. */
["WarehouseDelete"]: {
		warehouseErrors:ModelTypes["WarehouseError"][],
	errors:ModelTypes["WarehouseError"][],
	warehouse?:ModelTypes["Warehouse"]
};
	["WarehouseError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["WarehouseErrorCode"]
};
	/** An enumeration. */
["WarehouseErrorCode"]: GraphQLTypes["WarehouseErrorCode"];
	["WarehouseFilterInput"]: GraphQLTypes["WarehouseFilterInput"];
	/** Add shipping zone to given warehouse. */
["WarehouseShippingZoneAssign"]: {
		warehouseErrors:ModelTypes["WarehouseError"][],
	errors:ModelTypes["WarehouseError"][],
	warehouse?:ModelTypes["Warehouse"]
};
	/** Remove shipping zone from given warehouse. */
["WarehouseShippingZoneUnassign"]: {
		warehouseErrors:ModelTypes["WarehouseError"][],
	errors:ModelTypes["WarehouseError"][],
	warehouse?:ModelTypes["Warehouse"]
};
	["WarehouseSortField"]: GraphQLTypes["WarehouseSortField"];
	["WarehouseSortingInput"]: GraphQLTypes["WarehouseSortingInput"];
	/** Updates given warehouse. */
["WarehouseUpdate"]: {
		warehouseErrors:ModelTypes["WarehouseError"][],
	errors:ModelTypes["WarehouseError"][],
	warehouse?:ModelTypes["Warehouse"]
};
	["WarehouseUpdateInput"]: GraphQLTypes["WarehouseUpdateInput"];
	/** Webhook. */
["Webhook"]: {
		id:string,
	name:string,
	/** List of webhook events. */
	events:ModelTypes["WebhookEvent"][],
	/** List of synchronous webhook events. */
	syncEvents:ModelTypes["WebhookEventSync"][],
	/** List of asynchronous webhook events. */
	asyncEvents:ModelTypes["WebhookEventAsync"][],
	app:ModelTypes["App"],
	/** Event deliveries. */
	eventDeliveries?:ModelTypes["EventDeliveryCountableConnection"],
	targetUrl:string,
	isActive:boolean,
	secretKey?:string
};
	/** Creates a new webhook subscription. */
["WebhookCreate"]: {
		webhookErrors:ModelTypes["WebhookError"][],
	errors:ModelTypes["WebhookError"][],
	webhook?:ModelTypes["Webhook"]
};
	["WebhookCreateInput"]: GraphQLTypes["WebhookCreateInput"];
	/** Deletes a webhook subscription. */
["WebhookDelete"]: {
		webhookErrors:ModelTypes["WebhookError"][],
	errors:ModelTypes["WebhookError"][],
	webhook?:ModelTypes["Webhook"]
};
	["WebhookError"]: {
		/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?:string,
	/** The error message. */
	message?:string,
	/** The error code. */
	code:ModelTypes["WebhookErrorCode"]
};
	/** An enumeration. */
["WebhookErrorCode"]: GraphQLTypes["WebhookErrorCode"];
	/** Webhook event. */
["WebhookEvent"]: {
		/** Display name of the event. */
	name:string,
	/** Internal name of the event type. */
	eventType:ModelTypes["WebhookEventTypeEnum"]
};
	/** Asynchronous webhook event. */
["WebhookEventAsync"]: {
		/** Display name of the event. */
	name:string,
	/** Internal name of the event type. */
	eventType:ModelTypes["WebhookEventTypeAsyncEnum"]
};
	/** Synchronous webhook event. */
["WebhookEventSync"]: {
		/** Display name of the event. */
	name:string,
	/** Internal name of the event type. */
	eventType:ModelTypes["WebhookEventTypeSyncEnum"]
};
	/** Enum determining type of webhook. */
["WebhookEventTypeAsyncEnum"]: GraphQLTypes["WebhookEventTypeAsyncEnum"];
	/** Enum determining type of webhook. */
["WebhookEventTypeEnum"]: GraphQLTypes["WebhookEventTypeEnum"];
	/** Enum determining type of webhook. */
["WebhookEventTypeSyncEnum"]: GraphQLTypes["WebhookEventTypeSyncEnum"];
	/** An enumeration. */
["WebhookSampleEventTypeEnum"]: GraphQLTypes["WebhookSampleEventTypeEnum"];
	/** Updates a webhook subscription. */
["WebhookUpdate"]: {
		webhookErrors:ModelTypes["WebhookError"][],
	errors:ModelTypes["WebhookError"][],
	webhook?:ModelTypes["Webhook"]
};
	["WebhookUpdateInput"]: GraphQLTypes["WebhookUpdateInput"];
	/** Represents weight value in a specific weight unit. */
["Weight"]: {
		/** Weight unit. */
	unit:ModelTypes["WeightUnitsEnum"],
	/** Weight value. */
	value:number
};
	["WeightScalar"]:any;
	/** An enumeration. */
["WeightUnitsEnum"]: GraphQLTypes["WeightUnitsEnum"]
    }

export type GraphQLTypes = {
    /** _Any value scalar as defined by Federation spec. */
["_Any"]:any;
	/** _Entity union as defined by Federation spec. */
["_Entity"]:{
	__typename:"App" | "Address" | "User" | "Group" | "ProductVariant" | "Product" | "ProductType" | "Collection" | "Category" | "ProductMedia" | "PageType"
	['...on App']: '__union' & GraphQLTypes["App"];
	['...on Address']: '__union' & GraphQLTypes["Address"];
	['...on User']: '__union' & GraphQLTypes["User"];
	['...on Group']: '__union' & GraphQLTypes["Group"];
	['...on ProductVariant']: '__union' & GraphQLTypes["ProductVariant"];
	['...on Product']: '__union' & GraphQLTypes["Product"];
	['...on ProductType']: '__union' & GraphQLTypes["ProductType"];
	['...on Collection']: '__union' & GraphQLTypes["Collection"];
	['...on Category']: '__union' & GraphQLTypes["Category"];
	['...on ProductMedia']: '__union' & GraphQLTypes["ProductMedia"];
	['...on PageType']: '__union' & GraphQLTypes["PageType"];
};
	/** _Service manifest as defined by Federation spec. */
["_Service"]: {
	__typename: "_Service",
	sdl?: string
};
	/** Create a new address for the customer. */
["AccountAddressCreate"]: {
	__typename: "AccountAddressCreate",
	/** A user instance for which the address was created. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>,
	address?: GraphQLTypes["Address"]
};
	/** Delete an address of the logged-in user. */
["AccountAddressDelete"]: {
	__typename: "AccountAddressDelete",
	/** A user instance for which the address was deleted. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>,
	address?: GraphQLTypes["Address"]
};
	/** Updates an address of the logged-in user. */
["AccountAddressUpdate"]: {
	__typename: "AccountAddressUpdate",
	/** A user object for which the address was edited. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>,
	address?: GraphQLTypes["Address"]
};
	/** Remove user account. */
["AccountDelete"]: {
	__typename: "AccountDelete",
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>,
	user?: GraphQLTypes["User"]
};
	["AccountError"]: {
	__typename: "AccountError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["AccountErrorCode"],
	/** A type of address that causes the error. */
	addressType?: GraphQLTypes["AddressTypeEnum"]
};
	/** An enumeration. */
["AccountErrorCode"]: AccountErrorCode;
	["AccountInput"]: {
		/** Given name. */
	firstName?: string,
	/** Family name. */
	lastName?: string,
	/** User language code. */
	languageCode?: GraphQLTypes["LanguageCodeEnum"],
	/** Billing address of the customer. */
	defaultBillingAddress?: GraphQLTypes["AddressInput"],
	/** Shipping address of the customer. */
	defaultShippingAddress?: GraphQLTypes["AddressInput"]
};
	/** Register a new user. */
["AccountRegister"]: {
	__typename: "AccountRegister",
	/** Informs whether users need to confirm their email address. */
	requiresConfirmation?: boolean,
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>,
	user?: GraphQLTypes["User"]
};
	["AccountRegisterInput"]: {
		/** Given name. */
	firstName?: string,
	/** Family name. */
	lastName?: string,
	/** User language code. */
	languageCode?: GraphQLTypes["LanguageCodeEnum"],
	/** The email address of the user. */
	email: string,
	/** Password. */
	password: string,
	/** Base of frontend URL that will be needed to create confirmation URL. */
	redirectUrl?: string,
	/** User public metadata. */
	metadata?: Array<GraphQLTypes["MetadataInput"]>,
	/** Slug of a channel which will be used to notify users. Optional when only one channel exists. */
	channel?: string
};
	/** Sends an email with the account removal link for the logged-in user. */
["AccountRequestDeletion"]: {
	__typename: "AccountRequestDeletion",
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** Sets a default address for the authenticated user. */
["AccountSetDefaultAddress"]: {
	__typename: "AccountSetDefaultAddress",
	/** An updated user instance. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** Updates the account of the logged-in user. */
["AccountUpdate"]: {
	__typename: "AccountUpdate",
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>,
	user?: GraphQLTypes["User"]
};
	/** Represents user address data. */
["Address"]: {
	__typename: "Address",
	id: string,
	firstName: string,
	lastName: string,
	companyName: string,
	streetAddress1: string,
	streetAddress2: string,
	city: string,
	cityArea: string,
	postalCode: string,
	/** Shop's default country. */
	country: GraphQLTypes["CountryDisplay"],
	countryArea: string,
	phone?: string,
	/** Address is user's default shipping address. */
	isDefaultShippingAddress?: boolean,
	/** Address is user's default billing address. */
	isDefaultBillingAddress?: boolean
};
	/** Creates user address. */
["AddressCreate"]: {
	__typename: "AddressCreate",
	/** A user instance for which the address was created. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>,
	address?: GraphQLTypes["Address"]
};
	/** Deletes an address. */
["AddressDelete"]: {
	__typename: "AddressDelete",
	/** A user instance for which the address was deleted. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>,
	address?: GraphQLTypes["Address"]
};
	["AddressInput"]: {
		/** Given name. */
	firstName?: string,
	/** Family name. */
	lastName?: string,
	/** Company or organization. */
	companyName?: string,
	/** Address. */
	streetAddress1?: string,
	/** Address. */
	streetAddress2?: string,
	/** City. */
	city?: string,
	/** District. */
	cityArea?: string,
	/** Postal code. */
	postalCode?: string,
	/** Country. */
	country?: GraphQLTypes["CountryCode"],
	/** State or province. */
	countryArea?: string,
	/** Phone number. */
	phone?: string
};
	/** Sets a default address for the given user. */
["AddressSetDefault"]: {
	__typename: "AddressSetDefault",
	/** An updated user instance. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** An enumeration. */
["AddressTypeEnum"]: AddressTypeEnum;
	/** Updates an address. */
["AddressUpdate"]: {
	__typename: "AddressUpdate",
	/** A user object for which the address was edited. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>,
	address?: GraphQLTypes["Address"]
};
	["AddressValidationData"]: {
	__typename: "AddressValidationData",
	countryCode?: string,
	countryName?: string,
	addressFormat?: string,
	addressLatinFormat?: string,
	allowedFields?: Array<string | undefined>,
	requiredFields?: Array<string | undefined>,
	upperFields?: Array<string | undefined>,
	countryAreaType?: string,
	countryAreaChoices?: Array<GraphQLTypes["ChoiceValue"] | undefined>,
	cityType?: string,
	cityChoices?: Array<GraphQLTypes["ChoiceValue"] | undefined>,
	cityAreaType?: string,
	cityAreaChoices?: Array<GraphQLTypes["ChoiceValue"] | undefined>,
	postalCodeType?: string,
	postalCodeMatchers?: Array<string | undefined>,
	postalCodeExamples?: Array<string | undefined>,
	postalCodePrefix?: string
};
	/** Represents allocation. */
["Allocation"]: {
	__typename: "Allocation",
	id: string,
	/** Quantity allocated for orders. */
	quantity: number,
	/** The warehouse were items were allocated. */
	warehouse: GraphQLTypes["Warehouse"]
};
	/** Represents app data. */
["App"]: {
	__typename: "App",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of the app's permissions. */
	permissions?: Array<GraphQLTypes["Permission"] | undefined>,
	/** The date and time when the app was created. */
	created?: GraphQLTypes["DateTime"],
	/** Determine if app will be set active or not. */
	isActive?: boolean,
	/** Name of the app. */
	name?: string,
	/** Type of the app. */
	type?: GraphQLTypes["AppTypeEnum"],
	/** Last 4 characters of the tokens. */
	tokens?: Array<GraphQLTypes["AppToken"] | undefined>,
	/** List of webhooks assigned to this app. */
	webhooks?: Array<GraphQLTypes["Webhook"] | undefined>,
	/** Description of this app. */
	aboutApp?: string,
	/** Description of the data privacy defined for this app. */
	dataPrivacy?: string,
	/** Url to details about the privacy policy on the app owner page. */
	dataPrivacyUrl?: string,
	/** Homepage of the app. */
	homepageUrl?: string,
	/** Support page for the app. */
	supportUrl?: string,
	/** Url to iframe with the configuration for the app. */
	configurationUrl?: string,
	/** Url to iframe with the app. */
	appUrl?: string,
	/** Version number of the app. */
	version?: string,
	/** JWT token used to authenticate by thridparty app. */
	accessToken?: string,
	/** New in Saleor 3.1. App's dashboard extensions. Note: this feature is in a
preview state and can be subject to changes at later point. */
	extensions: Array<GraphQLTypes["AppExtension"]>
};
	/** Activate the app. */
["AppActivate"]: {
	__typename: "AppActivate",
	appErrors: Array<GraphQLTypes["AppError"]>,
	errors: Array<GraphQLTypes["AppError"]>,
	app?: GraphQLTypes["App"]
};
	["AppCountableConnection"]: {
	__typename: "AppCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["AppCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["AppCountableEdge"]: {
	__typename: "AppCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["App"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates a new app. */
["AppCreate"]: {
	__typename: "AppCreate",
	/** The newly created authentication token. */
	authToken?: string,
	appErrors: Array<GraphQLTypes["AppError"]>,
	errors: Array<GraphQLTypes["AppError"]>,
	app?: GraphQLTypes["App"]
};
	/** Deactivate the app. */
["AppDeactivate"]: {
	__typename: "AppDeactivate",
	appErrors: Array<GraphQLTypes["AppError"]>,
	errors: Array<GraphQLTypes["AppError"]>,
	app?: GraphQLTypes["App"]
};
	/** Deletes an app. */
["AppDelete"]: {
	__typename: "AppDelete",
	appErrors: Array<GraphQLTypes["AppError"]>,
	errors: Array<GraphQLTypes["AppError"]>,
	app?: GraphQLTypes["App"]
};
	/** Delete failed installation. */
["AppDeleteFailedInstallation"]: {
	__typename: "AppDeleteFailedInstallation",
	appErrors: Array<GraphQLTypes["AppError"]>,
	errors: Array<GraphQLTypes["AppError"]>,
	appInstallation?: GraphQLTypes["AppInstallation"]
};
	["AppError"]: {
	__typename: "AppError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["AppErrorCode"],
	/** List of permissions which causes the error. */
	permissions?: Array<GraphQLTypes["PermissionEnum"]>
};
	/** An enumeration. */
["AppErrorCode"]: AppErrorCode;
	/** Represents app data. */
["AppExtension"]: {
	__typename: "AppExtension",
	id: string,
	/** List of the app extension's permissions. */
	permissions: Array<GraphQLTypes["Permission"]>,
	/** Label of the extension to show in the dashboard. */
	label: string,
	/** URL of a view where extension's iframe is placed. */
	url: string,
	/** Place where given extension will be mounted. */
	mount: GraphQLTypes["AppExtensionMountEnum"],
	/** Type of way how app extension will be opened. */
	target: GraphQLTypes["AppExtensionTargetEnum"],
	app: GraphQLTypes["App"],
	/** JWT token used to authenticate by thridparty app extension. */
	accessToken?: string
};
	["AppExtensionCountableConnection"]: {
	__typename: "AppExtensionCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["AppExtensionCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["AppExtensionCountableEdge"]: {
	__typename: "AppExtensionCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["AppExtension"],
	/** A cursor for use in pagination. */
	cursor: string
};
	["AppExtensionFilterInput"]: {
		mount?: Array<GraphQLTypes["AppExtensionMountEnum"] | undefined>,
	target?: GraphQLTypes["AppExtensionTargetEnum"]
};
	/** All places where app extension can be mounted. */
["AppExtensionMountEnum"]: AppExtensionMountEnum;
	/** All available ways of opening an app extension.

    POPUP - app's extension will be mounted as a popup window
    APP_PAGE - redirect to app's page */
["AppExtensionTargetEnum"]: AppExtensionTargetEnum;
	/** Fetch and validate manifest. */
["AppFetchManifest"]: {
	__typename: "AppFetchManifest",
	manifest?: GraphQLTypes["Manifest"],
	appErrors: Array<GraphQLTypes["AppError"]>,
	errors: Array<GraphQLTypes["AppError"]>
};
	["AppFilterInput"]: {
		search?: string,
	isActive?: boolean,
	type?: GraphQLTypes["AppTypeEnum"]
};
	["AppInput"]: {
		/** Name of the app. */
	name?: string,
	/** List of permission code names to assign to this app. */
	permissions?: Array<GraphQLTypes["PermissionEnum"] | undefined>
};
	/** Install new app by using app manifest. */
["AppInstall"]: {
	__typename: "AppInstall",
	appErrors: Array<GraphQLTypes["AppError"]>,
	errors: Array<GraphQLTypes["AppError"]>,
	appInstallation?: GraphQLTypes["AppInstallation"]
};
	/** Represents ongoing installation of app. */
["AppInstallation"]: {
	__typename: "AppInstallation",
	id: string,
	/** Job status. */
	status: GraphQLTypes["JobStatusEnum"],
	/** Created date time of job in ISO 8601 format. */
	createdAt: GraphQLTypes["DateTime"],
	/** Date time of job last update in ISO 8601 format. */
	updatedAt: GraphQLTypes["DateTime"],
	/** Job message. */
	message?: string,
	appName: string,
	manifestUrl: string
};
	["AppInstallInput"]: {
		/** Name of the app to install. */
	appName?: string,
	/** Url to app's manifest in JSON format. */
	manifestUrl?: string,
	/** Determine if app will be set active or not. */
	activateAfterInstallation?: boolean,
	/** List of permission code names to assign to this app. */
	permissions?: Array<GraphQLTypes["PermissionEnum"] | undefined>
};
	["AppManifestExtension"]: {
	__typename: "AppManifestExtension",
	/** List of the app extension's permissions. */
	permissions: Array<GraphQLTypes["Permission"]>,
	/** Label of the extension to show in the dashboard. */
	label: string,
	/** URL of a view where extension's iframe is placed. */
	url: string,
	/** Place where given extension will be mounted. */
	mount: GraphQLTypes["AppExtensionMountEnum"],
	/** Type of way how app extension will be opened. */
	target: GraphQLTypes["AppExtensionTargetEnum"]
};
	/** Retry failed installation of new app. */
["AppRetryInstall"]: {
	__typename: "AppRetryInstall",
	appErrors: Array<GraphQLTypes["AppError"]>,
	errors: Array<GraphQLTypes["AppError"]>,
	appInstallation?: GraphQLTypes["AppInstallation"]
};
	["AppSortField"]: AppSortField;
	["AppSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort apps by the selected field. */
	field: GraphQLTypes["AppSortField"]
};
	/** Represents token data. */
["AppToken"]: {
	__typename: "AppToken",
	id: string,
	/** Name of the authenticated token. */
	name?: string,
	/** Last 4 characters of the token. */
	authToken?: string
};
	/** Creates a new token. */
["AppTokenCreate"]: {
	__typename: "AppTokenCreate",
	/** The newly created authentication token. */
	authToken?: string,
	appErrors: Array<GraphQLTypes["AppError"]>,
	errors: Array<GraphQLTypes["AppError"]>,
	appToken?: GraphQLTypes["AppToken"]
};
	/** Deletes an authentication token assigned to app. */
["AppTokenDelete"]: {
	__typename: "AppTokenDelete",
	appErrors: Array<GraphQLTypes["AppError"]>,
	errors: Array<GraphQLTypes["AppError"]>,
	appToken?: GraphQLTypes["AppToken"]
};
	["AppTokenInput"]: {
		/** Name of the token. */
	name?: string,
	/** ID of app. */
	app: string
};
	/** Verify provided app token. */
["AppTokenVerify"]: {
	__typename: "AppTokenVerify",
	/** Determine if token is valid or not. */
	valid: boolean,
	appErrors: Array<GraphQLTypes["AppError"]>,
	errors: Array<GraphQLTypes["AppError"]>
};
	/** Enum determining type of your App. */
["AppTypeEnum"]: AppTypeEnum;
	/** Updates an existing app. */
["AppUpdate"]: {
	__typename: "AppUpdate",
	appErrors: Array<GraphQLTypes["AppError"]>,
	errors: Array<GraphQLTypes["AppError"]>,
	app?: GraphQLTypes["App"]
};
	/** An enumeration. */
["AreaUnitsEnum"]: AreaUnitsEnum;
	/** New in Saleor 3.1. Represents assigned attribute to variant with variant selection attached. */
["AssignedVariantAttribute"]: {
	__typename: "AssignedVariantAttribute",
	/** Attribute assigned to variant. */
	attribute: GraphQLTypes["Attribute"],
	/** Determines, whether assigned attribute is allowed for variant selection.
Supported variant types for variant selection are: ['dropdown', 'boolean',
'swatch', 'numeric'] */
	variantSelection: boolean
};
	/** Assigns storefront's navigation menus. */
["AssignNavigation"]: {
	__typename: "AssignNavigation",
	/** Assigned navigation menu. */
	menu?: GraphQLTypes["Menu"],
	menuErrors: Array<GraphQLTypes["MenuError"]>,
	errors: Array<GraphQLTypes["MenuError"]>
};
	/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
["Attribute"]: {
	__typename: "Attribute",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** The input type to use for entering attribute values in the dashboard. */
	inputType?: GraphQLTypes["AttributeInputTypeEnum"],
	/** The entity type which can be used as a reference. */
	entityType?: GraphQLTypes["AttributeEntityTypeEnum"],
	/** Name of an attribute displayed in the interface. */
	name?: string,
	/** Internal representation of an attribute name. */
	slug?: string,
	/** The attribute type. */
	type?: GraphQLTypes["AttributeTypeEnum"],
	/** The unit of attribute values. */
	unit?: GraphQLTypes["MeasurementUnitsEnum"],
	/** List of attribute's values. */
	choices?: GraphQLTypes["AttributeValueCountableConnection"],
	/** Whether the attribute requires values to be passed or not. */
	valueRequired: boolean,
	/** Whether the attribute should be visible or not in storefront. */
	visibleInStorefront: boolean,
	/** Whether the attribute can be filtered in storefront. */
	filterableInStorefront: boolean,
	/** Whether the attribute can be filtered in dashboard. */
	filterableInDashboard: boolean,
	/** Whether the attribute can be displayed in the admin product list. */
	availableInGrid: boolean,
	/** Returns translated attribute fields for the given language code. */
	translation?: GraphQLTypes["AttributeTranslation"],
	/** The position of the attribute in the storefront navigation (0 by default). */
	storefrontSearchPosition: number,
	/** Flag indicating that attribute has predefined choices. */
	withChoices: boolean,
	productTypes: GraphQLTypes["ProductTypeCountableConnection"],
	productVariantTypes: GraphQLTypes["ProductTypeCountableConnection"]
};
	/** Deletes attributes. */
["AttributeBulkDelete"]: {
	__typename: "AttributeBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	attributeErrors: Array<GraphQLTypes["AttributeError"]>,
	errors: Array<GraphQLTypes["AttributeError"]>
};
	["AttributeChoicesSortField"]: AttributeChoicesSortField;
	["AttributeChoicesSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort attribute choices by the selected field. */
	field: GraphQLTypes["AttributeChoicesSortField"]
};
	["AttributeCountableConnection"]: {
	__typename: "AttributeCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["AttributeCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["AttributeCountableEdge"]: {
	__typename: "AttributeCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["Attribute"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates an attribute. */
["AttributeCreate"]: {
	__typename: "AttributeCreate",
	attribute?: GraphQLTypes["Attribute"],
	attributeErrors: Array<GraphQLTypes["AttributeError"]>,
	errors: Array<GraphQLTypes["AttributeError"]>
};
	["AttributeCreateInput"]: {
		/** The input type to use for entering attribute values in the dashboard. */
	inputType?: GraphQLTypes["AttributeInputTypeEnum"],
	/** The entity type which can be used as a reference. */
	entityType?: GraphQLTypes["AttributeEntityTypeEnum"],
	/** Name of an attribute displayed in the interface. */
	name: string,
	/** Internal representation of an attribute name. */
	slug?: string,
	/** The attribute type. */
	type: GraphQLTypes["AttributeTypeEnum"],
	/** The unit of attribute values. */
	unit?: GraphQLTypes["MeasurementUnitsEnum"],
	/** List of attribute's values. */
	values?: Array<GraphQLTypes["AttributeValueCreateInput"] | undefined>,
	/** Whether the attribute requires values to be passed or not. */
	valueRequired?: boolean,
	/** Whether the attribute is for variants only. */
	isVariantOnly?: boolean,
	/** Whether the attribute should be visible or not in storefront. */
	visibleInStorefront?: boolean,
	/** Whether the attribute can be filtered in storefront. */
	filterableInStorefront?: boolean,
	/** Whether the attribute can be filtered in dashboard. */
	filterableInDashboard?: boolean,
	/** The position of the attribute in the storefront navigation (0 by default). */
	storefrontSearchPosition?: number,
	/** Whether the attribute can be displayed in the admin product list. */
	availableInGrid?: boolean
};
	/** Deletes an attribute. */
["AttributeDelete"]: {
	__typename: "AttributeDelete",
	attributeErrors: Array<GraphQLTypes["AttributeError"]>,
	errors: Array<GraphQLTypes["AttributeError"]>,
	attribute?: GraphQLTypes["Attribute"]
};
	/** An enumeration. */
["AttributeEntityTypeEnum"]: AttributeEntityTypeEnum;
	["AttributeError"]: {
	__typename: "AttributeError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["AttributeErrorCode"]
};
	/** An enumeration. */
["AttributeErrorCode"]: AttributeErrorCode;
	["AttributeFilterInput"]: {
		valueRequired?: boolean,
	isVariantOnly?: boolean,
	visibleInStorefront?: boolean,
	filterableInStorefront?: boolean,
	filterableInDashboard?: boolean,
	availableInGrid?: boolean,
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>,
	search?: string,
	ids?: Array<string | undefined>,
	type?: GraphQLTypes["AttributeTypeEnum"],
	inCollection?: string,
	inCategory?: string,
	/** Specifies the channel by which the data should be filtered. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?: string
};
	["AttributeInput"]: {
		/** Internal representation of an attribute name. */
	slug: string,
	/** Internal representation of a value (unique per attribute). */
	values?: Array<string | undefined>,
	/** The range that the returned values should be in. */
	valuesRange?: GraphQLTypes["IntRangeInput"],
	/** The date time range that the returned values should be in. */
	dateTime?: GraphQLTypes["DateTimeRangeInput"],
	/** The date range that the returned values should be in. */
	date?: GraphQLTypes["DateRangeInput"],
	/** The boolean value of the attribute. */
	boolean?: boolean
};
	/** An enumeration. */
["AttributeInputTypeEnum"]: AttributeInputTypeEnum;
	/** Reorder the values of an attribute. */
["AttributeReorderValues"]: {
	__typename: "AttributeReorderValues",
	/** Attribute from which values are reordered. */
	attribute?: GraphQLTypes["Attribute"],
	attributeErrors: Array<GraphQLTypes["AttributeError"]>,
	errors: Array<GraphQLTypes["AttributeError"]>
};
	["AttributeSortField"]: AttributeSortField;
	["AttributeSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort attributes by the selected field. */
	field: GraphQLTypes["AttributeSortField"]
};
	["AttributeTranslatableContent"]: {
	__typename: "AttributeTranslatableContent",
	id: string,
	name: string,
	/** Returns translated attribute fields for the given language code. */
	translation?: GraphQLTypes["AttributeTranslation"],
	/** Custom attribute of a product. */
	attribute?: GraphQLTypes["Attribute"]
};
	/** Creates/updates translations for an attribute. */
["AttributeTranslate"]: {
	__typename: "AttributeTranslate",
	translationErrors: Array<GraphQLTypes["TranslationError"]>,
	errors: Array<GraphQLTypes["TranslationError"]>,
	attribute?: GraphQLTypes["Attribute"]
};
	["AttributeTranslation"]: {
	__typename: "AttributeTranslation",
	id: string,
	/** Translation language. */
	language: GraphQLTypes["LanguageDisplay"],
	name: string
};
	/** An enumeration. */
["AttributeTypeEnum"]: AttributeTypeEnum;
	/** Updates attribute. */
["AttributeUpdate"]: {
	__typename: "AttributeUpdate",
	attribute?: GraphQLTypes["Attribute"],
	attributeErrors: Array<GraphQLTypes["AttributeError"]>,
	errors: Array<GraphQLTypes["AttributeError"]>
};
	["AttributeUpdateInput"]: {
		/** Name of an attribute displayed in the interface. */
	name?: string,
	/** Internal representation of an attribute name. */
	slug?: string,
	/** The unit of attribute values. */
	unit?: GraphQLTypes["MeasurementUnitsEnum"],
	/** IDs of values to be removed from this attribute. */
	removeValues?: Array<string | undefined>,
	/** New values to be created for this attribute. */
	addValues?: Array<GraphQLTypes["AttributeValueUpdateInput"] | undefined>,
	/** Whether the attribute requires values to be passed or not. */
	valueRequired?: boolean,
	/** Whether the attribute is for variants only. */
	isVariantOnly?: boolean,
	/** Whether the attribute should be visible or not in storefront. */
	visibleInStorefront?: boolean,
	/** Whether the attribute can be filtered in storefront. */
	filterableInStorefront?: boolean,
	/** Whether the attribute can be filtered in dashboard. */
	filterableInDashboard?: boolean,
	/** The position of the attribute in the storefront navigation (0 by default). */
	storefrontSearchPosition?: number,
	/** Whether the attribute can be displayed in the admin product list. */
	availableInGrid?: boolean
};
	/** Represents a value of an attribute. */
["AttributeValue"]: {
	__typename: "AttributeValue",
	id: string,
	/** Name of a value displayed in the interface. */
	name?: string,
	/** Internal representation of a value (unique per attribute). */
	slug?: string,
	/** Represent value of the attribute value (e.g. color values for swatch attributes). */
	value?: string,
	/** Returns translated attribute value fields for the given language code. */
	translation?: GraphQLTypes["AttributeValueTranslation"],
	/** The input type to use for entering attribute values in the dashboard. */
	inputType?: GraphQLTypes["AttributeInputTypeEnum"],
	/** The ID of the attribute reference. */
	reference?: string,
	/** Represents file URL and content type (if attribute value is a file). */
	file?: GraphQLTypes["File"],
	/** Represents the text (JSON) of the attribute value. */
	richText?: GraphQLTypes["JSONString"],
	/** Represents the boolean value of the attribute value. */
	boolean?: boolean,
	/** Represents the date value of the attribute value. */
	date?: GraphQLTypes["Date"],
	/** Represents the date time value of the attribute value. */
	dateTime?: GraphQLTypes["DateTime"]
};
	/** Deletes values of attributes. */
["AttributeValueBulkDelete"]: {
	__typename: "AttributeValueBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	attributeErrors: Array<GraphQLTypes["AttributeError"]>,
	errors: Array<GraphQLTypes["AttributeError"]>
};
	["AttributeValueCountableConnection"]: {
	__typename: "AttributeValueCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["AttributeValueCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["AttributeValueCountableEdge"]: {
	__typename: "AttributeValueCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["AttributeValue"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates a value for an attribute. */
["AttributeValueCreate"]: {
	__typename: "AttributeValueCreate",
	/** The updated attribute. */
	attribute?: GraphQLTypes["Attribute"],
	attributeErrors: Array<GraphQLTypes["AttributeError"]>,
	errors: Array<GraphQLTypes["AttributeError"]>,
	attributeValue?: GraphQLTypes["AttributeValue"]
};
	["AttributeValueCreateInput"]: {
		/** Represent value of the attribute value (e.g. color values for swatch attributes). */
	value?: string,
	/** Represents the text (JSON) of the attribute value. */
	richText?: GraphQLTypes["JSONString"],
	/** URL of the file attribute. Every time, a new value is created. */
	fileUrl?: string,
	/** File content type. */
	contentType?: string,
	/** Name of a value displayed in the interface. */
	name: string
};
	/** Deletes a value of an attribute. */
["AttributeValueDelete"]: {
	__typename: "AttributeValueDelete",
	/** The updated attribute. */
	attribute?: GraphQLTypes["Attribute"],
	attributeErrors: Array<GraphQLTypes["AttributeError"]>,
	errors: Array<GraphQLTypes["AttributeError"]>,
	attributeValue?: GraphQLTypes["AttributeValue"]
};
	["AttributeValueFilterInput"]: {
		search?: string
};
	["AttributeValueInput"]: {
		/** ID of the selected attribute. */
	id?: string,
	/** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
	values?: Array<string>,
	/** URL of the file attribute. Every time, a new value is created. */
	file?: string,
	/** File content type. */
	contentType?: string,
	/** List of entity IDs that will be used as references. */
	references?: Array<string>,
	/** Text content in JSON format. */
	richText?: GraphQLTypes["JSONString"],
	/** Represents the boolean value of the attribute value. */
	boolean?: boolean,
	/** Represents the date value of the attribute value. */
	date?: GraphQLTypes["Date"],
	/** Represents the date time value of the attribute value. */
	dateTime?: GraphQLTypes["DateTime"]
};
	["AttributeValueTranslatableContent"]: {
	__typename: "AttributeValueTranslatableContent",
	id: string,
	name: string,
	richText?: GraphQLTypes["JSONString"],
	/** Returns translated attribute value fields for the given language code. */
	translation?: GraphQLTypes["AttributeValueTranslation"],
	/** Represents a value of an attribute. */
	attributeValue?: GraphQLTypes["AttributeValue"]
};
	/** Creates/updates translations for an attribute value. */
["AttributeValueTranslate"]: {
	__typename: "AttributeValueTranslate",
	translationErrors: Array<GraphQLTypes["TranslationError"]>,
	errors: Array<GraphQLTypes["TranslationError"]>,
	attributeValue?: GraphQLTypes["AttributeValue"]
};
	["AttributeValueTranslation"]: {
	__typename: "AttributeValueTranslation",
	id: string,
	/** Translation language. */
	language: GraphQLTypes["LanguageDisplay"],
	name: string,
	richText?: GraphQLTypes["JSONString"]
};
	["AttributeValueTranslationInput"]: {
		name?: string,
	richText?: GraphQLTypes["JSONString"]
};
	/** Updates value of an attribute. */
["AttributeValueUpdate"]: {
	__typename: "AttributeValueUpdate",
	/** The updated attribute. */
	attribute?: GraphQLTypes["Attribute"],
	attributeErrors: Array<GraphQLTypes["AttributeError"]>,
	errors: Array<GraphQLTypes["AttributeError"]>,
	attributeValue?: GraphQLTypes["AttributeValue"]
};
	["AttributeValueUpdateInput"]: {
		/** Represent value of the attribute value (e.g. color values for swatch attributes). */
	value?: string,
	/** Represents the text (JSON) of the attribute value. */
	richText?: GraphQLTypes["JSONString"],
	/** URL of the file attribute. Every time, a new value is created. */
	fileUrl?: string,
	/** File content type. */
	contentType?: string,
	/** Name of a value displayed in the interface. */
	name?: string
};
	["BulkAttributeValueInput"]: {
		/** ID of the selected attribute. */
	id?: string,
	/** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
	values?: Array<string>,
	/** The boolean value of an attribute to resolve. If the passed value is non-existent, it will be created. */
	boolean?: boolean
};
	["BulkProductError"]: {
	__typename: "BulkProductError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["ProductErrorCode"],
	/** List of attributes IDs which causes the error. */
	attributes?: Array<string>,
	/** List of attribute values IDs which causes the error. */
	values?: Array<string>,
	/** Index of an input list item that caused the error. */
	index?: number,
	/** List of warehouse IDs which causes the error. */
	warehouses?: Array<string>,
	/** List of channel IDs which causes the error. */
	channels?: Array<string>
};
	["BulkStockError"]: {
	__typename: "BulkStockError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["ProductErrorCode"],
	/** List of attributes IDs which causes the error. */
	attributes?: Array<string>,
	/** List of attribute values IDs which causes the error. */
	values?: Array<string>,
	/** Index of an input list item that caused the error. */
	index?: number
};
	["CardInput"]: {
		/** Payment method nonce, a token returned by the appropriate provider's SDK. */
	code: string,
	/** Card security code. */
	cvc?: string,
	/** Information about currency and amount. */
	money: GraphQLTypes["MoneyInput"]
};
	["CatalogueInput"]: {
		/** Products related to the discount. */
	products?: Array<string | undefined>,
	/** Categories related to the discount. */
	categories?: Array<string | undefined>,
	/** Collections related to the discount. */
	collections?: Array<string | undefined>,
	/** New in Saleor 3.1. Product variant related to the discount. */
	variants?: Array<string | undefined>
};
	/** Represents a single category of products. Categories allow to organize products
in a tree-hierarchies which can be used for navigation in the storefront. */
["Category"]: {
	__typename: "Category",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	seoTitle?: string,
	seoDescription?: string,
	name: string,
	description?: GraphQLTypes["JSONString"],
	slug: string,
	parent?: GraphQLTypes["Category"],
	level: number,
	/** Description of the category (JSON). */
	descriptionJson?: GraphQLTypes["JSONString"],
	/** List of ancestors of the category. */
	ancestors?: GraphQLTypes["CategoryCountableConnection"],
	/** List of products in the category. */
	products?: GraphQLTypes["ProductCountableConnection"],
	/** List of children of the category. */
	children?: GraphQLTypes["CategoryCountableConnection"],
	backgroundImage?: GraphQLTypes["Image"],
	/** Returns translated category fields for the given language code. */
	translation?: GraphQLTypes["CategoryTranslation"]
};
	/** Deletes categories. */
["CategoryBulkDelete"]: {
	__typename: "CategoryBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	["CategoryCountableConnection"]: {
	__typename: "CategoryCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["CategoryCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["CategoryCountableEdge"]: {
	__typename: "CategoryCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["Category"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates a new category. */
["CategoryCreate"]: {
	__typename: "CategoryCreate",
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>,
	category?: GraphQLTypes["Category"]
};
	/** Deletes a category. */
["CategoryDelete"]: {
	__typename: "CategoryDelete",
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>,
	category?: GraphQLTypes["Category"]
};
	["CategoryFilterInput"]: {
		search?: string,
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>,
	ids?: Array<string | undefined>
};
	["CategoryInput"]: {
		/** Category description (JSON). */
	description?: GraphQLTypes["JSONString"],
	/** Category name. */
	name?: string,
	/** Category slug. */
	slug?: string,
	/** Search engine optimization fields. */
	seo?: GraphQLTypes["SeoInput"],
	/** Background image file. */
	backgroundImage?: GraphQLTypes["Upload"],
	/** Alt text for a product media. */
	backgroundImageAlt?: string
};
	["CategorySortField"]: CategorySortField;
	["CategorySortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Specifies the channel in which to sort the data. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?: string,
	/** Sort categories by the selected field. */
	field: GraphQLTypes["CategorySortField"]
};
	["CategoryTranslatableContent"]: {
	__typename: "CategoryTranslatableContent",
	id: string,
	seoTitle?: string,
	seoDescription?: string,
	name: string,
	description?: GraphQLTypes["JSONString"],
	/** Description of the category (JSON). */
	descriptionJson?: GraphQLTypes["JSONString"],
	/** Returns translated category fields for the given language code. */
	translation?: GraphQLTypes["CategoryTranslation"],
	/** Represents a single category of products. */
	category?: GraphQLTypes["Category"]
};
	/** Creates/updates translations for a category. */
["CategoryTranslate"]: {
	__typename: "CategoryTranslate",
	translationErrors: Array<GraphQLTypes["TranslationError"]>,
	errors: Array<GraphQLTypes["TranslationError"]>,
	category?: GraphQLTypes["Category"]
};
	["CategoryTranslation"]: {
	__typename: "CategoryTranslation",
	id: string,
	/** Translation language. */
	language: GraphQLTypes["LanguageDisplay"],
	seoTitle?: string,
	seoDescription?: string,
	name?: string,
	description?: GraphQLTypes["JSONString"],
	/** Translated description of the product (JSON). */
	descriptionJson?: GraphQLTypes["JSONString"]
};
	/** Updates a category. */
["CategoryUpdate"]: {
	__typename: "CategoryUpdate",
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>,
	category?: GraphQLTypes["Category"]
};
	/** Represents channel. */
["Channel"]: {
	__typename: "Channel",
	id: string,
	name: string,
	isActive: boolean,
	currencyCode: string,
	slug: string,
	/** Whether a channel has associated orders. */
	hasOrders: boolean,
	/** New in Saleor 3.1. Default country for the channel. Default country can be
used in checkout to determine the stock quantities or calculate taxes when the
country was not explicitly provided. */
	defaultCountry: GraphQLTypes["CountryDisplay"]
};
	/** Activate a channel. */
["ChannelActivate"]: {
	__typename: "ChannelActivate",
	/** Activated channel. */
	channel?: GraphQLTypes["Channel"],
	channelErrors: Array<GraphQLTypes["ChannelError"]>,
	errors: Array<GraphQLTypes["ChannelError"]>
};
	/** Creates new channel. */
["ChannelCreate"]: {
	__typename: "ChannelCreate",
	channelErrors: Array<GraphQLTypes["ChannelError"]>,
	errors: Array<GraphQLTypes["ChannelError"]>,
	channel?: GraphQLTypes["Channel"]
};
	["ChannelCreateInput"]: {
		/** isActive flag. */
	isActive?: boolean,
	/** Name of the channel. */
	name: string,
	/** Slug of the channel. */
	slug: string,
	/** Currency of the channel. */
	currencyCode: string,
	/** New in Saleor 3.1. Default country for the channel. Default country can be
used in checkout to determine the stock quantities or calculate taxes when the
country was not explicitly provided. */
	defaultCountry: GraphQLTypes["CountryCode"],
	/** List of shipping zones to assign to the channel. */
	addShippingZones?: Array<string>
};
	/** Deactivate a channel. */
["ChannelDeactivate"]: {
	__typename: "ChannelDeactivate",
	/** Deactivated channel. */
	channel?: GraphQLTypes["Channel"],
	channelErrors: Array<GraphQLTypes["ChannelError"]>,
	errors: Array<GraphQLTypes["ChannelError"]>
};
	/** Delete a channel. Orders associated with the deleted channel will be moved to
the target channel. Checkouts, product availability, and pricing will be removed. */
["ChannelDelete"]: {
	__typename: "ChannelDelete",
	channelErrors: Array<GraphQLTypes["ChannelError"]>,
	errors: Array<GraphQLTypes["ChannelError"]>,
	channel?: GraphQLTypes["Channel"]
};
	["ChannelDeleteInput"]: {
		/** ID of channel to migrate orders from origin channel. */
	channelId: string
};
	["ChannelError"]: {
	__typename: "ChannelError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["ChannelErrorCode"],
	/** List of shipping zone IDs which causes the error. */
	shippingZones?: Array<string>
};
	/** An enumeration. */
["ChannelErrorCode"]: ChannelErrorCode;
	/** Update a channel. */
["ChannelUpdate"]: {
	__typename: "ChannelUpdate",
	channelErrors: Array<GraphQLTypes["ChannelError"]>,
	errors: Array<GraphQLTypes["ChannelError"]>,
	channel?: GraphQLTypes["Channel"]
};
	["ChannelUpdateInput"]: {
		/** isActive flag. */
	isActive?: boolean,
	/** Name of the channel. */
	name?: string,
	/** Slug of the channel. */
	slug?: string,
	/** New in Saleor 3.1. Default country for the channel. Default country can be
used in checkout to determine the stock quantities or calculate taxes when the
country was not explicitly provided. */
	defaultCountry?: GraphQLTypes["CountryCode"],
	/** List of shipping zones to assign to the channel. */
	addShippingZones?: Array<string>,
	/** List of shipping zones to unassign from the channel. */
	removeShippingZones?: Array<string>
};
	/** Checkout object. */
["Checkout"]: {
	__typename: "Checkout",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	created: GraphQLTypes["DateTime"],
	lastChange: GraphQLTypes["DateTime"],
	user?: GraphQLTypes["User"],
	channel: GraphQLTypes["Channel"],
	billingAddress?: GraphQLTypes["Address"],
	shippingAddress?: GraphQLTypes["Address"],
	note: string,
	discount?: GraphQLTypes["Money"],
	discountName?: string,
	translatedDiscountName?: string,
	voucherCode?: string,
	/** Shipping methods that can be used with this checkout. */
	availableShippingMethods?: Array<GraphQLTypes["ShippingMethod"]>,
	/** Shipping methods that can be used with this checkout. */
	shippingMethods?: Array<GraphQLTypes["ShippingMethod"]>,
	/** New in Saleor 3.1. Collection points that can be used for this order. Note:
this feature is in a preview state and can be subject to changes at later point. */
	availableCollectionPoints: Array<GraphQLTypes["Warehouse"]>,
	/** List of available payment gateways. */
	availablePaymentGateways: Array<GraphQLTypes["PaymentGateway"]>,
	/** Email of a customer. */
	email?: string,
	/** List of gift cards associated with this checkout. */
	giftCards?: Array<GraphQLTypes["GiftCard"] | undefined>,
	/** Returns True, if checkout requires shipping. */
	isShippingRequired: boolean,
	/** The number of items purchased. */
	quantity: number,
	/** New in Saleor 3.1. Date when oldest stock reservation for this checkout  expires or null if no stock is reserved. */
	stockReservationExpires?: GraphQLTypes["DateTime"],
	/** A list of checkout lines, each containing information about an item in the checkout. */
	lines?: Array<GraphQLTypes["CheckoutLine"] | undefined>,
	/** The price of the shipping, with all the taxes included. */
	shippingPrice?: GraphQLTypes["TaxedMoney"],
	/** The shipping method related with checkout. */
	shippingMethod?: GraphQLTypes["ShippingMethod"],
	/** New in Saleor 3.1. The delivery method selected for this checkout. Note: this
feature is in a preview state and can be subject to changes at later point. */
	deliveryMethod?: GraphQLTypes["DeliveryMethod"],
	/** The price of the checkout before shipping, with taxes included. */
	subtotalPrice?: GraphQLTypes["TaxedMoney"],
	/** The checkout's token. */
	token: GraphQLTypes["UUID"],
	/** The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included. */
	totalPrice?: GraphQLTypes["TaxedMoney"],
	/** Checkout language code. */
	languageCode: GraphQLTypes["LanguageCodeEnum"]
};
	/** Adds a gift card or a voucher to a checkout. */
["CheckoutAddPromoCode"]: {
	__typename: "CheckoutAddPromoCode",
	/** The checkout with the added gift card or voucher. */
	checkout?: GraphQLTypes["Checkout"],
	checkoutErrors: Array<GraphQLTypes["CheckoutError"]>,
	errors: Array<GraphQLTypes["CheckoutError"]>
};
	/** Update billing address in the existing checkout. */
["CheckoutBillingAddressUpdate"]: {
	__typename: "CheckoutBillingAddressUpdate",
	/** An updated checkout. */
	checkout?: GraphQLTypes["Checkout"],
	checkoutErrors: Array<GraphQLTypes["CheckoutError"]>,
	errors: Array<GraphQLTypes["CheckoutError"]>
};
	/** Completes the checkout. As a result a new order is created and a payment charge
is made. This action requires a successful payment before it can be performed.
In case additional confirmation step as 3D secure is required confirmationNeeded
flag will be set to True and no order created until payment is confirmed with
second call of this mutation. */
["CheckoutComplete"]: {
	__typename: "CheckoutComplete",
	/** Placed order. */
	order?: GraphQLTypes["Order"],
	/** Set to true if payment needs to be confirmed before checkout is complete. */
	confirmationNeeded: boolean,
	/** Confirmation data used to process additional authorization steps. */
	confirmationData?: GraphQLTypes["JSONString"],
	checkoutErrors: Array<GraphQLTypes["CheckoutError"]>,
	errors: Array<GraphQLTypes["CheckoutError"]>
};
	["CheckoutCountableConnection"]: {
	__typename: "CheckoutCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["CheckoutCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["CheckoutCountableEdge"]: {
	__typename: "CheckoutCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["Checkout"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Create a new checkout. */
["CheckoutCreate"]: {
	__typename: "CheckoutCreate",
	/** Whether the checkout was created or the current active one was returned. Refer
to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout. */
	created?: boolean,
	checkoutErrors: Array<GraphQLTypes["CheckoutError"]>,
	errors: Array<GraphQLTypes["CheckoutError"]>,
	checkout?: GraphQLTypes["Checkout"]
};
	["CheckoutCreateInput"]: {
		/** Slug of a channel in which to create a checkout. */
	channel?: string,
	/** A list of checkout lines, each containing information about an item in the checkout. */
	lines?: Array<GraphQLTypes["CheckoutLineInput"]>,
	/** The customer's email address. */
	email?: string,
	/** The mailing address to where the checkout will be shipped. Note: the address
will be ignored if the checkout doesn't contain shippable items. */
	shippingAddress?: GraphQLTypes["AddressInput"],
	/** Billing address of the customer. */
	billingAddress?: GraphQLTypes["AddressInput"],
	/** Checkout language code. */
	languageCode?: GraphQLTypes["LanguageCodeEnum"]
};
	/** Sets the customer as the owner of the checkout. */
["CheckoutCustomerAttach"]: {
	__typename: "CheckoutCustomerAttach",
	/** An updated checkout. */
	checkout?: GraphQLTypes["Checkout"],
	checkoutErrors: Array<GraphQLTypes["CheckoutError"]>,
	errors: Array<GraphQLTypes["CheckoutError"]>
};
	/** Removes the user assigned as the owner of the checkout. */
["CheckoutCustomerDetach"]: {
	__typename: "CheckoutCustomerDetach",
	/** An updated checkout. */
	checkout?: GraphQLTypes["Checkout"],
	checkoutErrors: Array<GraphQLTypes["CheckoutError"]>,
	errors: Array<GraphQLTypes["CheckoutError"]>
};
	/** New in Saleor 3.1. Updates the delivery method (shipping method or pick up
point) of the checkout. Note: this feature is in a preview state and can be
subject to changes at later point. */
["CheckoutDeliveryMethodUpdate"]: {
	__typename: "CheckoutDeliveryMethodUpdate",
	/** An updated checkout. */
	checkout?: GraphQLTypes["Checkout"],
	errors: Array<GraphQLTypes["CheckoutError"]>
};
	/** Updates email address in the existing checkout object. */
["CheckoutEmailUpdate"]: {
	__typename: "CheckoutEmailUpdate",
	/** An updated checkout. */
	checkout?: GraphQLTypes["Checkout"],
	checkoutErrors: Array<GraphQLTypes["CheckoutError"]>,
	errors: Array<GraphQLTypes["CheckoutError"]>
};
	["CheckoutError"]: {
	__typename: "CheckoutError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["CheckoutErrorCode"],
	/** List of varint IDs which causes the error. */
	variants?: Array<string>,
	/** List of line Ids which cause the error. */
	lines?: Array<string>,
	/** A type of address that causes the error. */
	addressType?: GraphQLTypes["AddressTypeEnum"]
};
	/** An enumeration. */
["CheckoutErrorCode"]: CheckoutErrorCode;
	["CheckoutFilterInput"]: {
		customer?: string,
	created?: GraphQLTypes["DateRangeInput"],
	search?: string,
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>,
	channels?: Array<string | undefined>
};
	/** Update language code in the existing checkout. */
["CheckoutLanguageCodeUpdate"]: {
	__typename: "CheckoutLanguageCodeUpdate",
	/** An updated checkout. */
	checkout?: GraphQLTypes["Checkout"],
	checkoutErrors: Array<GraphQLTypes["CheckoutError"]>,
	errors: Array<GraphQLTypes["CheckoutError"]>
};
	/** Represents an item in the checkout. */
["CheckoutLine"]: {
	__typename: "CheckoutLine",
	id: string,
	variant: GraphQLTypes["ProductVariant"],
	quantity: number,
	/** The sum of the checkout line price, taxes and discounts. */
	totalPrice?: GraphQLTypes["TaxedMoney"],
	/** Indicates whether the item need to be delivered. */
	requiresShipping?: boolean
};
	["CheckoutLineCountableConnection"]: {
	__typename: "CheckoutLineCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["CheckoutLineCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["CheckoutLineCountableEdge"]: {
	__typename: "CheckoutLineCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["CheckoutLine"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Deletes a CheckoutLine. */
["CheckoutLineDelete"]: {
	__typename: "CheckoutLineDelete",
	/** An updated checkout. */
	checkout?: GraphQLTypes["Checkout"],
	checkoutErrors: Array<GraphQLTypes["CheckoutError"]>,
	errors: Array<GraphQLTypes["CheckoutError"]>
};
	["CheckoutLineInput"]: {
		/** The number of items purchased. */
	quantity: number,
	/** ID of the product variant. */
	variantId: string
};
	/** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
["CheckoutLinesAdd"]: {
	__typename: "CheckoutLinesAdd",
	/** An updated checkout. */
	checkout?: GraphQLTypes["Checkout"],
	checkoutErrors: Array<GraphQLTypes["CheckoutError"]>,
	errors: Array<GraphQLTypes["CheckoutError"]>
};
	/** Deletes checkout lines. */
["CheckoutLinesDelete"]: {
	__typename: "CheckoutLinesDelete",
	/** An updated checkout. */
	checkout?: GraphQLTypes["Checkout"],
	errors: Array<GraphQLTypes["CheckoutError"]>
};
	/** Updates checkout line in the existing checkout. */
["CheckoutLinesUpdate"]: {
	__typename: "CheckoutLinesUpdate",
	/** An updated checkout. */
	checkout?: GraphQLTypes["Checkout"],
	checkoutErrors: Array<GraphQLTypes["CheckoutError"]>,
	errors: Array<GraphQLTypes["CheckoutError"]>
};
	/** Create a new payment for given checkout. */
["CheckoutPaymentCreate"]: {
	__typename: "CheckoutPaymentCreate",
	/** Related checkout object. */
	checkout?: GraphQLTypes["Checkout"],
	/** A newly created payment. */
	payment?: GraphQLTypes["Payment"],
	paymentErrors: Array<GraphQLTypes["PaymentError"]>,
	errors: Array<GraphQLTypes["PaymentError"]>
};
	/** Remove a gift card or a voucher from a checkout. */
["CheckoutRemovePromoCode"]: {
	__typename: "CheckoutRemovePromoCode",
	/** The checkout with the removed gift card or voucher. */
	checkout?: GraphQLTypes["Checkout"],
	checkoutErrors: Array<GraphQLTypes["CheckoutError"]>,
	errors: Array<GraphQLTypes["CheckoutError"]>
};
	/** Update shipping address in the existing checkout. */
["CheckoutShippingAddressUpdate"]: {
	__typename: "CheckoutShippingAddressUpdate",
	/** An updated checkout. */
	checkout?: GraphQLTypes["Checkout"],
	checkoutErrors: Array<GraphQLTypes["CheckoutError"]>,
	errors: Array<GraphQLTypes["CheckoutError"]>
};
	/** Updates the shipping method of the checkout. */
["CheckoutShippingMethodUpdate"]: {
	__typename: "CheckoutShippingMethodUpdate",
	/** An updated checkout. */
	checkout?: GraphQLTypes["Checkout"],
	checkoutErrors: Array<GraphQLTypes["CheckoutError"]>,
	errors: Array<GraphQLTypes["CheckoutError"]>
};
	["CheckoutSortField"]: CheckoutSortField;
	["CheckoutSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort checkouts by the selected field. */
	field: GraphQLTypes["CheckoutSortField"]
};
	["ChoiceValue"]: {
	__typename: "ChoiceValue",
	raw?: string,
	verbose?: string
};
	/** Represents a collection of products. */
["Collection"]: {
	__typename: "Collection",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	seoTitle?: string,
	seoDescription?: string,
	name: string,
	description?: GraphQLTypes["JSONString"],
	slug: string,
	/** Channel given to retrieve this collection. Also used by federation gateway to resolve this object in a federated query. */
	channel?: string,
	/** Description of the collection (JSON). */
	descriptionJson?: GraphQLTypes["JSONString"],
	/** List of products in this collection. */
	products?: GraphQLTypes["ProductCountableConnection"],
	backgroundImage?: GraphQLTypes["Image"],
	/** Returns translated collection fields for the given language code. */
	translation?: GraphQLTypes["CollectionTranslation"],
	/** List of channels in which the collection is available. */
	channelListings?: Array<GraphQLTypes["CollectionChannelListing"]>
};
	/** Adds products to a collection. */
["CollectionAddProducts"]: {
	__typename: "CollectionAddProducts",
	/** Collection to which products will be added. */
	collection?: GraphQLTypes["Collection"],
	collectionErrors: Array<GraphQLTypes["CollectionError"]>,
	errors: Array<GraphQLTypes["CollectionError"]>
};
	/** Deletes collections. */
["CollectionBulkDelete"]: {
	__typename: "CollectionBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	collectionErrors: Array<GraphQLTypes["CollectionError"]>,
	errors: Array<GraphQLTypes["CollectionError"]>
};
	/** Represents collection channel listing. */
["CollectionChannelListing"]: {
	__typename: "CollectionChannelListing",
	id: string,
	publicationDate?: GraphQLTypes["Date"],
	isPublished: boolean,
	channel: GraphQLTypes["Channel"]
};
	["CollectionChannelListingError"]: {
	__typename: "CollectionChannelListingError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["ProductErrorCode"],
	/** List of attributes IDs which causes the error. */
	attributes?: Array<string>,
	/** List of attribute values IDs which causes the error. */
	values?: Array<string>,
	/** List of channels IDs which causes the error. */
	channels?: Array<string>
};
	/** Manage collection's availability in channels. */
["CollectionChannelListingUpdate"]: {
	__typename: "CollectionChannelListingUpdate",
	/** An updated collection instance. */
	collection?: GraphQLTypes["Collection"],
	collectionChannelListingErrors: Array<GraphQLTypes["CollectionChannelListingError"]>,
	errors: Array<GraphQLTypes["CollectionChannelListingError"]>
};
	["CollectionChannelListingUpdateInput"]: {
		/** List of channels to which the collection should be assigned. */
	addChannels?: Array<GraphQLTypes["PublishableChannelListingInput"]>,
	/** List of channels from which the collection should be unassigned. */
	removeChannels?: Array<string>
};
	["CollectionCountableConnection"]: {
	__typename: "CollectionCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["CollectionCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["CollectionCountableEdge"]: {
	__typename: "CollectionCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["Collection"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates a new collection. */
["CollectionCreate"]: {
	__typename: "CollectionCreate",
	collectionErrors: Array<GraphQLTypes["CollectionError"]>,
	errors: Array<GraphQLTypes["CollectionError"]>,
	collection?: GraphQLTypes["Collection"]
};
	["CollectionCreateInput"]: {
		/** Informs whether a collection is published. */
	isPublished?: boolean,
	/** Name of the collection. */
	name?: string,
	/** Slug of the collection. */
	slug?: string,
	/** Description of the collection (JSON). */
	description?: GraphQLTypes["JSONString"],
	/** Background image file. */
	backgroundImage?: GraphQLTypes["Upload"],
	/** Alt text for an image. */
	backgroundImageAlt?: string,
	/** Search engine optimization fields. */
	seo?: GraphQLTypes["SeoInput"],
	/** Publication date. ISO 8601 standard. */
	publicationDate?: GraphQLTypes["Date"],
	/** List of products to be added to the collection. */
	products?: Array<string | undefined>
};
	/** Deletes a collection. */
["CollectionDelete"]: {
	__typename: "CollectionDelete",
	collectionErrors: Array<GraphQLTypes["CollectionError"]>,
	errors: Array<GraphQLTypes["CollectionError"]>,
	collection?: GraphQLTypes["Collection"]
};
	["CollectionError"]: {
	__typename: "CollectionError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** List of products IDs which causes the error. */
	products?: Array<string>,
	/** The error code. */
	code: GraphQLTypes["CollectionErrorCode"]
};
	/** An enumeration. */
["CollectionErrorCode"]: CollectionErrorCode;
	["CollectionFilterInput"]: {
		published?: GraphQLTypes["CollectionPublished"],
	search?: string,
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>,
	ids?: Array<string | undefined>,
	/** Specifies the channel by which the data should be filtered. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?: string
};
	["CollectionInput"]: {
		/** Informs whether a collection is published. */
	isPublished?: boolean,
	/** Name of the collection. */
	name?: string,
	/** Slug of the collection. */
	slug?: string,
	/** Description of the collection (JSON). */
	description?: GraphQLTypes["JSONString"],
	/** Background image file. */
	backgroundImage?: GraphQLTypes["Upload"],
	/** Alt text for an image. */
	backgroundImageAlt?: string,
	/** Search engine optimization fields. */
	seo?: GraphQLTypes["SeoInput"],
	/** Publication date. ISO 8601 standard. */
	publicationDate?: GraphQLTypes["Date"]
};
	["CollectionPublished"]: CollectionPublished;
	/** Remove products from a collection. */
["CollectionRemoveProducts"]: {
	__typename: "CollectionRemoveProducts",
	/** Collection from which products will be removed. */
	collection?: GraphQLTypes["Collection"],
	collectionErrors: Array<GraphQLTypes["CollectionError"]>,
	errors: Array<GraphQLTypes["CollectionError"]>
};
	/** Reorder the products of a collection. */
["CollectionReorderProducts"]: {
	__typename: "CollectionReorderProducts",
	/** Collection from which products are reordered. */
	collection?: GraphQLTypes["Collection"],
	collectionErrors: Array<GraphQLTypes["CollectionError"]>,
	errors: Array<GraphQLTypes["CollectionError"]>
};
	["CollectionSortField"]: CollectionSortField;
	["CollectionSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Specifies the channel in which to sort the data. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?: string,
	/** Sort collections by the selected field. */
	field: GraphQLTypes["CollectionSortField"]
};
	["CollectionTranslatableContent"]: {
	__typename: "CollectionTranslatableContent",
	id: string,
	seoTitle?: string,
	seoDescription?: string,
	name: string,
	description?: GraphQLTypes["JSONString"],
	/** Description of the collection (JSON). */
	descriptionJson?: GraphQLTypes["JSONString"],
	/** Returns translated collection fields for the given language code. */
	translation?: GraphQLTypes["CollectionTranslation"],
	/** Represents a collection of products. */
	collection?: GraphQLTypes["Collection"]
};
	/** Creates/updates translations for a collection. */
["CollectionTranslate"]: {
	__typename: "CollectionTranslate",
	translationErrors: Array<GraphQLTypes["TranslationError"]>,
	errors: Array<GraphQLTypes["TranslationError"]>,
	collection?: GraphQLTypes["Collection"]
};
	["CollectionTranslation"]: {
	__typename: "CollectionTranslation",
	id: string,
	/** Translation language. */
	language: GraphQLTypes["LanguageDisplay"],
	seoTitle?: string,
	seoDescription?: string,
	name?: string,
	description?: GraphQLTypes["JSONString"],
	/** Translated description of the product (JSON). */
	descriptionJson?: GraphQLTypes["JSONString"]
};
	/** Updates a collection. */
["CollectionUpdate"]: {
	__typename: "CollectionUpdate",
	collectionErrors: Array<GraphQLTypes["CollectionError"]>,
	errors: Array<GraphQLTypes["CollectionError"]>,
	collection?: GraphQLTypes["Collection"]
};
	/** Stores information about a single configuration field. */
["ConfigurationItem"]: {
	__typename: "ConfigurationItem",
	/** Name of the field. */
	name: string,
	/** Current value of the field. */
	value?: string,
	/** Type of the field. */
	type?: GraphQLTypes["ConfigurationTypeFieldEnum"],
	/** Help text for the field. */
	helpText?: string,
	/** Label for the field. */
	label?: string
};
	["ConfigurationItemInput"]: {
		/** Name of the field to update. */
	name: string,
	/** Value of the given field to update. */
	value?: string
};
	/** An enumeration. */
["ConfigurationTypeFieldEnum"]: ConfigurationTypeFieldEnum;
	/** Confirm user account with token sent by email during registration. */
["ConfirmAccount"]: {
	__typename: "ConfirmAccount",
	/** An activated user account. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** Confirm the email change of the logged-in user. */
["ConfirmEmailChange"]: {
	__typename: "ConfirmEmailChange",
	/** A user instance with a new email. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** An enumeration. */
["CountryCode"]: CountryCode;
	["CountryDisplay"]: {
	__typename: "CountryDisplay",
	/** Country code. */
	code: string,
	/** Country name. */
	country: string,
	/** Country tax. */
	vat?: GraphQLTypes["VAT"]
};
	["CountryFilterInput"]: {
		/** Boolean for filtering countries by having shipping zone assigned.If 'true',
return countries with shipping zone assigned.If 'false', return countries
without any shipping zone assigned.If the argument is not provided (null),
return all countries. */
	attachedToShippingZones?: boolean
};
	/** Create JWT token. */
["CreateToken"]: {
	__typename: "CreateToken",
	/** JWT token, required to authenticate. */
	token?: string,
	/** JWT refresh token, required to re-generate access token. */
	refreshToken?: string,
	/** CSRF token required to re-generate access token. */
	csrfToken?: string,
	/** A user instance. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	["CreditCard"]: {
	__typename: "CreditCard",
	/** Card brand. */
	brand: string,
	/** First 4 digits of the card number. */
	firstDigits?: string,
	/** Last 4 digits of the card number. */
	lastDigits: string,
	/** Two-digit number representing the card’s expiration month. */
	expMonth?: number,
	/** Four-digit number representing the card’s expiration year. */
	expYear?: number
};
	/** Deletes customers. */
["CustomerBulkDelete"]: {
	__typename: "CustomerBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** Creates a new customer. */
["CustomerCreate"]: {
	__typename: "CustomerCreate",
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>,
	user?: GraphQLTypes["User"]
};
	/** Deletes a customer. */
["CustomerDelete"]: {
	__typename: "CustomerDelete",
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>,
	user?: GraphQLTypes["User"]
};
	/** History log of the customer. */
["CustomerEvent"]: {
	__typename: "CustomerEvent",
	id: string,
	/** Date when event happened at in ISO 8601 format. */
	date?: GraphQLTypes["DateTime"],
	/** Customer event type. */
	type?: GraphQLTypes["CustomerEventsEnum"],
	/** User who performed the action. */
	user?: GraphQLTypes["User"],
	/** App that performed the action. */
	app?: GraphQLTypes["App"],
	/** Content of the event. */
	message?: string,
	/** Number of objects concerned by the event. */
	count?: number,
	/** The concerned order. */
	order?: GraphQLTypes["Order"],
	/** The concerned order line. */
	orderLine?: GraphQLTypes["OrderLine"]
};
	/** An enumeration. */
["CustomerEventsEnum"]: CustomerEventsEnum;
	["CustomerFilterInput"]: {
		dateJoined?: GraphQLTypes["DateRangeInput"],
	numberOfOrders?: GraphQLTypes["IntRangeInput"],
	placedOrders?: GraphQLTypes["DateRangeInput"],
	search?: string,
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>,
	updatedAt?: GraphQLTypes["DateTimeRangeInput"]
};
	["CustomerInput"]: {
		/** Billing address of the customer. */
	defaultBillingAddress?: GraphQLTypes["AddressInput"],
	/** Shipping address of the customer. */
	defaultShippingAddress?: GraphQLTypes["AddressInput"],
	/** Given name. */
	firstName?: string,
	/** Family name. */
	lastName?: string,
	/** The unique email address of the user. */
	email?: string,
	/** User account is active. */
	isActive?: boolean,
	/** A note about the user. */
	note?: string,
	/** User language code. */
	languageCode?: GraphQLTypes["LanguageCodeEnum"]
};
	/** Updates an existing customer. */
["CustomerUpdate"]: {
	__typename: "CustomerUpdate",
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>,
	user?: GraphQLTypes["User"]
};
	/** The `Date` scalar type represents a Date
value as specified by
[iso8601](https://en.wikipedia.org/wiki/ISO_8601). */
["Date"]:any;
	["DateRangeInput"]: {
		/** Start date. */
	gte?: GraphQLTypes["Date"],
	/** End date. */
	lte?: GraphQLTypes["Date"]
};
	/** The `DateTime` scalar type represents a DateTime
value as specified by
[iso8601](https://en.wikipedia.org/wiki/ISO_8601). */
["DateTime"]:any;
	["DateTimeRangeInput"]: {
		/** Start date. */
	gte?: GraphQLTypes["DateTime"],
	/** End date. */
	lte?: GraphQLTypes["DateTime"]
};
	/** Deactivate all JWT tokens of the currently authenticated user. */
["DeactivateAllUserTokens"]: {
	__typename: "DeactivateAllUserTokens",
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** Delete metadata of an object. */
["DeleteMetadata"]: {
	__typename: "DeleteMetadata",
	metadataErrors: Array<GraphQLTypes["MetadataError"]>,
	errors: Array<GraphQLTypes["MetadataError"]>,
	item?: GraphQLTypes["ObjectWithMetadata"]
};
	/** Delete object's private metadata. */
["DeletePrivateMetadata"]: {
	__typename: "DeletePrivateMetadata",
	metadataErrors: Array<GraphQLTypes["MetadataError"]>,
	errors: Array<GraphQLTypes["MetadataError"]>,
	item?: GraphQLTypes["ObjectWithMetadata"]
};
	/** New in Saleor 3.1. Represents a delivery method chosen for the checkout.
`Warehouse` type is used when checkout is marked as "click and collect" and
`ShippingMethod` otherwise. Note: this feature is in a preview state and can be
subject to changes at later point. */
["DeliveryMethod"]:{
	__typename:"Warehouse" | "ShippingMethod"
	['...on Warehouse']: '__union' & GraphQLTypes["Warehouse"];
	['...on ShippingMethod']: '__union' & GraphQLTypes["ShippingMethod"];
};
	["DigitalContent"]: {
	__typename: "DigitalContent",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	useDefaultSettings: boolean,
	automaticFulfillment: boolean,
	contentFile: string,
	maxDownloads?: number,
	urlValidDays?: number,
	/** List of URLs for the digital variant. */
	urls?: Array<GraphQLTypes["DigitalContentUrl"] | undefined>,
	/** Product variant assigned to digital content. */
	productVariant: GraphQLTypes["ProductVariant"]
};
	["DigitalContentCountableConnection"]: {
	__typename: "DigitalContentCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["DigitalContentCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["DigitalContentCountableEdge"]: {
	__typename: "DigitalContentCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["DigitalContent"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Create new digital content. This mutation must be sent as a `multipart` request.
More detailed specs of the upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
["DigitalContentCreate"]: {
	__typename: "DigitalContentCreate",
	variant?: GraphQLTypes["ProductVariant"],
	content?: GraphQLTypes["DigitalContent"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	/** Remove digital content assigned to given variant. */
["DigitalContentDelete"]: {
	__typename: "DigitalContentDelete",
	variant?: GraphQLTypes["ProductVariant"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	["DigitalContentInput"]: {
		/** Use default digital content settings for this product. */
	useDefaultSettings: boolean,
	/** Determines how many times a download link can be accessed by a customer. */
	maxDownloads?: number,
	/** Determines for how many days a download link is active since it was generated. */
	urlValidDays?: number,
	/** Overwrite default automatic_fulfillment setting for variant. */
	automaticFulfillment?: boolean
};
	/** Update digital content. */
["DigitalContentUpdate"]: {
	__typename: "DigitalContentUpdate",
	variant?: GraphQLTypes["ProductVariant"],
	content?: GraphQLTypes["DigitalContent"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	["DigitalContentUploadInput"]: {
		/** Use default digital content settings for this product. */
	useDefaultSettings: boolean,
	/** Determines how many times a download link can be accessed by a customer. */
	maxDownloads?: number,
	/** Determines for how many days a download link is active since it was generated. */
	urlValidDays?: number,
	/** Overwrite default automatic_fulfillment setting for variant. */
	automaticFulfillment?: boolean,
	/** Represents an file in a multipart request. */
	contentFile: GraphQLTypes["Upload"]
};
	["DigitalContentUrl"]: {
	__typename: "DigitalContentUrl",
	id: string,
	content: GraphQLTypes["DigitalContent"],
	created: GraphQLTypes["DateTime"],
	downloadNum: number,
	/** URL for digital content. */
	url?: string,
	/** UUID of digital content. */
	token: GraphQLTypes["UUID"]
};
	/** Generate new URL to digital content. */
["DigitalContentUrlCreate"]: {
	__typename: "DigitalContentUrlCreate",
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>,
	digitalContentUrl?: GraphQLTypes["DigitalContentUrl"]
};
	["DigitalContentUrlCreateInput"]: {
		/** Digital content ID which URL will belong to. */
	content: string
};
	["DiscountError"]: {
	__typename: "DiscountError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** List of products IDs which causes the error. */
	products?: Array<string>,
	/** The error code. */
	code: GraphQLTypes["DiscountErrorCode"],
	/** List of channels IDs which causes the error. */
	channels?: Array<string>
};
	/** An enumeration. */
["DiscountErrorCode"]: DiscountErrorCode;
	["DiscountStatusEnum"]: DiscountStatusEnum;
	["DiscountValueTypeEnum"]: DiscountValueTypeEnum;
	/** An enumeration. */
["DistanceUnitsEnum"]: DistanceUnitsEnum;
	/** Represents shop's domain. */
["Domain"]: {
	__typename: "Domain",
	/** The host name of the domain. */
	host: string,
	/** Inform if SSL is enabled. */
	sslEnabled: boolean,
	/** Shop's absolute URL. */
	url: string
};
	/** Deletes draft orders. */
["DraftOrderBulkDelete"]: {
	__typename: "DraftOrderBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	/** Completes creating an order. */
["DraftOrderComplete"]: {
	__typename: "DraftOrderComplete",
	/** Completed order. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	/** Creates a new draft order. */
["DraftOrderCreate"]: {
	__typename: "DraftOrderCreate",
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>,
	order?: GraphQLTypes["Order"]
};
	["DraftOrderCreateInput"]: {
		/** Billing address of the customer. */
	billingAddress?: GraphQLTypes["AddressInput"],
	/** Customer associated with the draft order. */
	user?: string,
	/** Email address of the customer. */
	userEmail?: string,
	/** Discount amount for the order. */
	discount?: GraphQLTypes["PositiveDecimal"],
	/** Shipping address of the customer. */
	shippingAddress?: GraphQLTypes["AddressInput"],
	/** ID of a selected shipping method. */
	shippingMethod?: string,
	/** ID of the voucher associated with the order. */
	voucher?: string,
	/** A note from a customer. Visible by customers in the order summary. */
	customerNote?: string,
	/** ID of the channel associated with the order. */
	channelId?: string,
	/** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
	redirectUrl?: string,
	/** Variant line input consisting of variant ID and quantity of products. */
	lines?: Array<GraphQLTypes["OrderLineCreateInput"] | undefined>
};
	/** Deletes a draft order. */
["DraftOrderDelete"]: {
	__typename: "DraftOrderDelete",
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>,
	order?: GraphQLTypes["Order"]
};
	["DraftOrderInput"]: {
		/** Billing address of the customer. */
	billingAddress?: GraphQLTypes["AddressInput"],
	/** Customer associated with the draft order. */
	user?: string,
	/** Email address of the customer. */
	userEmail?: string,
	/** Discount amount for the order. */
	discount?: GraphQLTypes["PositiveDecimal"],
	/** Shipping address of the customer. */
	shippingAddress?: GraphQLTypes["AddressInput"],
	/** ID of a selected shipping method. */
	shippingMethod?: string,
	/** ID of the voucher associated with the order. */
	voucher?: string,
	/** A note from a customer. Visible by customers in the order summary. */
	customerNote?: string,
	/** ID of the channel associated with the order. */
	channelId?: string,
	/** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
	redirectUrl?: string
};
	/** Deletes order lines. */
["DraftOrderLinesBulkDelete"]: {
	__typename: "DraftOrderLinesBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	/** Updates a draft order. */
["DraftOrderUpdate"]: {
	__typename: "DraftOrderUpdate",
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>,
	order?: GraphQLTypes["Order"]
};
	/** Event delivery. */
["EventDelivery"]: {
	__typename: "EventDelivery",
	id: string,
	createdAt: GraphQLTypes["DateTime"],
	/** Event delivery status. */
	status: GraphQLTypes["EventDeliveryStatusEnum"],
	/** Webhook event type. */
	eventType: GraphQLTypes["WebhookEventTypeEnum"],
	/** Event delivery attempts. */
	attempts?: GraphQLTypes["EventDeliveryAttemptCountableConnection"],
	/** Event payload. */
	payload?: string
};
	/** Event delivery attempts. */
["EventDeliveryAttempt"]: {
	__typename: "EventDeliveryAttempt",
	id: string,
	/** Event delivery creation date and time. */
	createdAt: GraphQLTypes["DateTime"],
	taskId?: string,
	duration?: number,
	response?: string,
	responseHeaders?: string,
	requestHeaders?: string,
	/** Event delivery status. */
	status: GraphQLTypes["EventDeliveryStatusEnum"]
};
	["EventDeliveryAttemptCountableConnection"]: {
	__typename: "EventDeliveryAttemptCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["EventDeliveryAttemptCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["EventDeliveryAttemptCountableEdge"]: {
	__typename: "EventDeliveryAttemptCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["EventDeliveryAttempt"],
	/** A cursor for use in pagination. */
	cursor: string
};
	["EventDeliveryAttemptSortField"]: EventDeliveryAttemptSortField;
	["EventDeliveryAttemptSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort attempts by the selected field. */
	field: GraphQLTypes["EventDeliveryAttemptSortField"]
};
	["EventDeliveryCountableConnection"]: {
	__typename: "EventDeliveryCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["EventDeliveryCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["EventDeliveryCountableEdge"]: {
	__typename: "EventDeliveryCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["EventDelivery"],
	/** A cursor for use in pagination. */
	cursor: string
};
	["EventDeliveryFilterInput"]: {
		status?: GraphQLTypes["EventDeliveryStatusEnum"],
	eventType?: GraphQLTypes["WebhookEventTypeEnum"]
};
	/** Retries event delivery. */
["EventDeliveryRetry"]: {
	__typename: "EventDeliveryRetry",
	/** Event delivery. */
	delivery?: GraphQLTypes["EventDelivery"],
	errors: Array<GraphQLTypes["WebhookError"]>
};
	["EventDeliverySortField"]: EventDeliverySortField;
	["EventDeliverySortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort deliveries by the selected field. */
	field: GraphQLTypes["EventDeliverySortField"]
};
	["EventDeliveryStatusEnum"]: EventDeliveryStatusEnum;
	["ExportError"]: {
	__typename: "ExportError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["ExportErrorCode"]
};
	/** An enumeration. */
["ExportErrorCode"]: ExportErrorCode;
	/** History log of export file. */
["ExportEvent"]: {
	__typename: "ExportEvent",
	/** The ID of the object. */
	id: string,
	/** Date when event happened at in ISO 8601 format. */
	date: GraphQLTypes["DateTime"],
	/** Export event type. */
	type: GraphQLTypes["ExportEventsEnum"],
	/** User who performed the action. */
	user?: GraphQLTypes["User"],
	/** App which performed the action. */
	app?: GraphQLTypes["App"],
	/** Content of the event. */
	message: string
};
	/** An enumeration. */
["ExportEventsEnum"]: ExportEventsEnum;
	/** Represents a job data of exported file. */
["ExportFile"]: {
	__typename: "ExportFile",
	id: string,
	/** Job status. */
	status: GraphQLTypes["JobStatusEnum"],
	/** Created date time of job in ISO 8601 format. */
	createdAt: GraphQLTypes["DateTime"],
	/** Date time of job last update in ISO 8601 format. */
	updatedAt: GraphQLTypes["DateTime"],
	/** Job message. */
	message?: string,
	/** The URL of field to download. */
	url?: string,
	/** List of events associated with the export. */
	events?: Array<GraphQLTypes["ExportEvent"]>,
	user?: GraphQLTypes["User"],
	app?: GraphQLTypes["App"]
};
	["ExportFileCountableConnection"]: {
	__typename: "ExportFileCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["ExportFileCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["ExportFileCountableEdge"]: {
	__typename: "ExportFileCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["ExportFile"],
	/** A cursor for use in pagination. */
	cursor: string
};
	["ExportFileFilterInput"]: {
		createdAt?: GraphQLTypes["DateTimeRangeInput"],
	updatedAt?: GraphQLTypes["DateTimeRangeInput"],
	status?: GraphQLTypes["JobStatusEnum"],
	user?: string,
	app?: string
};
	["ExportFileSortField"]: ExportFileSortField;
	["ExportFileSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort export file by the selected field. */
	field: GraphQLTypes["ExportFileSortField"]
};
	/** New in Saleor 3.1. Export gift cards to csv file. Note: this feature is in a
preview state and can be subject to changes at later point. */
["ExportGiftCards"]: {
	__typename: "ExportGiftCards",
	/** The newly created export file job which is responsible for export data. */
	exportFile?: GraphQLTypes["ExportFile"],
	errors: Array<GraphQLTypes["ExportError"]>
};
	["ExportGiftCardsInput"]: {
		/** Determine which gift cards should be exported. */
	scope: GraphQLTypes["ExportScope"],
	/** Filtering options for gift cards. */
	filter?: GraphQLTypes["GiftCardFilterInput"],
	/** List of gift cards IDs to export. */
	ids?: Array<string>,
	/** Type of exported file. */
	fileType: GraphQLTypes["FileTypesEnum"]
};
	["ExportInfoInput"]: {
		/** List of attribute ids witch should be exported. */
	attributes?: Array<string>,
	/** List of warehouse ids witch should be exported. */
	warehouses?: Array<string>,
	/** List of channels ids which should be exported. */
	channels?: Array<string>,
	/** List of product fields witch should be exported. */
	fields?: Array<GraphQLTypes["ProductFieldEnum"]>
};
	/** Export products to csv file. */
["ExportProducts"]: {
	__typename: "ExportProducts",
	/** The newly created export file job which is responsible for export data. */
	exportFile?: GraphQLTypes["ExportFile"],
	exportErrors: Array<GraphQLTypes["ExportError"]>,
	errors: Array<GraphQLTypes["ExportError"]>
};
	["ExportProductsInput"]: {
		/** Determine which products should be exported. */
	scope: GraphQLTypes["ExportScope"],
	/** Filtering options for products. */
	filter?: GraphQLTypes["ProductFilterInput"],
	/** List of products IDs to export. */
	ids?: Array<string>,
	/** Input with info about fields which should be exported. */
	exportInfo?: GraphQLTypes["ExportInfoInput"],
	/** Type of exported file. */
	fileType: GraphQLTypes["FileTypesEnum"]
};
	["ExportScope"]: ExportScope;
	["ExternalAuthentication"]: {
	__typename: "ExternalAuthentication",
	/** ID of external authentication plugin. */
	id: string,
	/** Name of external authentication plugin. */
	name?: string
};
	/** Prepare external authentication url for user by custom plugin. */
["ExternalAuthenticationUrl"]: {
	__typename: "ExternalAuthenticationUrl",
	/** The data returned by authentication plugin. */
	authenticationData?: GraphQLTypes["JSONString"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** Logout user by custom plugin. */
["ExternalLogout"]: {
	__typename: "ExternalLogout",
	/** The data returned by authentication plugin. */
	logoutData?: GraphQLTypes["JSONString"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	["ExternalNotificationError"]: {
	__typename: "ExternalNotificationError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["ExternalNotificationErrorCodes"]
};
	/** An enumeration. */
["ExternalNotificationErrorCodes"]: ExternalNotificationErrorCodes;
	/** New in Saleor 3.1. Trigger sending a notification with the notify plugin method.
Serializes nodes provided as ids parameter and includes this data in the
notification payload. */
["ExternalNotificationTrigger"]: {
	__typename: "ExternalNotificationTrigger",
	errors: Array<GraphQLTypes["ExternalNotificationError"]>
};
	["ExternalNotificationTriggerInput"]: {
		/** The list of customers or orders node IDs that will be serialized and included in the notification payload. */
	ids?: Array<string>,
	/** Additional payload that will be merged with the one based on the bussines object ID. */
	extraPayload?: GraphQLTypes["JSONString"],
	/** External event type. This field is passed to a plugin as an event type. */
	externalEventType: string
};
	/** Obtain external access tokens for user by custom plugin. */
["ExternalObtainAccessTokens"]: {
	__typename: "ExternalObtainAccessTokens",
	/** The token, required to authenticate. */
	token?: string,
	/** The refresh token, required to re-generate external access token. */
	refreshToken?: string,
	/** CSRF token required to re-generate external access token. */
	csrfToken?: string,
	/** A user instance. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** Refresh user's access by custom plugin. */
["ExternalRefresh"]: {
	__typename: "ExternalRefresh",
	/** The token, required to authenticate. */
	token?: string,
	/** The refresh token, required to re-generate external access token. */
	refreshToken?: string,
	/** CSRF token required to re-generate external access token. */
	csrfToken?: string,
	/** A user instance. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** Verify external authentication data by plugin. */
["ExternalVerify"]: {
	__typename: "ExternalVerify",
	/** User assigned to data. */
	user?: GraphQLTypes["User"],
	/** Determine if authentication data is valid or not. */
	isValid: boolean,
	/** External data. */
	verifyData?: GraphQLTypes["JSONString"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	["File"]: {
	__typename: "File",
	/** The URL of the file. */
	url: string,
	/** Content type of the file. */
	contentType?: string
};
	/** An enumeration. */
["FileTypesEnum"]: FileTypesEnum;
	/** Upload a file. This mutation must be sent as a `multipart` request. More
detailed specs of the upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
["FileUpload"]: {
	__typename: "FileUpload",
	uploadedFile?: GraphQLTypes["File"],
	uploadErrors: Array<GraphQLTypes["UploadError"]>,
	errors: Array<GraphQLTypes["UploadError"]>
};
	/** Represents order fulfillment. */
["Fulfillment"]: {
	__typename: "Fulfillment",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	fulfillmentOrder: number,
	status: GraphQLTypes["FulfillmentStatus"],
	trackingNumber: string,
	created: GraphQLTypes["DateTime"],
	/** List of lines for the fulfillment. */
	lines?: Array<GraphQLTypes["FulfillmentLine"] | undefined>,
	/** User-friendly fulfillment status. */
	statusDisplay?: string,
	/** Warehouse from fulfillment was fulfilled. */
	warehouse?: GraphQLTypes["Warehouse"]
};
	/** New in Saleor 3.1. Approve existing fulfillment. */
["FulfillmentApprove"]: {
	__typename: "FulfillmentApprove",
	/** An approved fulfillment. */
	fulfillment?: GraphQLTypes["Fulfillment"],
	/** Order which fulfillment was approved. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	/** Cancels existing fulfillment and optionally restocks items. */
["FulfillmentCancel"]: {
	__typename: "FulfillmentCancel",
	/** A canceled fulfillment. */
	fulfillment?: GraphQLTypes["Fulfillment"],
	/** Order which fulfillment was cancelled. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	["FulfillmentCancelInput"]: {
		/** ID of a warehouse where items will be restocked. Optional when fulfillment is in WAITING_FOR_APPROVAL state. */
	warehouseId?: string
};
	/** Represents line of the fulfillment. */
["FulfillmentLine"]: {
	__typename: "FulfillmentLine",
	id: string,
	quantity: number,
	orderLine?: GraphQLTypes["OrderLine"]
};
	/** Refund products. */
["FulfillmentRefundProducts"]: {
	__typename: "FulfillmentRefundProducts",
	/** A refunded fulfillment. */
	fulfillment?: GraphQLTypes["Fulfillment"],
	/** Order which fulfillment was refunded. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	/** Return products. */
["FulfillmentReturnProducts"]: {
	__typename: "FulfillmentReturnProducts",
	/** A return fulfillment. */
	returnFulfillment?: GraphQLTypes["Fulfillment"],
	/** A replace fulfillment. */
	replaceFulfillment?: GraphQLTypes["Fulfillment"],
	/** Order which fulfillment was returned. */
	order?: GraphQLTypes["Order"],
	/** A draft order which was created for products with replace flag. */
	replaceOrder?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	/** An enumeration. */
["FulfillmentStatus"]: FulfillmentStatus;
	/** Updates a fulfillment for an order. */
["FulfillmentUpdateTracking"]: {
	__typename: "FulfillmentUpdateTracking",
	/** A fulfillment with updated tracking. */
	fulfillment?: GraphQLTypes["Fulfillment"],
	/** Order for which fulfillment was updated. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	["FulfillmentUpdateTrackingInput"]: {
		/** Fulfillment tracking number. */
	trackingNumber?: string,
	/** If true, send an email notification to the customer. */
	notifyCustomer?: boolean
};
	/** Payment gateway client configuration key and value pair. */
["GatewayConfigLine"]: {
	__typename: "GatewayConfigLine",
	/** Gateway config key. */
	field: string,
	/** Gateway config value for key. */
	value?: string
};
	/** The `GenericScalar` scalar type represents a generic
GraphQL scalar value that could be:
String, Boolean, Int, Float, List or Object. */
["GenericScalar"]:any;
	/** A gift card is a prepaid electronic payment card accepted in stores. They can be
used during checkout by providing a valid gift card codes. */
["GiftCard"]: {
	__typename: "GiftCard",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** Code in format which allows displaying in a user interface. */
	displayCode: string,
	/** Last 4 characters of gift card code. */
	last4CodeChars: string,
	/** Gift card code. Can be fetched by staff member with manage gift card
permission when gift card wasn't used yet and by the gift card owner. */
	code: string,
	created: GraphQLTypes["DateTime"],
	/** New in Saleor 3.1. The user who bought or issued a gift card. Note: this
feature is in a preview state and can be subject to changes at later point. */
	createdBy?: GraphQLTypes["User"],
	/** New in Saleor 3.1. The customer who used a gift card. Note: this feature is in
a preview state and can be subject to changes at later point. */
	usedBy?: GraphQLTypes["User"],
	/** New in Saleor 3.1. Email address of the user who bought or issued gift card.
Note: this feature is in a preview state and can be subject to changes at later point. */
	createdByEmail?: string,
	/** New in Saleor 3.1. Email address of the customer who used a gift card. Note:
this feature is in a preview state and can be subject to changes at later point. */
	usedByEmail?: string,
	lastUsedOn?: GraphQLTypes["DateTime"],
	expiryDate?: GraphQLTypes["Date"],
	/** New in Saleor 3.1. App which created the gift card. Note: this feature is in a
preview state and can be subject to changes at later point. */
	app?: GraphQLTypes["App"],
	/** New in Saleor 3.1. Related gift card product. Note: this feature is in a
preview state and can be subject to changes at later point. */
	product?: GraphQLTypes["Product"],
	/** New in Saleor 3.1. List of events associated with the gift card. Note: this
feature is in a preview state and can be subject to changes at later point. */
	events: Array<GraphQLTypes["GiftCardEvent"]>,
	/** New in Saleor 3.1. The gift card tag. Note: this feature is in a preview state
and can be subject to changes at later point. */
	tags: Array<GraphQLTypes["GiftCardTag"]>,
	/** New in Saleor 3.1. Slug of the channel where the gift card was bought. Note:
this feature is in a preview state and can be subject to changes at later point. */
	boughtInChannel?: string,
	isActive: boolean,
	initialBalance?: GraphQLTypes["Money"],
	currentBalance?: GraphQLTypes["Money"],
	/** The customer who bought a gift card. */
	user?: GraphQLTypes["User"],
	/** End date of gift card. */
	endDate?: GraphQLTypes["DateTime"],
	/** Start date of gift card. */
	startDate?: GraphQLTypes["DateTime"]
};
	/** Activate a gift card. */
["GiftCardActivate"]: {
	__typename: "GiftCardActivate",
	/** Activated gift card. */
	giftCard?: GraphQLTypes["GiftCard"],
	giftCardErrors: Array<GraphQLTypes["GiftCardError"]>,
	errors: Array<GraphQLTypes["GiftCardError"]>
};
	/** New in Saleor 3.1. Adds note to the gift card. Note: this feature is in a
preview state and can be subject to changes at later point. */
["GiftCardAddNote"]: {
	__typename: "GiftCardAddNote",
	/** Gift card with the note added. */
	giftCard?: GraphQLTypes["GiftCard"],
	/** Gift card note created. */
	event?: GraphQLTypes["GiftCardEvent"],
	errors: Array<GraphQLTypes["GiftCardError"]>
};
	["GiftCardAddNoteInput"]: {
		/** Note message. */
	message: string
};
	/** New in Saleor 3.1. Activate gift cards. Note: this feature is in a preview state
and can be subject to changes at later point. */
["GiftCardBulkActivate"]: {
	__typename: "GiftCardBulkActivate",
	/** Returns how many objects were affected. */
	count: number,
	errors: Array<GraphQLTypes["GiftCardError"]>
};
	/** New in Saleor 3.1. Create gift cards. Note: this feature is in a preview state and can be subject to changes at later point. */
["GiftCardBulkCreate"]: {
	__typename: "GiftCardBulkCreate",
	/** Returns how many objects were created. */
	count: number,
	/** List of created gift cards. */
	giftCards: Array<GraphQLTypes["GiftCard"]>,
	errors: Array<GraphQLTypes["GiftCardError"]>
};
	["GiftCardBulkCreateInput"]: {
		/** The number of cards to issue. */
	count: number,
	/** Balance of the gift card. */
	balance: GraphQLTypes["PriceInput"],
	/** The gift card tags. */
	tags?: Array<string>,
	/** The gift card expiry date. */
	expiryDate?: GraphQLTypes["Date"],
	/** Determine if gift card is active. */
	isActive: boolean
};
	/** New in Saleor 3.1. Deactivate gift cards. Note: this feature is in a preview
state and can be subject to changes at later point. */
["GiftCardBulkDeactivate"]: {
	__typename: "GiftCardBulkDeactivate",
	/** Returns how many objects were affected. */
	count: number,
	errors: Array<GraphQLTypes["GiftCardError"]>
};
	/** New in Saleor 3.1. Delete gift cards. Note: this feature is in a preview state and can be subject to changes at later point. */
["GiftCardBulkDelete"]: {
	__typename: "GiftCardBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	errors: Array<GraphQLTypes["GiftCardError"]>
};
	["GiftCardCountableConnection"]: {
	__typename: "GiftCardCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["GiftCardCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["GiftCardCountableEdge"]: {
	__typename: "GiftCardCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["GiftCard"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates a new gift card. */
["GiftCardCreate"]: {
	__typename: "GiftCardCreate",
	giftCardErrors: Array<GraphQLTypes["GiftCardError"]>,
	errors: Array<GraphQLTypes["GiftCardError"]>,
	giftCard?: GraphQLTypes["GiftCard"]
};
	["GiftCardCreateInput"]: {
		/** New in Saleor 3.1. The gift card tags to add. Note: this feature is in a
preview state and can be subject to changes at later point. */
	addTags?: Array<string>,
	/** New in Saleor 3.1. The gift card expiry date. Note: this feature is in a
preview state and can be subject to changes at later point. */
	expiryDate?: GraphQLTypes["Date"],
	/** Start date of the gift card in ISO 8601 format. 

DEPRECATED: this field will be removed in Saleor 4.0. */
	startDate?: GraphQLTypes["Date"],
	/** End date of the gift card in ISO 8601 format. 

DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead. */
	endDate?: GraphQLTypes["Date"],
	/** Balance of the gift card. */
	balance: GraphQLTypes["PriceInput"],
	/** Email of the customer to whom gift card will be sent. */
	userEmail?: string,
	/** New in Saleor 3.1. Slug of a channel from which the email should be sent.
Note: this feature is in a preview state and can be subject to changes at later point. */
	channel?: string,
	/** New in Saleor 3.1. Determine if gift card is active. Note: this feature is in
a preview state and can be subject to changes at later point. */
	isActive: boolean,
	/** Code to use the gift card. 

DEPRECATED: this field will be removed in Saleor 4.0. The code is now auto generated. */
	code?: string,
	/** New in Saleor 3.1. The gift card note from the staff member. Note: this
feature is in a preview state and can be subject to changes at later point. */
	note?: string
};
	/** Deactivate a gift card. */
["GiftCardDeactivate"]: {
	__typename: "GiftCardDeactivate",
	/** Deactivated gift card. */
	giftCard?: GraphQLTypes["GiftCard"],
	giftCardErrors: Array<GraphQLTypes["GiftCardError"]>,
	errors: Array<GraphQLTypes["GiftCardError"]>
};
	/** New in Saleor 3.1. Delete gift card. Note: this feature is in a preview state and can be subject to changes at later point. */
["GiftCardDelete"]: {
	__typename: "GiftCardDelete",
	giftCardErrors: Array<GraphQLTypes["GiftCardError"]>,
	errors: Array<GraphQLTypes["GiftCardError"]>,
	giftCard?: GraphQLTypes["GiftCard"]
};
	["GiftCardError"]: {
	__typename: "GiftCardError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["GiftCardErrorCode"],
	/** List of tag values that cause the error. */
	tags?: Array<string>
};
	/** An enumeration. */
["GiftCardErrorCode"]: GiftCardErrorCode;
	/** New in Saleor 3.1. History log of the gift card. Note: this feature is in a
preview state and can be subject to changes at later point. */
["GiftCardEvent"]: {
	__typename: "GiftCardEvent",
	id: string,
	/** Date when event happened at in ISO 8601 format. */
	date?: GraphQLTypes["DateTime"],
	/** Gift card event type. */
	type?: GraphQLTypes["GiftCardEventsEnum"],
	/** User who performed the action. */
	user?: GraphQLTypes["User"],
	/** App that performed the action. */
	app?: GraphQLTypes["App"],
	/** Content of the event. */
	message?: string,
	/** Email of the customer. */
	email?: string,
	/** The order ID where gift card was used or bought. */
	orderId?: string,
	/** User-friendly number of an order where gift card was used or bought. */
	orderNumber?: string,
	/** The list of gift card tags. */
	tags?: Array<string>,
	/** The list of old gift card tags. */
	oldTags?: Array<string>,
	/** The gift card balance. */
	balance?: GraphQLTypes["GiftCardEventBalance"],
	/** The gift card expiry date. */
	expiryDate?: GraphQLTypes["Date"],
	/** Previous gift card expiry date. */
	oldExpiryDate?: GraphQLTypes["Date"]
};
	["GiftCardEventBalance"]: {
	__typename: "GiftCardEventBalance",
	/** Initial balance of the gift card. */
	initialBalance?: GraphQLTypes["Money"],
	/** Current balance of the gift card. */
	currentBalance: GraphQLTypes["Money"],
	/** Previous initial balance of the gift card. */
	oldInitialBalance?: GraphQLTypes["Money"],
	/** Previous current balance of the gift card. */
	oldCurrentBalance?: GraphQLTypes["Money"]
};
	["GiftCardEventFilterInput"]: {
		type?: GraphQLTypes["GiftCardEventsEnum"],
	orders?: Array<string>
};
	/** An enumeration. */
["GiftCardEventsEnum"]: GiftCardEventsEnum;
	["GiftCardFilterInput"]: {
		isActive?: boolean,
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>,
	tags?: Array<string | undefined>,
	products?: Array<string | undefined>,
	usedBy?: Array<string | undefined>,
	used?: boolean,
	currency?: string,
	currentBalance?: GraphQLTypes["PriceRangeInput"],
	initialBalance?: GraphQLTypes["PriceRangeInput"],
	code?: string
};
	/** New in Saleor 3.1. Resend a gift card. Note: this feature is in a preview state
and can be subject to changes at later point. */
["GiftCardResend"]: {
	__typename: "GiftCardResend",
	/** Gift card which has been sent. */
	giftCard?: GraphQLTypes["GiftCard"],
	errors: Array<GraphQLTypes["GiftCardError"]>
};
	["GiftCardResendInput"]: {
		/** ID of a gift card to resend. */
	id: string,
	/** Email to which gift card should be send. */
	email?: string,
	/** Slug of a channel from which the email should be sent. */
	channel: string
};
	/** Gift card related settings from site settings. */
["GiftCardSettings"]: {
	__typename: "GiftCardSettings",
	/** The gift card expiry type settings. */
	expiryType: GraphQLTypes["GiftCardSettingsExpiryTypeEnum"],
	/** The gift card expiry period settings. */
	expiryPeriod?: GraphQLTypes["TimePeriod"]
};
	["GiftCardSettingsError"]: {
	__typename: "GiftCardSettingsError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["GiftCardSettingsErrorCode"]
};
	/** An enumeration. */
["GiftCardSettingsErrorCode"]: GiftCardSettingsErrorCode;
	/** An enumeration. */
["GiftCardSettingsExpiryTypeEnum"]: GiftCardSettingsExpiryTypeEnum;
	/** Update gift card settings. */
["GiftCardSettingsUpdate"]: {
	__typename: "GiftCardSettingsUpdate",
	/** Gift card settings. */
	giftCardSettings?: GraphQLTypes["GiftCardSettings"],
	errors: Array<GraphQLTypes["GiftCardSettingsError"]>
};
	["GiftCardSettingsUpdateInput"]: {
		/** Defines gift card default expiry settings. */
	expiryType?: GraphQLTypes["GiftCardSettingsExpiryTypeEnum"],
	/** Defines gift card expiry period. */
	expiryPeriod?: GraphQLTypes["TimePeriodInputType"]
};
	["GiftCardSortField"]: GiftCardSortField;
	["GiftCardSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort gift cards by the selected field. */
	field: GraphQLTypes["GiftCardSortField"]
};
	/** New in Saleor 3.1. The gift card tag. Note: this feature is in a preview state and can be subject to changes at later point. */
["GiftCardTag"]: {
	__typename: "GiftCardTag",
	id: string,
	name: string
};
	["GiftCardTagCountableConnection"]: {
	__typename: "GiftCardTagCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["GiftCardTagCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["GiftCardTagCountableEdge"]: {
	__typename: "GiftCardTagCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["GiftCardTag"],
	/** A cursor for use in pagination. */
	cursor: string
};
	["GiftCardTagFilterInput"]: {
		search?: string
};
	/** Update a gift card. */
["GiftCardUpdate"]: {
	__typename: "GiftCardUpdate",
	giftCardErrors: Array<GraphQLTypes["GiftCardError"]>,
	errors: Array<GraphQLTypes["GiftCardError"]>,
	giftCard?: GraphQLTypes["GiftCard"]
};
	["GiftCardUpdateInput"]: {
		/** New in Saleor 3.1. The gift card tags to add. Note: this feature is in a
preview state and can be subject to changes at later point. */
	addTags?: Array<string>,
	/** New in Saleor 3.1. The gift card expiry date. Note: this feature is in a
preview state and can be subject to changes at later point. */
	expiryDate?: GraphQLTypes["Date"],
	/** Start date of the gift card in ISO 8601 format. 

DEPRECATED: this field will be removed in Saleor 4.0. */
	startDate?: GraphQLTypes["Date"],
	/** End date of the gift card in ISO 8601 format. 

DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead. */
	endDate?: GraphQLTypes["Date"],
	/** New in Saleor 3.1. The gift card tags to remove. Note: this feature is in a
preview state and can be subject to changes at later point. */
	removeTags?: Array<string>,
	/** New in Saleor 3.1. The gift card balance amount. Note: this feature is in a
preview state and can be subject to changes at later point. */
	balanceAmount?: GraphQLTypes["PositiveDecimal"]
};
	/** Represents permission group data. */
["Group"]: {
	__typename: "Group",
	id: string,
	name: string,
	/** List of group users */
	users?: Array<GraphQLTypes["User"] | undefined>,
	/** List of group permissions */
	permissions?: Array<GraphQLTypes["Permission"] | undefined>,
	/** True, if the currently authenticated user has rights to manage a group. */
	userCanManage: boolean
};
	["GroupCountableConnection"]: {
	__typename: "GroupCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["GroupCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["GroupCountableEdge"]: {
	__typename: "GroupCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["Group"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Represents an image. */
["Image"]: {
	__typename: "Image",
	/** The URL of the image. */
	url: string,
	/** Alt text for an image. */
	alt?: string
};
	["IntRangeInput"]: {
		/** Value greater than or equal to. */
	gte?: number,
	/** Value less than or equal to. */
	lte?: number
};
	/** Represents an Invoice. */
["Invoice"]: {
	__typename: "Invoice",
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** Job status. */
	status: GraphQLTypes["JobStatusEnum"],
	createdAt: GraphQLTypes["DateTime"],
	updatedAt: GraphQLTypes["DateTime"],
	message?: string,
	/** The ID of the object. */
	id: string,
	number?: string,
	externalUrl?: string,
	/** URL to download an invoice. */
	url?: string
};
	/** Creates a ready to send invoice. */
["InvoiceCreate"]: {
	__typename: "InvoiceCreate",
	invoiceErrors: Array<GraphQLTypes["InvoiceError"]>,
	errors: Array<GraphQLTypes["InvoiceError"]>,
	invoice?: GraphQLTypes["Invoice"]
};
	["InvoiceCreateInput"]: {
		/** Invoice number. */
	number: string,
	/** URL of an invoice to download. */
	url: string
};
	/** Deletes an invoice. */
["InvoiceDelete"]: {
	__typename: "InvoiceDelete",
	invoiceErrors: Array<GraphQLTypes["InvoiceError"]>,
	errors: Array<GraphQLTypes["InvoiceError"]>,
	invoice?: GraphQLTypes["Invoice"]
};
	["InvoiceError"]: {
	__typename: "InvoiceError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["InvoiceErrorCode"]
};
	/** An enumeration. */
["InvoiceErrorCode"]: InvoiceErrorCode;
	/** Request an invoice for the order using plugin. */
["InvoiceRequest"]: {
	__typename: "InvoiceRequest",
	/** Order related to an invoice. */
	order?: GraphQLTypes["Order"],
	invoiceErrors: Array<GraphQLTypes["InvoiceError"]>,
	errors: Array<GraphQLTypes["InvoiceError"]>,
	invoice?: GraphQLTypes["Invoice"]
};
	/** Requests deletion of an invoice. */
["InvoiceRequestDelete"]: {
	__typename: "InvoiceRequestDelete",
	invoiceErrors: Array<GraphQLTypes["InvoiceError"]>,
	errors: Array<GraphQLTypes["InvoiceError"]>,
	invoice?: GraphQLTypes["Invoice"]
};
	/** Send an invoice notification to the customer. */
["InvoiceSendNotification"]: {
	__typename: "InvoiceSendNotification",
	invoiceErrors: Array<GraphQLTypes["InvoiceError"]>,
	errors: Array<GraphQLTypes["InvoiceError"]>,
	invoice?: GraphQLTypes["Invoice"]
};
	/** Updates an invoice. */
["InvoiceUpdate"]: {
	__typename: "InvoiceUpdate",
	invoiceErrors: Array<GraphQLTypes["InvoiceError"]>,
	errors: Array<GraphQLTypes["InvoiceError"]>,
	invoice?: GraphQLTypes["Invoice"]
};
	["Job"]: {
	__typename:"AppInstallation" | "ExportFile" | "Invoice",
	/** Job status. */
	status: GraphQLTypes["JobStatusEnum"],
	/** Created date time of job in ISO 8601 format. */
	createdAt: GraphQLTypes["DateTime"],
	/** Date time of job last update in ISO 8601 format. */
	updatedAt: GraphQLTypes["DateTime"],
	/** Job message. */
	message?: string
	['...on AppInstallation']: '__union' & GraphQLTypes["AppInstallation"];
	['...on ExportFile']: '__union' & GraphQLTypes["ExportFile"];
	['...on Invoice']: '__union' & GraphQLTypes["Invoice"];
};
	/** An enumeration. */
["JobStatusEnum"]: JobStatusEnum;
	["JSONString"]:any;
	/** An enumeration. */
["LanguageCodeEnum"]: LanguageCodeEnum;
	["LanguageDisplay"]: {
	__typename: "LanguageDisplay",
	/** ISO 639 representation of the language name. */
	code: GraphQLTypes["LanguageCodeEnum"],
	/** Full name of the language. */
	language: string
};
	["LimitInfo"]: {
	__typename: "LimitInfo",
	/** Defines the current resource usage. */
	currentUsage: GraphQLTypes["Limits"],
	/** Defines the allowed maximum resource usage, null means unlimited. */
	allowedUsage: GraphQLTypes["Limits"]
};
	["Limits"]: {
	__typename: "Limits",
	channels?: number,
	orders?: number,
	productVariants?: number,
	staffUsers?: number,
	warehouses?: number
};
	/** The manifest definition. */
["Manifest"]: {
	__typename: "Manifest",
	identifier: string,
	version: string,
	name: string,
	about?: string,
	permissions?: Array<GraphQLTypes["Permission"] | undefined>,
	appUrl?: string,
	configurationUrl?: string,
	tokenTargetUrl?: string,
	dataPrivacy?: string,
	dataPrivacyUrl?: string,
	homepageUrl?: string,
	supportUrl?: string,
	extensions: Array<GraphQLTypes["AppManifestExtension"]>
};
	["Margin"]: {
	__typename: "Margin",
	start?: number,
	stop?: number
};
	/** An enumeration. */
["MeasurementUnitsEnum"]: MeasurementUnitsEnum;
	/** Represents a single menu - an object that is used to help navigate through the store. */
["Menu"]: {
	__typename: "Menu",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	name: string,
	slug: string,
	items?: Array<GraphQLTypes["MenuItem"] | undefined>
};
	/** Deletes menus. */
["MenuBulkDelete"]: {
	__typename: "MenuBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	menuErrors: Array<GraphQLTypes["MenuError"]>,
	errors: Array<GraphQLTypes["MenuError"]>
};
	["MenuCountableConnection"]: {
	__typename: "MenuCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["MenuCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["MenuCountableEdge"]: {
	__typename: "MenuCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["Menu"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates a new Menu. */
["MenuCreate"]: {
	__typename: "MenuCreate",
	menuErrors: Array<GraphQLTypes["MenuError"]>,
	errors: Array<GraphQLTypes["MenuError"]>,
	menu?: GraphQLTypes["Menu"]
};
	["MenuCreateInput"]: {
		/** Name of the menu. */
	name: string,
	/** Slug of the menu. Will be generated if not provided. */
	slug?: string,
	/** List of menu items. */
	items?: Array<GraphQLTypes["MenuItemInput"] | undefined>
};
	/** Deletes a menu. */
["MenuDelete"]: {
	__typename: "MenuDelete",
	menuErrors: Array<GraphQLTypes["MenuError"]>,
	errors: Array<GraphQLTypes["MenuError"]>,
	menu?: GraphQLTypes["Menu"]
};
	["MenuError"]: {
	__typename: "MenuError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["MenuErrorCode"]
};
	/** An enumeration. */
["MenuErrorCode"]: MenuErrorCode;
	["MenuFilterInput"]: {
		search?: string,
	slug?: Array<string | undefined>,
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>
};
	["MenuInput"]: {
		/** Name of the menu. */
	name?: string,
	/** Slug of the menu. */
	slug?: string
};
	/** Represents a single item of the related menu. Can store categories, collection or pages. */
["MenuItem"]: {
	__typename: "MenuItem",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	name: string,
	menu: GraphQLTypes["Menu"],
	parent?: GraphQLTypes["MenuItem"],
	category?: GraphQLTypes["Category"],
	collection?: GraphQLTypes["Collection"],
	page?: GraphQLTypes["Page"],
	level: number,
	children?: Array<GraphQLTypes["MenuItem"] | undefined>,
	/** URL to the menu item. */
	url?: string,
	/** Returns translated menu item fields for the given language code. */
	translation?: GraphQLTypes["MenuItemTranslation"]
};
	/** Deletes menu items. */
["MenuItemBulkDelete"]: {
	__typename: "MenuItemBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	menuErrors: Array<GraphQLTypes["MenuError"]>,
	errors: Array<GraphQLTypes["MenuError"]>
};
	["MenuItemCountableConnection"]: {
	__typename: "MenuItemCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["MenuItemCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["MenuItemCountableEdge"]: {
	__typename: "MenuItemCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["MenuItem"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates a new menu item. */
["MenuItemCreate"]: {
	__typename: "MenuItemCreate",
	menuErrors: Array<GraphQLTypes["MenuError"]>,
	errors: Array<GraphQLTypes["MenuError"]>,
	menuItem?: GraphQLTypes["MenuItem"]
};
	["MenuItemCreateInput"]: {
		/** Name of the menu item. */
	name: string,
	/** URL of the pointed item. */
	url?: string,
	/** Category to which item points. */
	category?: string,
	/** Collection to which item points. */
	collection?: string,
	/** Page to which item points. */
	page?: string,
	/** Menu to which item belongs. */
	menu: string,
	/** ID of the parent menu. If empty, menu will be top level menu. */
	parent?: string
};
	/** Deletes a menu item. */
["MenuItemDelete"]: {
	__typename: "MenuItemDelete",
	menuErrors: Array<GraphQLTypes["MenuError"]>,
	errors: Array<GraphQLTypes["MenuError"]>,
	menuItem?: GraphQLTypes["MenuItem"]
};
	["MenuItemFilterInput"]: {
		search?: string,
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>
};
	["MenuItemInput"]: {
		/** Name of the menu item. */
	name?: string,
	/** URL of the pointed item. */
	url?: string,
	/** Category to which item points. */
	category?: string,
	/** Collection to which item points. */
	collection?: string,
	/** Page to which item points. */
	page?: string
};
	/** Moves items of menus. */
["MenuItemMove"]: {
	__typename: "MenuItemMove",
	/** Assigned menu to move within. */
	menu?: GraphQLTypes["Menu"],
	menuErrors: Array<GraphQLTypes["MenuError"]>,
	errors: Array<GraphQLTypes["MenuError"]>
};
	["MenuItemMoveInput"]: {
		/** The menu item ID to move. */
	itemId: string,
	/** ID of the parent menu. If empty, menu will be top level menu. */
	parentId?: string,
	/** The new relative sorting position of the item (from -inf to +inf). 1 moves the
item one position forward, -1 moves the item one position backward, 0 leaves
the item unchanged. */
	sortOrder?: number
};
	["MenuItemSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort menu items by the selected field. */
	field: GraphQLTypes["MenuItemsSortField"]
};
	["MenuItemsSortField"]: MenuItemsSortField;
	["MenuItemTranslatableContent"]: {
	__typename: "MenuItemTranslatableContent",
	id: string,
	name: string,
	/** Returns translated menu item fields for the given language code. */
	translation?: GraphQLTypes["MenuItemTranslation"],
	/** Represents a single item of the related menu. Can store categories, collection or pages. */
	menuItem?: GraphQLTypes["MenuItem"]
};
	/** Creates/updates translations for a menu item. */
["MenuItemTranslate"]: {
	__typename: "MenuItemTranslate",
	translationErrors: Array<GraphQLTypes["TranslationError"]>,
	errors: Array<GraphQLTypes["TranslationError"]>,
	menuItem?: GraphQLTypes["MenuItem"]
};
	["MenuItemTranslation"]: {
	__typename: "MenuItemTranslation",
	id: string,
	/** Translation language. */
	language: GraphQLTypes["LanguageDisplay"],
	name: string
};
	/** Updates a menu item. */
["MenuItemUpdate"]: {
	__typename: "MenuItemUpdate",
	menuErrors: Array<GraphQLTypes["MenuError"]>,
	errors: Array<GraphQLTypes["MenuError"]>,
	menuItem?: GraphQLTypes["MenuItem"]
};
	["MenuSortField"]: MenuSortField;
	["MenuSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort menus by the selected field. */
	field: GraphQLTypes["MenuSortField"]
};
	/** Updates a menu. */
["MenuUpdate"]: {
	__typename: "MenuUpdate",
	menuErrors: Array<GraphQLTypes["MenuError"]>,
	errors: Array<GraphQLTypes["MenuError"]>,
	menu?: GraphQLTypes["Menu"]
};
	["MetadataError"]: {
	__typename: "MetadataError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["MetadataErrorCode"]
};
	/** An enumeration. */
["MetadataErrorCode"]: MetadataErrorCode;
	["MetadataFilter"]: {
		/** Key of a metadata item. */
	key: string,
	/** Value of a metadata item. */
	value?: string
};
	["MetadataInput"]: {
		/** Key of a metadata item. */
	key: string,
	/** Value of a metadata item. */
	value: string
};
	["MetadataItem"]: {
	__typename: "MetadataItem",
	/** Key of a metadata item. */
	key: string,
	/** Value of a metadata item. */
	value: string
};
	/** Represents amount of money in specific currency. */
["Money"]: {
	__typename: "Money",
	/** Currency code. */
	currency: string,
	/** Amount of money. */
	amount: number
};
	["MoneyInput"]: {
		/** Currency code. */
	currency: string,
	/** Amount of money. */
	amount: GraphQLTypes["PositiveDecimal"]
};
	/** Represents a range of amounts of money. */
["MoneyRange"]: {
	__typename: "MoneyRange",
	/** Lower bound of a price range. */
	start?: GraphQLTypes["Money"],
	/** Upper bound of a price range. */
	stop?: GraphQLTypes["Money"]
};
	["MoveProductInput"]: {
		/** The ID of the product to move. */
	productId: string,
	/** The relative sorting position of the product (from -inf to +inf) starting from
the first given product's actual position.1 moves the item one position
forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
	sortOrder?: number
};
	["Mutation"]: {
	__typename: "Mutation",
	/** Creates a new webhook subscription. */
	webhookCreate?: GraphQLTypes["WebhookCreate"],
	/** Deletes a webhook subscription. */
	webhookDelete?: GraphQLTypes["WebhookDelete"],
	/** Updates a webhook subscription. */
	webhookUpdate?: GraphQLTypes["WebhookUpdate"],
	/** Retries event delivery. */
	eventDeliveryRetry?: GraphQLTypes["EventDeliveryRetry"],
	/** Creates new warehouse. */
	createWarehouse?: GraphQLTypes["WarehouseCreate"],
	/** Updates given warehouse. */
	updateWarehouse?: GraphQLTypes["WarehouseUpdate"],
	/** Deletes selected warehouse. */
	deleteWarehouse?: GraphQLTypes["WarehouseDelete"],
	/** Add shipping zone to given warehouse. */
	assignWarehouseShippingZone?: GraphQLTypes["WarehouseShippingZoneAssign"],
	/** Remove shipping zone from given warehouse. */
	unassignWarehouseShippingZone?: GraphQLTypes["WarehouseShippingZoneUnassign"],
	/** Creates a new staff notification recipient. */
	staffNotificationRecipientCreate?: GraphQLTypes["StaffNotificationRecipientCreate"],
	/** Updates a staff notification recipient. */
	staffNotificationRecipientUpdate?: GraphQLTypes["StaffNotificationRecipientUpdate"],
	/** Delete staff notification recipient. */
	staffNotificationRecipientDelete?: GraphQLTypes["StaffNotificationRecipientDelete"],
	/** Updates site domain of the shop. */
	shopDomainUpdate?: GraphQLTypes["ShopDomainUpdate"],
	/** Updates shop settings. */
	shopSettingsUpdate?: GraphQLTypes["ShopSettingsUpdate"],
	/** Fetch tax rates. */
	shopFetchTaxRates?: GraphQLTypes["ShopFetchTaxRates"],
	/** Creates/updates translations for shop settings. */
	shopSettingsTranslate?: GraphQLTypes["ShopSettingsTranslate"],
	/** Update the shop's address. If the `null` value is passed, the currently selected address will be deleted. */
	shopAddressUpdate?: GraphQLTypes["ShopAddressUpdate"],
	/** Update shop order settings. */
	orderSettingsUpdate?: GraphQLTypes["OrderSettingsUpdate"],
	/** Update gift card settings. */
	giftCardSettingsUpdate?: GraphQLTypes["GiftCardSettingsUpdate"],
	/** Manage shipping method's availability in channels. */
	shippingMethodChannelListingUpdate?: GraphQLTypes["ShippingMethodChannelListingUpdate"],
	/** Creates a new shipping price. */
	shippingPriceCreate?: GraphQLTypes["ShippingPriceCreate"],
	/** Deletes a shipping price. */
	shippingPriceDelete?: GraphQLTypes["ShippingPriceDelete"],
	/** Deletes shipping prices. */
	shippingPriceBulkDelete?: GraphQLTypes["ShippingPriceBulkDelete"],
	/** Updates a new shipping price. */
	shippingPriceUpdate?: GraphQLTypes["ShippingPriceUpdate"],
	/** Creates/updates translations for a shipping method. */
	shippingPriceTranslate?: GraphQLTypes["ShippingPriceTranslate"],
	/** Exclude products from shipping price. */
	shippingPriceExcludeProducts?: GraphQLTypes["ShippingPriceExcludeProducts"],
	/** Remove product from excluded list for shipping price. */
	shippingPriceRemoveProductFromExclude?: GraphQLTypes["ShippingPriceRemoveProductFromExclude"],
	/** Creates a new shipping zone. */
	shippingZoneCreate?: GraphQLTypes["ShippingZoneCreate"],
	/** Deletes a shipping zone. */
	shippingZoneDelete?: GraphQLTypes["ShippingZoneDelete"],
	/** Deletes shipping zones. */
	shippingZoneBulkDelete?: GraphQLTypes["ShippingZoneBulkDelete"],
	/** Updates a new shipping zone. */
	shippingZoneUpdate?: GraphQLTypes["ShippingZoneUpdate"],
	/** Assign attributes to a given product type. */
	productAttributeAssign?: GraphQLTypes["ProductAttributeAssign"],
	/** New in Saleor 3.1. Update attributes assigned to product variant for given product type. */
	productAttributeAssignmentUpdate?: GraphQLTypes["ProductAttributeAssignmentUpdate"],
	/** Un-assign attributes from a given product type. */
	productAttributeUnassign?: GraphQLTypes["ProductAttributeUnassign"],
	/** Creates a new category. */
	categoryCreate?: GraphQLTypes["CategoryCreate"],
	/** Deletes a category. */
	categoryDelete?: GraphQLTypes["CategoryDelete"],
	/** Deletes categories. */
	categoryBulkDelete?: GraphQLTypes["CategoryBulkDelete"],
	/** Updates a category. */
	categoryUpdate?: GraphQLTypes["CategoryUpdate"],
	/** Creates/updates translations for a category. */
	categoryTranslate?: GraphQLTypes["CategoryTranslate"],
	/** Adds products to a collection. */
	collectionAddProducts?: GraphQLTypes["CollectionAddProducts"],
	/** Creates a new collection. */
	collectionCreate?: GraphQLTypes["CollectionCreate"],
	/** Deletes a collection. */
	collectionDelete?: GraphQLTypes["CollectionDelete"],
	/** Reorder the products of a collection. */
	collectionReorderProducts?: GraphQLTypes["CollectionReorderProducts"],
	/** Deletes collections. */
	collectionBulkDelete?: GraphQLTypes["CollectionBulkDelete"],
	/** Remove products from a collection. */
	collectionRemoveProducts?: GraphQLTypes["CollectionRemoveProducts"],
	/** Updates a collection. */
	collectionUpdate?: GraphQLTypes["CollectionUpdate"],
	/** Creates/updates translations for a collection. */
	collectionTranslate?: GraphQLTypes["CollectionTranslate"],
	/** Manage collection's availability in channels. */
	collectionChannelListingUpdate?: GraphQLTypes["CollectionChannelListingUpdate"],
	/** Creates a new product. */
	productCreate?: GraphQLTypes["ProductCreate"],
	/** Deletes a product. */
	productDelete?: GraphQLTypes["ProductDelete"],
	/** Deletes products. */
	productBulkDelete?: GraphQLTypes["ProductBulkDelete"],
	/** Updates an existing product. */
	productUpdate?: GraphQLTypes["ProductUpdate"],
	/** Creates/updates translations for a product. */
	productTranslate?: GraphQLTypes["ProductTranslate"],
	/** Manage product's availability in channels. */
	productChannelListingUpdate?: GraphQLTypes["ProductChannelListingUpdate"],
	/** Create a media object (image or video URL) associated with product. For image,
this mutation must be sent as a `multipart` request. More detailed specs of
the upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
	productMediaCreate?: GraphQLTypes["ProductMediaCreate"],
	/** Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook. */
	productVariantReorder?: GraphQLTypes["ProductVariantReorder"],
	/** Deletes a product media. */
	productMediaDelete?: GraphQLTypes["ProductMediaDelete"],
	/** Deletes product media. */
	productMediaBulkDelete?: GraphQLTypes["ProductMediaBulkDelete"],
	/** Changes ordering of the product media. */
	productMediaReorder?: GraphQLTypes["ProductMediaReorder"],
	/** Updates a product media. */
	productMediaUpdate?: GraphQLTypes["ProductMediaUpdate"],
	/** Creates a new product type. */
	productTypeCreate?: GraphQLTypes["ProductTypeCreate"],
	/** Deletes a product type. */
	productTypeDelete?: GraphQLTypes["ProductTypeDelete"],
	/** Deletes product types. */
	productTypeBulkDelete?: GraphQLTypes["ProductTypeBulkDelete"],
	/** Updates an existing product type. */
	productTypeUpdate?: GraphQLTypes["ProductTypeUpdate"],
	/** Reorder the attributes of a product type. */
	productTypeReorderAttributes?: GraphQLTypes["ProductTypeReorderAttributes"],
	/** Reorder product attribute values. */
	productReorderAttributeValues?: GraphQLTypes["ProductReorderAttributeValues"],
	/** Create new digital content. This mutation must be sent as a `multipart`
request. More detailed specs of the upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
	digitalContentCreate?: GraphQLTypes["DigitalContentCreate"],
	/** Remove digital content assigned to given variant. */
	digitalContentDelete?: GraphQLTypes["DigitalContentDelete"],
	/** Update digital content. */
	digitalContentUpdate?: GraphQLTypes["DigitalContentUpdate"],
	/** Generate new URL to digital content. */
	digitalContentUrlCreate?: GraphQLTypes["DigitalContentUrlCreate"],
	/** Creates a new variant for a product. */
	productVariantCreate?: GraphQLTypes["ProductVariantCreate"],
	/** Deletes a product variant. */
	productVariantDelete?: GraphQLTypes["ProductVariantDelete"],
	/** Creates product variants for a given product. */
	productVariantBulkCreate?: GraphQLTypes["ProductVariantBulkCreate"],
	/** Deletes product variants. */
	productVariantBulkDelete?: GraphQLTypes["ProductVariantBulkDelete"],
	/** Creates stocks for product variant. */
	productVariantStocksCreate?: GraphQLTypes["ProductVariantStocksCreate"],
	/** Delete stocks from product variant. */
	productVariantStocksDelete?: GraphQLTypes["ProductVariantStocksDelete"],
	/** Update stocks for product variant. */
	productVariantStocksUpdate?: GraphQLTypes["ProductVariantStocksUpdate"],
	/** Updates an existing variant for product. */
	productVariantUpdate?: GraphQLTypes["ProductVariantUpdate"],
	/** Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook. */
	productVariantSetDefault?: GraphQLTypes["ProductVariantSetDefault"],
	/** Creates/updates translations for a product variant. */
	productVariantTranslate?: GraphQLTypes["ProductVariantTranslate"],
	/** Manage product variant prices in channels. */
	productVariantChannelListingUpdate?: GraphQLTypes["ProductVariantChannelListingUpdate"],
	/** Reorder product variant attribute values. */
	productVariantReorderAttributeValues?: GraphQLTypes["ProductVariantReorderAttributeValues"],
	/** New in Saleor 3.1. Deactivates product variant preorder. It changes all
preorder allocation into regular allocation. Note: this feature is in a
preview state and can be subject to changes at later point. */
	productVariantPreorderDeactivate?: GraphQLTypes["ProductVariantPreorderDeactivate"],
	/** Assign an media to a product variant. */
	variantMediaAssign?: GraphQLTypes["VariantMediaAssign"],
	/** Unassign an media from a product variant. */
	variantMediaUnassign?: GraphQLTypes["VariantMediaUnassign"],
	/** Captures the authorized payment amount. */
	paymentCapture?: GraphQLTypes["PaymentCapture"],
	/** Refunds the captured payment amount. */
	paymentRefund?: GraphQLTypes["PaymentRefund"],
	/** Voids the authorized payment. */
	paymentVoid?: GraphQLTypes["PaymentVoid"],
	/** Initializes payment process when it is required by gateway. */
	paymentInitialize?: GraphQLTypes["PaymentInitialize"],
	/** Check payment balance. */
	paymentCheckBalance?: GraphQLTypes["PaymentCheckBalance"],
	/** Create payment for checkout or order. */
	paymentCreate?: GraphQLTypes["PaymentCreate"],
	/** Create payment for checkout or order. */
	paymentUpdate?: GraphQLTypes["PaymentUpdate"],
	/** Creates a new page. */
	pageCreate?: GraphQLTypes["PageCreate"],
	/** Deletes a page. */
	pageDelete?: GraphQLTypes["PageDelete"],
	/** Deletes pages. */
	pageBulkDelete?: GraphQLTypes["PageBulkDelete"],
	/** Publish pages. */
	pageBulkPublish?: GraphQLTypes["PageBulkPublish"],
	/** Updates an existing page. */
	pageUpdate?: GraphQLTypes["PageUpdate"],
	/** Creates/updates translations for a page. */
	pageTranslate?: GraphQLTypes["PageTranslate"],
	/** Create a new page type. */
	pageTypeCreate?: GraphQLTypes["PageTypeCreate"],
	/** Update page type. */
	pageTypeUpdate?: GraphQLTypes["PageTypeUpdate"],
	/** Delete a page type. */
	pageTypeDelete?: GraphQLTypes["PageTypeDelete"],
	/** Delete page types. */
	pageTypeBulkDelete?: GraphQLTypes["PageTypeBulkDelete"],
	/** Assign attributes to a given page type. */
	pageAttributeAssign?: GraphQLTypes["PageAttributeAssign"],
	/** Unassign attributes from a given page type. */
	pageAttributeUnassign?: GraphQLTypes["PageAttributeUnassign"],
	/** Reorder the attributes of a page type. */
	pageTypeReorderAttributes?: GraphQLTypes["PageTypeReorderAttributes"],
	/** Reorder page attribute values. */
	pageReorderAttributeValues?: GraphQLTypes["PageReorderAttributeValues"],
	/** Completes creating an order. */
	draftOrderComplete?: GraphQLTypes["DraftOrderComplete"],
	/** Creates a new draft order. */
	draftOrderCreate?: GraphQLTypes["DraftOrderCreate"],
	/** Deletes a draft order. */
	draftOrderDelete?: GraphQLTypes["DraftOrderDelete"],
	/** Deletes draft orders. */
	draftOrderBulkDelete?: GraphQLTypes["DraftOrderBulkDelete"],
	/** Deletes order lines. */
	draftOrderLinesBulkDelete?: GraphQLTypes["DraftOrderLinesBulkDelete"],
	/** Updates a draft order. */
	draftOrderUpdate?: GraphQLTypes["DraftOrderUpdate"],
	/** Adds note to the order. */
	orderAddNote?: GraphQLTypes["OrderAddNote"],
	/** Cancel an order. */
	orderCancel?: GraphQLTypes["OrderCancel"],
	/** Capture an order. */
	orderCapture?: GraphQLTypes["OrderCapture"],
	/** Confirms an unconfirmed order by changing status to unfulfilled. */
	orderConfirm?: GraphQLTypes["OrderConfirm"],
	/** Creates new fulfillments for an order. */
	orderFulfill?: GraphQLTypes["OrderFulfill"],
	/** Cancels existing fulfillment and optionally restocks items. */
	orderFulfillmentCancel?: GraphQLTypes["FulfillmentCancel"],
	/** New in Saleor 3.1. Approve existing fulfillment. */
	orderFulfillmentApprove?: GraphQLTypes["FulfillmentApprove"],
	/** Updates a fulfillment for an order. */
	orderFulfillmentUpdateTracking?: GraphQLTypes["FulfillmentUpdateTracking"],
	/** Refund products. */
	orderFulfillmentRefundProducts?: GraphQLTypes["FulfillmentRefundProducts"],
	/** Return products. */
	orderFulfillmentReturnProducts?: GraphQLTypes["FulfillmentReturnProducts"],
	/** Create order lines for an order. */
	orderLinesCreate?: GraphQLTypes["OrderLinesCreate"],
	/** Deletes an order line from an order. */
	orderLineDelete?: GraphQLTypes["OrderLineDelete"],
	/** Updates an order line of an order. */
	orderLineUpdate?: GraphQLTypes["OrderLineUpdate"],
	/** Adds discount to the order. */
	orderDiscountAdd?: GraphQLTypes["OrderDiscountAdd"],
	/** Update discount for the order. */
	orderDiscountUpdate?: GraphQLTypes["OrderDiscountUpdate"],
	/** Remove discount from the order. */
	orderDiscountDelete?: GraphQLTypes["OrderDiscountDelete"],
	/** Update discount for the order line. */
	orderLineDiscountUpdate?: GraphQLTypes["OrderLineDiscountUpdate"],
	/** Remove discount applied to the order line. */
	orderLineDiscountRemove?: GraphQLTypes["OrderLineDiscountRemove"],
	/** Mark order as manually paid. */
	orderMarkAsPaid?: GraphQLTypes["OrderMarkAsPaid"],
	/** Refund an order. */
	orderRefund?: GraphQLTypes["OrderRefund"],
	/** Updates an order. */
	orderUpdate?: GraphQLTypes["OrderUpdate"],
	/** Updates a shipping method of the order. Requires shipping method ID to update,
when null is passed then currently assigned shipping method is removed. */
	orderUpdateShipping?: GraphQLTypes["OrderUpdateShipping"],
	/** Void an order. */
	orderVoid?: GraphQLTypes["OrderVoid"],
	/** Cancels orders. */
	orderBulkCancel?: GraphQLTypes["OrderBulkCancel"],
	/** Delete metadata of an object. */
	deleteMetadata?: GraphQLTypes["DeleteMetadata"],
	/** Delete object's private metadata. */
	deletePrivateMetadata?: GraphQLTypes["DeletePrivateMetadata"],
	/** Updates metadata of an object. */
	updateMetadata?: GraphQLTypes["UpdateMetadata"],
	/** Updates private metadata of an object. */
	updatePrivateMetadata?: GraphQLTypes["UpdatePrivateMetadata"],
	/** Assigns storefront's navigation menus. */
	assignNavigation?: GraphQLTypes["AssignNavigation"],
	/** Creates a new Menu. */
	menuCreate?: GraphQLTypes["MenuCreate"],
	/** Deletes a menu. */
	menuDelete?: GraphQLTypes["MenuDelete"],
	/** Deletes menus. */
	menuBulkDelete?: GraphQLTypes["MenuBulkDelete"],
	/** Updates a menu. */
	menuUpdate?: GraphQLTypes["MenuUpdate"],
	/** Creates a new menu item. */
	menuItemCreate?: GraphQLTypes["MenuItemCreate"],
	/** Deletes a menu item. */
	menuItemDelete?: GraphQLTypes["MenuItemDelete"],
	/** Deletes menu items. */
	menuItemBulkDelete?: GraphQLTypes["MenuItemBulkDelete"],
	/** Updates a menu item. */
	menuItemUpdate?: GraphQLTypes["MenuItemUpdate"],
	/** Creates/updates translations for a menu item. */
	menuItemTranslate?: GraphQLTypes["MenuItemTranslate"],
	/** Moves items of menus. */
	menuItemMove?: GraphQLTypes["MenuItemMove"],
	/** Request an invoice for the order using plugin. */
	invoiceRequest?: GraphQLTypes["InvoiceRequest"],
	/** Requests deletion of an invoice. */
	invoiceRequestDelete?: GraphQLTypes["InvoiceRequestDelete"],
	/** Creates a ready to send invoice. */
	invoiceCreate?: GraphQLTypes["InvoiceCreate"],
	/** Deletes an invoice. */
	invoiceDelete?: GraphQLTypes["InvoiceDelete"],
	/** Updates an invoice. */
	invoiceUpdate?: GraphQLTypes["InvoiceUpdate"],
	/** Send an invoice notification to the customer. */
	invoiceSendNotification?: GraphQLTypes["InvoiceSendNotification"],
	/** Activate a gift card. */
	giftCardActivate?: GraphQLTypes["GiftCardActivate"],
	/** Creates a new gift card. */
	giftCardCreate?: GraphQLTypes["GiftCardCreate"],
	/** New in Saleor 3.1. Delete gift card. Note: this feature is in a preview state
and can be subject to changes at later point. */
	giftCardDelete?: GraphQLTypes["GiftCardDelete"],
	/** Deactivate a gift card. */
	giftCardDeactivate?: GraphQLTypes["GiftCardDeactivate"],
	/** Update a gift card. */
	giftCardUpdate?: GraphQLTypes["GiftCardUpdate"],
	/** New in Saleor 3.1. Resend a gift card. Note: this feature is in a preview
state and can be subject to changes at later point. */
	giftCardResend?: GraphQLTypes["GiftCardResend"],
	/** New in Saleor 3.1. Adds note to the gift card. Note: this feature is in a
preview state and can be subject to changes at later point. */
	giftCardAddNote?: GraphQLTypes["GiftCardAddNote"],
	/** New in Saleor 3.1. Create gift cards. Note: this feature is in a preview state
and can be subject to changes at later point. */
	giftCardBulkCreate?: GraphQLTypes["GiftCardBulkCreate"],
	/** New in Saleor 3.1. Delete gift cards. Note: this feature is in a preview state
and can be subject to changes at later point. */
	giftCardBulkDelete?: GraphQLTypes["GiftCardBulkDelete"],
	/** New in Saleor 3.1. Activate gift cards. Note: this feature is in a preview
state and can be subject to changes at later point. */
	giftCardBulkActivate?: GraphQLTypes["GiftCardBulkActivate"],
	/** New in Saleor 3.1. Deactivate gift cards. Note: this feature is in a preview
state and can be subject to changes at later point. */
	giftCardBulkDeactivate?: GraphQLTypes["GiftCardBulkDeactivate"],
	/** Update plugin configuration. */
	pluginUpdate?: GraphQLTypes["PluginUpdate"],
	/** New in Saleor 3.1. Trigger sending a notification with the notify plugin
method. Serializes nodes provided as ids parameter and includes this data in
the notification payload. */
	externalNotificationTrigger?: GraphQLTypes["ExternalNotificationTrigger"],
	/** Creates a new sale. */
	saleCreate?: GraphQLTypes["SaleCreate"],
	/** Deletes a sale. */
	saleDelete?: GraphQLTypes["SaleDelete"],
	/** Deletes sales. */
	saleBulkDelete?: GraphQLTypes["SaleBulkDelete"],
	/** Updates a sale. */
	saleUpdate?: GraphQLTypes["SaleUpdate"],
	/** Adds products, categories, collections to a voucher. */
	saleCataloguesAdd?: GraphQLTypes["SaleAddCatalogues"],
	/** Removes products, categories, collections from a sale. */
	saleCataloguesRemove?: GraphQLTypes["SaleRemoveCatalogues"],
	/** Creates/updates translations for a sale. */
	saleTranslate?: GraphQLTypes["SaleTranslate"],
	/** Manage sale's availability in channels. */
	saleChannelListingUpdate?: GraphQLTypes["SaleChannelListingUpdate"],
	/** Creates a new voucher. */
	voucherCreate?: GraphQLTypes["VoucherCreate"],
	/** Deletes a voucher. */
	voucherDelete?: GraphQLTypes["VoucherDelete"],
	/** Deletes vouchers. */
	voucherBulkDelete?: GraphQLTypes["VoucherBulkDelete"],
	/** Updates a voucher. */
	voucherUpdate?: GraphQLTypes["VoucherUpdate"],
	/** Adds products, categories, collections to a voucher. */
	voucherCataloguesAdd?: GraphQLTypes["VoucherAddCatalogues"],
	/** Removes products, categories, collections from a voucher. */
	voucherCataloguesRemove?: GraphQLTypes["VoucherRemoveCatalogues"],
	/** Creates/updates translations for a voucher. */
	voucherTranslate?: GraphQLTypes["VoucherTranslate"],
	/** Manage voucher's availability in channels. */
	voucherChannelListingUpdate?: GraphQLTypes["VoucherChannelListingUpdate"],
	/** Export products to csv file. */
	exportProducts?: GraphQLTypes["ExportProducts"],
	/** New in Saleor 3.1. Export gift cards to csv file. Note: this feature is in a
preview state and can be subject to changes at later point. */
	exportGiftCards?: GraphQLTypes["ExportGiftCards"],
	/** Upload a file. This mutation must be sent as a `multipart` request. More
detailed specs of the upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
	fileUpload?: GraphQLTypes["FileUpload"],
	/** Adds a gift card or a voucher to a checkout. */
	checkoutAddPromoCode?: GraphQLTypes["CheckoutAddPromoCode"],
	/** Update billing address in the existing checkout. */
	checkoutBillingAddressUpdate?: GraphQLTypes["CheckoutBillingAddressUpdate"],
	/** Completes the checkout. As a result a new order is created and a payment
charge is made. This action requires a successful payment before it can be
performed. In case additional confirmation step as 3D secure is required
confirmationNeeded flag will be set to True and no order created until payment
is confirmed with second call of this mutation. */
	checkoutComplete?: GraphQLTypes["CheckoutComplete"],
	/** Create a new checkout. */
	checkoutCreate?: GraphQLTypes["CheckoutCreate"],
	/** Sets the customer as the owner of the checkout. */
	checkoutCustomerAttach?: GraphQLTypes["CheckoutCustomerAttach"],
	/** Removes the user assigned as the owner of the checkout. */
	checkoutCustomerDetach?: GraphQLTypes["CheckoutCustomerDetach"],
	/** Updates email address in the existing checkout object. */
	checkoutEmailUpdate?: GraphQLTypes["CheckoutEmailUpdate"],
	/** Deletes a CheckoutLine. */
	checkoutLineDelete?: GraphQLTypes["CheckoutLineDelete"],
	/** Deletes checkout lines. */
	checkoutLinesDelete?: GraphQLTypes["CheckoutLinesDelete"],
	/** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
	checkoutLinesAdd?: GraphQLTypes["CheckoutLinesAdd"],
	/** Updates checkout line in the existing checkout. */
	checkoutLinesUpdate?: GraphQLTypes["CheckoutLinesUpdate"],
	/** Remove a gift card or a voucher from a checkout. */
	checkoutRemovePromoCode?: GraphQLTypes["CheckoutRemovePromoCode"],
	/** Create a new payment for given checkout. */
	checkoutPaymentCreate?: GraphQLTypes["CheckoutPaymentCreate"],
	/** Update shipping address in the existing checkout. */
	checkoutShippingAddressUpdate?: GraphQLTypes["CheckoutShippingAddressUpdate"],
	/** Updates the shipping method of the checkout. */
	checkoutShippingMethodUpdate?: GraphQLTypes["CheckoutShippingMethodUpdate"],
	/** New in Saleor 3.1. Updates the delivery method (shipping method or pick up
point) of the checkout. Note: this feature is in a preview state and can be
subject to changes at later point. */
	checkoutDeliveryMethodUpdate?: GraphQLTypes["CheckoutDeliveryMethodUpdate"],
	/** Update language code in the existing checkout. */
	checkoutLanguageCodeUpdate?: GraphQLTypes["CheckoutLanguageCodeUpdate"],
	/** Create new order from existing checkout. */
	orderFromCheckoutCreate?: GraphQLTypes["OrderFromCheckoutCreate"],
	/** Creates new channel. */
	channelCreate?: GraphQLTypes["ChannelCreate"],
	/** Update a channel. */
	channelUpdate?: GraphQLTypes["ChannelUpdate"],
	/** Delete a channel. Orders associated with the deleted channel will be moved to
the target channel. Checkouts, product availability, and pricing will be removed. */
	channelDelete?: GraphQLTypes["ChannelDelete"],
	/** Activate a channel. */
	channelActivate?: GraphQLTypes["ChannelActivate"],
	/** Deactivate a channel. */
	channelDeactivate?: GraphQLTypes["ChannelDeactivate"],
	/** Creates an attribute. */
	attributeCreate?: GraphQLTypes["AttributeCreate"],
	/** Deletes an attribute. */
	attributeDelete?: GraphQLTypes["AttributeDelete"],
	/** Updates attribute. */
	attributeUpdate?: GraphQLTypes["AttributeUpdate"],
	/** Creates/updates translations for an attribute. */
	attributeTranslate?: GraphQLTypes["AttributeTranslate"],
	/** Deletes attributes. */
	attributeBulkDelete?: GraphQLTypes["AttributeBulkDelete"],
	/** Deletes values of attributes. */
	attributeValueBulkDelete?: GraphQLTypes["AttributeValueBulkDelete"],
	/** Creates a value for an attribute. */
	attributeValueCreate?: GraphQLTypes["AttributeValueCreate"],
	/** Deletes a value of an attribute. */
	attributeValueDelete?: GraphQLTypes["AttributeValueDelete"],
	/** Updates value of an attribute. */
	attributeValueUpdate?: GraphQLTypes["AttributeValueUpdate"],
	/** Creates/updates translations for an attribute value. */
	attributeValueTranslate?: GraphQLTypes["AttributeValueTranslate"],
	/** Reorder the values of an attribute. */
	attributeReorderValues?: GraphQLTypes["AttributeReorderValues"],
	/** Creates a new app. */
	appCreate?: GraphQLTypes["AppCreate"],
	/** Updates an existing app. */
	appUpdate?: GraphQLTypes["AppUpdate"],
	/** Deletes an app. */
	appDelete?: GraphQLTypes["AppDelete"],
	/** Creates a new token. */
	appTokenCreate?: GraphQLTypes["AppTokenCreate"],
	/** Deletes an authentication token assigned to app. */
	appTokenDelete?: GraphQLTypes["AppTokenDelete"],
	/** Verify provided app token. */
	appTokenVerify?: GraphQLTypes["AppTokenVerify"],
	/** Install new app by using app manifest. */
	appInstall?: GraphQLTypes["AppInstall"],
	/** Retry failed installation of new app. */
	appRetryInstall?: GraphQLTypes["AppRetryInstall"],
	/** Delete failed installation. */
	appDeleteFailedInstallation?: GraphQLTypes["AppDeleteFailedInstallation"],
	/** Fetch and validate manifest. */
	appFetchManifest?: GraphQLTypes["AppFetchManifest"],
	/** Activate the app. */
	appActivate?: GraphQLTypes["AppActivate"],
	/** Deactivate the app. */
	appDeactivate?: GraphQLTypes["AppDeactivate"],
	/** Create JWT token. */
	tokenCreate?: GraphQLTypes["CreateToken"],
	/** Refresh JWT token. Mutation tries to take refreshToken from the input.If it
fails it will try to take refreshToken from the http-only cookie
-refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
	tokenRefresh?: GraphQLTypes["RefreshToken"],
	/** Verify JWT token. */
	tokenVerify?: GraphQLTypes["VerifyToken"],
	/** Deactivate all JWT tokens of the currently authenticated user. */
	tokensDeactivateAll?: GraphQLTypes["DeactivateAllUserTokens"],
	/** Prepare external authentication url for user by custom plugin. */
	externalAuthenticationUrl?: GraphQLTypes["ExternalAuthenticationUrl"],
	/** Obtain external access tokens for user by custom plugin. */
	externalObtainAccessTokens?: GraphQLTypes["ExternalObtainAccessTokens"],
	/** Refresh user's access by custom plugin. */
	externalRefresh?: GraphQLTypes["ExternalRefresh"],
	/** Logout user by custom plugin. */
	externalLogout?: GraphQLTypes["ExternalLogout"],
	/** Verify external authentication data by plugin. */
	externalVerify?: GraphQLTypes["ExternalVerify"],
	/** Sends an email with the account password modification link. */
	requestPasswordReset?: GraphQLTypes["RequestPasswordReset"],
	/** Confirm user account with token sent by email during registration. */
	confirmAccount?: GraphQLTypes["ConfirmAccount"],
	/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
	setPassword?: GraphQLTypes["SetPassword"],
	/** Change the password of the logged in user. */
	passwordChange?: GraphQLTypes["PasswordChange"],
	/** Request email change of the logged in user. */
	requestEmailChange?: GraphQLTypes["RequestEmailChange"],
	/** Confirm the email change of the logged-in user. */
	confirmEmailChange?: GraphQLTypes["ConfirmEmailChange"],
	/** Create a new address for the customer. */
	accountAddressCreate?: GraphQLTypes["AccountAddressCreate"],
	/** Updates an address of the logged-in user. */
	accountAddressUpdate?: GraphQLTypes["AccountAddressUpdate"],
	/** Delete an address of the logged-in user. */
	accountAddressDelete?: GraphQLTypes["AccountAddressDelete"],
	/** Sets a default address for the authenticated user. */
	accountSetDefaultAddress?: GraphQLTypes["AccountSetDefaultAddress"],
	/** Register a new user. */
	accountRegister?: GraphQLTypes["AccountRegister"],
	/** Updates the account of the logged-in user. */
	accountUpdate?: GraphQLTypes["AccountUpdate"],
	/** Sends an email with the account removal link for the logged-in user. */
	accountRequestDeletion?: GraphQLTypes["AccountRequestDeletion"],
	/** Remove user account. */
	accountDelete?: GraphQLTypes["AccountDelete"],
	/** Creates user address. */
	addressCreate?: GraphQLTypes["AddressCreate"],
	/** Updates an address. */
	addressUpdate?: GraphQLTypes["AddressUpdate"],
	/** Deletes an address. */
	addressDelete?: GraphQLTypes["AddressDelete"],
	/** Sets a default address for the given user. */
	addressSetDefault?: GraphQLTypes["AddressSetDefault"],
	/** Creates a new customer. */
	customerCreate?: GraphQLTypes["CustomerCreate"],
	/** Updates an existing customer. */
	customerUpdate?: GraphQLTypes["CustomerUpdate"],
	/** Deletes a customer. */
	customerDelete?: GraphQLTypes["CustomerDelete"],
	/** Deletes customers. */
	customerBulkDelete?: GraphQLTypes["CustomerBulkDelete"],
	/** Creates a new staff user. */
	staffCreate?: GraphQLTypes["StaffCreate"],
	/** Updates an existing staff user. */
	staffUpdate?: GraphQLTypes["StaffUpdate"],
	/** Deletes a staff user. */
	staffDelete?: GraphQLTypes["StaffDelete"],
	/** Deletes staff users. */
	staffBulkDelete?: GraphQLTypes["StaffBulkDelete"],
	/** Create a user avatar. Only for staff members. This mutation must be sent as a
`multipart` request. More detailed specs of the upload format can be found
here: https://github.com/jaydenseric/graphql-multipart-request-spec */
	userAvatarUpdate?: GraphQLTypes["UserAvatarUpdate"],
	/** Deletes a user avatar. Only for staff members. */
	userAvatarDelete?: GraphQLTypes["UserAvatarDelete"],
	/** Activate or deactivate users. */
	userBulkSetActive?: GraphQLTypes["UserBulkSetActive"],
	/** Create new permission group. */
	permissionGroupCreate?: GraphQLTypes["PermissionGroupCreate"],
	/** Update permission group. */
	permissionGroupUpdate?: GraphQLTypes["PermissionGroupUpdate"],
	/** Delete permission group. */
	permissionGroupDelete?: GraphQLTypes["PermissionGroupDelete"]
};
	["NameTranslationInput"]: {
		name?: string
};
	["NavigationType"]: NavigationType;
	/** An object with an ID */
["Node"]: {
	__typename:"Address" | "Allocation" | "App" | "AppExtension" | "AppInstallation" | "AppToken" | "Attribute" | "AttributeTranslatableContent" | "AttributeTranslation" | "AttributeValue" | "AttributeValueTranslatableContent" | "AttributeValueTranslation" | "Category" | "CategoryTranslatableContent" | "CategoryTranslation" | "Channel" | "Checkout" | "CheckoutLine" | "Collection" | "CollectionChannelListing" | "CollectionTranslatableContent" | "CollectionTranslation" | "CustomerEvent" | "DigitalContent" | "DigitalContentUrl" | "EventDelivery" | "EventDeliveryAttempt" | "ExportEvent" | "ExportFile" | "Fulfillment" | "FulfillmentLine" | "GiftCard" | "GiftCardEvent" | "GiftCardTag" | "Group" | "Invoice" | "Menu" | "MenuItem" | "MenuItemTranslatableContent" | "MenuItemTranslation" | "Order" | "OrderDiscount" | "OrderEvent" | "OrderLine" | "Page" | "PageTranslatableContent" | "PageTranslation" | "PageType" | "Payment" | "PaymentPOC" | "Product" | "ProductChannelListing" | "ProductMedia" | "ProductTranslatableContent" | "ProductTranslation" | "ProductType" | "ProductVariant" | "ProductVariantChannelListing" | "ProductVariantTranslatableContent" | "ProductVariantTranslation" | "Sale" | "SaleChannelListing" | "SaleTranslatableContent" | "SaleTranslation" | "ShippingMethod" | "ShippingMethodChannelListing" | "ShippingMethodPostalCodeRule" | "ShippingMethodTranslatableContent" | "ShippingMethodTranslation" | "ShippingMethodType" | "ShippingZone" | "ShopTranslation" | "StaffNotificationRecipient" | "Stock" | "Transaction" | "User" | "Voucher" | "VoucherChannelListing" | "VoucherTranslatableContent" | "VoucherTranslation" | "Warehouse" | "Webhook",
	/** The ID of the object. */
	id: string
	['...on Address']: '__union' & GraphQLTypes["Address"];
	['...on Allocation']: '__union' & GraphQLTypes["Allocation"];
	['...on App']: '__union' & GraphQLTypes["App"];
	['...on AppExtension']: '__union' & GraphQLTypes["AppExtension"];
	['...on AppInstallation']: '__union' & GraphQLTypes["AppInstallation"];
	['...on AppToken']: '__union' & GraphQLTypes["AppToken"];
	['...on Attribute']: '__union' & GraphQLTypes["Attribute"];
	['...on AttributeTranslatableContent']: '__union' & GraphQLTypes["AttributeTranslatableContent"];
	['...on AttributeTranslation']: '__union' & GraphQLTypes["AttributeTranslation"];
	['...on AttributeValue']: '__union' & GraphQLTypes["AttributeValue"];
	['...on AttributeValueTranslatableContent']: '__union' & GraphQLTypes["AttributeValueTranslatableContent"];
	['...on AttributeValueTranslation']: '__union' & GraphQLTypes["AttributeValueTranslation"];
	['...on Category']: '__union' & GraphQLTypes["Category"];
	['...on CategoryTranslatableContent']: '__union' & GraphQLTypes["CategoryTranslatableContent"];
	['...on CategoryTranslation']: '__union' & GraphQLTypes["CategoryTranslation"];
	['...on Channel']: '__union' & GraphQLTypes["Channel"];
	['...on Checkout']: '__union' & GraphQLTypes["Checkout"];
	['...on CheckoutLine']: '__union' & GraphQLTypes["CheckoutLine"];
	['...on Collection']: '__union' & GraphQLTypes["Collection"];
	['...on CollectionChannelListing']: '__union' & GraphQLTypes["CollectionChannelListing"];
	['...on CollectionTranslatableContent']: '__union' & GraphQLTypes["CollectionTranslatableContent"];
	['...on CollectionTranslation']: '__union' & GraphQLTypes["CollectionTranslation"];
	['...on CustomerEvent']: '__union' & GraphQLTypes["CustomerEvent"];
	['...on DigitalContent']: '__union' & GraphQLTypes["DigitalContent"];
	['...on DigitalContentUrl']: '__union' & GraphQLTypes["DigitalContentUrl"];
	['...on EventDelivery']: '__union' & GraphQLTypes["EventDelivery"];
	['...on EventDeliveryAttempt']: '__union' & GraphQLTypes["EventDeliveryAttempt"];
	['...on ExportEvent']: '__union' & GraphQLTypes["ExportEvent"];
	['...on ExportFile']: '__union' & GraphQLTypes["ExportFile"];
	['...on Fulfillment']: '__union' & GraphQLTypes["Fulfillment"];
	['...on FulfillmentLine']: '__union' & GraphQLTypes["FulfillmentLine"];
	['...on GiftCard']: '__union' & GraphQLTypes["GiftCard"];
	['...on GiftCardEvent']: '__union' & GraphQLTypes["GiftCardEvent"];
	['...on GiftCardTag']: '__union' & GraphQLTypes["GiftCardTag"];
	['...on Group']: '__union' & GraphQLTypes["Group"];
	['...on Invoice']: '__union' & GraphQLTypes["Invoice"];
	['...on Menu']: '__union' & GraphQLTypes["Menu"];
	['...on MenuItem']: '__union' & GraphQLTypes["MenuItem"];
	['...on MenuItemTranslatableContent']: '__union' & GraphQLTypes["MenuItemTranslatableContent"];
	['...on MenuItemTranslation']: '__union' & GraphQLTypes["MenuItemTranslation"];
	['...on Order']: '__union' & GraphQLTypes["Order"];
	['...on OrderDiscount']: '__union' & GraphQLTypes["OrderDiscount"];
	['...on OrderEvent']: '__union' & GraphQLTypes["OrderEvent"];
	['...on OrderLine']: '__union' & GraphQLTypes["OrderLine"];
	['...on Page']: '__union' & GraphQLTypes["Page"];
	['...on PageTranslatableContent']: '__union' & GraphQLTypes["PageTranslatableContent"];
	['...on PageTranslation']: '__union' & GraphQLTypes["PageTranslation"];
	['...on PageType']: '__union' & GraphQLTypes["PageType"];
	['...on Payment']: '__union' & GraphQLTypes["Payment"];
	['...on PaymentPOC']: '__union' & GraphQLTypes["PaymentPOC"];
	['...on Product']: '__union' & GraphQLTypes["Product"];
	['...on ProductChannelListing']: '__union' & GraphQLTypes["ProductChannelListing"];
	['...on ProductMedia']: '__union' & GraphQLTypes["ProductMedia"];
	['...on ProductTranslatableContent']: '__union' & GraphQLTypes["ProductTranslatableContent"];
	['...on ProductTranslation']: '__union' & GraphQLTypes["ProductTranslation"];
	['...on ProductType']: '__union' & GraphQLTypes["ProductType"];
	['...on ProductVariant']: '__union' & GraphQLTypes["ProductVariant"];
	['...on ProductVariantChannelListing']: '__union' & GraphQLTypes["ProductVariantChannelListing"];
	['...on ProductVariantTranslatableContent']: '__union' & GraphQLTypes["ProductVariantTranslatableContent"];
	['...on ProductVariantTranslation']: '__union' & GraphQLTypes["ProductVariantTranslation"];
	['...on Sale']: '__union' & GraphQLTypes["Sale"];
	['...on SaleChannelListing']: '__union' & GraphQLTypes["SaleChannelListing"];
	['...on SaleTranslatableContent']: '__union' & GraphQLTypes["SaleTranslatableContent"];
	['...on SaleTranslation']: '__union' & GraphQLTypes["SaleTranslation"];
	['...on ShippingMethod']: '__union' & GraphQLTypes["ShippingMethod"];
	['...on ShippingMethodChannelListing']: '__union' & GraphQLTypes["ShippingMethodChannelListing"];
	['...on ShippingMethodPostalCodeRule']: '__union' & GraphQLTypes["ShippingMethodPostalCodeRule"];
	['...on ShippingMethodTranslatableContent']: '__union' & GraphQLTypes["ShippingMethodTranslatableContent"];
	['...on ShippingMethodTranslation']: '__union' & GraphQLTypes["ShippingMethodTranslation"];
	['...on ShippingMethodType']: '__union' & GraphQLTypes["ShippingMethodType"];
	['...on ShippingZone']: '__union' & GraphQLTypes["ShippingZone"];
	['...on ShopTranslation']: '__union' & GraphQLTypes["ShopTranslation"];
	['...on StaffNotificationRecipient']: '__union' & GraphQLTypes["StaffNotificationRecipient"];
	['...on Stock']: '__union' & GraphQLTypes["Stock"];
	['...on Transaction']: '__union' & GraphQLTypes["Transaction"];
	['...on User']: '__union' & GraphQLTypes["User"];
	['...on Voucher']: '__union' & GraphQLTypes["Voucher"];
	['...on VoucherChannelListing']: '__union' & GraphQLTypes["VoucherChannelListing"];
	['...on VoucherTranslatableContent']: '__union' & GraphQLTypes["VoucherTranslatableContent"];
	['...on VoucherTranslation']: '__union' & GraphQLTypes["VoucherTranslation"];
	['...on Warehouse']: '__union' & GraphQLTypes["Warehouse"];
	['...on Webhook']: '__union' & GraphQLTypes["Webhook"];
};
	["ObjectWithMetadata"]: {
	__typename:"App" | "Attribute" | "Category" | "Checkout" | "Collection" | "DigitalContent" | "Fulfillment" | "GiftCard" | "Invoice" | "Menu" | "MenuItem" | "Order" | "Page" | "PageType" | "Payment" | "PaymentPOC" | "Product" | "ProductType" | "ProductVariant" | "Sale" | "ShippingMethod" | "ShippingMethodType" | "ShippingZone" | "User" | "Voucher" | "Warehouse",
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>
	['...on App']: '__union' & GraphQLTypes["App"];
	['...on Attribute']: '__union' & GraphQLTypes["Attribute"];
	['...on Category']: '__union' & GraphQLTypes["Category"];
	['...on Checkout']: '__union' & GraphQLTypes["Checkout"];
	['...on Collection']: '__union' & GraphQLTypes["Collection"];
	['...on DigitalContent']: '__union' & GraphQLTypes["DigitalContent"];
	['...on Fulfillment']: '__union' & GraphQLTypes["Fulfillment"];
	['...on GiftCard']: '__union' & GraphQLTypes["GiftCard"];
	['...on Invoice']: '__union' & GraphQLTypes["Invoice"];
	['...on Menu']: '__union' & GraphQLTypes["Menu"];
	['...on MenuItem']: '__union' & GraphQLTypes["MenuItem"];
	['...on Order']: '__union' & GraphQLTypes["Order"];
	['...on Page']: '__union' & GraphQLTypes["Page"];
	['...on PageType']: '__union' & GraphQLTypes["PageType"];
	['...on Payment']: '__union' & GraphQLTypes["Payment"];
	['...on PaymentPOC']: '__union' & GraphQLTypes["PaymentPOC"];
	['...on Product']: '__union' & GraphQLTypes["Product"];
	['...on ProductType']: '__union' & GraphQLTypes["ProductType"];
	['...on ProductVariant']: '__union' & GraphQLTypes["ProductVariant"];
	['...on Sale']: '__union' & GraphQLTypes["Sale"];
	['...on ShippingMethod']: '__union' & GraphQLTypes["ShippingMethod"];
	['...on ShippingMethodType']: '__union' & GraphQLTypes["ShippingMethodType"];
	['...on ShippingZone']: '__union' & GraphQLTypes["ShippingZone"];
	['...on User']: '__union' & GraphQLTypes["User"];
	['...on Voucher']: '__union' & GraphQLTypes["Voucher"];
	['...on Warehouse']: '__union' & GraphQLTypes["Warehouse"];
};
	/** Represents an order in the shop. */
["Order"]: {
	__typename: "Order",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	created: GraphQLTypes["DateTime"],
	updatedAt: GraphQLTypes["DateTime"],
	status: GraphQLTypes["OrderStatus"],
	user?: GraphQLTypes["User"],
	trackingClientId: string,
	billingAddress?: GraphQLTypes["Address"],
	shippingAddress?: GraphQLTypes["Address"],
	shippingMethodName?: string,
	collectionPointName?: string,
	channel: GraphQLTypes["Channel"],
	/** List of shipments for the order. */
	fulfillments?: Array<GraphQLTypes["Fulfillment"]>,
	/** List of order lines. */
	lines?: Array<GraphQLTypes["OrderLine"]>,
	/** List of actions that can be performed in the current state of an order. */
	actions?: Array<GraphQLTypes["OrderAction"]>,
	/** Shipping methods that can be used with this order. */
	availableShippingMethods?: Array<GraphQLTypes["ShippingMethod"] | undefined>,
	/** Shipping methods related to this order. */
	shippingMethods?: Array<GraphQLTypes["ShippingMethod"] | undefined>,
	/** New in Saleor 3.1. Collection points that can be used for this order. Note:
this feature is in a preview state and can be subject to changes at later point. */
	availableCollectionPoints: Array<GraphQLTypes["Warehouse"]>,
	/** List of order invoices. */
	invoices?: Array<GraphQLTypes["Invoice"] | undefined>,
	/** User-friendly number of an order. */
	number?: string,
	/** The ID of the order that was the base for this order. */
	original?: string,
	/** The order origin. */
	origin: GraphQLTypes["OrderOriginEnum"],
	/** Informs if an order is fully paid. */
	isPaid: boolean,
	/** Internal payment status. */
	paymentStatus: GraphQLTypes["PaymentChargeStatusEnum"],
	/** User-friendly payment status. */
	paymentStatusDisplay: string,
	/** List of payments for the order. */
	payments?: Array<GraphQLTypes["Payment"] | undefined>,
	/** List of payments for the order */
	pocPayments: Array<GraphQLTypes["PaymentPOC"]>,
	/** Total amount of the order. */
	total: GraphQLTypes["TaxedMoney"],
	/** Undiscounted total amount of the order. */
	undiscountedTotal: GraphQLTypes["TaxedMoney"],
	/** Shipping method for this order. */
	shippingMethod?: GraphQLTypes["ShippingMethod"],
	/** Total price of shipping. */
	shippingPrice: GraphQLTypes["TaxedMoney"],
	shippingTaxRate: number,
	token: string,
	voucher?: GraphQLTypes["Voucher"],
	/** List of user gift cards. */
	giftCards?: Array<GraphQLTypes["GiftCard"] | undefined>,
	displayGrossPrices: boolean,
	customerNote: string,
	weight?: GraphQLTypes["Weight"],
	redirectUrl?: string,
	/** The sum of line prices not including shipping. */
	subtotal: GraphQLTypes["TaxedMoney"],
	/** User-friendly order status. */
	statusDisplay?: string,
	/** Informs whether a draft order can be finalized(turned into a regular order). */
	canFinalize: boolean,
	/** Amount authorized for the order. */
	totalAuthorized: GraphQLTypes["Money"],
	/** Amount captured by payment. */
	totalCaptured: GraphQLTypes["Money"],
	/** List of events associated with the order. */
	events?: Array<GraphQLTypes["OrderEvent"] | undefined>,
	/** The difference between the paid and the order total amount. */
	totalBalance: GraphQLTypes["Money"],
	/** Email address of the customer. */
	userEmail?: string,
	/** Returns True, if order requires shipping. */
	isShippingRequired: boolean,
	/** New in Saleor 3.1. The delivery method selected for this checkout. Note: this
feature is in a preview state and can be subject to changes at later point. */
	deliveryMethod?: GraphQLTypes["DeliveryMethod"],
	languageCode: string,
	/** Order language code. */
	languageCodeEnum: GraphQLTypes["LanguageCodeEnum"],
	/** Returns applied discount. */
	discount?: GraphQLTypes["Money"],
	/** Discount name. */
	discountName?: string,
	/** Translated discount name. */
	translatedDiscountName?: string,
	/** List of all discounts assigned to the order. */
	discounts?: Array<GraphQLTypes["OrderDiscount"]>,
	/** List of errors that occurred during order validation. */
	errors: Array<GraphQLTypes["OrderError"]>
};
	["OrderAction"]: OrderAction;
	/** Adds note to the order. */
["OrderAddNote"]: {
	__typename: "OrderAddNote",
	/** Order with the note added. */
	order?: GraphQLTypes["Order"],
	/** Order note created. */
	event?: GraphQLTypes["OrderEvent"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	["OrderAddNoteInput"]: {
		/** Note message. */
	message: string
};
	/** Cancels orders. */
["OrderBulkCancel"]: {
	__typename: "OrderBulkCancel",
	/** Returns how many objects were affected. */
	count: number,
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	/** Cancel an order. */
["OrderCancel"]: {
	__typename: "OrderCancel",
	/** Canceled order. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	/** Capture an order. */
["OrderCapture"]: {
	__typename: "OrderCapture",
	/** Captured order. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	/** Confirms an unconfirmed order by changing status to unfulfilled. */
["OrderConfirm"]: {
	__typename: "OrderConfirm",
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	["OrderCountableConnection"]: {
	__typename: "OrderCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["OrderCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["OrderCountableEdge"]: {
	__typename: "OrderCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["Order"],
	/** A cursor for use in pagination. */
	cursor: string
};
	["OrderDirection"]: OrderDirection;
	/** Contains all details related to the applied discount to the order. */
["OrderDiscount"]: {
	__typename: "OrderDiscount",
	id: string,
	type: GraphQLTypes["OrderDiscountType"],
	name?: string,
	translatedName?: string,
	/** Type of the discount: fixed or percent */
	valueType: GraphQLTypes["DiscountValueTypeEnum"],
	/** Value of the discount. Can store fixed value or percent value */
	value: GraphQLTypes["PositiveDecimal"],
	/** Explanation for the applied discount. */
	reason?: string,
	/** Returns amount of discount. */
	amount: GraphQLTypes["Money"]
};
	/** Adds discount to the order. */
["OrderDiscountAdd"]: {
	__typename: "OrderDiscountAdd",
	/** Order which has been discounted. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	["OrderDiscountCommonInput"]: {
		/** Type of the discount: fixed or percent */
	valueType: GraphQLTypes["DiscountValueTypeEnum"],
	/** Value of the discount. Can store fixed value or percent value */
	value: GraphQLTypes["PositiveDecimal"],
	/** Explanation for the applied discount. */
	reason?: string
};
	/** Remove discount from the order. */
["OrderDiscountDelete"]: {
	__typename: "OrderDiscountDelete",
	/** Order which has removed discount. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	/** An enumeration. */
["OrderDiscountType"]: OrderDiscountType;
	/** Update discount for the order. */
["OrderDiscountUpdate"]: {
	__typename: "OrderDiscountUpdate",
	/** Order which has been discounted. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	["OrderDraftFilterInput"]: {
		customer?: string,
	created?: GraphQLTypes["DateRangeInput"],
	search?: string,
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>,
	channels?: Array<string | undefined>
};
	["OrderError"]: {
	__typename: "OrderError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["OrderErrorCode"],
	/** Warehouse ID which causes the error. */
	warehouse?: string,
	/** List of order line IDs that cause the error. */
	orderLines?: Array<string>,
	/** List of product variants that are associated with the error */
	variants?: Array<string>,
	/** A type of address that causes the error. */
	addressType?: GraphQLTypes["AddressTypeEnum"]
};
	/** An enumeration. */
["OrderErrorCode"]: OrderErrorCode;
	/** History log of the order. */
["OrderEvent"]: {
	__typename: "OrderEvent",
	id: string,
	/** Date when event happened at in ISO 8601 format. */
	date?: GraphQLTypes["DateTime"],
	/** Order event type. */
	type?: GraphQLTypes["OrderEventsEnum"],
	/** User who performed the action. */
	user?: GraphQLTypes["User"],
	/** App that performed the action. */
	app?: GraphQLTypes["App"],
	/** Content of the event. */
	message?: string,
	/** Email of the customer. */
	email?: string,
	/** Type of an email sent to the customer. */
	emailType?: GraphQLTypes["OrderEventsEmailsEnum"],
	/** Amount of money. */
	amount?: number,
	/** The payment ID from the payment gateway. */
	paymentId?: string,
	/** The payment gateway of the payment. */
	paymentGateway?: string,
	/** Number of items. */
	quantity?: number,
	/** Composed ID of the Fulfillment. */
	composedId?: string,
	/** User-friendly number of an order. */
	orderNumber?: string,
	/** Number of an invoice related to the order. */
	invoiceNumber?: string,
	/** List of oversold lines names. */
	oversoldItems?: Array<string | undefined>,
	/** The concerned lines. */
	lines?: Array<GraphQLTypes["OrderEventOrderLineObject"] | undefined>,
	/** The lines fulfilled. */
	fulfilledItems?: Array<GraphQLTypes["FulfillmentLine"] | undefined>,
	/** The warehouse were items were restocked. */
	warehouse?: GraphQLTypes["Warehouse"],
	/** The transaction reference of captured payment. */
	transactionReference?: string,
	/** Define if shipping costs were included to the refund. */
	shippingCostsIncluded?: boolean,
	/** The order which is related to this order. */
	relatedOrder?: GraphQLTypes["Order"],
	/** The discount applied to the order. */
	discount?: GraphQLTypes["OrderEventDiscountObject"],
	/** The status of payment's transaction. */
	status?: GraphQLTypes["TransactionStatus"],
	/** The reference of payment's transaction. */
	reference?: string
};
	["OrderEventCountableConnection"]: {
	__typename: "OrderEventCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["OrderEventCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["OrderEventCountableEdge"]: {
	__typename: "OrderEventCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["OrderEvent"],
	/** A cursor for use in pagination. */
	cursor: string
};
	["OrderEventDiscountObject"]: {
	__typename: "OrderEventDiscountObject",
	/** Type of the discount: fixed or percent. */
	valueType: GraphQLTypes["DiscountValueTypeEnum"],
	/** Value of the discount. Can store fixed value or percent value. */
	value: GraphQLTypes["PositiveDecimal"],
	/** Explanation for the applied discount. */
	reason?: string,
	/** Returns amount of discount. */
	amount?: GraphQLTypes["Money"],
	/** Type of the discount: fixed or percent. */
	oldValueType?: GraphQLTypes["DiscountValueTypeEnum"],
	/** Value of the discount. Can store fixed value or percent value. */
	oldValue?: GraphQLTypes["PositiveDecimal"],
	/** Returns amount of discount. */
	oldAmount?: GraphQLTypes["Money"]
};
	["OrderEventOrderLineObject"]: {
	__typename: "OrderEventOrderLineObject",
	/** The variant quantity. */
	quantity?: number,
	/** The order line. */
	orderLine?: GraphQLTypes["OrderLine"],
	/** The variant name. */
	itemName?: string,
	/** The discount applied to the order line. */
	discount?: GraphQLTypes["OrderEventDiscountObject"]
};
	/** An enumeration. */
["OrderEventsEmailsEnum"]: OrderEventsEmailsEnum;
	/** An enumeration. */
["OrderEventsEnum"]: OrderEventsEnum;
	["OrderFilterInput"]: {
		paymentStatus?: Array<GraphQLTypes["PaymentChargeStatusEnum"] | undefined>,
	status?: Array<GraphQLTypes["OrderStatusFilter"] | undefined>,
	customer?: string,
	created?: GraphQLTypes["DateRangeInput"],
	search?: string,
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>,
	channels?: Array<string | undefined>,
	updatedAt?: GraphQLTypes["DateTimeRangeInput"],
	isClickAndCollect?: boolean,
	isPreorder?: boolean,
	ids?: Array<string | undefined>,
	giftCardUsed?: boolean,
	giftCardBought?: boolean
};
	/** Create new order from existing checkout. */
["OrderFromCheckoutCreate"]: {
	__typename: "OrderFromCheckoutCreate",
	/** Placed order. */
	order?: GraphQLTypes["Order"],
	checkoutErrors: Array<GraphQLTypes["OrderFromCheckoutCreateError"]>,
	errors: Array<GraphQLTypes["OrderFromCheckoutCreateError"]>
};
	["OrderFromCheckoutCreateError"]: {
	__typename: "OrderFromCheckoutCreateError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["OrderFromCheckoutCreateErrorCode"],
	/** List of varint IDs which causes the error. */
	variants?: Array<string>,
	/** List of line Ids which cause the error. */
	lines?: Array<string>
};
	/** An enumeration. */
["OrderFromCheckoutCreateErrorCode"]: OrderFromCheckoutCreateErrorCode;
	/** Creates new fulfillments for an order. */
["OrderFulfill"]: {
	__typename: "OrderFulfill",
	/** List of created fulfillments. */
	fulfillments?: Array<GraphQLTypes["Fulfillment"] | undefined>,
	/** Fulfilled order. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	["OrderFulfillInput"]: {
		/** List of items informing how to fulfill the order. */
	lines: Array<GraphQLTypes["OrderFulfillLineInput"]>,
	/** If true, send an email notification to the customer. */
	notifyCustomer?: boolean,
	/** If true, then allow proceed fulfillment when stock is exceeded. */
	allowStockToBeExceeded?: boolean
};
	["OrderFulfillLineInput"]: {
		/** The ID of the order line. */
	orderLineId?: string,
	/** List of stock items to create. */
	stocks: Array<GraphQLTypes["OrderFulfillStockInput"]>
};
	["OrderFulfillStockInput"]: {
		/** The number of line items to be fulfilled from given warehouse. */
	quantity: number,
	/** ID of the warehouse from which the item will be fulfilled. */
	warehouse: string
};
	/** Represents order line of particular order. */
["OrderLine"]: {
	__typename: "OrderLine",
	id: string,
	productName: string,
	variantName: string,
	productSku?: string,
	productVariantId?: string,
	isShippingRequired: boolean,
	quantity: number,
	quantityFulfilled: number,
	unitDiscountReason?: string,
	taxRate: number,
	digitalContentUrl?: GraphQLTypes["DigitalContentUrl"],
	/** The main thumbnail for the ordered product. */
	thumbnail?: GraphQLTypes["Image"],
	/** Price of the single item in the order line. */
	unitPrice: GraphQLTypes["TaxedMoney"],
	/** Price of the single item in the order line without applied an order line discount. */
	undiscountedUnitPrice: GraphQLTypes["TaxedMoney"],
	/** The discount applied to the single order line. */
	unitDiscount: GraphQLTypes["Money"],
	/** Value of the discount. Can store fixed value or percent value */
	unitDiscountValue: GraphQLTypes["PositiveDecimal"],
	/** Price of the order line. */
	totalPrice: GraphQLTypes["TaxedMoney"],
	/** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. */
	variant?: GraphQLTypes["ProductVariant"],
	/** Product name in the customer's language */
	translatedProductName: string,
	/** Variant name in the customer's language */
	translatedVariantName: string,
	/** List of allocations across warehouses. */
	allocations?: Array<GraphQLTypes["Allocation"]>,
	/** New in Saleor 3.1. A quantity of items remaining to be fulfilled. */
	quantityToFulfill: number,
	/** Type of the discount: fixed or percent */
	unitDiscountType?: GraphQLTypes["DiscountValueTypeEnum"]
};
	["OrderLineCreateInput"]: {
		/** Number of variant items ordered. */
	quantity: number,
	/** Product variant ID. */
	variantId: string
};
	/** Deletes an order line from an order. */
["OrderLineDelete"]: {
	__typename: "OrderLineDelete",
	/** A related order. */
	order?: GraphQLTypes["Order"],
	/** An order line that was deleted. */
	orderLine?: GraphQLTypes["OrderLine"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	/** Remove discount applied to the order line. */
["OrderLineDiscountRemove"]: {
	__typename: "OrderLineDiscountRemove",
	/** Order line which has removed discount. */
	orderLine?: GraphQLTypes["OrderLine"],
	/** Order which is related to line which has removed discount. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	/** Update discount for the order line. */
["OrderLineDiscountUpdate"]: {
	__typename: "OrderLineDiscountUpdate",
	/** Order line which has been discounted. */
	orderLine?: GraphQLTypes["OrderLine"],
	/** Order which is related to the discounted line. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	["OrderLineInput"]: {
		/** Number of variant items ordered. */
	quantity: number
};
	/** Create order lines for an order. */
["OrderLinesCreate"]: {
	__typename: "OrderLinesCreate",
	/** Related order. */
	order?: GraphQLTypes["Order"],
	/** List of added order lines. */
	orderLines?: Array<GraphQLTypes["OrderLine"]>,
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	/** Updates an order line of an order. */
["OrderLineUpdate"]: {
	__typename: "OrderLineUpdate",
	/** Related order. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>,
	orderLine?: GraphQLTypes["OrderLine"]
};
	/** Mark order as manually paid. */
["OrderMarkAsPaid"]: {
	__typename: "OrderMarkAsPaid",
	/** Order marked as paid. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	/** An enumeration. */
["OrderOriginEnum"]: OrderOriginEnum;
	/** Refund an order. */
["OrderRefund"]: {
	__typename: "OrderRefund",
	/** A refunded order. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	["OrderRefundFulfillmentLineInput"]: {
		/** The ID of the fulfillment line to refund. */
	fulfillmentLineId: string,
	/** The number of items to be refunded. */
	quantity: number
};
	["OrderRefundLineInput"]: {
		/** The ID of the order line to refund. */
	orderLineId: string,
	/** The number of items to be refunded. */
	quantity: number
};
	["OrderRefundProductsInput"]: {
		/** List of unfulfilled lines to refund. */
	orderLines?: Array<GraphQLTypes["OrderRefundLineInput"]>,
	/** List of fulfilled lines to refund. */
	fulfillmentLines?: Array<GraphQLTypes["OrderRefundFulfillmentLineInput"]>,
	/** The total amount of refund when the value is provided manually. */
	amountToRefund?: GraphQLTypes["PositiveDecimal"],
	/** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
	includeShippingCosts?: boolean
};
	["OrderReturnFulfillmentLineInput"]: {
		/** The ID of the fulfillment line to return. */
	fulfillmentLineId: string,
	/** The number of items to be returned. */
	quantity: number,
	/** Determines, if the line should be added to replace order. */
	replace?: boolean
};
	["OrderReturnLineInput"]: {
		/** The ID of the order line to return. */
	orderLineId: string,
	/** The number of items to be returned. */
	quantity: number,
	/** Determines, if the line should be added to replace order. */
	replace?: boolean
};
	["OrderReturnProductsInput"]: {
		/** List of unfulfilled lines to return. */
	orderLines?: Array<GraphQLTypes["OrderReturnLineInput"]>,
	/** List of fulfilled lines to return. */
	fulfillmentLines?: Array<GraphQLTypes["OrderReturnFulfillmentLineInput"]>,
	/** The total amount of refund when the value is provided manually. */
	amountToRefund?: GraphQLTypes["PositiveDecimal"],
	/** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
	includeShippingCosts?: boolean,
	/** If true, Saleor will call refund action for all lines. */
	refund?: boolean
};
	/** Order related settings from site settings. */
["OrderSettings"]: {
	__typename: "OrderSettings",
	automaticallyConfirmAllNewOrders: boolean,
	automaticallyFulfillNonShippableGiftCard: boolean
};
	["OrderSettingsError"]: {
	__typename: "OrderSettingsError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["OrderSettingsErrorCode"]
};
	/** An enumeration. */
["OrderSettingsErrorCode"]: OrderSettingsErrorCode;
	/** Update shop order settings. */
["OrderSettingsUpdate"]: {
	__typename: "OrderSettingsUpdate",
	/** Order settings. */
	orderSettings?: GraphQLTypes["OrderSettings"],
	orderSettingsErrors: Array<GraphQLTypes["OrderSettingsError"]>,
	errors: Array<GraphQLTypes["OrderSettingsError"]>
};
	["OrderSettingsUpdateInput"]: {
		/** When disabled, all new orders from checkout will be marked as unconfirmed.
When enabled orders from checkout will become unfulfilled immediately. */
	automaticallyConfirmAllNewOrders?: boolean,
	/** When enabled, all non-shippable gift card orders will be fulfilled automatically. */
	automaticallyFulfillNonShippableGiftCard?: boolean
};
	["OrderSortField"]: OrderSortField;
	["OrderSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort orders by the selected field. */
	field: GraphQLTypes["OrderSortField"]
};
	/** An enumeration. */
["OrderStatus"]: OrderStatus;
	["OrderStatusFilter"]: OrderStatusFilter;
	/** Updates an order. */
["OrderUpdate"]: {
	__typename: "OrderUpdate",
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>,
	order?: GraphQLTypes["Order"]
};
	["OrderUpdateInput"]: {
		/** Billing address of the customer. */
	billingAddress?: GraphQLTypes["AddressInput"],
	/** Email address of the customer. */
	userEmail?: string,
	/** Shipping address of the customer. */
	shippingAddress?: GraphQLTypes["AddressInput"]
};
	/** Updates a shipping method of the order. Requires shipping method ID to update,
when null is passed then currently assigned shipping method is removed. */
["OrderUpdateShipping"]: {
	__typename: "OrderUpdateShipping",
	/** Order with updated shipping method. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	["OrderUpdateShippingInput"]: {
		/** ID of the selected shipping method, pass null to remove currently assigned shipping method. */
	shippingMethod?: string
};
	/** Void an order. */
["OrderVoid"]: {
	__typename: "OrderVoid",
	/** A voided order. */
	order?: GraphQLTypes["Order"],
	orderErrors: Array<GraphQLTypes["OrderError"]>,
	errors: Array<GraphQLTypes["OrderError"]>
};
	/** A static page that can be manually added by a shop operator through the dashboard. */
["Page"]: {
	__typename: "Page",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	seoTitle?: string,
	seoDescription?: string,
	title: string,
	/** Content of the page (JSON). */
	content?: GraphQLTypes["JSONString"],
	publicationDate?: GraphQLTypes["Date"],
	isPublished: boolean,
	slug: string,
	pageType: GraphQLTypes["PageType"],
	created: GraphQLTypes["DateTime"],
	/** Content of the page (JSON). */
	contentJson: GraphQLTypes["JSONString"],
	/** Returns translated page fields for the given language code. */
	translation?: GraphQLTypes["PageTranslation"],
	/** List of attributes assigned to this product. */
	attributes: Array<GraphQLTypes["SelectedAttribute"]>
};
	/** Assign attributes to a given page type. */
["PageAttributeAssign"]: {
	__typename: "PageAttributeAssign",
	/** The updated page type. */
	pageType?: GraphQLTypes["PageType"],
	pageErrors: Array<GraphQLTypes["PageError"]>,
	errors: Array<GraphQLTypes["PageError"]>
};
	/** Unassign attributes from a given page type. */
["PageAttributeUnassign"]: {
	__typename: "PageAttributeUnassign",
	/** The updated page type. */
	pageType?: GraphQLTypes["PageType"],
	pageErrors: Array<GraphQLTypes["PageError"]>,
	errors: Array<GraphQLTypes["PageError"]>
};
	/** Deletes pages. */
["PageBulkDelete"]: {
	__typename: "PageBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	pageErrors: Array<GraphQLTypes["PageError"]>,
	errors: Array<GraphQLTypes["PageError"]>
};
	/** Publish pages. */
["PageBulkPublish"]: {
	__typename: "PageBulkPublish",
	/** Returns how many objects were affected. */
	count: number,
	pageErrors: Array<GraphQLTypes["PageError"]>,
	errors: Array<GraphQLTypes["PageError"]>
};
	["PageCountableConnection"]: {
	__typename: "PageCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["PageCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["PageCountableEdge"]: {
	__typename: "PageCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["Page"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates a new page. */
["PageCreate"]: {
	__typename: "PageCreate",
	pageErrors: Array<GraphQLTypes["PageError"]>,
	errors: Array<GraphQLTypes["PageError"]>,
	page?: GraphQLTypes["Page"]
};
	["PageCreateInput"]: {
		/** Page internal name. */
	slug?: string,
	/** Page title. */
	title?: string,
	/** Page content in JSON format. */
	content?: GraphQLTypes["JSONString"],
	/** List of attributes. */
	attributes?: Array<GraphQLTypes["AttributeValueInput"]>,
	/** Determines if page is visible in the storefront. */
	isPublished?: boolean,
	/** Publication date. ISO 8601 standard. */
	publicationDate?: string,
	/** Search engine optimization fields. */
	seo?: GraphQLTypes["SeoInput"],
	/** ID of the page type that page belongs to. */
	pageType: string
};
	/** Deletes a page. */
["PageDelete"]: {
	__typename: "PageDelete",
	pageErrors: Array<GraphQLTypes["PageError"]>,
	errors: Array<GraphQLTypes["PageError"]>,
	page?: GraphQLTypes["Page"]
};
	["PageError"]: {
	__typename: "PageError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["PageErrorCode"],
	/** List of attributes IDs which causes the error. */
	attributes?: Array<string>,
	/** List of attribute values IDs which causes the error. */
	values?: Array<string>
};
	/** An enumeration. */
["PageErrorCode"]: PageErrorCode;
	["PageFilterInput"]: {
		search?: string,
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>,
	pageTypes?: Array<string | undefined>,
	ids?: Array<string | undefined>
};
	/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
["PageInfo"]: {
	__typename: "PageInfo",
	/** When paginating forwards, are there more items? */
	hasNextPage: boolean,
	/** When paginating backwards, are there more items? */
	hasPreviousPage: boolean,
	/** When paginating backwards, the cursor to continue. */
	startCursor?: string,
	/** When paginating forwards, the cursor to continue. */
	endCursor?: string
};
	["PageInput"]: {
		/** Page internal name. */
	slug?: string,
	/** Page title. */
	title?: string,
	/** Page content in JSON format. */
	content?: GraphQLTypes["JSONString"],
	/** List of attributes. */
	attributes?: Array<GraphQLTypes["AttributeValueInput"]>,
	/** Determines if page is visible in the storefront. */
	isPublished?: boolean,
	/** Publication date. ISO 8601 standard. */
	publicationDate?: string,
	/** Search engine optimization fields. */
	seo?: GraphQLTypes["SeoInput"]
};
	/** Reorder page attribute values. */
["PageReorderAttributeValues"]: {
	__typename: "PageReorderAttributeValues",
	/** Page from which attribute values are reordered. */
	page?: GraphQLTypes["Page"],
	pageErrors: Array<GraphQLTypes["PageError"]>,
	errors: Array<GraphQLTypes["PageError"]>
};
	["PageSortField"]: PageSortField;
	["PageSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort pages by the selected field. */
	field: GraphQLTypes["PageSortField"]
};
	["PageTranslatableContent"]: {
	__typename: "PageTranslatableContent",
	id: string,
	seoTitle?: string,
	seoDescription?: string,
	title: string,
	content?: GraphQLTypes["JSONString"],
	/** Content of the page (JSON). */
	contentJson?: GraphQLTypes["JSONString"],
	/** Returns translated page fields for the given language code. */
	translation?: GraphQLTypes["PageTranslation"],
	/** ('A static page that can be manually added by a shop operator ', 'through the dashboard.') */
	page?: GraphQLTypes["Page"],
	/** List of page content attribute values that can be translated. */
	attributeValues: Array<GraphQLTypes["AttributeValueTranslatableContent"]>
};
	/** Creates/updates translations for a page. */
["PageTranslate"]: {
	__typename: "PageTranslate",
	translationErrors: Array<GraphQLTypes["TranslationError"]>,
	errors: Array<GraphQLTypes["TranslationError"]>,
	page?: GraphQLTypes["PageTranslatableContent"]
};
	["PageTranslation"]: {
	__typename: "PageTranslation",
	id: string,
	/** Translation language. */
	language: GraphQLTypes["LanguageDisplay"],
	seoTitle?: string,
	seoDescription?: string,
	title?: string,
	content?: GraphQLTypes["JSONString"],
	/** Translated description of the page (JSON). */
	contentJson?: GraphQLTypes["JSONString"]
};
	["PageTranslationInput"]: {
		seoTitle?: string,
	seoDescription?: string,
	title?: string,
	content?: GraphQLTypes["JSONString"]
};
	/** Represents a type of page. It defines what attributes are available to pages of this type. */
["PageType"]: {
	__typename: "PageType",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	name: string,
	slug: string,
	/** Page attributes of that page type. */
	attributes?: Array<GraphQLTypes["Attribute"] | undefined>,
	/** Attributes that can be assigned to the page type. */
	availableAttributes?: GraphQLTypes["AttributeCountableConnection"],
	/** Whether page type has pages assigned. */
	hasPages?: boolean
};
	/** Delete page types. */
["PageTypeBulkDelete"]: {
	__typename: "PageTypeBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	pageErrors: Array<GraphQLTypes["PageError"]>,
	errors: Array<GraphQLTypes["PageError"]>
};
	["PageTypeCountableConnection"]: {
	__typename: "PageTypeCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["PageTypeCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["PageTypeCountableEdge"]: {
	__typename: "PageTypeCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["PageType"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Create a new page type. */
["PageTypeCreate"]: {
	__typename: "PageTypeCreate",
	pageErrors: Array<GraphQLTypes["PageError"]>,
	errors: Array<GraphQLTypes["PageError"]>,
	pageType?: GraphQLTypes["PageType"]
};
	["PageTypeCreateInput"]: {
		/** Name of the page type. */
	name?: string,
	/** Page type slug. */
	slug?: string,
	/** List of attribute IDs to be assigned to the page type. */
	addAttributes?: Array<string>
};
	/** Delete a page type. */
["PageTypeDelete"]: {
	__typename: "PageTypeDelete",
	pageErrors: Array<GraphQLTypes["PageError"]>,
	errors: Array<GraphQLTypes["PageError"]>,
	pageType?: GraphQLTypes["PageType"]
};
	["PageTypeFilterInput"]: {
		search?: string
};
	/** Reorder the attributes of a page type. */
["PageTypeReorderAttributes"]: {
	__typename: "PageTypeReorderAttributes",
	/** Page type from which attributes are reordered. */
	pageType?: GraphQLTypes["PageType"],
	pageErrors: Array<GraphQLTypes["PageError"]>,
	errors: Array<GraphQLTypes["PageError"]>
};
	["PageTypeSortField"]: PageTypeSortField;
	["PageTypeSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort page types by the selected field. */
	field: GraphQLTypes["PageTypeSortField"]
};
	/** Update page type. */
["PageTypeUpdate"]: {
	__typename: "PageTypeUpdate",
	pageErrors: Array<GraphQLTypes["PageError"]>,
	errors: Array<GraphQLTypes["PageError"]>,
	pageType?: GraphQLTypes["PageType"]
};
	["PageTypeUpdateInput"]: {
		/** Name of the page type. */
	name?: string,
	/** Page type slug. */
	slug?: string,
	/** List of attribute IDs to be assigned to the page type. */
	addAttributes?: Array<string>,
	/** List of attribute IDs to be assigned to the page type. */
	removeAttributes?: Array<string>
};
	/** Updates an existing page. */
["PageUpdate"]: {
	__typename: "PageUpdate",
	pageErrors: Array<GraphQLTypes["PageError"]>,
	errors: Array<GraphQLTypes["PageError"]>,
	page?: GraphQLTypes["Page"]
};
	/** Change the password of the logged in user. */
["PasswordChange"]: {
	__typename: "PasswordChange",
	/** A user instance with a new password. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** Represents a payment of a given type. */
["Payment"]: {
	__typename: "Payment",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	gateway: string,
	isActive: boolean,
	created: GraphQLTypes["DateTime"],
	modified: GraphQLTypes["DateTime"],
	token: string,
	checkout?: GraphQLTypes["Checkout"],
	order?: GraphQLTypes["Order"],
	paymentMethodType: string,
	customerIpAddress?: string,
	/** Internal payment status. */
	chargeStatus: GraphQLTypes["PaymentChargeStatusEnum"],
	/** List of actions that can be performed in the current state of a payment. */
	actions?: Array<GraphQLTypes["OrderAction"]>,
	/** Total amount of the payment. */
	total?: GraphQLTypes["Money"],
	/** Total amount captured for this payment. */
	capturedAmount?: GraphQLTypes["Money"],
	/** List of all transactions within this payment. */
	transactions?: Array<GraphQLTypes["Transaction"] | undefined>,
	/** Maximum amount of money that can be captured. */
	availableCaptureAmount?: GraphQLTypes["Money"],
	/** Maximum amount of money that can be refunded. */
	availableRefundAmount?: GraphQLTypes["Money"],
	/** The details of the card used for this payment. */
	creditCard?: GraphQLTypes["CreditCard"]
};
	/** An enumeration. */
["PaymentActionEnum"]: PaymentActionEnum;
	/** Captures the authorized payment amount. */
["PaymentCapture"]: {
	__typename: "PaymentCapture",
	/** Updated payment. */
	payment?: GraphQLTypes["Payment"],
	paymentErrors: Array<GraphQLTypes["PaymentError"]>,
	errors: Array<GraphQLTypes["PaymentError"]>
};
	/** An enumeration. */
["PaymentChargeStatusEnum"]: PaymentChargeStatusEnum;
	/** Check payment balance. */
["PaymentCheckBalance"]: {
	__typename: "PaymentCheckBalance",
	/** Response from the gateway. */
	data?: GraphQLTypes["JSONString"],
	paymentErrors: Array<GraphQLTypes["PaymentError"]>,
	errors: Array<GraphQLTypes["PaymentError"]>
};
	["PaymentCheckBalanceInput"]: {
		/** An ID of a payment gateway to check. */
	gatewayId: string,
	/** Payment method name. */
	method: string,
	/** Slug of a channel for which the data should be returned. */
	channel: string,
	/** Information about card. */
	card: GraphQLTypes["CardInput"]
};
	["PaymentCountableConnection"]: {
	__typename: "PaymentCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["PaymentCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["PaymentCountableEdge"]: {
	__typename: "PaymentCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["Payment"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Create payment for checkout or order. */
["PaymentCreate"]: {
	__typename: "PaymentCreate",
	payment: GraphQLTypes["PaymentPOC"],
	errors: Array<GraphQLTypes["PaymentCreateError"]>
};
	["PaymentCreateError"]: {
	__typename: "PaymentCreateError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["PaymentCreateErrorCode"]
};
	/** An enumeration. */
["PaymentCreateErrorCode"]: PaymentCreateErrorCode;
	["PaymentError"]: {
	__typename: "PaymentError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["PaymentErrorCode"],
	/** List of varint IDs which causes the error. */
	variants?: Array<string>
};
	/** An enumeration. */
["PaymentErrorCode"]: PaymentErrorCode;
	["PaymentFilterInput"]: {
		checkouts?: Array<string | undefined>
};
	/** Available payment gateway backend with configuration necessary to setup client. */
["PaymentGateway"]: {
	__typename: "PaymentGateway",
	/** Payment gateway name. */
	name: string,
	/** Payment gateway ID. */
	id: string,
	/** Payment gateway client configuration. */
	config: Array<GraphQLTypes["GatewayConfigLine"]>,
	/** Payment gateway supported currencies. */
	currencies?: Array<string>
};
	/** Initializes payment process when it is required by gateway. */
["PaymentInitialize"]: {
	__typename: "PaymentInitialize",
	initializedPayment?: GraphQLTypes["PaymentInitialized"],
	paymentErrors: Array<GraphQLTypes["PaymentError"]>,
	errors: Array<GraphQLTypes["PaymentError"]>
};
	/** Server-side data generated by a payment gateway. Optional step when the payment
provider requires an additional action to initialize payment session. */
["PaymentInitialized"]: {
	__typename: "PaymentInitialized",
	/** ID of a payment gateway. */
	gateway: string,
	/** Payment gateway name. */
	name: string,
	/** Initialized data by gateway. */
	data?: GraphQLTypes["JSONString"]
};
	["PaymentInput"]: {
		/** A gateway to use with that payment. */
	gateway: string,
	/** Client-side generated payment token, representing customer's billing data in a secure manner. */
	token?: string,
	/** Total amount of the transaction, including all taxes and discounts. If no
amount is provided, the checkout total will be used. */
	amount?: GraphQLTypes["PositiveDecimal"],
	/** URL of a storefront view where user should be redirected after requiring
additional actions. Payment with additional actions will not be finished if
this field is not provided. */
	returnUrl?: string,
	/** New in Saleor 3.1. Payment store type. */
	storePaymentMethod?: GraphQLTypes["StorePaymentMethodEnum"],
	/** New in Saleor 3.1. User public metadata. */
	metadata?: Array<GraphQLTypes["MetadataInput"]>
};
	/** Represents a payment of a given type. */
["PaymentPOC"]: {
	__typename: "PaymentPOC",
	/** The ID of the object. */
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	status: string,
	type: string,
	reference: string,
	/** List of all possible actions for the payment */
	availableActions: Array<GraphQLTypes["PaymentActionEnum"]>,
	/** Amount authorized by this payment. */
	amountAuthorized: GraphQLTypes["Money"],
	/** Amount captured by this payment. */
	amountCaptured: GraphQLTypes["Money"],
	/** Amount refunded by this payment. */
	amountRefunded: GraphQLTypes["Money"],
	/** Amount voided by this payment. */
	amountVoided: GraphQLTypes["Money"]
};
	["PaymentPOCCreateInput"]: {
		/** Status of the payment. */
	status: string,
	/** Payment type used for this payment. */
	type: string,
	/** Reference of the payment. */
	reference?: string,
	/** List of all possible actions for the payment */
	availableActions?: Array<GraphQLTypes["PaymentActionEnum"]>,
	/** Amount authorized by this payment. */
	amountAuthorized?: GraphQLTypes["MoneyInput"],
	/** Amount captured by this payment. */
	amountCaptured?: GraphQLTypes["MoneyInput"],
	/** Amount refunded by this payment. */
	amountRefunded?: GraphQLTypes["MoneyInput"],
	/** Amount refunded by this payment. */
	amountVoided?: GraphQLTypes["MoneyInput"],
	/** New in Saleor 3.1. User public metadata. */
	publicMetadata?: Array<GraphQLTypes["MetadataInput"]>,
	/** New in Saleor 3.1. User public metadata. */
	privateMetadata?: Array<GraphQLTypes["MetadataInput"]>
};
	["PaymentPOCUpdateInput"]: {
		/** Status of the payment. */
	status?: string,
	/** Payment type used for this payment. */
	type?: string,
	/** Reference of the payment. */
	reference?: string,
	/** List of all possible actions for the payment */
	availableActions?: Array<GraphQLTypes["PaymentActionEnum"]>,
	/** Amount authorized by this payment. */
	amountAuthorized?: GraphQLTypes["MoneyInput"],
	/** Amount captured by this payment. */
	amountCaptured?: GraphQLTypes["MoneyInput"],
	/** Amount refunded by this payment. */
	amountRefunded?: GraphQLTypes["MoneyInput"],
	/** Amount refunded by this payment. */
	amountVoided?: GraphQLTypes["MoneyInput"],
	/** New in Saleor 3.1. User public metadata. */
	publicMetadata?: Array<GraphQLTypes["MetadataInput"]>,
	/** New in Saleor 3.1. User public metadata. */
	privateMetadata?: Array<GraphQLTypes["MetadataInput"]>
};
	/** Refunds the captured payment amount. */
["PaymentRefund"]: {
	__typename: "PaymentRefund",
	/** Updated payment. */
	payment?: GraphQLTypes["Payment"],
	paymentErrors: Array<GraphQLTypes["PaymentError"]>,
	errors: Array<GraphQLTypes["PaymentError"]>
};
	/** Represents a payment source stored for user in payment gateway, such as credit card. */
["PaymentSource"]: {
	__typename: "PaymentSource",
	/** Payment gateway name. */
	gateway: string,
	/** ID of stored payment method. */
	paymentMethodId?: string,
	/** Stored credit card details if available. */
	creditCardInfo?: GraphQLTypes["CreditCard"],
	/** New in Saleor 3.1. List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>
};
	/** Create payment for checkout or order. */
["PaymentUpdate"]: {
	__typename: "PaymentUpdate",
	payment: GraphQLTypes["PaymentPOC"],
	errors: Array<GraphQLTypes["PaymentCreateError"]>
};
	/** Voids the authorized payment. */
["PaymentVoid"]: {
	__typename: "PaymentVoid",
	/** Updated payment. */
	payment?: GraphQLTypes["Payment"],
	paymentErrors: Array<GraphQLTypes["PaymentError"]>,
	errors: Array<GraphQLTypes["PaymentError"]>
};
	/** Represents a permission object in a friendly form. */
["Permission"]: {
	__typename: "Permission",
	/** Internal code for permission. */
	code: GraphQLTypes["PermissionEnum"],
	/** Describe action(s) allowed to do by permission. */
	name: string
};
	/** An enumeration. */
["PermissionEnum"]: PermissionEnum;
	/** Create new permission group. */
["PermissionGroupCreate"]: {
	__typename: "PermissionGroupCreate",
	permissionGroupErrors: Array<GraphQLTypes["PermissionGroupError"]>,
	errors: Array<GraphQLTypes["PermissionGroupError"]>,
	group?: GraphQLTypes["Group"]
};
	["PermissionGroupCreateInput"]: {
		/** List of permission code names to assign to this group. */
	addPermissions?: Array<GraphQLTypes["PermissionEnum"]>,
	/** List of users to assign to this group. */
	addUsers?: Array<string>,
	/** Group name. */
	name: string
};
	/** Delete permission group. */
["PermissionGroupDelete"]: {
	__typename: "PermissionGroupDelete",
	permissionGroupErrors: Array<GraphQLTypes["PermissionGroupError"]>,
	errors: Array<GraphQLTypes["PermissionGroupError"]>,
	group?: GraphQLTypes["Group"]
};
	["PermissionGroupError"]: {
	__typename: "PermissionGroupError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["PermissionGroupErrorCode"],
	/** List of permissions which causes the error. */
	permissions?: Array<GraphQLTypes["PermissionEnum"]>,
	/** List of user IDs which causes the error. */
	users?: Array<string>
};
	/** An enumeration. */
["PermissionGroupErrorCode"]: PermissionGroupErrorCode;
	["PermissionGroupFilterInput"]: {
		search?: string,
	ids?: Array<string | undefined>
};
	["PermissionGroupSortField"]: PermissionGroupSortField;
	["PermissionGroupSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort permission group by the selected field. */
	field: GraphQLTypes["PermissionGroupSortField"]
};
	/** Update permission group. */
["PermissionGroupUpdate"]: {
	__typename: "PermissionGroupUpdate",
	permissionGroupErrors: Array<GraphQLTypes["PermissionGroupError"]>,
	errors: Array<GraphQLTypes["PermissionGroupError"]>,
	group?: GraphQLTypes["Group"]
};
	["PermissionGroupUpdateInput"]: {
		/** List of permission code names to assign to this group. */
	addPermissions?: Array<GraphQLTypes["PermissionEnum"]>,
	/** List of users to assign to this group. */
	addUsers?: Array<string>,
	/** Group name. */
	name?: string,
	/** List of permission code names to unassign from this group. */
	removePermissions?: Array<GraphQLTypes["PermissionEnum"]>,
	/** List of users to unassign from this group. */
	removeUsers?: Array<string>
};
	/** Plugin. */
["Plugin"]: {
	__typename: "Plugin",
	/** Identifier of the plugin. */
	id: string,
	/** Name of the plugin. */
	name: string,
	/** Description of the plugin. */
	description: string,
	/** Global configuration of the plugin (not channel-specific). */
	globalConfiguration?: GraphQLTypes["PluginConfiguration"],
	/** Channel-specific plugin configuration. */
	channelConfigurations: Array<GraphQLTypes["PluginConfiguration"]>
};
	/** Stores information about a configuration of plugin. */
["PluginConfiguration"]: {
	__typename: "PluginConfiguration",
	/** Determines if plugin is active or not. */
	active: boolean,
	/** The channel to which the plugin configuration is assigned to. */
	channel?: GraphQLTypes["Channel"],
	/** Configuration of the plugin. */
	configuration?: Array<GraphQLTypes["ConfigurationItem"] | undefined>
};
	["PluginConfigurationType"]: PluginConfigurationType;
	["PluginCountableConnection"]: {
	__typename: "PluginCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["PluginCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["PluginCountableEdge"]: {
	__typename: "PluginCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["Plugin"],
	/** A cursor for use in pagination. */
	cursor: string
};
	["PluginError"]: {
	__typename: "PluginError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["PluginErrorCode"]
};
	/** An enumeration. */
["PluginErrorCode"]: PluginErrorCode;
	["PluginFilterInput"]: {
		statusInChannels?: GraphQLTypes["PluginStatusInChannelsInput"],
	search?: string,
	type?: GraphQLTypes["PluginConfigurationType"]
};
	["PluginSortField"]: PluginSortField;
	["PluginSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort plugins by the selected field. */
	field: GraphQLTypes["PluginSortField"]
};
	["PluginStatusInChannelsInput"]: {
		active: boolean,
	channels: Array<string>
};
	/** Update plugin configuration. */
["PluginUpdate"]: {
	__typename: "PluginUpdate",
	plugin?: GraphQLTypes["Plugin"],
	pluginsErrors: Array<GraphQLTypes["PluginError"]>,
	errors: Array<GraphQLTypes["PluginError"]>
};
	["PluginUpdateInput"]: {
		/** Indicates whether the plugin should be enabled. */
	active?: boolean,
	/** Configuration of the plugin. */
	configuration?: Array<GraphQLTypes["ConfigurationItemInput"] | undefined>
};
	/** Positive Decimal scalar implementation.

Should be used in places where value must be positive. */
["PositiveDecimal"]:any;
	/** An enumeration. */
["PostalCodeRuleInclusionTypeEnum"]: PostalCodeRuleInclusionTypeEnum;
	/** Represents preorder settings for product variant. */
["PreorderData"]: {
	__typename: "PreorderData",
	/** The global preorder threshold for product variant. */
	globalThreshold?: number,
	/** Total number of sold product variant during preorder. */
	globalSoldUnits: number,
	/** Preorder end date. */
	endDate?: GraphQLTypes["DateTime"]
};
	["PreorderSettingsInput"]: {
		/** The global threshold for preorder variant. */
	globalThreshold?: number,
	/** The end date for preorder. */
	endDate?: GraphQLTypes["DateTime"]
};
	/** Represents preorder variant data for channel. */
["PreorderThreshold"]: {
	__typename: "PreorderThreshold",
	/** Preorder threshold for product variant in this channel. */
	quantity?: number,
	/** Number of sold product variant in this channel. */
	soldUnits: number
};
	["PriceInput"]: {
		/** Currency code. */
	currency: string,
	/** Amount of money. */
	amount: GraphQLTypes["PositiveDecimal"]
};
	["PriceRangeInput"]: {
		/** Price greater than or equal to. */
	gte?: number,
	/** Price less than or equal to. */
	lte?: number
};
	/** Represents an individual item for sale in the storefront. */
["Product"]: {
	__typename: "Product",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	seoTitle?: string,
	seoDescription?: string,
	name: string,
	description?: GraphQLTypes["JSONString"],
	productType: GraphQLTypes["ProductType"],
	slug: string,
	category?: GraphQLTypes["Category"],
	created: GraphQLTypes["DateTime"],
	updatedAt: GraphQLTypes["DateTime"],
	chargeTaxes: boolean,
	weight?: GraphQLTypes["Weight"],
	defaultVariant?: GraphQLTypes["ProductVariant"],
	rating?: number,
	/** Channel given to retrieve this product. Also used by federation gateway to resolve this object in a federated query. */
	channel?: string,
	/** Description of the product (JSON). */
	descriptionJson?: GraphQLTypes["JSONString"],
	/** The main thumbnail for a product. */
	thumbnail?: GraphQLTypes["Image"],
	/** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
	pricing?: GraphQLTypes["ProductPricingInfo"],
	/** Whether the product is in stock and visible or not. */
	isAvailable?: boolean,
	/** A type of tax. Assigned by enabled tax gateway */
	taxType?: GraphQLTypes["TaxType"],
	/** List of attributes assigned to this product. */
	attributes: Array<GraphQLTypes["SelectedAttribute"]>,
	/** List of availability in channels for the product. */
	channelListings?: Array<GraphQLTypes["ProductChannelListing"]>,
	/** Get a single product media by ID. */
	mediaById?: GraphQLTypes["ProductMedia"],
	/** Get a single product image by ID. */
	imageById?: GraphQLTypes["ProductImage"],
	/** List of variants for the product. */
	variants?: Array<GraphQLTypes["ProductVariant"] | undefined>,
	/** List of media for the product. */
	media?: Array<GraphQLTypes["ProductMedia"]>,
	/** List of images for the product. */
	images?: Array<GraphQLTypes["ProductImage"] | undefined>,
	/** List of collections for the product. */
	collections?: Array<GraphQLTypes["Collection"] | undefined>,
	/** Returns translated product fields for the given language code. */
	translation?: GraphQLTypes["ProductTranslation"],
	/** Date when product is available for purchase.  */
	availableForPurchase?: GraphQLTypes["Date"],
	/** Whether the product is available for purchase. */
	isAvailableForPurchase?: boolean
};
	/** Assign attributes to a given product type. */
["ProductAttributeAssign"]: {
	__typename: "ProductAttributeAssign",
	/** The updated product type. */
	productType?: GraphQLTypes["ProductType"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	["ProductAttributeAssignInput"]: {
		/** The ID of the attribute to assign. */
	id: string,
	/** The attribute type to be assigned as. */
	type: GraphQLTypes["ProductAttributeType"],
	/** New in Saleor 3.1. Whether attribute is allowed in variant selection. Allowed
types are: ['dropdown', 'boolean', 'swatch', 'numeric']. */
	variantSelection?: boolean
};
	/** New in Saleor 3.1. Update attributes assigned to product variant for given product type. */
["ProductAttributeAssignmentUpdate"]: {
	__typename: "ProductAttributeAssignmentUpdate",
	/** The updated product type. */
	productType?: GraphQLTypes["ProductType"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	["ProductAttributeAssignmentUpdateInput"]: {
		/** The ID of the attribute to assign. */
	id: string,
	/** New in Saleor 3.1. Whether attribute is allowed in variant selection. Allowed
types are: ['dropdown', 'boolean', 'swatch', 'numeric']. */
	variantSelection: boolean
};
	["ProductAttributeType"]: ProductAttributeType;
	/** Un-assign attributes from a given product type. */
["ProductAttributeUnassign"]: {
	__typename: "ProductAttributeUnassign",
	/** The updated product type. */
	productType?: GraphQLTypes["ProductType"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	/** Deletes products. */
["ProductBulkDelete"]: {
	__typename: "ProductBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	/** Represents product channel listing. */
["ProductChannelListing"]: {
	__typename: "ProductChannelListing",
	id: string,
	publicationDate?: GraphQLTypes["Date"],
	isPublished: boolean,
	channel: GraphQLTypes["Channel"],
	visibleInListings: boolean,
	availableForPurchase?: GraphQLTypes["Date"],
	/** The price of the cheapest variant (including discounts). */
	discountedPrice?: GraphQLTypes["Money"],
	/** Purchase cost of product. */
	purchaseCost?: GraphQLTypes["MoneyRange"],
	/** Range of margin percentage value. */
	margin?: GraphQLTypes["Margin"],
	/** Whether the product is available for purchase. */
	isAvailableForPurchase?: boolean,
	/** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
	pricing?: GraphQLTypes["ProductPricingInfo"]
};
	["ProductChannelListingAddInput"]: {
		/** ID of a channel. */
	channelId: string,
	/** Determines if object is visible to customers. */
	isPublished?: boolean,
	/** Publication date. ISO 8601 standard. */
	publicationDate?: GraphQLTypes["Date"],
	/** Determines if product is visible in product listings (doesn't apply to product collections). */
	visibleInListings?: boolean,
	/** Determine if product should be available for purchase. */
	isAvailableForPurchase?: boolean,
	/** A start date from which a product will be available for purchase. When not set
and isAvailable is set to True, the current day is assumed. */
	availableForPurchaseDate?: GraphQLTypes["Date"],
	/** List of variants to which the channel should be assigned. */
	addVariants?: Array<string>,
	/** List of variants from which the channel should be unassigned. */
	removeVariants?: Array<string>
};
	["ProductChannelListingError"]: {
	__typename: "ProductChannelListingError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["ProductErrorCode"],
	/** List of attributes IDs which causes the error. */
	attributes?: Array<string>,
	/** List of attribute values IDs which causes the error. */
	values?: Array<string>,
	/** List of channels IDs which causes the error. */
	channels?: Array<string>,
	/** List of variants IDs which causes the error. */
	variants?: Array<string>
};
	/** Manage product's availability in channels. */
["ProductChannelListingUpdate"]: {
	__typename: "ProductChannelListingUpdate",
	/** An updated product instance. */
	product?: GraphQLTypes["Product"],
	productChannelListingErrors: Array<GraphQLTypes["ProductChannelListingError"]>,
	errors: Array<GraphQLTypes["ProductChannelListingError"]>
};
	["ProductChannelListingUpdateInput"]: {
		/** List of channels to which the product should be assigned or updated. */
	updateChannels?: Array<GraphQLTypes["ProductChannelListingAddInput"]>,
	/** List of channels from which the product should be unassigned. */
	removeChannels?: Array<string>
};
	["ProductCountableConnection"]: {
	__typename: "ProductCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["ProductCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["ProductCountableEdge"]: {
	__typename: "ProductCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["Product"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates a new product. */
["ProductCreate"]: {
	__typename: "ProductCreate",
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>,
	product?: GraphQLTypes["Product"]
};
	["ProductCreateInput"]: {
		/** List of attributes. */
	attributes?: Array<GraphQLTypes["AttributeValueInput"]>,
	/** ID of the product's category. */
	category?: string,
	/** Determine if taxes are being charged for the product. */
	chargeTaxes?: boolean,
	/** List of IDs of collections that the product belongs to. */
	collections?: Array<string>,
	/** Product description (JSON). */
	description?: GraphQLTypes["JSONString"],
	/** Product name. */
	name?: string,
	/** Product slug. */
	slug?: string,
	/** Tax rate for enabled tax gateway. */
	taxCode?: string,
	/** Search engine optimization fields. */
	seo?: GraphQLTypes["SeoInput"],
	/** Weight of the Product. */
	weight?: GraphQLTypes["WeightScalar"],
	/** Defines the product rating value. */
	rating?: number,
	/** ID of the type that product belongs to. */
	productType: string
};
	/** Deletes a product. */
["ProductDelete"]: {
	__typename: "ProductDelete",
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>,
	product?: GraphQLTypes["Product"]
};
	["ProductError"]: {
	__typename: "ProductError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["ProductErrorCode"],
	/** List of attributes IDs which causes the error. */
	attributes?: Array<string>,
	/** List of attribute values IDs which causes the error. */
	values?: Array<string>
};
	/** An enumeration. */
["ProductErrorCode"]: ProductErrorCode;
	["ProductFieldEnum"]: ProductFieldEnum;
	["ProductFilterInput"]: {
		isPublished?: boolean,
	collections?: Array<string | undefined>,
	categories?: Array<string | undefined>,
	hasCategory?: boolean,
	attributes?: Array<GraphQLTypes["AttributeInput"] | undefined>,
	stockAvailability?: GraphQLTypes["StockAvailability"],
	stocks?: GraphQLTypes["ProductStockFilterInput"],
	search?: string,
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>,
	price?: GraphQLTypes["PriceRangeInput"],
	minimalPrice?: GraphQLTypes["PriceRangeInput"],
	updatedAt?: GraphQLTypes["DateTimeRangeInput"],
	productTypes?: Array<string | undefined>,
	giftCard?: boolean,
	ids?: Array<string | undefined>,
	hasPreorderedVariants?: boolean,
	/** Specifies the channel by which the data should be filtered. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?: string
};
	/** Represents a product image. */
["ProductImage"]: {
	__typename: "ProductImage",
	/** The ID of the image. */
	id: string,
	/** The alt text of the image. */
	alt?: string,
	/** The new relative sorting position of the item (from -inf to +inf). 1 moves the
item one position forward, -1 moves the item one position backward, 0 leaves
the item unchanged. */
	sortOrder?: number,
	/** The URL of the image. */
	url: string
};
	["ProductInput"]: {
		/** List of attributes. */
	attributes?: Array<GraphQLTypes["AttributeValueInput"]>,
	/** ID of the product's category. */
	category?: string,
	/** Determine if taxes are being charged for the product. */
	chargeTaxes?: boolean,
	/** List of IDs of collections that the product belongs to. */
	collections?: Array<string>,
	/** Product description (JSON). */
	description?: GraphQLTypes["JSONString"],
	/** Product name. */
	name?: string,
	/** Product slug. */
	slug?: string,
	/** Tax rate for enabled tax gateway. */
	taxCode?: string,
	/** Search engine optimization fields. */
	seo?: GraphQLTypes["SeoInput"],
	/** Weight of the Product. */
	weight?: GraphQLTypes["WeightScalar"],
	/** Defines the product rating value. */
	rating?: number
};
	/** Represents a product media. */
["ProductMedia"]: {
	__typename: "ProductMedia",
	id: string,
	sortOrder?: number,
	alt: string,
	type: GraphQLTypes["ProductMediaType"],
	oembedData: GraphQLTypes["JSONString"],
	/** The URL of the media. */
	url: string
};
	/** Deletes product media. */
["ProductMediaBulkDelete"]: {
	__typename: "ProductMediaBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	/** Create a media object (image or video URL) associated with product. For image,
this mutation must be sent as a `multipart` request. More detailed specs of the
upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
["ProductMediaCreate"]: {
	__typename: "ProductMediaCreate",
	product?: GraphQLTypes["Product"],
	media?: GraphQLTypes["ProductMedia"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	["ProductMediaCreateInput"]: {
		/** Alt text for a product media. */
	alt?: string,
	/** Represents an image file in a multipart request. */
	image?: GraphQLTypes["Upload"],
	/** ID of an product. */
	product: string,
	/** Represents an URL to an external media. */
	mediaUrl?: string
};
	/** Deletes a product media. */
["ProductMediaDelete"]: {
	__typename: "ProductMediaDelete",
	product?: GraphQLTypes["Product"],
	media?: GraphQLTypes["ProductMedia"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	/** Changes ordering of the product media. */
["ProductMediaReorder"]: {
	__typename: "ProductMediaReorder",
	product?: GraphQLTypes["Product"],
	media?: Array<GraphQLTypes["ProductMedia"]>,
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	/** An enumeration. */
["ProductMediaType"]: ProductMediaType;
	/** Updates a product media. */
["ProductMediaUpdate"]: {
	__typename: "ProductMediaUpdate",
	product?: GraphQLTypes["Product"],
	media?: GraphQLTypes["ProductMedia"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	["ProductMediaUpdateInput"]: {
		/** Alt text for a product media. */
	alt?: string
};
	["ProductOrder"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Specifies the channel in which to sort the data. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?: string,
	/** Sort product by the selected attribute's values.
Note: this doesn't take translations into account yet. */
	attributeId?: string,
	/** Sort products by the selected field. */
	field?: GraphQLTypes["ProductOrderField"]
};
	["ProductOrderField"]: ProductOrderField;
	/** Represents availability of a product in the storefront. */
["ProductPricingInfo"]: {
	__typename: "ProductPricingInfo",
	/** Whether it is in sale or not. */
	onSale?: boolean,
	/** The discount amount if in sale (null otherwise). */
	discount?: GraphQLTypes["TaxedMoney"],
	/** The discount amount in the local currency. */
	discountLocalCurrency?: GraphQLTypes["TaxedMoney"],
	/** The discounted price range of the product variants. */
	priceRange?: GraphQLTypes["TaxedMoneyRange"],
	/** The undiscounted price range of the product variants. */
	priceRangeUndiscounted?: GraphQLTypes["TaxedMoneyRange"],
	/** The discounted price range of the product variants in the local currency. */
	priceRangeLocalCurrency?: GraphQLTypes["TaxedMoneyRange"]
};
	/** Reorder product attribute values. */
["ProductReorderAttributeValues"]: {
	__typename: "ProductReorderAttributeValues",
	/** Product from which attribute values are reordered. */
	product?: GraphQLTypes["Product"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	["ProductStockFilterInput"]: {
		warehouseIds?: Array<string>,
	quantity?: GraphQLTypes["IntRangeInput"]
};
	["ProductTranslatableContent"]: {
	__typename: "ProductTranslatableContent",
	id: string,
	seoTitle?: string,
	seoDescription?: string,
	name: string,
	description?: GraphQLTypes["JSONString"],
	/** Description of the product (JSON). */
	descriptionJson?: GraphQLTypes["JSONString"],
	/** Returns translated product fields for the given language code. */
	translation?: GraphQLTypes["ProductTranslation"],
	/** Represents an individual item for sale in the storefront. */
	product?: GraphQLTypes["Product"],
	/** List of product attribute values that can be translated. */
	attributeValues: Array<GraphQLTypes["AttributeValueTranslatableContent"]>
};
	/** Creates/updates translations for a product. */
["ProductTranslate"]: {
	__typename: "ProductTranslate",
	translationErrors: Array<GraphQLTypes["TranslationError"]>,
	errors: Array<GraphQLTypes["TranslationError"]>,
	product?: GraphQLTypes["Product"]
};
	["ProductTranslation"]: {
	__typename: "ProductTranslation",
	id: string,
	/** Translation language. */
	language: GraphQLTypes["LanguageDisplay"],
	seoTitle?: string,
	seoDescription?: string,
	name?: string,
	description?: GraphQLTypes["JSONString"],
	/** Translated description of the product (JSON). */
	descriptionJson?: GraphQLTypes["JSONString"]
};
	/** Represents a type of product. It defines what attributes are available to products of this type. */
["ProductType"]: {
	__typename: "ProductType",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	name: string,
	slug: string,
	hasVariants: boolean,
	isShippingRequired: boolean,
	isDigital: boolean,
	weight?: GraphQLTypes["Weight"],
	/** The product type kind. */
	kind: GraphQLTypes["ProductTypeKindEnum"],
	/** List of products of this type. */
	products?: GraphQLTypes["ProductCountableConnection"],
	/** A type of tax. Assigned by enabled tax gateway */
	taxType?: GraphQLTypes["TaxType"],
	/** Variant attributes of that product type. */
	variantAttributes?: Array<GraphQLTypes["Attribute"] | undefined>,
	/** New in Saleor 3.1. Variant attributes of that product type with attached variant selection. */
	assignedVariantAttributes?: Array<GraphQLTypes["AssignedVariantAttribute"] | undefined>,
	/** Product attributes of that product type. */
	productAttributes?: Array<GraphQLTypes["Attribute"] | undefined>,
	availableAttributes?: GraphQLTypes["AttributeCountableConnection"]
};
	/** Deletes product types. */
["ProductTypeBulkDelete"]: {
	__typename: "ProductTypeBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	["ProductTypeConfigurable"]: ProductTypeConfigurable;
	["ProductTypeCountableConnection"]: {
	__typename: "ProductTypeCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["ProductTypeCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["ProductTypeCountableEdge"]: {
	__typename: "ProductTypeCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["ProductType"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates a new product type. */
["ProductTypeCreate"]: {
	__typename: "ProductTypeCreate",
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>,
	productType?: GraphQLTypes["ProductType"]
};
	/** Deletes a product type. */
["ProductTypeDelete"]: {
	__typename: "ProductTypeDelete",
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>,
	productType?: GraphQLTypes["ProductType"]
};
	["ProductTypeEnum"]: ProductTypeEnum;
	["ProductTypeFilterInput"]: {
		search?: string,
	configurable?: GraphQLTypes["ProductTypeConfigurable"],
	productType?: GraphQLTypes["ProductTypeEnum"],
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>,
	kind?: GraphQLTypes["ProductTypeKindEnum"],
	ids?: Array<string | undefined>
};
	["ProductTypeInput"]: {
		/** Name of the product type. */
	name?: string,
	/** Product type slug. */
	slug?: string,
	/** The product type kind. */
	kind?: GraphQLTypes["ProductTypeKindEnum"],
	/** Determines if product of this type has multiple variants. This option mainly
simplifies product management in the dashboard. There is always at least one
variant created under the hood. */
	hasVariants?: boolean,
	/** List of attributes shared among all product variants. */
	productAttributes?: Array<string | undefined>,
	/** List of attributes used to distinguish between different variants of a product. */
	variantAttributes?: Array<string | undefined>,
	/** Determines if shipping is required for products of this variant. */
	isShippingRequired?: boolean,
	/** Determines if products are digital. */
	isDigital?: boolean,
	/** Weight of the ProductType items. */
	weight?: GraphQLTypes["WeightScalar"],
	/** Tax rate for enabled tax gateway. */
	taxCode?: string
};
	/** An enumeration. */
["ProductTypeKindEnum"]: ProductTypeKindEnum;
	/** Reorder the attributes of a product type. */
["ProductTypeReorderAttributes"]: {
	__typename: "ProductTypeReorderAttributes",
	/** Product type from which attributes are reordered. */
	productType?: GraphQLTypes["ProductType"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	["ProductTypeSortField"]: ProductTypeSortField;
	["ProductTypeSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort product types by the selected field. */
	field: GraphQLTypes["ProductTypeSortField"]
};
	/** Updates an existing product type. */
["ProductTypeUpdate"]: {
	__typename: "ProductTypeUpdate",
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>,
	productType?: GraphQLTypes["ProductType"]
};
	/** Updates an existing product. */
["ProductUpdate"]: {
	__typename: "ProductUpdate",
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>,
	product?: GraphQLTypes["Product"]
};
	/** Represents a version of a product such as different size or color. */
["ProductVariant"]: {
	__typename: "ProductVariant",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	name: string,
	sku?: string,
	product: GraphQLTypes["Product"],
	trackInventory: boolean,
	quantityLimitPerCustomer?: number,
	weight?: GraphQLTypes["Weight"],
	/** Channel given to retrieve this product variant. Also used by federation
gateway to resolve this object in a federated query. */
	channel?: string,
	/** List of price information in channels for the product. */
	channelListings?: Array<GraphQLTypes["ProductVariantChannelListing"]>,
	/** Lists the storefront variant's pricing, the current price and discounts, only meant for displaying. */
	pricing?: GraphQLTypes["VariantPricingInfo"],
	/** List of attributes assigned to this variant. */
	attributes: Array<GraphQLTypes["SelectedAttribute"]>,
	/** Gross margin percentage value. */
	margin?: number,
	/** Total quantity ordered. */
	quantityOrdered?: number,
	/** Total revenue generated by a variant in given period of time. Note: this field
should be queried using `reportProductSales` query as it uses optimizations
suitable for such calculations. */
	revenue?: GraphQLTypes["TaxedMoney"],
	/** List of images for the product variant. */
	images?: Array<GraphQLTypes["ProductImage"] | undefined>,
	/** List of media for the product variant. */
	media?: Array<GraphQLTypes["ProductMedia"]>,
	/** Returns translated product variant fields for the given language code. */
	translation?: GraphQLTypes["ProductVariantTranslation"],
	/** Digital content for the product variant. */
	digitalContent?: GraphQLTypes["DigitalContent"],
	/** Stocks for the product variant. */
	stocks?: Array<GraphQLTypes["Stock"] | undefined>,
	/** Quantity of a product available for sale in one checkout. Field value will be
`null` when no `limitQuantityPerCheckout` in global settings has been set, and
`productVariant` stocks are not tracked. */
	quantityAvailable?: number,
	/** New in Saleor 3.1. Preorder data for product variant. Note: this feature is in
a preview state and can be subject to changes at later point. */
	preorder?: GraphQLTypes["PreorderData"],
	created: GraphQLTypes["DateTime"],
	updatedAt: GraphQLTypes["DateTime"]
};
	/** Creates product variants for a given product. */
["ProductVariantBulkCreate"]: {
	__typename: "ProductVariantBulkCreate",
	/** Returns how many objects were created. */
	count: number,
	/** List of the created variants. */
	productVariants: Array<GraphQLTypes["ProductVariant"]>,
	bulkProductErrors: Array<GraphQLTypes["BulkProductError"]>,
	errors: Array<GraphQLTypes["BulkProductError"]>
};
	["ProductVariantBulkCreateInput"]: {
		/** List of attributes specific to this variant. */
	attributes: Array<GraphQLTypes["BulkAttributeValueInput"]>,
	/** Stock keeping unit. */
	sku?: string,
	/** Determines if the inventory of this variant should be tracked. If false, the
quantity won't change when customers buy this item. */
	trackInventory?: boolean,
	/** Weight of the Product Variant. */
	weight?: GraphQLTypes["WeightScalar"],
	/** New in Saleor 3.1. Determines if variant is in preorder. Note: this feature is
in a preview state and can be subject to changes at later point. */
	preorder?: GraphQLTypes["PreorderSettingsInput"],
	/** New in Saleor 3.1. Determines maximum quantity of `ProductVariant`,that can be
bought in a single checkout. Note: this feature is in a preview state and can
be subject to changes at later point. */
	quantityLimitPerCustomer?: number,
	/** Stocks of a product available for sale. */
	stocks?: Array<GraphQLTypes["StockInput"]>,
	/** List of prices assigned to channels. */
	channelListings?: Array<GraphQLTypes["ProductVariantChannelListingAddInput"]>
};
	/** Deletes product variants. */
["ProductVariantBulkDelete"]: {
	__typename: "ProductVariantBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	/** Represents product varaint channel listing. */
["ProductVariantChannelListing"]: {
	__typename: "ProductVariantChannelListing",
	id: string,
	channel: GraphQLTypes["Channel"],
	price?: GraphQLTypes["Money"],
	/** Cost price of the variant. */
	costPrice?: GraphQLTypes["Money"],
	/** Gross margin percentage value. */
	margin?: number,
	/** New in Saleor 3.1. Preorder variant data. Note: this feature is in a preview
state and can be subject to changes at later point. */
	preorderThreshold?: GraphQLTypes["PreorderThreshold"]
};
	["ProductVariantChannelListingAddInput"]: {
		/** ID of a channel. */
	channelId: string,
	/** Price of the particular variant in channel. */
	price: GraphQLTypes["PositiveDecimal"],
	/** Cost price of the variant in channel. */
	costPrice?: GraphQLTypes["PositiveDecimal"],
	/** New in Saleor 3.1. The threshold for preorder variant in channel. Note: this
feature is in a preview state and can be subject to changes at later point. */
	preorderThreshold?: number
};
	/** Manage product variant prices in channels. */
["ProductVariantChannelListingUpdate"]: {
	__typename: "ProductVariantChannelListingUpdate",
	/** An updated product variant instance. */
	variant?: GraphQLTypes["ProductVariant"],
	productChannelListingErrors: Array<GraphQLTypes["ProductChannelListingError"]>,
	errors: Array<GraphQLTypes["ProductChannelListingError"]>
};
	["ProductVariantCountableConnection"]: {
	__typename: "ProductVariantCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["ProductVariantCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["ProductVariantCountableEdge"]: {
	__typename: "ProductVariantCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["ProductVariant"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates a new variant for a product. */
["ProductVariantCreate"]: {
	__typename: "ProductVariantCreate",
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>,
	productVariant?: GraphQLTypes["ProductVariant"]
};
	["ProductVariantCreateInput"]: {
		/** List of attributes specific to this variant. */
	attributes: Array<GraphQLTypes["AttributeValueInput"]>,
	/** Stock keeping unit. */
	sku?: string,
	/** Determines if the inventory of this variant should be tracked. If false, the
quantity won't change when customers buy this item. */
	trackInventory?: boolean,
	/** Weight of the Product Variant. */
	weight?: GraphQLTypes["WeightScalar"],
	/** New in Saleor 3.1. Determines if variant is in preorder. Note: this feature is
in a preview state and can be subject to changes at later point. */
	preorder?: GraphQLTypes["PreorderSettingsInput"],
	/** New in Saleor 3.1. Determines maximum quantity of `ProductVariant`,that can be
bought in a single checkout. Note: this feature is in a preview state and can
be subject to changes at later point. */
	quantityLimitPerCustomer?: number,
	/** Product ID of which type is the variant. */
	product: string,
	/** Stocks of a product available for sale. */
	stocks?: Array<GraphQLTypes["StockInput"]>
};
	/** Deletes a product variant. */
["ProductVariantDelete"]: {
	__typename: "ProductVariantDelete",
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>,
	productVariant?: GraphQLTypes["ProductVariant"]
};
	["ProductVariantFilterInput"]: {
		search?: string,
	sku?: Array<string | undefined>,
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>,
	isPreorder?: boolean,
	updatedAt?: GraphQLTypes["DateTimeRangeInput"]
};
	["ProductVariantInput"]: {
		/** List of attributes specific to this variant. */
	attributes?: Array<GraphQLTypes["AttributeValueInput"]>,
	/** Stock keeping unit. */
	sku?: string,
	/** Determines if the inventory of this variant should be tracked. If false, the
quantity won't change when customers buy this item. */
	trackInventory?: boolean,
	/** Weight of the Product Variant. */
	weight?: GraphQLTypes["WeightScalar"],
	/** New in Saleor 3.1. Determines if variant is in preorder. Note: this feature is
in a preview state and can be subject to changes at later point. */
	preorder?: GraphQLTypes["PreorderSettingsInput"],
	/** New in Saleor 3.1. Determines maximum quantity of `ProductVariant`,that can be
bought in a single checkout. Note: this feature is in a preview state and can
be subject to changes at later point. */
	quantityLimitPerCustomer?: number
};
	/** New in Saleor 3.1. Deactivates product variant preorder. It changes all preorder
allocation into regular allocation. Note: this feature is in a preview state and
can be subject to changes at later point. */
["ProductVariantPreorderDeactivate"]: {
	__typename: "ProductVariantPreorderDeactivate",
	/** Product variant with ended preorder. */
	productVariant?: GraphQLTypes["ProductVariant"],
	errors: Array<GraphQLTypes["ProductError"]>
};
	/** Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook. */
["ProductVariantReorder"]: {
	__typename: "ProductVariantReorder",
	product?: GraphQLTypes["Product"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	/** Reorder product variant attribute values. */
["ProductVariantReorderAttributeValues"]: {
	__typename: "ProductVariantReorderAttributeValues",
	/** Product variant from which attribute values are reordered. */
	productVariant?: GraphQLTypes["ProductVariant"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	/** Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook. */
["ProductVariantSetDefault"]: {
	__typename: "ProductVariantSetDefault",
	product?: GraphQLTypes["Product"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	/** Creates stocks for product variant. */
["ProductVariantStocksCreate"]: {
	__typename: "ProductVariantStocksCreate",
	/** Updated product variant. */
	productVariant?: GraphQLTypes["ProductVariant"],
	bulkStockErrors: Array<GraphQLTypes["BulkStockError"]>,
	errors: Array<GraphQLTypes["BulkStockError"]>
};
	/** Delete stocks from product variant. */
["ProductVariantStocksDelete"]: {
	__typename: "ProductVariantStocksDelete",
	/** Updated product variant. */
	productVariant?: GraphQLTypes["ProductVariant"],
	stockErrors: Array<GraphQLTypes["StockError"]>,
	errors: Array<GraphQLTypes["StockError"]>
};
	/** Update stocks for product variant. */
["ProductVariantStocksUpdate"]: {
	__typename: "ProductVariantStocksUpdate",
	/** Updated product variant. */
	productVariant?: GraphQLTypes["ProductVariant"],
	bulkStockErrors: Array<GraphQLTypes["BulkStockError"]>,
	errors: Array<GraphQLTypes["BulkStockError"]>
};
	["ProductVariantTranslatableContent"]: {
	__typename: "ProductVariantTranslatableContent",
	id: string,
	name: string,
	/** Returns translated product variant fields for the given language code. */
	translation?: GraphQLTypes["ProductVariantTranslation"],
	/** Represents a version of a product such as different size or color. */
	productVariant?: GraphQLTypes["ProductVariant"],
	/** List of product variant attribute values that can be translated. */
	attributeValues: Array<GraphQLTypes["AttributeValueTranslatableContent"]>
};
	/** Creates/updates translations for a product variant. */
["ProductVariantTranslate"]: {
	__typename: "ProductVariantTranslate",
	translationErrors: Array<GraphQLTypes["TranslationError"]>,
	errors: Array<GraphQLTypes["TranslationError"]>,
	productVariant?: GraphQLTypes["ProductVariant"]
};
	["ProductVariantTranslation"]: {
	__typename: "ProductVariantTranslation",
	id: string,
	/** Translation language. */
	language: GraphQLTypes["LanguageDisplay"],
	name: string
};
	/** Updates an existing variant for product. */
["ProductVariantUpdate"]: {
	__typename: "ProductVariantUpdate",
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>,
	productVariant?: GraphQLTypes["ProductVariant"]
};
	["PublishableChannelListingInput"]: {
		/** ID of a channel. */
	channelId: string,
	/** Determines if object is visible to customers. */
	isPublished?: boolean,
	/** Publication date. ISO 8601 standard. */
	publicationDate?: GraphQLTypes["Date"]
};
	["Query"]: {
	__typename: "Query",
	/** Look up a webhook by ID. */
	webhook?: GraphQLTypes["Webhook"],
	/** List of all available webhook events. */
	webhookEvents?: Array<GraphQLTypes["WebhookEvent"] | undefined>,
	/** Retrieve a sample payload for a given webhook event based on real data. It can
be useful for some integrations where sample payload is required. */
	webhookSamplePayload?: GraphQLTypes["JSONString"],
	/** Look up a warehouse by ID. */
	warehouse?: GraphQLTypes["Warehouse"],
	/** List of warehouses. */
	warehouses?: GraphQLTypes["WarehouseCountableConnection"],
	/** Returns a list of all translatable items of a given kind. */
	translations?: GraphQLTypes["TranslatableItemConnection"],
	translation?: GraphQLTypes["TranslatableItem"],
	/** Look up a stock by ID */
	stock?: GraphQLTypes["Stock"],
	/** List of stocks. */
	stocks?: GraphQLTypes["StockCountableConnection"],
	/** Return information about the shop. */
	shop: GraphQLTypes["Shop"],
	/** Order related settings from site settings. */
	orderSettings?: GraphQLTypes["OrderSettings"],
	/** Gift card related settings from site settings. */
	giftCardSettings: GraphQLTypes["GiftCardSettings"],
	/** Look up a shipping zone by ID. */
	shippingZone?: GraphQLTypes["ShippingZone"],
	/** List of the shop's shipping zones. */
	shippingZones?: GraphQLTypes["ShippingZoneCountableConnection"],
	/** Look up digital content by ID. */
	digitalContent?: GraphQLTypes["DigitalContent"],
	/** List of digital content. */
	digitalContents?: GraphQLTypes["DigitalContentCountableConnection"],
	/** List of the shop's categories. */
	categories?: GraphQLTypes["CategoryCountableConnection"],
	/** Look up a category by ID or slug. */
	category?: GraphQLTypes["Category"],
	/** Look up a collection by ID. */
	collection?: GraphQLTypes["Collection"],
	/** List of the shop's collections. */
	collections?: GraphQLTypes["CollectionCountableConnection"],
	/** Look up a product by ID. */
	product?: GraphQLTypes["Product"],
	/** List of the shop's products. */
	products?: GraphQLTypes["ProductCountableConnection"],
	/** Look up a product type by ID. */
	productType?: GraphQLTypes["ProductType"],
	/** List of the shop's product types. */
	productTypes?: GraphQLTypes["ProductTypeCountableConnection"],
	/** Look up a product variant by ID or SKU. */
	productVariant?: GraphQLTypes["ProductVariant"],
	/** List of product variants. */
	productVariants?: GraphQLTypes["ProductVariantCountableConnection"],
	/** List of top selling products. */
	reportProductSales?: GraphQLTypes["ProductVariantCountableConnection"],
	/** Look up a payment by ID. */
	payment?: GraphQLTypes["Payment"],
	/** List of payments. */
	payments?: GraphQLTypes["PaymentCountableConnection"],
	/** Look up a page by ID or slug. */
	page?: GraphQLTypes["Page"],
	/** List of the shop's pages. */
	pages?: GraphQLTypes["PageCountableConnection"],
	/** Look up a page type by ID. */
	pageType?: GraphQLTypes["PageType"],
	/** List of the page types. */
	pageTypes?: GraphQLTypes["PageTypeCountableConnection"],
	/** List of activity events to display on homepage (at the moment it only contains order-events). */
	homepageEvents?: GraphQLTypes["OrderEventCountableConnection"],
	/** Look up an order by ID. */
	order?: GraphQLTypes["Order"],
	/** List of orders. */
	orders?: GraphQLTypes["OrderCountableConnection"],
	/** List of draft orders. */
	draftOrders?: GraphQLTypes["OrderCountableConnection"],
	/** Return the total sales amount from a specific period. */
	ordersTotal?: GraphQLTypes["TaxedMoney"],
	/** Look up an order by token. */
	orderByToken?: GraphQLTypes["Order"],
	/** Look up a navigation menu by ID or name. */
	menu?: GraphQLTypes["Menu"],
	/** List of the storefront's menus. */
	menus?: GraphQLTypes["MenuCountableConnection"],
	/** Look up a menu item by ID. */
	menuItem?: GraphQLTypes["MenuItem"],
	/** List of the storefronts's menu items. */
	menuItems?: GraphQLTypes["MenuItemCountableConnection"],
	/** Look up a gift card by ID. */
	giftCard?: GraphQLTypes["GiftCard"],
	/** List of gift cards. */
	giftCards?: GraphQLTypes["GiftCardCountableConnection"],
	/** New in Saleor 3.1. List of gift card currencies. Note: this feature is in a
preview state and can be subject to changes at later point. */
	giftCardCurrencies: Array<string>,
	/** New in Saleor 3.1. List of gift card tags. Note: this feature is in a preview
state and can be subject to changes at later point. */
	giftCardTags?: GraphQLTypes["GiftCardTagCountableConnection"],
	/** Look up a plugin by ID. */
	plugin?: GraphQLTypes["Plugin"],
	/** List of plugins. */
	plugins?: GraphQLTypes["PluginCountableConnection"],
	/** Look up a sale by ID. */
	sale?: GraphQLTypes["Sale"],
	/** List of the shop's sales. */
	sales?: GraphQLTypes["SaleCountableConnection"],
	/** Look up a voucher by ID. */
	voucher?: GraphQLTypes["Voucher"],
	/** List of the shop's vouchers. */
	vouchers?: GraphQLTypes["VoucherCountableConnection"],
	/** Look up a export file by ID. */
	exportFile?: GraphQLTypes["ExportFile"],
	/** List of export files. */
	exportFiles?: GraphQLTypes["ExportFileCountableConnection"],
	/** List of all tax rates available from tax gateway. */
	taxTypes?: Array<GraphQLTypes["TaxType"] | undefined>,
	/** Look up a checkout by token and slug of channel. */
	checkout?: GraphQLTypes["Checkout"],
	/** List of checkouts. */
	checkouts?: GraphQLTypes["CheckoutCountableConnection"],
	/** List of checkout lines. */
	checkoutLines?: GraphQLTypes["CheckoutLineCountableConnection"],
	/** Look up a channel by ID. */
	channel?: GraphQLTypes["Channel"],
	/** List of all channels. */
	channels?: Array<GraphQLTypes["Channel"]>,
	/** List of the shop's attributes. */
	attributes?: GraphQLTypes["AttributeCountableConnection"],
	/** Look up an attribute by ID. */
	attribute?: GraphQLTypes["Attribute"],
	/** List of all apps installations */
	appsInstallations: Array<GraphQLTypes["AppInstallation"]>,
	/** List of the apps. */
	apps?: GraphQLTypes["AppCountableConnection"],
	/** Look up an app by ID. If ID is not provided, return the currently authenticated app. */
	app?: GraphQLTypes["App"],
	/** New in Saleor 3.1. List of all extensions. Note: this feature is in a preview
state and can be subject to changes at later point. */
	appExtensions?: GraphQLTypes["AppExtensionCountableConnection"],
	/** New in Saleor 3.1. Look up an app extension by ID. Note: this feature is in a
preview state and can be subject to changes at later point. */
	appExtension?: GraphQLTypes["AppExtension"],
	/** Returns address validation rules. */
	addressValidationRules?: GraphQLTypes["AddressValidationData"],
	/** Look up an address by ID. */
	address?: GraphQLTypes["Address"],
	/** List of the shop's customers. */
	customers?: GraphQLTypes["UserCountableConnection"],
	/** List of permission groups. */
	permissionGroups?: GraphQLTypes["GroupCountableConnection"],
	/** Look up permission group by ID. */
	permissionGroup?: GraphQLTypes["Group"],
	/** Return the currently authenticated user. */
	me?: GraphQLTypes["User"],
	/** List of the shop's staff users. */
	staffUsers?: GraphQLTypes["UserCountableConnection"],
	/** Look up a user by ID or email address. */
	user?: GraphQLTypes["User"],
	_entities?: Array<GraphQLTypes["_Entity"] | undefined>,
	_service?: GraphQLTypes["_Service"]
};
	/** Represents a reduced VAT rate for a particular type of goods. */
["ReducedRate"]: {
	__typename: "ReducedRate",
	/** Reduced VAT rate in percent. */
	rate: number,
	/** A type of goods. */
	rateType: string
};
	/** Refresh JWT token. Mutation tries to take refreshToken from the input.If it
fails it will try to take refreshToken from the http-only cookie -refreshToken.
csrfToken is required when refreshToken is provided as a cookie. */
["RefreshToken"]: {
	__typename: "RefreshToken",
	/** JWT token, required to authenticate. */
	token?: string,
	/** A user instance. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	["ReorderInput"]: {
		/** The ID of the item to move. */
	id: string,
	/** The new relative sorting position of the item (from -inf to +inf). 1 moves the
item one position forward, -1 moves the item one position backward, 0 leaves
the item unchanged. */
	sortOrder?: number
};
	["ReportingPeriod"]: ReportingPeriod;
	/** Request email change of the logged in user. */
["RequestEmailChange"]: {
	__typename: "RequestEmailChange",
	/** A user instance. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** Sends an email with the account password modification link. */
["RequestPasswordReset"]: {
	__typename: "RequestPasswordReset",
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
["Sale"]: {
	__typename: "Sale",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	name: string,
	type: GraphQLTypes["SaleType"],
	startDate: GraphQLTypes["DateTime"],
	endDate?: GraphQLTypes["DateTime"],
	created: GraphQLTypes["DateTime"],
	updatedAt: GraphQLTypes["DateTime"],
	/** List of categories this sale applies to. */
	categories?: GraphQLTypes["CategoryCountableConnection"],
	/** List of collections this sale applies to. */
	collections?: GraphQLTypes["CollectionCountableConnection"],
	/** List of products this sale applies to. */
	products?: GraphQLTypes["ProductCountableConnection"],
	/** New in Saleor 3.1. List of product variants this sale applies to. */
	variants?: GraphQLTypes["ProductVariantCountableConnection"],
	/** Returns translated sale fields for the given language code. */
	translation?: GraphQLTypes["SaleTranslation"],
	/** List of channels available for the sale. */
	channelListings?: Array<GraphQLTypes["SaleChannelListing"]>,
	/** Sale value. */
	discountValue?: number,
	/** Currency code for sale. */
	currency?: string
};
	/** Adds products, categories, collections to a voucher. */
["SaleAddCatalogues"]: {
	__typename: "SaleAddCatalogues",
	/** Sale of which catalogue IDs will be modified. */
	sale?: GraphQLTypes["Sale"],
	discountErrors: Array<GraphQLTypes["DiscountError"]>,
	errors: Array<GraphQLTypes["DiscountError"]>
};
	/** Deletes sales. */
["SaleBulkDelete"]: {
	__typename: "SaleBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	discountErrors: Array<GraphQLTypes["DiscountError"]>,
	errors: Array<GraphQLTypes["DiscountError"]>
};
	/** Represents sale channel listing. */
["SaleChannelListing"]: {
	__typename: "SaleChannelListing",
	id: string,
	channel: GraphQLTypes["Channel"],
	discountValue: number,
	currency: string
};
	["SaleChannelListingAddInput"]: {
		/** ID of a channel. */
	channelId: string,
	/** The value of the discount. */
	discountValue: GraphQLTypes["PositiveDecimal"]
};
	["SaleChannelListingInput"]: {
		/** List of channels to which the sale should be assigned. */
	addChannels?: Array<GraphQLTypes["SaleChannelListingAddInput"]>,
	/** List of channels from which the sale should be unassigned. */
	removeChannels?: Array<string>
};
	/** Manage sale's availability in channels. */
["SaleChannelListingUpdate"]: {
	__typename: "SaleChannelListingUpdate",
	/** An updated sale instance. */
	sale?: GraphQLTypes["Sale"],
	discountErrors: Array<GraphQLTypes["DiscountError"]>,
	errors: Array<GraphQLTypes["DiscountError"]>
};
	["SaleCountableConnection"]: {
	__typename: "SaleCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["SaleCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["SaleCountableEdge"]: {
	__typename: "SaleCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["Sale"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates a new sale. */
["SaleCreate"]: {
	__typename: "SaleCreate",
	discountErrors: Array<GraphQLTypes["DiscountError"]>,
	errors: Array<GraphQLTypes["DiscountError"]>,
	sale?: GraphQLTypes["Sale"]
};
	/** Deletes a sale. */
["SaleDelete"]: {
	__typename: "SaleDelete",
	discountErrors: Array<GraphQLTypes["DiscountError"]>,
	errors: Array<GraphQLTypes["DiscountError"]>,
	sale?: GraphQLTypes["Sale"]
};
	["SaleFilterInput"]: {
		status?: Array<GraphQLTypes["DiscountStatusEnum"] | undefined>,
	saleType?: GraphQLTypes["DiscountValueTypeEnum"],
	started?: GraphQLTypes["DateTimeRangeInput"],
	search?: string,
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>,
	updatedAt?: GraphQLTypes["DateTimeRangeInput"]
};
	["SaleInput"]: {
		/** Voucher name. */
	name?: string,
	/** Fixed or percentage. */
	type?: GraphQLTypes["DiscountValueTypeEnum"],
	/** Value of the voucher. */
	value?: GraphQLTypes["PositiveDecimal"],
	/** Products related to the discount. */
	products?: Array<string | undefined>,
	variants?: Array<string | undefined>,
	/** Categories related to the discount. */
	categories?: Array<string | undefined>,
	/** Collections related to the discount. */
	collections?: Array<string | undefined>,
	/** Start date of the voucher in ISO 8601 format. */
	startDate?: GraphQLTypes["DateTime"],
	/** End date of the voucher in ISO 8601 format. */
	endDate?: GraphQLTypes["DateTime"]
};
	/** Removes products, categories, collections from a sale. */
["SaleRemoveCatalogues"]: {
	__typename: "SaleRemoveCatalogues",
	/** Sale of which catalogue IDs will be modified. */
	sale?: GraphQLTypes["Sale"],
	discountErrors: Array<GraphQLTypes["DiscountError"]>,
	errors: Array<GraphQLTypes["DiscountError"]>
};
	["SaleSortField"]: SaleSortField;
	["SaleSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Specifies the channel in which to sort the data. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?: string,
	/** Sort sales by the selected field. */
	field: GraphQLTypes["SaleSortField"]
};
	["SaleTranslatableContent"]: {
	__typename: "SaleTranslatableContent",
	id: string,
	name: string,
	/** Returns translated sale fields for the given language code. */
	translation?: GraphQLTypes["SaleTranslation"],
	/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
	sale?: GraphQLTypes["Sale"]
};
	/** Creates/updates translations for a sale. */
["SaleTranslate"]: {
	__typename: "SaleTranslate",
	translationErrors: Array<GraphQLTypes["TranslationError"]>,
	errors: Array<GraphQLTypes["TranslationError"]>,
	sale?: GraphQLTypes["Sale"]
};
	["SaleTranslation"]: {
	__typename: "SaleTranslation",
	id: string,
	/** Translation language. */
	language: GraphQLTypes["LanguageDisplay"],
	name?: string
};
	["SaleType"]: SaleType;
	/** Updates a sale. */
["SaleUpdate"]: {
	__typename: "SaleUpdate",
	discountErrors: Array<GraphQLTypes["DiscountError"]>,
	errors: Array<GraphQLTypes["DiscountError"]>,
	sale?: GraphQLTypes["Sale"]
};
	/** Represents a custom attribute. */
["SelectedAttribute"]: {
	__typename: "SelectedAttribute",
	/** Name of an attribute displayed in the interface. */
	attribute: GraphQLTypes["Attribute"],
	/** Values of an attribute. */
	values?: Array<GraphQLTypes["AttributeValue"]>
};
	["SeoInput"]: {
		/** SEO title. */
	title?: string,
	/** SEO description. */
	description?: string
};
	/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
["SetPassword"]: {
	__typename: "SetPassword",
	/** JWT token, required to authenticate. */
	token?: string,
	/** JWT refresh token, required to re-generate access token. */
	refreshToken?: string,
	/** CSRF token required to re-generate access token. */
	csrfToken?: string,
	/** A user instance. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	["ShippingError"]: {
	__typename: "ShippingError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["ShippingErrorCode"],
	/** List of warehouse IDs which causes the error. */
	warehouses?: Array<string>,
	/** List of channels IDs which causes the error. */
	channels?: Array<string>
};
	/** An enumeration. */
["ShippingErrorCode"]: ShippingErrorCode;
	/** Shipping methods that can be used as means of shipping for orders and checkouts. */
["ShippingMethod"]: {
	__typename: "ShippingMethod",
	/** Unique ID of ShippingMethod available for Order. */
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** Type of the shipping method. */
	type?: GraphQLTypes["ShippingMethodTypeEnum"],
	/** Shipping method name. */
	name: string,
	/** Shipping method description (JSON). */
	description?: GraphQLTypes["JSONString"],
	/** Maximum delivery days for this shipping method. */
	maximumDeliveryDays?: number,
	/** Minimum delivery days for this shipping method. */
	minimumDeliveryDays?: number,
	/** Maximum order weight for this shipping method. */
	maximumOrderWeight?: GraphQLTypes["Weight"],
	/** Minimum order weight for this shipping method. */
	minimumOrderWeight?: GraphQLTypes["Weight"],
	/** Returns translated shipping method fields for the given language code. */
	translation?: GraphQLTypes["ShippingMethodTranslation"],
	/** The price of selected shipping method. */
	price: GraphQLTypes["Money"],
	/** Maximum order price for this shipping method. */
	maximumOrderPrice?: GraphQLTypes["Money"],
	/** Minimal order price for this shipping method. */
	minimumOrderPrice?: GraphQLTypes["Money"],
	/** Describes if this shipping method is active and can be selected. */
	active: boolean,
	/** Message connected to this shipping method. */
	message?: string
};
	/** Represents shipping method channel listing. */
["ShippingMethodChannelListing"]: {
	__typename: "ShippingMethodChannelListing",
	id: string,
	channel: GraphQLTypes["Channel"],
	maximumOrderPrice?: GraphQLTypes["Money"],
	minimumOrderPrice?: GraphQLTypes["Money"],
	price?: GraphQLTypes["Money"]
};
	["ShippingMethodChannelListingAddInput"]: {
		/** ID of a channel. */
	channelId: string,
	/** Shipping price of the shipping method in this channel. */
	price?: GraphQLTypes["PositiveDecimal"],
	/** Minimum order price to use this shipping method. */
	minimumOrderPrice?: GraphQLTypes["PositiveDecimal"],
	/** Maximum order price to use this shipping method. */
	maximumOrderPrice?: GraphQLTypes["PositiveDecimal"]
};
	["ShippingMethodChannelListingInput"]: {
		/** List of channels to which the shipping method should be assigned. */
	addChannels?: Array<GraphQLTypes["ShippingMethodChannelListingAddInput"]>,
	/** List of channels from which the shipping method should be unassigned. */
	removeChannels?: Array<string>
};
	/** Manage shipping method's availability in channels. */
["ShippingMethodChannelListingUpdate"]: {
	__typename: "ShippingMethodChannelListingUpdate",
	/** An updated shipping method instance. */
	shippingMethod?: GraphQLTypes["ShippingMethodType"],
	shippingErrors: Array<GraphQLTypes["ShippingError"]>,
	errors: Array<GraphQLTypes["ShippingError"]>
};
	/** Represents shipping method postal code rule. */
["ShippingMethodPostalCodeRule"]: {
	__typename: "ShippingMethodPostalCodeRule",
	/** The ID of the object. */
	id: string,
	/** Start address range. */
	start?: string,
	/** End address range. */
	end?: string,
	/** Inclusion type of the postal code rule. */
	inclusionType?: GraphQLTypes["PostalCodeRuleInclusionTypeEnum"]
};
	["ShippingMethodTranslatableContent"]: {
	__typename: "ShippingMethodTranslatableContent",
	id: string,
	name: string,
	description?: GraphQLTypes["JSONString"],
	/** Returns translated shipping method fields for the given language code. */
	translation?: GraphQLTypes["ShippingMethodTranslation"],
	/** Shipping method are the methods you'll use to get customer's orders  to them. They are directly exposed to the customers. */
	shippingMethod?: GraphQLTypes["ShippingMethodType"]
};
	["ShippingMethodTranslation"]: {
	__typename: "ShippingMethodTranslation",
	id: string,
	/** Translation language. */
	language: GraphQLTypes["LanguageDisplay"],
	name?: string,
	description?: GraphQLTypes["JSONString"]
};
	/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
["ShippingMethodType"]: {
	__typename: "ShippingMethodType",
	/** Shipping method ID. */
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** Shipping method name. */
	name: string,
	/** Shipping method description. */
	description?: GraphQLTypes["JSONString"],
	/** Type of the shipping method. */
	type?: GraphQLTypes["ShippingMethodTypeEnum"],
	/** Returns translated shipping method fields for the given language code. */
	translation?: GraphQLTypes["ShippingMethodTranslation"],
	/** List of channels available for the method. */
	channelListings?: Array<GraphQLTypes["ShippingMethodChannelListing"]>,
	/** The price of the cheapest variant (including discounts). */
	maximumOrderPrice?: GraphQLTypes["Money"],
	/** The price of the cheapest variant (including discounts). */
	minimumOrderPrice?: GraphQLTypes["Money"],
	/** Postal code ranges rule of exclusion or inclusion of the shipping method. */
	postalCodeRules?: Array<GraphQLTypes["ShippingMethodPostalCodeRule"] | undefined>,
	/** List of excluded products for the shipping method. */
	excludedProducts?: GraphQLTypes["ProductCountableConnection"],
	/** Minimum order weight to use this shipping method. */
	minimumOrderWeight?: GraphQLTypes["Weight"],
	/** Maximum order weight to use this shipping method. */
	maximumOrderWeight?: GraphQLTypes["Weight"],
	/** Maximum number of days for delivery. */
	maximumDeliveryDays?: number,
	/** Minimal number of days for delivery. */
	minimumDeliveryDays?: number
};
	/** An enumeration. */
["ShippingMethodTypeEnum"]: ShippingMethodTypeEnum;
	["ShippingPostalCodeRulesCreateInputRange"]: {
		/** Start range of the postal code. */
	start: string,
	/** End range of the postal code. */
	end?: string
};
	/** Deletes shipping prices. */
["ShippingPriceBulkDelete"]: {
	__typename: "ShippingPriceBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	shippingErrors: Array<GraphQLTypes["ShippingError"]>,
	errors: Array<GraphQLTypes["ShippingError"]>
};
	/** Creates a new shipping price. */
["ShippingPriceCreate"]: {
	__typename: "ShippingPriceCreate",
	/** A shipping zone to which the shipping method belongs. */
	shippingZone?: GraphQLTypes["ShippingZone"],
	shippingMethod?: GraphQLTypes["ShippingMethodType"],
	shippingErrors: Array<GraphQLTypes["ShippingError"]>,
	errors: Array<GraphQLTypes["ShippingError"]>
};
	/** Deletes a shipping price. */
["ShippingPriceDelete"]: {
	__typename: "ShippingPriceDelete",
	/** A shipping method to delete. */
	shippingMethod?: GraphQLTypes["ShippingMethodType"],
	/** A shipping zone to which the shipping method belongs. */
	shippingZone?: GraphQLTypes["ShippingZone"],
	shippingErrors: Array<GraphQLTypes["ShippingError"]>,
	errors: Array<GraphQLTypes["ShippingError"]>
};
	/** Exclude products from shipping price. */
["ShippingPriceExcludeProducts"]: {
	__typename: "ShippingPriceExcludeProducts",
	/** A shipping method with new list of excluded products. */
	shippingMethod?: GraphQLTypes["ShippingMethodType"],
	shippingErrors: Array<GraphQLTypes["ShippingError"]>,
	errors: Array<GraphQLTypes["ShippingError"]>
};
	["ShippingPriceExcludeProductsInput"]: {
		/** List of products which will be excluded. */
	products?: Array<string>
};
	["ShippingPriceInput"]: {
		/** Name of the shipping method. */
	name?: string,
	/** Shipping method description. */
	description?: GraphQLTypes["JSONString"],
	/** Minimum order weight to use this shipping method. */
	minimumOrderWeight?: GraphQLTypes["WeightScalar"],
	/** Maximum order weight to use this shipping method. */
	maximumOrderWeight?: GraphQLTypes["WeightScalar"],
	/** Maximum number of days for delivery. */
	maximumDeliveryDays?: number,
	/** Minimal number of days for delivery. */
	minimumDeliveryDays?: number,
	/** Shipping type: price or weight based. */
	type?: GraphQLTypes["ShippingMethodTypeEnum"],
	/** Shipping zone this method belongs to. */
	shippingZone?: string,
	/** Postal code rules to add. */
	addPostalCodeRules?: Array<GraphQLTypes["ShippingPostalCodeRulesCreateInputRange"]>,
	/** Postal code rules to delete. */
	deletePostalCodeRules?: Array<string>,
	/** Inclusion type for currently assigned postal code rules. */
	inclusionType?: GraphQLTypes["PostalCodeRuleInclusionTypeEnum"]
};
	/** Remove product from excluded list for shipping price. */
["ShippingPriceRemoveProductFromExclude"]: {
	__typename: "ShippingPriceRemoveProductFromExclude",
	/** A shipping method with new list of excluded products. */
	shippingMethod?: GraphQLTypes["ShippingMethodType"],
	shippingErrors: Array<GraphQLTypes["ShippingError"]>,
	errors: Array<GraphQLTypes["ShippingError"]>
};
	/** Creates/updates translations for a shipping method. */
["ShippingPriceTranslate"]: {
	__typename: "ShippingPriceTranslate",
	translationErrors: Array<GraphQLTypes["TranslationError"]>,
	errors: Array<GraphQLTypes["TranslationError"]>,
	shippingMethod?: GraphQLTypes["ShippingMethodType"]
};
	["ShippingPriceTranslationInput"]: {
		name?: string,
	/** Translated shipping method description (JSON). */
	description?: GraphQLTypes["JSONString"]
};
	/** Updates a new shipping price. */
["ShippingPriceUpdate"]: {
	__typename: "ShippingPriceUpdate",
	/** A shipping zone to which the shipping method belongs. */
	shippingZone?: GraphQLTypes["ShippingZone"],
	shippingMethod?: GraphQLTypes["ShippingMethodType"],
	shippingErrors: Array<GraphQLTypes["ShippingError"]>,
	errors: Array<GraphQLTypes["ShippingError"]>
};
	/** Represents a shipping zone in the shop. Zones are the concept used only for
grouping shipping methods in the dashboard, and are never exposed to the
customers directly. */
["ShippingZone"]: {
	__typename: "ShippingZone",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	name: string,
	default: boolean,
	/** Lowest and highest prices for the shipping. */
	priceRange?: GraphQLTypes["MoneyRange"],
	/** List of countries available for the method. */
	countries?: Array<GraphQLTypes["CountryDisplay"] | undefined>,
	/** List of shipping methods available for orders shipped to countries within this shipping zone. */
	shippingMethods?: Array<GraphQLTypes["ShippingMethodType"] | undefined>,
	/** List of warehouses for shipping zone. */
	warehouses: Array<GraphQLTypes["Warehouse"]>,
	/** List of channels for shipping zone. */
	channels: Array<GraphQLTypes["Channel"]>,
	/** Description of a shipping zone. */
	description?: string
};
	/** Deletes shipping zones. */
["ShippingZoneBulkDelete"]: {
	__typename: "ShippingZoneBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	shippingErrors: Array<GraphQLTypes["ShippingError"]>,
	errors: Array<GraphQLTypes["ShippingError"]>
};
	["ShippingZoneCountableConnection"]: {
	__typename: "ShippingZoneCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["ShippingZoneCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["ShippingZoneCountableEdge"]: {
	__typename: "ShippingZoneCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["ShippingZone"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates a new shipping zone. */
["ShippingZoneCreate"]: {
	__typename: "ShippingZoneCreate",
	shippingErrors: Array<GraphQLTypes["ShippingError"]>,
	errors: Array<GraphQLTypes["ShippingError"]>,
	shippingZone?: GraphQLTypes["ShippingZone"]
};
	["ShippingZoneCreateInput"]: {
		/** Shipping zone's name. Visible only to the staff. */
	name?: string,
	/** Description of the shipping zone. */
	description?: string,
	/** List of countries in this shipping zone. */
	countries?: Array<string | undefined>,
	/** Default shipping zone will be used for countries not covered by other zones. */
	default?: boolean,
	/** List of warehouses to assign to a shipping zone */
	addWarehouses?: Array<string | undefined>,
	/** List of channels to assign to the shipping zone. */
	addChannels?: Array<string>
};
	/** Deletes a shipping zone. */
["ShippingZoneDelete"]: {
	__typename: "ShippingZoneDelete",
	shippingErrors: Array<GraphQLTypes["ShippingError"]>,
	errors: Array<GraphQLTypes["ShippingError"]>,
	shippingZone?: GraphQLTypes["ShippingZone"]
};
	["ShippingZoneFilterInput"]: {
		search?: string,
	channels?: Array<string | undefined>
};
	/** Updates a new shipping zone. */
["ShippingZoneUpdate"]: {
	__typename: "ShippingZoneUpdate",
	shippingErrors: Array<GraphQLTypes["ShippingError"]>,
	errors: Array<GraphQLTypes["ShippingError"]>,
	shippingZone?: GraphQLTypes["ShippingZone"]
};
	["ShippingZoneUpdateInput"]: {
		/** Shipping zone's name. Visible only to the staff. */
	name?: string,
	/** Description of the shipping zone. */
	description?: string,
	/** List of countries in this shipping zone. */
	countries?: Array<string | undefined>,
	/** Default shipping zone will be used for countries not covered by other zones. */
	default?: boolean,
	/** List of warehouses to assign to a shipping zone */
	addWarehouses?: Array<string | undefined>,
	/** List of channels to assign to the shipping zone. */
	addChannels?: Array<string>,
	/** List of warehouses to unassign from a shipping zone */
	removeWarehouses?: Array<string | undefined>,
	/** List of channels to unassign from the shipping zone. */
	removeChannels?: Array<string>
};
	/** Represents a shop resource containing general shop data and configuration. */
["Shop"]: {
	__typename: "Shop",
	/** List of available payment gateways. */
	availablePaymentGateways: Array<GraphQLTypes["PaymentGateway"]>,
	/** List of available external authentications. */
	availableExternalAuthentications: Array<GraphQLTypes["ExternalAuthentication"]>,
	/** Shipping methods that are available for the shop. */
	availableShippingMethods?: Array<GraphQLTypes["ShippingMethod"] | undefined>,
	/** New in Saleor 3.1. List of all currencies supported by shop's channels. */
	channelCurrencies: Array<string>,
	/** List of countries available in the shop. */
	countries: Array<GraphQLTypes["CountryDisplay"]>,
	/** Shop's default country. */
	defaultCountry?: GraphQLTypes["CountryDisplay"],
	/** Default shop's email sender's name. */
	defaultMailSenderName?: string,
	/** Default shop's email sender's address. */
	defaultMailSenderAddress?: string,
	/** Shop's description. */
	description?: string,
	/** Shop's domain data. */
	domain: GraphQLTypes["Domain"],
	/** List of the shops's supported languages. */
	languages?: Array<GraphQLTypes["LanguageDisplay"]>,
	/** Shop's name. */
	name: string,
	/** List of available permissions. */
	permissions?: Array<GraphQLTypes["Permission"]>,
	/** List of possible phone prefixes. */
	phonePrefixes?: Array<string>,
	/** Header text. */
	headerText?: string,
	/** Include taxes in prices. */
	includeTaxesInPrices: boolean,
	/** New in Saleor 3.1. Automatically approve all new fulfillments. */
	fulfillmentAutoApprove: boolean,
	/** New in Saleor 3.1. Allow to approve fulfillments which are unpaid. */
	fulfillmentAllowUnpaid: boolean,
	/** Display prices with tax in store. */
	displayGrossPrices: boolean,
	/** Charge taxes on shipping. */
	chargeTaxesOnShipping: boolean,
	/** Enable inventory tracking. */
	trackInventoryByDefault?: boolean,
	/** Default weight unit. */
	defaultWeightUnit?: GraphQLTypes["WeightUnitsEnum"],
	/** Returns translated shop fields for the given language code. */
	translation?: GraphQLTypes["ShopTranslation"],
	/** Enable automatic fulfillment for all digital products. */
	automaticFulfillmentDigitalProducts?: boolean,
	/** New in Saleor 3.1. Default number of minutes stock will be reserved for
anonymous checkout or null when stock reservation is disabled. */
	reserveStockDurationAnonymousUser?: number,
	/** New in Saleor 3.1. Default number of minutes stock will be reserved for
authenticated checkout or null when stock reservation is disabled. */
	reserveStockDurationAuthenticatedUser?: number,
	/** New in Saleor 3.1. Default number of maximum line quantity in single checkout
(per single checkout line). Note: this feature is in a preview state and can
be subject to changes at later point. */
	limitQuantityPerCheckout?: number,
	/** Default number of max downloads per digital content URL. */
	defaultDigitalMaxDownloads?: number,
	/** Default number of days which digital content URL will be valid. */
	defaultDigitalUrlValidDays?: number,
	/** Company address. */
	companyAddress?: GraphQLTypes["Address"],
	/** URL of a view where customers can set their password. */
	customerSetPasswordUrl?: string,
	/** List of staff notification recipients. */
	staffNotificationRecipients?: Array<GraphQLTypes["StaffNotificationRecipient"] | undefined>,
	/** Resource limitations and current usage if any set for a shop */
	limits: GraphQLTypes["LimitInfo"],
	/** Saleor API version. */
	version: string
};
	/** Update the shop's address. If the `null` value is passed, the currently selected address will be deleted. */
["ShopAddressUpdate"]: {
	__typename: "ShopAddressUpdate",
	/** Updated shop. */
	shop?: GraphQLTypes["Shop"],
	shopErrors: Array<GraphQLTypes["ShopError"]>,
	errors: Array<GraphQLTypes["ShopError"]>
};
	/** Updates site domain of the shop. */
["ShopDomainUpdate"]: {
	__typename: "ShopDomainUpdate",
	/** Updated shop. */
	shop?: GraphQLTypes["Shop"],
	shopErrors: Array<GraphQLTypes["ShopError"]>,
	errors: Array<GraphQLTypes["ShopError"]>
};
	["ShopError"]: {
	__typename: "ShopError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["ShopErrorCode"]
};
	/** An enumeration. */
["ShopErrorCode"]: ShopErrorCode;
	/** Fetch tax rates. */
["ShopFetchTaxRates"]: {
	__typename: "ShopFetchTaxRates",
	/** Updated shop. */
	shop?: GraphQLTypes["Shop"],
	shopErrors: Array<GraphQLTypes["ShopError"]>,
	errors: Array<GraphQLTypes["ShopError"]>
};
	["ShopSettingsInput"]: {
		/** Header text. */
	headerText?: string,
	/** SEO description. */
	description?: string,
	/** Include taxes in prices. */
	includeTaxesInPrices?: boolean,
	/** Display prices with tax in store. */
	displayGrossPrices?: boolean,
	/** Charge taxes on shipping. */
	chargeTaxesOnShipping?: boolean,
	/** Enable inventory tracking. */
	trackInventoryByDefault?: boolean,
	/** Default weight unit. */
	defaultWeightUnit?: GraphQLTypes["WeightUnitsEnum"],
	/** Enable automatic fulfillment for all digital products. */
	automaticFulfillmentDigitalProducts?: boolean,
	/** New in Saleor 3.1. Enable automatic approval of all new fulfillments. */
	fulfillmentAutoApprove?: boolean,
	/** New in Saleor 3.1. Enable ability to approve fulfillments which are unpaid. */
	fulfillmentAllowUnpaid?: boolean,
	/** Default number of max downloads per digital content URL. */
	defaultDigitalMaxDownloads?: number,
	/** Default number of days which digital content URL will be valid. */
	defaultDigitalUrlValidDays?: number,
	/** Default email sender's name. */
	defaultMailSenderName?: string,
	/** Default email sender's address. */
	defaultMailSenderAddress?: string,
	/** URL of a view where customers can set their password. */
	customerSetPasswordUrl?: string,
	/** New in Saleor 3.1. Default number of minutes stock will be reserved for anonymous checkout. Enter 0 or null to disable. */
	reserveStockDurationAnonymousUser?: number,
	/** New in Saleor 3.1. Default number of minutes stock will be reserved for
authenticated checkout. Enter 0 or null to disable. */
	reserveStockDurationAuthenticatedUser?: number,
	/** New in Saleor 3.1. Default number of maximum line quantity in single checkout.
Minimum possible value is 1, default value is 50. Note: this feature is in a
preview state and can be subject to changes at later point. */
	limitQuantityPerCheckout?: number
};
	/** Creates/updates translations for shop settings. */
["ShopSettingsTranslate"]: {
	__typename: "ShopSettingsTranslate",
	/** Updated shop settings. */
	shop?: GraphQLTypes["Shop"],
	translationErrors: Array<GraphQLTypes["TranslationError"]>,
	errors: Array<GraphQLTypes["TranslationError"]>
};
	["ShopSettingsTranslationInput"]: {
		headerText?: string,
	description?: string
};
	/** Updates shop settings. */
["ShopSettingsUpdate"]: {
	__typename: "ShopSettingsUpdate",
	/** Updated shop. */
	shop?: GraphQLTypes["Shop"],
	shopErrors: Array<GraphQLTypes["ShopError"]>,
	errors: Array<GraphQLTypes["ShopError"]>
};
	["ShopTranslation"]: {
	__typename: "ShopTranslation",
	id: string,
	/** Translation language. */
	language: GraphQLTypes["LanguageDisplay"],
	headerText: string,
	description: string
};
	["SiteDomainInput"]: {
		/** Domain name for shop. */
	domain?: string,
	/** Shop site name. */
	name?: string
};
	/** Deletes staff users. */
["StaffBulkDelete"]: {
	__typename: "StaffBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	staffErrors: Array<GraphQLTypes["StaffError"]>,
	errors: Array<GraphQLTypes["StaffError"]>
};
	/** Creates a new staff user. */
["StaffCreate"]: {
	__typename: "StaffCreate",
	staffErrors: Array<GraphQLTypes["StaffError"]>,
	errors: Array<GraphQLTypes["StaffError"]>,
	user?: GraphQLTypes["User"]
};
	["StaffCreateInput"]: {
		/** Given name. */
	firstName?: string,
	/** Family name. */
	lastName?: string,
	/** The unique email address of the user. */
	email?: string,
	/** User account is active. */
	isActive?: boolean,
	/** A note about the user. */
	note?: string,
	/** List of permission group IDs to which user should be assigned. */
	addGroups?: Array<string>,
	/** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
	redirectUrl?: string
};
	/** Deletes a staff user. */
["StaffDelete"]: {
	__typename: "StaffDelete",
	staffErrors: Array<GraphQLTypes["StaffError"]>,
	errors: Array<GraphQLTypes["StaffError"]>,
	user?: GraphQLTypes["User"]
};
	["StaffError"]: {
	__typename: "StaffError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["AccountErrorCode"],
	/** A type of address that causes the error. */
	addressType?: GraphQLTypes["AddressTypeEnum"],
	/** List of permissions which causes the error. */
	permissions?: Array<GraphQLTypes["PermissionEnum"]>,
	/** List of permission group IDs which cause the error. */
	groups?: Array<string>,
	/** List of user IDs which causes the error. */
	users?: Array<string>
};
	["StaffMemberStatus"]: StaffMemberStatus;
	/** Represents a recipient of email notifications send by Saleor, such as
notifications about new orders. Notifications can be assigned to staff users or
arbitrary email addresses. */
["StaffNotificationRecipient"]: {
	__typename: "StaffNotificationRecipient",
	id: string,
	/** Returns a user subscribed to email notifications. */
	user?: GraphQLTypes["User"],
	/** Returns email address of a user subscribed to email notifications. */
	email?: string,
	/** Determines if a notification active. */
	active?: boolean
};
	/** Creates a new staff notification recipient. */
["StaffNotificationRecipientCreate"]: {
	__typename: "StaffNotificationRecipientCreate",
	shopErrors: Array<GraphQLTypes["ShopError"]>,
	errors: Array<GraphQLTypes["ShopError"]>,
	staffNotificationRecipient?: GraphQLTypes["StaffNotificationRecipient"]
};
	/** Delete staff notification recipient. */
["StaffNotificationRecipientDelete"]: {
	__typename: "StaffNotificationRecipientDelete",
	shopErrors: Array<GraphQLTypes["ShopError"]>,
	errors: Array<GraphQLTypes["ShopError"]>,
	staffNotificationRecipient?: GraphQLTypes["StaffNotificationRecipient"]
};
	["StaffNotificationRecipientInput"]: {
		/** The ID of the user subscribed to email notifications.. */
	user?: string,
	/** Email address of a user subscribed to email notifications. */
	email?: string,
	/** Determines if a notification active. */
	active?: boolean
};
	/** Updates a staff notification recipient. */
["StaffNotificationRecipientUpdate"]: {
	__typename: "StaffNotificationRecipientUpdate",
	shopErrors: Array<GraphQLTypes["ShopError"]>,
	errors: Array<GraphQLTypes["ShopError"]>,
	staffNotificationRecipient?: GraphQLTypes["StaffNotificationRecipient"]
};
	/** Updates an existing staff user. */
["StaffUpdate"]: {
	__typename: "StaffUpdate",
	staffErrors: Array<GraphQLTypes["StaffError"]>,
	errors: Array<GraphQLTypes["StaffError"]>,
	user?: GraphQLTypes["User"]
};
	["StaffUpdateInput"]: {
		/** Given name. */
	firstName?: string,
	/** Family name. */
	lastName?: string,
	/** The unique email address of the user. */
	email?: string,
	/** User account is active. */
	isActive?: boolean,
	/** A note about the user. */
	note?: string,
	/** List of permission group IDs to which user should be assigned. */
	addGroups?: Array<string>,
	/** List of permission group IDs from which user should be unassigned. */
	removeGroups?: Array<string>
};
	["StaffUserInput"]: {
		status?: GraphQLTypes["StaffMemberStatus"],
	search?: string,
	ids?: Array<string | undefined>
};
	/** Represents stock. */
["Stock"]: {
	__typename: "Stock",
	id: string,
	warehouse: GraphQLTypes["Warehouse"],
	productVariant: GraphQLTypes["ProductVariant"],
	/** Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment. */
	quantity: number,
	/** Quantity allocated for orders */
	quantityAllocated: number,
	/** Quantity reserved for checkouts */
	quantityReserved: number
};
	["StockAvailability"]: StockAvailability;
	["StockCountableConnection"]: {
	__typename: "StockCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["StockCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["StockCountableEdge"]: {
	__typename: "StockCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["Stock"],
	/** A cursor for use in pagination. */
	cursor: string
};
	["StockError"]: {
	__typename: "StockError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["StockErrorCode"]
};
	/** An enumeration. */
["StockErrorCode"]: StockErrorCode;
	["StockFilterInput"]: {
		quantity?: number,
	search?: string
};
	["StockInput"]: {
		/** Warehouse in which stock is located. */
	warehouse: string,
	/** Quantity of items available for sell. */
	quantity: number
};
	/** Enum representing the type of a payment storage in a gateway. */
["StorePaymentMethodEnum"]: StorePaymentMethodEnum;
	/** Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal. */
["TaxedMoney"]: {
	__typename: "TaxedMoney",
	/** Currency code. */
	currency: string,
	/** Amount of money including taxes. */
	gross: GraphQLTypes["Money"],
	/** Amount of money without taxes. */
	net: GraphQLTypes["Money"],
	/** Amount of taxes. */
	tax: GraphQLTypes["Money"]
};
	/** Represents a range of monetary values. */
["TaxedMoneyRange"]: {
	__typename: "TaxedMoneyRange",
	/** Lower bound of a price range. */
	start?: GraphQLTypes["TaxedMoney"],
	/** Upper bound of a price range. */
	stop?: GraphQLTypes["TaxedMoney"]
};
	/** Representation of tax types fetched from tax gateway. */
["TaxType"]: {
	__typename: "TaxType",
	/** Description of the tax type. */
	description?: string,
	/** External tax code used to identify given tax group. */
	taxCode?: string
};
	["TimePeriod"]: {
	__typename: "TimePeriod",
	/** The length of the period. */
	amount: number,
	/** The type of the period. */
	type: GraphQLTypes["TimePeriodTypeEnum"]
};
	["TimePeriodInputType"]: {
		/** The length of the period. */
	amount: number,
	/** The type of the period. */
	type: GraphQLTypes["TimePeriodTypeEnum"]
};
	/** An enumeration. */
["TimePeriodTypeEnum"]: TimePeriodTypeEnum;
	/** An object representing a single payment. */
["Transaction"]: {
	__typename: "Transaction",
	id: string,
	created: GraphQLTypes["DateTime"],
	payment: GraphQLTypes["Payment"],
	token: string,
	kind: GraphQLTypes["TransactionKind"],
	isSuccess: boolean,
	error?: string,
	gatewayResponse: GraphQLTypes["JSONString"],
	/** Total amount of the transaction. */
	amount?: GraphQLTypes["Money"]
};
	["TransactionInput"]: {
		/** Current status of the payment transaction. */
	status: GraphQLTypes["TransactionStatus"],
	/** Reference of the transaction. */
	reference?: string,
	/** Name of the transaction. */
	name?: string
};
	/** An enumeration. */
["TransactionKind"]: TransactionKind;
	/** An enumeration. */
["TransactionStatus"]: TransactionStatus;
	["TranslatableItem"]:{
	__typename:"ProductTranslatableContent" | "CollectionTranslatableContent" | "CategoryTranslatableContent" | "AttributeTranslatableContent" | "AttributeValueTranslatableContent" | "ProductVariantTranslatableContent" | "PageTranslatableContent" | "ShippingMethodTranslatableContent" | "SaleTranslatableContent" | "VoucherTranslatableContent" | "MenuItemTranslatableContent"
	['...on ProductTranslatableContent']: '__union' & GraphQLTypes["ProductTranslatableContent"];
	['...on CollectionTranslatableContent']: '__union' & GraphQLTypes["CollectionTranslatableContent"];
	['...on CategoryTranslatableContent']: '__union' & GraphQLTypes["CategoryTranslatableContent"];
	['...on AttributeTranslatableContent']: '__union' & GraphQLTypes["AttributeTranslatableContent"];
	['...on AttributeValueTranslatableContent']: '__union' & GraphQLTypes["AttributeValueTranslatableContent"];
	['...on ProductVariantTranslatableContent']: '__union' & GraphQLTypes["ProductVariantTranslatableContent"];
	['...on PageTranslatableContent']: '__union' & GraphQLTypes["PageTranslatableContent"];
	['...on ShippingMethodTranslatableContent']: '__union' & GraphQLTypes["ShippingMethodTranslatableContent"];
	['...on SaleTranslatableContent']: '__union' & GraphQLTypes["SaleTranslatableContent"];
	['...on VoucherTranslatableContent']: '__union' & GraphQLTypes["VoucherTranslatableContent"];
	['...on MenuItemTranslatableContent']: '__union' & GraphQLTypes["MenuItemTranslatableContent"];
};
	["TranslatableItemConnection"]: {
	__typename: "TranslatableItemConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["TranslatableItemEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["TranslatableItemEdge"]: {
	__typename: "TranslatableItemEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["TranslatableItem"],
	/** A cursor for use in pagination. */
	cursor: string
};
	["TranslatableKinds"]: TranslatableKinds;
	["TranslationError"]: {
	__typename: "TranslationError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["TranslationErrorCode"]
};
	/** An enumeration. */
["TranslationErrorCode"]: TranslationErrorCode;
	["TranslationInput"]: {
		seoTitle?: string,
	seoDescription?: string,
	name?: string,
	description?: GraphQLTypes["JSONString"]
};
	["UpdateInvoiceInput"]: {
		/** Invoice number */
	number?: string,
	/** URL of an invoice to download. */
	url?: string
};
	/** Updates metadata of an object. */
["UpdateMetadata"]: {
	__typename: "UpdateMetadata",
	metadataErrors: Array<GraphQLTypes["MetadataError"]>,
	errors: Array<GraphQLTypes["MetadataError"]>,
	item?: GraphQLTypes["ObjectWithMetadata"]
};
	/** Updates private metadata of an object. */
["UpdatePrivateMetadata"]: {
	__typename: "UpdatePrivateMetadata",
	metadataErrors: Array<GraphQLTypes["MetadataError"]>,
	errors: Array<GraphQLTypes["MetadataError"]>,
	item?: GraphQLTypes["ObjectWithMetadata"]
};
	/** Variables of this type must be set to null in mutations. They will be replaced
with a filename from a following multipart part containing a binary file. See:
https://github.com/jaydenseric/graphql-multipart-request-spec. */
["Upload"]:any;
	["UploadError"]: {
	__typename: "UploadError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["UploadErrorCode"]
};
	/** An enumeration. */
["UploadErrorCode"]: UploadErrorCode;
	/** Represents user data. */
["User"]: {
	__typename: "User",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	email: string,
	firstName: string,
	lastName: string,
	isStaff: boolean,
	isActive: boolean,
	/** List of all user's addresses. */
	addresses?: Array<GraphQLTypes["Address"] | undefined>,
	/** Returns the last open checkout of this user. */
	checkout?: GraphQLTypes["Checkout"],
	/** Returns the checkout UUID's assigned to this user. */
	checkoutTokens?: Array<GraphQLTypes["UUID"]>,
	/** List of the user gift cards. */
	giftCards?: GraphQLTypes["GiftCardCountableConnection"],
	/** A note about the customer. */
	note?: string,
	/** List of user's orders. */
	orders?: GraphQLTypes["OrderCountableConnection"],
	/** List of user's permissions. */
	userPermissions?: Array<GraphQLTypes["UserPermission"] | undefined>,
	/** List of user's permission groups. */
	permissionGroups?: Array<GraphQLTypes["Group"] | undefined>,
	/** List of user's permission groups which user can manage. */
	editableGroups?: Array<GraphQLTypes["Group"] | undefined>,
	avatar?: GraphQLTypes["Image"],
	/** List of events associated with the user. */
	events?: Array<GraphQLTypes["CustomerEvent"] | undefined>,
	/** List of stored payment sources. */
	storedPaymentSources?: Array<GraphQLTypes["PaymentSource"] | undefined>,
	/** User language code. */
	languageCode: GraphQLTypes["LanguageCodeEnum"],
	defaultShippingAddress?: GraphQLTypes["Address"],
	defaultBillingAddress?: GraphQLTypes["Address"],
	lastLogin?: GraphQLTypes["DateTime"],
	dateJoined: GraphQLTypes["DateTime"],
	updatedAt: GraphQLTypes["DateTime"]
};
	/** Deletes a user avatar. Only for staff members. */
["UserAvatarDelete"]: {
	__typename: "UserAvatarDelete",
	/** An updated user instance. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** Create a user avatar. Only for staff members. This mutation must be sent as a
`multipart` request. More detailed specs of the upload format can be found here:
https://github.com/jaydenseric/graphql-multipart-request-spec */
["UserAvatarUpdate"]: {
	__typename: "UserAvatarUpdate",
	/** An updated user instance. */
	user?: GraphQLTypes["User"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** Activate or deactivate users. */
["UserBulkSetActive"]: {
	__typename: "UserBulkSetActive",
	/** Returns how many objects were affected. */
	count: number,
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	["UserCountableConnection"]: {
	__typename: "UserCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["UserCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["UserCountableEdge"]: {
	__typename: "UserCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["User"],
	/** A cursor for use in pagination. */
	cursor: string
};
	["UserCreateInput"]: {
		/** Billing address of the customer. */
	defaultBillingAddress?: GraphQLTypes["AddressInput"],
	/** Shipping address of the customer. */
	defaultShippingAddress?: GraphQLTypes["AddressInput"],
	/** Given name. */
	firstName?: string,
	/** Family name. */
	lastName?: string,
	/** The unique email address of the user. */
	email?: string,
	/** User account is active. */
	isActive?: boolean,
	/** A note about the user. */
	note?: string,
	/** User language code. */
	languageCode?: GraphQLTypes["LanguageCodeEnum"],
	/** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
	redirectUrl?: string,
	/** Slug of a channel which will be used for notify user. Optional when only one channel exists. */
	channel?: string
};
	["UserPermission"]: {
	__typename: "UserPermission",
	/** Internal code for permission. */
	code: GraphQLTypes["PermissionEnum"],
	/** Describe action(s) allowed to do by permission. */
	name: string,
	/** List of user permission groups which contains this permission. */
	sourcePermissionGroups?: Array<GraphQLTypes["Group"]>
};
	["UserSortField"]: UserSortField;
	["UserSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort users by the selected field. */
	field: GraphQLTypes["UserSortField"]
};
	["UUID"]:any;
	["VariantAttributeScope"]: VariantAttributeScope;
	/** Assign an media to a product variant. */
["VariantMediaAssign"]: {
	__typename: "VariantMediaAssign",
	productVariant?: GraphQLTypes["ProductVariant"],
	media?: GraphQLTypes["ProductMedia"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	/** Unassign an media from a product variant. */
["VariantMediaUnassign"]: {
	__typename: "VariantMediaUnassign",
	productVariant?: GraphQLTypes["ProductVariant"],
	media?: GraphQLTypes["ProductMedia"],
	productErrors: Array<GraphQLTypes["ProductError"]>,
	errors: Array<GraphQLTypes["ProductError"]>
};
	/** Represents availability of a variant in the storefront. */
["VariantPricingInfo"]: {
	__typename: "VariantPricingInfo",
	/** Whether it is in sale or not. */
	onSale?: boolean,
	/** The discount amount if in sale (null otherwise). */
	discount?: GraphQLTypes["TaxedMoney"],
	/** The discount amount in the local currency. */
	discountLocalCurrency?: GraphQLTypes["TaxedMoney"],
	/** The price, with any discount subtracted. */
	price?: GraphQLTypes["TaxedMoney"],
	/** The price without any discount. */
	priceUndiscounted?: GraphQLTypes["TaxedMoney"],
	/** The discounted price in the local currency. */
	priceLocalCurrency?: GraphQLTypes["TaxedMoney"]
};
	/** Represents a VAT rate for a country. */
["VAT"]: {
	__typename: "VAT",
	/** Country code. */
	countryCode: string,
	/** Standard VAT rate in percent. */
	standardRate?: number,
	/** Country's VAT rate exceptions for specific types of goods. */
	reducedRates?: Array<GraphQLTypes["ReducedRate"]>
};
	/** Verify JWT token. */
["VerifyToken"]: {
	__typename: "VerifyToken",
	/** User assigned to token. */
	user?: GraphQLTypes["User"],
	/** Determine if token is valid or not. */
	isValid: boolean,
	/** JWT payload. */
	payload?: GraphQLTypes["GenericScalar"],
	accountErrors: Array<GraphQLTypes["AccountError"]>,
	errors: Array<GraphQLTypes["AccountError"]>
};
	/** An enumeration. */
["VolumeUnitsEnum"]: VolumeUnitsEnum;
	/** Vouchers allow giving discounts to particular customers on categories,
collections or specific products. They can be used during checkout by providing
valid voucher codes. */
["Voucher"]: {
	__typename: "Voucher",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	name?: string,
	code: string,
	usageLimit?: number,
	used: number,
	startDate: GraphQLTypes["DateTime"],
	endDate?: GraphQLTypes["DateTime"],
	applyOncePerOrder: boolean,
	applyOncePerCustomer: boolean,
	onlyForStaff: boolean,
	minCheckoutItemsQuantity?: number,
	/** List of categories this voucher applies to. */
	categories?: GraphQLTypes["CategoryCountableConnection"],
	/** List of collections this voucher applies to. */
	collections?: GraphQLTypes["CollectionCountableConnection"],
	/** List of products this voucher applies to. */
	products?: GraphQLTypes["ProductCountableConnection"],
	/** New in Saleor 3.1. List of product variants this voucher applies to. */
	variants?: GraphQLTypes["ProductVariantCountableConnection"],
	/** List of countries available for the shipping voucher. */
	countries?: Array<GraphQLTypes["CountryDisplay"] | undefined>,
	/** Returns translated voucher fields for the given language code. */
	translation?: GraphQLTypes["VoucherTranslation"],
	/** Determines a type of discount for voucher - value or percentage */
	discountValueType: GraphQLTypes["DiscountValueTypeEnum"],
	/** Voucher value. */
	discountValue?: number,
	/** Currency code for voucher. */
	currency?: string,
	/** Minimum order value to apply voucher. */
	minSpent?: GraphQLTypes["Money"],
	/** Determines a type of voucher. */
	type: GraphQLTypes["VoucherTypeEnum"],
	/** List of availability in channels for the voucher. */
	channelListings?: Array<GraphQLTypes["VoucherChannelListing"]>
};
	/** Adds products, categories, collections to a voucher. */
["VoucherAddCatalogues"]: {
	__typename: "VoucherAddCatalogues",
	/** Voucher of which catalogue IDs will be modified. */
	voucher?: GraphQLTypes["Voucher"],
	discountErrors: Array<GraphQLTypes["DiscountError"]>,
	errors: Array<GraphQLTypes["DiscountError"]>
};
	/** Deletes vouchers. */
["VoucherBulkDelete"]: {
	__typename: "VoucherBulkDelete",
	/** Returns how many objects were affected. */
	count: number,
	discountErrors: Array<GraphQLTypes["DiscountError"]>,
	errors: Array<GraphQLTypes["DiscountError"]>
};
	/** Represents voucher channel listing. */
["VoucherChannelListing"]: {
	__typename: "VoucherChannelListing",
	id: string,
	channel: GraphQLTypes["Channel"],
	discountValue: number,
	currency: string,
	minSpent?: GraphQLTypes["Money"]
};
	["VoucherChannelListingAddInput"]: {
		/** ID of a channel. */
	channelId: string,
	/** Value of the voucher. */
	discountValue?: GraphQLTypes["PositiveDecimal"],
	/** Min purchase amount required to apply the voucher. */
	minAmountSpent?: GraphQLTypes["PositiveDecimal"]
};
	["VoucherChannelListingInput"]: {
		/** List of channels to which the voucher should be assigned. */
	addChannels?: Array<GraphQLTypes["VoucherChannelListingAddInput"]>,
	/** List of channels from which the voucher should be unassigned. */
	removeChannels?: Array<string>
};
	/** Manage voucher's availability in channels. */
["VoucherChannelListingUpdate"]: {
	__typename: "VoucherChannelListingUpdate",
	/** An updated voucher instance. */
	voucher?: GraphQLTypes["Voucher"],
	discountErrors: Array<GraphQLTypes["DiscountError"]>,
	errors: Array<GraphQLTypes["DiscountError"]>
};
	["VoucherCountableConnection"]: {
	__typename: "VoucherCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["VoucherCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["VoucherCountableEdge"]: {
	__typename: "VoucherCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["Voucher"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates a new voucher. */
["VoucherCreate"]: {
	__typename: "VoucherCreate",
	discountErrors: Array<GraphQLTypes["DiscountError"]>,
	errors: Array<GraphQLTypes["DiscountError"]>,
	voucher?: GraphQLTypes["Voucher"]
};
	/** Deletes a voucher. */
["VoucherDelete"]: {
	__typename: "VoucherDelete",
	discountErrors: Array<GraphQLTypes["DiscountError"]>,
	errors: Array<GraphQLTypes["DiscountError"]>,
	voucher?: GraphQLTypes["Voucher"]
};
	["VoucherDiscountType"]: VoucherDiscountType;
	["VoucherFilterInput"]: {
		status?: Array<GraphQLTypes["DiscountStatusEnum"] | undefined>,
	timesUsed?: GraphQLTypes["IntRangeInput"],
	discountType?: Array<GraphQLTypes["VoucherDiscountType"] | undefined>,
	started?: GraphQLTypes["DateTimeRangeInput"],
	search?: string,
	metadata?: Array<GraphQLTypes["MetadataFilter"] | undefined>
};
	["VoucherInput"]: {
		/** Voucher type: PRODUCT, CATEGORY SHIPPING or ENTIRE_ORDER. */
	type?: GraphQLTypes["VoucherTypeEnum"],
	/** Voucher name. */
	name?: string,
	/** Code to use the voucher. */
	code?: string,
	/** Start date of the voucher in ISO 8601 format. */
	startDate?: GraphQLTypes["DateTime"],
	/** End date of the voucher in ISO 8601 format. */
	endDate?: GraphQLTypes["DateTime"],
	/** Choices: fixed or percentage. */
	discountValueType?: GraphQLTypes["DiscountValueTypeEnum"],
	/** Products discounted by the voucher. */
	products?: Array<string | undefined>,
	/** New in Saleor 3.1. Variants discounted by the voucher. */
	variants?: Array<string | undefined>,
	/** Collections discounted by the voucher. */
	collections?: Array<string | undefined>,
	/** Categories discounted by the voucher. */
	categories?: Array<string | undefined>,
	/** Minimal quantity of checkout items required to apply the voucher. */
	minCheckoutItemsQuantity?: number,
	/** Country codes that can be used with the shipping voucher. */
	countries?: Array<string | undefined>,
	/** Voucher should be applied to the cheapest item or entire order. */
	applyOncePerOrder?: boolean,
	/** Voucher should be applied once per customer. */
	applyOncePerCustomer?: boolean,
	/** Voucher can be used only by staff user. */
	onlyForStaff?: boolean,
	/** Limit number of times this voucher can be used in total. */
	usageLimit?: number
};
	/** Removes products, categories, collections from a voucher. */
["VoucherRemoveCatalogues"]: {
	__typename: "VoucherRemoveCatalogues",
	/** Voucher of which catalogue IDs will be modified. */
	voucher?: GraphQLTypes["Voucher"],
	discountErrors: Array<GraphQLTypes["DiscountError"]>,
	errors: Array<GraphQLTypes["DiscountError"]>
};
	["VoucherSortField"]: VoucherSortField;
	["VoucherSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Specifies the channel in which to sort the data. 

DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead. */
	channel?: string,
	/** Sort vouchers by the selected field. */
	field: GraphQLTypes["VoucherSortField"]
};
	["VoucherTranslatableContent"]: {
	__typename: "VoucherTranslatableContent",
	id: string,
	name?: string,
	/** Returns translated voucher fields for the given language code. */
	translation?: GraphQLTypes["VoucherTranslation"],
	/** Vouchers allow giving discounts to particular customers on categories,
collections or specific products. They can be used during checkout by
providing valid voucher codes. */
	voucher?: GraphQLTypes["Voucher"]
};
	/** Creates/updates translations for a voucher. */
["VoucherTranslate"]: {
	__typename: "VoucherTranslate",
	translationErrors: Array<GraphQLTypes["TranslationError"]>,
	errors: Array<GraphQLTypes["TranslationError"]>,
	voucher?: GraphQLTypes["Voucher"]
};
	["VoucherTranslation"]: {
	__typename: "VoucherTranslation",
	id: string,
	/** Translation language. */
	language: GraphQLTypes["LanguageDisplay"],
	name?: string
};
	["VoucherTypeEnum"]: VoucherTypeEnum;
	/** Updates a voucher. */
["VoucherUpdate"]: {
	__typename: "VoucherUpdate",
	discountErrors: Array<GraphQLTypes["DiscountError"]>,
	errors: Array<GraphQLTypes["DiscountError"]>,
	voucher?: GraphQLTypes["Voucher"]
};
	/** Represents warehouse. */
["Warehouse"]: {
	__typename: "Warehouse",
	id: string,
	/** List of private metadata items.Requires proper staff permissions to access. */
	privateMetadata?: Array<GraphQLTypes["MetadataItem"]>,
	/** List of public metadata items. Can be accessed without permissions. */
	metadata?: Array<GraphQLTypes["MetadataItem"]>,
	name: string,
	slug: string,
	email: string,
	isPrivate: boolean,
	address: GraphQLTypes["Address"],
	/** Warehouse company name. */
	companyName: string,
	/** New in Saleor 3.1. Click and collect options: local, all or disabled. Note:
this feature is in a preview state and can be subject to changes at later point. */
	clickAndCollectOption: GraphQLTypes["WarehouseClickAndCollectOptionEnum"],
	shippingZones: GraphQLTypes["ShippingZoneCountableConnection"]
};
	/** An enumeration. */
["WarehouseClickAndCollectOptionEnum"]: WarehouseClickAndCollectOptionEnum;
	["WarehouseCountableConnection"]: {
	__typename: "WarehouseCountableConnection",
	/** Pagination data for this connection. */
	pageInfo: GraphQLTypes["PageInfo"],
	edges: Array<GraphQLTypes["WarehouseCountableEdge"]>,
	/** A total count of items in the collection. */
	totalCount?: number
};
	["WarehouseCountableEdge"]: {
	__typename: "WarehouseCountableEdge",
	/** The item at the end of the edge. */
	node: GraphQLTypes["Warehouse"],
	/** A cursor for use in pagination. */
	cursor: string
};
	/** Creates new warehouse. */
["WarehouseCreate"]: {
	__typename: "WarehouseCreate",
	warehouseErrors: Array<GraphQLTypes["WarehouseError"]>,
	errors: Array<GraphQLTypes["WarehouseError"]>,
	warehouse?: GraphQLTypes["Warehouse"]
};
	["WarehouseCreateInput"]: {
		/** Warehouse slug. */
	slug?: string,
	/** The email address of the warehouse. */
	email?: string,
	/** Warehouse name. */
	name: string,
	/** Address of the warehouse. */
	address: GraphQLTypes["AddressInput"],
	/** Shipping zones supported by the warehouse. */
	shippingZones?: Array<string | undefined>
};
	/** Deletes selected warehouse. */
["WarehouseDelete"]: {
	__typename: "WarehouseDelete",
	warehouseErrors: Array<GraphQLTypes["WarehouseError"]>,
	errors: Array<GraphQLTypes["WarehouseError"]>,
	warehouse?: GraphQLTypes["Warehouse"]
};
	["WarehouseError"]: {
	__typename: "WarehouseError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["WarehouseErrorCode"]
};
	/** An enumeration. */
["WarehouseErrorCode"]: WarehouseErrorCode;
	["WarehouseFilterInput"]: {
		clickAndCollectOption?: GraphQLTypes["WarehouseClickAndCollectOptionEnum"],
	search?: string,
	ids?: Array<string | undefined>,
	isPrivate?: boolean
};
	/** Add shipping zone to given warehouse. */
["WarehouseShippingZoneAssign"]: {
	__typename: "WarehouseShippingZoneAssign",
	warehouseErrors: Array<GraphQLTypes["WarehouseError"]>,
	errors: Array<GraphQLTypes["WarehouseError"]>,
	warehouse?: GraphQLTypes["Warehouse"]
};
	/** Remove shipping zone from given warehouse. */
["WarehouseShippingZoneUnassign"]: {
	__typename: "WarehouseShippingZoneUnassign",
	warehouseErrors: Array<GraphQLTypes["WarehouseError"]>,
	errors: Array<GraphQLTypes["WarehouseError"]>,
	warehouse?: GraphQLTypes["Warehouse"]
};
	["WarehouseSortField"]: WarehouseSortField;
	["WarehouseSortingInput"]: {
		/** Specifies the direction in which to sort products. */
	direction: GraphQLTypes["OrderDirection"],
	/** Sort warehouses by the selected field. */
	field: GraphQLTypes["WarehouseSortField"]
};
	/** Updates given warehouse. */
["WarehouseUpdate"]: {
	__typename: "WarehouseUpdate",
	warehouseErrors: Array<GraphQLTypes["WarehouseError"]>,
	errors: Array<GraphQLTypes["WarehouseError"]>,
	warehouse?: GraphQLTypes["Warehouse"]
};
	["WarehouseUpdateInput"]: {
		/** Warehouse slug. */
	slug?: string,
	/** The email address of the warehouse. */
	email?: string,
	/** Warehouse name. */
	name?: string,
	/** Address of the warehouse. */
	address?: GraphQLTypes["AddressInput"],
	/** New in Saleor 3.1. Click and collect options: local, all or disabled. Note:
this feature is in a preview state and can be subject to changes at later point. */
	clickAndCollectOption?: GraphQLTypes["WarehouseClickAndCollectOptionEnum"],
	/** New in Saleor 3.1. Visibility of warehouse stocks. Note: this feature is in a
preview state and can be subject to changes at later point. */
	isPrivate?: boolean
};
	/** Webhook. */
["Webhook"]: {
	__typename: "Webhook",
	id: string,
	name: string,
	/** List of webhook events. */
	events: Array<GraphQLTypes["WebhookEvent"]>,
	/** List of synchronous webhook events. */
	syncEvents: Array<GraphQLTypes["WebhookEventSync"]>,
	/** List of asynchronous webhook events. */
	asyncEvents: Array<GraphQLTypes["WebhookEventAsync"]>,
	app: GraphQLTypes["App"],
	/** Event deliveries. */
	eventDeliveries?: GraphQLTypes["EventDeliveryCountableConnection"],
	targetUrl: string,
	isActive: boolean,
	secretKey?: string
};
	/** Creates a new webhook subscription. */
["WebhookCreate"]: {
	__typename: "WebhookCreate",
	webhookErrors: Array<GraphQLTypes["WebhookError"]>,
	errors: Array<GraphQLTypes["WebhookError"]>,
	webhook?: GraphQLTypes["Webhook"]
};
	["WebhookCreateInput"]: {
		/** The name of the webhook. */
	name?: string,
	/** The url to receive the payload. */
	targetUrl?: string,
	/** The events that webhook wants to subscribe. 

DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead. */
	events?: Array<GraphQLTypes["WebhookEventTypeEnum"] | undefined>,
	/** The asynchronous events that webhook wants to subscribe. */
	asyncEvents?: Array<GraphQLTypes["WebhookEventTypeAsyncEnum"]>,
	/** The synchronous events that webhook wants to subscribe. */
	syncEvents?: Array<GraphQLTypes["WebhookEventTypeSyncEnum"]>,
	/** ID of the app to which webhook belongs. */
	app?: string,
	/** Determine if webhook will be set active or not. */
	isActive?: boolean,
	/** The secret key used to create a hash signature with each payload. */
	secretKey?: string
};
	/** Deletes a webhook subscription. */
["WebhookDelete"]: {
	__typename: "WebhookDelete",
	webhookErrors: Array<GraphQLTypes["WebhookError"]>,
	errors: Array<GraphQLTypes["WebhookError"]>,
	webhook?: GraphQLTypes["Webhook"]
};
	["WebhookError"]: {
	__typename: "WebhookError",
	/** Name of a field that caused the error. A value of `null` indicates that the
error isn't associated with a particular field. */
	field?: string,
	/** The error message. */
	message?: string,
	/** The error code. */
	code: GraphQLTypes["WebhookErrorCode"]
};
	/** An enumeration. */
["WebhookErrorCode"]: WebhookErrorCode;
	/** Webhook event. */
["WebhookEvent"]: {
	__typename: "WebhookEvent",
	/** Display name of the event. */
	name: string,
	/** Internal name of the event type. */
	eventType: GraphQLTypes["WebhookEventTypeEnum"]
};
	/** Asynchronous webhook event. */
["WebhookEventAsync"]: {
	__typename: "WebhookEventAsync",
	/** Display name of the event. */
	name: string,
	/** Internal name of the event type. */
	eventType: GraphQLTypes["WebhookEventTypeAsyncEnum"]
};
	/** Synchronous webhook event. */
["WebhookEventSync"]: {
	__typename: "WebhookEventSync",
	/** Display name of the event. */
	name: string,
	/** Internal name of the event type. */
	eventType: GraphQLTypes["WebhookEventTypeSyncEnum"]
};
	/** Enum determining type of webhook. */
["WebhookEventTypeAsyncEnum"]: WebhookEventTypeAsyncEnum;
	/** Enum determining type of webhook. */
["WebhookEventTypeEnum"]: WebhookEventTypeEnum;
	/** Enum determining type of webhook. */
["WebhookEventTypeSyncEnum"]: WebhookEventTypeSyncEnum;
	/** An enumeration. */
["WebhookSampleEventTypeEnum"]: WebhookSampleEventTypeEnum;
	/** Updates a webhook subscription. */
["WebhookUpdate"]: {
	__typename: "WebhookUpdate",
	webhookErrors: Array<GraphQLTypes["WebhookError"]>,
	errors: Array<GraphQLTypes["WebhookError"]>,
	webhook?: GraphQLTypes["Webhook"]
};
	["WebhookUpdateInput"]: {
		/** The new name of the webhook. */
	name?: string,
	/** The url to receive the payload. */
	targetUrl?: string,
	/** The events that webhook wants to subscribe. 

DEPRECATED: this field will be removed in Saleor 4.0. Use `asyncEvents` or `syncEvents` instead. */
	events?: Array<GraphQLTypes["WebhookEventTypeEnum"] | undefined>,
	/** The asynchronous events that webhook wants to subscribe. */
	asyncEvents?: Array<GraphQLTypes["WebhookEventTypeAsyncEnum"]>,
	/** The synchronous events that webhook wants to subscribe. */
	syncEvents?: Array<GraphQLTypes["WebhookEventTypeSyncEnum"]>,
	/** ID of the app to which webhook belongs. */
	app?: string,
	/** Determine if webhook will be set active or not. */
	isActive?: boolean,
	/** Use to create a hash signature with each payload. */
	secretKey?: string
};
	/** Represents weight value in a specific weight unit. */
["Weight"]: {
	__typename: "Weight",
	/** Weight unit. */
	unit: GraphQLTypes["WeightUnitsEnum"],
	/** Weight value. */
	value: number
};
	["WeightScalar"]:any;
	/** An enumeration. */
["WeightUnitsEnum"]: WeightUnitsEnum
    }
/** An enumeration. */
export const enum AccountErrorCode {
	ACTIVATE_OWN_ACCOUNT = "ACTIVATE_OWN_ACCOUNT",
	ACTIVATE_SUPERUSER_ACCOUNT = "ACTIVATE_SUPERUSER_ACCOUNT",
	DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
	DEACTIVATE_OWN_ACCOUNT = "DEACTIVATE_OWN_ACCOUNT",
	DEACTIVATE_SUPERUSER_ACCOUNT = "DEACTIVATE_SUPERUSER_ACCOUNT",
	DELETE_NON_STAFF_USER = "DELETE_NON_STAFF_USER",
	DELETE_OWN_ACCOUNT = "DELETE_OWN_ACCOUNT",
	DELETE_STAFF_ACCOUNT = "DELETE_STAFF_ACCOUNT",
	DELETE_SUPERUSER_ACCOUNT = "DELETE_SUPERUSER_ACCOUNT",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INACTIVE = "INACTIVE",
	INVALID = "INVALID",
	INVALID_PASSWORD = "INVALID_PASSWORD",
	LEFT_NOT_MANAGEABLE_PERMISSION = "LEFT_NOT_MANAGEABLE_PERMISSION",
	INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
	NOT_FOUND = "NOT_FOUND",
	OUT_OF_SCOPE_USER = "OUT_OF_SCOPE_USER",
	OUT_OF_SCOPE_GROUP = "OUT_OF_SCOPE_GROUP",
	OUT_OF_SCOPE_PERMISSION = "OUT_OF_SCOPE_PERMISSION",
	PASSWORD_ENTIRELY_NUMERIC = "PASSWORD_ENTIRELY_NUMERIC",
	PASSWORD_TOO_COMMON = "PASSWORD_TOO_COMMON",
	PASSWORD_TOO_SHORT = "PASSWORD_TOO_SHORT",
	PASSWORD_TOO_SIMILAR = "PASSWORD_TOO_SIMILAR",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE",
	JWT_SIGNATURE_EXPIRED = "JWT_SIGNATURE_EXPIRED",
	JWT_INVALID_TOKEN = "JWT_INVALID_TOKEN",
	JWT_DECODE_ERROR = "JWT_DECODE_ERROR",
	JWT_MISSING_TOKEN = "JWT_MISSING_TOKEN",
	JWT_INVALID_CSRF_TOKEN = "JWT_INVALID_CSRF_TOKEN",
	CHANNEL_INACTIVE = "CHANNEL_INACTIVE",
	MISSING_CHANNEL_SLUG = "MISSING_CHANNEL_SLUG",
	ACCOUNT_NOT_CONFIRMED = "ACCOUNT_NOT_CONFIRMED"
}
/** An enumeration. */
export const enum AddressTypeEnum {
	BILLING = "BILLING",
	SHIPPING = "SHIPPING"
}
/** An enumeration. */
export const enum AppErrorCode {
	FORBIDDEN = "FORBIDDEN",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	INVALID_STATUS = "INVALID_STATUS",
	INVALID_PERMISSION = "INVALID_PERMISSION",
	INVALID_URL_FORMAT = "INVALID_URL_FORMAT",
	INVALID_MANIFEST_FORMAT = "INVALID_MANIFEST_FORMAT",
	MANIFEST_URL_CANT_CONNECT = "MANIFEST_URL_CANT_CONNECT",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE",
	OUT_OF_SCOPE_APP = "OUT_OF_SCOPE_APP",
	OUT_OF_SCOPE_PERMISSION = "OUT_OF_SCOPE_PERMISSION"
}
/** All places where app extension can be mounted. */
export const enum AppExtensionMountEnum {
	PRODUCT_OVERVIEW_CREATE = "PRODUCT_OVERVIEW_CREATE",
	PRODUCT_OVERVIEW_MORE_ACTIONS = "PRODUCT_OVERVIEW_MORE_ACTIONS",
	PRODUCT_DETAILS_MORE_ACTIONS = "PRODUCT_DETAILS_MORE_ACTIONS",
	NAVIGATION_CATALOG = "NAVIGATION_CATALOG",
	NAVIGATION_ORDERS = "NAVIGATION_ORDERS",
	NAVIGATION_CUSTOMERS = "NAVIGATION_CUSTOMERS",
	NAVIGATION_DISCOUNTS = "NAVIGATION_DISCOUNTS",
	NAVIGATION_TRANSLATIONS = "NAVIGATION_TRANSLATIONS",
	NAVIGATION_PAGES = "NAVIGATION_PAGES"
}
/** All available ways of opening an app extension.

    POPUP - app's extension will be mounted as a popup window
    APP_PAGE - redirect to app's page */
export const enum AppExtensionTargetEnum {
	POPUP = "POPUP",
	APP_PAGE = "APP_PAGE"
}
export const enum AppSortField {
	NAME = "NAME",
	CREATION_DATE = "CREATION_DATE"
}
/** Enum determining type of your App. */
export const enum AppTypeEnum {
	LOCAL = "LOCAL",
	THIRDPARTY = "THIRDPARTY"
}
/** An enumeration. */
export const enum AreaUnitsEnum {
	SQ_CM = "SQ_CM",
	SQ_M = "SQ_M",
	SQ_KM = "SQ_KM",
	SQ_FT = "SQ_FT",
	SQ_YD = "SQ_YD",
	SQ_INCH = "SQ_INCH"
}
export const enum AttributeChoicesSortField {
	NAME = "NAME",
	SLUG = "SLUG"
}
/** An enumeration. */
export const enum AttributeEntityTypeEnum {
	PAGE = "PAGE",
	PRODUCT = "PRODUCT"
}
/** An enumeration. */
export const enum AttributeErrorCode {
	ALREADY_EXISTS = "ALREADY_EXISTS",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE"
}
/** An enumeration. */
export const enum AttributeInputTypeEnum {
	DROPDOWN = "DROPDOWN",
	MULTISELECT = "MULTISELECT",
	FILE = "FILE",
	REFERENCE = "REFERENCE",
	NUMERIC = "NUMERIC",
	RICH_TEXT = "RICH_TEXT",
	SWATCH = "SWATCH",
	BOOLEAN = "BOOLEAN",
	DATE = "DATE",
	DATE_TIME = "DATE_TIME"
}
export const enum AttributeSortField {
	NAME = "NAME",
	SLUG = "SLUG",
	VALUE_REQUIRED = "VALUE_REQUIRED",
	IS_VARIANT_ONLY = "IS_VARIANT_ONLY",
	VISIBLE_IN_STOREFRONT = "VISIBLE_IN_STOREFRONT",
	FILTERABLE_IN_STOREFRONT = "FILTERABLE_IN_STOREFRONT",
	FILTERABLE_IN_DASHBOARD = "FILTERABLE_IN_DASHBOARD",
	STOREFRONT_SEARCH_POSITION = "STOREFRONT_SEARCH_POSITION",
	AVAILABLE_IN_GRID = "AVAILABLE_IN_GRID"
}
/** An enumeration. */
export const enum AttributeTypeEnum {
	PRODUCT_TYPE = "PRODUCT_TYPE",
	PAGE_TYPE = "PAGE_TYPE"
}
export const enum CategorySortField {
	NAME = "NAME",
	PRODUCT_COUNT = "PRODUCT_COUNT",
	SUBCATEGORY_COUNT = "SUBCATEGORY_COUNT"
}
/** An enumeration. */
export const enum ChannelErrorCode {
	ALREADY_EXISTS = "ALREADY_EXISTS",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE",
	CHANNELS_CURRENCY_MUST_BE_THE_SAME = "CHANNELS_CURRENCY_MUST_BE_THE_SAME",
	CHANNEL_WITH_ORDERS = "CHANNEL_WITH_ORDERS",
	DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM"
}
/** An enumeration. */
export const enum CheckoutErrorCode {
	BILLING_ADDRESS_NOT_SET = "BILLING_ADDRESS_NOT_SET",
	CHECKOUT_NOT_FULLY_PAID = "CHECKOUT_NOT_FULLY_PAID",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	PRODUCT_NOT_PUBLISHED = "PRODUCT_NOT_PUBLISHED",
	PRODUCT_UNAVAILABLE_FOR_PURCHASE = "PRODUCT_UNAVAILABLE_FOR_PURCHASE",
	INSUFFICIENT_STOCK = "INSUFFICIENT_STOCK",
	INVALID = "INVALID",
	INVALID_SHIPPING_METHOD = "INVALID_SHIPPING_METHOD",
	NOT_FOUND = "NOT_FOUND",
	PAYMENT_ERROR = "PAYMENT_ERROR",
	QUANTITY_GREATER_THAN_LIMIT = "QUANTITY_GREATER_THAN_LIMIT",
	REQUIRED = "REQUIRED",
	SHIPPING_ADDRESS_NOT_SET = "SHIPPING_ADDRESS_NOT_SET",
	SHIPPING_METHOD_NOT_APPLICABLE = "SHIPPING_METHOD_NOT_APPLICABLE",
	DELIVERY_METHOD_NOT_APPLICABLE = "DELIVERY_METHOD_NOT_APPLICABLE",
	SHIPPING_METHOD_NOT_SET = "SHIPPING_METHOD_NOT_SET",
	SHIPPING_NOT_REQUIRED = "SHIPPING_NOT_REQUIRED",
	TAX_ERROR = "TAX_ERROR",
	UNIQUE = "UNIQUE",
	VOUCHER_NOT_APPLICABLE = "VOUCHER_NOT_APPLICABLE",
	GIFT_CARD_NOT_APPLICABLE = "GIFT_CARD_NOT_APPLICABLE",
	ZERO_QUANTITY = "ZERO_QUANTITY",
	MISSING_CHANNEL_SLUG = "MISSING_CHANNEL_SLUG",
	CHANNEL_INACTIVE = "CHANNEL_INACTIVE",
	UNAVAILABLE_VARIANT_IN_CHANNEL = "UNAVAILABLE_VARIANT_IN_CHANNEL",
	EMAIL_NOT_SET = "EMAIL_NOT_SET",
	NO_LINES = "NO_LINES"
}
export const enum CheckoutSortField {
	CREATION_DATE = "CREATION_DATE",
	CUSTOMER = "CUSTOMER",
	PAYMENT = "PAYMENT"
}
/** An enumeration. */
export const enum CollectionErrorCode {
	DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE",
	CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT = "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT"
}
export const enum CollectionPublished {
	PUBLISHED = "PUBLISHED",
	HIDDEN = "HIDDEN"
}
export const enum CollectionSortField {
	NAME = "NAME",
	AVAILABILITY = "AVAILABILITY",
	PRODUCT_COUNT = "PRODUCT_COUNT",
	PUBLICATION_DATE = "PUBLICATION_DATE"
}
/** An enumeration. */
export const enum ConfigurationTypeFieldEnum {
	STRING = "STRING",
	MULTILINE = "MULTILINE",
	BOOLEAN = "BOOLEAN",
	SECRET = "SECRET",
	PASSWORD = "PASSWORD",
	SECRETMULTILINE = "SECRETMULTILINE",
	OUTPUT = "OUTPUT"
}
/** An enumeration. */
export const enum CountryCode {
	AF = "AF",
	AX = "AX",
	AL = "AL",
	DZ = "DZ",
	AS = "AS",
	AD = "AD",
	AO = "AO",
	AI = "AI",
	AQ = "AQ",
	AG = "AG",
	AR = "AR",
	AM = "AM",
	AW = "AW",
	AU = "AU",
	AT = "AT",
	AZ = "AZ",
	BS = "BS",
	BH = "BH",
	BD = "BD",
	BB = "BB",
	BY = "BY",
	BE = "BE",
	BZ = "BZ",
	BJ = "BJ",
	BM = "BM",
	BT = "BT",
	BO = "BO",
	BQ = "BQ",
	BA = "BA",
	BW = "BW",
	BV = "BV",
	BR = "BR",
	IO = "IO",
	BN = "BN",
	BG = "BG",
	BF = "BF",
	BI = "BI",
	CV = "CV",
	KH = "KH",
	CM = "CM",
	CA = "CA",
	KY = "KY",
	CF = "CF",
	TD = "TD",
	CL = "CL",
	CN = "CN",
	CX = "CX",
	CC = "CC",
	CO = "CO",
	KM = "KM",
	CG = "CG",
	CD = "CD",
	CK = "CK",
	CR = "CR",
	CI = "CI",
	HR = "HR",
	CU = "CU",
	CW = "CW",
	CY = "CY",
	CZ = "CZ",
	DK = "DK",
	DJ = "DJ",
	DM = "DM",
	DO = "DO",
	EC = "EC",
	EG = "EG",
	SV = "SV",
	GQ = "GQ",
	ER = "ER",
	EE = "EE",
	SZ = "SZ",
	ET = "ET",
	EU = "EU",
	FK = "FK",
	FO = "FO",
	FJ = "FJ",
	FI = "FI",
	FR = "FR",
	GF = "GF",
	PF = "PF",
	TF = "TF",
	GA = "GA",
	GM = "GM",
	GE = "GE",
	DE = "DE",
	GH = "GH",
	GI = "GI",
	GR = "GR",
	GL = "GL",
	GD = "GD",
	GP = "GP",
	GU = "GU",
	GT = "GT",
	GG = "GG",
	GN = "GN",
	GW = "GW",
	GY = "GY",
	HT = "HT",
	HM = "HM",
	VA = "VA",
	HN = "HN",
	HK = "HK",
	HU = "HU",
	IS = "IS",
	IN = "IN",
	ID = "ID",
	IR = "IR",
	IQ = "IQ",
	IE = "IE",
	IM = "IM",
	IL = "IL",
	IT = "IT",
	JM = "JM",
	JP = "JP",
	JE = "JE",
	JO = "JO",
	KZ = "KZ",
	KE = "KE",
	KI = "KI",
	KW = "KW",
	KG = "KG",
	LA = "LA",
	LV = "LV",
	LB = "LB",
	LS = "LS",
	LR = "LR",
	LY = "LY",
	LI = "LI",
	LT = "LT",
	LU = "LU",
	MO = "MO",
	MG = "MG",
	MW = "MW",
	MY = "MY",
	MV = "MV",
	ML = "ML",
	MT = "MT",
	MH = "MH",
	MQ = "MQ",
	MR = "MR",
	MU = "MU",
	YT = "YT",
	MX = "MX",
	FM = "FM",
	MD = "MD",
	MC = "MC",
	MN = "MN",
	ME = "ME",
	MS = "MS",
	MA = "MA",
	MZ = "MZ",
	MM = "MM",
	NA = "NA",
	NR = "NR",
	NP = "NP",
	NL = "NL",
	NC = "NC",
	NZ = "NZ",
	NI = "NI",
	NE = "NE",
	NG = "NG",
	NU = "NU",
	NF = "NF",
	KP = "KP",
	MK = "MK",
	MP = "MP",
	NO = "NO",
	OM = "OM",
	PK = "PK",
	PW = "PW",
	PS = "PS",
	PA = "PA",
	PG = "PG",
	PY = "PY",
	PE = "PE",
	PH = "PH",
	PN = "PN",
	PL = "PL",
	PT = "PT",
	PR = "PR",
	QA = "QA",
	RE = "RE",
	RO = "RO",
	RU = "RU",
	RW = "RW",
	BL = "BL",
	SH = "SH",
	KN = "KN",
	LC = "LC",
	MF = "MF",
	PM = "PM",
	VC = "VC",
	WS = "WS",
	SM = "SM",
	ST = "ST",
	SA = "SA",
	SN = "SN",
	RS = "RS",
	SC = "SC",
	SL = "SL",
	SG = "SG",
	SX = "SX",
	SK = "SK",
	SI = "SI",
	SB = "SB",
	SO = "SO",
	ZA = "ZA",
	GS = "GS",
	KR = "KR",
	SS = "SS",
	ES = "ES",
	LK = "LK",
	SD = "SD",
	SR = "SR",
	SJ = "SJ",
	SE = "SE",
	CH = "CH",
	SY = "SY",
	TW = "TW",
	TJ = "TJ",
	TZ = "TZ",
	TH = "TH",
	TL = "TL",
	TG = "TG",
	TK = "TK",
	TO = "TO",
	TT = "TT",
	TN = "TN",
	TR = "TR",
	TM = "TM",
	TC = "TC",
	TV = "TV",
	UG = "UG",
	UA = "UA",
	AE = "AE",
	GB = "GB",
	UM = "UM",
	US = "US",
	UY = "UY",
	UZ = "UZ",
	VU = "VU",
	VE = "VE",
	VN = "VN",
	VG = "VG",
	VI = "VI",
	WF = "WF",
	EH = "EH",
	YE = "YE",
	ZM = "ZM",
	ZW = "ZW"
}
/** An enumeration. */
export const enum CustomerEventsEnum {
	ACCOUNT_CREATED = "ACCOUNT_CREATED",
	PASSWORD_RESET_LINK_SENT = "PASSWORD_RESET_LINK_SENT",
	PASSWORD_RESET = "PASSWORD_RESET",
	EMAIL_CHANGED_REQUEST = "EMAIL_CHANGED_REQUEST",
	PASSWORD_CHANGED = "PASSWORD_CHANGED",
	EMAIL_CHANGED = "EMAIL_CHANGED",
	PLACED_ORDER = "PLACED_ORDER",
	NOTE_ADDED_TO_ORDER = "NOTE_ADDED_TO_ORDER",
	DIGITAL_LINK_DOWNLOADED = "DIGITAL_LINK_DOWNLOADED",
	CUSTOMER_DELETED = "CUSTOMER_DELETED",
	NAME_ASSIGNED = "NAME_ASSIGNED",
	EMAIL_ASSIGNED = "EMAIL_ASSIGNED",
	NOTE_ADDED = "NOTE_ADDED"
}
/** An enumeration. */
export const enum DiscountErrorCode {
	ALREADY_EXISTS = "ALREADY_EXISTS",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE",
	CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT = "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT",
	DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM"
}
export const enum DiscountStatusEnum {
	ACTIVE = "ACTIVE",
	EXPIRED = "EXPIRED",
	SCHEDULED = "SCHEDULED"
}
export const enum DiscountValueTypeEnum {
	FIXED = "FIXED",
	PERCENTAGE = "PERCENTAGE"
}
/** An enumeration. */
export const enum DistanceUnitsEnum {
	CM = "CM",
	M = "M",
	KM = "KM",
	FT = "FT",
	YD = "YD",
	INCH = "INCH"
}
export const enum EventDeliveryAttemptSortField {
	CREATED_AT = "CREATED_AT"
}
export const enum EventDeliverySortField {
	CREATED_AT = "CREATED_AT"
}
export const enum EventDeliveryStatusEnum {
	PENDING = "PENDING",
	SUCCESS = "SUCCESS",
	FAILED = "FAILED"
}
/** An enumeration. */
export const enum ExportErrorCode {
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED"
}
/** An enumeration. */
export const enum ExportEventsEnum {
	EXPORT_PENDING = "EXPORT_PENDING",
	EXPORT_SUCCESS = "EXPORT_SUCCESS",
	EXPORT_FAILED = "EXPORT_FAILED",
	EXPORT_DELETED = "EXPORT_DELETED",
	EXPORTED_FILE_SENT = "EXPORTED_FILE_SENT",
	EXPORT_FAILED_INFO_SENT = "EXPORT_FAILED_INFO_SENT"
}
export const enum ExportFileSortField {
	STATUS = "STATUS",
	CREATED_AT = "CREATED_AT",
	UPDATED_AT = "UPDATED_AT"
}
export const enum ExportScope {
	ALL = "ALL",
	IDS = "IDS",
	FILTER = "FILTER"
}
/** An enumeration. */
export const enum ExternalNotificationErrorCodes {
	REQUIRED = "REQUIRED",
	INVALID_MODEL_TYPE = "INVALID_MODEL_TYPE",
	NOT_FOUND = "NOT_FOUND",
	CHANNEL_INACTIVE = "CHANNEL_INACTIVE"
}
/** An enumeration. */
export const enum FileTypesEnum {
	CSV = "CSV",
	XLSX = "XLSX"
}
/** An enumeration. */
export const enum FulfillmentStatus {
	FULFILLED = "FULFILLED",
	REFUNDED = "REFUNDED",
	RETURNED = "RETURNED",
	REPLACED = "REPLACED",
	REFUNDED_AND_RETURNED = "REFUNDED_AND_RETURNED",
	CANCELED = "CANCELED",
	WAITING_FOR_APPROVAL = "WAITING_FOR_APPROVAL"
}
/** An enumeration. */
export const enum GiftCardErrorCode {
	ALREADY_EXISTS = "ALREADY_EXISTS",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE",
	EXPIRED_GIFT_CARD = "EXPIRED_GIFT_CARD",
	DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM"
}
/** An enumeration. */
export const enum GiftCardEventsEnum {
	ISSUED = "ISSUED",
	BOUGHT = "BOUGHT",
	UPDATED = "UPDATED",
	ACTIVATED = "ACTIVATED",
	DEACTIVATED = "DEACTIVATED",
	BALANCE_RESET = "BALANCE_RESET",
	EXPIRY_DATE_UPDATED = "EXPIRY_DATE_UPDATED",
	TAGS_UPDATED = "TAGS_UPDATED",
	SENT_TO_CUSTOMER = "SENT_TO_CUSTOMER",
	RESENT = "RESENT",
	NOTE_ADDED = "NOTE_ADDED",
	USED_IN_ORDER = "USED_IN_ORDER"
}
/** An enumeration. */
export const enum GiftCardSettingsErrorCode {
	INVALID = "INVALID",
	REQUIRED = "REQUIRED",
	GRAPHQL_ERROR = "GRAPHQL_ERROR"
}
/** An enumeration. */
export const enum GiftCardSettingsExpiryTypeEnum {
	NEVER_EXPIRE = "NEVER_EXPIRE",
	EXPIRY_PERIOD = "EXPIRY_PERIOD"
}
export const enum GiftCardSortField {
	PRODUCT = "PRODUCT",
	USED_BY = "USED_BY",
	CURRENT_BALANCE = "CURRENT_BALANCE"
}
/** An enumeration. */
export const enum InvoiceErrorCode {
	REQUIRED = "REQUIRED",
	NOT_READY = "NOT_READY",
	URL_NOT_SET = "URL_NOT_SET",
	EMAIL_NOT_SET = "EMAIL_NOT_SET",
	NUMBER_NOT_SET = "NUMBER_NOT_SET",
	NOT_FOUND = "NOT_FOUND",
	INVALID_STATUS = "INVALID_STATUS",
	NO_INVOICE_PLUGIN = "NO_INVOICE_PLUGIN"
}
/** An enumeration. */
export const enum JobStatusEnum {
	PENDING = "PENDING",
	SUCCESS = "SUCCESS",
	FAILED = "FAILED",
	DELETED = "DELETED"
}
/** An enumeration. */
export const enum LanguageCodeEnum {
	AF = "AF",
	AF_NA = "AF_NA",
	AF_ZA = "AF_ZA",
	AGQ = "AGQ",
	AGQ_CM = "AGQ_CM",
	AK = "AK",
	AK_GH = "AK_GH",
	AM = "AM",
	AM_ET = "AM_ET",
	AR = "AR",
	AR_AE = "AR_AE",
	AR_BH = "AR_BH",
	AR_DJ = "AR_DJ",
	AR_DZ = "AR_DZ",
	AR_EG = "AR_EG",
	AR_EH = "AR_EH",
	AR_ER = "AR_ER",
	AR_IL = "AR_IL",
	AR_IQ = "AR_IQ",
	AR_JO = "AR_JO",
	AR_KM = "AR_KM",
	AR_KW = "AR_KW",
	AR_LB = "AR_LB",
	AR_LY = "AR_LY",
	AR_MA = "AR_MA",
	AR_MR = "AR_MR",
	AR_OM = "AR_OM",
	AR_PS = "AR_PS",
	AR_QA = "AR_QA",
	AR_SA = "AR_SA",
	AR_SD = "AR_SD",
	AR_SO = "AR_SO",
	AR_SS = "AR_SS",
	AR_SY = "AR_SY",
	AR_TD = "AR_TD",
	AR_TN = "AR_TN",
	AR_YE = "AR_YE",
	AS = "AS",
	AS_IN = "AS_IN",
	ASA = "ASA",
	ASA_TZ = "ASA_TZ",
	AST = "AST",
	AST_ES = "AST_ES",
	AZ = "AZ",
	AZ_CYRL = "AZ_CYRL",
	AZ_CYRL_AZ = "AZ_CYRL_AZ",
	AZ_LATN = "AZ_LATN",
	AZ_LATN_AZ = "AZ_LATN_AZ",
	BAS = "BAS",
	BAS_CM = "BAS_CM",
	BE = "BE",
	BE_BY = "BE_BY",
	BEM = "BEM",
	BEM_ZM = "BEM_ZM",
	BEZ = "BEZ",
	BEZ_TZ = "BEZ_TZ",
	BG = "BG",
	BG_BG = "BG_BG",
	BM = "BM",
	BM_ML = "BM_ML",
	BN = "BN",
	BN_BD = "BN_BD",
	BN_IN = "BN_IN",
	BO = "BO",
	BO_CN = "BO_CN",
	BO_IN = "BO_IN",
	BR = "BR",
	BR_FR = "BR_FR",
	BRX = "BRX",
	BRX_IN = "BRX_IN",
	BS = "BS",
	BS_CYRL = "BS_CYRL",
	BS_CYRL_BA = "BS_CYRL_BA",
	BS_LATN = "BS_LATN",
	BS_LATN_BA = "BS_LATN_BA",
	CA = "CA",
	CA_AD = "CA_AD",
	CA_ES = "CA_ES",
	CA_ES_VALENCIA = "CA_ES_VALENCIA",
	CA_FR = "CA_FR",
	CA_IT = "CA_IT",
	CCP = "CCP",
	CCP_BD = "CCP_BD",
	CCP_IN = "CCP_IN",
	CE = "CE",
	CE_RU = "CE_RU",
	CEB = "CEB",
	CEB_PH = "CEB_PH",
	CGG = "CGG",
	CGG_UG = "CGG_UG",
	CHR = "CHR",
	CHR_US = "CHR_US",
	CKB = "CKB",
	CKB_IQ = "CKB_IQ",
	CKB_IR = "CKB_IR",
	CS = "CS",
	CS_CZ = "CS_CZ",
	CU = "CU",
	CU_RU = "CU_RU",
	CY = "CY",
	CY_GB = "CY_GB",
	DA = "DA",
	DA_DK = "DA_DK",
	DA_GL = "DA_GL",
	DAV = "DAV",
	DAV_KE = "DAV_KE",
	DE = "DE",
	DE_AT = "DE_AT",
	DE_BE = "DE_BE",
	DE_CH = "DE_CH",
	DE_DE = "DE_DE",
	DE_IT = "DE_IT",
	DE_LI = "DE_LI",
	DE_LU = "DE_LU",
	DJE = "DJE",
	DJE_NE = "DJE_NE",
	DSB = "DSB",
	DSB_DE = "DSB_DE",
	DUA = "DUA",
	DUA_CM = "DUA_CM",
	DYO = "DYO",
	DYO_SN = "DYO_SN",
	DZ = "DZ",
	DZ_BT = "DZ_BT",
	EBU = "EBU",
	EBU_KE = "EBU_KE",
	EE = "EE",
	EE_GH = "EE_GH",
	EE_TG = "EE_TG",
	EL = "EL",
	EL_CY = "EL_CY",
	EL_GR = "EL_GR",
	EN = "EN",
	EN_AE = "EN_AE",
	EN_AG = "EN_AG",
	EN_AI = "EN_AI",
	EN_AS = "EN_AS",
	EN_AT = "EN_AT",
	EN_AU = "EN_AU",
	EN_BB = "EN_BB",
	EN_BE = "EN_BE",
	EN_BI = "EN_BI",
	EN_BM = "EN_BM",
	EN_BS = "EN_BS",
	EN_BW = "EN_BW",
	EN_BZ = "EN_BZ",
	EN_CA = "EN_CA",
	EN_CC = "EN_CC",
	EN_CH = "EN_CH",
	EN_CK = "EN_CK",
	EN_CM = "EN_CM",
	EN_CX = "EN_CX",
	EN_CY = "EN_CY",
	EN_DE = "EN_DE",
	EN_DG = "EN_DG",
	EN_DK = "EN_DK",
	EN_DM = "EN_DM",
	EN_ER = "EN_ER",
	EN_FI = "EN_FI",
	EN_FJ = "EN_FJ",
	EN_FK = "EN_FK",
	EN_FM = "EN_FM",
	EN_GB = "EN_GB",
	EN_GD = "EN_GD",
	EN_GG = "EN_GG",
	EN_GH = "EN_GH",
	EN_GI = "EN_GI",
	EN_GM = "EN_GM",
	EN_GU = "EN_GU",
	EN_GY = "EN_GY",
	EN_HK = "EN_HK",
	EN_IE = "EN_IE",
	EN_IL = "EN_IL",
	EN_IM = "EN_IM",
	EN_IN = "EN_IN",
	EN_IO = "EN_IO",
	EN_JE = "EN_JE",
	EN_JM = "EN_JM",
	EN_KE = "EN_KE",
	EN_KI = "EN_KI",
	EN_KN = "EN_KN",
	EN_KY = "EN_KY",
	EN_LC = "EN_LC",
	EN_LR = "EN_LR",
	EN_LS = "EN_LS",
	EN_MG = "EN_MG",
	EN_MH = "EN_MH",
	EN_MO = "EN_MO",
	EN_MP = "EN_MP",
	EN_MS = "EN_MS",
	EN_MT = "EN_MT",
	EN_MU = "EN_MU",
	EN_MW = "EN_MW",
	EN_MY = "EN_MY",
	EN_NA = "EN_NA",
	EN_NF = "EN_NF",
	EN_NG = "EN_NG",
	EN_NL = "EN_NL",
	EN_NR = "EN_NR",
	EN_NU = "EN_NU",
	EN_NZ = "EN_NZ",
	EN_PG = "EN_PG",
	EN_PH = "EN_PH",
	EN_PK = "EN_PK",
	EN_PN = "EN_PN",
	EN_PR = "EN_PR",
	EN_PW = "EN_PW",
	EN_RW = "EN_RW",
	EN_SB = "EN_SB",
	EN_SC = "EN_SC",
	EN_SD = "EN_SD",
	EN_SE = "EN_SE",
	EN_SG = "EN_SG",
	EN_SH = "EN_SH",
	EN_SI = "EN_SI",
	EN_SL = "EN_SL",
	EN_SS = "EN_SS",
	EN_SX = "EN_SX",
	EN_SZ = "EN_SZ",
	EN_TC = "EN_TC",
	EN_TK = "EN_TK",
	EN_TO = "EN_TO",
	EN_TT = "EN_TT",
	EN_TV = "EN_TV",
	EN_TZ = "EN_TZ",
	EN_UG = "EN_UG",
	EN_UM = "EN_UM",
	EN_US = "EN_US",
	EN_VC = "EN_VC",
	EN_VG = "EN_VG",
	EN_VI = "EN_VI",
	EN_VU = "EN_VU",
	EN_WS = "EN_WS",
	EN_ZA = "EN_ZA",
	EN_ZM = "EN_ZM",
	EN_ZW = "EN_ZW",
	EO = "EO",
	ES = "ES",
	ES_AR = "ES_AR",
	ES_BO = "ES_BO",
	ES_BR = "ES_BR",
	ES_BZ = "ES_BZ",
	ES_CL = "ES_CL",
	ES_CO = "ES_CO",
	ES_CR = "ES_CR",
	ES_CU = "ES_CU",
	ES_DO = "ES_DO",
	ES_EA = "ES_EA",
	ES_EC = "ES_EC",
	ES_ES = "ES_ES",
	ES_GQ = "ES_GQ",
	ES_GT = "ES_GT",
	ES_HN = "ES_HN",
	ES_IC = "ES_IC",
	ES_MX = "ES_MX",
	ES_NI = "ES_NI",
	ES_PA = "ES_PA",
	ES_PE = "ES_PE",
	ES_PH = "ES_PH",
	ES_PR = "ES_PR",
	ES_PY = "ES_PY",
	ES_SV = "ES_SV",
	ES_US = "ES_US",
	ES_UY = "ES_UY",
	ES_VE = "ES_VE",
	ET = "ET",
	ET_EE = "ET_EE",
	EU = "EU",
	EU_ES = "EU_ES",
	EWO = "EWO",
	EWO_CM = "EWO_CM",
	FA = "FA",
	FA_AF = "FA_AF",
	FA_IR = "FA_IR",
	FF = "FF",
	FF_ADLM = "FF_ADLM",
	FF_ADLM_BF = "FF_ADLM_BF",
	FF_ADLM_CM = "FF_ADLM_CM",
	FF_ADLM_GH = "FF_ADLM_GH",
	FF_ADLM_GM = "FF_ADLM_GM",
	FF_ADLM_GN = "FF_ADLM_GN",
	FF_ADLM_GW = "FF_ADLM_GW",
	FF_ADLM_LR = "FF_ADLM_LR",
	FF_ADLM_MR = "FF_ADLM_MR",
	FF_ADLM_NE = "FF_ADLM_NE",
	FF_ADLM_NG = "FF_ADLM_NG",
	FF_ADLM_SL = "FF_ADLM_SL",
	FF_ADLM_SN = "FF_ADLM_SN",
	FF_LATN = "FF_LATN",
	FF_LATN_BF = "FF_LATN_BF",
	FF_LATN_CM = "FF_LATN_CM",
	FF_LATN_GH = "FF_LATN_GH",
	FF_LATN_GM = "FF_LATN_GM",
	FF_LATN_GN = "FF_LATN_GN",
	FF_LATN_GW = "FF_LATN_GW",
	FF_LATN_LR = "FF_LATN_LR",
	FF_LATN_MR = "FF_LATN_MR",
	FF_LATN_NE = "FF_LATN_NE",
	FF_LATN_NG = "FF_LATN_NG",
	FF_LATN_SL = "FF_LATN_SL",
	FF_LATN_SN = "FF_LATN_SN",
	FI = "FI",
	FI_FI = "FI_FI",
	FIL = "FIL",
	FIL_PH = "FIL_PH",
	FO = "FO",
	FO_DK = "FO_DK",
	FO_FO = "FO_FO",
	FR = "FR",
	FR_BE = "FR_BE",
	FR_BF = "FR_BF",
	FR_BI = "FR_BI",
	FR_BJ = "FR_BJ",
	FR_BL = "FR_BL",
	FR_CA = "FR_CA",
	FR_CD = "FR_CD",
	FR_CF = "FR_CF",
	FR_CG = "FR_CG",
	FR_CH = "FR_CH",
	FR_CI = "FR_CI",
	FR_CM = "FR_CM",
	FR_DJ = "FR_DJ",
	FR_DZ = "FR_DZ",
	FR_FR = "FR_FR",
	FR_GA = "FR_GA",
	FR_GF = "FR_GF",
	FR_GN = "FR_GN",
	FR_GP = "FR_GP",
	FR_GQ = "FR_GQ",
	FR_HT = "FR_HT",
	FR_KM = "FR_KM",
	FR_LU = "FR_LU",
	FR_MA = "FR_MA",
	FR_MC = "FR_MC",
	FR_MF = "FR_MF",
	FR_MG = "FR_MG",
	FR_ML = "FR_ML",
	FR_MQ = "FR_MQ",
	FR_MR = "FR_MR",
	FR_MU = "FR_MU",
	FR_NC = "FR_NC",
	FR_NE = "FR_NE",
	FR_PF = "FR_PF",
	FR_PM = "FR_PM",
	FR_RE = "FR_RE",
	FR_RW = "FR_RW",
	FR_SC = "FR_SC",
	FR_SN = "FR_SN",
	FR_SY = "FR_SY",
	FR_TD = "FR_TD",
	FR_TG = "FR_TG",
	FR_TN = "FR_TN",
	FR_VU = "FR_VU",
	FR_WF = "FR_WF",
	FR_YT = "FR_YT",
	FUR = "FUR",
	FUR_IT = "FUR_IT",
	FY = "FY",
	FY_NL = "FY_NL",
	GA = "GA",
	GA_GB = "GA_GB",
	GA_IE = "GA_IE",
	GD = "GD",
	GD_GB = "GD_GB",
	GL = "GL",
	GL_ES = "GL_ES",
	GSW = "GSW",
	GSW_CH = "GSW_CH",
	GSW_FR = "GSW_FR",
	GSW_LI = "GSW_LI",
	GU = "GU",
	GU_IN = "GU_IN",
	GUZ = "GUZ",
	GUZ_KE = "GUZ_KE",
	GV = "GV",
	GV_IM = "GV_IM",
	HA = "HA",
	HA_GH = "HA_GH",
	HA_NE = "HA_NE",
	HA_NG = "HA_NG",
	HAW = "HAW",
	HAW_US = "HAW_US",
	HE = "HE",
	HE_IL = "HE_IL",
	HI = "HI",
	HI_IN = "HI_IN",
	HR = "HR",
	HR_BA = "HR_BA",
	HR_HR = "HR_HR",
	HSB = "HSB",
	HSB_DE = "HSB_DE",
	HU = "HU",
	HU_HU = "HU_HU",
	HY = "HY",
	HY_AM = "HY_AM",
	IA = "IA",
	ID = "ID",
	ID_ID = "ID_ID",
	IG = "IG",
	IG_NG = "IG_NG",
	II = "II",
	II_CN = "II_CN",
	IS = "IS",
	IS_IS = "IS_IS",
	IT = "IT",
	IT_CH = "IT_CH",
	IT_IT = "IT_IT",
	IT_SM = "IT_SM",
	IT_VA = "IT_VA",
	JA = "JA",
	JA_JP = "JA_JP",
	JGO = "JGO",
	JGO_CM = "JGO_CM",
	JMC = "JMC",
	JMC_TZ = "JMC_TZ",
	JV = "JV",
	JV_ID = "JV_ID",
	KA = "KA",
	KA_GE = "KA_GE",
	KAB = "KAB",
	KAB_DZ = "KAB_DZ",
	KAM = "KAM",
	KAM_KE = "KAM_KE",
	KDE = "KDE",
	KDE_TZ = "KDE_TZ",
	KEA = "KEA",
	KEA_CV = "KEA_CV",
	KHQ = "KHQ",
	KHQ_ML = "KHQ_ML",
	KI = "KI",
	KI_KE = "KI_KE",
	KK = "KK",
	KK_KZ = "KK_KZ",
	KKJ = "KKJ",
	KKJ_CM = "KKJ_CM",
	KL = "KL",
	KL_GL = "KL_GL",
	KLN = "KLN",
	KLN_KE = "KLN_KE",
	KM = "KM",
	KM_KH = "KM_KH",
	KN = "KN",
	KN_IN = "KN_IN",
	KO = "KO",
	KO_KP = "KO_KP",
	KO_KR = "KO_KR",
	KOK = "KOK",
	KOK_IN = "KOK_IN",
	KS = "KS",
	KS_ARAB = "KS_ARAB",
	KS_ARAB_IN = "KS_ARAB_IN",
	KSB = "KSB",
	KSB_TZ = "KSB_TZ",
	KSF = "KSF",
	KSF_CM = "KSF_CM",
	KSH = "KSH",
	KSH_DE = "KSH_DE",
	KU = "KU",
	KU_TR = "KU_TR",
	KW = "KW",
	KW_GB = "KW_GB",
	KY = "KY",
	KY_KG = "KY_KG",
	LAG = "LAG",
	LAG_TZ = "LAG_TZ",
	LB = "LB",
	LB_LU = "LB_LU",
	LG = "LG",
	LG_UG = "LG_UG",
	LKT = "LKT",
	LKT_US = "LKT_US",
	LN = "LN",
	LN_AO = "LN_AO",
	LN_CD = "LN_CD",
	LN_CF = "LN_CF",
	LN_CG = "LN_CG",
	LO = "LO",
	LO_LA = "LO_LA",
	LRC = "LRC",
	LRC_IQ = "LRC_IQ",
	LRC_IR = "LRC_IR",
	LT = "LT",
	LT_LT = "LT_LT",
	LU = "LU",
	LU_CD = "LU_CD",
	LUO = "LUO",
	LUO_KE = "LUO_KE",
	LUY = "LUY",
	LUY_KE = "LUY_KE",
	LV = "LV",
	LV_LV = "LV_LV",
	MAI = "MAI",
	MAI_IN = "MAI_IN",
	MAS = "MAS",
	MAS_KE = "MAS_KE",
	MAS_TZ = "MAS_TZ",
	MER = "MER",
	MER_KE = "MER_KE",
	MFE = "MFE",
	MFE_MU = "MFE_MU",
	MG = "MG",
	MG_MG = "MG_MG",
	MGH = "MGH",
	MGH_MZ = "MGH_MZ",
	MGO = "MGO",
	MGO_CM = "MGO_CM",
	MI = "MI",
	MI_NZ = "MI_NZ",
	MK = "MK",
	MK_MK = "MK_MK",
	ML = "ML",
	ML_IN = "ML_IN",
	MN = "MN",
	MN_MN = "MN_MN",
	MNI = "MNI",
	MNI_BENG = "MNI_BENG",
	MNI_BENG_IN = "MNI_BENG_IN",
	MR = "MR",
	MR_IN = "MR_IN",
	MS = "MS",
	MS_BN = "MS_BN",
	MS_ID = "MS_ID",
	MS_MY = "MS_MY",
	MS_SG = "MS_SG",
	MT = "MT",
	MT_MT = "MT_MT",
	MUA = "MUA",
	MUA_CM = "MUA_CM",
	MY = "MY",
	MY_MM = "MY_MM",
	MZN = "MZN",
	MZN_IR = "MZN_IR",
	NAQ = "NAQ",
	NAQ_NA = "NAQ_NA",
	NB = "NB",
	NB_NO = "NB_NO",
	NB_SJ = "NB_SJ",
	ND = "ND",
	ND_ZW = "ND_ZW",
	NDS = "NDS",
	NDS_DE = "NDS_DE",
	NDS_NL = "NDS_NL",
	NE = "NE",
	NE_IN = "NE_IN",
	NE_NP = "NE_NP",
	NL = "NL",
	NL_AW = "NL_AW",
	NL_BE = "NL_BE",
	NL_BQ = "NL_BQ",
	NL_CW = "NL_CW",
	NL_NL = "NL_NL",
	NL_SR = "NL_SR",
	NL_SX = "NL_SX",
	NMG = "NMG",
	NMG_CM = "NMG_CM",
	NN = "NN",
	NN_NO = "NN_NO",
	NNH = "NNH",
	NNH_CM = "NNH_CM",
	NUS = "NUS",
	NUS_SS = "NUS_SS",
	NYN = "NYN",
	NYN_UG = "NYN_UG",
	OM = "OM",
	OM_ET = "OM_ET",
	OM_KE = "OM_KE",
	OR = "OR",
	OR_IN = "OR_IN",
	OS = "OS",
	OS_GE = "OS_GE",
	OS_RU = "OS_RU",
	PA = "PA",
	PA_ARAB = "PA_ARAB",
	PA_ARAB_PK = "PA_ARAB_PK",
	PA_GURU = "PA_GURU",
	PA_GURU_IN = "PA_GURU_IN",
	PCM = "PCM",
	PCM_NG = "PCM_NG",
	PL = "PL",
	PL_PL = "PL_PL",
	PRG = "PRG",
	PS = "PS",
	PS_AF = "PS_AF",
	PS_PK = "PS_PK",
	PT = "PT",
	PT_AO = "PT_AO",
	PT_BR = "PT_BR",
	PT_CH = "PT_CH",
	PT_CV = "PT_CV",
	PT_GQ = "PT_GQ",
	PT_GW = "PT_GW",
	PT_LU = "PT_LU",
	PT_MO = "PT_MO",
	PT_MZ = "PT_MZ",
	PT_PT = "PT_PT",
	PT_ST = "PT_ST",
	PT_TL = "PT_TL",
	QU = "QU",
	QU_BO = "QU_BO",
	QU_EC = "QU_EC",
	QU_PE = "QU_PE",
	RM = "RM",
	RM_CH = "RM_CH",
	RN = "RN",
	RN_BI = "RN_BI",
	RO = "RO",
	RO_MD = "RO_MD",
	RO_RO = "RO_RO",
	ROF = "ROF",
	ROF_TZ = "ROF_TZ",
	RU = "RU",
	RU_BY = "RU_BY",
	RU_KG = "RU_KG",
	RU_KZ = "RU_KZ",
	RU_MD = "RU_MD",
	RU_RU = "RU_RU",
	RU_UA = "RU_UA",
	RW = "RW",
	RW_RW = "RW_RW",
	RWK = "RWK",
	RWK_TZ = "RWK_TZ",
	SAH = "SAH",
	SAH_RU = "SAH_RU",
	SAQ = "SAQ",
	SAQ_KE = "SAQ_KE",
	SAT = "SAT",
	SAT_OLCK = "SAT_OLCK",
	SAT_OLCK_IN = "SAT_OLCK_IN",
	SBP = "SBP",
	SBP_TZ = "SBP_TZ",
	SD = "SD",
	SD_ARAB = "SD_ARAB",
	SD_ARAB_PK = "SD_ARAB_PK",
	SD_DEVA = "SD_DEVA",
	SD_DEVA_IN = "SD_DEVA_IN",
	SE = "SE",
	SE_FI = "SE_FI",
	SE_NO = "SE_NO",
	SE_SE = "SE_SE",
	SEH = "SEH",
	SEH_MZ = "SEH_MZ",
	SES = "SES",
	SES_ML = "SES_ML",
	SG = "SG",
	SG_CF = "SG_CF",
	SHI = "SHI",
	SHI_LATN = "SHI_LATN",
	SHI_LATN_MA = "SHI_LATN_MA",
	SHI_TFNG = "SHI_TFNG",
	SHI_TFNG_MA = "SHI_TFNG_MA",
	SI = "SI",
	SI_LK = "SI_LK",
	SK = "SK",
	SK_SK = "SK_SK",
	SL = "SL",
	SL_SI = "SL_SI",
	SMN = "SMN",
	SMN_FI = "SMN_FI",
	SN = "SN",
	SN_ZW = "SN_ZW",
	SO = "SO",
	SO_DJ = "SO_DJ",
	SO_ET = "SO_ET",
	SO_KE = "SO_KE",
	SO_SO = "SO_SO",
	SQ = "SQ",
	SQ_AL = "SQ_AL",
	SQ_MK = "SQ_MK",
	SQ_XK = "SQ_XK",
	SR = "SR",
	SR_CYRL = "SR_CYRL",
	SR_CYRL_BA = "SR_CYRL_BA",
	SR_CYRL_ME = "SR_CYRL_ME",
	SR_CYRL_RS = "SR_CYRL_RS",
	SR_CYRL_XK = "SR_CYRL_XK",
	SR_LATN = "SR_LATN",
	SR_LATN_BA = "SR_LATN_BA",
	SR_LATN_ME = "SR_LATN_ME",
	SR_LATN_RS = "SR_LATN_RS",
	SR_LATN_XK = "SR_LATN_XK",
	SU = "SU",
	SU_LATN = "SU_LATN",
	SU_LATN_ID = "SU_LATN_ID",
	SV = "SV",
	SV_AX = "SV_AX",
	SV_FI = "SV_FI",
	SV_SE = "SV_SE",
	SW = "SW",
	SW_CD = "SW_CD",
	SW_KE = "SW_KE",
	SW_TZ = "SW_TZ",
	SW_UG = "SW_UG",
	TA = "TA",
	TA_IN = "TA_IN",
	TA_LK = "TA_LK",
	TA_MY = "TA_MY",
	TA_SG = "TA_SG",
	TE = "TE",
	TE_IN = "TE_IN",
	TEO = "TEO",
	TEO_KE = "TEO_KE",
	TEO_UG = "TEO_UG",
	TG = "TG",
	TG_TJ = "TG_TJ",
	TH = "TH",
	TH_TH = "TH_TH",
	TI = "TI",
	TI_ER = "TI_ER",
	TI_ET = "TI_ET",
	TK = "TK",
	TK_TM = "TK_TM",
	TO = "TO",
	TO_TO = "TO_TO",
	TR = "TR",
	TR_CY = "TR_CY",
	TR_TR = "TR_TR",
	TT = "TT",
	TT_RU = "TT_RU",
	TWQ = "TWQ",
	TWQ_NE = "TWQ_NE",
	TZM = "TZM",
	TZM_MA = "TZM_MA",
	UG = "UG",
	UG_CN = "UG_CN",
	UK = "UK",
	UK_UA = "UK_UA",
	UR = "UR",
	UR_IN = "UR_IN",
	UR_PK = "UR_PK",
	UZ = "UZ",
	UZ_ARAB = "UZ_ARAB",
	UZ_ARAB_AF = "UZ_ARAB_AF",
	UZ_CYRL = "UZ_CYRL",
	UZ_CYRL_UZ = "UZ_CYRL_UZ",
	UZ_LATN = "UZ_LATN",
	UZ_LATN_UZ = "UZ_LATN_UZ",
	VAI = "VAI",
	VAI_LATN = "VAI_LATN",
	VAI_LATN_LR = "VAI_LATN_LR",
	VAI_VAII = "VAI_VAII",
	VAI_VAII_LR = "VAI_VAII_LR",
	VI = "VI",
	VI_VN = "VI_VN",
	VO = "VO",
	VUN = "VUN",
	VUN_TZ = "VUN_TZ",
	WAE = "WAE",
	WAE_CH = "WAE_CH",
	WO = "WO",
	WO_SN = "WO_SN",
	XH = "XH",
	XH_ZA = "XH_ZA",
	XOG = "XOG",
	XOG_UG = "XOG_UG",
	YAV = "YAV",
	YAV_CM = "YAV_CM",
	YI = "YI",
	YO = "YO",
	YO_BJ = "YO_BJ",
	YO_NG = "YO_NG",
	YUE = "YUE",
	YUE_HANS = "YUE_HANS",
	YUE_HANS_CN = "YUE_HANS_CN",
	YUE_HANT = "YUE_HANT",
	YUE_HANT_HK = "YUE_HANT_HK",
	ZGH = "ZGH",
	ZGH_MA = "ZGH_MA",
	ZH = "ZH",
	ZH_HANS = "ZH_HANS",
	ZH_HANS_CN = "ZH_HANS_CN",
	ZH_HANS_HK = "ZH_HANS_HK",
	ZH_HANS_MO = "ZH_HANS_MO",
	ZH_HANS_SG = "ZH_HANS_SG",
	ZH_HANT = "ZH_HANT",
	ZH_HANT_HK = "ZH_HANT_HK",
	ZH_HANT_MO = "ZH_HANT_MO",
	ZH_HANT_TW = "ZH_HANT_TW",
	ZU = "ZU",
	ZU_ZA = "ZU_ZA"
}
/** An enumeration. */
export const enum MeasurementUnitsEnum {
	CM = "CM",
	M = "M",
	KM = "KM",
	FT = "FT",
	YD = "YD",
	INCH = "INCH",
	SQ_CM = "SQ_CM",
	SQ_M = "SQ_M",
	SQ_KM = "SQ_KM",
	SQ_FT = "SQ_FT",
	SQ_YD = "SQ_YD",
	SQ_INCH = "SQ_INCH",
	CUBIC_MILLIMETER = "CUBIC_MILLIMETER",
	CUBIC_CENTIMETER = "CUBIC_CENTIMETER",
	CUBIC_DECIMETER = "CUBIC_DECIMETER",
	CUBIC_METER = "CUBIC_METER",
	LITER = "LITER",
	CUBIC_FOOT = "CUBIC_FOOT",
	CUBIC_INCH = "CUBIC_INCH",
	CUBIC_YARD = "CUBIC_YARD",
	QT = "QT",
	PINT = "PINT",
	FL_OZ = "FL_OZ",
	ACRE_IN = "ACRE_IN",
	ACRE_FT = "ACRE_FT",
	G = "G",
	LB = "LB",
	OZ = "OZ",
	KG = "KG",
	TONNE = "TONNE"
}
/** An enumeration. */
export const enum MenuErrorCode {
	CANNOT_ASSIGN_NODE = "CANNOT_ASSIGN_NODE",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	INVALID_MENU_ITEM = "INVALID_MENU_ITEM",
	NO_MENU_ITEM_PROVIDED = "NO_MENU_ITEM_PROVIDED",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	TOO_MANY_MENU_ITEMS = "TOO_MANY_MENU_ITEMS",
	UNIQUE = "UNIQUE"
}
export const enum MenuItemsSortField {
	NAME = "NAME"
}
export const enum MenuSortField {
	NAME = "NAME",
	ITEMS_COUNT = "ITEMS_COUNT"
}
/** An enumeration. */
export const enum MetadataErrorCode {
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED"
}
export const enum NavigationType {
	MAIN = "MAIN",
	SECONDARY = "SECONDARY"
}
export const enum OrderAction {
	CAPTURE = "CAPTURE",
	MARK_AS_PAID = "MARK_AS_PAID",
	REFUND = "REFUND",
	VOID = "VOID"
}
export const enum OrderDirection {
	ASC = "ASC",
	DESC = "DESC"
}
/** An enumeration. */
export const enum OrderDiscountType {
	VOUCHER = "VOUCHER",
	MANUAL = "MANUAL"
}
/** An enumeration. */
export const enum OrderErrorCode {
	BILLING_ADDRESS_NOT_SET = "BILLING_ADDRESS_NOT_SET",
	CANNOT_CANCEL_FULFILLMENT = "CANNOT_CANCEL_FULFILLMENT",
	CANNOT_CANCEL_ORDER = "CANNOT_CANCEL_ORDER",
	CANNOT_DELETE = "CANNOT_DELETE",
	CANNOT_DISCOUNT = "CANNOT_DISCOUNT",
	CANNOT_REFUND = "CANNOT_REFUND",
	CANNOT_FULFILL_UNPAID_ORDER = "CANNOT_FULFILL_UNPAID_ORDER",
	CAPTURE_INACTIVE_PAYMENT = "CAPTURE_INACTIVE_PAYMENT",
	GIFT_CARD_LINE = "GIFT_CARD_LINE",
	NOT_EDITABLE = "NOT_EDITABLE",
	FULFILL_ORDER_LINE = "FULFILL_ORDER_LINE",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	PRODUCT_NOT_PUBLISHED = "PRODUCT_NOT_PUBLISHED",
	PRODUCT_UNAVAILABLE_FOR_PURCHASE = "PRODUCT_UNAVAILABLE_FOR_PURCHASE",
	NOT_FOUND = "NOT_FOUND",
	ORDER_NO_SHIPPING_ADDRESS = "ORDER_NO_SHIPPING_ADDRESS",
	PAYMENT_ERROR = "PAYMENT_ERROR",
	PAYMENT_MISSING = "PAYMENT_MISSING",
	REQUIRED = "REQUIRED",
	SHIPPING_METHOD_NOT_APPLICABLE = "SHIPPING_METHOD_NOT_APPLICABLE",
	SHIPPING_METHOD_REQUIRED = "SHIPPING_METHOD_REQUIRED",
	TAX_ERROR = "TAX_ERROR",
	UNIQUE = "UNIQUE",
	VOID_INACTIVE_PAYMENT = "VOID_INACTIVE_PAYMENT",
	ZERO_QUANTITY = "ZERO_QUANTITY",
	INVALID_QUANTITY = "INVALID_QUANTITY",
	INSUFFICIENT_STOCK = "INSUFFICIENT_STOCK",
	DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
	NOT_AVAILABLE_IN_CHANNEL = "NOT_AVAILABLE_IN_CHANNEL",
	CHANNEL_INACTIVE = "CHANNEL_INACTIVE"
}
/** An enumeration. */
export const enum OrderEventsEmailsEnum {
	PAYMENT_CONFIRMATION = "PAYMENT_CONFIRMATION",
	CONFIRMED = "CONFIRMED",
	SHIPPING_CONFIRMATION = "SHIPPING_CONFIRMATION",
	TRACKING_UPDATED = "TRACKING_UPDATED",
	ORDER_CONFIRMATION = "ORDER_CONFIRMATION",
	ORDER_CANCEL = "ORDER_CANCEL",
	ORDER_REFUND = "ORDER_REFUND",
	FULFILLMENT_CONFIRMATION = "FULFILLMENT_CONFIRMATION",
	DIGITAL_LINKS = "DIGITAL_LINKS"
}
/** An enumeration. */
export const enum OrderEventsEnum {
	DRAFT_CREATED = "DRAFT_CREATED",
	DRAFT_CREATED_FROM_REPLACE = "DRAFT_CREATED_FROM_REPLACE",
	ADDED_PRODUCTS = "ADDED_PRODUCTS",
	REMOVED_PRODUCTS = "REMOVED_PRODUCTS",
	PLACED = "PLACED",
	PLACED_FROM_DRAFT = "PLACED_FROM_DRAFT",
	OVERSOLD_ITEMS = "OVERSOLD_ITEMS",
	CANCELED = "CANCELED",
	ORDER_MARKED_AS_PAID = "ORDER_MARKED_AS_PAID",
	ORDER_FULLY_PAID = "ORDER_FULLY_PAID",
	ORDER_REPLACEMENT_CREATED = "ORDER_REPLACEMENT_CREATED",
	ORDER_DISCOUNT_ADDED = "ORDER_DISCOUNT_ADDED",
	ORDER_DISCOUNT_AUTOMATICALLY_UPDATED = "ORDER_DISCOUNT_AUTOMATICALLY_UPDATED",
	ORDER_DISCOUNT_UPDATED = "ORDER_DISCOUNT_UPDATED",
	ORDER_DISCOUNT_DELETED = "ORDER_DISCOUNT_DELETED",
	ORDER_LINE_DISCOUNT_UPDATED = "ORDER_LINE_DISCOUNT_UPDATED",
	ORDER_LINE_DISCOUNT_REMOVED = "ORDER_LINE_DISCOUNT_REMOVED",
	ORDER_LINE_PRODUCT_DELETED = "ORDER_LINE_PRODUCT_DELETED",
	ORDER_LINE_VARIANT_DELETED = "ORDER_LINE_VARIANT_DELETED",
	UPDATED_ADDRESS = "UPDATED_ADDRESS",
	EMAIL_SENT = "EMAIL_SENT",
	CONFIRMED = "CONFIRMED",
	PAYMENT_AUTHORIZED = "PAYMENT_AUTHORIZED",
	PAYMENT_CAPTURED = "PAYMENT_CAPTURED",
	EXTERNAL_SERVICE_NOTIFICATION = "EXTERNAL_SERVICE_NOTIFICATION",
	PAYMENT_REFUNDED = "PAYMENT_REFUNDED",
	PAYMENT_VOIDED = "PAYMENT_VOIDED",
	PAYMENT_FAILED = "PAYMENT_FAILED",
	INVOICE_REQUESTED = "INVOICE_REQUESTED",
	INVOICE_GENERATED = "INVOICE_GENERATED",
	INVOICE_UPDATED = "INVOICE_UPDATED",
	INVOICE_SENT = "INVOICE_SENT",
	FULFILLMENT_CANCELED = "FULFILLMENT_CANCELED",
	FULFILLMENT_RESTOCKED_ITEMS = "FULFILLMENT_RESTOCKED_ITEMS",
	FULFILLMENT_FULFILLED_ITEMS = "FULFILLMENT_FULFILLED_ITEMS",
	FULFILLMENT_REFUNDED = "FULFILLMENT_REFUNDED",
	FULFILLMENT_RETURNED = "FULFILLMENT_RETURNED",
	FULFILLMENT_REPLACED = "FULFILLMENT_REPLACED",
	FULFILLMENT_AWAITS_APPROVAL = "FULFILLMENT_AWAITS_APPROVAL",
	TRACKING_UPDATED = "TRACKING_UPDATED",
	NOTE_ADDED = "NOTE_ADDED",
	OTHER = "OTHER"
}
/** An enumeration. */
export const enum OrderFromCheckoutCreateErrorCode {
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	NOT_FOUND = "NOT_FOUND",
	INSUFFICIENT_STOCK = "INSUFFICIENT_STOCK",
	VOUCHER_NOT_APPLICABLE = "VOUCHER_NOT_APPLICABLE",
	TAX_ERROR = "TAX_ERROR"
}
/** An enumeration. */
export const enum OrderOriginEnum {
	CHECKOUT = "CHECKOUT",
	DRAFT = "DRAFT",
	REISSUE = "REISSUE"
}
/** An enumeration. */
export const enum OrderSettingsErrorCode {
	INVALID = "INVALID"
}
export const enum OrderSortField {
	NUMBER = "NUMBER",
	CREATION_DATE = "CREATION_DATE",
	CUSTOMER = "CUSTOMER",
	PAYMENT = "PAYMENT",
	FULFILLMENT_STATUS = "FULFILLMENT_STATUS"
}
/** An enumeration. */
export const enum OrderStatus {
	DRAFT = "DRAFT",
	UNCONFIRMED = "UNCONFIRMED",
	UNFULFILLED = "UNFULFILLED",
	PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED",
	PARTIALLY_RETURNED = "PARTIALLY_RETURNED",
	RETURNED = "RETURNED",
	FULFILLED = "FULFILLED",
	CANCELED = "CANCELED"
}
export const enum OrderStatusFilter {
	READY_TO_FULFILL = "READY_TO_FULFILL",
	READY_TO_CAPTURE = "READY_TO_CAPTURE",
	UNFULFILLED = "UNFULFILLED",
	UNCONFIRMED = "UNCONFIRMED",
	PARTIALLY_FULFILLED = "PARTIALLY_FULFILLED",
	FULFILLED = "FULFILLED",
	CANCELED = "CANCELED"
}
/** An enumeration. */
export const enum PageErrorCode {
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE",
	DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
	ATTRIBUTE_ALREADY_ASSIGNED = "ATTRIBUTE_ALREADY_ASSIGNED"
}
export const enum PageSortField {
	TITLE = "TITLE",
	SLUG = "SLUG",
	VISIBILITY = "VISIBILITY",
	CREATION_DATE = "CREATION_DATE",
	PUBLICATION_DATE = "PUBLICATION_DATE"
}
export const enum PageTypeSortField {
	NAME = "NAME",
	SLUG = "SLUG"
}
/** An enumeration. */
export const enum PaymentActionEnum {
	CAPTURE = "CAPTURE",
	REFUND = "REFUND",
	VOID = "VOID"
}
/** An enumeration. */
export const enum PaymentChargeStatusEnum {
	NOT_CHARGED = "NOT_CHARGED",
	PENDING = "PENDING",
	PARTIALLY_CHARGED = "PARTIALLY_CHARGED",
	FULLY_CHARGED = "FULLY_CHARGED",
	PARTIALLY_REFUNDED = "PARTIALLY_REFUNDED",
	FULLY_REFUNDED = "FULLY_REFUNDED",
	REFUSED = "REFUSED",
	CANCELLED = "CANCELLED"
}
/** An enumeration. */
export const enum PaymentCreateErrorCode {
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	NOT_FOUND = "NOT_FOUND"
}
/** An enumeration. */
export const enum PaymentErrorCode {
	BILLING_ADDRESS_NOT_SET = "BILLING_ADDRESS_NOT_SET",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE",
	PARTIAL_PAYMENT_NOT_ALLOWED = "PARTIAL_PAYMENT_NOT_ALLOWED",
	SHIPPING_ADDRESS_NOT_SET = "SHIPPING_ADDRESS_NOT_SET",
	INVALID_SHIPPING_METHOD = "INVALID_SHIPPING_METHOD",
	SHIPPING_METHOD_NOT_SET = "SHIPPING_METHOD_NOT_SET",
	PAYMENT_ERROR = "PAYMENT_ERROR",
	NOT_SUPPORTED_GATEWAY = "NOT_SUPPORTED_GATEWAY",
	CHANNEL_INACTIVE = "CHANNEL_INACTIVE",
	BALANCE_CHECK_ERROR = "BALANCE_CHECK_ERROR",
	CHECKOUT_EMAIL_NOT_SET = "CHECKOUT_EMAIL_NOT_SET",
	UNAVAILABLE_VARIANT_IN_CHANNEL = "UNAVAILABLE_VARIANT_IN_CHANNEL",
	NO_CHECKOUT_LINES = "NO_CHECKOUT_LINES"
}
/** An enumeration. */
export const enum PermissionEnum {
	MANAGE_USERS = "MANAGE_USERS",
	MANAGE_STAFF = "MANAGE_STAFF",
	IMPERSONATE_USER = "IMPERSONATE_USER",
	MANAGE_APPS = "MANAGE_APPS",
	MANAGE_CHANNELS = "MANAGE_CHANNELS",
	MANAGE_DISCOUNTS = "MANAGE_DISCOUNTS",
	MANAGE_PLUGINS = "MANAGE_PLUGINS",
	MANAGE_GIFT_CARD = "MANAGE_GIFT_CARD",
	MANAGE_MENUS = "MANAGE_MENUS",
	MANAGE_ORDERS = "MANAGE_ORDERS",
	MANAGE_PAGES = "MANAGE_PAGES",
	MANAGE_PAGE_TYPES_AND_ATTRIBUTES = "MANAGE_PAGE_TYPES_AND_ATTRIBUTES",
	HANDLE_PAYMENTS = "HANDLE_PAYMENTS",
	MANAGE_PRODUCTS = "MANAGE_PRODUCTS",
	MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES = "MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES",
	MANAGE_SHIPPING = "MANAGE_SHIPPING",
	MANAGE_SETTINGS = "MANAGE_SETTINGS",
	MANAGE_TRANSLATIONS = "MANAGE_TRANSLATIONS",
	MANAGE_CHECKOUTS = "MANAGE_CHECKOUTS"
}
/** An enumeration. */
export const enum PermissionGroupErrorCode {
	ASSIGN_NON_STAFF_MEMBER = "ASSIGN_NON_STAFF_MEMBER",
	DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
	CANNOT_REMOVE_FROM_LAST_GROUP = "CANNOT_REMOVE_FROM_LAST_GROUP",
	LEFT_NOT_MANAGEABLE_PERMISSION = "LEFT_NOT_MANAGEABLE_PERMISSION",
	OUT_OF_SCOPE_PERMISSION = "OUT_OF_SCOPE_PERMISSION",
	OUT_OF_SCOPE_USER = "OUT_OF_SCOPE_USER",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE"
}
export const enum PermissionGroupSortField {
	NAME = "NAME"
}
export const enum PluginConfigurationType {
	PER_CHANNEL = "PER_CHANNEL",
	GLOBAL = "GLOBAL"
}
/** An enumeration. */
export const enum PluginErrorCode {
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	PLUGIN_MISCONFIGURED = "PLUGIN_MISCONFIGURED",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE"
}
export const enum PluginSortField {
	NAME = "NAME",
	IS_ACTIVE = "IS_ACTIVE"
}
/** An enumeration. */
export const enum PostalCodeRuleInclusionTypeEnum {
	INCLUDE = "INCLUDE",
	EXCLUDE = "EXCLUDE"
}
export const enum ProductAttributeType {
	PRODUCT = "PRODUCT",
	VARIANT = "VARIANT"
}
/** An enumeration. */
export const enum ProductErrorCode {
	ALREADY_EXISTS = "ALREADY_EXISTS",
	ATTRIBUTE_ALREADY_ASSIGNED = "ATTRIBUTE_ALREADY_ASSIGNED",
	ATTRIBUTE_CANNOT_BE_ASSIGNED = "ATTRIBUTE_CANNOT_BE_ASSIGNED",
	ATTRIBUTE_VARIANTS_DISABLED = "ATTRIBUTE_VARIANTS_DISABLED",
	DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	PRODUCT_WITHOUT_CATEGORY = "PRODUCT_WITHOUT_CATEGORY",
	NOT_PRODUCTS_IMAGE = "NOT_PRODUCTS_IMAGE",
	NOT_PRODUCTS_VARIANT = "NOT_PRODUCTS_VARIANT",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE",
	VARIANT_NO_DIGITAL_CONTENT = "VARIANT_NO_DIGITAL_CONTENT",
	CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT = "CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT",
	PRODUCT_NOT_ASSIGNED_TO_CHANNEL = "PRODUCT_NOT_ASSIGNED_TO_CHANNEL",
	UNSUPPORTED_MEDIA_PROVIDER = "UNSUPPORTED_MEDIA_PROVIDER",
	PREORDER_VARIANT_CANNOT_BE_DEACTIVATED = "PREORDER_VARIANT_CANNOT_BE_DEACTIVATED"
}
export const enum ProductFieldEnum {
	NAME = "NAME",
	DESCRIPTION = "DESCRIPTION",
	PRODUCT_TYPE = "PRODUCT_TYPE",
	CATEGORY = "CATEGORY",
	PRODUCT_WEIGHT = "PRODUCT_WEIGHT",
	COLLECTIONS = "COLLECTIONS",
	CHARGE_TAXES = "CHARGE_TAXES",
	PRODUCT_MEDIA = "PRODUCT_MEDIA",
	VARIANT_ID = "VARIANT_ID",
	VARIANT_SKU = "VARIANT_SKU",
	VARIANT_WEIGHT = "VARIANT_WEIGHT",
	VARIANT_MEDIA = "VARIANT_MEDIA"
}
/** An enumeration. */
export const enum ProductMediaType {
	IMAGE = "IMAGE",
	VIDEO = "VIDEO"
}
export const enum ProductOrderField {
	NAME = "NAME",
	RANK = "RANK",
	PRICE = "PRICE",
	MINIMAL_PRICE = "MINIMAL_PRICE",
	LAST_MODIFIED = "LAST_MODIFIED",
	DATE = "DATE",
	TYPE = "TYPE",
	PUBLISHED = "PUBLISHED",
	PUBLICATION_DATE = "PUBLICATION_DATE",
	COLLECTION = "COLLECTION",
	RATING = "RATING"
}
export const enum ProductTypeConfigurable {
	CONFIGURABLE = "CONFIGURABLE",
	SIMPLE = "SIMPLE"
}
export const enum ProductTypeEnum {
	DIGITAL = "DIGITAL",
	SHIPPABLE = "SHIPPABLE"
}
/** An enumeration. */
export const enum ProductTypeKindEnum {
	NORMAL = "NORMAL",
	GIFT_CARD = "GIFT_CARD"
}
export const enum ProductTypeSortField {
	NAME = "NAME",
	DIGITAL = "DIGITAL",
	SHIPPING_REQUIRED = "SHIPPING_REQUIRED"
}
export const enum ReportingPeriod {
	TODAY = "TODAY",
	THIS_MONTH = "THIS_MONTH"
}
export const enum SaleSortField {
	NAME = "NAME",
	START_DATE = "START_DATE",
	END_DATE = "END_DATE",
	VALUE = "VALUE",
	TYPE = "TYPE"
}
export const enum SaleType {
	FIXED = "FIXED",
	PERCENTAGE = "PERCENTAGE"
}
/** An enumeration. */
export const enum ShippingErrorCode {
	ALREADY_EXISTS = "ALREADY_EXISTS",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	MAX_LESS_THAN_MIN = "MAX_LESS_THAN_MIN",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE",
	DUPLICATED_INPUT_ITEM = "DUPLICATED_INPUT_ITEM"
}
/** An enumeration. */
export const enum ShippingMethodTypeEnum {
	PRICE = "PRICE",
	WEIGHT = "WEIGHT"
}
/** An enumeration. */
export const enum ShopErrorCode {
	ALREADY_EXISTS = "ALREADY_EXISTS",
	CANNOT_FETCH_TAX_RATES = "CANNOT_FETCH_TAX_RATES",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE"
}
export const enum StaffMemberStatus {
	ACTIVE = "ACTIVE",
	DEACTIVATED = "DEACTIVATED"
}
export const enum StockAvailability {
	IN_STOCK = "IN_STOCK",
	OUT_OF_STOCK = "OUT_OF_STOCK"
}
/** An enumeration. */
export const enum StockErrorCode {
	ALREADY_EXISTS = "ALREADY_EXISTS",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE"
}
/** Enum representing the type of a payment storage in a gateway. */
export const enum StorePaymentMethodEnum {
	ON_SESSION = "ON_SESSION",
	OFF_SESSION = "OFF_SESSION",
	NONE = "NONE"
}
/** An enumeration. */
export const enum TimePeriodTypeEnum {
	DAY = "DAY",
	WEEK = "WEEK",
	MONTH = "MONTH",
	YEAR = "YEAR"
}
/** An enumeration. */
export const enum TransactionKind {
	EXTERNAL = "EXTERNAL",
	AUTH = "AUTH",
	PENDING = "PENDING",
	ACTION_TO_CONFIRM = "ACTION_TO_CONFIRM",
	REFUND = "REFUND",
	REFUND_ONGOING = "REFUND_ONGOING",
	CAPTURE = "CAPTURE",
	VOID = "VOID",
	CONFIRM = "CONFIRM",
	CANCEL = "CANCEL"
}
/** An enumeration. */
export const enum TransactionStatus {
	PENDING = "PENDING",
	SUCCESS = "SUCCESS",
	FAILURE = "FAILURE"
}
export const enum TranslatableKinds {
	ATTRIBUTE = "ATTRIBUTE",
	ATTRIBUTE_VALUE = "ATTRIBUTE_VALUE",
	CATEGORY = "CATEGORY",
	COLLECTION = "COLLECTION",
	MENU_ITEM = "MENU_ITEM",
	PAGE = "PAGE",
	PRODUCT = "PRODUCT",
	SALE = "SALE",
	SHIPPING_METHOD = "SHIPPING_METHOD",
	VARIANT = "VARIANT",
	VOUCHER = "VOUCHER"
}
/** An enumeration. */
export const enum TranslationErrorCode {
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED"
}
/** An enumeration. */
export const enum UploadErrorCode {
	GRAPHQL_ERROR = "GRAPHQL_ERROR"
}
export const enum UserSortField {
	FIRST_NAME = "FIRST_NAME",
	LAST_NAME = "LAST_NAME",
	EMAIL = "EMAIL",
	ORDER_COUNT = "ORDER_COUNT"
}
export const enum VariantAttributeScope {
	ALL = "ALL",
	VARIANT_SELECTION = "VARIANT_SELECTION",
	NOT_VARIANT_SELECTION = "NOT_VARIANT_SELECTION"
}
/** An enumeration. */
export const enum VolumeUnitsEnum {
	CUBIC_MILLIMETER = "CUBIC_MILLIMETER",
	CUBIC_CENTIMETER = "CUBIC_CENTIMETER",
	CUBIC_DECIMETER = "CUBIC_DECIMETER",
	CUBIC_METER = "CUBIC_METER",
	LITER = "LITER",
	CUBIC_FOOT = "CUBIC_FOOT",
	CUBIC_INCH = "CUBIC_INCH",
	CUBIC_YARD = "CUBIC_YARD",
	QT = "QT",
	PINT = "PINT",
	FL_OZ = "FL_OZ",
	ACRE_IN = "ACRE_IN",
	ACRE_FT = "ACRE_FT"
}
export const enum VoucherDiscountType {
	FIXED = "FIXED",
	PERCENTAGE = "PERCENTAGE",
	SHIPPING = "SHIPPING"
}
export const enum VoucherSortField {
	CODE = "CODE",
	START_DATE = "START_DATE",
	END_DATE = "END_DATE",
	VALUE = "VALUE",
	TYPE = "TYPE",
	USAGE_LIMIT = "USAGE_LIMIT",
	MINIMUM_SPENT_AMOUNT = "MINIMUM_SPENT_AMOUNT"
}
export const enum VoucherTypeEnum {
	SHIPPING = "SHIPPING",
	ENTIRE_ORDER = "ENTIRE_ORDER",
	SPECIFIC_PRODUCT = "SPECIFIC_PRODUCT"
}
/** An enumeration. */
export const enum WarehouseClickAndCollectOptionEnum {
	DISABLED = "DISABLED",
	LOCAL = "LOCAL",
	ALL = "ALL"
}
/** An enumeration. */
export const enum WarehouseErrorCode {
	ALREADY_EXISTS = "ALREADY_EXISTS",
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE"
}
export const enum WarehouseSortField {
	NAME = "NAME"
}
/** An enumeration. */
export const enum WebhookErrorCode {
	GRAPHQL_ERROR = "GRAPHQL_ERROR",
	INVALID = "INVALID",
	NOT_FOUND = "NOT_FOUND",
	REQUIRED = "REQUIRED",
	UNIQUE = "UNIQUE"
}
/** Enum determining type of webhook. */
export const enum WebhookEventTypeAsyncEnum {
	ANY_EVENTS = "ANY_EVENTS",
	ORDER_CREATED = "ORDER_CREATED",
	ORDER_CONFIRMED = "ORDER_CONFIRMED",
	ORDER_FULLY_PAID = "ORDER_FULLY_PAID",
	ORDER_UPDATED = "ORDER_UPDATED",
	ORDER_CANCELLED = "ORDER_CANCELLED",
	ORDER_FULFILLED = "ORDER_FULFILLED",
	DRAFT_ORDER_CREATED = "DRAFT_ORDER_CREATED",
	DRAFT_ORDER_UPDATED = "DRAFT_ORDER_UPDATED",
	DRAFT_ORDER_DELETED = "DRAFT_ORDER_DELETED",
	SALE_CREATED = "SALE_CREATED",
	SALE_UPDATED = "SALE_UPDATED",
	SALE_DELETED = "SALE_DELETED",
	INVOICE_REQUESTED = "INVOICE_REQUESTED",
	INVOICE_DELETED = "INVOICE_DELETED",
	INVOICE_SENT = "INVOICE_SENT",
	CUSTOMER_CREATED = "CUSTOMER_CREATED",
	CUSTOMER_UPDATED = "CUSTOMER_UPDATED",
	COLLECTION_CREATED = "COLLECTION_CREATED",
	COLLECTION_UPDATED = "COLLECTION_UPDATED",
	COLLECTION_DELETED = "COLLECTION_DELETED",
	PRODUCT_CREATED = "PRODUCT_CREATED",
	PRODUCT_UPDATED = "PRODUCT_UPDATED",
	PRODUCT_DELETED = "PRODUCT_DELETED",
	PRODUCT_VARIANT_CREATED = "PRODUCT_VARIANT_CREATED",
	PRODUCT_VARIANT_UPDATED = "PRODUCT_VARIANT_UPDATED",
	PRODUCT_VARIANT_DELETED = "PRODUCT_VARIANT_DELETED",
	PRODUCT_VARIANT_OUT_OF_STOCK = "PRODUCT_VARIANT_OUT_OF_STOCK",
	PRODUCT_VARIANT_BACK_IN_STOCK = "PRODUCT_VARIANT_BACK_IN_STOCK",
	CHECKOUT_CREATED = "CHECKOUT_CREATED",
	CHECKOUT_UPDATED = "CHECKOUT_UPDATED",
	FULFILLMENT_CREATED = "FULFILLMENT_CREATED",
	FULFILLMENT_CANCELED = "FULFILLMENT_CANCELED",
	NOTIFY_USER = "NOTIFY_USER",
	PAGE_CREATED = "PAGE_CREATED",
	PAGE_UPDATED = "PAGE_UPDATED",
	PAGE_DELETED = "PAGE_DELETED",
	TRANSLATION_CREATED = "TRANSLATION_CREATED",
	TRANSLATION_UPDATED = "TRANSLATION_UPDATED"
}
/** Enum determining type of webhook. */
export const enum WebhookEventTypeEnum {
	ANY_EVENTS = "ANY_EVENTS",
	ORDER_CREATED = "ORDER_CREATED",
	ORDER_CONFIRMED = "ORDER_CONFIRMED",
	ORDER_FULLY_PAID = "ORDER_FULLY_PAID",
	ORDER_UPDATED = "ORDER_UPDATED",
	ORDER_CANCELLED = "ORDER_CANCELLED",
	ORDER_FULFILLED = "ORDER_FULFILLED",
	DRAFT_ORDER_CREATED = "DRAFT_ORDER_CREATED",
	DRAFT_ORDER_UPDATED = "DRAFT_ORDER_UPDATED",
	DRAFT_ORDER_DELETED = "DRAFT_ORDER_DELETED",
	SALE_CREATED = "SALE_CREATED",
	SALE_UPDATED = "SALE_UPDATED",
	SALE_DELETED = "SALE_DELETED",
	INVOICE_REQUESTED = "INVOICE_REQUESTED",
	INVOICE_DELETED = "INVOICE_DELETED",
	INVOICE_SENT = "INVOICE_SENT",
	CUSTOMER_CREATED = "CUSTOMER_CREATED",
	CUSTOMER_UPDATED = "CUSTOMER_UPDATED",
	COLLECTION_CREATED = "COLLECTION_CREATED",
	COLLECTION_UPDATED = "COLLECTION_UPDATED",
	COLLECTION_DELETED = "COLLECTION_DELETED",
	PRODUCT_CREATED = "PRODUCT_CREATED",
	PRODUCT_UPDATED = "PRODUCT_UPDATED",
	PRODUCT_DELETED = "PRODUCT_DELETED",
	PRODUCT_VARIANT_CREATED = "PRODUCT_VARIANT_CREATED",
	PRODUCT_VARIANT_UPDATED = "PRODUCT_VARIANT_UPDATED",
	PRODUCT_VARIANT_DELETED = "PRODUCT_VARIANT_DELETED",
	PRODUCT_VARIANT_OUT_OF_STOCK = "PRODUCT_VARIANT_OUT_OF_STOCK",
	PRODUCT_VARIANT_BACK_IN_STOCK = "PRODUCT_VARIANT_BACK_IN_STOCK",
	CHECKOUT_CREATED = "CHECKOUT_CREATED",
	CHECKOUT_UPDATED = "CHECKOUT_UPDATED",
	FULFILLMENT_CREATED = "FULFILLMENT_CREATED",
	FULFILLMENT_CANCELED = "FULFILLMENT_CANCELED",
	NOTIFY_USER = "NOTIFY_USER",
	PAGE_CREATED = "PAGE_CREATED",
	PAGE_UPDATED = "PAGE_UPDATED",
	PAGE_DELETED = "PAGE_DELETED",
	TRANSLATION_CREATED = "TRANSLATION_CREATED",
	TRANSLATION_UPDATED = "TRANSLATION_UPDATED",
	PAYMENT_AUTHORIZE = "PAYMENT_AUTHORIZE",
	PAYMENT_CAPTURE = "PAYMENT_CAPTURE",
	PAYMENT_CONFIRM = "PAYMENT_CONFIRM",
	PAYMENT_LIST_GATEWAYS = "PAYMENT_LIST_GATEWAYS",
	PAYMENT_PROCESS = "PAYMENT_PROCESS",
	PAYMENT_REFUND = "PAYMENT_REFUND",
	PAYMENT_VOID = "PAYMENT_VOID",
	SHIPPING_LIST_METHODS_FOR_CHECKOUT = "SHIPPING_LIST_METHODS_FOR_CHECKOUT",
	ORDER_FILTER_SHIPPING_METHODS = "ORDER_FILTER_SHIPPING_METHODS",
	CHECKOUT_FILTER_SHIPPING_METHODS = "CHECKOUT_FILTER_SHIPPING_METHODS"
}
/** Enum determining type of webhook. */
export const enum WebhookEventTypeSyncEnum {
	PAYMENT_AUTHORIZE = "PAYMENT_AUTHORIZE",
	PAYMENT_CAPTURE = "PAYMENT_CAPTURE",
	PAYMENT_CONFIRM = "PAYMENT_CONFIRM",
	PAYMENT_LIST_GATEWAYS = "PAYMENT_LIST_GATEWAYS",
	PAYMENT_PROCESS = "PAYMENT_PROCESS",
	PAYMENT_REFUND = "PAYMENT_REFUND",
	PAYMENT_VOID = "PAYMENT_VOID",
	SHIPPING_LIST_METHODS_FOR_CHECKOUT = "SHIPPING_LIST_METHODS_FOR_CHECKOUT",
	ORDER_FILTER_SHIPPING_METHODS = "ORDER_FILTER_SHIPPING_METHODS",
	CHECKOUT_FILTER_SHIPPING_METHODS = "CHECKOUT_FILTER_SHIPPING_METHODS"
}
/** An enumeration. */
export const enum WebhookSampleEventTypeEnum {
	ORDER_CREATED = "ORDER_CREATED",
	ORDER_CONFIRMED = "ORDER_CONFIRMED",
	ORDER_FULLY_PAID = "ORDER_FULLY_PAID",
	ORDER_UPDATED = "ORDER_UPDATED",
	ORDER_CANCELLED = "ORDER_CANCELLED",
	ORDER_FULFILLED = "ORDER_FULFILLED",
	DRAFT_ORDER_CREATED = "DRAFT_ORDER_CREATED",
	DRAFT_ORDER_UPDATED = "DRAFT_ORDER_UPDATED",
	DRAFT_ORDER_DELETED = "DRAFT_ORDER_DELETED",
	SALE_CREATED = "SALE_CREATED",
	SALE_UPDATED = "SALE_UPDATED",
	SALE_DELETED = "SALE_DELETED",
	INVOICE_REQUESTED = "INVOICE_REQUESTED",
	INVOICE_DELETED = "INVOICE_DELETED",
	INVOICE_SENT = "INVOICE_SENT",
	CUSTOMER_CREATED = "CUSTOMER_CREATED",
	CUSTOMER_UPDATED = "CUSTOMER_UPDATED",
	COLLECTION_CREATED = "COLLECTION_CREATED",
	COLLECTION_UPDATED = "COLLECTION_UPDATED",
	COLLECTION_DELETED = "COLLECTION_DELETED",
	PRODUCT_CREATED = "PRODUCT_CREATED",
	PRODUCT_UPDATED = "PRODUCT_UPDATED",
	PRODUCT_DELETED = "PRODUCT_DELETED",
	PRODUCT_VARIANT_CREATED = "PRODUCT_VARIANT_CREATED",
	PRODUCT_VARIANT_UPDATED = "PRODUCT_VARIANT_UPDATED",
	PRODUCT_VARIANT_DELETED = "PRODUCT_VARIANT_DELETED",
	PRODUCT_VARIANT_OUT_OF_STOCK = "PRODUCT_VARIANT_OUT_OF_STOCK",
	PRODUCT_VARIANT_BACK_IN_STOCK = "PRODUCT_VARIANT_BACK_IN_STOCK",
	CHECKOUT_CREATED = "CHECKOUT_CREATED",
	CHECKOUT_UPDATED = "CHECKOUT_UPDATED",
	FULFILLMENT_CREATED = "FULFILLMENT_CREATED",
	FULFILLMENT_CANCELED = "FULFILLMENT_CANCELED",
	NOTIFY_USER = "NOTIFY_USER",
	PAGE_CREATED = "PAGE_CREATED",
	PAGE_UPDATED = "PAGE_UPDATED",
	PAGE_DELETED = "PAGE_DELETED",
	TRANSLATION_CREATED = "TRANSLATION_CREATED",
	TRANSLATION_UPDATED = "TRANSLATION_UPDATED"
}
/** An enumeration. */
export const enum WeightUnitsEnum {
	G = "G",
	LB = "LB",
	OZ = "OZ",
	KG = "KG",
	TONNE = "TONNE"
}
export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: boolean;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P]>
          : {}
        : never;
    }[keyof DST] &
      {
        [P in keyof Omit<
          Pick<
            SRC,
            {
              [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
            }[keyof DST]
          >,
          '__typename'
        >]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationOptions = {
  variables?: Record<string, any>;
  operationName?: string;
};
export type SubscriptionToGraphQL<Z, T> = {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z>; errors?: string[] }) => void) => void;
  open: () => void;
};
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (query: string) => any;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .forEach((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).forEach((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${operationName ? ' ' + operationName : ''}${inspectVariables(buildQuery(tName, o))}`;
  

export const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  options?: OperationOptions,
) => fn(queryConstruct(t, tName, options?.operationName)(o), options?.variables).then((r:any) => { 
  seekForAliases(r)
  return r
});


export const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, options?: OperationOptions) =>
  fn(queryConstruct(t, tName, options?.operationName)(o));


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


export const resolverFor = <
  X,
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
>(
  type: T,
  field: Z,
  fn: (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : any,
) => fn as (args?: any,source?: any) => any;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
  ) => {
    try {
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e: (args: any) => void) => {
          ws.onclose = e;
        },
        error: (e: (args: any) => void) => {
          ws.onerror = e;
        },
        open: (e: () => void) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented');
    }
  };



const allOperations = {
    "query": "Query",
    "mutation": "Mutation"
}

export type GenericOperation<O> = O extends 'query'
  ? "Query"
  : O extends 'mutation'
  ? "Mutation"
  : never

export const Thunder = (fn: FetchFunction) => <
  O extends 'query' | 'mutation',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) =>
  fullChainConstruct(fn)(operation, allOperations[operation])(o as any, ops) as Promise<InputType<GraphQLTypes[R], Z>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));  
  
export const SubscriptionThunder = (fn: SubscriptionFunction) => <
  O extends 'query' | 'mutation',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(
  o: Z | ValueTypes[R],
  ops?: OperationOptions
)=>
  fullSubscriptionConstruct(fn)(operation, allOperations[operation])(
    o as any,
    ops,
  ) as SubscriptionToGraphQL<Z, GraphQLTypes[R]>;

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends 'query' | 'mutation',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
  o: Z | ValueTypes[R],
  operationName?: string,
) => queryConstruct(operation, allOperations[operation], operationName)(o as any);
export const Selector = <T extends keyof ValueTypes>(key: T) => ZeusSelect<ValueTypes[T]>();
  