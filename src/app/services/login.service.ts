import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/assets/user';
import { map } from 'rxjs/operators';

const USERS = [
  new User(1, 'admin', 'admin123'),
  new User(2, 'admin2', 'admin456')
];
const usersObservable = of(USERS);

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isloggedIn = false;
    getAllUsers(): Observable<User[]> {
        return usersObservable;
    }
    isUserAuthenticated(username: string, password: string): Observable<boolean> {
        return this.getAllUsers().pipe(
            map(users => {
                const Authenticateduser = users.find(user => (user.username === username) && (user.password === password));
                if (Authenticateduser) {
                    this.isloggedIn = true;
                } else {
                    this.isloggedIn = false;
                }
                sessionStorage.setItem("isLoggedIn",JSON.stringify(this.isloggedIn))
                return this.isloggedIn;
            })
        );
    }
    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }
}
