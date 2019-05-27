(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('q'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-dropzone', ['exports', '@angular/core', 'q', '@angular/common'], factory) :
    (factory((global['ngx-dropzone'] = {}),global.ng.core,null,global.ng.common));
}(this, (function (exports,core,q,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

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
                return new Promise(( /**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */function (resolve, reject) {
                    return __awaiter(_this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            if (accept !== '*')
                                if (!accept.endsWith('/*') ? !accept.includes(file.type) :
                                    accept.split('/')[0] !== file.type.split('/')[0])
                                    return [2 /*return*/, reject("File has unaccepted file type")];
                            if (maxFileSize && file.size > maxFileSize)
                                return [2 /*return*/, reject("File size exceeds maximum file limit")];
                            result = {
                                lastModified: file.lastModified,
                                name: file.name,
                                preview: null,
                                size: file.size,
                                type: file.type,
                                slice: file.slice
                            };
                            if (showPreviews && file.type.startsWith('image'))
                                this.readFile(file).then(( /**
                                 * @param {?} preview
                                 * @return {?}
                                 */function (preview) {
                                    result.preview = preview;
                                    resolve(result);
                                })).catch(( /**
                                 * @param {?} error
                                 * @return {?}
                                 */function (error) { return reject(error); }));
                            else
                                resolve(result);
                            return [2 /*return*/];
                        });
                    });
                }));
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
                return new Promise(( /**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */function (resolve, reject) {
                    /** @type {?} */
                    var results = {
                        addedFiles: [],
                        rejectedFiles: []
                    };
                    /** @type {?} */
                    var promises = files.map(( /**
                     * @param {?} file
                     * @return {?}
                     */function (file) {
                        return _this.parseFile(file, accept, maxFileSize, preserveFiles, showPreviews)
                            .then(( /**
                     * @param {?} parsed
                     * @return {?}
                     */function (parsed) {
                            results.addedFiles.push(parsed);
                        })).catch(( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
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
                    Promise.all(promises).then(( /**
                     * @return {?}
                     */function () {
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
                return new Promise(( /**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */function (resolve, reject) {
                    /** @type {?} */
                    var reader = new FileReader();
                    reader.onload = ( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) {
                        return resolve((( /** @type {?} */(e.target))).result);
                    });
                    reader.onerror = ( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) {
                        return reject("FileReader failed on file " + file.name + ". No preview image created.");
                    });
                    reader.readAsDataURL(file);
                }));
            };
        NgxDropzoneService.decorators = [
            { type: core.Injectable },
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
            this.filesAdded = new core.EventEmitter();
            this.filesRemoved = new core.EventEmitter();
            this.filesRejected = new core.EventEmitter();
            this.filesChanged = new core.EventEmitter();
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
                this.handleFileListSelection(files).then(( /**
                 * @return {?}
                 */function () {
                    // Reset the file input value to trigger the event on new selection.
                    (( /** @type {?} */(_this.fileInput.nativeElement))).value = '';
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
                this.files = this.files.filter(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x != file; }));
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
                return new Promise(( /**
                 * @param {?} resolve
                 * @return {?}
                 */function (resolve) {
                    if (_this.disabled)
                        return q.reject("Dropzone is disabled");
                    if (!_this.multiple && files.length > 1)
                        return q.reject("Cannot accept multiple files");
                    _this.service.parseFiles(files, _this.accept, _this.maxFileSize, _this.preserveFiles, _this.showPreviews)
                        .then(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
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
            { type: core.Component, args: [{
                        selector: 'ngx-dropzone',
                        template: "<input type=\"file\"\n       #fileInput class=\"file-input\"\n       (change)=\"onFilesSelected($event)\"\n       [multiple]=\"multiple\"\n       [accept]=\"accept\" />\n\n<div class=\"dropzone\"\n     #dropzone>\n  <div class=\"droparea\" (click)=\"showFileSelector()\">\n    <ng-container *ngTemplateOutlet=\"dropareaTemplate ? dropareaTemplate : dropareaFallbackTemplate\">\n    </ng-container>\n  </div>\n  <div *ngIf=\"showPreviews\" class=\"previews\">\n    <ng-container *ngFor=\"let file of files\">\n      <ng-container *ngTemplateOutlet=\"\n                    previewTemplate ? previewTemplate : previewFallbackTemplate;\n                    context: {\n                      $implicit: {\n                        file: file,\n                        remove: removeFile.bind(this)\n                      }\n                    }\">\n      </ng-container>\n    </ng-container>\n  </div>\n</div>\n\n<ng-template #dropareaFallbackTemplate>\n  Click or drop your files here\n</ng-template>\n\n<ng-template #previewFallbackTemplate let-context>\n  <div class=\"preview-fallback\" [class.no-image]=\"!context.file.preview\">\n    <div class=\"overlay\">\n      <div class=\"content\">\n        <div class=\"filename\">{{context.file.name}}</div>\n        <button (click)=\"context.remove(context.file)\">Remove</button>\n      </div>\n    </div>\n    <img *ngIf=\"context.file.preview\" [src]=\"context.file.preview\" />\n  </div>\n</ng-template>\n",
                        styles: [":host(){display:flex;flex-direction:column;height:180px;background:#fff;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px}:host().hovered{border:2px solid #717386;color:#dfdfe4}:host().disabled{opacity:.5;cursor:no-drop}:host():not(.disabled)>.dropzone>.droparea{cursor:pointer}:host()>.dropzone{position:relative;width:100%;min-height:100%;overflow:hidden;display:flex;flex-direction:column}:host()>.dropzone>.droparea{display:flex;align-items:center;justify-content:center;width:100%;flex:1;z-index:4}:host()>.dropzone>.previews{height:50%;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:space-around;overflow-y:auto;overflow-x:hidden}:host()>.dropzone>.previews>.no-image>.filename{padding:10px}:host()>.dropzone>.previews>.preview-fallback{position:relative;text-align:center;max-height:calc(100% - 10px);height:200px;max-width:200px;width:25%;min-width:100px;margin:10px;z-index:0}:host()>.dropzone>.previews>.preview-fallback>img{max-height:100%;max-width:100%;border-radius:5px;opacity:.8;z-index:1}:host()>.dropzone>.previews>.preview-fallback>.overlay{position:absolute;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.8);width:100%;height:100%;z-index:2}:host()>.dropzone>.previews>.preview-fallback>.overlay>.content{padding:2.5%;max-width:95%;max-height:95%}:host()>.dropzone>.previews>.preview-fallback>.overlay>.content>.filename{text-overflow:ellipsis;overflow:hidden}:host()>.dropzone>.previews.limit-width{max-width:25%}.file-input{display:none}"],
                        providers: [NgxDropzoneService] // Create a new service instance for each component.
                    },] },
        ];
        /** @nocollapse */
        NgxDropzoneComponent.ctorParameters = function () {
            return [
                { type: NgxDropzoneService }
            ];
        };
        NgxDropzoneComponent.propDecorators = {
            dropareaTemplate: [{ type: core.ContentChild, args: ['droparea',] }],
            previewTemplate: [{ type: core.ContentChild, args: ['preview',] }],
            multiple: [{ type: core.Input }],
            accept: [{ type: core.Input }],
            maxFileSize: [{ type: core.Input }],
            showPreviews: [{ type: core.Input }],
            preserveFiles: [{ type: core.Input }],
            filesInput: [{ type: core.Input, args: ['files',] }],
            filesAdded: [{ type: core.Output }],
            filesRemoved: [{ type: core.Output }],
            filesRejected: [{ type: core.Output }],
            filesChanged: [{ type: core.Output, args: ['filesChange',] }],
            disabled: [{ type: core.HostBinding, args: ['class.disabled',] }, { type: core.Input }],
            hovering: [{ type: core.HostBinding, args: ['class.hovered',] }],
            fileInput: [{ type: core.ViewChild, args: ['fileInput',] }],
            onDragOver: [{ type: core.HostListener, args: ['dragover', ['$event'],] }],
            onDragLeave: [{ type: core.HostListener, args: ['dragleave', ['$event'],] }],
            onDrop: [{ type: core.HostListener, args: ['drop', ['$event'],] }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
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

    exports.NgxDropzoneComponent = NgxDropzoneComponent;
    exports.NgxDropzoneModule = NgxDropzoneModule;
    exports.ɵa = NgxDropzoneService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbbnVsbCwibmc6Ly9uZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtZHJvcHpvbmUvbGliL25neC1kcm9wem9uZS5jb21wb25lbnQudHMiLCJuZzovL25neC1kcm9wem9uZS9saWIvbmd4LWRyb3B6b25lLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRGaWxlIGV4dGVuZHMgRmlsZSB7XG4gIHByZXZpZXc6IHN0cmluZyB8IEFycmF5QnVmZmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlamVjdGVkRmlsZSBleHRlbmRzIEZpbGUge1xuICBlcnJvcjogYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVNlbGVjdFJlc3VsdCB7XG4gIGFkZGVkRmlsZXM6IFBhcnNlZEZpbGVbXSxcbiAgcmVqZWN0ZWRGaWxlczogUmVqZWN0ZWRGaWxlW11cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neERyb3B6b25lU2VydmljZSB7XG4gIC8vIFBhcnNlcyBhIHNpbmdsZSBmaWxlIGZvciB0aGUgZHJvcHpvbmVcbiAgcGFyc2VGaWxlKGZpbGU6IEZpbGUsIGFjY2VwdDogc3RyaW5nLCBtYXhGaWxlU2l6ZTogbnVtYmVyLCBwcmVzZXJ2ZUZpbGVzOiBib29sZWFuLFxuICAgICAgICAgICAgc2hvd1ByZXZpZXdzOiBib29sZWFuKTogUHJvbWlzZTxQYXJzZWRGaWxlPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFBhcnNlZEZpbGU+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChhY2NlcHQgIT09ICcqJylcbiAgICAgICAgaWYgKCFhY2NlcHQuZW5kc1dpdGgoJy8qJykgPyAhYWNjZXB0LmluY2x1ZGVzKGZpbGUudHlwZSkgOlxuICAgICAgICAgIGFjY2VwdC5zcGxpdCgnLycpWzBdICE9PSBmaWxlLnR5cGUuc3BsaXQoJy8nKVswXSlcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KFwiRmlsZSBoYXMgdW5hY2NlcHRlZCBmaWxlIHR5cGVcIik7XG5cbiAgICAgIGlmIChtYXhGaWxlU2l6ZSAmJiBmaWxlLnNpemUgPiBtYXhGaWxlU2l6ZSlcbiAgICAgICAgcmV0dXJuIHJlamVjdChcIkZpbGUgc2l6ZSBleGNlZWRzIG1heGltdW0gZmlsZSBsaW1pdFwiKTtcblxuICAgICAgbGV0IHJlc3VsdDogUGFyc2VkRmlsZSA9IHtcbiAgICAgICAgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCxcbiAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICBwcmV2aWV3OiBudWxsLFxuICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgICAgc2xpY2U6IGZpbGUuc2xpY2VcbiAgICAgIH07XG5cbiAgICAgIGlmIChzaG93UHJldmlld3MgJiYgZmlsZS50eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlJykpXG4gICAgICAgIHRoaXMucmVhZEZpbGUoZmlsZSkudGhlbihwcmV2aWV3ID0+IHtcbiAgICAgICAgICByZXN1bHQucHJldmlldyA9IHByZXZpZXc7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUGFyc2VzIGEgc2V0IG9mIGZpbGVzIGZvciB0aGUgZHJvcHpvbmVcbiAgcGFyc2VGaWxlcyhmaWxlczogRmlsZVtdLCBhY2NlcHQ6IHN0cmluZywgbWF4RmlsZVNpemU6IG51bWJlcixcbiAgICAgICAgICAgICBwcmVzZXJ2ZUZpbGVzOiBib29sZWFuLCBzaG93UHJldmlld3M6IGJvb2xlYW4pOiBQcm9taXNlPEZpbGVTZWxlY3RSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RmlsZVNlbGVjdFJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHJlc3VsdHM6IEZpbGVTZWxlY3RSZXN1bHQgPSB7XG4gICAgICAgIGFkZGVkRmlsZXM6IFtdLFxuICAgICAgICByZWplY3RlZEZpbGVzOiBbXVxuICAgICAgfTtcblxuICAgICAgbGV0IHByb21pc2VzOiBQcm9taXNlPHZvaWQ+W10gPSBmaWxlcy5tYXAoZmlsZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlRmlsZShmaWxlLCBhY2NlcHQsIG1heEZpbGVTaXplLCBwcmVzZXJ2ZUZpbGVzLCBzaG93UHJldmlld3MpXG4gICAgICAgICAgLnRoZW4ocGFyc2VkID0+IHtcbiAgICAgICAgICAgIHJlc3VsdHMuYWRkZWRGaWxlcy5wdXNoKHBhcnNlZCk7XG4gICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgcmVzdWx0cy5yZWplY3RlZEZpbGVzLnB1c2goe1xuICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgIGxhc3RNb2RpZmllZDogZmlsZS5sYXN0TW9kaWZpZWQsXG4gICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgICAgICBzbGljZTogZmlsZS5zbGljZSxcbiAgICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUmVhZCBhIGZpbGUgdG8gZ2VuZXJhdGUgYSBwcmV2aWV3XG4gIHByaXZhdGUgcmVhZEZpbGUoZmlsZTogRmlsZSk6IFByb21pc2U8c3RyaW5nIHwgQXJyYXlCdWZmZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nIHwgQXJyYXlCdWZmZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgIHJlYWRlci5vbmxvYWQgPSBlID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoKGUudGFyZ2V0IGFzIEZpbGVSZWFkZXIpLnJlc3VsdCk7XG4gICAgICB9O1xuXG4gICAgICByZWFkZXIub25lcnJvciA9IGUgPT4ge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGBGaWxlUmVhZGVyIGZhaWxlZCBvbiBmaWxlICR7ZmlsZS5uYW1lfS4gTm8gcHJldmlldyBpbWFnZSBjcmVhdGVkLmApO1xuICAgICAgfVxuXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBIb3N0QmluZGluZyxcbiAgQ29udGVudENoaWxkLFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZVNlcnZpY2UsIEZpbGVTZWxlY3RSZXN1bHQsIFBhcnNlZEZpbGUsIFJlamVjdGVkRmlsZSB9IGZyb20gJy4vbmd4LWRyb3B6b25lLnNlcnZpY2UnO1xuaW1wb3J0IHsgcmVqZWN0IH0gZnJvbSAncSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kcm9wem9uZScsXG4gIHRlbXBsYXRlOiBgPGlucHV0IHR5cGU9XCJmaWxlXCJcbiAgICAgICAjZmlsZUlucHV0IGNsYXNzPVwiZmlsZS1pbnB1dFwiXG4gICAgICAgKGNoYW5nZSk9XCJvbkZpbGVzU2VsZWN0ZWQoJGV2ZW50KVwiXG4gICAgICAgW211bHRpcGxlXT1cIm11bHRpcGxlXCJcbiAgICAgICBbYWNjZXB0XT1cImFjY2VwdFwiIC8+XG5cbjxkaXYgY2xhc3M9XCJkcm9wem9uZVwiXG4gICAgICNkcm9wem9uZT5cbiAgPGRpdiBjbGFzcz1cImRyb3BhcmVhXCIgKGNsaWNrKT1cInNob3dGaWxlU2VsZWN0b3IoKVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJkcm9wYXJlYVRlbXBsYXRlID8gZHJvcGFyZWFUZW1wbGF0ZSA6IGRyb3BhcmVhRmFsbGJhY2tUZW1wbGF0ZVwiPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cInNob3dQcmV2aWV3c1wiIGNsYXNzPVwicHJldmlld3NcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWxlIG9mIGZpbGVzXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdUZW1wbGF0ZSA/IHByZXZpZXdUZW1wbGF0ZSA6IHByZXZpZXdGYWxsYmFja1RlbXBsYXRlO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgJGltcGxpY2l0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiByZW1vdmVGaWxlLmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cIj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI2Ryb3BhcmVhRmFsbGJhY2tUZW1wbGF0ZT5cbiAgQ2xpY2sgb3IgZHJvcCB5b3VyIGZpbGVzIGhlcmVcbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjcHJldmlld0ZhbGxiYWNrVGVtcGxhdGUgbGV0LWNvbnRleHQ+XG4gIDxkaXYgY2xhc3M9XCJwcmV2aWV3LWZhbGxiYWNrXCIgW2NsYXNzLm5vLWltYWdlXT1cIiFjb250ZXh0LmZpbGUucHJldmlld1wiPlxuICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZW5hbWVcIj57e2NvbnRleHQuZmlsZS5uYW1lfX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY29udGV4dC5yZW1vdmUoY29udGV4dC5maWxlKVwiPlJlbW92ZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGltZyAqbmdJZj1cImNvbnRleHQuZmlsZS5wcmV2aWV3XCIgW3NyY109XCJjb250ZXh0LmZpbGUucHJldmlld1wiIC8+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbmAsXG4gIHN0eWxlczogW2A6aG9zdCgpe2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47aGVpZ2h0OjE4MHB4O2JhY2tncm91bmQ6I2ZmZjtjb2xvcjojNzE3Mzg2O2JvcmRlcjoycHggZGFzaGVkICM3MTczODY7Ym9yZGVyLXJhZGl1czo1cHg7Zm9udC1zaXplOjE2cHh9Omhvc3QoKS5ob3ZlcmVke2JvcmRlcjoycHggc29saWQgIzcxNzM4Njtjb2xvcjojZGZkZmU0fTpob3N0KCkuZGlzYWJsZWR7b3BhY2l0eTouNTtjdXJzb3I6bm8tZHJvcH06aG9zdCgpOm5vdCguZGlzYWJsZWQpPi5kcm9wem9uZT4uZHJvcGFyZWF7Y3Vyc29yOnBvaW50ZXJ9Omhvc3QoKT4uZHJvcHpvbmV7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW59Omhvc3QoKT4uZHJvcHpvbmU+LmRyb3BhcmVhe2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO2ZsZXg6MTt6LWluZGV4OjR9Omhvc3QoKT4uZHJvcHpvbmU+LnByZXZpZXdze2hlaWdodDo1MCU7d2lkdGg6MTAwJTtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO292ZXJmbG93LXk6YXV0bztvdmVyZmxvdy14OmhpZGRlbn06aG9zdCgpPi5kcm9wem9uZT4ucHJldmlld3M+Lm5vLWltYWdlPi5maWxlbmFtZXtwYWRkaW5nOjEwcHh9Omhvc3QoKT4uZHJvcHpvbmU+LnByZXZpZXdzPi5wcmV2aWV3LWZhbGxiYWNre3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyO21heC1oZWlnaHQ6Y2FsYygxMDAlIC0gMTBweCk7aGVpZ2h0OjIwMHB4O21heC13aWR0aDoyMDBweDt3aWR0aDoyNSU7bWluLXdpZHRoOjEwMHB4O21hcmdpbjoxMHB4O3otaW5kZXg6MH06aG9zdCgpPi5kcm9wem9uZT4ucHJldmlld3M+LnByZXZpZXctZmFsbGJhY2s+aW1ne21heC1oZWlnaHQ6MTAwJTttYXgtd2lkdGg6MTAwJTtib3JkZXItcmFkaXVzOjVweDtvcGFjaXR5Oi44O3otaW5kZXg6MX06aG9zdCgpPi5kcm9wem9uZT4ucHJldmlld3M+LnByZXZpZXctZmFsbGJhY2s+Lm92ZXJsYXl7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuOCk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt6LWluZGV4OjJ9Omhvc3QoKT4uZHJvcHpvbmU+LnByZXZpZXdzPi5wcmV2aWV3LWZhbGxiYWNrPi5vdmVybGF5Pi5jb250ZW50e3BhZGRpbmc6Mi41JTttYXgtd2lkdGg6OTUlO21heC1oZWlnaHQ6OTUlfTpob3N0KCk+LmRyb3B6b25lPi5wcmV2aWV3cz4ucHJldmlldy1mYWxsYmFjaz4ub3ZlcmxheT4uY29udGVudD4uZmlsZW5hbWV7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztvdmVyZmxvdzpoaWRkZW59Omhvc3QoKT4uZHJvcHpvbmU+LnByZXZpZXdzLmxpbWl0LXdpZHRoe21heC13aWR0aDoyNSV9LmZpbGUtaW5wdXR7ZGlzcGxheTpub25lfWBdLFxuICBwcm92aWRlcnM6IFtOZ3hEcm9wem9uZVNlcnZpY2VdIC8vIENyZWF0ZSBhIG5ldyBzZXJ2aWNlIGluc3RhbmNlIGZvciBlYWNoIGNvbXBvbmVudC5cbn0pXG5leHBvcnQgY2xhc3MgTmd4RHJvcHpvbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VydmljZTogTmd4RHJvcHpvbmVTZXJ2aWNlXG4gICkgeyB9XG5cbiAgQENvbnRlbnRDaGlsZCgnZHJvcGFyZWEnKSBkcm9wYXJlYVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxFbGVtZW50UmVmPjtcbiAgQENvbnRlbnRDaGlsZCgncHJldmlldycpIHByZXZpZXdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8RWxlbWVudFJlZj47XG5cbiAgQElucHV0KCkgbXVsdGlwbGUgPSB0cnVlO1xuICBASW5wdXQoKSBhY2NlcHQgPSAnKic7XG4gIEBJbnB1dCgpIG1heEZpbGVTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNob3dQcmV2aWV3cyA9IGZhbHNlO1xuICBASW5wdXQoKSBwcmVzZXJ2ZUZpbGVzID0gdHJ1ZTtcblxuICBmaWxlczogUGFyc2VkRmlsZVtdID0gW107XG4gIEBJbnB1dCgnZmlsZXMnKSBmaWxlc0lucHV0OiBGaWxlW10gPSBbXTtcblxuICBAT3V0cHV0KCkgZmlsZXNBZGRlZDogRXZlbnRFbWl0dGVyPEZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVbXT4oKTtcbiAgQE91dHB1dCgpIGZpbGVzUmVtb3ZlZDogRXZlbnRFbWl0dGVyPEZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVbXT4oKTtcbiAgQE91dHB1dCgpIGZpbGVzUmVqZWN0ZWQ6IEV2ZW50RW1pdHRlcjxSZWplY3RlZEZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPFJlamVjdGVkRmlsZVtdPigpO1xuICBAT3V0cHV0KCdmaWxlc0NoYW5nZScpIGZpbGVzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPEZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVbXT4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJykgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5ob3ZlcmVkJykgaG92ZXJpbmcgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdmaWxlSW5wdXQnKSBwcml2YXRlIGZpbGVJbnB1dDogRWxlbWVudFJlZjtcblxuICBzaG93RmlsZVNlbGVjdG9yKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZClcbiAgICAgIHRoaXMuZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlRmlsZXNTZWxlY3Rpb24odGhpcy5maWxlc0lucHV0KTtcbiAgfVxuXG4gIG9uRmlsZXNTZWxlY3RlZChldmVudCkge1xuICAgIGNvbnN0IGZpbGVzOiBGaWxlTGlzdCA9IGV2ZW50LnRhcmdldC5maWxlcztcblxuICAgIHRoaXMuaGFuZGxlRmlsZUxpc3RTZWxlY3Rpb24oZmlsZXMpLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gUmVzZXQgdGhlIGZpbGUgaW5wdXQgdmFsdWUgdG8gdHJpZ2dlciB0aGUgZXZlbnQgb24gbmV3IHNlbGVjdGlvbi5cbiAgICAgICh0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID0gJyc7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVVBEQVRFIDEwLjAzLjIwMTk6XG4gICAqIFJlZmFjdG9yZWQgdG8gdXNlIEhvc3RMaXN0ZW5lciBhbmQgSG9zdEJpbmRpbmdzIHRvIGFsbG93XG4gICAqIGZvciBlYXNpZXIgc3R5bGUgb3ZlcndyaXRpbmcgZnJvbSBvdXRzaWRlIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdkcmFnb3ZlcicsIFsnJGV2ZW50J10pXG4gIG9uRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudCk7XG4gICAgdGhpcy5ob3ZlcmluZyA9IHRydWU7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxuICBvbkRyYWdMZWF2ZShldmVudCkge1xuICAgIGlmICghZXZlbnQuY3VycmVudFRhcmdldC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSlcbiAgICAgIHRoaXMuaG92ZXJpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBvbkRyb3AoZXZlbnQpIHtcbiAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgICB0aGlzLmhvdmVyaW5nID0gZmFsc2U7XG4gICAgdGhpcy5oYW5kbGVGaWxlTGlzdFNlbGVjdGlvbihldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICB9XG5cbiAgcmVtb3ZlRmlsZShmaWxlOiBQYXJzZWRGaWxlKSB7XG4gICAgdmFyIHByZWNvdW50ID0gdGhpcy5maWxlcy5sZW5ndGg7XG4gICAgdGhpcy5maWxlcyA9IHRoaXMuZmlsZXMuZmlsdGVyKHggPT4geCAhPSBmaWxlKTtcbiAgICBpZiAocHJlY291bnQgPT0gdGhpcy5maWxlcy5sZW5ndGgpIHJldHVybjtcbiAgICB0aGlzLmZpbGVzQ2hhbmdlZC5lbWl0KHRoaXMuZmlsZXMpO1xuICAgIHRoaXMuZmlsZXNSZW1vdmVkLmVtaXQoW2ZpbGVdKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRmlsZXNTZWxlY3Rpb24oZmlsZXM6IEZpbGVbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm4gcmVqZWN0KFwiRHJvcHpvbmUgaXMgZGlzYWJsZWRcIik7XG5cbiAgICAgIGlmICghdGhpcy5tdWx0aXBsZSAmJiBmaWxlcy5sZW5ndGggPiAxKVxuICAgICAgICByZXR1cm4gcmVqZWN0KFwiQ2Fubm90IGFjY2VwdCBtdWx0aXBsZSBmaWxlc1wiKTtcblxuICAgICAgdGhpcy5zZXJ2aWNlLnBhcnNlRmlsZXMoZmlsZXMsIHRoaXMuYWNjZXB0LCB0aGlzLm1heEZpbGVTaXplLFxuICAgICAgICB0aGlzLnByZXNlcnZlRmlsZXMsIHRoaXMuc2hvd1ByZXZpZXdzKVxuICAgICAgICAudGhlbigocmVzdWx0OiBGaWxlU2VsZWN0UmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5hZGRlZEZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlIHx8ICF0aGlzLnByZXNlcnZlRmlsZXMpIHRoaXMuZmlsZXMgPSByZXN1bHQuYWRkZWRGaWxlcztcbiAgICAgICAgICAgIGVsc2UgdGhpcy5maWxlcyA9IHRoaXMuZmlsZXMuY29uY2F0KHJlc3VsdC5hZGRlZEZpbGVzKTtcbiAgICAgICAgICAgIHRoaXMuZmlsZXNDaGFuZ2VkLmVtaXQodGhpcy5maWxlcyk7XG4gICAgICAgICAgICB0aGlzLmZpbGVzQWRkZWQuZW1pdChyZXN1bHQuYWRkZWRGaWxlcyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJlc3VsdC5yZWplY3RlZEZpbGVzLmxlbmd0aClcbiAgICAgICAgICAgIHRoaXMuZmlsZXNSZWplY3RlZC5lbWl0KHJlc3VsdC5yZWplY3RlZEZpbGVzKTtcblxuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUZpbGVMaXN0U2VsZWN0aW9uKGZpbGVzOiBGaWxlTGlzdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmhhbmRsZUZpbGVzU2VsZWN0aW9uKEFycmF5LmZyb20oZmlsZXMpKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJldmVudERlZmF1bHQoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWRyb3B6b25lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5neERyb3B6b25lQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZ3hEcm9wem9uZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neERyb3B6b25lTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJFdmVudEVtaXR0ZXIiLCJyZWplY3QiLCJDb21wb25lbnQiLCJDb250ZW50Q2hpbGQiLCJJbnB1dCIsIk91dHB1dCIsIkhvc3RCaW5kaW5nIiwiVmlld0NoaWxkIiwiSG9zdExpc3RlbmVyIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLGFBbURnQixTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUztRQUN2RCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNO1lBQ3JELFNBQVMsU0FBUyxDQUFDLEtBQUssSUFBSSxJQUFJO2dCQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFBRTtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUFFLEVBQUU7WUFDM0YsU0FBUyxRQUFRLENBQUMsS0FBSyxJQUFJLElBQUk7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQUU7WUFBQyxPQUFPLENBQUMsRUFB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OzRCQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQzt3QkFDeEQsS0FBSyxDQUFDOzRCQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUFDLFNBQVM7d0JBQ2pELEtBQUssQ0FBQzs0QkFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs0QkFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUFDLFNBQVM7d0JBQ2pEOzRCQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQ0FBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUFDLFNBQVM7NkJBQUU7NEJBQzVHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dDQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUFDLE1BQU07NkJBQUU7NEJBQ3RGLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFH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