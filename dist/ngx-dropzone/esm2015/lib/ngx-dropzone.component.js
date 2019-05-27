/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ElementRef, ViewChild, EventEmitter, TemplateRef, HostListener, HostBinding, ContentChild } from '@angular/core';
import { NgxDropzoneService } from './ngx-dropzone.service';
import { reject } from 'q';
export class NgxDropzoneComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
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
    showFileSelector() {
        if (!this.disabled)
            this.fileInput.nativeElement.click();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.handleFilesSelection(this.filesInput);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFilesSelected(event) {
        /** @type {?} */
        const files = event.target.files;
        this.handleFileListSelection(files).then((/**
         * @return {?}
         */
        () => {
            // Reset the file input value to trigger the event on new selection.
            ((/** @type {?} */ (this.fileInput.nativeElement))).value = '';
        }));
    }
    /**
     * UPDATE 10.03.2019:
     * Refactored to use HostListener and HostBindings to allow
     * for easier style overwriting from outside the component.
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        if (this.disabled)
            return;
        this.preventDefault(event);
        this.hovering = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        if (!event.currentTarget.contains(event.relatedTarget))
            this.hovering = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        this.preventDefault(event);
        this.hovering = false;
        this.handleFileListSelection(event.dataTransfer.files);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    removeFile(file) {
        /** @type {?} */
        var precount = this.files.length;
        this.files = this.files.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x != file));
        if (precount == this.files.length)
            return;
        this.filesChanged.emit(this.files);
        this.filesRemoved.emit([file]);
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    handleFilesSelection(files) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (this.disabled)
                return reject("Dropzone is disabled");
            if (!this.multiple && files.length > 1)
                return reject("Cannot accept multiple files");
            this.service.parseFiles(files, this.accept, this.maxFileSize, this.preserveFiles, this.showPreviews)
                .then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                if (result.addedFiles.length) {
                    if (!this.multiple || !this.preserveFiles)
                        this.files = result.addedFiles;
                    else
                        this.files = this.files.concat(result.addedFiles);
                    this.filesChanged.emit(this.files);
                    this.filesAdded.emit(result.addedFiles);
                }
                if (result.rejectedFiles.length)
                    this.filesRejected.emit(result.rejectedFiles);
                resolve();
            }));
        }));
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    handleFileListSelection(files) {
        return this.handleFilesSelection(Array.from(files));
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    preventDefault(event) {
        event.preventDefault();
        event.stopPropagation();
    }
}
NgxDropzoneComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-dropzone',
                template: `<input type="file"
       #fileInput class="file-input"
       (change)="onFilesSelected($event)"
       [multiple]="multiple"
       [accept]="accept" />

<div class="dropzone"
     #dropzone>
  <div class="droparea" (click)="showFileSelector()">
    <ng-container *ngTemplateOutlet="dropareaTemplate ? dropareaTemplate : dropareaFallbackTemplate">
    </ng-container>
  </div>
  <div *ngIf="showPreviews" class="previews">
    <ng-container *ngFor="let file of files">
      <ng-container *ngTemplateOutlet="
                    previewTemplate ? previewTemplate : previewFallbackTemplate;
                    context: {
                      $implicit: {
                        file: file,
                        remove: removeFile.bind(this)
                      }
                    }">
      </ng-container>
    </ng-container>
  </div>
</div>

<ng-template #dropareaFallbackTemplate>
  Click or drop your files here
</ng-template>

<ng-template #previewFallbackTemplate let-context>
  <div class="preview-fallback" [class.no-image]="!context.file.preview">
    <div class="overlay">
      <div class="content">
        <div class="filename">{{context.file.name}}</div>
        <button (click)="context.remove(context.file)">Remove</button>
      </div>
    </div>
    <img *ngIf="context.file.preview" [src]="context.file.preview" />
  </div>
</ng-template>
`,
                styles: [`:host(){display:flex;flex-direction:column;height:180px;background:#fff;color:#717386;border:2px dashed #717386;border-radius:5px;font-size:16px}:host().hovered{border:2px solid #717386;color:#dfdfe4}:host().disabled{opacity:.5;cursor:no-drop}:host():not(.disabled)>.dropzone>.droparea{cursor:pointer}:host()>.dropzone{position:relative;width:100%;min-height:100%;overflow:hidden;display:flex;flex-direction:column}:host()>.dropzone>.droparea{display:flex;align-items:center;justify-content:center;width:100%;flex:1;z-index:4}:host()>.dropzone>.previews{height:50%;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:space-around;overflow-y:auto;overflow-x:hidden}:host()>.dropzone>.previews>.no-image>.filename{padding:10px}:host()>.dropzone>.previews>.preview-fallback{position:relative;text-align:center;max-height:calc(100% - 10px);height:200px;max-width:200px;width:25%;min-width:100px;margin:10px;z-index:0}:host()>.dropzone>.previews>.preview-fallback>img{max-height:100%;max-width:100%;border-radius:5px;opacity:.8;z-index:1}:host()>.dropzone>.previews>.preview-fallback>.overlay{position:absolute;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.8);width:100%;height:100%;z-index:2}:host()>.dropzone>.previews>.preview-fallback>.overlay>.content{padding:2.5%;max-width:95%;max-height:95%}:host()>.dropzone>.previews>.preview-fallback>.overlay>.content>.filename{text-overflow:ellipsis;overflow:hidden}:host()>.dropzone>.previews.limit-width{max-width:25%}.file-input{display:none}`],
                providers: [NgxDropzoneService] // Create a new service instance for each component.
            },] },
];
/** @nocollapse */
NgxDropzoneComponent.ctorParameters = () => [
    { type: NgxDropzoneService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRyb3B6b25lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kcm9wem9uZS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZHJvcHpvbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFDcEMsWUFBWSxFQUFFLFdBQVcsRUFDekIsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUE4QyxNQUFNLHdCQUF3QixDQUFDO0FBQ3hHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7QUFrRDNCLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFDL0IsWUFDUyxPQUEyQjtRQUEzQixZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQU0zQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFFYixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUU5QixVQUFLLEdBQWlCLEVBQUUsQ0FBQztRQUNULGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFOUIsZUFBVSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzlELGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDaEUsa0JBQWEsR0FBaUMsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFDcEUsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUUvQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFwQjNDLENBQUM7Ozs7SUF3QkwsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtB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QkFFcEIsV0FBVyxTQUFDLGdCQUFnQixjQUFHLEtBQUs7dUJBQ3BDLFdBQVcsU0FBQyxlQUFlO3dCQUUzQixTQUFTLFNBQUMsV0FBVzt5QkF5QnJCLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBUW5DLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBTXBDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUEzRGhDLGdEQUFvRTs7SUFDcEUsK0NBQWtFOztJQUVsRSx3Q0FBeUI7O0lBQ3pCLHNDQUFzQjs7SUFDdEIsMkNBQTZCOztJQUM3Qiw0Q0FBOEI7O0lBQzlCLDZDQUE4Qjs7SUFFOUIscUNBQXlCOztJQUN6QiwwQ0FBd0M7O0lBRXhDLDBDQUF3RTs7SUFDeEUsNENBQTBFOztJQUMxRSw2Q0FBMkY7O0lBQzNGLDRDQUF1Rjs7SUFFdkYsd0NBQXlEOztJQUN6RCx3Q0FBK0M7Ozs7O0lBRS9DLHlDQUFzRDs7SUF2QnBELHVDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLFxuICBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBDb250ZW50Q2hpbGQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neERyb3B6b25lU2VydmljZSwgRmlsZVNlbGVjdFJlc3VsdCwgUGFyc2VkRmlsZSwgUmVqZWN0ZWRGaWxlIH0gZnJvbSAnLi9uZ3gtZHJvcHpvbmUuc2VydmljZSc7XG5pbXBvcnQgeyByZWplY3QgfSBmcm9tICdxJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRyb3B6b25lJyxcbiAgdGVtcGxhdGU6IGA8aW5wdXQgdHlwZT1cImZpbGVcIlxuICAgICAgICNmaWxlSW5wdXQgY2xhc3M9XCJmaWxlLWlucHV0XCJcbiAgICAgICAoY2hhbmdlKT1cIm9uRmlsZXNTZWxlY3RlZCgkZXZlbnQpXCJcbiAgICAgICBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIlxuICAgICAgIFthY2NlcHRdPVwiYWNjZXB0XCIgLz5cblxuPGRpdiBjbGFzcz1cImRyb3B6b25lXCJcbiAgICAgI2Ryb3B6b25lPlxuICA8ZGl2IGNsYXNzPVwiZHJvcGFyZWFcIiAoY2xpY2spPVwic2hvd0ZpbGVTZWxlY3RvcigpXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImRyb3BhcmVhVGVtcGxhdGUgPyBkcm9wYXJlYVRlbXBsYXRlIDogZHJvcGFyZWFGYWxsYmFja1RlbXBsYXRlXCI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuICA8ZGl2ICpuZ0lmPVwic2hvd1ByZXZpZXdzXCIgY2xhc3M9XCJwcmV2aWV3c1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpbGUgb2YgZmlsZXNcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld1RlbXBsYXRlID8gcHJldmlld1RlbXBsYXRlIDogcHJldmlld0ZhbGxiYWNrVGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAkaW1wbGljaXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IHJlbW92ZUZpbGUuYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVwiPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjZHJvcGFyZWFGYWxsYmFja1RlbXBsYXRlPlxuICBDbGljayBvciBkcm9wIHlvdXIgZmlsZXMgaGVyZVxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNwcmV2aWV3RmFsbGJhY2tUZW1wbGF0ZSBsZXQtY29udGV4dD5cbiAgPGRpdiBjbGFzcz1cInByZXZpZXctZmFsbGJhY2tcIiBbY2xhc3Mubm8taW1hZ2VdPVwiIWNvbnRleHQuZmlsZS5wcmV2aWV3XCI+XG4gICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlbmFtZVwiPnt7Y29udGV4dC5maWxlLm5hbWV9fTwvZGl2PlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjb250ZXh0LnJlbW92ZShjb250ZXh0LmZpbGUpXCI+UmVtb3ZlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aW1nICpuZ0lmPVwiY29udGV4dC5maWxlLnByZXZpZXdcIiBbc3JjXT1cImNvbnRleHQuZmlsZS5wcmV2aWV3XCIgLz5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0KCl7ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtoZWlnaHQ6MTgwcHg7YmFja2dyb3VuZDojZmZmO2NvbG9yOiM3MTczODY7Ym9yZGVyOjJweCBkYXNoZWQgIzcxNzM4Njtib3JkZXItcmFkaXVzOjVweDtmb250LXNpemU6MTZweH06aG9zdCgpLmhvdmVyZWR7Ym9yZGVyOjJweCBzb2xpZCAjNzE3Mzg2O2NvbG9yOiNkZmRmZTR9Omhvc3QoKS5kaXNhYmxlZHtvcGFjaXR5Oi41O2N1cnNvcjpuby1kcm9wfTpob3N0KCk6bm90KC5kaXNhYmxlZCk+LmRyb3B6b25lPi5kcm9wYXJlYXtjdXJzb3I6cG9pbnRlcn06aG9zdCgpPi5kcm9wem9uZXtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn06aG9zdCgpPi5kcm9wem9uZT4uZHJvcGFyZWF7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7ZmxleDoxO3otaW5kZXg6NH06aG9zdCgpPi5kcm9wem9uZT4ucHJldmlld3N7aGVpZ2h0OjUwJTt3aWR0aDoxMDAlO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpyb3c7ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7b3ZlcmZsb3cteTphdXRvO292ZXJmbG93LXg6aGlkZGVufTpob3N0KCk+LmRyb3B6b25lPi5wcmV2aWV3cz4ubm8taW1hZ2U+LmZpbGVuYW1le3BhZGRpbmc6MTBweH06aG9zdCgpPi5kcm9wem9uZT4ucHJldmlld3M+LnByZXZpZXctZmFsbGJhY2t7cG9zaXRpb246cmVsYXRpdmU7dGV4dC1hbGlnbjpjZW50ZXI7bWF4LWhlaWdodDpjYWxjKDEwMCUgLSAxMHB4KTtoZWlnaHQ6MjAwcHg7bWF4LXdpZHRoOjIwMHB4O3dpZHRoOjI1JTttaW4td2lkdGg6MTAwcHg7bWFyZ2luOjEwcHg7ei1pbmRleDowfTpob3N0KCk+LmRyb3B6b25lPi5wcmV2aWV3cz4ucHJldmlldy1mYWxsYmFjaz5pbWd7bWF4LWhlaWdodDoxMDAlO21heC13aWR0aDoxMDAlO2JvcmRlci1yYWRpdXM6NXB4O29wYWNpdHk6Ljg7ei1pbmRleDoxfTpob3N0KCk+LmRyb3B6b25lPi5wcmV2aWV3cz4ucHJldmlldy1mYWxsYmFjaz4ub3ZlcmxheXtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44KTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3otaW5kZXg6Mn06aG9zdCgpPi5kcm9wem9uZT4ucHJldmlld3M+LnByZXZpZXctZmFsbGJhY2s+Lm92ZXJsYXk+LmNvbnRlbnR7cGFkZGluZzoyLjUlO21heC13aWR0aDo5NSU7bWF4LWhlaWdodDo5NSV9Omhvc3QoKT4uZHJvcHpvbmU+LnByZXZpZXdzPi5wcmV2aWV3LWZhbGxiYWNrPi5vdmVybGF5Pi5jb250ZW50Pi5maWxlbmFtZXt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO292ZXJmbG93OmhpZGRlbn06aG9zdCgpPi5kcm9wem9uZT4ucHJldmlld3MubGltaXQtd2lkdGh7bWF4LXdpZHRoOjI1JX0uZmlsZS1pbnB1dHtkaXNwbGF5Om5vbmV9YF0sXG4gIHByb3ZpZGVyczogW05neERyb3B6b25lU2VydmljZV0gLy8gQ3JlYXRlIGEgbmV3IHNlcnZpY2UgaW5zdGFuY2UgZm9yIGVhY2ggY29tcG9uZW50LlxufSlcbmV4cG9ydCBjbGFzcyBOZ3hEcm9wem9uZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZXJ2aWNlOiBOZ3hEcm9wem9uZVNlcnZpY2VcbiAgKSB7IH1cblxuICBAQ29udGVudENoaWxkKCdkcm9wYXJlYScpIGRyb3BhcmVhVGVtcGxhdGU6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+O1xuICBAQ29udGVudENoaWxkKCdwcmV2aWV3JykgcHJldmlld1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxFbGVtZW50UmVmPjtcblxuICBASW5wdXQoKSBtdWx0aXBsZSA9IHRydWU7XG4gIEBJbnB1dCgpIGFjY2VwdCA9ICcqJztcbiAgQElucHV0KCkgbWF4RmlsZVNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgc2hvd1ByZXZpZXdzID0gZmFsc2U7XG4gIEBJbnB1dCgpIHByZXNlcnZlRmlsZXMgPSB0cnVlO1xuXG4gIGZpbGVzOiBQYXJzZWRGaWxlW10gPSBbXTtcbiAgQElucHV0KCdmaWxlcycpIGZpbGVzSW5wdXQ6IEZpbGVbXSA9IFtdO1xuXG4gIEBPdXRwdXQoKSBmaWxlc0FkZGVkOiBFdmVudEVtaXR0ZXI8RmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVtdPigpO1xuICBAT3V0cHV0KCkgZmlsZXNSZW1vdmVkOiBFdmVudEVtaXR0ZXI8RmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVtdPigpO1xuICBAT3V0cHV0KCkgZmlsZXNSZWplY3RlZDogRXZlbnRFbWl0dGVyPFJlamVjdGVkRmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8UmVqZWN0ZWRGaWxlW10+KCk7XG4gIEBPdXRwdXQoJ2ZpbGVzQ2hhbmdlJykgZmlsZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8RmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZVtdPigpO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKSBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhvdmVyZWQnKSBob3ZlcmluZyA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcpIHByaXZhdGUgZmlsZUlucHV0OiBFbGVtZW50UmVmO1xuXG4gIHNob3dGaWxlU2VsZWN0b3IoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKVxuICAgICAgdGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVGaWxlc1NlbGVjdGlvbih0aGlzLmZpbGVzSW5wdXQpO1xuICB9XG5cbiAgb25GaWxlc1NlbGVjdGVkKGV2ZW50KSB7XG4gICAgY29uc3QgZmlsZXM6IEZpbGVMaXN0ID0gZXZlbnQudGFyZ2V0LmZpbGVzO1xuXG4gICAgdGhpcy5oYW5kbGVGaWxlTGlzdFNlbGVjdGlvbihmaWxlcykudGhlbigoKSA9PiB7XG4gICAgICAvLyBSZXNldCB0aGUgZmlsZSBpbnB1dCB2YWx1ZSB0byB0cmlnZ2VyIHRoZSBldmVudCBvbiBuZXcgc2VsZWN0aW9uLlxuICAgICAgKHRoaXMuZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPSAnJztcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVUERBVEUgMTAuMDMuMjAxOTpcbiAgICogUmVmYWN0b3JlZCB0byB1c2UgSG9zdExpc3RlbmVyIGFuZCBIb3N0QmluZGluZ3MgdG8gYWxsb3dcbiAgICogZm9yIGVhc2llciBzdHlsZSBvdmVyd3JpdGluZyBmcm9tIG91dHNpZGUgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcbiAgb25EcmFnT3ZlcihldmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICB0aGlzLnByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgICB0aGlzLmhvdmVyaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pXG4gIG9uRHJhZ0xlYXZlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudC5jdXJyZW50VGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQpKVxuICAgICAgdGhpcy5ob3ZlcmluZyA9IGZhbHNlO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gIG9uRHJvcChldmVudCkge1xuICAgIHRoaXMucHJldmVudERlZmF1bHQoZXZlbnQpO1xuICAgIHRoaXMuaG92ZXJpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmhhbmRsZUZpbGVMaXN0U2VsZWN0aW9uKGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gIH1cblxuICByZW1vdmVGaWxlKGZpbGU6IFBhcnNlZEZpbGUpIHtcbiAgICB2YXIgcHJlY291bnQgPSB0aGlzLmZpbGVzLmxlbmd0aDtcbiAgICB0aGlzLmZpbGVzID0gdGhpcy5maWxlcy5maWx0ZXIoeCA9PiB4ICE9IGZpbGUpO1xuICAgIGlmIChwcmVjb3VudCA9PSB0aGlzLmZpbGVzLmxlbmd0aCkgcmV0dXJuO1xuICAgIHRoaXMuZmlsZXNDaGFuZ2VkLmVtaXQodGhpcy5maWxlcyk7XG4gICAgdGhpcy5maWxlc1JlbW92ZWQuZW1pdChbZmlsZV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVGaWxlc1NlbGVjdGlvbihmaWxlczogRmlsZVtdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybiByZWplY3QoXCJEcm9wem9uZSBpcyBkaXNhYmxlZFwiKTtcblxuICAgICAgaWYgKCF0aGlzLm11bHRpcGxlICYmIGZpbGVzLmxlbmd0aCA+IDEpXG4gICAgICAgIHJldHVybiByZWplY3QoXCJDYW5ub3QgYWNjZXB0IG11bHRpcGxlIGZpbGVzXCIpO1xuXG4gICAgICB0aGlzLnNlcnZpY2UucGFyc2VGaWxlcyhmaWxlcywgdGhpcy5hY2NlcHQsIHRoaXMubWF4RmlsZVNpemUsXG4gICAgICAgIHRoaXMucHJlc2VydmVGaWxlcywgdGhpcy5zaG93UHJldmlld3MpXG4gICAgICAgIC50aGVuKChyZXN1bHQ6IEZpbGVTZWxlY3RSZXN1bHQpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0LmFkZGVkRmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubXVsdGlwbGUgfHwgIXRoaXMucHJlc2VydmVGaWxlcykgdGhpcy5maWxlcyA9IHJlc3VsdC5hZGRlZEZpbGVzO1xuICAgICAgICAgICAgZWxzZSB0aGlzLmZpbGVzID0gdGhpcy5maWxlcy5jb25jYXQocmVzdWx0LmFkZGVkRmlsZXMpO1xuICAgICAgICAgICAgdGhpcy5maWxlc0NoYW5nZWQuZW1pdCh0aGlzLmZpbGVzKTtcbiAgICAgICAgICAgIHRoaXMuZmlsZXNBZGRlZC5lbWl0KHJlc3VsdC5hZGRlZEZpbGVzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmVzdWx0LnJlamVjdGVkRmlsZXMubGVuZ3RoKVxuICAgICAgICAgICAgdGhpcy5maWxlc1JlamVjdGVkLmVtaXQocmVzdWx0LnJlamVjdGVkRmlsZXMpO1xuXG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRmlsZUxpc3RTZWxlY3Rpb24oZmlsZXM6IEZpbGVMaXN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRmlsZXNTZWxlY3Rpb24oQXJyYXkuZnJvbShmaWxlcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmV2ZW50RGVmYXVsdChldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIl19