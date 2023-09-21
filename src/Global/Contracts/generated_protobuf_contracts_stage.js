/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.BountyProgress = (function() {

    /**
     * Properties of a BountyProgress.
     * @exports IBountyProgress
     * @interface IBountyProgress
     * @property {number|null} [ProgressionHash] BountyProgress ProgressionHash
     * @property {number|null} [AmountToProgress] BountyProgress AmountToProgress
     * @property {string|null} [BountyIdentifier] BountyProgress BountyIdentifier
     */

    /**
     * Constructs a new BountyProgress.
     * @exports BountyProgress
     * @classdesc Represents a BountyProgress.
     * @implements IBountyProgress
     * @constructor
     * @param {IBountyProgress=} [properties] Properties to set
     */
    function BountyProgress(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BountyProgress ProgressionHash.
     * @member {number} ProgressionHash
     * @memberof BountyProgress
     * @instance
     */
    BountyProgress.prototype.ProgressionHash = 0;

    /**
     * BountyProgress AmountToProgress.
     * @member {number} AmountToProgress
     * @memberof BountyProgress
     * @instance
     */
    BountyProgress.prototype.AmountToProgress = 0;

    /**
     * BountyProgress BountyIdentifier.
     * @member {string} BountyIdentifier
     * @memberof BountyProgress
     * @instance
     */
    BountyProgress.prototype.BountyIdentifier = "";

    /**
     * Creates a new BountyProgress instance using the specified properties.
     * @function create
     * @memberof BountyProgress
     * @static
     * @param {IBountyProgress=} [properties] Properties to set
     * @returns {BountyProgress} BountyProgress instance
     */
    BountyProgress.create = function create(properties) {
        return new BountyProgress(properties);
    };

    /**
     * Encodes the specified BountyProgress message. Does not implicitly {@link BountyProgress.verify|verify} messages.
     * @function encode
     * @memberof BountyProgress
     * @static
     * @param {IBountyProgress} message BountyProgress message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BountyProgress.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ProgressionHash != null && message.hasOwnProperty("ProgressionHash"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ProgressionHash);
        if (message.AmountToProgress != null && message.hasOwnProperty("AmountToProgress"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.AmountToProgress);
        if (message.BountyIdentifier != null && message.hasOwnProperty("BountyIdentifier"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.BountyIdentifier);
        return writer;
    };

    /**
     * Encodes the specified BountyProgress message, length delimited. Does not implicitly {@link BountyProgress.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BountyProgress
     * @static
     * @param {IBountyProgress} message BountyProgress message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BountyProgress.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BountyProgress message from the specified reader or buffer.
     * @function decode
     * @memberof BountyProgress
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BountyProgress} BountyProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BountyProgress.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BountyProgress();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ProgressionHash = reader.uint32();
                break;
            case 2:
                message.AmountToProgress = reader.int32();
                break;
            case 3:
                message.BountyIdentifier = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BountyProgress message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BountyProgress
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BountyProgress} BountyProgress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BountyProgress.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BountyProgress message.
     * @function verify
     * @memberof BountyProgress
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BountyProgress.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ProgressionHash != null && message.hasOwnProperty("ProgressionHash"))
            if (!$util.isInteger(message.ProgressionHash))
                return "ProgressionHash: integer expected";
        if (message.AmountToProgress != null && message.hasOwnProperty("AmountToProgress"))
            if (!$util.isInteger(message.AmountToProgress))
                return "AmountToProgress: integer expected";
        if (message.BountyIdentifier != null && message.hasOwnProperty("BountyIdentifier"))
            if (!$util.isString(message.BountyIdentifier))
                return "BountyIdentifier: string expected";
        return null;
    };

    /**
     * Creates a BountyProgress message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BountyProgress
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BountyProgress} BountyProgress
     */
    BountyProgress.fromObject = function fromObject(object) {
        if (object instanceof $root.BountyProgress)
            return object;
        var message = new $root.BountyProgress();
        if (object.ProgressionHash != null)
            message.ProgressionHash = object.ProgressionHash >>> 0;
        if (object.AmountToProgress != null)
            message.AmountToProgress = object.AmountToProgress | 0;
        if (object.BountyIdentifier != null)
            message.BountyIdentifier = String(object.BountyIdentifier);
        return message;
    };

    /**
     * Creates a plain object from a BountyProgress message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BountyProgress
     * @static
     * @param {BountyProgress} message BountyProgress
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BountyProgress.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ProgressionHash = 0;
            object.AmountToProgress = 0;
            object.BountyIdentifier = "";
        }
        if (message.ProgressionHash != null && message.hasOwnProperty("ProgressionHash"))
            object.ProgressionHash = message.ProgressionHash;
        if (message.AmountToProgress != null && message.hasOwnProperty("AmountToProgress"))
            object.AmountToProgress = message.AmountToProgress;
        if (message.BountyIdentifier != null && message.hasOwnProperty("BountyIdentifier"))
            object.BountyIdentifier = message.BountyIdentifier;
        return object;
    };

    /**
     * Converts this BountyProgress to JSON.
     * @function toJSON
     * @memberof BountyProgress
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BountyProgress.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BountyProgress;
})();

$root.DestinyObjectiveSummary = (function() {

    /**
     * Properties of a DestinyObjectiveSummary.
     * @exports IDestinyObjectiveSummary
     * @interface IDestinyObjectiveSummary
     * @property {number|null} [ObjectiveHash] DestinyObjectiveSummary ObjectiveHash
     * @property {number|null} [Progress] DestinyObjectiveSummary Progress
     * @property {number|null} [CompletionValue] DestinyObjectiveSummary CompletionValue
     * @property {boolean|null} [Completed] DestinyObjectiveSummary Completed
     */

    /**
     * Constructs a new DestinyObjectiveSummary.
     * @exports DestinyObjectiveSummary
     * @classdesc Represents a DestinyObjectiveSummary.
     * @implements IDestinyObjectiveSummary
     * @constructor
     * @param {IDestinyObjectiveSummary=} [properties] Properties to set
     */
    function DestinyObjectiveSummary(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DestinyObjectiveSummary ObjectiveHash.
     * @member {number} ObjectiveHash
     * @memberof DestinyObjectiveSummary
     * @instance
     */
    DestinyObjectiveSummary.prototype.ObjectiveHash = 0;

    /**
     * DestinyObjectiveSummary Progress.
     * @member {number} Progress
     * @memberof DestinyObjectiveSummary
     * @instance
     */
    DestinyObjectiveSummary.prototype.Progress = 0;

    /**
     * DestinyObjectiveSummary CompletionValue.
     * @member {number} CompletionValue
     * @memberof DestinyObjectiveSummary
     * @instance
     */
    DestinyObjectiveSummary.prototype.CompletionValue = 0;

    /**
     * DestinyObjectiveSummary Completed.
     * @member {boolean} Completed
     * @memberof DestinyObjectiveSummary
     * @instance
     */
    DestinyObjectiveSummary.prototype.Completed = false;

    /**
     * Creates a new DestinyObjectiveSummary instance using the specified properties.
     * @function create
     * @memberof DestinyObjectiveSummary
     * @static
     * @param {IDestinyObjectiveSummary=} [properties] Properties to set
     * @returns {DestinyObjectiveSummary} DestinyObjectiveSummary instance
     */
    DestinyObjectiveSummary.create = function create(properties) {
        return new DestinyObjectiveSummary(properties);
    };

    /**
     * Encodes the specified DestinyObjectiveSummary message. Does not implicitly {@link DestinyObjectiveSummary.verify|verify} messages.
     * @function encode
     * @memberof DestinyObjectiveSummary
     * @static
     * @param {IDestinyObjectiveSummary} message DestinyObjectiveSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyObjectiveSummary.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ObjectiveHash != null && message.hasOwnProperty("ObjectiveHash"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ObjectiveHash);
        if (message.Progress != null && message.hasOwnProperty("Progress"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Progress);
        if (message.CompletionValue != null && message.hasOwnProperty("CompletionValue"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.CompletionValue);
        if (message.Completed != null && message.hasOwnProperty("Completed"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.Completed);
        return writer;
    };

    /**
     * Encodes the specified DestinyObjectiveSummary message, length delimited. Does not implicitly {@link DestinyObjectiveSummary.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DestinyObjectiveSummary
     * @static
     * @param {IDestinyObjectiveSummary} message DestinyObjectiveSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyObjectiveSummary.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DestinyObjectiveSummary message from the specified reader or buffer.
     * @function decode
     * @memberof DestinyObjectiveSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DestinyObjectiveSummary} DestinyObjectiveSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyObjectiveSummary.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DestinyObjectiveSummary();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ObjectiveHash = reader.uint32();
                break;
            case 2:
                message.Progress = reader.int32();
                break;
            case 3:
                message.CompletionValue = reader.int32();
                break;
            case 4:
                message.Completed = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DestinyObjectiveSummary message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DestinyObjectiveSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DestinyObjectiveSummary} DestinyObjectiveSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyObjectiveSummary.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DestinyObjectiveSummary message.
     * @function verify
     * @memberof DestinyObjectiveSummary
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DestinyObjectiveSummary.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ObjectiveHash != null && message.hasOwnProperty("ObjectiveHash"))
            if (!$util.isInteger(message.ObjectiveHash))
                return "ObjectiveHash: integer expected";
        if (message.Progress != null && message.hasOwnProperty("Progress"))
            if (!$util.isInteger(message.Progress))
                return "Progress: integer expected";
        if (message.CompletionValue != null && message.hasOwnProperty("CompletionValue"))
            if (!$util.isInteger(message.CompletionValue))
                return "CompletionValue: integer expected";
        if (message.Completed != null && message.hasOwnProperty("Completed"))
            if (typeof message.Completed !== "boolean")
                return "Completed: boolean expected";
        return null;
    };

    /**
     * Creates a DestinyObjectiveSummary message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DestinyObjectiveSummary
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DestinyObjectiveSummary} DestinyObjectiveSummary
     */
    DestinyObjectiveSummary.fromObject = function fromObject(object) {
        if (object instanceof $root.DestinyObjectiveSummary)
            return object;
        var message = new $root.DestinyObjectiveSummary();
        if (object.ObjectiveHash != null)
            message.ObjectiveHash = object.ObjectiveHash >>> 0;
        if (object.Progress != null)
            message.Progress = object.Progress | 0;
        if (object.CompletionValue != null)
            message.CompletionValue = object.CompletionValue | 0;
        if (object.Completed != null)
            message.Completed = Boolean(object.Completed);
        return message;
    };

    /**
     * Creates a plain object from a DestinyObjectiveSummary message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DestinyObjectiveSummary
     * @static
     * @param {DestinyObjectiveSummary} message DestinyObjectiveSummary
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DestinyObjectiveSummary.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ObjectiveHash = 0;
            object.Progress = 0;
            object.CompletionValue = 0;
            object.Completed = false;
        }
        if (message.ObjectiveHash != null && message.hasOwnProperty("ObjectiveHash"))
            object.ObjectiveHash = message.ObjectiveHash;
        if (message.Progress != null && message.hasOwnProperty("Progress"))
            object.Progress = message.Progress;
        if (message.CompletionValue != null && message.hasOwnProperty("CompletionValue"))
            object.CompletionValue = message.CompletionValue;
        if (message.Completed != null && message.hasOwnProperty("Completed"))
            object.Completed = message.Completed;
        return object;
    };

    /**
     * Converts this DestinyObjectiveSummary to JSON.
     * @function toJSON
     * @memberof DestinyObjectiveSummary
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DestinyObjectiveSummary.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DestinyObjectiveSummary;
})();

$root.DestinyBountySummary = (function() {

    /**
     * Properties of a DestinyBountySummary.
     * @exports IDestinyBountySummary
     * @interface IDestinyBountySummary
     * @property {number|null} [ItemHash] DestinyBountySummary ItemHash
     * @property {Array.<IDestinyObjectiveSummary>|null} [Objectives] DestinyBountySummary Objectives
     * @property {boolean|null} [Completed] DestinyBountySummary Completed
     * @property {boolean|null} [Redeemed] DestinyBountySummary Redeemed
     */

    /**
     * Constructs a new DestinyBountySummary.
     * @exports DestinyBountySummary
     * @classdesc Represents a DestinyBountySummary.
     * @implements IDestinyBountySummary
     * @constructor
     * @param {IDestinyBountySummary=} [properties] Properties to set
     */
    function DestinyBountySummary(properties) {
        this.Objectives = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DestinyBountySummary ItemHash.
     * @member {number} ItemHash
     * @memberof DestinyBountySummary
     * @instance
     */
    DestinyBountySummary.prototype.ItemHash = 0;

    /**
     * DestinyBountySummary Objectives.
     * @member {Array.<IDestinyObjectiveSummary>} Objectives
     * @memberof DestinyBountySummary
     * @instance
     */
    DestinyBountySummary.prototype.Objectives = $util.emptyArray;

    /**
     * DestinyBountySummary Completed.
     * @member {boolean} Completed
     * @memberof DestinyBountySummary
     * @instance
     */
    DestinyBountySummary.prototype.Completed = false;

    /**
     * DestinyBountySummary Redeemed.
     * @member {boolean} Redeemed
     * @memberof DestinyBountySummary
     * @instance
     */
    DestinyBountySummary.prototype.Redeemed = false;

    /**
     * Creates a new DestinyBountySummary instance using the specified properties.
     * @function create
     * @memberof DestinyBountySummary
     * @static
     * @param {IDestinyBountySummary=} [properties] Properties to set
     * @returns {DestinyBountySummary} DestinyBountySummary instance
     */
    DestinyBountySummary.create = function create(properties) {
        return new DestinyBountySummary(properties);
    };

    /**
     * Encodes the specified DestinyBountySummary message. Does not implicitly {@link DestinyBountySummary.verify|verify} messages.
     * @function encode
     * @memberof DestinyBountySummary
     * @static
     * @param {IDestinyBountySummary} message DestinyBountySummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyBountySummary.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ItemHash != null && message.hasOwnProperty("ItemHash"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ItemHash);
        if (message.Objectives != null && message.Objectives.length)
            for (var i = 0; i < message.Objectives.length; ++i)
                $root.DestinyObjectiveSummary.encode(message.Objectives[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.Completed != null && message.hasOwnProperty("Completed"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.Completed);
        if (message.Redeemed != null && message.hasOwnProperty("Redeemed"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.Redeemed);
        return writer;
    };

    /**
     * Encodes the specified DestinyBountySummary message, length delimited. Does not implicitly {@link DestinyBountySummary.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DestinyBountySummary
     * @static
     * @param {IDestinyBountySummary} message DestinyBountySummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyBountySummary.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DestinyBountySummary message from the specified reader or buffer.
     * @function decode
     * @memberof DestinyBountySummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DestinyBountySummary} DestinyBountySummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyBountySummary.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DestinyBountySummary();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ItemHash = reader.uint32();
                break;
            case 2:
                if (!(message.Objectives && message.Objectives.length))
                    message.Objectives = [];
                message.Objectives.push($root.DestinyObjectiveSummary.decode(reader, reader.uint32()));
                break;
            case 3:
                message.Completed = reader.bool();
                break;
            case 4:
                message.Redeemed = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DestinyBountySummary message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DestinyBountySummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DestinyBountySummary} DestinyBountySummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyBountySummary.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DestinyBountySummary message.
     * @function verify
     * @memberof DestinyBountySummary
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DestinyBountySummary.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ItemHash != null && message.hasOwnProperty("ItemHash"))
            if (!$util.isInteger(message.ItemHash))
                return "ItemHash: integer expected";
        if (message.Objectives != null && message.hasOwnProperty("Objectives")) {
            if (!Array.isArray(message.Objectives))
                return "Objectives: array expected";
            for (var i = 0; i < message.Objectives.length; ++i) {
                var error = $root.DestinyObjectiveSummary.verify(message.Objectives[i]);
                if (error)
                    return "Objectives." + error;
            }
        }
        if (message.Completed != null && message.hasOwnProperty("Completed"))
            if (typeof message.Completed !== "boolean")
                return "Completed: boolean expected";
        if (message.Redeemed != null && message.hasOwnProperty("Redeemed"))
            if (typeof message.Redeemed !== "boolean")
                return "Redeemed: boolean expected";
        return null;
    };

    /**
     * Creates a DestinyBountySummary message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DestinyBountySummary
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DestinyBountySummary} DestinyBountySummary
     */
    DestinyBountySummary.fromObject = function fromObject(object) {
        if (object instanceof $root.DestinyBountySummary)
            return object;
        var message = new $root.DestinyBountySummary();
        if (object.ItemHash != null)
            message.ItemHash = object.ItemHash >>> 0;
        if (object.Objectives) {
            if (!Array.isArray(object.Objectives))
                throw TypeError(".DestinyBountySummary.Objectives: array expected");
            message.Objectives = [];
            for (var i = 0; i < object.Objectives.length; ++i) {
                if (typeof object.Objectives[i] !== "object")
                    throw TypeError(".DestinyBountySummary.Objectives: object expected");
                message.Objectives[i] = $root.DestinyObjectiveSummary.fromObject(object.Objectives[i]);
            }
        }
        if (object.Completed != null)
            message.Completed = Boolean(object.Completed);
        if (object.Redeemed != null)
            message.Redeemed = Boolean(object.Redeemed);
        return message;
    };

    /**
     * Creates a plain object from a DestinyBountySummary message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DestinyBountySummary
     * @static
     * @param {DestinyBountySummary} message DestinyBountySummary
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DestinyBountySummary.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.Objectives = [];
        if (options.defaults) {
            object.ItemHash = 0;
            object.Completed = false;
            object.Redeemed = false;
        }
        if (message.ItemHash != null && message.hasOwnProperty("ItemHash"))
            object.ItemHash = message.ItemHash;
        if (message.Objectives && message.Objectives.length) {
            object.Objectives = [];
            for (var j = 0; j < message.Objectives.length; ++j)
                object.Objectives[j] = $root.DestinyObjectiveSummary.toObject(message.Objectives[j], options);
        }
        if (message.Completed != null && message.hasOwnProperty("Completed"))
            object.Completed = message.Completed;
        if (message.Redeemed != null && message.hasOwnProperty("Redeemed"))
            object.Redeemed = message.Redeemed;
        return object;
    };

    /**
     * Converts this DestinyBountySummary to JSON.
     * @function toJSON
     * @memberof DestinyBountySummary
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DestinyBountySummary.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DestinyBountySummary;
})();

$root.DestinyHashValue = (function() {

    /**
     * Properties of a DestinyHashValue.
     * @exports IDestinyHashValue
     * @interface IDestinyHashValue
     * @property {number|null} [Hash] DestinyHashValue Hash
     * @property {number|null} [Value] DestinyHashValue Value
     */

    /**
     * Constructs a new DestinyHashValue.
     * @exports DestinyHashValue
     * @classdesc Represents a DestinyHashValue.
     * @implements IDestinyHashValue
     * @constructor
     * @param {IDestinyHashValue=} [properties] Properties to set
     */
    function DestinyHashValue(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DestinyHashValue Hash.
     * @member {number} Hash
     * @memberof DestinyHashValue
     * @instance
     */
    DestinyHashValue.prototype.Hash = 0;

    /**
     * DestinyHashValue Value.
     * @member {number} Value
     * @memberof DestinyHashValue
     * @instance
     */
    DestinyHashValue.prototype.Value = 0;

    /**
     * Creates a new DestinyHashValue instance using the specified properties.
     * @function create
     * @memberof DestinyHashValue
     * @static
     * @param {IDestinyHashValue=} [properties] Properties to set
     * @returns {DestinyHashValue} DestinyHashValue instance
     */
    DestinyHashValue.create = function create(properties) {
        return new DestinyHashValue(properties);
    };

    /**
     * Encodes the specified DestinyHashValue message. Does not implicitly {@link DestinyHashValue.verify|verify} messages.
     * @function encode
     * @memberof DestinyHashValue
     * @static
     * @param {IDestinyHashValue} message DestinyHashValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyHashValue.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Hash != null && message.hasOwnProperty("Hash"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Hash);
        if (message.Value != null && message.hasOwnProperty("Value"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Value);
        return writer;
    };

    /**
     * Encodes the specified DestinyHashValue message, length delimited. Does not implicitly {@link DestinyHashValue.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DestinyHashValue
     * @static
     * @param {IDestinyHashValue} message DestinyHashValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyHashValue.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DestinyHashValue message from the specified reader or buffer.
     * @function decode
     * @memberof DestinyHashValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DestinyHashValue} DestinyHashValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyHashValue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DestinyHashValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Hash = reader.uint32();
                break;
            case 2:
                message.Value = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DestinyHashValue message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DestinyHashValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DestinyHashValue} DestinyHashValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyHashValue.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DestinyHashValue message.
     * @function verify
     * @memberof DestinyHashValue
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DestinyHashValue.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Hash != null && message.hasOwnProperty("Hash"))
            if (!$util.isInteger(message.Hash))
                return "Hash: integer expected";
        if (message.Value != null && message.hasOwnProperty("Value"))
            if (!$util.isInteger(message.Value))
                return "Value: integer expected";
        return null;
    };

    /**
     * Creates a DestinyHashValue message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DestinyHashValue
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DestinyHashValue} DestinyHashValue
     */
    DestinyHashValue.fromObject = function fromObject(object) {
        if (object instanceof $root.DestinyHashValue)
            return object;
        var message = new $root.DestinyHashValue();
        if (object.Hash != null)
            message.Hash = object.Hash >>> 0;
        if (object.Value != null)
            message.Value = object.Value | 0;
        return message;
    };

    /**
     * Creates a plain object from a DestinyHashValue message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DestinyHashValue
     * @static
     * @param {DestinyHashValue} message DestinyHashValue
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DestinyHashValue.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Hash = 0;
            object.Value = 0;
        }
        if (message.Hash != null && message.hasOwnProperty("Hash"))
            object.Hash = message.Hash;
        if (message.Value != null && message.hasOwnProperty("Value"))
            object.Value = message.Value;
        return object;
    };

    /**
     * Converts this DestinyHashValue to JSON.
     * @function toJSON
     * @memberof DestinyHashValue
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DestinyHashValue.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DestinyHashValue;
})();

$root.DestinyEnergySummary = (function() {

    /**
     * Properties of a DestinyEnergySummary.
     * @exports IDestinyEnergySummary
     * @interface IDestinyEnergySummary
     * @property {number|null} [EnergyTypeHash] DestinyEnergySummary EnergyTypeHash
     * @property {number|null} [Capacity] DestinyEnergySummary Capacity
     * @property {number|null} [Used] DestinyEnergySummary Used
     */

    /**
     * Constructs a new DestinyEnergySummary.
     * @exports DestinyEnergySummary
     * @classdesc Represents a DestinyEnergySummary.
     * @implements IDestinyEnergySummary
     * @constructor
     * @param {IDestinyEnergySummary=} [properties] Properties to set
     */
    function DestinyEnergySummary(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DestinyEnergySummary EnergyTypeHash.
     * @member {number} EnergyTypeHash
     * @memberof DestinyEnergySummary
     * @instance
     */
    DestinyEnergySummary.prototype.EnergyTypeHash = 0;

    /**
     * DestinyEnergySummary Capacity.
     * @member {number} Capacity
     * @memberof DestinyEnergySummary
     * @instance
     */
    DestinyEnergySummary.prototype.Capacity = 0;

    /**
     * DestinyEnergySummary Used.
     * @member {number} Used
     * @memberof DestinyEnergySummary
     * @instance
     */
    DestinyEnergySummary.prototype.Used = 0;

    /**
     * Creates a new DestinyEnergySummary instance using the specified properties.
     * @function create
     * @memberof DestinyEnergySummary
     * @static
     * @param {IDestinyEnergySummary=} [properties] Properties to set
     * @returns {DestinyEnergySummary} DestinyEnergySummary instance
     */
    DestinyEnergySummary.create = function create(properties) {
        return new DestinyEnergySummary(properties);
    };

    /**
     * Encodes the specified DestinyEnergySummary message. Does not implicitly {@link DestinyEnergySummary.verify|verify} messages.
     * @function encode
     * @memberof DestinyEnergySummary
     * @static
     * @param {IDestinyEnergySummary} message DestinyEnergySummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyEnergySummary.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.EnergyTypeHash != null && message.hasOwnProperty("EnergyTypeHash"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.EnergyTypeHash);
        if (message.Capacity != null && message.hasOwnProperty("Capacity"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Capacity);
        if (message.Used != null && message.hasOwnProperty("Used"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Used);
        return writer;
    };

    /**
     * Encodes the specified DestinyEnergySummary message, length delimited. Does not implicitly {@link DestinyEnergySummary.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DestinyEnergySummary
     * @static
     * @param {IDestinyEnergySummary} message DestinyEnergySummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyEnergySummary.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DestinyEnergySummary message from the specified reader or buffer.
     * @function decode
     * @memberof DestinyEnergySummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DestinyEnergySummary} DestinyEnergySummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyEnergySummary.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DestinyEnergySummary();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.EnergyTypeHash = reader.uint32();
                break;
            case 2:
                message.Capacity = reader.int32();
                break;
            case 3:
                message.Used = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DestinyEnergySummary message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DestinyEnergySummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DestinyEnergySummary} DestinyEnergySummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyEnergySummary.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DestinyEnergySummary message.
     * @function verify
     * @memberof DestinyEnergySummary
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DestinyEnergySummary.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.EnergyTypeHash != null && message.hasOwnProperty("EnergyTypeHash"))
            if (!$util.isInteger(message.EnergyTypeHash))
                return "EnergyTypeHash: integer expected";
        if (message.Capacity != null && message.hasOwnProperty("Capacity"))
            if (!$util.isInteger(message.Capacity))
                return "Capacity: integer expected";
        if (message.Used != null && message.hasOwnProperty("Used"))
            if (!$util.isInteger(message.Used))
                return "Used: integer expected";
        return null;
    };

    /**
     * Creates a DestinyEnergySummary message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DestinyEnergySummary
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DestinyEnergySummary} DestinyEnergySummary
     */
    DestinyEnergySummary.fromObject = function fromObject(object) {
        if (object instanceof $root.DestinyEnergySummary)
            return object;
        var message = new $root.DestinyEnergySummary();
        if (object.EnergyTypeHash != null)
            message.EnergyTypeHash = object.EnergyTypeHash >>> 0;
        if (object.Capacity != null)
            message.Capacity = object.Capacity | 0;
        if (object.Used != null)
            message.Used = object.Used | 0;
        return message;
    };

    /**
     * Creates a plain object from a DestinyEnergySummary message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DestinyEnergySummary
     * @static
     * @param {DestinyEnergySummary} message DestinyEnergySummary
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DestinyEnergySummary.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.EnergyTypeHash = 0;
            object.Capacity = 0;
            object.Used = 0;
        }
        if (message.EnergyTypeHash != null && message.hasOwnProperty("EnergyTypeHash"))
            object.EnergyTypeHash = message.EnergyTypeHash;
        if (message.Capacity != null && message.hasOwnProperty("Capacity"))
            object.Capacity = message.Capacity;
        if (message.Used != null && message.hasOwnProperty("Used"))
            object.Used = message.Used;
        return object;
    };

    /**
     * Converts this DestinyEnergySummary to JSON.
     * @function toJSON
     * @memberof DestinyEnergySummary
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DestinyEnergySummary.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DestinyEnergySummary;
})();

$root.DestinyReusablePlugSummary = (function() {

    /**
     * Properties of a DestinyReusablePlugSummary.
     * @exports IDestinyReusablePlugSummary
     * @interface IDestinyReusablePlugSummary
     * @property {number|null} [PlugHash] DestinyReusablePlugSummary PlugHash
     * @property {boolean|null} [CanInsert] DestinyReusablePlugSummary CanInsert
     */

    /**
     * Constructs a new DestinyReusablePlugSummary.
     * @exports DestinyReusablePlugSummary
     * @classdesc Represents a DestinyReusablePlugSummary.
     * @implements IDestinyReusablePlugSummary
     * @constructor
     * @param {IDestinyReusablePlugSummary=} [properties] Properties to set
     */
    function DestinyReusablePlugSummary(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DestinyReusablePlugSummary PlugHash.
     * @member {number} PlugHash
     * @memberof DestinyReusablePlugSummary
     * @instance
     */
    DestinyReusablePlugSummary.prototype.PlugHash = 0;

    /**
     * DestinyReusablePlugSummary CanInsert.
     * @member {boolean} CanInsert
     * @memberof DestinyReusablePlugSummary
     * @instance
     */
    DestinyReusablePlugSummary.prototype.CanInsert = false;

    /**
     * Creates a new DestinyReusablePlugSummary instance using the specified properties.
     * @function create
     * @memberof DestinyReusablePlugSummary
     * @static
     * @param {IDestinyReusablePlugSummary=} [properties] Properties to set
     * @returns {DestinyReusablePlugSummary} DestinyReusablePlugSummary instance
     */
    DestinyReusablePlugSummary.create = function create(properties) {
        return new DestinyReusablePlugSummary(properties);
    };

    /**
     * Encodes the specified DestinyReusablePlugSummary message. Does not implicitly {@link DestinyReusablePlugSummary.verify|verify} messages.
     * @function encode
     * @memberof DestinyReusablePlugSummary
     * @static
     * @param {IDestinyReusablePlugSummary} message DestinyReusablePlugSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyReusablePlugSummary.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.PlugHash != null && message.hasOwnProperty("PlugHash"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.PlugHash);
        if (message.CanInsert != null && message.hasOwnProperty("CanInsert"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.CanInsert);
        return writer;
    };

    /**
     * Encodes the specified DestinyReusablePlugSummary message, length delimited. Does not implicitly {@link DestinyReusablePlugSummary.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DestinyReusablePlugSummary
     * @static
     * @param {IDestinyReusablePlugSummary} message DestinyReusablePlugSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyReusablePlugSummary.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DestinyReusablePlugSummary message from the specified reader or buffer.
     * @function decode
     * @memberof DestinyReusablePlugSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DestinyReusablePlugSummary} DestinyReusablePlugSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyReusablePlugSummary.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DestinyReusablePlugSummary();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.PlugHash = reader.uint32();
                break;
            case 2:
                message.CanInsert = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DestinyReusablePlugSummary message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DestinyReusablePlugSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DestinyReusablePlugSummary} DestinyReusablePlugSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyReusablePlugSummary.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DestinyReusablePlugSummary message.
     * @function verify
     * @memberof DestinyReusablePlugSummary
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DestinyReusablePlugSummary.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.PlugHash != null && message.hasOwnProperty("PlugHash"))
            if (!$util.isInteger(message.PlugHash))
                return "PlugHash: integer expected";
        if (message.CanInsert != null && message.hasOwnProperty("CanInsert"))
            if (typeof message.CanInsert !== "boolean")
                return "CanInsert: boolean expected";
        return null;
    };

    /**
     * Creates a DestinyReusablePlugSummary message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DestinyReusablePlugSummary
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DestinyReusablePlugSummary} DestinyReusablePlugSummary
     */
    DestinyReusablePlugSummary.fromObject = function fromObject(object) {
        if (object instanceof $root.DestinyReusablePlugSummary)
            return object;
        var message = new $root.DestinyReusablePlugSummary();
        if (object.PlugHash != null)
            message.PlugHash = object.PlugHash >>> 0;
        if (object.CanInsert != null)
            message.CanInsert = Boolean(object.CanInsert);
        return message;
    };

    /**
     * Creates a plain object from a DestinyReusablePlugSummary message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DestinyReusablePlugSummary
     * @static
     * @param {DestinyReusablePlugSummary} message DestinyReusablePlugSummary
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DestinyReusablePlugSummary.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.PlugHash = 0;
            object.CanInsert = false;
        }
        if (message.PlugHash != null && message.hasOwnProperty("PlugHash"))
            object.PlugHash = message.PlugHash;
        if (message.CanInsert != null && message.hasOwnProperty("CanInsert"))
            object.CanInsert = message.CanInsert;
        return object;
    };

    /**
     * Converts this DestinyReusablePlugSummary to JSON.
     * @function toJSON
     * @memberof DestinyReusablePlugSummary
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DestinyReusablePlugSummary.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DestinyReusablePlugSummary;
})();

$root.DestinyItemSocketSummary = (function() {

    /**
     * Properties of a DestinyItemSocketSummary.
     * @exports IDestinyItemSocketSummary
     * @interface IDestinyItemSocketSummary
     * @property {number|null} [PlugHash] DestinyItemSocketSummary PlugHash
     * @property {Array.<IDestinyReusablePlugSummary>|null} [ReusablePlugs] DestinyItemSocketSummary ReusablePlugs
     */

    /**
     * Constructs a new DestinyItemSocketSummary.
     * @exports DestinyItemSocketSummary
     * @classdesc Represents a DestinyItemSocketSummary.
     * @implements IDestinyItemSocketSummary
     * @constructor
     * @param {IDestinyItemSocketSummary=} [properties] Properties to set
     */
    function DestinyItemSocketSummary(properties) {
        this.ReusablePlugs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DestinyItemSocketSummary PlugHash.
     * @member {number} PlugHash
     * @memberof DestinyItemSocketSummary
     * @instance
     */
    DestinyItemSocketSummary.prototype.PlugHash = 0;

    /**
     * DestinyItemSocketSummary ReusablePlugs.
     * @member {Array.<IDestinyReusablePlugSummary>} ReusablePlugs
     * @memberof DestinyItemSocketSummary
     * @instance
     */
    DestinyItemSocketSummary.prototype.ReusablePlugs = $util.emptyArray;

    /**
     * Creates a new DestinyItemSocketSummary instance using the specified properties.
     * @function create
     * @memberof DestinyItemSocketSummary
     * @static
     * @param {IDestinyItemSocketSummary=} [properties] Properties to set
     * @returns {DestinyItemSocketSummary} DestinyItemSocketSummary instance
     */
    DestinyItemSocketSummary.create = function create(properties) {
        return new DestinyItemSocketSummary(properties);
    };

    /**
     * Encodes the specified DestinyItemSocketSummary message. Does not implicitly {@link DestinyItemSocketSummary.verify|verify} messages.
     * @function encode
     * @memberof DestinyItemSocketSummary
     * @static
     * @param {IDestinyItemSocketSummary} message DestinyItemSocketSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyItemSocketSummary.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.PlugHash != null && message.hasOwnProperty("PlugHash"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.PlugHash);
        if (message.ReusablePlugs != null && message.ReusablePlugs.length)
            for (var i = 0; i < message.ReusablePlugs.length; ++i)
                $root.DestinyReusablePlugSummary.encode(message.ReusablePlugs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DestinyItemSocketSummary message, length delimited. Does not implicitly {@link DestinyItemSocketSummary.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DestinyItemSocketSummary
     * @static
     * @param {IDestinyItemSocketSummary} message DestinyItemSocketSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyItemSocketSummary.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DestinyItemSocketSummary message from the specified reader or buffer.
     * @function decode
     * @memberof DestinyItemSocketSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DestinyItemSocketSummary} DestinyItemSocketSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyItemSocketSummary.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DestinyItemSocketSummary();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.PlugHash = reader.uint32();
                break;
            case 2:
                if (!(message.ReusablePlugs && message.ReusablePlugs.length))
                    message.ReusablePlugs = [];
                message.ReusablePlugs.push($root.DestinyReusablePlugSummary.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DestinyItemSocketSummary message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DestinyItemSocketSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DestinyItemSocketSummary} DestinyItemSocketSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyItemSocketSummary.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DestinyItemSocketSummary message.
     * @function verify
     * @memberof DestinyItemSocketSummary
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DestinyItemSocketSummary.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.PlugHash != null && message.hasOwnProperty("PlugHash"))
            if (!$util.isInteger(message.PlugHash))
                return "PlugHash: integer expected";
        if (message.ReusablePlugs != null && message.hasOwnProperty("ReusablePlugs")) {
            if (!Array.isArray(message.ReusablePlugs))
                return "ReusablePlugs: array expected";
            for (var i = 0; i < message.ReusablePlugs.length; ++i) {
                var error = $root.DestinyReusablePlugSummary.verify(message.ReusablePlugs[i]);
                if (error)
                    return "ReusablePlugs." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DestinyItemSocketSummary message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DestinyItemSocketSummary
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DestinyItemSocketSummary} DestinyItemSocketSummary
     */
    DestinyItemSocketSummary.fromObject = function fromObject(object) {
        if (object instanceof $root.DestinyItemSocketSummary)
            return object;
        var message = new $root.DestinyItemSocketSummary();
        if (object.PlugHash != null)
            message.PlugHash = object.PlugHash >>> 0;
        if (object.ReusablePlugs) {
            if (!Array.isArray(object.ReusablePlugs))
                throw TypeError(".DestinyItemSocketSummary.ReusablePlugs: array expected");
            message.ReusablePlugs = [];
            for (var i = 0; i < object.ReusablePlugs.length; ++i) {
                if (typeof object.ReusablePlugs[i] !== "object")
                    throw TypeError(".DestinyItemSocketSummary.ReusablePlugs: object expected");
                message.ReusablePlugs[i] = $root.DestinyReusablePlugSummary.fromObject(object.ReusablePlugs[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DestinyItemSocketSummary message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DestinyItemSocketSummary
     * @static
     * @param {DestinyItemSocketSummary} message DestinyItemSocketSummary
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DestinyItemSocketSummary.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ReusablePlugs = [];
        if (options.defaults)
            object.PlugHash = 0;
        if (message.PlugHash != null && message.hasOwnProperty("PlugHash"))
            object.PlugHash = message.PlugHash;
        if (message.ReusablePlugs && message.ReusablePlugs.length) {
            object.ReusablePlugs = [];
            for (var j = 0; j < message.ReusablePlugs.length; ++j)
                object.ReusablePlugs[j] = $root.DestinyReusablePlugSummary.toObject(message.ReusablePlugs[j], options);
        }
        return object;
    };

    /**
     * Converts this DestinyItemSocketSummary to JSON.
     * @function toJSON
     * @memberof DestinyItemSocketSummary
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DestinyItemSocketSummary.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DestinyItemSocketSummary;
})();

$root.DestinyItemSummary = (function() {

    /**
     * Properties of a DestinyItemSummary.
     * @exports IDestinyItemSummary
     * @interface IDestinyItemSummary
     * @property {number|null} [ItemHash] DestinyItemSummary ItemHash
     * @property {number|null} [BucketHash] DestinyItemSummary BucketHash
     * @property {boolean|null} [Masterworked] DestinyItemSummary Masterworked
     * @property {number|null} [StyleItemHash] DestinyItemSummary StyleItemHash
     * @property {number|null} [DamageTypeHash] DestinyItemSummary DamageTypeHash
     * @property {number|null} [BreakerTypeHash] DestinyItemSummary BreakerTypeHash
     * @property {IDestinyEnergySummary|null} [Energy] DestinyItemSummary Energy
     * @property {IDestinyHashValue|null} [PrimaryStat] DestinyItemSummary PrimaryStat
     * @property {Array.<IDestinyItemSocketSummary>|null} [Sockets] DestinyItemSummary Sockets
     * @property {Array.<IDestinyHashValue>|null} [Stats] DestinyItemSummary Stats
     */

    /**
     * Constructs a new DestinyItemSummary.
     * @exports DestinyItemSummary
     * @classdesc Represents a DestinyItemSummary.
     * @implements IDestinyItemSummary
     * @constructor
     * @param {IDestinyItemSummary=} [properties] Properties to set
     */
    function DestinyItemSummary(properties) {
        this.Sockets = [];
        this.Stats = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DestinyItemSummary ItemHash.
     * @member {number} ItemHash
     * @memberof DestinyItemSummary
     * @instance
     */
    DestinyItemSummary.prototype.ItemHash = 0;

    /**
     * DestinyItemSummary BucketHash.
     * @member {number} BucketHash
     * @memberof DestinyItemSummary
     * @instance
     */
    DestinyItemSummary.prototype.BucketHash = 0;

    /**
     * DestinyItemSummary Masterworked.
     * @member {boolean} Masterworked
     * @memberof DestinyItemSummary
     * @instance
     */
    DestinyItemSummary.prototype.Masterworked = false;

    /**
     * DestinyItemSummary StyleItemHash.
     * @member {number} StyleItemHash
     * @memberof DestinyItemSummary
     * @instance
     */
    DestinyItemSummary.prototype.StyleItemHash = 0;

    /**
     * DestinyItemSummary DamageTypeHash.
     * @member {number} DamageTypeHash
     * @memberof DestinyItemSummary
     * @instance
     */
    DestinyItemSummary.prototype.DamageTypeHash = 0;

    /**
     * DestinyItemSummary BreakerTypeHash.
     * @member {number} BreakerTypeHash
     * @memberof DestinyItemSummary
     * @instance
     */
    DestinyItemSummary.prototype.BreakerTypeHash = 0;

    /**
     * DestinyItemSummary Energy.
     * @member {IDestinyEnergySummary|null|undefined} Energy
     * @memberof DestinyItemSummary
     * @instance
     */
    DestinyItemSummary.prototype.Energy = null;

    /**
     * DestinyItemSummary PrimaryStat.
     * @member {IDestinyHashValue|null|undefined} PrimaryStat
     * @memberof DestinyItemSummary
     * @instance
     */
    DestinyItemSummary.prototype.PrimaryStat = null;

    /**
     * DestinyItemSummary Sockets.
     * @member {Array.<IDestinyItemSocketSummary>} Sockets
     * @memberof DestinyItemSummary
     * @instance
     */
    DestinyItemSummary.prototype.Sockets = $util.emptyArray;

    /**
     * DestinyItemSummary Stats.
     * @member {Array.<IDestinyHashValue>} Stats
     * @memberof DestinyItemSummary
     * @instance
     */
    DestinyItemSummary.prototype.Stats = $util.emptyArray;

    /**
     * Creates a new DestinyItemSummary instance using the specified properties.
     * @function create
     * @memberof DestinyItemSummary
     * @static
     * @param {IDestinyItemSummary=} [properties] Properties to set
     * @returns {DestinyItemSummary} DestinyItemSummary instance
     */
    DestinyItemSummary.create = function create(properties) {
        return new DestinyItemSummary(properties);
    };

    /**
     * Encodes the specified DestinyItemSummary message. Does not implicitly {@link DestinyItemSummary.verify|verify} messages.
     * @function encode
     * @memberof DestinyItemSummary
     * @static
     * @param {IDestinyItemSummary} message DestinyItemSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyItemSummary.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ItemHash != null && message.hasOwnProperty("ItemHash"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ItemHash);
        if (message.BucketHash != null && message.hasOwnProperty("BucketHash"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.BucketHash);
        if (message.Masterworked != null && message.hasOwnProperty("Masterworked"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.Masterworked);
        if (message.StyleItemHash != null && message.hasOwnProperty("StyleItemHash"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.StyleItemHash);
        if (message.DamageTypeHash != null && message.hasOwnProperty("DamageTypeHash"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.DamageTypeHash);
        if (message.BreakerTypeHash != null && message.hasOwnProperty("BreakerTypeHash"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.BreakerTypeHash);
        if (message.Energy != null && message.hasOwnProperty("Energy"))
            $root.DestinyEnergySummary.encode(message.Energy, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.PrimaryStat != null && message.hasOwnProperty("PrimaryStat"))
            $root.DestinyHashValue.encode(message.PrimaryStat, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.Sockets != null && message.Sockets.length)
            for (var i = 0; i < message.Sockets.length; ++i)
                $root.DestinyItemSocketSummary.encode(message.Sockets[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.Stats != null && message.Stats.length)
            for (var i = 0; i < message.Stats.length; ++i)
                $root.DestinyHashValue.encode(message.Stats[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DestinyItemSummary message, length delimited. Does not implicitly {@link DestinyItemSummary.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DestinyItemSummary
     * @static
     * @param {IDestinyItemSummary} message DestinyItemSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyItemSummary.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DestinyItemSummary message from the specified reader or buffer.
     * @function decode
     * @memberof DestinyItemSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DestinyItemSummary} DestinyItemSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyItemSummary.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DestinyItemSummary();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ItemHash = reader.uint32();
                break;
            case 2:
                message.BucketHash = reader.uint32();
                break;
            case 3:
                message.Masterworked = reader.bool();
                break;
            case 4:
                message.StyleItemHash = reader.uint32();
                break;
            case 5:
                message.DamageTypeHash = reader.uint32();
                break;
            case 6:
                message.BreakerTypeHash = reader.uint32();
                break;
            case 7:
                message.Energy = $root.DestinyEnergySummary.decode(reader, reader.uint32());
                break;
            case 8:
                message.PrimaryStat = $root.DestinyHashValue.decode(reader, reader.uint32());
                break;
            case 9:
                if (!(message.Sockets && message.Sockets.length))
                    message.Sockets = [];
                message.Sockets.push($root.DestinyItemSocketSummary.decode(reader, reader.uint32()));
                break;
            case 10:
                if (!(message.Stats && message.Stats.length))
                    message.Stats = [];
                message.Stats.push($root.DestinyHashValue.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DestinyItemSummary message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DestinyItemSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DestinyItemSummary} DestinyItemSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyItemSummary.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DestinyItemSummary message.
     * @function verify
     * @memberof DestinyItemSummary
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DestinyItemSummary.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ItemHash != null && message.hasOwnProperty("ItemHash"))
            if (!$util.isInteger(message.ItemHash))
                return "ItemHash: integer expected";
        if (message.BucketHash != null && message.hasOwnProperty("BucketHash"))
            if (!$util.isInteger(message.BucketHash))
                return "BucketHash: integer expected";
        if (message.Masterworked != null && message.hasOwnProperty("Masterworked"))
            if (typeof message.Masterworked !== "boolean")
                return "Masterworked: boolean expected";
        if (message.StyleItemHash != null && message.hasOwnProperty("StyleItemHash"))
            if (!$util.isInteger(message.StyleItemHash))
                return "StyleItemHash: integer expected";
        if (message.DamageTypeHash != null && message.hasOwnProperty("DamageTypeHash"))
            if (!$util.isInteger(message.DamageTypeHash))
                return "DamageTypeHash: integer expected";
        if (message.BreakerTypeHash != null && message.hasOwnProperty("BreakerTypeHash"))
            if (!$util.isInteger(message.BreakerTypeHash))
                return "BreakerTypeHash: integer expected";
        if (message.Energy != null && message.hasOwnProperty("Energy")) {
            var error = $root.DestinyEnergySummary.verify(message.Energy);
            if (error)
                return "Energy." + error;
        }
        if (message.PrimaryStat != null && message.hasOwnProperty("PrimaryStat")) {
            var error = $root.DestinyHashValue.verify(message.PrimaryStat);
            if (error)
                return "PrimaryStat." + error;
        }
        if (message.Sockets != null && message.hasOwnProperty("Sockets")) {
            if (!Array.isArray(message.Sockets))
                return "Sockets: array expected";
            for (var i = 0; i < message.Sockets.length; ++i) {
                var error = $root.DestinyItemSocketSummary.verify(message.Sockets[i]);
                if (error)
                    return "Sockets." + error;
            }
        }
        if (message.Stats != null && message.hasOwnProperty("Stats")) {
            if (!Array.isArray(message.Stats))
                return "Stats: array expected";
            for (var i = 0; i < message.Stats.length; ++i) {
                var error = $root.DestinyHashValue.verify(message.Stats[i]);
                if (error)
                    return "Stats." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DestinyItemSummary message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DestinyItemSummary
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DestinyItemSummary} DestinyItemSummary
     */
    DestinyItemSummary.fromObject = function fromObject(object) {
        if (object instanceof $root.DestinyItemSummary)
            return object;
        var message = new $root.DestinyItemSummary();
        if (object.ItemHash != null)
            message.ItemHash = object.ItemHash >>> 0;
        if (object.BucketHash != null)
            message.BucketHash = object.BucketHash >>> 0;
        if (object.Masterworked != null)
            message.Masterworked = Boolean(object.Masterworked);
        if (object.StyleItemHash != null)
            message.StyleItemHash = object.StyleItemHash >>> 0;
        if (object.DamageTypeHash != null)
            message.DamageTypeHash = object.DamageTypeHash >>> 0;
        if (object.BreakerTypeHash != null)
            message.BreakerTypeHash = object.BreakerTypeHash >>> 0;
        if (object.Energy != null) {
            if (typeof object.Energy !== "object")
                throw TypeError(".DestinyItemSummary.Energy: object expected");
            message.Energy = $root.DestinyEnergySummary.fromObject(object.Energy);
        }
        if (object.PrimaryStat != null) {
            if (typeof object.PrimaryStat !== "object")
                throw TypeError(".DestinyItemSummary.PrimaryStat: object expected");
            message.PrimaryStat = $root.DestinyHashValue.fromObject(object.PrimaryStat);
        }
        if (object.Sockets) {
            if (!Array.isArray(object.Sockets))
                throw TypeError(".DestinyItemSummary.Sockets: array expected");
            message.Sockets = [];
            for (var i = 0; i < object.Sockets.length; ++i) {
                if (typeof object.Sockets[i] !== "object")
                    throw TypeError(".DestinyItemSummary.Sockets: object expected");
                message.Sockets[i] = $root.DestinyItemSocketSummary.fromObject(object.Sockets[i]);
            }
        }
        if (object.Stats) {
            if (!Array.isArray(object.Stats))
                throw TypeError(".DestinyItemSummary.Stats: array expected");
            message.Stats = [];
            for (var i = 0; i < object.Stats.length; ++i) {
                if (typeof object.Stats[i] !== "object")
                    throw TypeError(".DestinyItemSummary.Stats: object expected");
                message.Stats[i] = $root.DestinyHashValue.fromObject(object.Stats[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DestinyItemSummary message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DestinyItemSummary
     * @static
     * @param {DestinyItemSummary} message DestinyItemSummary
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DestinyItemSummary.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.Sockets = [];
            object.Stats = [];
        }
        if (options.defaults) {
            object.ItemHash = 0;
            object.BucketHash = 0;
            object.Masterworked = false;
            object.StyleItemHash = 0;
            object.DamageTypeHash = 0;
            object.BreakerTypeHash = 0;
            object.Energy = null;
            object.PrimaryStat = null;
        }
        if (message.ItemHash != null && message.hasOwnProperty("ItemHash"))
            object.ItemHash = message.ItemHash;
        if (message.BucketHash != null && message.hasOwnProperty("BucketHash"))
            object.BucketHash = message.BucketHash;
        if (message.Masterworked != null && message.hasOwnProperty("Masterworked"))
            object.Masterworked = message.Masterworked;
        if (message.StyleItemHash != null && message.hasOwnProperty("StyleItemHash"))
            object.StyleItemHash = message.StyleItemHash;
        if (message.DamageTypeHash != null && message.hasOwnProperty("DamageTypeHash"))
            object.DamageTypeHash = message.DamageTypeHash;
        if (message.BreakerTypeHash != null && message.hasOwnProperty("BreakerTypeHash"))
            object.BreakerTypeHash = message.BreakerTypeHash;
        if (message.Energy != null && message.hasOwnProperty("Energy"))
            object.Energy = $root.DestinyEnergySummary.toObject(message.Energy, options);
        if (message.PrimaryStat != null && message.hasOwnProperty("PrimaryStat"))
            object.PrimaryStat = $root.DestinyHashValue.toObject(message.PrimaryStat, options);
        if (message.Sockets && message.Sockets.length) {
            object.Sockets = [];
            for (var j = 0; j < message.Sockets.length; ++j)
                object.Sockets[j] = $root.DestinyItemSocketSummary.toObject(message.Sockets[j], options);
        }
        if (message.Stats && message.Stats.length) {
            object.Stats = [];
            for (var j = 0; j < message.Stats.length; ++j)
                object.Stats[j] = $root.DestinyHashValue.toObject(message.Stats[j], options);
        }
        return object;
    };

    /**
     * Converts this DestinyItemSummary to JSON.
     * @function toJSON
     * @memberof DestinyItemSummary
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DestinyItemSummary.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DestinyItemSummary;
})();

$root.DestinyMetric = (function() {

    /**
     * Properties of a DestinyMetric.
     * @exports IDestinyMetric
     * @interface IDestinyMetric
     * @property {number|null} [MetricHash] DestinyMetric MetricHash
     * @property {number|null} [MetricValue] DestinyMetric MetricValue
     */

    /**
     * Constructs a new DestinyMetric.
     * @exports DestinyMetric
     * @classdesc Represents a DestinyMetric.
     * @implements IDestinyMetric
     * @constructor
     * @param {IDestinyMetric=} [properties] Properties to set
     */
    function DestinyMetric(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DestinyMetric MetricHash.
     * @member {number} MetricHash
     * @memberof DestinyMetric
     * @instance
     */
    DestinyMetric.prototype.MetricHash = 0;

    /**
     * DestinyMetric MetricValue.
     * @member {number} MetricValue
     * @memberof DestinyMetric
     * @instance
     */
    DestinyMetric.prototype.MetricValue = 0;

    /**
     * Creates a new DestinyMetric instance using the specified properties.
     * @function create
     * @memberof DestinyMetric
     * @static
     * @param {IDestinyMetric=} [properties] Properties to set
     * @returns {DestinyMetric} DestinyMetric instance
     */
    DestinyMetric.create = function create(properties) {
        return new DestinyMetric(properties);
    };

    /**
     * Encodes the specified DestinyMetric message. Does not implicitly {@link DestinyMetric.verify|verify} messages.
     * @function encode
     * @memberof DestinyMetric
     * @static
     * @param {IDestinyMetric} message DestinyMetric message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyMetric.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.MetricHash != null && message.hasOwnProperty("MetricHash"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.MetricHash);
        if (message.MetricValue != null && message.hasOwnProperty("MetricValue"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.MetricValue);
        return writer;
    };

    /**
     * Encodes the specified DestinyMetric message, length delimited. Does not implicitly {@link DestinyMetric.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DestinyMetric
     * @static
     * @param {IDestinyMetric} message DestinyMetric message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyMetric.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DestinyMetric message from the specified reader or buffer.
     * @function decode
     * @memberof DestinyMetric
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DestinyMetric} DestinyMetric
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyMetric.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DestinyMetric();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.MetricHash = reader.uint32();
                break;
            case 2:
                message.MetricValue = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DestinyMetric message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DestinyMetric
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DestinyMetric} DestinyMetric
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyMetric.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DestinyMetric message.
     * @function verify
     * @memberof DestinyMetric
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DestinyMetric.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.MetricHash != null && message.hasOwnProperty("MetricHash"))
            if (!$util.isInteger(message.MetricHash))
                return "MetricHash: integer expected";
        if (message.MetricValue != null && message.hasOwnProperty("MetricValue"))
            if (!$util.isInteger(message.MetricValue))
                return "MetricValue: integer expected";
        return null;
    };

    /**
     * Creates a DestinyMetric message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DestinyMetric
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DestinyMetric} DestinyMetric
     */
    DestinyMetric.fromObject = function fromObject(object) {
        if (object instanceof $root.DestinyMetric)
            return object;
        var message = new $root.DestinyMetric();
        if (object.MetricHash != null)
            message.MetricHash = object.MetricHash >>> 0;
        if (object.MetricValue != null)
            message.MetricValue = object.MetricValue | 0;
        return message;
    };

    /**
     * Creates a plain object from a DestinyMetric message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DestinyMetric
     * @static
     * @param {DestinyMetric} message DestinyMetric
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DestinyMetric.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.MetricHash = 0;
            object.MetricValue = 0;
        }
        if (message.MetricHash != null && message.hasOwnProperty("MetricHash"))
            object.MetricHash = message.MetricHash;
        if (message.MetricValue != null && message.hasOwnProperty("MetricValue"))
            object.MetricValue = message.MetricValue;
        return object;
    };

    /**
     * Converts this DestinyMetric to JSON.
     * @function toJSON
     * @memberof DestinyMetric
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DestinyMetric.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DestinyMetric;
})();

$root.DestinySubclassSummary = (function() {

    /**
     * Properties of a DestinySubclassSummary.
     * @exports IDestinySubclassSummary
     * @interface IDestinySubclassSummary
     * @property {number|null} [ItemHash] DestinySubclassSummary ItemHash
     * @property {number|null} [GridHash] DestinySubclassSummary GridHash
     * @property {Array.<number>|null} [ActiveNodes] DestinySubclassSummary ActiveNodes
     */

    /**
     * Constructs a new DestinySubclassSummary.
     * @exports DestinySubclassSummary
     * @classdesc Represents a DestinySubclassSummary.
     * @implements IDestinySubclassSummary
     * @constructor
     * @param {IDestinySubclassSummary=} [properties] Properties to set
     */
    function DestinySubclassSummary(properties) {
        this.ActiveNodes = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DestinySubclassSummary ItemHash.
     * @member {number} ItemHash
     * @memberof DestinySubclassSummary
     * @instance
     */
    DestinySubclassSummary.prototype.ItemHash = 0;

    /**
     * DestinySubclassSummary GridHash.
     * @member {number} GridHash
     * @memberof DestinySubclassSummary
     * @instance
     */
    DestinySubclassSummary.prototype.GridHash = 0;

    /**
     * DestinySubclassSummary ActiveNodes.
     * @member {Array.<number>} ActiveNodes
     * @memberof DestinySubclassSummary
     * @instance
     */
    DestinySubclassSummary.prototype.ActiveNodes = $util.emptyArray;

    /**
     * Creates a new DestinySubclassSummary instance using the specified properties.
     * @function create
     * @memberof DestinySubclassSummary
     * @static
     * @param {IDestinySubclassSummary=} [properties] Properties to set
     * @returns {DestinySubclassSummary} DestinySubclassSummary instance
     */
    DestinySubclassSummary.create = function create(properties) {
        return new DestinySubclassSummary(properties);
    };

    /**
     * Encodes the specified DestinySubclassSummary message. Does not implicitly {@link DestinySubclassSummary.verify|verify} messages.
     * @function encode
     * @memberof DestinySubclassSummary
     * @static
     * @param {IDestinySubclassSummary} message DestinySubclassSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinySubclassSummary.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ItemHash != null && message.hasOwnProperty("ItemHash"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ItemHash);
        if (message.GridHash != null && message.hasOwnProperty("GridHash"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.GridHash);
        if (message.ActiveNodes != null && message.ActiveNodes.length) {
            writer.uint32(/* id 3, wireType 2 =*/26).fork();
            for (var i = 0; i < message.ActiveNodes.length; ++i)
                writer.int32(message.ActiveNodes[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified DestinySubclassSummary message, length delimited. Does not implicitly {@link DestinySubclassSummary.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DestinySubclassSummary
     * @static
     * @param {IDestinySubclassSummary} message DestinySubclassSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinySubclassSummary.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DestinySubclassSummary message from the specified reader or buffer.
     * @function decode
     * @memberof DestinySubclassSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DestinySubclassSummary} DestinySubclassSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinySubclassSummary.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DestinySubclassSummary();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ItemHash = reader.uint32();
                break;
            case 2:
                message.GridHash = reader.uint32();
                break;
            case 3:
                if (!(message.ActiveNodes && message.ActiveNodes.length))
                    message.ActiveNodes = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.ActiveNodes.push(reader.int32());
                } else
                    message.ActiveNodes.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DestinySubclassSummary message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DestinySubclassSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DestinySubclassSummary} DestinySubclassSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinySubclassSummary.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DestinySubclassSummary message.
     * @function verify
     * @memberof DestinySubclassSummary
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DestinySubclassSummary.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ItemHash != null && message.hasOwnProperty("ItemHash"))
            if (!$util.isInteger(message.ItemHash))
                return "ItemHash: integer expected";
        if (message.GridHash != null && message.hasOwnProperty("GridHash"))
            if (!$util.isInteger(message.GridHash))
                return "GridHash: integer expected";
        if (message.ActiveNodes != null && message.hasOwnProperty("ActiveNodes")) {
            if (!Array.isArray(message.ActiveNodes))
                return "ActiveNodes: array expected";
            for (var i = 0; i < message.ActiveNodes.length; ++i)
                if (!$util.isInteger(message.ActiveNodes[i]))
                    return "ActiveNodes: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a DestinySubclassSummary message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DestinySubclassSummary
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DestinySubclassSummary} DestinySubclassSummary
     */
    DestinySubclassSummary.fromObject = function fromObject(object) {
        if (object instanceof $root.DestinySubclassSummary)
            return object;
        var message = new $root.DestinySubclassSummary();
        if (object.ItemHash != null)
            message.ItemHash = object.ItemHash >>> 0;
        if (object.GridHash != null)
            message.GridHash = object.GridHash >>> 0;
        if (object.ActiveNodes) {
            if (!Array.isArray(object.ActiveNodes))
                throw TypeError(".DestinySubclassSummary.ActiveNodes: array expected");
            message.ActiveNodes = [];
            for (var i = 0; i < object.ActiveNodes.length; ++i)
                message.ActiveNodes[i] = object.ActiveNodes[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a DestinySubclassSummary message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DestinySubclassSummary
     * @static
     * @param {DestinySubclassSummary} message DestinySubclassSummary
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DestinySubclassSummary.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ActiveNodes = [];
        if (options.defaults) {
            object.ItemHash = 0;
            object.GridHash = 0;
        }
        if (message.ItemHash != null && message.hasOwnProperty("ItemHash"))
            object.ItemHash = message.ItemHash;
        if (message.GridHash != null && message.hasOwnProperty("GridHash"))
            object.GridHash = message.GridHash;
        if (message.ActiveNodes && message.ActiveNodes.length) {
            object.ActiveNodes = [];
            for (var j = 0; j < message.ActiveNodes.length; ++j)
                object.ActiveNodes[j] = message.ActiveNodes[j];
        }
        return object;
    };

    /**
     * Converts this DestinySubclassSummary to JSON.
     * @function toJSON
     * @memberof DestinySubclassSummary
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DestinySubclassSummary.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DestinySubclassSummary;
})();

$root.DestinyTrialsTicket = (function() {

    /**
     * Properties of a DestinyTrialsTicket.
     * @exports IDestinyTrialsTicket
     * @interface IDestinyTrialsTicket
     * @property {number|null} [TicketItemHash] DestinyTrialsTicket TicketItemHash
     * @property {number|null} [WinCount] DestinyTrialsTicket WinCount
     * @property {number|null} [LossCount] DestinyTrialsTicket LossCount
     * @property {boolean|null} [IsLossForgivenessApplicable] DestinyTrialsTicket IsLossForgivenessApplicable
     * @property {boolean|null} [LossForgivenessUsed] DestinyTrialsTicket LossForgivenessUsed
     */

    /**
     * Constructs a new DestinyTrialsTicket.
     * @exports DestinyTrialsTicket
     * @classdesc Represents a DestinyTrialsTicket.
     * @implements IDestinyTrialsTicket
     * @constructor
     * @param {IDestinyTrialsTicket=} [properties] Properties to set
     */
    function DestinyTrialsTicket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DestinyTrialsTicket TicketItemHash.
     * @member {number} TicketItemHash
     * @memberof DestinyTrialsTicket
     * @instance
     */
    DestinyTrialsTicket.prototype.TicketItemHash = 0;

    /**
     * DestinyTrialsTicket WinCount.
     * @member {number} WinCount
     * @memberof DestinyTrialsTicket
     * @instance
     */
    DestinyTrialsTicket.prototype.WinCount = 0;

    /**
     * DestinyTrialsTicket LossCount.
     * @member {number} LossCount
     * @memberof DestinyTrialsTicket
     * @instance
     */
    DestinyTrialsTicket.prototype.LossCount = 0;

    /**
     * DestinyTrialsTicket IsLossForgivenessApplicable.
     * @member {boolean} IsLossForgivenessApplicable
     * @memberof DestinyTrialsTicket
     * @instance
     */
    DestinyTrialsTicket.prototype.IsLossForgivenessApplicable = false;

    /**
     * DestinyTrialsTicket LossForgivenessUsed.
     * @member {boolean} LossForgivenessUsed
     * @memberof DestinyTrialsTicket
     * @instance
     */
    DestinyTrialsTicket.prototype.LossForgivenessUsed = false;

    /**
     * Creates a new DestinyTrialsTicket instance using the specified properties.
     * @function create
     * @memberof DestinyTrialsTicket
     * @static
     * @param {IDestinyTrialsTicket=} [properties] Properties to set
     * @returns {DestinyTrialsTicket} DestinyTrialsTicket instance
     */
    DestinyTrialsTicket.create = function create(properties) {
        return new DestinyTrialsTicket(properties);
    };

    /**
     * Encodes the specified DestinyTrialsTicket message. Does not implicitly {@link DestinyTrialsTicket.verify|verify} messages.
     * @function encode
     * @memberof DestinyTrialsTicket
     * @static
     * @param {IDestinyTrialsTicket} message DestinyTrialsTicket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyTrialsTicket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.TicketItemHash != null && message.hasOwnProperty("TicketItemHash"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.TicketItemHash);
        if (message.WinCount != null && message.hasOwnProperty("WinCount"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.WinCount);
        if (message.LossCount != null && message.hasOwnProperty("LossCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.LossCount);
        if (message.IsLossForgivenessApplicable != null && message.hasOwnProperty("IsLossForgivenessApplicable"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.IsLossForgivenessApplicable);
        if (message.LossForgivenessUsed != null && message.hasOwnProperty("LossForgivenessUsed"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.LossForgivenessUsed);
        return writer;
    };

    /**
     * Encodes the specified DestinyTrialsTicket message, length delimited. Does not implicitly {@link DestinyTrialsTicket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DestinyTrialsTicket
     * @static
     * @param {IDestinyTrialsTicket} message DestinyTrialsTicket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyTrialsTicket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DestinyTrialsTicket message from the specified reader or buffer.
     * @function decode
     * @memberof DestinyTrialsTicket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DestinyTrialsTicket} DestinyTrialsTicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyTrialsTicket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DestinyTrialsTicket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.TicketItemHash = reader.uint32();
                break;
            case 2:
                message.WinCount = reader.int32();
                break;
            case 3:
                message.LossCount = reader.int32();
                break;
            case 4:
                message.IsLossForgivenessApplicable = reader.bool();
                break;
            case 5:
                message.LossForgivenessUsed = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DestinyTrialsTicket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DestinyTrialsTicket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DestinyTrialsTicket} DestinyTrialsTicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyTrialsTicket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DestinyTrialsTicket message.
     * @function verify
     * @memberof DestinyTrialsTicket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DestinyTrialsTicket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.TicketItemHash != null && message.hasOwnProperty("TicketItemHash"))
            if (!$util.isInteger(message.TicketItemHash))
                return "TicketItemHash: integer expected";
        if (message.WinCount != null && message.hasOwnProperty("WinCount"))
            if (!$util.isInteger(message.WinCount))
                return "WinCount: integer expected";
        if (message.LossCount != null && message.hasOwnProperty("LossCount"))
            if (!$util.isInteger(message.LossCount))
                return "LossCount: integer expected";
        if (message.IsLossForgivenessApplicable != null && message.hasOwnProperty("IsLossForgivenessApplicable"))
            if (typeof message.IsLossForgivenessApplicable !== "boolean")
                return "IsLossForgivenessApplicable: boolean expected";
        if (message.LossForgivenessUsed != null && message.hasOwnProperty("LossForgivenessUsed"))
            if (typeof message.LossForgivenessUsed !== "boolean")
                return "LossForgivenessUsed: boolean expected";
        return null;
    };

    /**
     * Creates a DestinyTrialsTicket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DestinyTrialsTicket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DestinyTrialsTicket} DestinyTrialsTicket
     */
    DestinyTrialsTicket.fromObject = function fromObject(object) {
        if (object instanceof $root.DestinyTrialsTicket)
            return object;
        var message = new $root.DestinyTrialsTicket();
        if (object.TicketItemHash != null)
            message.TicketItemHash = object.TicketItemHash >>> 0;
        if (object.WinCount != null)
            message.WinCount = object.WinCount | 0;
        if (object.LossCount != null)
            message.LossCount = object.LossCount | 0;
        if (object.IsLossForgivenessApplicable != null)
            message.IsLossForgivenessApplicable = Boolean(object.IsLossForgivenessApplicable);
        if (object.LossForgivenessUsed != null)
            message.LossForgivenessUsed = Boolean(object.LossForgivenessUsed);
        return message;
    };

    /**
     * Creates a plain object from a DestinyTrialsTicket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DestinyTrialsTicket
     * @static
     * @param {DestinyTrialsTicket} message DestinyTrialsTicket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DestinyTrialsTicket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.TicketItemHash = 0;
            object.WinCount = 0;
            object.LossCount = 0;
            object.IsLossForgivenessApplicable = false;
            object.LossForgivenessUsed = false;
        }
        if (message.TicketItemHash != null && message.hasOwnProperty("TicketItemHash"))
            object.TicketItemHash = message.TicketItemHash;
        if (message.WinCount != null && message.hasOwnProperty("WinCount"))
            object.WinCount = message.WinCount;
        if (message.LossCount != null && message.hasOwnProperty("LossCount"))
            object.LossCount = message.LossCount;
        if (message.IsLossForgivenessApplicable != null && message.hasOwnProperty("IsLossForgivenessApplicable"))
            object.IsLossForgivenessApplicable = message.IsLossForgivenessApplicable;
        if (message.LossForgivenessUsed != null && message.hasOwnProperty("LossForgivenessUsed"))
            object.LossForgivenessUsed = message.LossForgivenessUsed;
        return object;
    };

    /**
     * Converts this DestinyTrialsTicket to JSON.
     * @function toJSON
     * @memberof DestinyTrialsTicket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DestinyTrialsTicket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DestinyTrialsTicket;
})();

$root.DestinyActiveCharacterSummary = (function() {

    /**
     * Properties of a DestinyActiveCharacterSummary.
     * @exports IDestinyActiveCharacterSummary
     * @interface IDestinyActiveCharacterSummary
     * @property {string|null} [DisplayName] DestinyActiveCharacterSummary DisplayName
     * @property {string|null} [PlatformType] DestinyActiveCharacterSummary PlatformType
     * @property {number|null} [EmblemHash] DestinyActiveCharacterSummary EmblemHash
     * @property {number|null} [ActivityHash] DestinyActiveCharacterSummary ActivityHash
     * @property {number|null} [PlaylistActivityHash] DestinyActiveCharacterSummary PlaylistActivityHash
     * @property {number|null} [ActivityStartSecondsSinceEpoch] DestinyActiveCharacterSummary ActivityStartSecondsSinceEpoch
     * @property {Array.<IDestinyHashValue>|null} [CharacterStats] DestinyActiveCharacterSummary CharacterStats
     * @property {number|null} [Score] DestinyActiveCharacterSummary Score
     * @property {number|null} [RaceHash] DestinyActiveCharacterSummary RaceHash
     * @property {number|null} [GenderHash] DestinyActiveCharacterSummary GenderHash
     * @property {number|null} [ClassHash] DestinyActiveCharacterSummary ClassHash
     * @property {number|null} [Level] DestinyActiveCharacterSummary Level
     * @property {number|null} [TitleRecordHash] DestinyActiveCharacterSummary TitleRecordHash
     * @property {IDestinySubclassSummary|null} [Subclass] DestinyActiveCharacterSummary Subclass
     * @property {Array.<IDestinyBountySummary>|null} [Bounties] DestinyActiveCharacterSummary Bounties
     * @property {Array.<IDestinyItemSummary>|null} [Equipment] DestinyActiveCharacterSummary Equipment
     * @property {IDestinyTrialsTicket|null} [DestinyTrialsTicket] DestinyActiveCharacterSummary DestinyTrialsTicket
     * @property {Array.<IDestinyMetric>|null} [Metrics] DestinyActiveCharacterSummary Metrics
     * @property {number|Long|null} [CharacterId] DestinyActiveCharacterSummary CharacterId
     * @property {number|null} [LastValidPlaylistActivityHash] DestinyActiveCharacterSummary LastValidPlaylistActivityHash
     * @property {number|null} [LastValidActivityHash] DestinyActiveCharacterSummary LastValidActivityHash
     * @property {boolean|null} [IsPlayingTrials] DestinyActiveCharacterSummary IsPlayingTrials
     */

    /**
     * Constructs a new DestinyActiveCharacterSummary.
     * @exports DestinyActiveCharacterSummary
     * @classdesc Represents a DestinyActiveCharacterSummary.
     * @implements IDestinyActiveCharacterSummary
     * @constructor
     * @param {IDestinyActiveCharacterSummary=} [properties] Properties to set
     */
    function DestinyActiveCharacterSummary(properties) {
        this.CharacterStats = [];
        this.Bounties = [];
        this.Equipment = [];
        this.Metrics = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DestinyActiveCharacterSummary DisplayName.
     * @member {string} DisplayName
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.DisplayName = "";

    /**
     * DestinyActiveCharacterSummary PlatformType.
     * @member {string} PlatformType
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.PlatformType = "";

    /**
     * DestinyActiveCharacterSummary EmblemHash.
     * @member {number} EmblemHash
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.EmblemHash = 0;

    /**
     * DestinyActiveCharacterSummary ActivityHash.
     * @member {number} ActivityHash
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.ActivityHash = 0;

    /**
     * DestinyActiveCharacterSummary PlaylistActivityHash.
     * @member {number} PlaylistActivityHash
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.PlaylistActivityHash = 0;

    /**
     * DestinyActiveCharacterSummary ActivityStartSecondsSinceEpoch.
     * @member {number} ActivityStartSecondsSinceEpoch
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.ActivityStartSecondsSinceEpoch = 0;

    /**
     * DestinyActiveCharacterSummary CharacterStats.
     * @member {Array.<IDestinyHashValue>} CharacterStats
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.CharacterStats = $util.emptyArray;

    /**
     * DestinyActiveCharacterSummary Score.
     * @member {number} Score
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.Score = 0;

    /**
     * DestinyActiveCharacterSummary RaceHash.
     * @member {number} RaceHash
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.RaceHash = 0;

    /**
     * DestinyActiveCharacterSummary GenderHash.
     * @member {number} GenderHash
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.GenderHash = 0;

    /**
     * DestinyActiveCharacterSummary ClassHash.
     * @member {number} ClassHash
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.ClassHash = 0;

    /**
     * DestinyActiveCharacterSummary Level.
     * @member {number} Level
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.Level = 0;

    /**
     * DestinyActiveCharacterSummary TitleRecordHash.
     * @member {number} TitleRecordHash
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.TitleRecordHash = 0;

    /**
     * DestinyActiveCharacterSummary Subclass.
     * @member {IDestinySubclassSummary|null|undefined} Subclass
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.Subclass = null;

    /**
     * DestinyActiveCharacterSummary Bounties.
     * @member {Array.<IDestinyBountySummary>} Bounties
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.Bounties = $util.emptyArray;

    /**
     * DestinyActiveCharacterSummary Equipment.
     * @member {Array.<IDestinyItemSummary>} Equipment
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.Equipment = $util.emptyArray;

    /**
     * DestinyActiveCharacterSummary DestinyTrialsTicket.
     * @member {IDestinyTrialsTicket|null|undefined} DestinyTrialsTicket
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.DestinyTrialsTicket = null;

    /**
     * DestinyActiveCharacterSummary Metrics.
     * @member {Array.<IDestinyMetric>} Metrics
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.Metrics = $util.emptyArray;

    /**
     * DestinyActiveCharacterSummary CharacterId.
     * @member {number|Long} CharacterId
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.CharacterId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * DestinyActiveCharacterSummary LastValidPlaylistActivityHash.
     * @member {number} LastValidPlaylistActivityHash
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.LastValidPlaylistActivityHash = 0;

    /**
     * DestinyActiveCharacterSummary LastValidActivityHash.
     * @member {number} LastValidActivityHash
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.LastValidActivityHash = 0;

    /**
     * DestinyActiveCharacterSummary IsPlayingTrials.
     * @member {boolean} IsPlayingTrials
     * @memberof DestinyActiveCharacterSummary
     * @instance
     */
    DestinyActiveCharacterSummary.prototype.IsPlayingTrials = false;

    /**
     * Creates a new DestinyActiveCharacterSummary instance using the specified properties.
     * @function create
     * @memberof DestinyActiveCharacterSummary
     * @static
     * @param {IDestinyActiveCharacterSummary=} [properties] Properties to set
     * @returns {DestinyActiveCharacterSummary} DestinyActiveCharacterSummary instance
     */
    DestinyActiveCharacterSummary.create = function create(properties) {
        return new DestinyActiveCharacterSummary(properties);
    };

    /**
     * Encodes the specified DestinyActiveCharacterSummary message. Does not implicitly {@link DestinyActiveCharacterSummary.verify|verify} messages.
     * @function encode
     * @memberof DestinyActiveCharacterSummary
     * @static
     * @param {IDestinyActiveCharacterSummary} message DestinyActiveCharacterSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyActiveCharacterSummary.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.DisplayName != null && message.hasOwnProperty("DisplayName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.DisplayName);
        if (message.PlatformType != null && message.hasOwnProperty("PlatformType"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.PlatformType);
        if (message.EmblemHash != null && message.hasOwnProperty("EmblemHash"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.EmblemHash);
        if (message.ActivityHash != null && message.hasOwnProperty("ActivityHash"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.ActivityHash);
        if (message.PlaylistActivityHash != null && message.hasOwnProperty("PlaylistActivityHash"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.PlaylistActivityHash);
        if (message.ActivityStartSecondsSinceEpoch != null && message.hasOwnProperty("ActivityStartSecondsSinceEpoch"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.ActivityStartSecondsSinceEpoch);
        if (message.CharacterStats != null && message.CharacterStats.length)
            for (var i = 0; i < message.CharacterStats.length; ++i)
                $root.DestinyHashValue.encode(message.CharacterStats[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.Score != null && message.hasOwnProperty("Score"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.Score);
        if (message.RaceHash != null && message.hasOwnProperty("RaceHash"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.RaceHash);
        if (message.GenderHash != null && message.hasOwnProperty("GenderHash"))
            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.GenderHash);
        if (message.ClassHash != null && message.hasOwnProperty("ClassHash"))
            writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.ClassHash);
        if (message.Level != null && message.hasOwnProperty("Level"))
            writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.Level);
        if (message.TitleRecordHash != null && message.hasOwnProperty("TitleRecordHash"))
            writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.TitleRecordHash);
        if (message.Subclass != null && message.hasOwnProperty("Subclass"))
            $root.DestinySubclassSummary.encode(message.Subclass, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.Bounties != null && message.Bounties.length)
            for (var i = 0; i < message.Bounties.length; ++i)
                $root.DestinyBountySummary.encode(message.Bounties[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.Equipment != null && message.Equipment.length)
            for (var i = 0; i < message.Equipment.length; ++i)
                $root.DestinyItemSummary.encode(message.Equipment[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.DestinyTrialsTicket != null && message.hasOwnProperty("DestinyTrialsTicket"))
            $root.DestinyTrialsTicket.encode(message.DestinyTrialsTicket, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.Metrics != null && message.Metrics.length)
            for (var i = 0; i < message.Metrics.length; ++i)
                $root.DestinyMetric.encode(message.Metrics[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.CharacterId != null && message.hasOwnProperty("CharacterId"))
            writer.uint32(/* id 19, wireType 0 =*/152).int64(message.CharacterId);
        if (message.LastValidPlaylistActivityHash != null && message.hasOwnProperty("LastValidPlaylistActivityHash"))
            writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.LastValidPlaylistActivityHash);
        if (message.LastValidActivityHash != null && message.hasOwnProperty("LastValidActivityHash"))
            writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.LastValidActivityHash);
        if (message.IsPlayingTrials != null && message.hasOwnProperty("IsPlayingTrials"))
            writer.uint32(/* id 22, wireType 0 =*/176).bool(message.IsPlayingTrials);
        return writer;
    };

    /**
     * Encodes the specified DestinyActiveCharacterSummary message, length delimited. Does not implicitly {@link DestinyActiveCharacterSummary.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DestinyActiveCharacterSummary
     * @static
     * @param {IDestinyActiveCharacterSummary} message DestinyActiveCharacterSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyActiveCharacterSummary.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DestinyActiveCharacterSummary message from the specified reader or buffer.
     * @function decode
     * @memberof DestinyActiveCharacterSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DestinyActiveCharacterSummary} DestinyActiveCharacterSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyActiveCharacterSummary.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DestinyActiveCharacterSummary();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.DisplayName = reader.string();
                break;
            case 2:
                message.PlatformType = reader.string();
                break;
            case 3:
                message.EmblemHash = reader.uint32();
                break;
            case 4:
                message.ActivityHash = reader.uint32();
                break;
            case 5:
                message.PlaylistActivityHash = reader.uint32();
                break;
            case 6:
                message.ActivityStartSecondsSinceEpoch = reader.int32();
                break;
            case 7:
                if (!(message.CharacterStats && message.CharacterStats.length))
                    message.CharacterStats = [];
                message.CharacterStats.push($root.DestinyHashValue.decode(reader, reader.uint32()));
                break;
            case 8:
                message.Score = reader.int32();
                break;
            case 9:
                message.RaceHash = reader.uint32();
                break;
            case 10:
                message.GenderHash = reader.uint32();
                break;
            case 11:
                message.ClassHash = reader.uint32();
                break;
            case 12:
                message.Level = reader.uint32();
                break;
            case 13:
                message.TitleRecordHash = reader.uint32();
                break;
            case 14:
                message.Subclass = $root.DestinySubclassSummary.decode(reader, reader.uint32());
                break;
            case 15:
                if (!(message.Bounties && message.Bounties.length))
                    message.Bounties = [];
                message.Bounties.push($root.DestinyBountySummary.decode(reader, reader.uint32()));
                break;
            case 16:
                if (!(message.Equipment && message.Equipment.length))
                    message.Equipment = [];
                message.Equipment.push($root.DestinyItemSummary.decode(reader, reader.uint32()));
                break;
            case 17:
                message.DestinyTrialsTicket = $root.DestinyTrialsTicket.decode(reader, reader.uint32());
                break;
            case 18:
                if (!(message.Metrics && message.Metrics.length))
                    message.Metrics = [];
                message.Metrics.push($root.DestinyMetric.decode(reader, reader.uint32()));
                break;
            case 19:
                message.CharacterId = reader.int64();
                break;
            case 20:
                message.LastValidPlaylistActivityHash = reader.uint32();
                break;
            case 21:
                message.LastValidActivityHash = reader.uint32();
                break;
            case 22:
                message.IsPlayingTrials = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DestinyActiveCharacterSummary message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DestinyActiveCharacterSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DestinyActiveCharacterSummary} DestinyActiveCharacterSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyActiveCharacterSummary.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DestinyActiveCharacterSummary message.
     * @function verify
     * @memberof DestinyActiveCharacterSummary
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DestinyActiveCharacterSummary.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.DisplayName != null && message.hasOwnProperty("DisplayName"))
            if (!$util.isString(message.DisplayName))
                return "DisplayName: string expected";
        if (message.PlatformType != null && message.hasOwnProperty("PlatformType"))
            if (!$util.isString(message.PlatformType))
                return "PlatformType: string expected";
        if (message.EmblemHash != null && message.hasOwnProperty("EmblemHash"))
            if (!$util.isInteger(message.EmblemHash))
                return "EmblemHash: integer expected";
        if (message.ActivityHash != null && message.hasOwnProperty("ActivityHash"))
            if (!$util.isInteger(message.ActivityHash))
                return "ActivityHash: integer expected";
        if (message.PlaylistActivityHash != null && message.hasOwnProperty("PlaylistActivityHash"))
            if (!$util.isInteger(message.PlaylistActivityHash))
                return "PlaylistActivityHash: integer expected";
        if (message.ActivityStartSecondsSinceEpoch != null && message.hasOwnProperty("ActivityStartSecondsSinceEpoch"))
            if (!$util.isInteger(message.ActivityStartSecondsSinceEpoch))
                return "ActivityStartSecondsSinceEpoch: integer expected";
        if (message.CharacterStats != null && message.hasOwnProperty("CharacterStats")) {
            if (!Array.isArray(message.CharacterStats))
                return "CharacterStats: array expected";
            for (var i = 0; i < message.CharacterStats.length; ++i) {
                var error = $root.DestinyHashValue.verify(message.CharacterStats[i]);
                if (error)
                    return "CharacterStats." + error;
            }
        }
        if (message.Score != null && message.hasOwnProperty("Score"))
            if (!$util.isInteger(message.Score))
                return "Score: integer expected";
        if (message.RaceHash != null && message.hasOwnProperty("RaceHash"))
            if (!$util.isInteger(message.RaceHash))
                return "RaceHash: integer expected";
        if (message.GenderHash != null && message.hasOwnProperty("GenderHash"))
            if (!$util.isInteger(message.GenderHash))
                return "GenderHash: integer expected";
        if (message.ClassHash != null && message.hasOwnProperty("ClassHash"))
            if (!$util.isInteger(message.ClassHash))
                return "ClassHash: integer expected";
        if (message.Level != null && message.hasOwnProperty("Level"))
            if (!$util.isInteger(message.Level))
                return "Level: integer expected";
        if (message.TitleRecordHash != null && message.hasOwnProperty("TitleRecordHash"))
            if (!$util.isInteger(message.TitleRecordHash))
                return "TitleRecordHash: integer expected";
        if (message.Subclass != null && message.hasOwnProperty("Subclass")) {
            var error = $root.DestinySubclassSummary.verify(message.Subclass);
            if (error)
                return "Subclass." + error;
        }
        if (message.Bounties != null && message.hasOwnProperty("Bounties")) {
            if (!Array.isArray(message.Bounties))
                return "Bounties: array expected";
            for (var i = 0; i < message.Bounties.length; ++i) {
                var error = $root.DestinyBountySummary.verify(message.Bounties[i]);
                if (error)
                    return "Bounties." + error;
            }
        }
        if (message.Equipment != null && message.hasOwnProperty("Equipment")) {
            if (!Array.isArray(message.Equipment))
                return "Equipment: array expected";
            for (var i = 0; i < message.Equipment.length; ++i) {
                var error = $root.DestinyItemSummary.verify(message.Equipment[i]);
                if (error)
                    return "Equipment." + error;
            }
        }
        if (message.DestinyTrialsTicket != null && message.hasOwnProperty("DestinyTrialsTicket")) {
            var error = $root.DestinyTrialsTicket.verify(message.DestinyTrialsTicket);
            if (error)
                return "DestinyTrialsTicket." + error;
        }
        if (message.Metrics != null && message.hasOwnProperty("Metrics")) {
            if (!Array.isArray(message.Metrics))
                return "Metrics: array expected";
            for (var i = 0; i < message.Metrics.length; ++i) {
                var error = $root.DestinyMetric.verify(message.Metrics[i]);
                if (error)
                    return "Metrics." + error;
            }
        }
        if (message.CharacterId != null && message.hasOwnProperty("CharacterId"))
            if (!$util.isInteger(message.CharacterId) && !(message.CharacterId && $util.isInteger(message.CharacterId.low) && $util.isInteger(message.CharacterId.high)))
                return "CharacterId: integer|Long expected";
        if (message.LastValidPlaylistActivityHash != null && message.hasOwnProperty("LastValidPlaylistActivityHash"))
            if (!$util.isInteger(message.LastValidPlaylistActivityHash))
                return "LastValidPlaylistActivityHash: integer expected";
        if (message.LastValidActivityHash != null && message.hasOwnProperty("LastValidActivityHash"))
            if (!$util.isInteger(message.LastValidActivityHash))
                return "LastValidActivityHash: integer expected";
        if (message.IsPlayingTrials != null && message.hasOwnProperty("IsPlayingTrials"))
            if (typeof message.IsPlayingTrials !== "boolean")
                return "IsPlayingTrials: boolean expected";
        return null;
    };

    /**
     * Creates a DestinyActiveCharacterSummary message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DestinyActiveCharacterSummary
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DestinyActiveCharacterSummary} DestinyActiveCharacterSummary
     */
    DestinyActiveCharacterSummary.fromObject = function fromObject(object) {
        if (object instanceof $root.DestinyActiveCharacterSummary)
            return object;
        var message = new $root.DestinyActiveCharacterSummary();
        if (object.DisplayName != null)
            message.DisplayName = String(object.DisplayName);
        if (object.PlatformType != null)
            message.PlatformType = String(object.PlatformType);
        if (object.EmblemHash != null)
            message.EmblemHash = object.EmblemHash >>> 0;
        if (object.ActivityHash != null)
            message.ActivityHash = object.ActivityHash >>> 0;
        if (object.PlaylistActivityHash != null)
            message.PlaylistActivityHash = object.PlaylistActivityHash >>> 0;
        if (object.ActivityStartSecondsSinceEpoch != null)
            message.ActivityStartSecondsSinceEpoch = object.ActivityStartSecondsSinceEpoch | 0;
        if (object.CharacterStats) {
            if (!Array.isArray(object.CharacterStats))
                throw TypeError(".DestinyActiveCharacterSummary.CharacterStats: array expected");
            message.CharacterStats = [];
            for (var i = 0; i < object.CharacterStats.length; ++i) {
                if (typeof object.CharacterStats[i] !== "object")
                    throw TypeError(".DestinyActiveCharacterSummary.CharacterStats: object expected");
                message.CharacterStats[i] = $root.DestinyHashValue.fromObject(object.CharacterStats[i]);
            }
        }
        if (object.Score != null)
            message.Score = object.Score | 0;
        if (object.RaceHash != null)
            message.RaceHash = object.RaceHash >>> 0;
        if (object.GenderHash != null)
            message.GenderHash = object.GenderHash >>> 0;
        if (object.ClassHash != null)
            message.ClassHash = object.ClassHash >>> 0;
        if (object.Level != null)
            message.Level = object.Level >>> 0;
        if (object.TitleRecordHash != null)
            message.TitleRecordHash = object.TitleRecordHash >>> 0;
        if (object.Subclass != null) {
            if (typeof object.Subclass !== "object")
                throw TypeError(".DestinyActiveCharacterSummary.Subclass: object expected");
            message.Subclass = $root.DestinySubclassSummary.fromObject(object.Subclass);
        }
        if (object.Bounties) {
            if (!Array.isArray(object.Bounties))
                throw TypeError(".DestinyActiveCharacterSummary.Bounties: array expected");
            message.Bounties = [];
            for (var i = 0; i < object.Bounties.length; ++i) {
                if (typeof object.Bounties[i] !== "object")
                    throw TypeError(".DestinyActiveCharacterSummary.Bounties: object expected");
                message.Bounties[i] = $root.DestinyBountySummary.fromObject(object.Bounties[i]);
            }
        }
        if (object.Equipment) {
            if (!Array.isArray(object.Equipment))
                throw TypeError(".DestinyActiveCharacterSummary.Equipment: array expected");
            message.Equipment = [];
            for (var i = 0; i < object.Equipment.length; ++i) {
                if (typeof object.Equipment[i] !== "object")
                    throw TypeError(".DestinyActiveCharacterSummary.Equipment: object expected");
                message.Equipment[i] = $root.DestinyItemSummary.fromObject(object.Equipment[i]);
            }
        }
        if (object.DestinyTrialsTicket != null) {
            if (typeof object.DestinyTrialsTicket !== "object")
                throw TypeError(".DestinyActiveCharacterSummary.DestinyTrialsTicket: object expected");
            message.DestinyTrialsTicket = $root.DestinyTrialsTicket.fromObject(object.DestinyTrialsTicket);
        }
        if (object.Metrics) {
            if (!Array.isArray(object.Metrics))
                throw TypeError(".DestinyActiveCharacterSummary.Metrics: array expected");
            message.Metrics = [];
            for (var i = 0; i < object.Metrics.length; ++i) {
                if (typeof object.Metrics[i] !== "object")
                    throw TypeError(".DestinyActiveCharacterSummary.Metrics: object expected");
                message.Metrics[i] = $root.DestinyMetric.fromObject(object.Metrics[i]);
            }
        }
        if (object.CharacterId != null)
            if ($util.Long)
                (message.CharacterId = $util.Long.fromValue(object.CharacterId)).unsigned = false;
            else if (typeof object.CharacterId === "string")
                message.CharacterId = parseInt(object.CharacterId, 10);
            else if (typeof object.CharacterId === "number")
                message.CharacterId = object.CharacterId;
            else if (typeof object.CharacterId === "object")
                message.CharacterId = new $util.LongBits(object.CharacterId.low >>> 0, object.CharacterId.high >>> 0).toNumber();
        if (object.LastValidPlaylistActivityHash != null)
            message.LastValidPlaylistActivityHash = object.LastValidPlaylistActivityHash >>> 0;
        if (object.LastValidActivityHash != null)
            message.LastValidActivityHash = object.LastValidActivityHash >>> 0;
        if (object.IsPlayingTrials != null)
            message.IsPlayingTrials = Boolean(object.IsPlayingTrials);
        return message;
    };

    /**
     * Creates a plain object from a DestinyActiveCharacterSummary message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DestinyActiveCharacterSummary
     * @static
     * @param {DestinyActiveCharacterSummary} message DestinyActiveCharacterSummary
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DestinyActiveCharacterSummary.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.CharacterStats = [];
            object.Bounties = [];
            object.Equipment = [];
            object.Metrics = [];
        }
        if (options.defaults) {
            object.DisplayName = "";
            object.PlatformType = "";
            object.EmblemHash = 0;
            object.ActivityHash = 0;
            object.PlaylistActivityHash = 0;
            object.ActivityStartSecondsSinceEpoch = 0;
            object.Score = 0;
            object.RaceHash = 0;
            object.GenderHash = 0;
            object.ClassHash = 0;
            object.Level = 0;
            object.TitleRecordHash = 0;
            object.Subclass = null;
            object.DestinyTrialsTicket = null;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.CharacterId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.CharacterId = options.longs === String ? "0" : 0;
            object.LastValidPlaylistActivityHash = 0;
            object.LastValidActivityHash = 0;
            object.IsPlayingTrials = false;
        }
        if (message.DisplayName != null && message.hasOwnProperty("DisplayName"))
            object.DisplayName = message.DisplayName;
        if (message.PlatformType != null && message.hasOwnProperty("PlatformType"))
            object.PlatformType = message.PlatformType;
        if (message.EmblemHash != null && message.hasOwnProperty("EmblemHash"))
            object.EmblemHash = message.EmblemHash;
        if (message.ActivityHash != null && message.hasOwnProperty("ActivityHash"))
            object.ActivityHash = message.ActivityHash;
        if (message.PlaylistActivityHash != null && message.hasOwnProperty("PlaylistActivityHash"))
            object.PlaylistActivityHash = message.PlaylistActivityHash;
        if (message.ActivityStartSecondsSinceEpoch != null && message.hasOwnProperty("ActivityStartSecondsSinceEpoch"))
            object.ActivityStartSecondsSinceEpoch = message.ActivityStartSecondsSinceEpoch;
        if (message.CharacterStats && message.CharacterStats.length) {
            object.CharacterStats = [];
            for (var j = 0; j < message.CharacterStats.length; ++j)
                object.CharacterStats[j] = $root.DestinyHashValue.toObject(message.CharacterStats[j], options);
        }
        if (message.Score != null && message.hasOwnProperty("Score"))
            object.Score = message.Score;
        if (message.RaceHash != null && message.hasOwnProperty("RaceHash"))
            object.RaceHash = message.RaceHash;
        if (message.GenderHash != null && message.hasOwnProperty("GenderHash"))
            object.GenderHash = message.GenderHash;
        if (message.ClassHash != null && message.hasOwnProperty("ClassHash"))
            object.ClassHash = message.ClassHash;
        if (message.Level != null && message.hasOwnProperty("Level"))
            object.Level = message.Level;
        if (message.TitleRecordHash != null && message.hasOwnProperty("TitleRecordHash"))
            object.TitleRecordHash = message.TitleRecordHash;
        if (message.Subclass != null && message.hasOwnProperty("Subclass"))
            object.Subclass = $root.DestinySubclassSummary.toObject(message.Subclass, options);
        if (message.Bounties && message.Bounties.length) {
            object.Bounties = [];
            for (var j = 0; j < message.Bounties.length; ++j)
                object.Bounties[j] = $root.DestinyBountySummary.toObject(message.Bounties[j], options);
        }
        if (message.Equipment && message.Equipment.length) {
            object.Equipment = [];
            for (var j = 0; j < message.Equipment.length; ++j)
                object.Equipment[j] = $root.DestinyItemSummary.toObject(message.Equipment[j], options);
        }
        if (message.DestinyTrialsTicket != null && message.hasOwnProperty("DestinyTrialsTicket"))
            object.DestinyTrialsTicket = $root.DestinyTrialsTicket.toObject(message.DestinyTrialsTicket, options);
        if (message.Metrics && message.Metrics.length) {
            object.Metrics = [];
            for (var j = 0; j < message.Metrics.length; ++j)
                object.Metrics[j] = $root.DestinyMetric.toObject(message.Metrics[j], options);
        }
        if (message.CharacterId != null && message.hasOwnProperty("CharacterId"))
            if (typeof message.CharacterId === "number")
                object.CharacterId = options.longs === String ? String(message.CharacterId) : message.CharacterId;
            else
                object.CharacterId = options.longs === String ? $util.Long.prototype.toString.call(message.CharacterId) : options.longs === Number ? new $util.LongBits(message.CharacterId.low >>> 0, message.CharacterId.high >>> 0).toNumber() : message.CharacterId;
        if (message.LastValidPlaylistActivityHash != null && message.hasOwnProperty("LastValidPlaylistActivityHash"))
            object.LastValidPlaylistActivityHash = message.LastValidPlaylistActivityHash;
        if (message.LastValidActivityHash != null && message.hasOwnProperty("LastValidActivityHash"))
            object.LastValidActivityHash = message.LastValidActivityHash;
        if (message.IsPlayingTrials != null && message.hasOwnProperty("IsPlayingTrials"))
            object.IsPlayingTrials = message.IsPlayingTrials;
        return object;
    };

    /**
     * Converts this DestinyActiveCharacterSummary to JSON.
     * @function toJSON
     * @memberof DestinyActiveCharacterSummary
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DestinyActiveCharacterSummary.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DestinyActiveCharacterSummary;
})();

$root.BroadcasterSystemStatus = (function() {

    /**
     * Properties of a BroadcasterSystemStatus.
     * @exports IBroadcasterSystemStatus
     * @interface IBroadcasterSystemStatus
     * @property {boolean|null} [Extension] BroadcasterSystemStatus Extension
     * @property {boolean|null} [Destiny] BroadcasterSystemStatus Destiny
     * @property {boolean|null} [StatusUpdates] BroadcasterSystemStatus StatusUpdates
     * @property {boolean|null} [GiftSubscriptions] BroadcasterSystemStatus GiftSubscriptions
     * @property {boolean|null} [Reactions] BroadcasterSystemStatus Reactions
     * @property {boolean|null} [StreamerMustReauth] BroadcasterSystemStatus StreamerMustReauth
     * @property {Object.<string,string>|null} [Settings] BroadcasterSystemStatus Settings
     */

    /**
     * Constructs a new BroadcasterSystemStatus.
     * @exports BroadcasterSystemStatus
     * @classdesc Represents a BroadcasterSystemStatus.
     * @implements IBroadcasterSystemStatus
     * @constructor
     * @param {IBroadcasterSystemStatus=} [properties] Properties to set
     */
    function BroadcasterSystemStatus(properties) {
        this.Settings = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BroadcasterSystemStatus Extension.
     * @member {boolean} Extension
     * @memberof BroadcasterSystemStatus
     * @instance
     */
    BroadcasterSystemStatus.prototype.Extension = false;

    /**
     * BroadcasterSystemStatus Destiny.
     * @member {boolean} Destiny
     * @memberof BroadcasterSystemStatus
     * @instance
     */
    BroadcasterSystemStatus.prototype.Destiny = false;

    /**
     * BroadcasterSystemStatus StatusUpdates.
     * @member {boolean} StatusUpdates
     * @memberof BroadcasterSystemStatus
     * @instance
     */
    BroadcasterSystemStatus.prototype.StatusUpdates = false;

    /**
     * BroadcasterSystemStatus GiftSubscriptions.
     * @member {boolean} GiftSubscriptions
     * @memberof BroadcasterSystemStatus
     * @instance
     */
    BroadcasterSystemStatus.prototype.GiftSubscriptions = false;

    /**
     * BroadcasterSystemStatus Reactions.
     * @member {boolean} Reactions
     * @memberof BroadcasterSystemStatus
     * @instance
     */
    BroadcasterSystemStatus.prototype.Reactions = false;

    /**
     * BroadcasterSystemStatus StreamerMustReauth.
     * @member {boolean} StreamerMustReauth
     * @memberof BroadcasterSystemStatus
     * @instance
     */
    BroadcasterSystemStatus.prototype.StreamerMustReauth = false;

    /**
     * BroadcasterSystemStatus Settings.
     * @member {Object.<string,string>} Settings
     * @memberof BroadcasterSystemStatus
     * @instance
     */
    BroadcasterSystemStatus.prototype.Settings = $util.emptyObject;

    /**
     * Creates a new BroadcasterSystemStatus instance using the specified properties.
     * @function create
     * @memberof BroadcasterSystemStatus
     * @static
     * @param {IBroadcasterSystemStatus=} [properties] Properties to set
     * @returns {BroadcasterSystemStatus} BroadcasterSystemStatus instance
     */
    BroadcasterSystemStatus.create = function create(properties) {
        return new BroadcasterSystemStatus(properties);
    };

    /**
     * Encodes the specified BroadcasterSystemStatus message. Does not implicitly {@link BroadcasterSystemStatus.verify|verify} messages.
     * @function encode
     * @memberof BroadcasterSystemStatus
     * @static
     * @param {IBroadcasterSystemStatus} message BroadcasterSystemStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BroadcasterSystemStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Extension != null && message.hasOwnProperty("Extension"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.Extension);
        if (message.Destiny != null && message.hasOwnProperty("Destiny"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.Destiny);
        if (message.StatusUpdates != null && message.hasOwnProperty("StatusUpdates"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.StatusUpdates);
        if (message.GiftSubscriptions != null && message.hasOwnProperty("GiftSubscriptions"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.GiftSubscriptions);
        if (message.Reactions != null && message.hasOwnProperty("Reactions"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.Reactions);
        if (message.StreamerMustReauth != null && message.hasOwnProperty("StreamerMustReauth"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.StreamerMustReauth);
        if (message.Settings != null && message.hasOwnProperty("Settings"))
            for (var keys = Object.keys(message.Settings), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.Settings[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified BroadcasterSystemStatus message, length delimited. Does not implicitly {@link BroadcasterSystemStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BroadcasterSystemStatus
     * @static
     * @param {IBroadcasterSystemStatus} message BroadcasterSystemStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BroadcasterSystemStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BroadcasterSystemStatus message from the specified reader or buffer.
     * @function decode
     * @memberof BroadcasterSystemStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BroadcasterSystemStatus} BroadcasterSystemStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BroadcasterSystemStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BroadcasterSystemStatus(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Extension = reader.bool();
                break;
            case 2:
                message.Destiny = reader.bool();
                break;
            case 3:
                message.StatusUpdates = reader.bool();
                break;
            case 4:
                message.GiftSubscriptions = reader.bool();
                break;
            case 5:
                message.Reactions = reader.bool();
                break;
            case 6:
                message.StreamerMustReauth = reader.bool();
                break;
            case 7:
                reader.skip().pos++;
                if (message.Settings === $util.emptyObject)
                    message.Settings = {};
                key = reader.string();
                reader.pos++;
                message.Settings[key] = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BroadcasterSystemStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BroadcasterSystemStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BroadcasterSystemStatus} BroadcasterSystemStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BroadcasterSystemStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BroadcasterSystemStatus message.
     * @function verify
     * @memberof BroadcasterSystemStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BroadcasterSystemStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Extension != null && message.hasOwnProperty("Extension"))
            if (typeof message.Extension !== "boolean")
                return "Extension: boolean expected";
        if (message.Destiny != null && message.hasOwnProperty("Destiny"))
            if (typeof message.Destiny !== "boolean")
                return "Destiny: boolean expected";
        if (message.StatusUpdates != null && message.hasOwnProperty("StatusUpdates"))
            if (typeof message.StatusUpdates !== "boolean")
                return "StatusUpdates: boolean expected";
        if (message.GiftSubscriptions != null && message.hasOwnProperty("GiftSubscriptions"))
            if (typeof message.GiftSubscriptions !== "boolean")
                return "GiftSubscriptions: boolean expected";
        if (message.Reactions != null && message.hasOwnProperty("Reactions"))
            if (typeof message.Reactions !== "boolean")
                return "Reactions: boolean expected";
        if (message.StreamerMustReauth != null && message.hasOwnProperty("StreamerMustReauth"))
            if (typeof message.StreamerMustReauth !== "boolean")
                return "StreamerMustReauth: boolean expected";
        if (message.Settings != null && message.hasOwnProperty("Settings")) {
            if (!$util.isObject(message.Settings))
                return "Settings: object expected";
            var key = Object.keys(message.Settings);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isString(message.Settings[key[i]]))
                    return "Settings: string{k:string} expected";
        }
        return null;
    };

    /**
     * Creates a BroadcasterSystemStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BroadcasterSystemStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BroadcasterSystemStatus} BroadcasterSystemStatus
     */
    BroadcasterSystemStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.BroadcasterSystemStatus)
            return object;
        var message = new $root.BroadcasterSystemStatus();
        if (object.Extension != null)
            message.Extension = Boolean(object.Extension);
        if (object.Destiny != null)
            message.Destiny = Boolean(object.Destiny);
        if (object.StatusUpdates != null)
            message.StatusUpdates = Boolean(object.StatusUpdates);
        if (object.GiftSubscriptions != null)
            message.GiftSubscriptions = Boolean(object.GiftSubscriptions);
        if (object.Reactions != null)
            message.Reactions = Boolean(object.Reactions);
        if (object.StreamerMustReauth != null)
            message.StreamerMustReauth = Boolean(object.StreamerMustReauth);
        if (object.Settings) {
            if (typeof object.Settings !== "object")
                throw TypeError(".BroadcasterSystemStatus.Settings: object expected");
            message.Settings = {};
            for (var keys = Object.keys(object.Settings), i = 0; i < keys.length; ++i)
                message.Settings[keys[i]] = String(object.Settings[keys[i]]);
        }
        return message;
    };

    /**
     * Creates a plain object from a BroadcasterSystemStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BroadcasterSystemStatus
     * @static
     * @param {BroadcasterSystemStatus} message BroadcasterSystemStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BroadcasterSystemStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.Settings = {};
        if (options.defaults) {
            object.Extension = false;
            object.Destiny = false;
            object.StatusUpdates = false;
            object.GiftSubscriptions = false;
            object.Reactions = false;
            object.StreamerMustReauth = false;
        }
        if (message.Extension != null && message.hasOwnProperty("Extension"))
            object.Extension = message.Extension;
        if (message.Destiny != null && message.hasOwnProperty("Destiny"))
            object.Destiny = message.Destiny;
        if (message.StatusUpdates != null && message.hasOwnProperty("StatusUpdates"))
            object.StatusUpdates = message.StatusUpdates;
        if (message.GiftSubscriptions != null && message.hasOwnProperty("GiftSubscriptions"))
            object.GiftSubscriptions = message.GiftSubscriptions;
        if (message.Reactions != null && message.hasOwnProperty("Reactions"))
            object.Reactions = message.Reactions;
        if (message.StreamerMustReauth != null && message.hasOwnProperty("StreamerMustReauth"))
            object.StreamerMustReauth = message.StreamerMustReauth;
        var keys2;
        if (message.Settings && (keys2 = Object.keys(message.Settings)).length) {
            object.Settings = {};
            for (var j = 0; j < keys2.length; ++j)
                object.Settings[keys2[j]] = message.Settings[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this BroadcasterSystemStatus to JSON.
     * @function toJSON
     * @memberof BroadcasterSystemStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BroadcasterSystemStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BroadcasterSystemStatus;
})();

$root.DestinyActivityEndMessage = (function() {

    /**
     * Properties of a DestinyActivityEndMessage.
     * @exports IDestinyActivityEndMessage
     * @interface IDestinyActivityEndMessage
     * @property {boolean|null} [ActivityWon] DestinyActivityEndMessage ActivityWon
     * @property {number|null} [DateEndedSecondsSinceEpoch] DestinyActivityEndMessage DateEndedSecondsSinceEpoch
     * @property {number|null} [ServerState] DestinyActivityEndMessage ServerState
     */

    /**
     * Constructs a new DestinyActivityEndMessage.
     * @exports DestinyActivityEndMessage
     * @classdesc Represents a DestinyActivityEndMessage.
     * @implements IDestinyActivityEndMessage
     * @constructor
     * @param {IDestinyActivityEndMessage=} [properties] Properties to set
     */
    function DestinyActivityEndMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DestinyActivityEndMessage ActivityWon.
     * @member {boolean} ActivityWon
     * @memberof DestinyActivityEndMessage
     * @instance
     */
    DestinyActivityEndMessage.prototype.ActivityWon = false;

    /**
     * DestinyActivityEndMessage DateEndedSecondsSinceEpoch.
     * @member {number} DateEndedSecondsSinceEpoch
     * @memberof DestinyActivityEndMessage
     * @instance
     */
    DestinyActivityEndMessage.prototype.DateEndedSecondsSinceEpoch = 0;

    /**
     * DestinyActivityEndMessage ServerState.
     * @member {number} ServerState
     * @memberof DestinyActivityEndMessage
     * @instance
     */
    DestinyActivityEndMessage.prototype.ServerState = 0;

    /**
     * Creates a new DestinyActivityEndMessage instance using the specified properties.
     * @function create
     * @memberof DestinyActivityEndMessage
     * @static
     * @param {IDestinyActivityEndMessage=} [properties] Properties to set
     * @returns {DestinyActivityEndMessage} DestinyActivityEndMessage instance
     */
    DestinyActivityEndMessage.create = function create(properties) {
        return new DestinyActivityEndMessage(properties);
    };

    /**
     * Encodes the specified DestinyActivityEndMessage message. Does not implicitly {@link DestinyActivityEndMessage.verify|verify} messages.
     * @function encode
     * @memberof DestinyActivityEndMessage
     * @static
     * @param {IDestinyActivityEndMessage} message DestinyActivityEndMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyActivityEndMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ActivityWon != null && message.hasOwnProperty("ActivityWon"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ActivityWon);
        if (message.DateEndedSecondsSinceEpoch != null && message.hasOwnProperty("DateEndedSecondsSinceEpoch"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.DateEndedSecondsSinceEpoch);
        if (message.ServerState != null && message.hasOwnProperty("ServerState"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ServerState);
        return writer;
    };

    /**
     * Encodes the specified DestinyActivityEndMessage message, length delimited. Does not implicitly {@link DestinyActivityEndMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DestinyActivityEndMessage
     * @static
     * @param {IDestinyActivityEndMessage} message DestinyActivityEndMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyActivityEndMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DestinyActivityEndMessage message from the specified reader or buffer.
     * @function decode
     * @memberof DestinyActivityEndMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DestinyActivityEndMessage} DestinyActivityEndMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyActivityEndMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DestinyActivityEndMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ActivityWon = reader.bool();
                break;
            case 2:
                message.DateEndedSecondsSinceEpoch = reader.int32();
                break;
            case 3:
                message.ServerState = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DestinyActivityEndMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DestinyActivityEndMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DestinyActivityEndMessage} DestinyActivityEndMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyActivityEndMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DestinyActivityEndMessage message.
     * @function verify
     * @memberof DestinyActivityEndMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DestinyActivityEndMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ActivityWon != null && message.hasOwnProperty("ActivityWon"))
            if (typeof message.ActivityWon !== "boolean")
                return "ActivityWon: boolean expected";
        if (message.DateEndedSecondsSinceEpoch != null && message.hasOwnProperty("DateEndedSecondsSinceEpoch"))
            if (!$util.isInteger(message.DateEndedSecondsSinceEpoch))
                return "DateEndedSecondsSinceEpoch: integer expected";
        if (message.ServerState != null && message.hasOwnProperty("ServerState"))
            if (!$util.isInteger(message.ServerState))
                return "ServerState: integer expected";
        return null;
    };

    /**
     * Creates a DestinyActivityEndMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DestinyActivityEndMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DestinyActivityEndMessage} DestinyActivityEndMessage
     */
    DestinyActivityEndMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.DestinyActivityEndMessage)
            return object;
        var message = new $root.DestinyActivityEndMessage();
        if (object.ActivityWon != null)
            message.ActivityWon = Boolean(object.ActivityWon);
        if (object.DateEndedSecondsSinceEpoch != null)
            message.DateEndedSecondsSinceEpoch = object.DateEndedSecondsSinceEpoch | 0;
        if (object.ServerState != null)
            message.ServerState = object.ServerState | 0;
        return message;
    };

    /**
     * Creates a plain object from a DestinyActivityEndMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DestinyActivityEndMessage
     * @static
     * @param {DestinyActivityEndMessage} message DestinyActivityEndMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DestinyActivityEndMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ActivityWon = false;
            object.DateEndedSecondsSinceEpoch = 0;
            object.ServerState = 0;
        }
        if (message.ActivityWon != null && message.hasOwnProperty("ActivityWon"))
            object.ActivityWon = message.ActivityWon;
        if (message.DateEndedSecondsSinceEpoch != null && message.hasOwnProperty("DateEndedSecondsSinceEpoch"))
            object.DateEndedSecondsSinceEpoch = message.DateEndedSecondsSinceEpoch;
        if (message.ServerState != null && message.hasOwnProperty("ServerState"))
            object.ServerState = message.ServerState;
        return object;
    };

    /**
     * Converts this DestinyActivityEndMessage to JSON.
     * @function toJSON
     * @memberof DestinyActivityEndMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DestinyActivityEndMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DestinyActivityEndMessage;
})();

$root.DestinyPlayerUpdateMessage = (function() {

    /**
     * Properties of a DestinyPlayerUpdateMessage.
     * @exports IDestinyPlayerUpdateMessage
     * @interface IDestinyPlayerUpdateMessage
     * @property {IDestinyActiveCharacterSummary|null} [ActiveDestinyCharacter] DestinyPlayerUpdateMessage ActiveDestinyCharacter
     */

    /**
     * Constructs a new DestinyPlayerUpdateMessage.
     * @exports DestinyPlayerUpdateMessage
     * @classdesc Represents a DestinyPlayerUpdateMessage.
     * @implements IDestinyPlayerUpdateMessage
     * @constructor
     * @param {IDestinyPlayerUpdateMessage=} [properties] Properties to set
     */
    function DestinyPlayerUpdateMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DestinyPlayerUpdateMessage ActiveDestinyCharacter.
     * @member {IDestinyActiveCharacterSummary|null|undefined} ActiveDestinyCharacter
     * @memberof DestinyPlayerUpdateMessage
     * @instance
     */
    DestinyPlayerUpdateMessage.prototype.ActiveDestinyCharacter = null;

    /**
     * Creates a new DestinyPlayerUpdateMessage instance using the specified properties.
     * @function create
     * @memberof DestinyPlayerUpdateMessage
     * @static
     * @param {IDestinyPlayerUpdateMessage=} [properties] Properties to set
     * @returns {DestinyPlayerUpdateMessage} DestinyPlayerUpdateMessage instance
     */
    DestinyPlayerUpdateMessage.create = function create(properties) {
        return new DestinyPlayerUpdateMessage(properties);
    };

    /**
     * Encodes the specified DestinyPlayerUpdateMessage message. Does not implicitly {@link DestinyPlayerUpdateMessage.verify|verify} messages.
     * @function encode
     * @memberof DestinyPlayerUpdateMessage
     * @static
     * @param {IDestinyPlayerUpdateMessage} message DestinyPlayerUpdateMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyPlayerUpdateMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ActiveDestinyCharacter != null && message.hasOwnProperty("ActiveDestinyCharacter"))
            $root.DestinyActiveCharacterSummary.encode(message.ActiveDestinyCharacter, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DestinyPlayerUpdateMessage message, length delimited. Does not implicitly {@link DestinyPlayerUpdateMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DestinyPlayerUpdateMessage
     * @static
     * @param {IDestinyPlayerUpdateMessage} message DestinyPlayerUpdateMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyPlayerUpdateMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DestinyPlayerUpdateMessage message from the specified reader or buffer.
     * @function decode
     * @memberof DestinyPlayerUpdateMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DestinyPlayerUpdateMessage} DestinyPlayerUpdateMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyPlayerUpdateMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DestinyPlayerUpdateMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ActiveDestinyCharacter = $root.DestinyActiveCharacterSummary.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DestinyPlayerUpdateMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DestinyPlayerUpdateMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DestinyPlayerUpdateMessage} DestinyPlayerUpdateMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyPlayerUpdateMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DestinyPlayerUpdateMessage message.
     * @function verify
     * @memberof DestinyPlayerUpdateMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DestinyPlayerUpdateMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ActiveDestinyCharacter != null && message.hasOwnProperty("ActiveDestinyCharacter")) {
            var error = $root.DestinyActiveCharacterSummary.verify(message.ActiveDestinyCharacter);
            if (error)
                return "ActiveDestinyCharacter." + error;
        }
        return null;
    };

    /**
     * Creates a DestinyPlayerUpdateMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DestinyPlayerUpdateMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DestinyPlayerUpdateMessage} DestinyPlayerUpdateMessage
     */
    DestinyPlayerUpdateMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.DestinyPlayerUpdateMessage)
            return object;
        var message = new $root.DestinyPlayerUpdateMessage();
        if (object.ActiveDestinyCharacter != null) {
            if (typeof object.ActiveDestinyCharacter !== "object")
                throw TypeError(".DestinyPlayerUpdateMessage.ActiveDestinyCharacter: object expected");
            message.ActiveDestinyCharacter = $root.DestinyActiveCharacterSummary.fromObject(object.ActiveDestinyCharacter);
        }
        return message;
    };

    /**
     * Creates a plain object from a DestinyPlayerUpdateMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DestinyPlayerUpdateMessage
     * @static
     * @param {DestinyPlayerUpdateMessage} message DestinyPlayerUpdateMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DestinyPlayerUpdateMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.ActiveDestinyCharacter = null;
        if (message.ActiveDestinyCharacter != null && message.hasOwnProperty("ActiveDestinyCharacter"))
            object.ActiveDestinyCharacter = $root.DestinyActiveCharacterSummary.toObject(message.ActiveDestinyCharacter, options);
        return object;
    };

    /**
     * Converts this DestinyPlayerUpdateMessage to JSON.
     * @function toJSON
     * @memberof DestinyPlayerUpdateMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DestinyPlayerUpdateMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DestinyPlayerUpdateMessage;
})();

$root.DestinyStreamEndMessage = (function() {

    /**
     * Properties of a DestinyStreamEndMessage.
     * @exports IDestinyStreamEndMessage
     * @interface IDestinyStreamEndMessage
     * @property {number|null} [DateEndedSecondsSinceEpoch] DestinyStreamEndMessage DateEndedSecondsSinceEpoch
     */

    /**
     * Constructs a new DestinyStreamEndMessage.
     * @exports DestinyStreamEndMessage
     * @classdesc Represents a DestinyStreamEndMessage.
     * @implements IDestinyStreamEndMessage
     * @constructor
     * @param {IDestinyStreamEndMessage=} [properties] Properties to set
     */
    function DestinyStreamEndMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DestinyStreamEndMessage DateEndedSecondsSinceEpoch.
     * @member {number} DateEndedSecondsSinceEpoch
     * @memberof DestinyStreamEndMessage
     * @instance
     */
    DestinyStreamEndMessage.prototype.DateEndedSecondsSinceEpoch = 0;

    /**
     * Creates a new DestinyStreamEndMessage instance using the specified properties.
     * @function create
     * @memberof DestinyStreamEndMessage
     * @static
     * @param {IDestinyStreamEndMessage=} [properties] Properties to set
     * @returns {DestinyStreamEndMessage} DestinyStreamEndMessage instance
     */
    DestinyStreamEndMessage.create = function create(properties) {
        return new DestinyStreamEndMessage(properties);
    };

    /**
     * Encodes the specified DestinyStreamEndMessage message. Does not implicitly {@link DestinyStreamEndMessage.verify|verify} messages.
     * @function encode
     * @memberof DestinyStreamEndMessage
     * @static
     * @param {IDestinyStreamEndMessage} message DestinyStreamEndMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyStreamEndMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.DateEndedSecondsSinceEpoch != null && message.hasOwnProperty("DateEndedSecondsSinceEpoch"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.DateEndedSecondsSinceEpoch);
        return writer;
    };

    /**
     * Encodes the specified DestinyStreamEndMessage message, length delimited. Does not implicitly {@link DestinyStreamEndMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DestinyStreamEndMessage
     * @static
     * @param {IDestinyStreamEndMessage} message DestinyStreamEndMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyStreamEndMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DestinyStreamEndMessage message from the specified reader or buffer.
     * @function decode
     * @memberof DestinyStreamEndMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DestinyStreamEndMessage} DestinyStreamEndMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyStreamEndMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DestinyStreamEndMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.DateEndedSecondsSinceEpoch = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DestinyStreamEndMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DestinyStreamEndMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DestinyStreamEndMessage} DestinyStreamEndMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyStreamEndMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DestinyStreamEndMessage message.
     * @function verify
     * @memberof DestinyStreamEndMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DestinyStreamEndMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.DateEndedSecondsSinceEpoch != null && message.hasOwnProperty("DateEndedSecondsSinceEpoch"))
            if (!$util.isInteger(message.DateEndedSecondsSinceEpoch))
                return "DateEndedSecondsSinceEpoch: integer expected";
        return null;
    };

    /**
     * Creates a DestinyStreamEndMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DestinyStreamEndMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DestinyStreamEndMessage} DestinyStreamEndMessage
     */
    DestinyStreamEndMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.DestinyStreamEndMessage)
            return object;
        var message = new $root.DestinyStreamEndMessage();
        if (object.DateEndedSecondsSinceEpoch != null)
            message.DateEndedSecondsSinceEpoch = object.DateEndedSecondsSinceEpoch | 0;
        return message;
    };

    /**
     * Creates a plain object from a DestinyStreamEndMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DestinyStreamEndMessage
     * @static
     * @param {DestinyStreamEndMessage} message DestinyStreamEndMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DestinyStreamEndMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.DateEndedSecondsSinceEpoch = 0;
        if (message.DateEndedSecondsSinceEpoch != null && message.hasOwnProperty("DateEndedSecondsSinceEpoch"))
            object.DateEndedSecondsSinceEpoch = message.DateEndedSecondsSinceEpoch;
        return object;
    };

    /**
     * Converts this DestinyStreamEndMessage to JSON.
     * @function toJSON
     * @memberof DestinyStreamEndMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DestinyStreamEndMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DestinyStreamEndMessage;
})();

$root.GlobalSystemStatus = (function() {

    /**
     * Properties of a GlobalSystemStatus.
     * @exports IGlobalSystemStatus
     * @interface IGlobalSystemStatus
     * @property {boolean|null} [Extension] GlobalSystemStatus Extension
     * @property {boolean|null} [Destiny] GlobalSystemStatus Destiny
     * @property {boolean|null} [StatusUpdates] GlobalSystemStatus StatusUpdates
     * @property {boolean|null} [GiftSubscriptions] GlobalSystemStatus GiftSubscriptions
     * @property {boolean|null} [Reactions] GlobalSystemStatus Reactions
     */

    /**
     * Constructs a new GlobalSystemStatus.
     * @exports GlobalSystemStatus
     * @classdesc Represents a GlobalSystemStatus.
     * @implements IGlobalSystemStatus
     * @constructor
     * @param {IGlobalSystemStatus=} [properties] Properties to set
     */
    function GlobalSystemStatus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GlobalSystemStatus Extension.
     * @member {boolean} Extension
     * @memberof GlobalSystemStatus
     * @instance
     */
    GlobalSystemStatus.prototype.Extension = false;

    /**
     * GlobalSystemStatus Destiny.
     * @member {boolean} Destiny
     * @memberof GlobalSystemStatus
     * @instance
     */
    GlobalSystemStatus.prototype.Destiny = false;

    /**
     * GlobalSystemStatus StatusUpdates.
     * @member {boolean} StatusUpdates
     * @memberof GlobalSystemStatus
     * @instance
     */
    GlobalSystemStatus.prototype.StatusUpdates = false;

    /**
     * GlobalSystemStatus GiftSubscriptions.
     * @member {boolean} GiftSubscriptions
     * @memberof GlobalSystemStatus
     * @instance
     */
    GlobalSystemStatus.prototype.GiftSubscriptions = false;

    /**
     * GlobalSystemStatus Reactions.
     * @member {boolean} Reactions
     * @memberof GlobalSystemStatus
     * @instance
     */
    GlobalSystemStatus.prototype.Reactions = false;

    /**
     * Creates a new GlobalSystemStatus instance using the specified properties.
     * @function create
     * @memberof GlobalSystemStatus
     * @static
     * @param {IGlobalSystemStatus=} [properties] Properties to set
     * @returns {GlobalSystemStatus} GlobalSystemStatus instance
     */
    GlobalSystemStatus.create = function create(properties) {
        return new GlobalSystemStatus(properties);
    };

    /**
     * Encodes the specified GlobalSystemStatus message. Does not implicitly {@link GlobalSystemStatus.verify|verify} messages.
     * @function encode
     * @memberof GlobalSystemStatus
     * @static
     * @param {IGlobalSystemStatus} message GlobalSystemStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GlobalSystemStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Extension != null && message.hasOwnProperty("Extension"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.Extension);
        if (message.Destiny != null && message.hasOwnProperty("Destiny"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.Destiny);
        if (message.StatusUpdates != null && message.hasOwnProperty("StatusUpdates"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.StatusUpdates);
        if (message.GiftSubscriptions != null && message.hasOwnProperty("GiftSubscriptions"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.GiftSubscriptions);
        if (message.Reactions != null && message.hasOwnProperty("Reactions"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.Reactions);
        return writer;
    };

    /**
     * Encodes the specified GlobalSystemStatus message, length delimited. Does not implicitly {@link GlobalSystemStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GlobalSystemStatus
     * @static
     * @param {IGlobalSystemStatus} message GlobalSystemStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GlobalSystemStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GlobalSystemStatus message from the specified reader or buffer.
     * @function decode
     * @memberof GlobalSystemStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GlobalSystemStatus} GlobalSystemStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GlobalSystemStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GlobalSystemStatus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Extension = reader.bool();
                break;
            case 2:
                message.Destiny = reader.bool();
                break;
            case 3:
                message.StatusUpdates = reader.bool();
                break;
            case 4:
                message.GiftSubscriptions = reader.bool();
                break;
            case 5:
                message.Reactions = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GlobalSystemStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GlobalSystemStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GlobalSystemStatus} GlobalSystemStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GlobalSystemStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GlobalSystemStatus message.
     * @function verify
     * @memberof GlobalSystemStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GlobalSystemStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Extension != null && message.hasOwnProperty("Extension"))
            if (typeof message.Extension !== "boolean")
                return "Extension: boolean expected";
        if (message.Destiny != null && message.hasOwnProperty("Destiny"))
            if (typeof message.Destiny !== "boolean")
                return "Destiny: boolean expected";
        if (message.StatusUpdates != null && message.hasOwnProperty("StatusUpdates"))
            if (typeof message.StatusUpdates !== "boolean")
                return "StatusUpdates: boolean expected";
        if (message.GiftSubscriptions != null && message.hasOwnProperty("GiftSubscriptions"))
            if (typeof message.GiftSubscriptions !== "boolean")
                return "GiftSubscriptions: boolean expected";
        if (message.Reactions != null && message.hasOwnProperty("Reactions"))
            if (typeof message.Reactions !== "boolean")
                return "Reactions: boolean expected";
        return null;
    };

    /**
     * Creates a GlobalSystemStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GlobalSystemStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GlobalSystemStatus} GlobalSystemStatus
     */
    GlobalSystemStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.GlobalSystemStatus)
            return object;
        var message = new $root.GlobalSystemStatus();
        if (object.Extension != null)
            message.Extension = Boolean(object.Extension);
        if (object.Destiny != null)
            message.Destiny = Boolean(object.Destiny);
        if (object.StatusUpdates != null)
            message.StatusUpdates = Boolean(object.StatusUpdates);
        if (object.GiftSubscriptions != null)
            message.GiftSubscriptions = Boolean(object.GiftSubscriptions);
        if (object.Reactions != null)
            message.Reactions = Boolean(object.Reactions);
        return message;
    };

    /**
     * Creates a plain object from a GlobalSystemStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GlobalSystemStatus
     * @static
     * @param {GlobalSystemStatus} message GlobalSystemStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GlobalSystemStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Extension = false;
            object.Destiny = false;
            object.StatusUpdates = false;
            object.GiftSubscriptions = false;
            object.Reactions = false;
        }
        if (message.Extension != null && message.hasOwnProperty("Extension"))
            object.Extension = message.Extension;
        if (message.Destiny != null && message.hasOwnProperty("Destiny"))
            object.Destiny = message.Destiny;
        if (message.StatusUpdates != null && message.hasOwnProperty("StatusUpdates"))
            object.StatusUpdates = message.StatusUpdates;
        if (message.GiftSubscriptions != null && message.hasOwnProperty("GiftSubscriptions"))
            object.GiftSubscriptions = message.GiftSubscriptions;
        if (message.Reactions != null && message.hasOwnProperty("Reactions"))
            object.Reactions = message.Reactions;
        return object;
    };

    /**
     * Converts this GlobalSystemStatus to JSON.
     * @function toJSON
     * @memberof GlobalSystemStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GlobalSystemStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GlobalSystemStatus;
})();

$root.DestinyStreamStartMessage = (function() {

    /**
     * Properties of a DestinyStreamStartMessage.
     * @exports IDestinyStreamStartMessage
     * @interface IDestinyStreamStartMessage
     * @property {number|null} [DateStartedSecondsSinceEpoch] DestinyStreamStartMessage DateStartedSecondsSinceEpoch
     * @property {IGlobalSystemStatus|null} [SystemStatus] DestinyStreamStartMessage SystemStatus
     */

    /**
     * Constructs a new DestinyStreamStartMessage.
     * @exports DestinyStreamStartMessage
     * @classdesc Represents a DestinyStreamStartMessage.
     * @implements IDestinyStreamStartMessage
     * @constructor
     * @param {IDestinyStreamStartMessage=} [properties] Properties to set
     */
    function DestinyStreamStartMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DestinyStreamStartMessage DateStartedSecondsSinceEpoch.
     * @member {number} DateStartedSecondsSinceEpoch
     * @memberof DestinyStreamStartMessage
     * @instance
     */
    DestinyStreamStartMessage.prototype.DateStartedSecondsSinceEpoch = 0;

    /**
     * DestinyStreamStartMessage SystemStatus.
     * @member {IGlobalSystemStatus|null|undefined} SystemStatus
     * @memberof DestinyStreamStartMessage
     * @instance
     */
    DestinyStreamStartMessage.prototype.SystemStatus = null;

    /**
     * Creates a new DestinyStreamStartMessage instance using the specified properties.
     * @function create
     * @memberof DestinyStreamStartMessage
     * @static
     * @param {IDestinyStreamStartMessage=} [properties] Properties to set
     * @returns {DestinyStreamStartMessage} DestinyStreamStartMessage instance
     */
    DestinyStreamStartMessage.create = function create(properties) {
        return new DestinyStreamStartMessage(properties);
    };

    /**
     * Encodes the specified DestinyStreamStartMessage message. Does not implicitly {@link DestinyStreamStartMessage.verify|verify} messages.
     * @function encode
     * @memberof DestinyStreamStartMessage
     * @static
     * @param {IDestinyStreamStartMessage} message DestinyStreamStartMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyStreamStartMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.DateStartedSecondsSinceEpoch != null && message.hasOwnProperty("DateStartedSecondsSinceEpoch"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.DateStartedSecondsSinceEpoch);
        if (message.SystemStatus != null && message.hasOwnProperty("SystemStatus"))
            $root.GlobalSystemStatus.encode(message.SystemStatus, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DestinyStreamStartMessage message, length delimited. Does not implicitly {@link DestinyStreamStartMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DestinyStreamStartMessage
     * @static
     * @param {IDestinyStreamStartMessage} message DestinyStreamStartMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DestinyStreamStartMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DestinyStreamStartMessage message from the specified reader or buffer.
     * @function decode
     * @memberof DestinyStreamStartMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DestinyStreamStartMessage} DestinyStreamStartMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyStreamStartMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DestinyStreamStartMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.DateStartedSecondsSinceEpoch = reader.int32();
                break;
            case 2:
                message.SystemStatus = $root.GlobalSystemStatus.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DestinyStreamStartMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DestinyStreamStartMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DestinyStreamStartMessage} DestinyStreamStartMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DestinyStreamStartMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DestinyStreamStartMessage message.
     * @function verify
     * @memberof DestinyStreamStartMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DestinyStreamStartMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.DateStartedSecondsSinceEpoch != null && message.hasOwnProperty("DateStartedSecondsSinceEpoch"))
            if (!$util.isInteger(message.DateStartedSecondsSinceEpoch))
                return "DateStartedSecondsSinceEpoch: integer expected";
        if (message.SystemStatus != null && message.hasOwnProperty("SystemStatus")) {
            var error = $root.GlobalSystemStatus.verify(message.SystemStatus);
            if (error)
                return "SystemStatus." + error;
        }
        return null;
    };

    /**
     * Creates a DestinyStreamStartMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DestinyStreamStartMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DestinyStreamStartMessage} DestinyStreamStartMessage
     */
    DestinyStreamStartMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.DestinyStreamStartMessage)
            return object;
        var message = new $root.DestinyStreamStartMessage();
        if (object.DateStartedSecondsSinceEpoch != null)
            message.DateStartedSecondsSinceEpoch = object.DateStartedSecondsSinceEpoch | 0;
        if (object.SystemStatus != null) {
            if (typeof object.SystemStatus !== "object")
                throw TypeError(".DestinyStreamStartMessage.SystemStatus: object expected");
            message.SystemStatus = $root.GlobalSystemStatus.fromObject(object.SystemStatus);
        }
        return message;
    };

    /**
     * Creates a plain object from a DestinyStreamStartMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DestinyStreamStartMessage
     * @static
     * @param {DestinyStreamStartMessage} message DestinyStreamStartMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DestinyStreamStartMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.DateStartedSecondsSinceEpoch = 0;
            object.SystemStatus = null;
        }
        if (message.DateStartedSecondsSinceEpoch != null && message.hasOwnProperty("DateStartedSecondsSinceEpoch"))
            object.DateStartedSecondsSinceEpoch = message.DateStartedSecondsSinceEpoch;
        if (message.SystemStatus != null && message.hasOwnProperty("SystemStatus"))
            object.SystemStatus = $root.GlobalSystemStatus.toObject(message.SystemStatus, options);
        return object;
    };

    /**
     * Converts this DestinyStreamStartMessage to JSON.
     * @function toJSON
     * @memberof DestinyStreamStartMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DestinyStreamStartMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DestinyStreamStartMessage;
})();

$root.GiftsubRewardMessage = (function() {

    /**
     * Properties of a GiftsubRewardMessage.
     * @exports IGiftsubRewardMessage
     * @interface IGiftsubRewardMessage
     * @property {number|Long|null} [GiverMembershipId] GiftsubRewardMessage GiverMembershipId
     * @property {string|null} [ReceiverName] GiftsubRewardMessage ReceiverName
     * @property {number|null} [DateGivenSecondsSinceEpoch] GiftsubRewardMessage DateGivenSecondsSinceEpoch
     * @property {string|null} [GiftId] GiftsubRewardMessage GiftId
     * @property {IBountyProgress|null} [BountyStatus] GiftsubRewardMessage BountyStatus
     */

    /**
     * Constructs a new GiftsubRewardMessage.
     * @exports GiftsubRewardMessage
     * @classdesc Represents a GiftsubRewardMessage.
     * @implements IGiftsubRewardMessage
     * @constructor
     * @param {IGiftsubRewardMessage=} [properties] Properties to set
     */
    function GiftsubRewardMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GiftsubRewardMessage GiverMembershipId.
     * @member {number|Long} GiverMembershipId
     * @memberof GiftsubRewardMessage
     * @instance
     */
    GiftsubRewardMessage.prototype.GiverMembershipId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * GiftsubRewardMessage ReceiverName.
     * @member {string} ReceiverName
     * @memberof GiftsubRewardMessage
     * @instance
     */
    GiftsubRewardMessage.prototype.ReceiverName = "";

    /**
     * GiftsubRewardMessage DateGivenSecondsSinceEpoch.
     * @member {number} DateGivenSecondsSinceEpoch
     * @memberof GiftsubRewardMessage
     * @instance
     */
    GiftsubRewardMessage.prototype.DateGivenSecondsSinceEpoch = 0;

    /**
     * GiftsubRewardMessage GiftId.
     * @member {string} GiftId
     * @memberof GiftsubRewardMessage
     * @instance
     */
    GiftsubRewardMessage.prototype.GiftId = "";

    /**
     * GiftsubRewardMessage BountyStatus.
     * @member {IBountyProgress|null|undefined} BountyStatus
     * @memberof GiftsubRewardMessage
     * @instance
     */
    GiftsubRewardMessage.prototype.BountyStatus = null;

    /**
     * Creates a new GiftsubRewardMessage instance using the specified properties.
     * @function create
     * @memberof GiftsubRewardMessage
     * @static
     * @param {IGiftsubRewardMessage=} [properties] Properties to set
     * @returns {GiftsubRewardMessage} GiftsubRewardMessage instance
     */
    GiftsubRewardMessage.create = function create(properties) {
        return new GiftsubRewardMessage(properties);
    };

    /**
     * Encodes the specified GiftsubRewardMessage message. Does not implicitly {@link GiftsubRewardMessage.verify|verify} messages.
     * @function encode
     * @memberof GiftsubRewardMessage
     * @static
     * @param {IGiftsubRewardMessage} message GiftsubRewardMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GiftsubRewardMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.GiverMembershipId != null && message.hasOwnProperty("GiverMembershipId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.GiverMembershipId);
        if (message.ReceiverName != null && message.hasOwnProperty("ReceiverName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.ReceiverName);
        if (message.DateGivenSecondsSinceEpoch != null && message.hasOwnProperty("DateGivenSecondsSinceEpoch"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.DateGivenSecondsSinceEpoch);
        if (message.GiftId != null && message.hasOwnProperty("GiftId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.GiftId);
        if (message.BountyStatus != null && message.hasOwnProperty("BountyStatus"))
            $root.BountyProgress.encode(message.BountyStatus, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GiftsubRewardMessage message, length delimited. Does not implicitly {@link GiftsubRewardMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GiftsubRewardMessage
     * @static
     * @param {IGiftsubRewardMessage} message GiftsubRewardMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GiftsubRewardMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GiftsubRewardMessage message from the specified reader or buffer.
     * @function decode
     * @memberof GiftsubRewardMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GiftsubRewardMessage} GiftsubRewardMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GiftsubRewardMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GiftsubRewardMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.GiverMembershipId = reader.int64();
                break;
            case 2:
                message.ReceiverName = reader.string();
                break;
            case 3:
                message.DateGivenSecondsSinceEpoch = reader.int32();
                break;
            case 4:
                message.GiftId = reader.string();
                break;
            case 5:
                message.BountyStatus = $root.BountyProgress.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GiftsubRewardMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GiftsubRewardMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GiftsubRewardMessage} GiftsubRewardMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GiftsubRewardMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GiftsubRewardMessage message.
     * @function verify
     * @memberof GiftsubRewardMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GiftsubRewardMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.GiverMembershipId != null && message.hasOwnProperty("GiverMembershipId"))
            if (!$util.isInteger(message.GiverMembershipId) && !(message.GiverMembershipId && $util.isInteger(message.GiverMembershipId.low) && $util.isInteger(message.GiverMembershipId.high)))
                return "GiverMembershipId: integer|Long expected";
        if (message.ReceiverName != null && message.hasOwnProperty("ReceiverName"))
            if (!$util.isString(message.ReceiverName))
                return "ReceiverName: string expected";
        if (message.DateGivenSecondsSinceEpoch != null && message.hasOwnProperty("DateGivenSecondsSinceEpoch"))
            if (!$util.isInteger(message.DateGivenSecondsSinceEpoch))
                return "DateGivenSecondsSinceEpoch: integer expected";
        if (message.GiftId != null && message.hasOwnProperty("GiftId"))
            if (!$util.isString(message.GiftId))
                return "GiftId: string expected";
        if (message.BountyStatus != null && message.hasOwnProperty("BountyStatus")) {
            var error = $root.BountyProgress.verify(message.BountyStatus);
            if (error)
                return "BountyStatus." + error;
        }
        return null;
    };

    /**
     * Creates a GiftsubRewardMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GiftsubRewardMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GiftsubRewardMessage} GiftsubRewardMessage
     */
    GiftsubRewardMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.GiftsubRewardMessage)
            return object;
        var message = new $root.GiftsubRewardMessage();
        if (object.GiverMembershipId != null)
            if ($util.Long)
                (message.GiverMembershipId = $util.Long.fromValue(object.GiverMembershipId)).unsigned = false;
            else if (typeof object.GiverMembershipId === "string")
                message.GiverMembershipId = parseInt(object.GiverMembershipId, 10);
            else if (typeof object.GiverMembershipId === "number")
                message.GiverMembershipId = object.GiverMembershipId;
            else if (typeof object.GiverMembershipId === "object")
                message.GiverMembershipId = new $util.LongBits(object.GiverMembershipId.low >>> 0, object.GiverMembershipId.high >>> 0).toNumber();
        if (object.ReceiverName != null)
            message.ReceiverName = String(object.ReceiverName);
        if (object.DateGivenSecondsSinceEpoch != null)
            message.DateGivenSecondsSinceEpoch = object.DateGivenSecondsSinceEpoch | 0;
        if (object.GiftId != null)
            message.GiftId = String(object.GiftId);
        if (object.BountyStatus != null) {
            if (typeof object.BountyStatus !== "object")
                throw TypeError(".GiftsubRewardMessage.BountyStatus: object expected");
            message.BountyStatus = $root.BountyProgress.fromObject(object.BountyStatus);
        }
        return message;
    };

    /**
     * Creates a plain object from a GiftsubRewardMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GiftsubRewardMessage
     * @static
     * @param {GiftsubRewardMessage} message GiftsubRewardMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GiftsubRewardMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.GiverMembershipId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.GiverMembershipId = options.longs === String ? "0" : 0;
            object.ReceiverName = "";
            object.DateGivenSecondsSinceEpoch = 0;
            object.GiftId = "";
            object.BountyStatus = null;
        }
        if (message.GiverMembershipId != null && message.hasOwnProperty("GiverMembershipId"))
            if (typeof message.GiverMembershipId === "number")
                object.GiverMembershipId = options.longs === String ? String(message.GiverMembershipId) : message.GiverMembershipId;
            else
                object.GiverMembershipId = options.longs === String ? $util.Long.prototype.toString.call(message.GiverMembershipId) : options.longs === Number ? new $util.LongBits(message.GiverMembershipId.low >>> 0, message.GiverMembershipId.high >>> 0).toNumber() : message.GiverMembershipId;
        if (message.ReceiverName != null && message.hasOwnProperty("ReceiverName"))
            object.ReceiverName = message.ReceiverName;
        if (message.DateGivenSecondsSinceEpoch != null && message.hasOwnProperty("DateGivenSecondsSinceEpoch"))
            object.DateGivenSecondsSinceEpoch = message.DateGivenSecondsSinceEpoch;
        if (message.GiftId != null && message.hasOwnProperty("GiftId"))
            object.GiftId = message.GiftId;
        if (message.BountyStatus != null && message.hasOwnProperty("BountyStatus"))
            object.BountyStatus = $root.BountyProgress.toObject(message.BountyStatus, options);
        return object;
    };

    /**
     * Converts this GiftsubRewardMessage to JSON.
     * @function toJSON
     * @memberof GiftsubRewardMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GiftsubRewardMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GiftsubRewardMessage;
})();

$root.PubsubMessageEnvelope = (function() {

    /**
     * Properties of a PubsubMessageEnvelope.
     * @exports IPubsubMessageEnvelope
     * @interface IPubsubMessageEnvelope
     * @property {string|null} [MessageType] PubsubMessageEnvelope MessageType
     * @property {Uint8Array|null} [Payload] PubsubMessageEnvelope Payload
     */

    /**
     * Constructs a new PubsubMessageEnvelope.
     * @exports PubsubMessageEnvelope
     * @classdesc Represents a PubsubMessageEnvelope.
     * @implements IPubsubMessageEnvelope
     * @constructor
     * @param {IPubsubMessageEnvelope=} [properties] Properties to set
     */
    function PubsubMessageEnvelope(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PubsubMessageEnvelope MessageType.
     * @member {string} MessageType
     * @memberof PubsubMessageEnvelope
     * @instance
     */
    PubsubMessageEnvelope.prototype.MessageType = "";

    /**
     * PubsubMessageEnvelope Payload.
     * @member {Uint8Array} Payload
     * @memberof PubsubMessageEnvelope
     * @instance
     */
    PubsubMessageEnvelope.prototype.Payload = $util.newBuffer([]);

    /**
     * Creates a new PubsubMessageEnvelope instance using the specified properties.
     * @function create
     * @memberof PubsubMessageEnvelope
     * @static
     * @param {IPubsubMessageEnvelope=} [properties] Properties to set
     * @returns {PubsubMessageEnvelope} PubsubMessageEnvelope instance
     */
    PubsubMessageEnvelope.create = function create(properties) {
        return new PubsubMessageEnvelope(properties);
    };

    /**
     * Encodes the specified PubsubMessageEnvelope message. Does not implicitly {@link PubsubMessageEnvelope.verify|verify} messages.
     * @function encode
     * @memberof PubsubMessageEnvelope
     * @static
     * @param {IPubsubMessageEnvelope} message PubsubMessageEnvelope message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PubsubMessageEnvelope.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.MessageType != null && message.hasOwnProperty("MessageType"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.MessageType);
        if (message.Payload != null && message.hasOwnProperty("Payload"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Payload);
        return writer;
    };

    /**
     * Encodes the specified PubsubMessageEnvelope message, length delimited. Does not implicitly {@link PubsubMessageEnvelope.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PubsubMessageEnvelope
     * @static
     * @param {IPubsubMessageEnvelope} message PubsubMessageEnvelope message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PubsubMessageEnvelope.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PubsubMessageEnvelope message from the specified reader or buffer.
     * @function decode
     * @memberof PubsubMessageEnvelope
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PubsubMessageEnvelope} PubsubMessageEnvelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PubsubMessageEnvelope.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PubsubMessageEnvelope();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.MessageType = reader.string();
                break;
            case 2:
                message.Payload = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PubsubMessageEnvelope message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PubsubMessageEnvelope
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PubsubMessageEnvelope} PubsubMessageEnvelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PubsubMessageEnvelope.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PubsubMessageEnvelope message.
     * @function verify
     * @memberof PubsubMessageEnvelope
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PubsubMessageEnvelope.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.MessageType != null && message.hasOwnProperty("MessageType"))
            if (!$util.isString(message.MessageType))
                return "MessageType: string expected";
        if (message.Payload != null && message.hasOwnProperty("Payload"))
            if (!(message.Payload && typeof message.Payload.length === "number" || $util.isString(message.Payload)))
                return "Payload: buffer expected";
        return null;
    };

    /**
     * Creates a PubsubMessageEnvelope message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PubsubMessageEnvelope
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PubsubMessageEnvelope} PubsubMessageEnvelope
     */
    PubsubMessageEnvelope.fromObject = function fromObject(object) {
        if (object instanceof $root.PubsubMessageEnvelope)
            return object;
        var message = new $root.PubsubMessageEnvelope();
        if (object.MessageType != null)
            message.MessageType = String(object.MessageType);
        if (object.Payload != null)
            if (typeof object.Payload === "string")
                $util.base64.decode(object.Payload, message.Payload = $util.newBuffer($util.base64.length(object.Payload)), 0);
            else if (object.Payload.length)
                message.Payload = object.Payload;
        return message;
    };

    /**
     * Creates a plain object from a PubsubMessageEnvelope message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PubsubMessageEnvelope
     * @static
     * @param {PubsubMessageEnvelope} message PubsubMessageEnvelope
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PubsubMessageEnvelope.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.MessageType = "";
            if (options.bytes === String)
                object.Payload = "";
            else {
                object.Payload = [];
                if (options.bytes !== Array)
                    object.Payload = $util.newBuffer(object.Payload);
            }
        }
        if (message.MessageType != null && message.hasOwnProperty("MessageType"))
            object.MessageType = message.MessageType;
        if (message.Payload != null && message.hasOwnProperty("Payload"))
            object.Payload = options.bytes === String ? $util.base64.encode(message.Payload, 0, message.Payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.Payload) : message.Payload;
        return object;
    };

    /**
     * Converts this PubsubMessageEnvelope to JSON.
     * @function toJSON
     * @memberof PubsubMessageEnvelope
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PubsubMessageEnvelope.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PubsubMessageEnvelope;
})();

$root.ReactionConfigEntry = (function() {

    /**
     * Properties of a ReactionConfigEntry.
     * @exports IReactionConfigEntry
     * @interface IReactionConfigEntry
     * @property {string|null} [Reaction] ReactionConfigEntry Reaction
     * @property {string|null} [Display] ReactionConfigEntry Display
     */

    /**
     * Constructs a new ReactionConfigEntry.
     * @exports ReactionConfigEntry
     * @classdesc Represents a ReactionConfigEntry.
     * @implements IReactionConfigEntry
     * @constructor
     * @param {IReactionConfigEntry=} [properties] Properties to set
     */
    function ReactionConfigEntry(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReactionConfigEntry Reaction.
     * @member {string} Reaction
     * @memberof ReactionConfigEntry
     * @instance
     */
    ReactionConfigEntry.prototype.Reaction = "";

    /**
     * ReactionConfigEntry Display.
     * @member {string} Display
     * @memberof ReactionConfigEntry
     * @instance
     */
    ReactionConfigEntry.prototype.Display = "";

    /**
     * Creates a new ReactionConfigEntry instance using the specified properties.
     * @function create
     * @memberof ReactionConfigEntry
     * @static
     * @param {IReactionConfigEntry=} [properties] Properties to set
     * @returns {ReactionConfigEntry} ReactionConfigEntry instance
     */
    ReactionConfigEntry.create = function create(properties) {
        return new ReactionConfigEntry(properties);
    };

    /**
     * Encodes the specified ReactionConfigEntry message. Does not implicitly {@link ReactionConfigEntry.verify|verify} messages.
     * @function encode
     * @memberof ReactionConfigEntry
     * @static
     * @param {IReactionConfigEntry} message ReactionConfigEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReactionConfigEntry.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Reaction != null && message.hasOwnProperty("Reaction"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Reaction);
        if (message.Display != null && message.hasOwnProperty("Display"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Display);
        return writer;
    };

    /**
     * Encodes the specified ReactionConfigEntry message, length delimited. Does not implicitly {@link ReactionConfigEntry.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReactionConfigEntry
     * @static
     * @param {IReactionConfigEntry} message ReactionConfigEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReactionConfigEntry.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReactionConfigEntry message from the specified reader or buffer.
     * @function decode
     * @memberof ReactionConfigEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReactionConfigEntry} ReactionConfigEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReactionConfigEntry.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReactionConfigEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Reaction = reader.string();
                break;
            case 2:
                message.Display = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReactionConfigEntry message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReactionConfigEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReactionConfigEntry} ReactionConfigEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReactionConfigEntry.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReactionConfigEntry message.
     * @function verify
     * @memberof ReactionConfigEntry
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReactionConfigEntry.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Reaction != null && message.hasOwnProperty("Reaction"))
            if (!$util.isString(message.Reaction))
                return "Reaction: string expected";
        if (message.Display != null && message.hasOwnProperty("Display"))
            if (!$util.isString(message.Display))
                return "Display: string expected";
        return null;
    };

    /**
     * Creates a ReactionConfigEntry message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReactionConfigEntry
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReactionConfigEntry} ReactionConfigEntry
     */
    ReactionConfigEntry.fromObject = function fromObject(object) {
        if (object instanceof $root.ReactionConfigEntry)
            return object;
        var message = new $root.ReactionConfigEntry();
        if (object.Reaction != null)
            message.Reaction = String(object.Reaction);
        if (object.Display != null)
            message.Display = String(object.Display);
        return message;
    };

    /**
     * Creates a plain object from a ReactionConfigEntry message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReactionConfigEntry
     * @static
     * @param {ReactionConfigEntry} message ReactionConfigEntry
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReactionConfigEntry.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.Reaction = "";
            object.Display = "";
        }
        if (message.Reaction != null && message.hasOwnProperty("Reaction"))
            object.Reaction = message.Reaction;
        if (message.Display != null && message.hasOwnProperty("Display"))
            object.Display = message.Display;
        return object;
    };

    /**
     * Converts this ReactionConfigEntry to JSON.
     * @function toJSON
     * @memberof ReactionConfigEntry
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReactionConfigEntry.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReactionConfigEntry;
})();

$root.ServiceErrorDetail = (function() {

    /**
     * Properties of a ServiceErrorDetail.
     * @exports IServiceErrorDetail
     * @interface IServiceErrorDetail
     * @property {string|null} [ErrorStringKey] ServiceErrorDetail ErrorStringKey
     * @property {Object.<string,string>|null} [ErrorStringParams] ServiceErrorDetail ErrorStringParams
     */

    /**
     * Constructs a new ServiceErrorDetail.
     * @exports ServiceErrorDetail
     * @classdesc Represents a ServiceErrorDetail.
     * @implements IServiceErrorDetail
     * @constructor
     * @param {IServiceErrorDetail=} [properties] Properties to set
     */
    function ServiceErrorDetail(properties) {
        this.ErrorStringParams = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ServiceErrorDetail ErrorStringKey.
     * @member {string} ErrorStringKey
     * @memberof ServiceErrorDetail
     * @instance
     */
    ServiceErrorDetail.prototype.ErrorStringKey = "";

    /**
     * ServiceErrorDetail ErrorStringParams.
     * @member {Object.<string,string>} ErrorStringParams
     * @memberof ServiceErrorDetail
     * @instance
     */
    ServiceErrorDetail.prototype.ErrorStringParams = $util.emptyObject;

    /**
     * Creates a new ServiceErrorDetail instance using the specified properties.
     * @function create
     * @memberof ServiceErrorDetail
     * @static
     * @param {IServiceErrorDetail=} [properties] Properties to set
     * @returns {ServiceErrorDetail} ServiceErrorDetail instance
     */
    ServiceErrorDetail.create = function create(properties) {
        return new ServiceErrorDetail(properties);
    };

    /**
     * Encodes the specified ServiceErrorDetail message. Does not implicitly {@link ServiceErrorDetail.verify|verify} messages.
     * @function encode
     * @memberof ServiceErrorDetail
     * @static
     * @param {IServiceErrorDetail} message ServiceErrorDetail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServiceErrorDetail.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ErrorStringKey != null && message.hasOwnProperty("ErrorStringKey"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ErrorStringKey);
        if (message.ErrorStringParams != null && message.hasOwnProperty("ErrorStringParams"))
            for (var keys = Object.keys(message.ErrorStringParams), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.ErrorStringParams[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ServiceErrorDetail message, length delimited. Does not implicitly {@link ServiceErrorDetail.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ServiceErrorDetail
     * @static
     * @param {IServiceErrorDetail} message ServiceErrorDetail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ServiceErrorDetail.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ServiceErrorDetail message from the specified reader or buffer.
     * @function decode
     * @memberof ServiceErrorDetail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ServiceErrorDetail} ServiceErrorDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServiceErrorDetail.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServiceErrorDetail(), key;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ErrorStringKey = reader.string();
                break;
            case 2:
                reader.skip().pos++;
                if (message.ErrorStringParams === $util.emptyObject)
                    message.ErrorStringParams = {};
                key = reader.string();
                reader.pos++;
                message.ErrorStringParams[key] = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ServiceErrorDetail message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ServiceErrorDetail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ServiceErrorDetail} ServiceErrorDetail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ServiceErrorDetail.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ServiceErrorDetail message.
     * @function verify
     * @memberof ServiceErrorDetail
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ServiceErrorDetail.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ErrorStringKey != null && message.hasOwnProperty("ErrorStringKey"))
            if (!$util.isString(message.ErrorStringKey))
                return "ErrorStringKey: string expected";
        if (message.ErrorStringParams != null && message.hasOwnProperty("ErrorStringParams")) {
            if (!$util.isObject(message.ErrorStringParams))
                return "ErrorStringParams: object expected";
            var key = Object.keys(message.ErrorStringParams);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isString(message.ErrorStringParams[key[i]]))
                    return "ErrorStringParams: string{k:string} expected";
        }
        return null;
    };

    /**
     * Creates a ServiceErrorDetail message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ServiceErrorDetail
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ServiceErrorDetail} ServiceErrorDetail
     */
    ServiceErrorDetail.fromObject = function fromObject(object) {
        if (object instanceof $root.ServiceErrorDetail)
            return object;
        var message = new $root.ServiceErrorDetail();
        if (object.ErrorStringKey != null)
            message.ErrorStringKey = String(object.ErrorStringKey);
        if (object.ErrorStringParams) {
            if (typeof object.ErrorStringParams !== "object")
                throw TypeError(".ServiceErrorDetail.ErrorStringParams: object expected");
            message.ErrorStringParams = {};
            for (var keys = Object.keys(object.ErrorStringParams), i = 0; i < keys.length; ++i)
                message.ErrorStringParams[keys[i]] = String(object.ErrorStringParams[keys[i]]);
        }
        return message;
    };

    /**
     * Creates a plain object from a ServiceErrorDetail message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ServiceErrorDetail
     * @static
     * @param {ServiceErrorDetail} message ServiceErrorDetail
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ServiceErrorDetail.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.ErrorStringParams = {};
        if (options.defaults)
            object.ErrorStringKey = "";
        if (message.ErrorStringKey != null && message.hasOwnProperty("ErrorStringKey"))
            object.ErrorStringKey = message.ErrorStringKey;
        var keys2;
        if (message.ErrorStringParams && (keys2 = Object.keys(message.ErrorStringParams)).length) {
            object.ErrorStringParams = {};
            for (var j = 0; j < keys2.length; ++j)
                object.ErrorStringParams[keys2[j]] = message.ErrorStringParams[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this ServiceErrorDetail to JSON.
     * @function toJSON
     * @memberof ServiceErrorDetail
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ServiceErrorDetail.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ServiceErrorDetail;
})();

$root.StreamerStateContract = (function() {

    /**
     * Properties of a StreamerStateContract.
     * @exports IStreamerStateContract
     * @interface IStreamerStateContract
     * @property {IDestinyPlayerUpdateMessage|null} [PlayerStatus] StreamerStateContract PlayerStatus
     * @property {IBroadcasterSystemStatus|null} [unsafeBroadcasterSystemStatus] StreamerStateContract unsafeBroadcasterSystemStatus
     * @property {IGlobalSystemStatus|null} [unsafeGlobalSystemStatus] StreamerStateContract unsafeGlobalSystemStatus
     * @property {boolean|null} [IsLinked] StreamerStateContract IsLinked
     * @property {number|null} [LastSeenSecondsSinceEpoch] StreamerStateContract LastSeenSecondsSinceEpoch
     * @property {Array.<IReactionConfigEntry>|null} [ValidReactions] StreamerStateContract ValidReactions
     * @property {number|Long|null} [BnetMembershipId] StreamerStateContract BnetMembershipId
     */

    /**
     * Constructs a new StreamerStateContract.
     * @exports StreamerStateContract
     * @classdesc Represents a StreamerStateContract.
     * @implements IStreamerStateContract
     * @constructor
     * @param {IStreamerStateContract=} [properties] Properties to set
     */
    function StreamerStateContract(properties) {
        this.ValidReactions = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StreamerStateContract PlayerStatus.
     * @member {IDestinyPlayerUpdateMessage|null|undefined} PlayerStatus
     * @memberof StreamerStateContract
     * @instance
     */
    StreamerStateContract.prototype.PlayerStatus = null;

    /**
     * StreamerStateContract unsafeBroadcasterSystemStatus.
     * @member {IBroadcasterSystemStatus|null|undefined} unsafeBroadcasterSystemStatus
     * @memberof StreamerStateContract
     * @instance
     */
    StreamerStateContract.prototype.unsafeBroadcasterSystemStatus = null;

    /**
     * StreamerStateContract unsafeGlobalSystemStatus.
     * @member {IGlobalSystemStatus|null|undefined} unsafeGlobalSystemStatus
     * @memberof StreamerStateContract
     * @instance
     */
    StreamerStateContract.prototype.unsafeGlobalSystemStatus = null;

    /**
     * StreamerStateContract IsLinked.
     * @member {boolean} IsLinked
     * @memberof StreamerStateContract
     * @instance
     */
    StreamerStateContract.prototype.IsLinked = false;

    /**
     * StreamerStateContract LastSeenSecondsSinceEpoch.
     * @member {number} LastSeenSecondsSinceEpoch
     * @memberof StreamerStateContract
     * @instance
     */
    StreamerStateContract.prototype.LastSeenSecondsSinceEpoch = 0;

    /**
     * StreamerStateContract ValidReactions.
     * @member {Array.<IReactionConfigEntry>} ValidReactions
     * @memberof StreamerStateContract
     * @instance
     */
    StreamerStateContract.prototype.ValidReactions = $util.emptyArray;

    /**
     * StreamerStateContract BnetMembershipId.
     * @member {number|Long} BnetMembershipId
     * @memberof StreamerStateContract
     * @instance
     */
    StreamerStateContract.prototype.BnetMembershipId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new StreamerStateContract instance using the specified properties.
     * @function create
     * @memberof StreamerStateContract
     * @static
     * @param {IStreamerStateContract=} [properties] Properties to set
     * @returns {StreamerStateContract} StreamerStateContract instance
     */
    StreamerStateContract.create = function create(properties) {
        return new StreamerStateContract(properties);
    };

    /**
     * Encodes the specified StreamerStateContract message. Does not implicitly {@link StreamerStateContract.verify|verify} messages.
     * @function encode
     * @memberof StreamerStateContract
     * @static
     * @param {IStreamerStateContract} message StreamerStateContract message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StreamerStateContract.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.PlayerStatus != null && message.hasOwnProperty("PlayerStatus"))
            $root.DestinyPlayerUpdateMessage.encode(message.PlayerStatus, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.unsafeBroadcasterSystemStatus != null && message.hasOwnProperty("unsafeBroadcasterSystemStatus"))
            $root.BroadcasterSystemStatus.encode(message.unsafeBroadcasterSystemStatus, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.unsafeGlobalSystemStatus != null && message.hasOwnProperty("unsafeGlobalSystemStatus"))
            $root.GlobalSystemStatus.encode(message.unsafeGlobalSystemStatus, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.IsLinked != null && message.hasOwnProperty("IsLinked"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.IsLinked);
        if (message.LastSeenSecondsSinceEpoch != null && message.hasOwnProperty("LastSeenSecondsSinceEpoch"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.LastSeenSecondsSinceEpoch);
        if (message.ValidReactions != null && message.ValidReactions.length)
            for (var i = 0; i < message.ValidReactions.length; ++i)
                $root.ReactionConfigEntry.encode(message.ValidReactions[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.BnetMembershipId != null && message.hasOwnProperty("BnetMembershipId"))
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.BnetMembershipId);
        return writer;
    };

    /**
     * Encodes the specified StreamerStateContract message, length delimited. Does not implicitly {@link StreamerStateContract.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StreamerStateContract
     * @static
     * @param {IStreamerStateContract} message StreamerStateContract message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StreamerStateContract.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StreamerStateContract message from the specified reader or buffer.
     * @function decode
     * @memberof StreamerStateContract
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StreamerStateContract} StreamerStateContract
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StreamerStateContract.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamerStateContract();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.PlayerStatus = $root.DestinyPlayerUpdateMessage.decode(reader, reader.uint32());
                break;
            case 2:
                message.unsafeBroadcasterSystemStatus = $root.BroadcasterSystemStatus.decode(reader, reader.uint32());
                break;
            case 3:
                message.unsafeGlobalSystemStatus = $root.GlobalSystemStatus.decode(reader, reader.uint32());
                break;
            case 4:
                message.IsLinked = reader.bool();
                break;
            case 5:
                message.LastSeenSecondsSinceEpoch = reader.int32();
                break;
            case 6:
                if (!(message.ValidReactions && message.ValidReactions.length))
                    message.ValidReactions = [];
                message.ValidReactions.push($root.ReactionConfigEntry.decode(reader, reader.uint32()));
                break;
            case 7:
                message.BnetMembershipId = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StreamerStateContract message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StreamerStateContract
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StreamerStateContract} StreamerStateContract
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StreamerStateContract.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StreamerStateContract message.
     * @function verify
     * @memberof StreamerStateContract
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StreamerStateContract.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.PlayerStatus != null && message.hasOwnProperty("PlayerStatus")) {
            var error = $root.DestinyPlayerUpdateMessage.verify(message.PlayerStatus);
            if (error)
                return "PlayerStatus." + error;
        }
        if (message.unsafeBroadcasterSystemStatus != null && message.hasOwnProperty("unsafeBroadcasterSystemStatus")) {
            var error = $root.BroadcasterSystemStatus.verify(message.unsafeBroadcasterSystemStatus);
            if (error)
                return "unsafeBroadcasterSystemStatus." + error;
        }
        if (message.unsafeGlobalSystemStatus != null && message.hasOwnProperty("unsafeGlobalSystemStatus")) {
            var error = $root.GlobalSystemStatus.verify(message.unsafeGlobalSystemStatus);
            if (error)
                return "unsafeGlobalSystemStatus." + error;
        }
        if (message.IsLinked != null && message.hasOwnProperty("IsLinked"))
            if (typeof message.IsLinked !== "boolean")
                return "IsLinked: boolean expected";
        if (message.LastSeenSecondsSinceEpoch != null && message.hasOwnProperty("LastSeenSecondsSinceEpoch"))
            if (!$util.isInteger(message.LastSeenSecondsSinceEpoch))
                return "LastSeenSecondsSinceEpoch: integer expected";
        if (message.ValidReactions != null && message.hasOwnProperty("ValidReactions")) {
            if (!Array.isArray(message.ValidReactions))
                return "ValidReactions: array expected";
            for (var i = 0; i < message.ValidReactions.length; ++i) {
                var error = $root.ReactionConfigEntry.verify(message.ValidReactions[i]);
                if (error)
                    return "ValidReactions." + error;
            }
        }
        if (message.BnetMembershipId != null && message.hasOwnProperty("BnetMembershipId"))
            if (!$util.isInteger(message.BnetMembershipId) && !(message.BnetMembershipId && $util.isInteger(message.BnetMembershipId.low) && $util.isInteger(message.BnetMembershipId.high)))
                return "BnetMembershipId: integer|Long expected";
        return null;
    };

    /**
     * Creates a StreamerStateContract message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StreamerStateContract
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StreamerStateContract} StreamerStateContract
     */
    StreamerStateContract.fromObject = function fromObject(object) {
        if (object instanceof $root.StreamerStateContract)
            return object;
        var message = new $root.StreamerStateContract();
        if (object.PlayerStatus != null) {
            if (typeof object.PlayerStatus !== "object")
                throw TypeError(".StreamerStateContract.PlayerStatus: object expected");
            message.PlayerStatus = $root.DestinyPlayerUpdateMessage.fromObject(object.PlayerStatus);
        }
        if (object.unsafeBroadcasterSystemStatus != null) {
            if (typeof object.unsafeBroadcasterSystemStatus !== "object")
                throw TypeError(".StreamerStateContract.unsafeBroadcasterSystemStatus: object expected");
            message.unsafeBroadcasterSystemStatus = $root.BroadcasterSystemStatus.fromObject(object.unsafeBroadcasterSystemStatus);
        }
        if (object.unsafeGlobalSystemStatus != null) {
            if (typeof object.unsafeGlobalSystemStatus !== "object")
                throw TypeError(".StreamerStateContract.unsafeGlobalSystemStatus: object expected");
            message.unsafeGlobalSystemStatus = $root.GlobalSystemStatus.fromObject(object.unsafeGlobalSystemStatus);
        }
        if (object.IsLinked != null)
            message.IsLinked = Boolean(object.IsLinked);
        if (object.LastSeenSecondsSinceEpoch != null)
            message.LastSeenSecondsSinceEpoch = object.LastSeenSecondsSinceEpoch | 0;
        if (object.ValidReactions) {
            if (!Array.isArray(object.ValidReactions))
                throw TypeError(".StreamerStateContract.ValidReactions: array expected");
            message.ValidReactions = [];
            for (var i = 0; i < object.ValidReactions.length; ++i) {
                if (typeof object.ValidReactions[i] !== "object")
                    throw TypeError(".StreamerStateContract.ValidReactions: object expected");
                message.ValidReactions[i] = $root.ReactionConfigEntry.fromObject(object.ValidReactions[i]);
            }
        }
        if (object.BnetMembershipId != null)
            if ($util.Long)
                (message.BnetMembershipId = $util.Long.fromValue(object.BnetMembershipId)).unsigned = false;
            else if (typeof object.BnetMembershipId === "string")
                message.BnetMembershipId = parseInt(object.BnetMembershipId, 10);
            else if (typeof object.BnetMembershipId === "number")
                message.BnetMembershipId = object.BnetMembershipId;
            else if (typeof object.BnetMembershipId === "object")
                message.BnetMembershipId = new $util.LongBits(object.BnetMembershipId.low >>> 0, object.BnetMembershipId.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a StreamerStateContract message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StreamerStateContract
     * @static
     * @param {StreamerStateContract} message StreamerStateContract
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StreamerStateContract.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ValidReactions = [];
        if (options.defaults) {
            object.PlayerStatus = null;
            object.unsafeBroadcasterSystemStatus = null;
            object.unsafeGlobalSystemStatus = null;
            object.IsLinked = false;
            object.LastSeenSecondsSinceEpoch = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.BnetMembershipId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.BnetMembershipId = options.longs === String ? "0" : 0;
        }
        if (message.PlayerStatus != null && message.hasOwnProperty("PlayerStatus"))
            object.PlayerStatus = $root.DestinyPlayerUpdateMessage.toObject(message.PlayerStatus, options);
        if (message.unsafeBroadcasterSystemStatus != null && message.hasOwnProperty("unsafeBroadcasterSystemStatus"))
            object.unsafeBroadcasterSystemStatus = $root.BroadcasterSystemStatus.toObject(message.unsafeBroadcasterSystemStatus, options);
        if (message.unsafeGlobalSystemStatus != null && message.hasOwnProperty("unsafeGlobalSystemStatus"))
            object.unsafeGlobalSystemStatus = $root.GlobalSystemStatus.toObject(message.unsafeGlobalSystemStatus, options);
        if (message.IsLinked != null && message.hasOwnProperty("IsLinked"))
            object.IsLinked = message.IsLinked;
        if (message.LastSeenSecondsSinceEpoch != null && message.hasOwnProperty("LastSeenSecondsSinceEpoch"))
            object.LastSeenSecondsSinceEpoch = message.LastSeenSecondsSinceEpoch;
        if (message.ValidReactions && message.ValidReactions.length) {
            object.ValidReactions = [];
            for (var j = 0; j < message.ValidReactions.length; ++j)
                object.ValidReactions[j] = $root.ReactionConfigEntry.toObject(message.ValidReactions[j], options);
        }
        if (message.BnetMembershipId != null && message.hasOwnProperty("BnetMembershipId"))
            if (typeof message.BnetMembershipId === "number")
                object.BnetMembershipId = options.longs === String ? String(message.BnetMembershipId) : message.BnetMembershipId;
            else
                object.BnetMembershipId = options.longs === String ? $util.Long.prototype.toString.call(message.BnetMembershipId) : options.longs === Number ? new $util.LongBits(message.BnetMembershipId.low >>> 0, message.BnetMembershipId.high >>> 0).toNumber() : message.BnetMembershipId;
        return object;
    };

    /**
     * Converts this StreamerStateContract to JSON.
     * @function toJSON
     * @memberof StreamerStateContract
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StreamerStateContract.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StreamerStateContract;
})();

$root.StreamerStateResponse = (function() {

    /**
     * Properties of a StreamerStateResponse.
     * @exports IStreamerStateResponse
     * @interface IStreamerStateResponse
     * @property {IStreamerStateContract|null} [Response] StreamerStateResponse Response
     * @property {Array.<IServiceErrorDetail>|null} [ErrorDetails] StreamerStateResponse ErrorDetails
     */

    /**
     * Constructs a new StreamerStateResponse.
     * @exports StreamerStateResponse
     * @classdesc Represents a StreamerStateResponse.
     * @implements IStreamerStateResponse
     * @constructor
     * @param {IStreamerStateResponse=} [properties] Properties to set
     */
    function StreamerStateResponse(properties) {
        this.ErrorDetails = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StreamerStateResponse Response.
     * @member {IStreamerStateContract|null|undefined} Response
     * @memberof StreamerStateResponse
     * @instance
     */
    StreamerStateResponse.prototype.Response = null;

    /**
     * StreamerStateResponse ErrorDetails.
     * @member {Array.<IServiceErrorDetail>} ErrorDetails
     * @memberof StreamerStateResponse
     * @instance
     */
    StreamerStateResponse.prototype.ErrorDetails = $util.emptyArray;

    /**
     * Creates a new StreamerStateResponse instance using the specified properties.
     * @function create
     * @memberof StreamerStateResponse
     * @static
     * @param {IStreamerStateResponse=} [properties] Properties to set
     * @returns {StreamerStateResponse} StreamerStateResponse instance
     */
    StreamerStateResponse.create = function create(properties) {
        return new StreamerStateResponse(properties);
    };

    /**
     * Encodes the specified StreamerStateResponse message. Does not implicitly {@link StreamerStateResponse.verify|verify} messages.
     * @function encode
     * @memberof StreamerStateResponse
     * @static
     * @param {IStreamerStateResponse} message StreamerStateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StreamerStateResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Response != null && message.hasOwnProperty("Response"))
            $root.StreamerStateContract.encode(message.Response, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.ErrorDetails != null && message.ErrorDetails.length)
            for (var i = 0; i < message.ErrorDetails.length; ++i)
                $root.ServiceErrorDetail.encode(message.ErrorDetails[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified StreamerStateResponse message, length delimited. Does not implicitly {@link StreamerStateResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StreamerStateResponse
     * @static
     * @param {IStreamerStateResponse} message StreamerStateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StreamerStateResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StreamerStateResponse message from the specified reader or buffer.
     * @function decode
     * @memberof StreamerStateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StreamerStateResponse} StreamerStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StreamerStateResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamerStateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Response = $root.StreamerStateContract.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.ErrorDetails && message.ErrorDetails.length))
                    message.ErrorDetails = [];
                message.ErrorDetails.push($root.ServiceErrorDetail.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StreamerStateResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StreamerStateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StreamerStateResponse} StreamerStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StreamerStateResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StreamerStateResponse message.
     * @function verify
     * @memberof StreamerStateResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StreamerStateResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Response != null && message.hasOwnProperty("Response")) {
            var error = $root.StreamerStateContract.verify(message.Response);
            if (error)
                return "Response." + error;
        }
        if (message.ErrorDetails != null && message.hasOwnProperty("ErrorDetails")) {
            if (!Array.isArray(message.ErrorDetails))
                return "ErrorDetails: array expected";
            for (var i = 0; i < message.ErrorDetails.length; ++i) {
                var error = $root.ServiceErrorDetail.verify(message.ErrorDetails[i]);
                if (error)
                    return "ErrorDetails." + error;
            }
        }
        return null;
    };

    /**
     * Creates a StreamerStateResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StreamerStateResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StreamerStateResponse} StreamerStateResponse
     */
    StreamerStateResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.StreamerStateResponse)
            return object;
        var message = new $root.StreamerStateResponse();
        if (object.Response != null) {
            if (typeof object.Response !== "object")
                throw TypeError(".StreamerStateResponse.Response: object expected");
            message.Response = $root.StreamerStateContract.fromObject(object.Response);
        }
        if (object.ErrorDetails) {
            if (!Array.isArray(object.ErrorDetails))
                throw TypeError(".StreamerStateResponse.ErrorDetails: array expected");
            message.ErrorDetails = [];
            for (var i = 0; i < object.ErrorDetails.length; ++i) {
                if (typeof object.ErrorDetails[i] !== "object")
                    throw TypeError(".StreamerStateResponse.ErrorDetails: object expected");
                message.ErrorDetails[i] = $root.ServiceErrorDetail.fromObject(object.ErrorDetails[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a StreamerStateResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StreamerStateResponse
     * @static
     * @param {StreamerStateResponse} message StreamerStateResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StreamerStateResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ErrorDetails = [];
        if (options.defaults)
            object.Response = null;
        if (message.Response != null && message.hasOwnProperty("Response"))
            object.Response = $root.StreamerStateContract.toObject(message.Response, options);
        if (message.ErrorDetails && message.ErrorDetails.length) {
            object.ErrorDetails = [];
            for (var j = 0; j < message.ErrorDetails.length; ++j)
                object.ErrorDetails[j] = $root.ServiceErrorDetail.toObject(message.ErrorDetails[j], options);
        }
        return object;
    };

    /**
     * Converts this StreamerStateResponse to JSON.
     * @function toJSON
     * @memberof StreamerStateResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StreamerStateResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return StreamerStateResponse;
})();

$root.ViewerBountyStatus = (function() {

    /**
     * Properties of a ViewerBountyStatus.
     * @exports IViewerBountyStatus
     * @interface IViewerBountyStatus
     * @property {number|null} [ProgressionHash] ViewerBountyStatus ProgressionHash
     * @property {number|null} [Progress] ViewerBountyStatus Progress
     * @property {number|null} [CompletionGoalValue] ViewerBountyStatus CompletionGoalValue
     * @property {boolean|null} [IsCompleted] ViewerBountyStatus IsCompleted
     * @property {boolean|null} [IsRedeemed] ViewerBountyStatus IsRedeemed
     * @property {number|null} [ProgressNextAvailableSecondsSinceEpoch] ViewerBountyStatus ProgressNextAvailableSecondsSinceEpoch
     */

    /**
     * Constructs a new ViewerBountyStatus.
     * @exports ViewerBountyStatus
     * @classdesc Represents a ViewerBountyStatus.
     * @implements IViewerBountyStatus
     * @constructor
     * @param {IViewerBountyStatus=} [properties] Properties to set
     */
    function ViewerBountyStatus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ViewerBountyStatus ProgressionHash.
     * @member {number} ProgressionHash
     * @memberof ViewerBountyStatus
     * @instance
     */
    ViewerBountyStatus.prototype.ProgressionHash = 0;

    /**
     * ViewerBountyStatus Progress.
     * @member {number} Progress
     * @memberof ViewerBountyStatus
     * @instance
     */
    ViewerBountyStatus.prototype.Progress = 0;

    /**
     * ViewerBountyStatus CompletionGoalValue.
     * @member {number} CompletionGoalValue
     * @memberof ViewerBountyStatus
     * @instance
     */
    ViewerBountyStatus.prototype.CompletionGoalValue = 0;

    /**
     * ViewerBountyStatus IsCompleted.
     * @member {boolean} IsCompleted
     * @memberof ViewerBountyStatus
     * @instance
     */
    ViewerBountyStatus.prototype.IsCompleted = false;

    /**
     * ViewerBountyStatus IsRedeemed.
     * @member {boolean} IsRedeemed
     * @memberof ViewerBountyStatus
     * @instance
     */
    ViewerBountyStatus.prototype.IsRedeemed = false;

    /**
     * ViewerBountyStatus ProgressNextAvailableSecondsSinceEpoch.
     * @member {number} ProgressNextAvailableSecondsSinceEpoch
     * @memberof ViewerBountyStatus
     * @instance
     */
    ViewerBountyStatus.prototype.ProgressNextAvailableSecondsSinceEpoch = 0;

    /**
     * Creates a new ViewerBountyStatus instance using the specified properties.
     * @function create
     * @memberof ViewerBountyStatus
     * @static
     * @param {IViewerBountyStatus=} [properties] Properties to set
     * @returns {ViewerBountyStatus} ViewerBountyStatus instance
     */
    ViewerBountyStatus.create = function create(properties) {
        return new ViewerBountyStatus(properties);
    };

    /**
     * Encodes the specified ViewerBountyStatus message. Does not implicitly {@link ViewerBountyStatus.verify|verify} messages.
     * @function encode
     * @memberof ViewerBountyStatus
     * @static
     * @param {IViewerBountyStatus} message ViewerBountyStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ViewerBountyStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.ProgressionHash != null && message.hasOwnProperty("ProgressionHash"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ProgressionHash);
        if (message.Progress != null && message.hasOwnProperty("Progress"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Progress);
        if (message.CompletionGoalValue != null && message.hasOwnProperty("CompletionGoalValue"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.CompletionGoalValue);
        if (message.IsCompleted != null && message.hasOwnProperty("IsCompleted"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.IsCompleted);
        if (message.IsRedeemed != null && message.hasOwnProperty("IsRedeemed"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.IsRedeemed);
        if (message.ProgressNextAvailableSecondsSinceEpoch != null && message.hasOwnProperty("ProgressNextAvailableSecondsSinceEpoch"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.ProgressNextAvailableSecondsSinceEpoch);
        return writer;
    };

    /**
     * Encodes the specified ViewerBountyStatus message, length delimited. Does not implicitly {@link ViewerBountyStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ViewerBountyStatus
     * @static
     * @param {IViewerBountyStatus} message ViewerBountyStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ViewerBountyStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ViewerBountyStatus message from the specified reader or buffer.
     * @function decode
     * @memberof ViewerBountyStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ViewerBountyStatus} ViewerBountyStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ViewerBountyStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ViewerBountyStatus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ProgressionHash = reader.uint32();
                break;
            case 2:
                message.Progress = reader.int32();
                break;
            case 3:
                message.CompletionGoalValue = reader.int32();
                break;
            case 4:
                message.IsCompleted = reader.bool();
                break;
            case 5:
                message.IsRedeemed = reader.bool();
                break;
            case 6:
                message.ProgressNextAvailableSecondsSinceEpoch = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ViewerBountyStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ViewerBountyStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ViewerBountyStatus} ViewerBountyStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ViewerBountyStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ViewerBountyStatus message.
     * @function verify
     * @memberof ViewerBountyStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ViewerBountyStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ProgressionHash != null && message.hasOwnProperty("ProgressionHash"))
            if (!$util.isInteger(message.ProgressionHash))
                return "ProgressionHash: integer expected";
        if (message.Progress != null && message.hasOwnProperty("Progress"))
            if (!$util.isInteger(message.Progress))
                return "Progress: integer expected";
        if (message.CompletionGoalValue != null && message.hasOwnProperty("CompletionGoalValue"))
            if (!$util.isInteger(message.CompletionGoalValue))
                return "CompletionGoalValue: integer expected";
        if (message.IsCompleted != null && message.hasOwnProperty("IsCompleted"))
            if (typeof message.IsCompleted !== "boolean")
                return "IsCompleted: boolean expected";
        if (message.IsRedeemed != null && message.hasOwnProperty("IsRedeemed"))
            if (typeof message.IsRedeemed !== "boolean")
                return "IsRedeemed: boolean expected";
        if (message.ProgressNextAvailableSecondsSinceEpoch != null && message.hasOwnProperty("ProgressNextAvailableSecondsSinceEpoch"))
            if (!$util.isInteger(message.ProgressNextAvailableSecondsSinceEpoch))
                return "ProgressNextAvailableSecondsSinceEpoch: integer expected";
        return null;
    };

    /**
     * Creates a ViewerBountyStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ViewerBountyStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ViewerBountyStatus} ViewerBountyStatus
     */
    ViewerBountyStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.ViewerBountyStatus)
            return object;
        var message = new $root.ViewerBountyStatus();
        if (object.ProgressionHash != null)
            message.ProgressionHash = object.ProgressionHash >>> 0;
        if (object.Progress != null)
            message.Progress = object.Progress | 0;
        if (object.CompletionGoalValue != null)
            message.CompletionGoalValue = object.CompletionGoalValue | 0;
        if (object.IsCompleted != null)
            message.IsCompleted = Boolean(object.IsCompleted);
        if (object.IsRedeemed != null)
            message.IsRedeemed = Boolean(object.IsRedeemed);
        if (object.ProgressNextAvailableSecondsSinceEpoch != null)
            message.ProgressNextAvailableSecondsSinceEpoch = object.ProgressNextAvailableSecondsSinceEpoch | 0;
        return message;
    };

    /**
     * Creates a plain object from a ViewerBountyStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ViewerBountyStatus
     * @static
     * @param {ViewerBountyStatus} message ViewerBountyStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ViewerBountyStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.ProgressionHash = 0;
            object.Progress = 0;
            object.CompletionGoalValue = 0;
            object.IsCompleted = false;
            object.IsRedeemed = false;
            object.ProgressNextAvailableSecondsSinceEpoch = 0;
        }
        if (message.ProgressionHash != null && message.hasOwnProperty("ProgressionHash"))
            object.ProgressionHash = message.ProgressionHash;
        if (message.Progress != null && message.hasOwnProperty("Progress"))
            object.Progress = message.Progress;
        if (message.CompletionGoalValue != null && message.hasOwnProperty("CompletionGoalValue"))
            object.CompletionGoalValue = message.CompletionGoalValue;
        if (message.IsCompleted != null && message.hasOwnProperty("IsCompleted"))
            object.IsCompleted = message.IsCompleted;
        if (message.IsRedeemed != null && message.hasOwnProperty("IsRedeemed"))
            object.IsRedeemed = message.IsRedeemed;
        if (message.ProgressNextAvailableSecondsSinceEpoch != null && message.hasOwnProperty("ProgressNextAvailableSecondsSinceEpoch"))
            object.ProgressNextAvailableSecondsSinceEpoch = message.ProgressNextAvailableSecondsSinceEpoch;
        return object;
    };

    /**
     * Converts this ViewerBountyStatus to JSON.
     * @function toJSON
     * @memberof ViewerBountyStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ViewerBountyStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ViewerBountyStatus;
})();

$root.ViewerStateContract = (function() {

    /**
     * Properties of a ViewerStateContract.
     * @exports IViewerStateContract
     * @interface IViewerStateContract
     * @property {boolean|null} [IsLinked] ViewerStateContract IsLinked
     * @property {Array.<IViewerBountyStatus>|null} [ViewerBountyStatus] ViewerStateContract ViewerBountyStatus
     * @property {Array.<Enum0>|null} [Platforms] ViewerStateContract Platforms
     * @property {boolean|null} [IsCrossSaved] ViewerStateContract IsCrossSaved
     * @property {Enum0|null} [ChosenPlatform] ViewerStateContract ChosenPlatform
     * @property {number|Long|null} [BnetMembershipId] ViewerStateContract BnetMembershipId
     * @property {boolean|null} [RequiresLogin] ViewerStateContract RequiresLogin
     */

    /**
     * Constructs a new ViewerStateContract.
     * @exports ViewerStateContract
     * @classdesc Represents a ViewerStateContract.
     * @implements IViewerStateContract
     * @constructor
     * @param {IViewerStateContract=} [properties] Properties to set
     */
    function ViewerStateContract(properties) {
        this.ViewerBountyStatus = [];
        this.Platforms = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ViewerStateContract IsLinked.
     * @member {boolean} IsLinked
     * @memberof ViewerStateContract
     * @instance
     */
    ViewerStateContract.prototype.IsLinked = false;

    /**
     * ViewerStateContract ViewerBountyStatus.
     * @member {Array.<IViewerBountyStatus>} ViewerBountyStatus
     * @memberof ViewerStateContract
     * @instance
     */
    ViewerStateContract.prototype.ViewerBountyStatus = $util.emptyArray;

    /**
     * ViewerStateContract Platforms.
     * @member {Array.<Enum0>} Platforms
     * @memberof ViewerStateContract
     * @instance
     */
    ViewerStateContract.prototype.Platforms = $util.emptyArray;

    /**
     * ViewerStateContract IsCrossSaved.
     * @member {boolean} IsCrossSaved
     * @memberof ViewerStateContract
     * @instance
     */
    ViewerStateContract.prototype.IsCrossSaved = false;

    /**
     * ViewerStateContract ChosenPlatform.
     * @member {Enum0} ChosenPlatform
     * @memberof ViewerStateContract
     * @instance
     */
    ViewerStateContract.prototype.ChosenPlatform = 0;

    /**
     * ViewerStateContract BnetMembershipId.
     * @member {number|Long} BnetMembershipId
     * @memberof ViewerStateContract
     * @instance
     */
    ViewerStateContract.prototype.BnetMembershipId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ViewerStateContract RequiresLogin.
     * @member {boolean} RequiresLogin
     * @memberof ViewerStateContract
     * @instance
     */
    ViewerStateContract.prototype.RequiresLogin = false;

    /**
     * Creates a new ViewerStateContract instance using the specified properties.
     * @function create
     * @memberof ViewerStateContract
     * @static
     * @param {IViewerStateContract=} [properties] Properties to set
     * @returns {ViewerStateContract} ViewerStateContract instance
     */
    ViewerStateContract.create = function create(properties) {
        return new ViewerStateContract(properties);
    };

    /**
     * Encodes the specified ViewerStateContract message. Does not implicitly {@link ViewerStateContract.verify|verify} messages.
     * @function encode
     * @memberof ViewerStateContract
     * @static
     * @param {IViewerStateContract} message ViewerStateContract message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ViewerStateContract.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.IsLinked != null && message.hasOwnProperty("IsLinked"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.IsLinked);
        if (message.ViewerBountyStatus != null && message.ViewerBountyStatus.length)
            for (var i = 0; i < message.ViewerBountyStatus.length; ++i)
                $root.ViewerBountyStatus.encode(message.ViewerBountyStatus[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.Platforms != null && message.Platforms.length) {
            writer.uint32(/* id 3, wireType 2 =*/26).fork();
            for (var i = 0; i < message.Platforms.length; ++i)
                writer.int32(message.Platforms[i]);
            writer.ldelim();
        }
        if (message.IsCrossSaved != null && message.hasOwnProperty("IsCrossSaved"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.IsCrossSaved);
        if (message.ChosenPlatform != null && message.hasOwnProperty("ChosenPlatform"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ChosenPlatform);
        if (message.BnetMembershipId != null && message.hasOwnProperty("BnetMembershipId"))
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.BnetMembershipId);
        if (message.RequiresLogin != null && message.hasOwnProperty("RequiresLogin"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.RequiresLogin);
        return writer;
    };

    /**
     * Encodes the specified ViewerStateContract message, length delimited. Does not implicitly {@link ViewerStateContract.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ViewerStateContract
     * @static
     * @param {IViewerStateContract} message ViewerStateContract message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ViewerStateContract.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ViewerStateContract message from the specified reader or buffer.
     * @function decode
     * @memberof ViewerStateContract
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ViewerStateContract} ViewerStateContract
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ViewerStateContract.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ViewerStateContract();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.IsLinked = reader.bool();
                break;
            case 2:
                if (!(message.ViewerBountyStatus && message.ViewerBountyStatus.length))
                    message.ViewerBountyStatus = [];
                message.ViewerBountyStatus.push($root.ViewerBountyStatus.decode(reader, reader.uint32()));
                break;
            case 3:
                if (!(message.Platforms && message.Platforms.length))
                    message.Platforms = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.Platforms.push(reader.int32());
                } else
                    message.Platforms.push(reader.int32());
                break;
            case 4:
                message.IsCrossSaved = reader.bool();
                break;
            case 5:
                message.ChosenPlatform = reader.int32();
                break;
            case 6:
                message.BnetMembershipId = reader.int64();
                break;
            case 7:
                message.RequiresLogin = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ViewerStateContract message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ViewerStateContract
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ViewerStateContract} ViewerStateContract
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ViewerStateContract.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ViewerStateContract message.
     * @function verify
     * @memberof ViewerStateContract
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ViewerStateContract.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.IsLinked != null && message.hasOwnProperty("IsLinked"))
            if (typeof message.IsLinked !== "boolean")
                return "IsLinked: boolean expected";
        if (message.ViewerBountyStatus != null && message.hasOwnProperty("ViewerBountyStatus")) {
            if (!Array.isArray(message.ViewerBountyStatus))
                return "ViewerBountyStatus: array expected";
            for (var i = 0; i < message.ViewerBountyStatus.length; ++i) {
                var error = $root.ViewerBountyStatus.verify(message.ViewerBountyStatus[i]);
                if (error)
                    return "ViewerBountyStatus." + error;
            }
        }
        if (message.Platforms != null && message.hasOwnProperty("Platforms")) {
            if (!Array.isArray(message.Platforms))
                return "Platforms: array expected";
            for (var i = 0; i < message.Platforms.length; ++i)
                switch (message.Platforms[i]) {
                default:
                    return "Platforms: enum value[] expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 5:
                case 6:
                    break;
                }
        }
        if (message.IsCrossSaved != null && message.hasOwnProperty("IsCrossSaved"))
            if (typeof message.IsCrossSaved !== "boolean")
                return "IsCrossSaved: boolean expected";
        if (message.ChosenPlatform != null && message.hasOwnProperty("ChosenPlatform"))
            switch (message.ChosenPlatform) {
            default:
                return "ChosenPlatform: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 5:
            case 6:
                break;
            }
        if (message.BnetMembershipId != null && message.hasOwnProperty("BnetMembershipId"))
            if (!$util.isInteger(message.BnetMembershipId) && !(message.BnetMembershipId && $util.isInteger(message.BnetMembershipId.low) && $util.isInteger(message.BnetMembershipId.high)))
                return "BnetMembershipId: integer|Long expected";
        if (message.RequiresLogin != null && message.hasOwnProperty("RequiresLogin"))
            if (typeof message.RequiresLogin !== "boolean")
                return "RequiresLogin: boolean expected";
        return null;
    };

    /**
     * Creates a ViewerStateContract message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ViewerStateContract
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ViewerStateContract} ViewerStateContract
     */
    ViewerStateContract.fromObject = function fromObject(object) {
        if (object instanceof $root.ViewerStateContract)
            return object;
        var message = new $root.ViewerStateContract();
        if (object.IsLinked != null)
            message.IsLinked = Boolean(object.IsLinked);
        if (object.ViewerBountyStatus) {
            if (!Array.isArray(object.ViewerBountyStatus))
                throw TypeError(".ViewerStateContract.ViewerBountyStatus: array expected");
            message.ViewerBountyStatus = [];
            for (var i = 0; i < object.ViewerBountyStatus.length; ++i) {
                if (typeof object.ViewerBountyStatus[i] !== "object")
                    throw TypeError(".ViewerStateContract.ViewerBountyStatus: object expected");
                message.ViewerBountyStatus[i] = $root.ViewerBountyStatus.fromObject(object.ViewerBountyStatus[i]);
            }
        }
        if (object.Platforms) {
            if (!Array.isArray(object.Platforms))
                throw TypeError(".ViewerStateContract.Platforms: array expected");
            message.Platforms = [];
            for (var i = 0; i < object.Platforms.length; ++i)
                switch (object.Platforms[i]) {
                default:
                case "None":
                case 0:
                    message.Platforms[i] = 0;
                    break;
                case "Xbox":
                case 1:
                    message.Platforms[i] = 1;
                    break;
                case "Psn":
                case 2:
                    message.Platforms[i] = 2;
                    break;
                case "Steam":
                case 3:
                    message.Platforms[i] = 3;
                    break;
                case "Stadia":
                case 5:
                    message.Platforms[i] = 5;
                    break;
                case "Egs":
                case 6:
                    message.Platforms[i] = 6;
                    break;
                }
        }
        if (object.IsCrossSaved != null)
            message.IsCrossSaved = Boolean(object.IsCrossSaved);
        switch (object.ChosenPlatform) {
        case "None":
        case 0:
            message.ChosenPlatform = 0;
            break;
        case "Xbox":
        case 1:
            message.ChosenPlatform = 1;
            break;
        case "Psn":
        case 2:
            message.ChosenPlatform = 2;
            break;
        case "Steam":
        case 3:
            message.ChosenPlatform = 3;
            break;
        case "Stadia":
        case 5:
            message.ChosenPlatform = 5;
            break;
        case "Egs":
        case 6:
            message.ChosenPlatform = 6;
            break;
        }
        if (object.BnetMembershipId != null)
            if ($util.Long)
                (message.BnetMembershipId = $util.Long.fromValue(object.BnetMembershipId)).unsigned = false;
            else if (typeof object.BnetMembershipId === "string")
                message.BnetMembershipId = parseInt(object.BnetMembershipId, 10);
            else if (typeof object.BnetMembershipId === "number")
                message.BnetMembershipId = object.BnetMembershipId;
            else if (typeof object.BnetMembershipId === "object")
                message.BnetMembershipId = new $util.LongBits(object.BnetMembershipId.low >>> 0, object.BnetMembershipId.high >>> 0).toNumber();
        if (object.RequiresLogin != null)
            message.RequiresLogin = Boolean(object.RequiresLogin);
        return message;
    };

    /**
     * Creates a plain object from a ViewerStateContract message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ViewerStateContract
     * @static
     * @param {ViewerStateContract} message ViewerStateContract
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ViewerStateContract.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.ViewerBountyStatus = [];
            object.Platforms = [];
        }
        if (options.defaults) {
            object.IsLinked = false;
            object.IsCrossSaved = false;
            object.ChosenPlatform = options.enums === String ? "None" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.BnetMembershipId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.BnetMembershipId = options.longs === String ? "0" : 0;
            object.RequiresLogin = false;
        }
        if (message.IsLinked != null && message.hasOwnProperty("IsLinked"))
            object.IsLinked = message.IsLinked;
        if (message.ViewerBountyStatus && message.ViewerBountyStatus.length) {
            object.ViewerBountyStatus = [];
            for (var j = 0; j < message.ViewerBountyStatus.length; ++j)
                object.ViewerBountyStatus[j] = $root.ViewerBountyStatus.toObject(message.ViewerBountyStatus[j], options);
        }
        if (message.Platforms && message.Platforms.length) {
            object.Platforms = [];
            for (var j = 0; j < message.Platforms.length; ++j)
                object.Platforms[j] = options.enums === String ? $root.Enum0[message.Platforms[j]] : message.Platforms[j];
        }
        if (message.IsCrossSaved != null && message.hasOwnProperty("IsCrossSaved"))
            object.IsCrossSaved = message.IsCrossSaved;
        if (message.ChosenPlatform != null && message.hasOwnProperty("ChosenPlatform"))
            object.ChosenPlatform = options.enums === String ? $root.Enum0[message.ChosenPlatform] : message.ChosenPlatform;
        if (message.BnetMembershipId != null && message.hasOwnProperty("BnetMembershipId"))
            if (typeof message.BnetMembershipId === "number")
                object.BnetMembershipId = options.longs === String ? String(message.BnetMembershipId) : message.BnetMembershipId;
            else
                object.BnetMembershipId = options.longs === String ? $util.Long.prototype.toString.call(message.BnetMembershipId) : options.longs === Number ? new $util.LongBits(message.BnetMembershipId.low >>> 0, message.BnetMembershipId.high >>> 0).toNumber() : message.BnetMembershipId;
        if (message.RequiresLogin != null && message.hasOwnProperty("RequiresLogin"))
            object.RequiresLogin = message.RequiresLogin;
        return object;
    };

    /**
     * Converts this ViewerStateContract to JSON.
     * @function toJSON
     * @memberof ViewerStateContract
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ViewerStateContract.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ViewerStateContract;
})();

/**
 * Enum0 enum.
 * @exports Enum0
 * @enum {string}
 * @property {number} None=0 None value
 * @property {number} Xbox=1 Xbox value
 * @property {number} Psn=2 Psn value
 * @property {number} Steam=3 Steam value
 * @property {number} Stadia=5 Stadia value
 * @property {number} Egs=6 Egs value
 */
$root.Enum0 = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "None"] = 0;
    values[valuesById[1] = "Xbox"] = 1;
    values[valuesById[2] = "Psn"] = 2;
    values[valuesById[3] = "Steam"] = 3;
    values[valuesById[5] = "Stadia"] = 5;
    values[valuesById[6] = "Egs"] = 6;
    return values;
})();

$root.ViewerStateResponse = (function() {

    /**
     * Properties of a ViewerStateResponse.
     * @exports IViewerStateResponse
     * @interface IViewerStateResponse
     * @property {IViewerStateContract|null} [Response] ViewerStateResponse Response
     * @property {Array.<IServiceErrorDetail>|null} [ErrorDetails] ViewerStateResponse ErrorDetails
     */

    /**
     * Constructs a new ViewerStateResponse.
     * @exports ViewerStateResponse
     * @classdesc Represents a ViewerStateResponse.
     * @implements IViewerStateResponse
     * @constructor
     * @param {IViewerStateResponse=} [properties] Properties to set
     */
    function ViewerStateResponse(properties) {
        this.ErrorDetails = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ViewerStateResponse Response.
     * @member {IViewerStateContract|null|undefined} Response
     * @memberof ViewerStateResponse
     * @instance
     */
    ViewerStateResponse.prototype.Response = null;

    /**
     * ViewerStateResponse ErrorDetails.
     * @member {Array.<IServiceErrorDetail>} ErrorDetails
     * @memberof ViewerStateResponse
     * @instance
     */
    ViewerStateResponse.prototype.ErrorDetails = $util.emptyArray;

    /**
     * Creates a new ViewerStateResponse instance using the specified properties.
     * @function create
     * @memberof ViewerStateResponse
     * @static
     * @param {IViewerStateResponse=} [properties] Properties to set
     * @returns {ViewerStateResponse} ViewerStateResponse instance
     */
    ViewerStateResponse.create = function create(properties) {
        return new ViewerStateResponse(properties);
    };

    /**
     * Encodes the specified ViewerStateResponse message. Does not implicitly {@link ViewerStateResponse.verify|verify} messages.
     * @function encode
     * @memberof ViewerStateResponse
     * @static
     * @param {IViewerStateResponse} message ViewerStateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ViewerStateResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.Response != null && message.hasOwnProperty("Response"))
            $root.ViewerStateContract.encode(message.Response, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.ErrorDetails != null && message.ErrorDetails.length)
            for (var i = 0; i < message.ErrorDetails.length; ++i)
                $root.ServiceErrorDetail.encode(message.ErrorDetails[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ViewerStateResponse message, length delimited. Does not implicitly {@link ViewerStateResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ViewerStateResponse
     * @static
     * @param {IViewerStateResponse} message ViewerStateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ViewerStateResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ViewerStateResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ViewerStateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ViewerStateResponse} ViewerStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ViewerStateResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ViewerStateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.Response = $root.ViewerStateContract.decode(reader, reader.uint32());
                break;
            case 2:
                if (!(message.ErrorDetails && message.ErrorDetails.length))
                    message.ErrorDetails = [];
                message.ErrorDetails.push($root.ServiceErrorDetail.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ViewerStateResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ViewerStateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ViewerStateResponse} ViewerStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ViewerStateResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ViewerStateResponse message.
     * @function verify
     * @memberof ViewerStateResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ViewerStateResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.Response != null && message.hasOwnProperty("Response")) {
            var error = $root.ViewerStateContract.verify(message.Response);
            if (error)
                return "Response." + error;
        }
        if (message.ErrorDetails != null && message.hasOwnProperty("ErrorDetails")) {
            if (!Array.isArray(message.ErrorDetails))
                return "ErrorDetails: array expected";
            for (var i = 0; i < message.ErrorDetails.length; ++i) {
                var error = $root.ServiceErrorDetail.verify(message.ErrorDetails[i]);
                if (error)
                    return "ErrorDetails." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ViewerStateResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ViewerStateResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ViewerStateResponse} ViewerStateResponse
     */
    ViewerStateResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ViewerStateResponse)
            return object;
        var message = new $root.ViewerStateResponse();
        if (object.Response != null) {
            if (typeof object.Response !== "object")
                throw TypeError(".ViewerStateResponse.Response: object expected");
            message.Response = $root.ViewerStateContract.fromObject(object.Response);
        }
        if (object.ErrorDetails) {
            if (!Array.isArray(object.ErrorDetails))
                throw TypeError(".ViewerStateResponse.ErrorDetails: array expected");
            message.ErrorDetails = [];
            for (var i = 0; i < object.ErrorDetails.length; ++i) {
                if (typeof object.ErrorDetails[i] !== "object")
                    throw TypeError(".ViewerStateResponse.ErrorDetails: object expected");
                message.ErrorDetails[i] = $root.ServiceErrorDetail.fromObject(object.ErrorDetails[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ViewerStateResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ViewerStateResponse
     * @static
     * @param {ViewerStateResponse} message ViewerStateResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ViewerStateResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.ErrorDetails = [];
        if (options.defaults)
            object.Response = null;
        if (message.Response != null && message.hasOwnProperty("Response"))
            object.Response = $root.ViewerStateContract.toObject(message.Response, options);
        if (message.ErrorDetails && message.ErrorDetails.length) {
            object.ErrorDetails = [];
            for (var j = 0; j < message.ErrorDetails.length; ++j)
                object.ErrorDetails[j] = $root.ServiceErrorDetail.toObject(message.ErrorDetails[j], options);
        }
        return object;
    };

    /**
     * Converts this ViewerStateResponse to JSON.
     * @function toJSON
     * @memberof ViewerStateResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ViewerStateResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ViewerStateResponse;
})();

module.exports = $root;
