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
        let httpClientMock: any; // create httpClient mock variable of any type

        // mock back-end response
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
                }
            ]
        }

        beforeEach(() => {
          // this method calls before executing each test
          // setup mock for httpClient service with 'Get' function using jest.
            httpClientMock = {
                get: jest.fn()
            };

            // create the service to test by injecting the mock http service 
            groupsDemoService = new GroupsTestDemoService(httpClientMock);
        });

        it('should return expected groups', async() => {
          // mock observable to return resolved promise with mock group response
          // the real function uses pipe to stream observables so that function is mocked
            const mockObservable = {
                pipe: () => Promise.resolve(mockGroupsResponse)
            }
            httpClientMock.get.mockImplementation(() => mockObservable) // using Jest mockImplementation to return http response that we mocked

            await expect(groupsDemoService.getGroups()).resolves.toBe(mockGroupsResponse); // call the real method and assert that the method succeeds and return expected result 
        })

        
    })
`

snippet3 = `
  import { HttpClient } from "@angular/common/http";
  import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
  import { TestBed } from "@angular/core/testing";
  import { GroupsTestDemoService } from "./groups-test-demo.service"
`

snippet4 = `
  describe('HttpClient testing using Angular testing libraries', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let groupsDemoService: GroupsTestDemoService; 

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
      });

      // Inject the http service, groups service and test controller for each test
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
      groupsDemoService = TestBed.inject(GroupsTestDemoService);
    });
    /// Tests begin ///
  });
`

snippet5 = `
  it('can test HttpClient.get', async() => {      
    // Make an HTTP GET request
    const response =  groupsDemoService.getGroups();
    response.subscribe(data => 
        expect(data).resolves.toBe(mockGroupsResponse));
    //expect(response).resolves.toBe(mockGroupsResponse);

    // The following expectOne() will match the request's URL.
    // If no requests or multiple requests matched that URL
    // expectOne() would throw.
    const req = httpTestingController.expectOne('https://localhost:5001/api/group')
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(mockGroupsResponse);
        
    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });
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
