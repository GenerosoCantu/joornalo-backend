"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const stories_controller_1 = require("./stories.controller");
const stories_service_1 = require("./stories.service");
const stories_schema_1 = require("./schemas/stories.schema");
let StoriesModule = class StoriesModule {
};
StoriesModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Story', schema: stories_schema_1.StorySchema }])],
        controllers: [stories_controller_1.StoriesController],
        providers: [stories_service_1.StoriesService],
        exports: [stories_service_1.StoriesService],
    })
], StoriesModule);
exports.StoriesModule = StoriesModule;
//# sourceMappingURL=stories.module.js.map