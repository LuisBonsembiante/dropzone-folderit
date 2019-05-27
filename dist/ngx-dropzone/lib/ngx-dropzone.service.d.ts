export interface ParsedFile extends File {
    preview: string | ArrayBuffer;
}
export interface RejectedFile extends File {
    error: any;
}
export interface FileSelectResult {
    addedFiles: ParsedFile[];
    rejectedFiles: RejectedFile[];
}
export declare class NgxDropzoneService {
    parseFile(file: File, accept: string, maxFileSize: number, preserveFiles: boolean, showPreviews: boolean): Promise<ParsedFile>;
    parseFiles(files: File[], accept: string, maxFileSize: number, preserveFiles: boolean, showPreviews: boolean): Promise<FileSelectResult>;
    private readFile;
}
