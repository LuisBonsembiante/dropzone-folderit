/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ElementRef, ViewChild, EventEmitter, TemplateRef, HostListener, HostBinding, ContentChild } from '@angular/core';
import { NgxDropzoneService } from './ngx-dropzone.service';
import { reject } from 'q';
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
export { NgxDropzoneComponent };
if (false) {
    /** @type {?} */
    NgxDropzoneComponent.prototype.dropareaTemplate;
    /** @type {?} */
    NgxDropzoneComponent.prototype.previewTemplate;
    /** @type {?} */
    NgxDropzoneComponent.prototype.multiple;
    /** @type {?} */
    NgxDropzoneComponent.prototype.accept;
    /** @type {?} */
    NgxDropzoneComponent.prototype.maxFileSize;
    /** @type {?} */
    NgxDropzoneComponent.prototype.showPreviews;
    /** @type {?} */
    NgxDropzoneComponent.prototype.preserveFiles;
    /** @type {?} */
    NgxDropzoneComponent.prototype.files;
    /** @type {?} */
    NgxDropzoneComponent.prototype.filesInput;
    /** @type {?} */
    NgxDropzoneComponent.prototype.filesAdded;
    /** @type {?} */
    NgxDropzoneComponent.prototype.filesRemoved;
    /** @type {?} */
    NgxDropzoneComponent.prototype.filesRejected;
    /** @type {?} */
    NgxDropzoneComponent.prototype.filesChanged;
    /** @type {?} */
    NgxDropzoneComponent.prototype.disabled;
    /** @type {?} */
    NgxDropzoneComponent.prototype.hovering;
    /**
     * @type {?}
     * @private
     */
    NgxDropzoneComponent.prototype.fileInput;
    /** @type {?} */
    NgxDropzoneComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kcm9wem9uZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZHJvcHpvbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFDcEMsWUFBWSxFQUFFLFdBQVcsRUFDekIsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUE4QyxNQUFNLHdCQUF3QixDQUFDO0FBQ3hHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7QUFFM0I7SUFpREUsOEJBQ1MsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFNM0IsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixXQUFNLEdBQUcsR0FBRyxDQUFDO1FBRWIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFFOUIsVUFBSyxHQUFpQixFQUFFLENBQUM7UUFDVCxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRTlCLGVBQVUsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM5RCxpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2hFLGtCQUFhLEdBQWlDLElBQUksWUFBWSxFQUFrQixDQUFDO1FBQ3BFLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFFL0MsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUMzQixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBcEIzQyxDQUFDOzs7O0lBd0JMLCtDQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsOENBQWU7Ozs7SUFBZixVQUFnQixLQUFLO1FBQXJCLGlCQU9DOztZQU5PLEtBQUssR0FBYSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFFMUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUk7OztRQUFDO1lBQ3ZDLG9FQUFvRTtZQUNwRSxDQUFDLG1CQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFvQixDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoRSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7OztJQUVILHlDQUFVOzs7Ozs7O0lBRFYsVUFDVyxLQUFLO1FBQ2QsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU87UUFFMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7OztJQUdELDBDQUFXOzs7O0lBRFgsVUFDWSxLQUFLO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7WUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFHRCxxQ0FBTTs7OztJQUROLFVBQ08sS0FBSztRQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCx5Q0FBVTs7OztJQUFWLFVBQVcsSUFBZ0I7O1lBQ3JCLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxJQUFJLEVBQVQsQ0FBUyxFQUFDLENBQUM7UUFDL0MsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVPLG1EQUFvQjs7Ozs7SUFBNUIsVUFBNkIsS0FBYTtRQUExQyxpQkF1QkM7UUF0QkMsT0FBTyxJQUFJLE9BQU87Ozs7UUFBTyxVQUFBLE9BQU87WUFDOUIsSUFBSSxLQUFJLENBQUMsUUFBUTtnQkFBRSxPQUFPLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBRXpELElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDcEMsT0FBTyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUVoRCxLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsV0FBVyxFQUMxRCxLQUFJLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUM7aUJBQ3JDLElBQUk7Ozs7WUFBQyxVQUFDLE1BQXdCO2dCQUM3QixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO29CQUM1QixJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhO3dCQUFFLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQzs7d0JBQ3JFLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN2RCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25DLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDekM7Z0JBRUQsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU07b0JBQzdCLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFFaEQsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQUMsQ0FBQztRQUNQLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sc0RBQXVCOzs7OztJQUEvQixVQUFnQyxLQUFlO1FBQzdDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFFTyw2Q0FBYzs7Ozs7SUFBdEIsVUFBdUIsS0FBZ0I7UUFDckMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkEvSkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsKzZDQTBDWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQywraERBQStoRCxDQUFDO29CQUN6aUQsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxvREFBb0Q7aUJBQ3JGOzs7O2dCQWxEUSxrQkFBa0I7OzttQ0F3RHhCLFlBQVksU0FBQyxVQUFVO2tDQUN2QixZQUFZLFNBQUMsU0FBUzsyQkFFdEIsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLOzZCQUdMLEtBQUssU0FBQyxPQUFPOzZCQUViLE1BQU07K0JBQ04sTUFBTTtnQ0FDTixNQUFNOytCQUNOLE1BQU0sU0FBQyxhQUFhOzJCQUVwQixXQUFXLFNBQUMsZ0JBQWdCLGNBQUcsS0FBSzsyQkFDcEMsV0FBVyxTQUFDLGVBQWU7NEJBRTNCLFNBQVMsU0FBQyxXQUFXOzZCQXlCckIsWUFBWSxTQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQzs4QkFRbkMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFNcEMsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFnRGxDLDJCQUFDO0NBQUEsQUFoS0QsSUFnS0M7U0FoSFksb0JBQW9COzs7SUFLL0IsZ0RBQW9FOztJQUNwRSwrQ0FBa0U7O0lBRWxFLHdDQUF5Qjs7SUFDekIsc0NBQXNCOztJQUN0QiwyQ0FBNkI7O0lBQzdCLDRDQUE4Qjs7SUFDOUIsNkNBQThCOztJQUU5QixxQ0FBeUI7O0lBQ3pCLDBDQUF3Qzs7SUFFeEMsMENBQXdFOztJQUN4RSw0Q0FBMEU7O0lBQzFFLDZDQUEyRjs7SUFDM0YsNENBQXVGOztJQUV2Rix3Q0FBeUQ7O0lBQ3pELHdDQUErQzs7Ozs7SUFFL0MseUNBQXNEOztJQXZCcEQsdUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCwgT3V0cHV0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsXG4gIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSG9zdEJpbmRpbmcsXG4gIENvbnRlbnRDaGlsZCxcbiAgT25Jbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVTZXJ2aWNlLCBGaWxlU2VsZWN0UmVzdWx0LCBQYXJzZWRGaWxlLCBSZWplY3RlZEZpbGUgfSBmcm9tICcuL25neC1kcm9wem9uZS5zZXJ2aWNlJztcbmltcG9ydCB7IHJlamVjdCB9IGZyb20gJ3EnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZHJvcHpvbmUnLFxuICB0ZW1wbGF0ZTogYDxpbnB1dCB0eXBlPVwiZmlsZVwiXG4gICAgICAgI2ZpbGVJbnB1dCBjbGFzcz1cImZpbGUtaW5wdXRcIlxuICAgICAgIChjaGFuZ2UpPVwib25GaWxlc1NlbGVjdGVkKCRldmVudClcIlxuICAgICAgIFttdWx0aXBsZV09XCJtdWx0aXBsZVwiXG4gICAgICAgW2FjY2VwdF09XCJhY2NlcHRcIiAvPlxuXG48ZGl2IGNsYXNzPVwiZHJvcHpvbmVcIlxuICAgICAjZHJvcHpvbmU+XG4gIDxkaXYgY2xhc3M9XCJkcm9wYXJlYVwiIChjbGljayk9XCJzaG93RmlsZVNlbGVjdG9yKClcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiZHJvcGFyZWFUZW1wbGF0ZSA/IGRyb3BhcmVhVGVtcGxhdGUgOiBkcm9wYXJlYUZhbGxiYWNrVGVtcGxhdGVcIj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJzaG93UHJldmlld3NcIiBjbGFzcz1cInByZXZpZXdzXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmlsZSBvZiBmaWxlc1wiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIlxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3VGVtcGxhdGUgPyBwcmV2aWV3VGVtcGxhdGUgOiBwcmV2aWV3RmFsbGJhY2tUZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgICAgICAgICRpbXBsaWNpdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogcmVtb3ZlRmlsZS5iaW5kKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XCI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNkcm9wYXJlYUZhbGxiYWNrVGVtcGxhdGU+XG4gIENsaWNrIG9yIGRyb3AgeW91ciBmaWxlcyBoZXJlXG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI3ByZXZpZXdGYWxsYmFja1RlbXBsYXRlIGxldC1jb250ZXh0PlxuICA8ZGl2IGNsYXNzPVwicHJldmlldy1mYWxsYmFja1wiIFtjbGFzcy5uby1pbWFnZV09XCIhY29udGV4dC5maWxlLnByZXZpZXdcIj5cbiAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVuYW1lXCI+e3tjb250ZXh0LmZpbGUubmFtZX19PC9kaXY+XG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNvbnRleHQucmVtb3ZlKGNvbnRleHQuZmlsZSlcIj5SZW1vdmU8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxpbWcgKm5nSWY9XCJjb250ZXh0LmZpbGUucHJldmlld1wiIFtzcmNdPVwiY29udGV4dC5maWxlLnByZXZpZXdcIiAvPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3QoKXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2hlaWdodDoxODBweDtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6IzcxNzM4Njtib3JkZXI6MnB4IGRhc2hlZCAjNzE3Mzg2O2JvcmRlci1yYWRpdXM6NXB4O2ZvbnQtc2l6ZToxNnB4fTpob3N0KCkuaG92ZXJlZHtib3JkZXI6MnB4IHNvbGlkICM3MTczODY7Y29sb3I6I2RmZGZlNH06aG9zdCgpLmRpc2FibGVke29wYWNpdHk6LjU7Y3Vyc29yOm5vLWRyb3B9Omhvc3QoKTpub3QoLmRpc2FibGVkKT4uZHJvcHpvbmU+LmRyb3BhcmVhe2N1cnNvcjpwb2ludGVyfTpob3N0KCk+LmRyb3B6b25le3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7bWluLWhlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1ufTpob3N0KCk+LmRyb3B6b25lPi5kcm9wYXJlYXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MTAwJTtmbGV4OjE7ei1pbmRleDo0fTpob3N0KCk+LmRyb3B6b25lPi5wcmV2aWV3c3toZWlnaHQ6NTAlO3dpZHRoOjEwMCU7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOnJvdztmbGV4LXdyYXA6d3JhcDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtvdmVyZmxvdy15OmF1dG87b3ZlcmZsb3cteDpoaWRkZW59Omhvc3QoKT4uZHJvcHpvbmU+LnByZXZpZXdzPi5uby1pbWFnZT4uZmlsZW5hbWV7cGFkZGluZzoxMHB4fTpob3N0KCk+LmRyb3B6b25lPi5wcmV2aWV3cz4ucHJldmlldy1mYWxsYmFja3twb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcjttYXgtaGVpZ2h0OmNhbGMoMTAwJSAtIDEwcHgpO2hlaWdodDoyMDBweDttYXgtd2lkdGg6MjAwcHg7d2lkdGg6MjUlO21pbi13aWR0aDoxMDBweDttYXJnaW46MTBweDt6LWluZGV4OjB9Omhvc3QoKT4uZHJvcHpvbmU+LnByZXZpZXdzPi5wcmV2aWV3LWZhbGxiYWNrPmltZ3ttYXgtaGVpZ2h0OjEwMCU7bWF4LXdpZHRoOjEwMCU7Ym9yZGVyLXJhZGl1czo1cHg7b3BhY2l0eTouODt6LWluZGV4OjF9Omhvc3QoKT4uZHJvcHpvbmU+LnByZXZpZXdzPi5wcmV2aWV3LWZhbGxiYWNrPi5vdmVybGF5e3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjgpO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7ei1pbmRleDoyfTpob3N0KCk+LmRyb3B6b25lPi5wcmV2aWV3cz4ucHJldmlldy1mYWxsYmFjaz4ub3ZlcmxheT4uY29udGVudHtwYWRkaW5nOjIuNSU7bWF4LXdpZHRoOjk1JTttYXgtaGVpZ2h0Ojk1JX06aG9zdCgpPi5kcm9wem9uZT4ucHJldmlld3M+LnByZXZpZXctZmFsbGJhY2s+Lm92ZXJsYXk+LmNvbnRlbnQ+LmZpbGVuYW1le3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7b3ZlcmZsb3c6aGlkZGVufTpob3N0KCk+LmRyb3B6b25lPi5wcmV2aWV3cy5saW1pdC13aWR0aHttYXgtd2lkdGg6MjUlfS5maWxlLWlucHV0e2Rpc3BsYXk6bm9uZX1gXSxcbiAgcHJvdmlkZXJzOiBbTmd4RHJvcHpvbmVTZXJ2aWNlXSAvLyBDcmVhdGUgYSBuZXcgc2VydmljZSBpbnN0YW5jZSBmb3IgZWFjaCBjb21wb25lbnQuXG59KVxuZXhwb3J0IGNsYXNzIE5neERyb3B6b25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IE5neERyb3B6b25lU2VydmljZVxuICApIHsgfVxuXG4gIEBDb250ZW50Q2hpbGQoJ2Ryb3BhcmVhJykgZHJvcGFyZWFUZW1wbGF0ZTogVGVtcGxhdGVSZWY8RWxlbWVudFJlZj47XG4gIEBDb250ZW50Q2hpbGQoJ3ByZXZpZXcnKSBwcmV2aWV3VGVtcGxhdGU6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+O1xuXG4gIEBJbnB1dCgpIG11bHRpcGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgYWNjZXB0ID0gJyonO1xuICBASW5wdXQoKSBtYXhGaWxlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBzaG93UHJldmlld3MgPSBmYWxzZTtcbiAgQElucHV0KCkgcHJlc2VydmVGaWxlcyA9IHRydWU7XG5cbiAgZmlsZXM6IFBhcnNlZEZpbGVbXSA9IFtdO1xuICBASW5wdXQoJ2ZpbGVzJykgZmlsZXNJbnB1dDogRmlsZVtdID0gW107XG5cbiAgQE91dHB1dCgpIGZpbGVzQWRkZWQ6IEV2ZW50RW1pdHRlcjxGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlW10+KCk7XG4gIEBPdXRwdXQoKSBmaWxlc1JlbW92ZWQ6IEV2ZW50RW1pdHRlcjxGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlW10+KCk7XG4gIEBPdXRwdXQoKSBmaWxlc1JlamVjdGVkOiBFdmVudEVtaXR0ZXI8UmVqZWN0ZWRGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxSZWplY3RlZEZpbGVbXT4oKTtcbiAgQE91dHB1dCgnZmlsZXNDaGFuZ2UnKSBmaWxlc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxGaWxlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWxlW10+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kaXNhYmxlZCcpIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaG92ZXJlZCcpIGhvdmVyaW5nID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0JykgcHJpdmF0ZSBmaWxlSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgc2hvd0ZpbGVTZWxlY3RvcigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpXG4gICAgICB0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZUZpbGVzU2VsZWN0aW9uKHRoaXMuZmlsZXNJbnB1dCk7XG4gIH1cblxuICBvbkZpbGVzU2VsZWN0ZWQoZXZlbnQpIHtcbiAgICBjb25zdCBmaWxlczogRmlsZUxpc3QgPSBldmVudC50YXJnZXQuZmlsZXM7XG5cbiAgICB0aGlzLmhhbmRsZUZpbGVMaXN0U2VsZWN0aW9uKGZpbGVzKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIFJlc2V0IHRoZSBmaWxlIGlucHV0IHZhbHVlIHRvIHRyaWdnZXIgdGhlIGV2ZW50IG9uIG5ldyBzZWxlY3Rpb24uXG4gICAgICAodGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9ICcnO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVQREFURSAxMC4wMy4yMDE5OlxuICAgKiBSZWZhY3RvcmVkIHRvIHVzZSBIb3N0TGlzdGVuZXIgYW5kIEhvc3RCaW5kaW5ncyB0byBhbGxvd1xuICAgKiBmb3IgZWFzaWVyIHN0eWxlIG92ZXJ3cml0aW5nIGZyb20gb3V0c2lkZSB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBvbkRyYWdPdmVyKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybjtcblxuICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpO1xuICAgIHRoaXMuaG92ZXJpbmcgPSB0cnVlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcbiAgb25EcmFnTGVhdmUoZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LmN1cnJlbnRUYXJnZXQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCkpXG4gICAgICB0aGlzLmhvdmVyaW5nID0gZmFsc2U7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgb25Ecm9wKGV2ZW50KSB7XG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdChldmVudCk7XG4gICAgdGhpcy5ob3ZlcmluZyA9IGZhbHNlO1xuICAgIHRoaXMuaGFuZGxlRmlsZUxpc3RTZWxlY3Rpb24oZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgfVxuXG4gIHJlbW92ZUZpbGUoZmlsZTogUGFyc2VkRmlsZSkge1xuICAgIHZhciBwcmVjb3VudCA9IHRoaXMuZmlsZXMubGVuZ3RoO1xuICAgIHRoaXMuZmlsZXMgPSB0aGlzLmZpbGVzLmZpbHRlcih4ID0+IHggIT0gZmlsZSk7XG4gICAgaWYgKHByZWNvdW50ID09IHRoaXMuZmlsZXMubGVuZ3RoKSByZXR1cm47XG4gICAgdGhpcy5maWxlc0NoYW5nZWQuZW1pdCh0aGlzLmZpbGVzKTtcbiAgICB0aGlzLmZpbGVzUmVtb3ZlZC5lbWl0KFtmaWxlXSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUZpbGVzU2VsZWN0aW9uKGZpbGVzOiBGaWxlW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkgcmV0dXJuIHJlamVjdChcIkRyb3B6b25lIGlzIGRpc2FibGVkXCIpO1xuXG4gICAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgZmlsZXMubGVuZ3RoID4gMSlcbiAgICAgICAgcmV0dXJuIHJlamVjdChcIkNhbm5vdCBhY2NlcHQgbXVsdGlwbGUgZmlsZXNcIik7XG5cbiAgICAgIHRoaXMuc2VydmljZS5wYXJzZUZpbGVzKGZpbGVzLCB0aGlzLmFjY2VwdCwgdGhpcy5tYXhGaWxlU2l6ZSxcbiAgICAgICAgdGhpcy5wcmVzZXJ2ZUZpbGVzLCB0aGlzLnNob3dQcmV2aWV3cylcbiAgICAgICAgLnRoZW4oKHJlc3VsdDogRmlsZVNlbGVjdFJlc3VsdCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQuYWRkZWRGaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSB8fCAhdGhpcy5wcmVzZXJ2ZUZpbGVzKSB0aGlzLmZpbGVzID0gcmVzdWx0LmFkZGVkRmlsZXM7XG4gICAgICAgICAgICBlbHNlIHRoaXMuZmlsZXMgPSB0aGlzLmZpbGVzLmNvbmNhdChyZXN1bHQuYWRkZWRGaWxlcyk7XG4gICAgICAgICAgICB0aGlzLmZpbGVzQ2hhbmdlZC5lbWl0KHRoaXMuZmlsZXMpO1xuICAgICAgICAgICAgdGhpcy5maWxlc0FkZGVkLmVtaXQocmVzdWx0LmFkZGVkRmlsZXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyZXN1bHQucmVqZWN0ZWRGaWxlcy5sZW5ndGgpXG4gICAgICAgICAgICB0aGlzLmZpbGVzUmVqZWN0ZWQuZW1pdChyZXN1bHQucmVqZWN0ZWRGaWxlcyk7XG5cbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVGaWxlTGlzdFNlbGVjdGlvbihmaWxlczogRmlsZUxpc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5oYW5kbGVGaWxlc1NlbGVjdGlvbihBcnJheS5mcm9tKGZpbGVzKSk7XG4gIH1cblxuICBwcml2YXRlIHByZXZlbnREZWZhdWx0KGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=