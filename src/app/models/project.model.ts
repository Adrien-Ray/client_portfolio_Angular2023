export class Project {
    project_id!: string;
    project_title!: string;
    project_thumbnail!: string;
    project_thumbnail_allUrl?: string;
    project_thumbnail_fit!: string;
    project_context!: string;
    project_begin!: string;
    project_end!: string | null;
    project_colabs!: boolean | null;
    project_github!: string;
    project_link!: string;
    project_design_file_link!: string;
    project_visibility!: string;
    project_specification_tech!: string;
    project_specification_function!: string;
}