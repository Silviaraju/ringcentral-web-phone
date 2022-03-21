[SIP.js](../README.md) / [Exports](../modules.md) / IncomingRequestMessage

# Class: IncomingRequestMessage

Incoming request message.

## Hierarchy

- [`IncomingMessage`](IncomingMessage.md)

  ↳ **`IncomingRequestMessage`**

## Table of contents

### Constructors

- [constructor](IncomingRequestMessage.md#constructor)

### Properties

- [viaBranch](IncomingRequestMessage.md#viabranch)
- [method](IncomingRequestMessage.md#method)
- [body](IncomingRequestMessage.md#body)
- [toTag](IncomingRequestMessage.md#totag)
- [to](IncomingRequestMessage.md#to)
- [fromTag](IncomingRequestMessage.md#fromtag)
- [from](IncomingRequestMessage.md#from)
- [callId](IncomingRequestMessage.md#callid)
- [cseq](IncomingRequestMessage.md#cseq)
- [via](IncomingRequestMessage.md#via)
- [headers](IncomingRequestMessage.md#headers)
- [referTo](IncomingRequestMessage.md#referto)
- [data](IncomingRequestMessage.md#data)
- [ruri](IncomingRequestMessage.md#ruri)

### Methods

- [addHeader](IncomingRequestMessage.md#addheader)
- [getHeader](IncomingRequestMessage.md#getheader)
- [getHeaders](IncomingRequestMessage.md#getheaders)
- [hasHeader](IncomingRequestMessage.md#hasheader)
- [parseHeader](IncomingRequestMessage.md#parseheader)
- [s](IncomingRequestMessage.md#s)
- [setHeader](IncomingRequestMessage.md#setheader)
- [toString](IncomingRequestMessage.md#tostring)

## Constructors

### constructor

• **new IncomingRequestMessage**()

#### Overrides

[IncomingMessage](IncomingMessage.md).[constructor](IncomingMessage.md#constructor)

#### Defined in

sip.js/lib/core/messages/incoming-request-message.d.ts:9

## Properties

### viaBranch

• **viaBranch**: `string`

#### Inherited from

[IncomingMessage](IncomingMessage.md).[viaBranch](IncomingMessage.md#viabranch)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:7

___

### method

• **method**: `string`

#### Inherited from

[IncomingMessage](IncomingMessage.md).[method](IncomingMessage.md#method)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:8

___

### body

• **body**: `string`

#### Inherited from

[IncomingMessage](IncomingMessage.md).[body](IncomingMessage.md#body)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:9

___

### toTag

• **toTag**: `string`

#### Inherited from

[IncomingMessage](IncomingMessage.md).[toTag](IncomingMessage.md#totag)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:10

___

### to

• **to**: [`NameAddrHeader`](NameAddrHeader.md)

#### Inherited from

[IncomingMessage](IncomingMessage.md).[to](IncomingMessage.md#to)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:11

___

### fromTag

• **fromTag**: `string`

#### Inherited from

[IncomingMessage](IncomingMessage.md).[fromTag](IncomingMessage.md#fromtag)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:12

___

### from

• **from**: [`NameAddrHeader`](NameAddrHeader.md)

#### Inherited from

[IncomingMessage](IncomingMessage.md).[from](IncomingMessage.md#from)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:13

___

### callId

• **callId**: `string`

#### Inherited from

[IncomingMessage](IncomingMessage.md).[callId](IncomingMessage.md#callid)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:14

___

### cseq

• **cseq**: `number`

#### Inherited from

[IncomingMessage](IncomingMessage.md).[cseq](IncomingMessage.md#cseq)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:15

___

### via

• **via**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |

#### Inherited from

[IncomingMessage](IncomingMessage.md).[via](IncomingMessage.md#via)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:16

___

### headers

• **headers**: `Object`

#### Index signature

▪ [name: `string`]: { `parsed?`: `any` ; `raw`: `string`  }[]

#### Inherited from

[IncomingMessage](IncomingMessage.md).[headers](IncomingMessage.md#headers)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:20

___

### referTo

• **referTo**: `string`

#### Inherited from

[IncomingMessage](IncomingMessage.md).[referTo](IncomingMessage.md#referto)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:26

___

### data

• **data**: `string`

#### Inherited from

[IncomingMessage](IncomingMessage.md).[data](IncomingMessage.md#data)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:27

___

### ruri

• **ruri**: [`URI`](URI.md)

#### Defined in

sip.js/lib/core/messages/incoming-request-message.d.ts:8

## Methods

### addHeader

▸ **addHeader**(`name`, `value`): `void`

Insert a header of the given name and value into the last position of the
header array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | header name |
| `value` | `string` | header value |

#### Returns

`void`

#### Inherited from

[IncomingMessage](IncomingMessage.md).[addHeader](IncomingMessage.md#addheader)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:34

___

### getHeader

▸ **getHeader**(`name`): `string`

Get the value of the given header name at the given position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | header name |

#### Returns

`string`

Returns the specified header, undefined if header doesn't exist.

#### Inherited from

[IncomingMessage](IncomingMessage.md).[getHeader](IncomingMessage.md#getheader)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:40

___

### getHeaders

▸ **getHeaders**(`name`): `string`[]

Get the header/s of the given name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | header name |

#### Returns

`string`[]

Array - with all the headers of the specified name.

#### Inherited from

[IncomingMessage](IncomingMessage.md).[getHeaders](IncomingMessage.md#getheaders)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:46

___

### hasHeader

▸ **hasHeader**(`name`): `boolean`

Verify the existence of the given header.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | header name |

#### Returns

`boolean`

true if header with given name exists, false otherwise

#### Inherited from

[IncomingMessage](IncomingMessage.md).[hasHeader](IncomingMessage.md#hasheader)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:52

___

### parseHeader

▸ **parseHeader**(`name`, `idx?`): `any`

Parse the given header on the given index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | header name |
| `idx?` | `number` | header index |

#### Returns

`any`

Parsed header object, undefined if the
  header is not present or in case of a parsing error.

#### Inherited from

[IncomingMessage](IncomingMessage.md).[parseHeader](IncomingMessage.md#parseheader)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:60

___

### s

▸ **s**(`name`, `idx?`): `any`

Message Header attribute selector. Alias of parseHeader.

**`example`**
message.s('via',3).port

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | header name |
| `idx?` | `number` | header index |

#### Returns

`any`

Parsed header object, undefined if the
  header is not present or in case of a parsing error.

#### Inherited from

[IncomingMessage](IncomingMessage.md).[s](IncomingMessage.md#s)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:71

___

### setHeader

▸ **setHeader**(`name`, `value`): `void`

Replace the value of the given header by the value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | header name |
| `value` | `string` | header value |

#### Returns

`void`

#### Inherited from

[IncomingMessage](IncomingMessage.md).[setHeader](IncomingMessage.md#setheader)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:77

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[IncomingMessage](IncomingMessage.md).[toString](IncomingMessage.md#tostring)

#### Defined in

sip.js/lib/core/messages/incoming-message.d.ts:78