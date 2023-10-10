import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ProjectComponent } from './project/project.component';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.scss'],
})
export class PortofolioComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ProjectComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
