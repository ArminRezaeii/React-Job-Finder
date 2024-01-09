
interface JobData {
  employer_logo: any;
  employer_name: string|null;
  job_id:string
  job_title:string
  job_apply_link:string
  job_posted_at_datetime_utc:string
  job_country:string
  job_description:string
}
export interface DataType {
    isLoading: boolean;
    error: string | null;
    data: JobData[] | null;
    params:DataParams
}
export interface DataParams{
  jobDate:string
jobExperience:string
jobName:string
jobRemote:string
jobTime:string
}
