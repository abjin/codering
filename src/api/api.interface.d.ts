interface PostUserApiResponse {
  user: { id: string; nickname: string };
  token: string;
}

interface UploadImageToSignedUrlApiRequest {
  signedUrl: string;
  file: File;
  type: string;
}
