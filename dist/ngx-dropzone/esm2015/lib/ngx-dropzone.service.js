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
export class NgxDropzoneService {
    // Parses a single file for the dropzone
    /**
     * @param {?} file
     * @param {?} accept
     * @param {?} maxFileSize
     * @param {?} preserveFiles
     * @param {?} showPreviews
     * @return {?}
     */
    parseFile(file, accept, maxFileSize, preserveFiles, showPreviews) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (accept !== '*')
                if (!accept.endsWith('/*') ? !accept.includes(file.type) :
                    accept.split('/')[0] !== file.type.split('/')[0])
                    return reject("File has unaccepted file type");
            if (maxFileSize && file.size > maxFileSize)
                return reject("File size exceeds maximum file limit");
            /** @type {?} */
            let result = {
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
                preview => {
                    result.preview = preview;
                    resolve(result);
                })).catch((/**
                 * @param {?} error
                 * @return {?}
                 */
                error => reject(error)));
            else
                resolve(result);
        })));
    }
    // Parses a set of files for the dropzone
    /**
     * @param {?} files
     * @param {?} accept
     * @param {?} maxFileSize
     * @param {?} preserveFiles
     * @param {?} showPreviews
     * @return {?}
     */
    parseFiles(files, accept, maxFileSize, preserveFiles, showPreviews) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            let results = {
                addedFiles: [],
                rejectedFiles: []
            };
            /** @type {?} */
            let promises = files.map((/**
             * @param {?} file
             * @return {?}
             */
            file => {
                return this.parseFile(file, accept, maxFileSize, preserveFiles, showPreviews)
                    .then((/**
                 * @param {?} parsed
                 * @return {?}
                 */
                parsed => {
                    results.addedFiles.push(parsed);
                })).catch((/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
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
            () => {
                resolve(results);
            }));
        }));
    }
    // Read a file to generate a preview
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    readFile(file) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const reader = new FileReader();
            reader.onload = (/**
             * @param {?} e
             * @return {?}
             */
            e => {
                return resolve(((/** @type {?} */ (e.target))).result);
            });
            reader.onerror = (/**
             * @param {?} e
             * @return {?}
             */
            e => {
                return reject(`FileReader failed on file ${file.name}. No preview image created.`);
            });
            reader.readAsDataURL(file);
        }));
    }
}
NgxDropzoneService.decorators = [
    { type: Injectable },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZHJvcHpvbmUvIiwic291cmNlcyI6WyJsaWIvbmd4LWRyb3B6b25lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRTNDLGdDQUVDOzs7SUFEQyw2QkFBOEI7Ozs7O0FBR2hDLGtDQUVDOzs7SUFEQyw2QkFBVTs7Ozs7QUFHWixzQ0FHQzs7O0lBRkMsc0NBQXlCOztJQUN6Qix5Q0FBNkI7O0FBSS9CLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7Ozs7SUFFN0IsU0FBUyxDQUFDLElBQVUsRUFBRSxNQUFjLEVBQUUsV0FBbUIsRUFBRSxhQUFzQixFQUN2RSxZQUFxQjtRQUM3QixPQUFPLElBQUksT0FBTzs7Ozs7UUFBYSxDQUFPLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN2RCxJQUFJLE1BQU0sS0FBSyxHQUFHO2dCQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN4RCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEQsT0FBTyxNQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUVuRCxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVc7Z0JBQ3hDLE9BQU8sTUFBTSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7O2dCQUVwRCxNQUFNLEdBQWU7Z0JBQ3ZCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtnQkFDL0IsSUFBSSxFQUFFLElBQUks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QUFDO1FBQzdCLENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7O1lBOUVGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkRmlsZSBleHRlbmRzIEZpbGUge1xuICBwcmV2aWV3OiBzdHJpbmcgfCBBcnJheUJ1ZmZlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWplY3RlZEZpbGUgZXh0ZW5kcyBGaWxlIHtcbiAgZXJyb3I6IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVTZWxlY3RSZXN1bHQge1xuICBhZGRlZEZpbGVzOiBQYXJzZWRGaWxlW10sXG4gIHJlamVjdGVkRmlsZXM6IFJlamVjdGVkRmlsZVtdXG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZVNlcnZpY2Uge1xuICAvLyBQYXJzZXMgYSBzaW5nbGUgZmlsZSBmb3IgdGhlIGRyb3B6b25lXG4gIHBhcnNlRmlsZShmaWxlOiBGaWxlLCBhY2NlcHQ6IHN0cmluZywgbWF4RmlsZVNpemU6IG51bWJlciwgcHJlc2VydmVGaWxlczogYm9vbGVhbixcbiAgICAgICAgICAgIHNob3dQcmV2aWV3czogYm9vbGVhbik6IFByb21pc2U8UGFyc2VkRmlsZT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxQYXJzZWRGaWxlPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoYWNjZXB0ICE9PSAnKicpXG4gICAgICAgIGlmICghYWNjZXB0LmVuZHNXaXRoKCcvKicpID8gIWFjY2VwdC5pbmNsdWRlcyhmaWxlLnR5cGUpIDpcbiAgICAgICAgICBhY2NlcHQuc3BsaXQoJy8nKVswXSAhPT0gZmlsZS50eXBlLnNwbGl0KCcvJylbMF0pXG4gICAgICAgICAgcmV0dXJuIHJlamVjdChcIkZpbGUgaGFzIHVuYWNjZXB0ZWQgZmlsZSB0eXBlXCIpO1xuXG4gICAgICBpZiAobWF4RmlsZVNpemUgJiYgZmlsZS5zaXplID4gbWF4RmlsZVNpemUpXG4gICAgICAgIHJldHVybiByZWplY3QoXCJGaWxlIHNpemUgZXhjZWVkcyBtYXhpbXVtIGZpbGUgbGltaXRcIik7XG5cbiAgICAgIGxldCByZXN1bHQ6IFBhcnNlZEZpbGUgPSB7XG4gICAgICAgIGxhc3RNb2RpZmllZDogZmlsZS5sYXN0TW9kaWZpZWQsXG4gICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgcHJldmlldzogbnVsbCxcbiAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgIHNsaWNlOiBmaWxlLnNsaWNlXG4gICAgICB9O1xuXG4gICAgICBpZiAoc2hvd1ByZXZpZXdzICYmIGZpbGUudHlwZS5zdGFydHNXaXRoKCdpbWFnZScpKVxuICAgICAgICB0aGlzLnJlYWRGaWxlKGZpbGUpLnRoZW4ocHJldmlldyA9PiB7XG4gICAgICAgICAgcmVzdWx0LnByZXZpZXcgPSBwcmV2aWV3O1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFBhcnNlcyBhIHNldCBvZiBmaWxlcyBmb3IgdGhlIGRyb3B6b25lXG4gIHBhcnNlRmlsZXMoZmlsZXM6IEZpbGVbXSwgYWNjZXB0OiBzdHJpbmcsIG1heEZpbGVTaXplOiBudW1iZXIsXG4gICAgICAgICAgICAgcHJlc2VydmVGaWxlczogYm9vbGVhbiwgc2hvd1ByZXZpZXdzOiBib29sZWFuKTogUHJvbWlzZTxGaWxlU2VsZWN0UmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEZpbGVTZWxlY3RSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCByZXN1bHRzOiBGaWxlU2VsZWN0UmVzdWx0ID0ge1xuICAgICAgICBhZGRlZEZpbGVzOiBbXSxcbiAgICAgICAgcmVqZWN0ZWRGaWxlczogW11cbiAgICAgIH07XG5cbiAgICAgIGxldCBwcm9taXNlczogUHJvbWlzZTx2b2lkPltdID0gZmlsZXMubWFwKGZpbGUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUZpbGUoZmlsZSwgYWNjZXB0LCBtYXhGaWxlU2l6ZSwgcHJlc2VydmVGaWxlcywgc2hvd1ByZXZpZXdzKVxuICAgICAgICAgIC50aGVuKHBhcnNlZCA9PiB7XG4gICAgICAgICAgICByZXN1bHRzLmFkZGVkRmlsZXMucHVzaChwYXJzZWQpO1xuICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIHJlc3VsdHMucmVqZWN0ZWRGaWxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IGZpbGUubGFzdE1vZGlmaWVkLFxuICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgICAgc2xpY2U6IGZpbGUuc2xpY2UsXG4gICAgICAgICAgICAgIHR5cGU6IGZpbGUudHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJlYWQgYSBmaWxlIHRvIGdlbmVyYXRlIGEgcHJldmlld1xuICBwcml2YXRlIHJlYWRGaWxlKGZpbGU6IEZpbGUpOiBQcm9taXNlPHN0cmluZyB8IEFycmF5QnVmZmVyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZyB8IEFycmF5QnVmZmVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICByZWFkZXIub25sb2FkID0gZSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKChlLnRhcmdldCBhcyBGaWxlUmVhZGVyKS5yZXN1bHQpO1xuICAgICAgfTtcblxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBlID0+IHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChgRmlsZVJlYWRlciBmYWlsZWQgb24gZmlsZSAke2ZpbGUubmFtZX0uIE5vIHByZXZpZXcgaW1hZ2UgY3JlYXRlZC5gKTtcbiAgICAgIH1cblxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfSlcbiAgfVxufVxuIl19