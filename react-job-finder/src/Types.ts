interface CompanyData {
  name: string;
  logo: string;
  url: string;
  location: string;
}
interface JobData {
  employer_logo: string|null;
  employer_name: string|null;
  job_id:string
  job_title:string
  company: CompanyData;
  job_apply_link:string
  job_posted_at_datetime_utc:string
  job_country:string
  job_description:string
}
export interface DataType {
    isLoading: boolean;
    error: string | null;
    data: JobData[] | null;
    
}
