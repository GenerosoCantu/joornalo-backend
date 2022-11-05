"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uuid_1 = require("uuid");
exports.StorySchema = new mongoose.Schema({
    _id: {
        type: String,
        index: true,
        unique: true,
        default: () => uuid_1.v4()
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'Pending'
    },
    section: String,
    subsection: String,
    title: String,
    desc: String,
    text: String,
    images: [String],
    embeded: [String],
    quotes: [String]
}, {
    versionKey: false
});
//# sourceMappingURL=stories.schema.js.map