export interface Result {

  courseName : string;
  firstName: string;
  familyName: string;
  score: string;
}

export interface ResultPostRequest {
  readonly studentId: string;
  readonly courseId: string;
  readonly score: string;
}
