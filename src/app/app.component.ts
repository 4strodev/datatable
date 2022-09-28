import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'datatables';

  datatableOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.datatableOptions = {
      stateSave: true,
      columns: [{ title: 'ID' }, { title: 'First name' }, { title: 'Last name' }]
    }
  }
}
