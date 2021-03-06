import { Component } from '@angular/core';
import { StateAuth } from '@atd/torcoin';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'atd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Select(StateAuth.authenticated) authenticated$: Observable<boolean>;

  private title = 'torqoin';
}
