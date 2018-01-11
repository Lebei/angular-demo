import {Component, OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http';
@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  // Inject HttpClient into your component or service.
  constructor(private http: Http) {}

  ngOnInit(): void {

    /*const body = {username: 'testuser', password: '123456'};

    this.http
      .post('/tms-web/sys/mobile/login', body, {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        params: new HttpParams().set('username', 'testuser').set('password', '123456'),
      })
      // See below - subscribe() is still necessary when using post().
      .subscribe();*/
  }

  login(username, password) {
    /*console.log('username:' + username + '\n\r' + 'password:' + password);*/
    this.http
      .post('/tms-web/sys/mobile/login?username=' + username + '&password=' + password, {
        headers: new Headers().set('Content-Type', 'application/x-www-form-urlencoded')
      })
      // See below - subscribe() is still necessary when using post().
      .subscribe();
  }
  onSubmit(value) {
  }
}
