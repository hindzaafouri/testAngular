import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  createVideo(video: any) {
    return this.http.post('http://localhost:3000/videos', video);
  }

  updateVideo(videoId: number, video: any) {
    return this.http.put(`http://localhost:3000/videos/${videoId}`, video);
  }

  getVideos() {
    return this.http.get('http://localhost:3000/videos');
  }
  
}
