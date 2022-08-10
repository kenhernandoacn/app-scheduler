import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface EventResponse {
  managerId: string,
  _id: string,
  date: string,
  time_window: number[],
  memberContactInfo_contactName: string,
  memberContactInfo_email: string,
  memberContactInfo_phone: string,
  location_full: string,
  details_mode: string,
  details_actionName: string,
  subject: string,
  details_latlong: number[]
 }

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private sampleResponse: EventResponse[] = [
    {
      managerId: "CN999162",
      _id: "3c5e4269-2c6e-450f-9186-ff3d6899c197",
      date: "2022-08-10",
      time_window: [
        8.25,
        9.75
      ],
      memberContactInfo_contactName: "Rowdy Uncle",
      memberContactInfo_email: "RowdyUncle@notanemaildomain.org",
      memberContactInfo_phone: "555-682-1759",
      location_full: "12720 Central Ave SE, Albuquerque, NM 87123, 35.070096, -106.516024",
      details_mode: "telephonic",
      details_actionName: "BiAnnual Assessment",
      subject: "BiAnnual Assessment for Rowdy Uncle",
      details_latlong: [
          35.070096,
          -106.516024
      ]
    }
  ];

  constructor(private http: HttpClient) { }

  public getMockData() {
    return this.http.get(`assets\\mock.json`);
  }


}
