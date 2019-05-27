/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
/**
 * @record
 */
export function ParsedFile() { }
if (false) {
    /** @type {?} */
    ParsedFile.prototype.preview;
}
/**
 * @record
 */
export function RejectedFile() { }
if (false) {
    /** @type {?} */
    RejectedFile.prototype.error;
}
/**
 * @record
 */
export function FileSelectResult() { }
if (false) {
    /** @type {?} */
    FileSelectResult.prototype.addedFiles;
    /** @type {?} */
    FileSelectResult.prototype.rejectedFiles;
}
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
        function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
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
                    function (error) { return reject(error); }));
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
        function (resolve, reject) {
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
        function (resolve, reject) {
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
                return reject("FileReader failed on file " + file.name + ". No preview image created.");
            });
            reader.readAsDataURL(file);
        }));
    };
    NgxDropzoneService.decorators = [
        { type: Injectable },
    ];
    return NgxDropzoneService;
}());
export { NgxDropzoneService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZHJvcHpvbmUvIiwic291cmNlcyI6WyJsaWIvbmd4LWRyb3B6b25lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTNDLGdDQUVDOzs7SUFEQyw2QkFBOEI7Ozs7O0FBR2hDLGtDQUVDOzs7SUFEQyw2QkFBVTs7Ozs7QUFHWixzQ0FHQzs7O0lBRkMsc0NBQXlCOztJQUN6Qix5Q0FBNkI7O0FBRy9CO0lBQUE7SUErRUEsQ0FBQztJQTdFQyx3Q0FBd0M7Ozs7Ozs7Ozs7SUFDeEMsc0NBQVM7Ozs7Ozs7Ozs7SUFBVCxVQUFVLElBQVUsRUFBRSxNQUFjLEVBQUUsV0FBbUIsRUFBRSxhQUFzQixFQUN2RSxZQUFxQjtRQUQvQixpQkEyQkM7UUF6QkMsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQWEsVUFBTyxPQUFPLEVBQUUsTUFBTTs7O2dCQUNuRCxJQUFJLE1BQU0sS0FBSyxHQUFHO29CQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUN4RCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDaEQsc0JBQU8sTUFBTSxDQUFDLCtCQUErQixDQUFDLEVBQUM7Z0JBRW5ELElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVztvQkFDeEMsc0JBQU8sTUFBTSxDQUFDLHNDQUFzQyxDQUFDLEVBQUM7Z0JBRXBELE1BQU0sR0FBZTtvQkFDdkIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO29CQUMvQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsT0FBTyxFQUFFLElBQUk7b0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ2xCO2dCQUVELElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJOzs7O29CQUFDLFVBQUEsT0FBTzt3QkFDOUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7d0JBQ3pCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDbEIsQ0FBQyxFQUFDLENBQUMsS0FBSzs7OztvQkFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBYixDQUFhLEVBQUMsQ0FBQzs7b0JBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzs7O2FBQ3RCLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBeUM7Ozs7Ozs7Ozs7SUFDekMsdUNBQVU7Ozs7Ozs7Ozs7SUFBVixVQUFXLEtBQWEsRUFBRSxNQUFjLEVBQUUsV0FBbUIsRUFDbEQsYUFBc0IsRUFBRSxZQUFxQjtRQUR4RCxpQkE0QkM7UUExQkMsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQW1CLFVBQUMsT0FBTyxFQUFFLE1BQU07O2dCQUMvQyxPQUFPLEdBQXFCO2dCQUM5QixVQUFVLEVBQUUsRUFBRTtnQkFDZCxhQUFhLEVBQUUsRUFBRTthQUNsQjs7Z0JBRUcsUUFBUSxHQUFvQixLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsSUFBSTtnQkFDNUMsT0FBTyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUM7cUJBQzFFLElBQUk7Ozs7Z0JBQUMsVUFBQSxNQUFNO29CQUNWLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLEVBQUMsQ0FBQyxLQUFLOzs7O2dCQUFDLFVBQUEsS0FBSztvQkFDWixPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzt3QkFDekIsS0FBSyxFQUFFLEtBQUs7d0JBQ1osWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO3dCQUMvQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzt3QkFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3FCQUNoQixDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFDLENBQUE7WUFDTixDQUFDLEVBQUM7WUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUk7OztZQUFDO2dCQUN6QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBb0M7Ozs7Ozs7SUFDNUIscUNBQVE7Ozs7Ozs7SUFBaEIsVUFBaUIsSUFBVTtRQUN6QixPQUFPLElBQUksT0FBTzs7Ozs7UUFBdUIsVUFBQyxPQUFPLEVBQUUsTUFBTTs7Z0JBQ2pELE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtZQUUvQixNQUFNLENBQUMsTUFBTTs7OztZQUFHLFVBQUEsQ0FBQztnQkFDZixPQUFPLE9BQU8sQ0FBQyxDQUFDLG1CQUFBLENBQUMsQ0FBQyxNQUFNLEVBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBQSxDQUFDO1lBRUYsTUFBTSxDQUFDLE9BQU87Ozs7WUFBRyxVQUFBLENBQUM7Z0JBQ2hCLE9BQU8sTUFBTSxDQUFDLCtCQUE2QixJQUFJLENBQUMsSUFBSSxnQ0FBNkIsQ0FBQyxDQUFDO1lBQ3JGLENBQUMsQ0FBQSxDQUFBO1lBRUQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7O2dCQTlFRixVQUFVOztJQStFWCx5QkFBQztDQUFBLEFBL0VELElBK0VDO1NBOUVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRGaWxlIGV4dGVuZHMgRmlsZSB7XG4gIHByZXZpZXc6IHN0cmluZyB8IEFycmF5QnVmZmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlamVjdGVkRmlsZSBleHRlbmRzIEZpbGUge1xuICBlcnJvcjogYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVNlbGVjdFJlc3VsdCB7XG4gIGFkZGVkRmlsZXM6IFBhcnNlZEZpbGVbXSxcbiAgcmVqZWN0ZWRGaWxlczogUmVqZWN0ZWRGaWxlW11cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neERyb3B6b25lU2VydmljZSB7XG4gIC8vIFBhcnNlcyBhIHNpbmdsZSBmaWxlIGZvciB0aGUgZHJvcHpvbmVcbiAgcGFyc2VGaWxlKGZpbGU6IEZpbGUsIGFjY2VwdDogc3RyaW5nLCBtYXhGaWxlU2l6ZTogbnVtYmVyLCBwcmVzZXJ2ZUZpbGVzOiBib29sZWFuLFxuICAgICAgICAgICAgc2hvd1ByZXZpZXdzOiBib29sZWFuKTogUHJvbWlzZTxQYXJzZWRGaWxlPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFBhcnNlZEZpbGU+KGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChhY2NlcHQgIT09ICcqJylcbiAgICAgICAgaWYgKCFhY2NlcHQuZW5kc1dpdGgoJy8qJykgPyAhYWNjZXB0LmluY2x1ZGVzKGZpbGUudHlwZSkgOlxuICAgICAgICAgIGFjY2VwdC5zcGxpdCgnLycpWzBdICE9PSBmaWxlLnR5cGUuc3BsaXQoJy8nKVswXSlcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KFwiRmlsZSBoYXMgdW5hY2NlcHRlZCBmaWxlIHR5cGVcIik7XG5cbiAgICAgIGlmIChtYXhGaWxlU2l6ZSAmJiBmaWxlLnNpemUgPiBtYXhGaWxlU2l6ZSlcbiAgICAgICAgcmV0dXJuIHJlamVjdChcIkZpbGUgc2l6ZSBleGNlZWRzIG1heGltdW0gZmlsZSBsaW1pdFwiKTtcblxuICAgICAgbGV0IHJlc3VsdDogUGFyc2VkRmlsZSA9IHtcbiAgICAgICAgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCxcbiAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICBwcmV2aWV3OiBudWxsLFxuICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgICAgc2xpY2U6IGZpbGUuc2xpY2VcbiAgICAgIH07XG5cbiAgICAgIGlmIChzaG93UHJldmlld3MgJiYgZmlsZS50eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlJykpXG4gICAgICAgIHRoaXMucmVhZEZpbGUoZmlsZSkudGhlbihwcmV2aWV3ID0+IHtcbiAgICAgICAgICByZXN1bHQucHJldmlldyA9IHByZXZpZXc7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgIGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUGFyc2VzIGEgc2V0IG9mIGZpbGVzIGZvciB0aGUgZHJvcHpvbmVcbiAgcGFyc2VGaWxlcyhmaWxlczogRmlsZVtdLCBhY2NlcHQ6IHN0cmluZywgbWF4RmlsZVNpemU6IG51bWJlcixcbiAgICAgICAgICAgICBwcmVzZXJ2ZUZpbGVzOiBib29sZWFuLCBzaG93UHJldmlld3M6IGJvb2xlYW4pOiBQcm9taXNlPEZpbGVTZWxlY3RSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RmlsZVNlbGVjdFJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IHJlc3VsdHM6IEZpbGVTZWxlY3RSZXN1bHQgPSB7XG4gICAgICAgIGFkZGVkRmlsZXM6IFtdLFxuICAgICAgICByZWplY3RlZEZpbGVzOiBbXVxuICAgICAgfTtcblxuICAgICAgbGV0IHByb21pc2VzOiBQcm9taXNlPHZvaWQ+W10gPSBmaWxlcy5tYXAoZmlsZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcnNlRmlsZShmaWxlLCBhY2NlcHQsIG1heEZpbGVTaXplLCBwcmVzZXJ2ZUZpbGVzLCBzaG93UHJldmlld3MpXG4gICAgICAgICAgLnRoZW4ocGFyc2VkID0+IHtcbiAgICAgICAgICAgIHJlc3VsdHMuYWRkZWRGaWxlcy5wdXNoKHBhcnNlZCk7XG4gICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgcmVzdWx0cy5yZWplY3RlZEZpbGVzLnB1c2goe1xuICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgIGxhc3RNb2RpZmllZDogZmlsZS5sYXN0TW9kaWZpZWQsXG4gICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgICAgICBzbGljZTogZmlsZS5zbGljZSxcbiAgICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUmVhZCBhIGZpbGUgdG8gZ2VuZXJhdGUgYSBwcmV2aWV3XG4gIHByaXZhdGUgcmVhZEZpbGUoZmlsZTogRmlsZSk6IFByb21pc2U8c3RyaW5nIHwgQXJyYXlCdWZmZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nIHwgQXJyYXlCdWZmZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgIHJlYWRlci5vbmxvYWQgPSBlID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoKGUudGFyZ2V0IGFzIEZpbGVSZWFkZXIpLnJlc3VsdCk7XG4gICAgICB9O1xuXG4gICAgICByZWFkZXIub25lcnJvciA9IGUgPT4ge1xuICAgICAgICByZXR1cm4gcmVqZWN0KGBGaWxlUmVhZGVyIGZhaWxlZCBvbiBmaWxlICR7ZmlsZS5uYW1lfS4gTm8gcHJldmlldyBpbWFnZSBjcmVhdGVkLmApO1xuICAgICAgfVxuXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9KVxuICB9XG59XG4iXX0=