export interface QueryRequest {
  query: string;
}

export interface Document {
  title: string;
  url: string;
  page: number;
}

export interface ParsedResponse {
  text: string;
  images: string[];
  experts: string[];
  documents: Document[];
}

export interface QueryResponse {
  response: string; // This is a JSON string that needs to be parsed
}

export interface ProcessedQueryResponse {
  parsedData: ParsedResponse;
}
