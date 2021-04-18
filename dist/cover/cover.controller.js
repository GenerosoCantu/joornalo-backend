"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const create_cover_dto_1 = require("./dto/create-cover.dto");
const covers_service_1 = require("./covers.service");
const common_2 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
let CoversController = class CoversController {
    constructor(coversService) {
        this.coversService = coversService;
    }
    findAll() {
        return this.coversService.findAll();
    }
    findOne(id) {
        return this.coversService.findOne(id);
    }
    create(createCoverDto) {
        return this.coversService.create(createCoverDto);
    }
    delete(id) {
        return this.coversService.delete(id);
    }
    update(updateCoverDto, id) {
        return this.coversService.update(id, updateCoverDto);
    }
    async uploadFile(file) {
        return this.coversService.uploadFile(file);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoversController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', new common_2.ParseUUIDPipe({ version: '4' }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoversController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cover_dto_1.CreateCoverDto]),
    __metadata("design:returntype", Promise)
], CoversController.prototype, "create", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoversController.prototype, "delete", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cover_dto_1.CreateCoverDto, Object]),
    __metadata("design:returntype", Promise)
], CoversController.prototype, "update", null);
__decorate([
    common_1.Post('upload'),
    common_2.UseInterceptors(platform_express_1.FilesInterceptor('file', 1, { dest: './data/tmp' })),
    __param(0, common_2.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoversController.prototype, "uploadFile", null);
CoversController = __decorate([
    common_1.Controller('covers'),
    __metadata("design:paramtypes", [typeof (_a = typeof covers_service_1.CoversService !== "undefined" && covers_service_1.CoversService) === "function" ? _a : Object])
], CoversController);
exports.CoversController = CoversController;
//# sourceMappingURL=cover.controller.js.map