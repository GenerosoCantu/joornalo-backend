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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const items_module_1 = require("./items/items.module");
const covers_module_1 = require("./covers/covers.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const sections_module_1 = require("./sections/sections.module");
const modules_module_1 = require("./modules/modules.module");
const keys_1 = require("./config/keys");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forRoot(keys_1.default.mongoURI), auth_module_1.AuthModule, users_module_1.UsersModule, sections_module_1.SectionsModule, modules_module_1.ModulesModule, covers_module_1.CoversModule, items_module_1.ItemsModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map