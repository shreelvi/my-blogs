import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ang-test-jest',
  templateUrl: './ang-test-jest.component.html',
  styleUrls: ['./ang-test-jest.component.scss', '../ang-mat-dialog/ang-mat-dialog.component.scss']
})
export class AngTestJestComponent implements OnInit {

  pageId = "/blog4"

  snippet1 = `
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IGroupsResponse } from '../models/groups-test-demo';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GroupsTestDemoService {

    private url: string = '/api/users';

    baseUrl = environment.apiUrl;

    constructor(private httpClient: HttpClient) { }

    getGroups(): Observable<IGroupsResponse> {
        return this.httpClient.get<IGroupsResponse>(this.baseUrl + 'group')
            .pipe(
                tap(groups => console.log('groups fetched')),
                catchError(this.handleError)
                ) as Observable<IGroupsResponse>;
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            console.log(error);
        }

        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
      }
    
}
`

snippet2 = `
import { IGroupsResponse } from "../models/groups-test-demo";
import { GroupsTestDemoService } from "./groups-test-demo.service"

describe('GroupsDemoService (using mock)', () => {
    let groupsDemoService : GroupsTestDemoService;
    let httpClientMock: any;

    let mockGroupsResponse: IGroupsResponse = {
        groups: [
            {
                groupName: "test1",
                groupDescription: "test desc",
                apiRoles: "read, write, update"
            },
            {
                groupName: "test2",
                groupDescription: "test desc",
                apiRoles: "read, write"
            },
            {
                groupName: "test3",
                groupDescription: "test desc",
                apiRoles: "read"
            }
        ]
    }

    beforeEach(() => {
        httpClientMock = {
            get: jest.fn()
        };

        groupsDemoService = new GroupsTestDemoService(httpClientMock);
    });

    it('should return expected groups', async() => {
        const mockObservable = {
            pipe: () => Promise.resolve(mockGroupsResponse)
        }
        httpClientMock.get.mockImplementation(() => mockObservable)

        await expect(groupsDemoService.getGroups()).resolves.toBe(mockGroupsResponse);
    })

    
})
`
constructor(private title: Title) { 
  this.title.setTitle('Blogs | Testing Angular HTTP Service calls using JEST')
  this.loadScripts();
}

  ngOnInit(): void {
  }

  loadScripts() {
    const dynamicScripts = [
    'https://platform.twitter.com/widgets.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

}
