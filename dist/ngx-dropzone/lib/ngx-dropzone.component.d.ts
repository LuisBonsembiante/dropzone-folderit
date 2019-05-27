import { ElementRef, EventEmitter, TemplateRef, OnInit } from '@angular/core';
import { NgxDropzoneService, ParsedFile, RejectedFile } from './ngx-dropzone.service';
export declare class NgxDropzoneComponent implements OnInit {
    service: NgxDropzoneService;
    constructor(service: NgxDropzoneService);
    dropareaTemplate: TemplateRef<ElementRef>;
    previewTemplate: TemplateRef<ElementRef>;
    multiple: boolean;
    accept: string;
    maxFileSize: number;
    showPreviews: boolean;
    preserveFiles: boolean;
    files: ParsedFile[];
    filesInput: File[];
    filesAdded: EventEmitter<File[]>;
    filesRemoved: EventEmitter<File[]>;
    filesRejected: EventEmitter<RejectedFile[]>;
    filesChanged: EventEmitter<File[]>;
    disabled: boolean;
    hovering: boolean;
    private fileInput;
    showFileSelector(): void;
    ngOnInit(): void;
    onFilesSelected(event: any): void;
    /**
     * UPDATE 10.03.2019:
     * Refactored to use HostListener and HostBindings to allow
     * for easier style overwriting from outside the component.
     */
    onDragOver(event: any): void;
    onDragLeave(event: any): void;
    onDrop(event: any): void;
    removeFile(file: ParsedFile): void;
    private handleFilesSelection;
    private handleFileListSelection;
    private preventDefault;
}
