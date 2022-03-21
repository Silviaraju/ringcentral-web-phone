[SIP.js](../README.md) / [Exports](../modules.md) / OutgoingByeRequest

# Interface: OutgoingByeRequest

Outgoing BYE request.

## Hierarchy

- [`OutgoingRequest`](OutgoingRequest.md)

  ↳ **`OutgoingByeRequest`**

## Implemented by

- [`ByeUserAgentClient`](../classes/ByeUserAgentClient.md)

## Table of contents

### Properties

- [delegate](OutgoingByeRequest.md#delegate)
- [message](OutgoingByeRequest.md#message)

### Methods

- [dispose](OutgoingByeRequest.md#dispose)
- [cancel](OutgoingByeRequest.md#cancel)

## Properties

### delegate

• `Optional` **delegate**: [`OutgoingRequestDelegate`](OutgoingRequestDelegate.md)

Delegate providing custom handling of this outgoing request.

#### Inherited from

[OutgoingRequest](OutgoingRequest.md).[delegate](OutgoingRequest.md#delegate)

#### Defined in

sip.js/lib/core/messages/outgoing-request.d.ts:13

___

### message

• `Readonly` **message**: [`OutgoingRequestMessage`](../classes/OutgoingRequestMessage.md)

The outgoing message.

#### Inherited from

[OutgoingRequest](OutgoingRequest.md).[message](OutgoingRequest.md#message)

#### Defined in

sip.js/lib/core/messages/outgoing-request.d.ts:15

## Methods

### dispose

▸ **dispose**(): `void`

Destroy request.

#### Returns

`void`

#### Inherited from

[OutgoingRequest](OutgoingRequest.md).[dispose](OutgoingRequest.md#dispose)

#### Defined in

sip.js/lib/core/messages/outgoing-request.d.ts:19

___

### cancel

▸ **cancel**(`reason?`, `options?`): `void`

Sends a CANCEL message targeting this request to the UAS.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason?` | `string` | Reason for canceling request. |
| `options?` | [`RequestOptions`](RequestOptions.md) | Request options bucket. |

#### Returns

`void`

#### Inherited from

[OutgoingRequest](OutgoingRequest.md).[cancel](OutgoingRequest.md#cancel)

#### Defined in

sip.js/lib/core/messages/outgoing-request.d.ts:25