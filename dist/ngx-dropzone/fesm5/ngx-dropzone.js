import { __awaiter, __generator } from 'tslib';
import { Injectable, Component, Input, Output, ViewChild, EventEmitter, HostListener, HostBinding, ContentChild, NgModule } from '@angular/core';
import { reject } from 'q';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDropzoneService = /** @class */ (function () {
    function NgxDropzoneService() {
    }
    // Parses a single file for the dropzone
    // Parses a single file for the dropzone
    /**
     * @param {?} file
     * @param {?} accept
     * @param {?} maxFileSize
     * @param {?} preserveFiles
     * @param {?} showPreviews
     * @return {?}
     */
    NgxDropzoneService.prototype.parseFile = 
    // Parses a single file for the dropzone
    /**
     * @param {?} file
     * @param {?} accept
     * @param {?} maxFileSize
     * @param {?} preserveFiles
     * @param {?} showPreviews
     * @return {?}
     */
    function (file, accept, maxFileSize, preserveFiles, showPreviews) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject$$1) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                if (accept !== '*')
                    if (!accept.endsWith('/*') ? !accept.includes(file.type) :
                        accept.split('/')[0] !== file.type.split('/')[0])
                        return [2 /*return*/, reject$$1("File has unaccepted file type")];
                if (maxFileSize && file.size > maxFileSize)
                    return [2 /*return*/, reject$$1("File size exceeds maximum file limit")];
                result = {
                    lastModified: file.lastModified,
                    name: file.name,
                    preview: null,
                    size: file.size,
                    type: file.type,
                    slice: file.slice
                };
                if (showPreviews && file.type.startsWith('image'))
                    this.readFile(file).then((/**
                     * @param {?} preview
                     * @return {?}
                     */
                    function (preview) {
                        result.preview = preview;
                        resolve(result);
                    })).catch((/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) { return reject$$1(error); }));
                else
                    resolve(result);
                return [2 /*return*/];
            });
        }); }));
    };
    // Parses a set of files for the dropzone
    // Parses a set of files for the dropzone
    /**
     * @param {?} files
     * @param {?} accept
     * @param {?} maxFileSize
     * @param {?} preserveFiles
     * @param {?} showPreviews
     * @return {?}
     */
    NgxDropzoneService.prototype.parseFiles = 
    // Parses a set of files for the dropzone
    /**
     * @param {?} files
     * @param {?} accept
     * @param {?} maxFileSize
     * @param {?} preserveFiles
     * @param {?} showPreviews
     * @return {?}
     */
    function (files, accept, maxFileSize, preserveFiles, showPreviews) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject$$1) {
            /** @type {?} */
            var results = {
                addedFiles: [],
                rejectedFiles: []
            };
            /** @type {?} */
            var promises = files.map((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                return _this.parseFile(file, accept, maxFileSize, preserveFiles, showPreviews)
                    .then((/**
                 * @param {?} parsed
                 * @return {?}
                 */
                function (parsed) {
                    results.addedFiles.push(parsed);
                })).catch((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    results.rejectedFiles.push({
                        error: error,
                        lastModified: file.lastModified,
                        name: file.name,
                        size: file.size,
                        slice: file.slice,
                        type: file.type
                    });
                }));
            }));
            Promise.all(promises).then((/**
             * @return {?}
             */
            function () {
                resolve(results);
            }));
        }));
    };
    // Read a file to generate a preview
    // Read a file to generate a preview
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    NgxDropzoneService.prototype.readFile = 
    // Read a file to generate a preview
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject$$1) {
            /** @type {?} */
            var reader = new FileReader();
            reader.onload = (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                return resolve(((/** @type {?} */ (e.target))).result);
            });
            reader.onerror = (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                return reject$$1("FileReader failed on file " + file.name + ". No preview image created.");
            });
            reader.readAsDataURL(file);
        }));
    };
    NgxDropzoneService.decorators = [
        { type: Injectable },
    ];
    return NgxDropzoneService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDropzoneComponent = /** @class */ (function () {
    function NgxDropzoneComponent(service) {
        this.service = service;
        this.multiple = true;
        this.accept = '*';
        this.showPreviews = false;
        this.preserveFiles = true;
        this.files = [];
        this.filesInput = [];
        this.filesAdded = new EventEmitter();
        this.filesRemoved = new EventEmitter();
        this.filesRejected = new EventEmitter();
        this.filesChanged = new EventEmitter();
        this.disabled = false;
        this.hovering = false;
    }
    /**
     * @return {?}
     */
    NgxDropzoneComponent.prototype.showFileSelector = /**
     * @return {?}
     */
    function () {
        if (!this.disabled)
            this.fileInput.nativeElement.click();
    };
    /**
     * @return {?}
     */
    NgxDropzoneComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.handleFilesSelection(this.filesInput);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxDropzoneComponent.prototype.onFilesSelected = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var files = event.target.files;
        this.handleFileListSelection(files).then((/**
         * @return {?}
         */
        function () {
            // Reset the file input value to trigger the event on new selection.
            ((/** @type {?} */ (_this.fileInput.nativeElement))).value = '';
        }));
    };
    /**
     * UPDATE 10.03.2019:
     * Refactored to use HostListener and HostBindings to allow
     * for easier style overwriting from outside the component.
     */
    /**
     * UPDATE 10.03.2019:
     * Refactored to use HostListener and HostBindings to allow
     * for easier style overwriting from outside the component.
     * @param {?} event
     * @return {?}
     */
    NgxDropzoneComponent.prototype.onDragOver = /**
     * UPDATE 10.03.2019:
     * Refactored to use HostListener and HostBindings to allow
     * for easier style overwriting from outside the component.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled)
            return;
        this.preventDefault(event);
        this.hovering = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxDropzoneComponent.prototype.onDragLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!event.currentTarget.contains(event.relatedTarget))
            this.hovering = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxDropzoneComponent.prototype.onDrop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.preventDefault(event);
        this.hovering = false;
        this.handleFileListSelection(event.dataTransfer.files);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NgxDropzoneComponent.prototype.removeFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var precount = this.files.length;
        this.files = this.files.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x != file; }));
        if (precount == this.files.length)
            return;
        this.filesChanged.emit(this.files);
        this.filesRemoved.emit([file]);
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    NgxDropzoneComponent.prototype.handleFilesSelection = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (_this.disabled)
                return reject("Dropzone is disabled");
            if (!_this.multiple && files.length > 1)
                return reject("Cannot accept multiple files");
            _this.service.parseFiles(files, _this.accept, _this.maxFileSize, _this.preserveFiles, _this.showPreviews)
                .then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                if (result.addedFiles.length) {
                    if (!_this.multiple || !_this.preserveFiles)
                        _this.files = result.addedFiles;
                    else
                        _this.files = _this.files.concat(result.addedFiles);
                    _this.filesChanged.emit(_this.files);
                    _this.filesAdded.emit(result.addedFiles);
                }
                if (result.rejectedFiles.length)
                    _this.filesRejected.emit(result.rejectedFiles);
                resolve();
            }));
        }));
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    NgxDropzoneComponent.prototype.handleFileListSelection = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        return this.handleFilesSelection(Array.from(files));
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    NgxDropzoneComponent.prototype.preventDefault = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    NgxDropzoneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-dropzone',
                    template: "<input type=\"file\"\n       #fileInput class=\"file-input\"\n       (change)=\"onFilesSelected($event)\"\n       [multiple]=\"multiple\"\n       [accept]=\"accept\" />\n\n<div class=\"dropzone\"\n     #dropzone>\n  <div class=\"droparea\" (click)=\"showFileSelector()\">\n    <ng-container *ngTemplateOutlet=\"dropareaTemplate ? dropareaTemplate : dropareaFallbackTemplate\">\n    </ng-container>\n  </div>\n  <div *ngIf=\"showPreviews\" class=\"previews\">\n    <ng-container *ngFor=\"let file of files\">\n      <ng-container *ngTemplateOutlet=\"\n                    previewTemplate ? previewTemplate : previewFallbackTemplate;\n                    context: {\n                      $implicit: {\n                        file: file,\n                        remove: removeFile.bind(this)\n                      }\n                    }\">\n      </ng-container>\n    </ng-container>\n  </div>\n</div>\n\n<ng-template #dropareaFallbackTemplate>\n  Click or drop your files here\n</ng-template>\n\n<ng-template #previewFallbackTemplate let-context>\n  <div class=\"preview-fallback\" [class.no-image]=\"!context.file.preview\">\n    <div class=\"overlay\">\n      <div class=\"content\">\n        <div class=\"filename\">{{context.file.name}}</div>\n        <button (click)=\"context.remove(context.file)\">Remove</button>\n      </div>\n    </div>\n    <img *ngIf=\"context.file.preview\" [src]=\"context.file.preview\" />\n  </div>\n</ng-template>\n",
                    styles: [":host(){display:flex;flex-direction:column;height:180px;background:#fff;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px}:host().hovered{border:2px solid #717386;color:#dfdfe4}:host().disabled{opacity:.5;cursor:no-drop}:host():not(.disabled)>.dropzone>.droparea{cursor:pointer}:host()>.dropzone{position:relative;width:100%;min-height:100%;overflow:hidden;display:flex;flex-direction:column}:host()>.dropzone>.droparea{display:flex;align-items:center;justify-content:center;width:100%;flex:1;z-index:4}:host()>.dropzone>.previews{height:50%;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:space-around;overflow-y:auto;overflow-x:hidden}:host()>.dropzone>.previews>.no-image>.filename{padding:10px}:host()>.dropzone>.previews>.preview-fallback{position:relative;text-align:center;max-height:calc(100% - 10px);height:200px;max-width:200px;width:25%;min-width:100px;margin:10px;z-index:0}:host()>.dropzone>.previews>.preview-fallback>img{max-height:100%;max-width:100%;border-radius:5px;opacity:.8;z-index:1}:host()>.dropzone>.previews>.preview-fallback>.overlay{position:absolute;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.8);width:100%;height:100%;z-index:2}:host()>.dropzone>.previews>.preview-fallback>.overlay>.content{padding:2.5%;max-width:95%;max-height:95%}:host()>.dropzone>.previews>.preview-fallback>.overlay>.content>.filename{text-overflow:ellipsis;overflow:hidden}:host()>.dropzone>.previews.limit-width{max-width:25%}.file-input{display:none}"],
                    providers: [NgxDropzoneService] // Create a new service instance for each component.
                },] },
    ];
    /** @nocollapse */
    NgxDropzoneComponent.ctorParameters = function () { return [
        { type: NgxDropzoneService }
    ]; };
    NgxDropzoneComponent.propDecorators = {
        dropareaTemplate: [{ type: ContentChild, args: ['droparea',] }],
        previewTemplate: [{ type: ContentChild, args: ['preview',] }],
        multiple: [{ type: Input }],
        accept: [{ type: Input }],
        maxFileSize: [{ type: Input }],
        showPreviews: [{ type: Input }],
        preserveFiles: [{ type: Input }],
        filesInput: [{ type: Input, args: ['files',] }],
        filesAdded: [{ type: Output }],
        filesRemoved: [{ type: Output }],
        filesRejected: [{ type: Output }],
        filesChanged: [{ type: Output, args: ['filesChange',] }],
        disabled: [{ type: HostBinding, args: ['class.disabled',] }, { type: Input }],
        hovering: [{ type: HostBinding, args: ['class.hovered',] }],
        fileInput: [{ type: ViewChild, args: ['fileInput',] }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
    };
    return NgxDropzoneComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDropzoneModule = /** @class */ (function () {
    function NgxDropzoneModule() {
    }
    NgxDropzoneModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        NgxDropzoneComponent
                    ],
                    exports: [
                        NgxDropzoneComponent
                    ]
                },] },
    ];
    return NgxDropzoneModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxDropzoneComponent, NgxDropzoneModule, NgxDropzoneService as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS5jb21wb25lbnQudHMiLCJuZzovL25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkRmlsZSBleHRlbmRzIEZpbGUge1xuICBwcmV2aWV3OiBzdHJpbmcgfCBBcnJheUJ1ZmZlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWplY3RlZEZpbGUgZXh0ZW5kcyBGaWxlIHtcbiAgZXJyb3I6IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVTZWxlY3RSZXN1bHQge1xuICBhZGRlZEZpbGVzOiBQYXJzZWRGaWxlW10sXG4gIHJlamVjdGVkRmlsZXM6IFJlamVjdGVkRmlsZVtdXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZVNlcnZpY2Uge1xuICAvLyBQYXJzZXMgYSBzaW5nbGUgZmlsZSBmb3IgdGhlIGRyb3B6b25lXG4gIHBhcnNlRmlsZShmaWxlOiBGaWxlLCBhY2NlcHQ6IHN0cmluZywgbWF4RmlsZVNpemU6IG51bWJlciwgcHJlc2VydmVGaWxlczogYm9vbGVhbixcbiAgICAgICAgICAgIHNob3dQcmV2aWV3czogYm9vbGVhbik6IFByb21pc2U8UGFyc2VkRmlsZT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxQYXJzZWRGaWxlPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoYWNjZXB0ICE9PSAnKicpXG4gICAgICAgIGlmICghYWNjZXB0LmVuZHNXaXRoKCcvKicpID8gIWFjY2VwdC5pbmNsdWRlcyhmaWxlLnR5cGUpIDpcbiAgICAgICAgICBhY2NlcHQuc3BsaXQoJy8nKVswXSAhPT0gZmlsZS50eXBlLnNwbGl0KCcvJylbMF0pXG4gICAgICAgICAgcmV0dXJuIHJlamVjdChcIkZpbGUgaGFzIHVuYWNjZXB0ZWQgZmlsZSB0eXBlXCIpO1xuXG4gICAgICBpZiAobWF4RmlsZVNpemUgJiYgZmlsZS5zaXplID4gbWF4RmlsZVNpemUpXG4gICAgICAgIHJldHVybiByZWplY3QoXCJGaWxlIHNpemUgZXhjZWVkcyBtYXhpbXVtIGZpbGUgbGltaXRcIik7XG5cbiAgICAgIGxldCByZXN1bHQ6IFBhcnNlZEZpbGUgPSB7XG4gICAgICAgIGxhc3RNb2RpZmllZDogZmlsZS5sYXN0TW9kaWZpZWQsXG4gICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgcHJldmlldzogbnVsbCxcbiAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgIHNsaWNlOiBmaWxlLnNsaWNlXG4gICAgICB9O1xuXG4gICAgICBpZiAoc2hvd1ByZXZpZXdzICYmIGZpbGUudHlwZS5zdGFydHNXaXRoKCdpbWFnZScpKVxuICAgICAgICB0aGlzLnJlYWRGaWxlKGZpbGUpLnRoZW4ocHJldmlldyA9PiB7XG4gICAgICAgICAgcmVzdWx0LnByZXZpZXcgPSBwcmV2aWV3O1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFBhcnNlcyBhIHNldCBvZiBmaWxlcyBmb3IgdGhlIGRyb3B6b25lXG4gIHBhcnNlRmlsZXMoZmlsZXM6IEZpbGVbXSwgYWNjZXB0OiBzdHJpbmcsIG1heEZpbGVTaXplOiBudW1iZXIsXG4gICAgICAgICAgICAgcHJlc2VydmVGaWxlczogYm9vbGVhbiwgc2hvd1ByZXZpZXdzOiBib29sZWFuKTogUHJvbWlzZTxGaWxlU2VsZWN0UmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEZpbGVTZWxlY3RSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCByZXN1bHRzOiBGaWxlU2VsZWN0UmVzdWx0ID0ge1xuICAgICAgICBhZGRlZEZpbGVzOiBbXSxcbiAgICAgICAgcmVqZWN0ZWRGaWxlczogW11cbiAgICAgIH07XG5cbiAgICAgIGxldCBwcm9taXNlczogUHJvbWlzZTx2b2lkPltdID0gZmlsZXMubWFwKGZpbGUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUZpbGUoZmlsZSwgYWNjZXB0LCBtYXhGaWxlU2l6ZSwgcHJlc2VydmVGaWxlcywgc2hvd1ByZXZpZXdzKVxuICAgICAgICAgIC50aGVuKHBhcnNlZCA9PiB7XG4gICAgICAgICAgICByZXN1bHRzLmFkZGVkRmlsZXMucHVzaChwYXJzZWQpO1xuICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHJlc3VsdHMucmVqZWN0ZWRGaWxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IGZpbGUubGFzdE1vZGlmaWVkLFxuICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgICAgc2xpY2U6IGZpbGUuc2xpY2UsXG4gICAgICAgICAgICAgIHR5cGU6IGZpbGUudHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJlYWQgYSBmaWxlIHRvIGdlbmVyYXRlIGEgcHJldmlld1xuICBwcml2YXRlIHJlYWRGaWxlKGZpbGU6IEZpbGUpOiBQcm9taXNlPHN0cmluZyB8IEFycmF5QnVmZmVyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZyB8IEFycmF5QnVmZmVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICByZWFkZXIub25sb2FkID0gZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKChlLnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQpO1xuICAgICAgfTtcblxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBlID0+IHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChgRmlsZVJlYWRlciBmYWlsZWQgb24gZmlsZSAke2ZpbGUubmFtZX0uIE5vIHByZXZpZXcgaW1hZ2UgY3JlYXRlZC5gKTtcbiAgICAgIH1cblxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCwgT3V0cHV0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsXG4gIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSG9zdEJpbmRpbmcsXG4gIENvbnRlbnRDaGlsZCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVTZXJ2aWNlLCBGaWxlU2VsZWN0UmVzdWx0LCBQYXJzZWRGaWxlLCBSZWplY3RlZEZpbGUgfSBmcm9tICcuL25neC1kcm9wem9uZS5zZXJ2aWNlJztcbmltcG9ydCB7IHJlamVjdCB9IGZyb20gJ3EnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZHJvcHpvbmUnLFxuICB0ZW1wbGF0ZTogYDxpbnB1dCB0eXBlPVwiZmlsZVwiXG4gICAgICAgI2ZpbGVJbnB1dCBjbGFzcz1cImZpbGUtaW5wdXRcIlxuICAgICAgIChjaGFuZ2UpPVwib25GaWxlc1NlbGVjdGVkKCRldmVudClcIlxuICAgICAgIFttdWx0aXBsZV09XCJtdWx0aXBsZVwiXG4gICAgICAgW2FjY2VwdF09XCJhY2NlcHRcIiAvPlxuXG48ZGl2IGNsYXNzPVwiZHJvcHpvbmVcIlxuICAgICAjZHJvcHpvbmU+XG4gIDxkaXYgY2xhc3M9XCJkcm9wYXJlYVwiIChjbGljayk9XCJzaG93RmlsZVNlbGVjdG9yKClcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZHJvcGFyZWFUZW1wbGF0ZSA/IGRyb3BhcmVhVGVtcGxhdGUgOiBkcm9wYXJlYUZhbGxiYWNrVGVtcGxhdGVcIj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJzaG93UHJldmlld3NcIiBjbGFzcz1cInByZXZpZXdzXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmlsZSBvZiBmaWxlc1wiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIlxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3VGVtcGxhdGUgPyBwcmV2aWV3VGVtcGxhdGUgOiBwcmV2aWV3RmFsbGJhY2tUZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgICRpbXBsaWNpdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogcmVtb3ZlRmlsZS5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XCI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNkcm9wYXJlYUZhbGxiYWNrVGVtcGxhdGU+XG4gIENsaWNrIG9yIGRyb3AgeW91ciBmaWxlcyBoZXJlXG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI3ByZXZpZXdGYWxsYmFja1RlbXBsYXRlIGxldC1jb250ZXh0PlxuICA8ZGl2IGNsYXNzPVwicHJldmlldy1mYWxsYmFja1wiIFtjbGFzcy5uby1pbWFnZV09XCIhY29udGV4dC5maWxlLnByZXZpZXdcIj5cbiAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVuYW1lXCI+e3tjb250ZXh0LmZpbGUubmFtZX19PC9kaXY+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNvbnRleHQucmVtb3ZlKGNvbnRleHQuZmlsZSlcIj5SZW1vdmU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxpbWcgKm5nSWY9XCJjb250ZXh0LmZpbGUucHJldmlld1wiIFtzcmNdPVwiY29udGV4dC5maWxlLnByZXZpZXdcIiAvPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3QoKXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2hlaWdodDoxODBweDtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6IzcxNzM4Njtib3JkZXI6MnB4IGRhc2hlZCAjNzE3Mzg2O2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtc2l6ZToxNnB4fTpob3N0KCkuaG92ZXJlZHtib3JkZXI6MnB4IHNvbGlkICM3MTczODY7Y29sb3I6I2RmZGZlNH06aG9zdCgpLmRpc2FibGVke29wYWNpdHk6LjU7Y3Vyc29yOm5vLWRyb3B9Omhvc3QoKTpub3QoLmRpc2FibGVkKT4uZHJvcHpvbmU+LmRyb3BhcmVhe2N1cnNvcjpwb2ludGVyfTpob3N0KCk+LmRyb3B6b25le3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7bWluLWhlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufTpob3N0KCk+LmRyb3B6b25lPi5kcm9wYXJlYXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtmbGV4OjE7ei1pbmRleDo0fTpob3N0KCk+LmRyb3B6b25lPi5wcmV2aWV3c3toZWlnaHQ6NTAlO3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LXdyYXA6d3JhcDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtvdmVyZmxvdy15OmF1dG87b3ZlcmZsb3cteDpoaWRkZW59Omhvc3QoKT4uZHJvcHpvbmU+LnByZXZpZXdzPi5uby1pbWFnZT4uZmlsZW5hbWV7cGFkZGluZzoxMHB4fTpob3N0KCk+LmRyb3B6b25lPi5wcmV2aWV3cz4ucHJldmlldy1mYWxsYmFja3twb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcjttYXgtaGVpZ2h0OmNhbGMoMTAwJSAtIDEwcHgpO2hlaWdodDoyMDBweDttYXgtd2lkdGg6MjAwcHg7d2lkdGg6MjUlO21pbi13aWR0aDoxMDBweDttYXJnaW46MTBweDt6LWluZGV4OjB9Omhvc3QoKT4uZHJvcHpvbmU+LnByZXZpZXdzPi5wcmV2aWV3LWZhbGxiYWNrPmltZ3ttYXgtaGVpZ2h0OjEwMCU7bWF4LXdpZHRoOjEwMCU7Ym9yZGVyLXJhZGl1czo1cHg7b3BhY2l0eTouODt6LWluZGV4OjF9Omhvc3QoKT4uZHJvcHpvbmU+LnByZXZpZXdzPi5wcmV2aWV3LWZhbGxiYWNrPi5vdmVybGF5e3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjgpO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoyfTpob3N0KCk+LmRyb3B6b25lPi5wcmV2aWV3cz4ucHJldmlldy1mYWxsYmFjaz4ub3ZlcmxheT4uY29udGVudHtwYWRkaW5nOjIuNSU7bWF4LXdpZHRoOjk1JTttYXgtaGVpZ2h0Ojk1JX06aG9zdCgpPi5kcm9wem9uZT4ucHJldmlld3M+LnByZXZpZXctZmFsbGJhY2s+Lm92ZXJsYXk+LmNvbnRlbnQ+LmZpbGVuYW1le3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3c6aGlkZGVufTpob3N0KCk+LmRyb3B6b25lPi5wcmV2aWV3cy5saW1pdC13aWR0aHttYXgtd2lkdGg6MjUlfS5maWxlLWlucHV0e2Rpc3BsYXk6bm9uZX1gXSxcbiAgcHJvdmlkZXJzOiBbTmd4RHJvcHpvbmVTZXJ2aWNlXSAvLyBDcmVhdGUgYSBuZXcgc2VydmljZSBpbnN0YW5jZSBmb3IgZWFjaCBjb21wb25lbnQuXG59KVxuZXhwb3J0IGNsYXNzIE5neERyb3B6b25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IE5neERyb3B6b25lU2VydmljZVxuICApIHsgfVxuXG4gIEBDb250ZW50Q2hpbGQoJ2Ryb3BhcmVhJykgZHJvcGFyZWFUZW1wbGF0ZTogVGVtcGxhdGVSZWY8RWxlbWVudFJlZj47XG4gIEBDb250ZW50Q2hpbGQoJ3ByZXZpZXcnKSBwcmV2aWV3VGVtcGxhdGU6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+O1xuXG4gIEBJbnB1dCgpIG11bHRpcGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgYWNjZXB0ID0gJyonO1xuICBASW5wdXQoKSBtYXhGaWxlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBzaG93UHJldmlld3MgPSBmYWxzZTtcbiAgQElucHV0KCkgcHJlc2VydmVGaWxlcyA9IHRydWU7XG5cbiAgZmlsZXM6IFBhcnNlZEZpbGVbXSA9IFtdO1xuICBASW5wdXQoJ2ZpbGVzJykgZmlsZXNJbnB1dDogRmlsZVtdID0gW107XG5cbiAgQE91dHB1dCgpIGZpbGVzQWRkZWQ6IEV2ZW50RW1pdHRlcjxGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlW10+KCk7XG4gIEBPdXRwdXQoKSBmaWxlc1JlbW92ZWQ6IEV2ZW50RW1pdHRlcjxGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlW10+KCk7XG4gIEBPdXRwdXQoKSBmaWxlc1JlamVjdGVkOiBFdmVudEVtaXR0ZXI8UmVqZWN0ZWRGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZWplY3RlZEZpbGVbXT4oKTtcbiAgQE91dHB1dCgnZmlsZXNDaGFuZ2UnKSBmaWxlc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlW10+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kaXNhYmxlZCcpIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaG92ZXJlZCcpIGhvdmVyaW5nID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0JykgcHJpdmF0ZSBmaWxlSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgc2hvd0ZpbGVTZWxlY3RvcigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpXG4gICAgICB0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZUZpbGVzU2VsZWN0aW9uKHRoaXMuZmlsZXNJbnB1dCk7XG4gIH1cblxuICBvbkZpbGVzU2VsZWN0ZWQoZXZlbnQpIHtcbiAgICBjb25zdCBmaWxlczogRmlsZUxpc3QgPSBldmVudC50YXJnZXQuZmlsZXM7XG5cbiAgICB0aGlzLmhhbmRsZUZpbGVMaXN0U2VsZWN0aW9uKGZpbGVzKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIFJlc2V0IHRoZSBmaWxlIGlucHV0IHZhbHVlIHRvIHRyaWdnZXIgdGhlIGV2ZW50IG9uIG5ldyBzZWxlY3Rpb24uXG4gICAgICAodGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9ICcnO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVQREFURSAxMC4wMy4yMDE5OlxuICAgKiBSZWZhY3RvcmVkIHRvIHVzZSBIb3N0TGlzdGVuZXIgYW5kIEhvc3RCaW5kaW5ncyB0byBhbGxvd1xuICAgKiBmb3IgZWFzaWVyIHN0eWxlIG92ZXJ3cml0aW5nIGZyb20gb3V0c2lkZSB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBvbkRyYWdPdmVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpO1xuICAgIHRoaXMuaG92ZXJpbmcgPSB0cnVlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcbiAgb25EcmFnTGVhdmUoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LmN1cnJlbnRUYXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpXG4gICAgICB0aGlzLmhvdmVyaW5nID0gZmFsc2U7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgb25Ecm9wKGV2ZW50KSB7XG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudCk7XG4gICAgdGhpcy5ob3ZlcmluZyA9IGZhbHNlO1xuICAgIHRoaXMuaGFuZGxlRmlsZUxpc3RTZWxlY3Rpb24oZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgfVxuXG4gIHJlbW92ZUZpbGUoZmlsZTogUGFyc2VkRmlsZSkge1xuICAgIHZhciBwcmVjb3VudCA9IHRoaXMuZmlsZXMubGVuZ3RoO1xuICAgIHRoaXMuZmlsZXMgPSB0aGlzLmZpbGVzLmZpbHRlcih4ID0+IHggIT0gZmlsZSk7XG4gICAgaWYgKHByZWNvdW50ID09IHRoaXMuZmlsZXMubGVuZ3RoKSByZXR1cm47XG4gICAgdGhpcy5maWxlc0NoYW5nZWQuZW1pdCh0aGlzLmZpbGVzKTtcbiAgICB0aGlzLmZpbGVzUmVtb3ZlZC5lbWl0KFtmaWxlXSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUZpbGVzU2VsZWN0aW9uKGZpbGVzOiBGaWxlW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuIHJlamVjdChcIkRyb3B6b25lIGlzIGRpc2FibGVkXCIpO1xuXG4gICAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgZmlsZXMubGVuZ3RoID4gMSlcbiAgICAgICAgcmV0dXJuIHJlamVjdChcIkNhbm5vdCBhY2NlcHQgbXVsdGlwbGUgZmlsZXNcIik7XG5cbiAgICAgIHRoaXMuc2VydmljZS5wYXJzZUZpbGVzKGZpbGVzLCB0aGlzLmFjY2VwdCwgdGhpcy5tYXhGaWxlU2l6ZSxcbiAgICAgICAgdGhpcy5wcmVzZXJ2ZUZpbGVzLCB0aGlzLnNob3dQcmV2aWV3cylcbiAgICAgICAgLnRoZW4oKHJlc3VsdDogRmlsZVNlbGVjdFJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQuYWRkZWRGaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSB8fCAhdGhpcy5wcmVzZXJ2ZUZpbGVzKSB0aGlzLmZpbGVzID0gcmVzdWx0LmFkZGVkRmlsZXM7XG4gICAgICAgICAgICBlbHNlIHRoaXMuZmlsZXMgPSB0aGlzLmZpbGVzLmNvbmNhdChyZXN1bHQuYWRkZWRGaWxlcyk7XG4gICAgICAgICAgICB0aGlzLmZpbGVzQ2hhbmdlZC5lbWl0KHRoaXMuZmlsZXMpO1xuICAgICAgICAgICAgdGhpcy5maWxlc0FkZGVkLmVtaXQocmVzdWx0LmFkZGVkRmlsZXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyZXN1bHQucmVqZWN0ZWRGaWxlcy5sZW5ndGgpXG4gICAgICAgICAgICB0aGlzLmZpbGVzUmVqZWN0ZWQuZW1pdChyZXN1bHQucmVqZWN0ZWRGaWxlcyk7XG5cbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVGaWxlTGlzdFNlbGVjdGlvbihmaWxlczogRmlsZUxpc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVGaWxlc1NlbGVjdGlvbihBcnJheS5mcm9tKGZpbGVzKSk7XG4gIH1cblxuICBwcml2YXRlIHByZXZlbnREZWZhdWx0KGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVDb21wb25lbnQgfSBmcm9tICcuL25neC1kcm9wem9uZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ3hEcm9wem9uZUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4RHJvcHpvbmVDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJyZWplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFlQTtLQStFQzs7Ozs7Ozs7Ozs7SUE1RUMsc0NBQVM7Ozs7Ozs7Ozs7SUFBVCxVQUFVLElBQVUsRUFBRSxNQUFjLEVBQUUsV0FBbUIsRUFBRSxhQUFzQixFQUN2RSxZQUFxQjtRQUQvQixpQkEyQkM7UUF6QkMsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQWEsVUFBTyxPQUFPLEVBQUVBLFNBQU07OztnQkFDbkQsSUFBSSxNQUFNLEtBQUssR0FBRztvQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQ3RELE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNoRCxzQkFBT0EsU0FBTSxDQUFDLCtCQUErQixDQUFDLEVBQUM7Z0JBRW5ELElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVztvQkFDeEMsc0JBQU9BLFNBQU0sQ0FBQyxzQ0FBc0MsQ0FBQyxFQUFDO2dCQUVwRCxNQUFNLEdBQWU7b0JBQ3ZCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtvQkFDL0IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLE9BQU8sRUFBRSxJQUFJO29CQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2lCQUNsQjtnQkFFRCxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTs7OztvQkFBQyxVQUFBLE9BQU87d0JBQzlCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO3dCQUN6QixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ2pCLEVBQUMsQ0FBQyxLQUFLOzs7O29CQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUFBLFNBQU0sQ0FBQyxLQUFLLENBQUMsR0FBQSxFQUFDLENBQUM7O29CQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7OzthQUN0QixFQUFDLENBQUM7S0FDSjs7Ozs7Ozs7Ozs7SUFHRCx1Q0FBVTs7Ozs7Ozs7OztJQUFWLFVBQVcsS0FBYSxFQUFFLE1BQWMsRUFBRSxXQUFtQixFQUNsRCxhQUFzQixFQUFFLFlBQXFCO1FBRHhELGlCQTRCQztRQTFCQyxPQUFPLElBQUksT0FBTzs7Ozs7UUFBbUIsVUFBQyxPQUFPLEVBQUVBLFNBQU07O2dCQUMvQyxPQUFPLEdBQXFCO2dCQUM5QixVQUFVLEVBQUUsRUFBRTtnQkFDZCxhQUFhLEVBQUUsRUFBRTthQUNsQjs7Z0JBRUcsUUFBUSxHQUFvQixLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDNUMsT0FBTyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7cUJBQzFFLElBQUk7Ozs7Z0JBQUMsVUFBQSxNQUFNO29CQUNWLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNqQyxFQUFDLENBQUMsS0FBSzs7OztnQkFBQyxVQUFBLEtBQUs7b0JBQ1osT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7d0JBQ3pCLEtBQUssRUFBRSxLQUFLO3dCQUNaLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTt3QkFDL0IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTt3QkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7d0JBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtxQkFDaEIsQ0FBQyxDQUFDO2lCQUNKLEVBQUMsQ0FBQTthQUNMLEVBQUM7WUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUk7OztZQUFDO2dCQUN6QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbEIsRUFBQyxDQUFDO1NBQ0osRUFBQyxDQUFDO0tBQ0o7Ozs7Ozs7O0lBR08scUNBQVE7Ozs7Ozs7SUFBaEIsVUFBaUIsSUFBVTtRQUN6QixPQUFPLElBQUksT0FBTzs7Ozs7UUFBdUIsVUFBQyxPQUFPLEVBQUVBLFNBQU07O2dCQUNqRCxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7WUFFL0IsTUFBTSxDQUFDLE1BQU07Ozs7WUFBRyxVQUFBLENBQUM7Z0JBQ2YsT0FBTyxPQUFPLENBQUMsb0JBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBZ0IsTUFBTSxDQUFDLENBQUM7YUFDakQsQ0FBQSxDQUFDO1lBRUYsTUFBTSxDQUFDLE9BQU87Ozs7WUFBRyxVQUFBLENBQUM7Z0JBQ2hCLE9BQU9BLFNBQU0sQ0FBQywrQkFBNkIsSUFBSSxDQUFDLElBQUksZ0NBQTZCLENBQUMsQ0FBQzthQUNwRixDQUFBLENBQUE7WUFFRCxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCLEVBQUMsQ0FBQTtLQUNIOztnQkE5RUYsVUFBVTs7SUErRVgseUJBQUM7Q0FBQTs7Ozs7O0FDOUZEO0lBNkRFLDhCQUNTLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBTTNCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUViLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTlCLFVBQUssR0FBaUIsRUFBRSxDQUFDO1FBQ1QsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUU5QixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDOUQsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNoRSxrQkFBYSxHQUFpQyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUNwRSxpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRS9DLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFHLEtBQUssQ0FBQztLQXBCMUM7Ozs7SUF3QkwsK0NBQWdCOzs7SUFBaEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDeEM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzVDOzs7OztJQUVELDhDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBSztRQUFyQixpQkFPQzs7WUFOTyxLQUFLLEdBQWEsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBRTFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJOzs7UUFBQzs7WUFFdkMsb0JBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLElBQXNCLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDL0QsRUFBQyxDQUFDO0tBQ0o7Ozs7Ozs7Ozs7Ozs7SUFRRCx5Q0FBVTs7Ozs7OztJQURWLFVBQ1csS0FBSztRQUNkLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTFCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7S0FDdEI7Ozs7O0lBR0QsMENBQVc7Ozs7SUFEWCxVQUNZLEtBQUs7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN6Qjs7Ozs7SUFHRCxxQ0FBTTs7OztJQUROLFVBQ08sS0FBSztRQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEQ7Ozs7O0lBRUQseUNBQVU7Ozs7SUFBVixVQUFXLElBQWdCOztZQUNyQixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksSUFBSSxHQUFBLEVBQUMsQ0FBQztRQUMvQyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDaEM7Ozs7OztJQUVPLG1EQUFvQjs7Ozs7SUFBNUIsVUFBNkIsS0FBYTtRQUExQyxpQkF1QkM7UUF0QkMsT0FBTyxJQUFJLE9BQU87Ozs7UUFBTyxVQUFBLE9BQU87WUFDOUIsSUFBSSxLQUFJLENBQUMsUUFBUTtnQkFBRSxPQUFPLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBRXpELElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDcEMsT0FBTyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUVoRCxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsV0FBVyxFQUMxRCxLQUFJLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUM7aUJBQ3JDLElBQUk7Ozs7WUFBQyxVQUFDLE1BQXdCO2dCQUM3QixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO29CQUM1QixJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhO3dCQUFFLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQzs7d0JBQ3JFLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN2RCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDekM7Z0JBRUQsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU07b0JBQzdCLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFaEQsT0FBTyxFQUFFLENBQUM7YUFDWCxFQUFDLENBQUM7U0FDTixFQUFDLENBQUM7S0FDSjs7Ozs7O0lBRU8sc0RBQXVCOzs7OztJQUEvQixVQUFnQyxLQUFlO1FBQzdDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNyRDs7Ozs7O0lBRU8sNkNBQWM7Ozs7O0lBQXRCLFVBQXVCLEtBQWdCO1FBQ3JDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDekI7O2dCQS9KRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSwrNkNBMENYO29CQUNDLE1BQU0sRUFBRSxDQUFDLCtoREFBK2hELENBQUM7b0JBQ3ppRCxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDaEM7Ozs7Z0JBbERRLGtCQUFrQjs7O21DQXdEeEIsWUFBWSxTQUFDLFVBQVU7a0NBQ3ZCLFlBQVksU0FBQyxTQUFTOzJCQUV0QixLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7NkJBR0wsS0FBSyxTQUFDLE9BQU87NkJBRWIsTUFBTTsrQkFDTixNQUFNO2dDQUNOLE1BQU07K0JBQ04sTUFBTSxTQUFDLGFBQWE7MkJBRXBCLFdBQVcsU0FBQyxnQkFBZ0IsY0FBRyxLQUFLOzJCQUNwQyxXQUFXLFNBQUMsZUFBZTs0QkFFM0IsU0FBUyxTQUFDLFdBQVc7NkJBeUJyQixZQUFZLFNBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDOzhCQVFuQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQU1wQyxZQUFZLFNBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQWdEbEMsMkJBQUM7Q0FBQTs7Ozs7O0FDNUtEO0lBSUE7S0FXa0M7O2dCQVhqQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG9CQUFvQjtxQkFDckI7aUJBQ0Y7O0lBQ2dDLHdCQUFDO0NBQUE7Ozs7Ozs7Ozs7Ozs7OyJ9