import { postUserApiResponse } from '../api-mock-data';
import BaseRestApi from './base-rest-api';
import axios from 'axios';

class Api extends BaseRestApi {
  async postUser(): Promise<PostUserApiResponse> {
    // TODO: API 연동하기
    // return this.POST('/users');
    return postUserApiResponse;
  }

  public async uploadImageToSignedUrl({
    signedUrl,
    file,
    type,
  }: UploadImageToSignedUrlApiRequest) {
    return axios
      .put(signedUrl, file, { headers: { 'Content-Type': type } })
      .then((response) => response.data);
  }
}

export default new Api();
