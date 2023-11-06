import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  emails: any[] = [];
  status: any[] = [];
  icons: any[] = [];

  constructor() {

    this.status = ["unread", "read", "sent", "favourites", "archived", "deleted", "spam"];
    this.icons = ["mail", "mail-open", "paper-plane", "heart", "archive", "trash", "warning"];

    this.emails = [
      {
        id : 1,
        subject : "Hello",
        from : "hello@hello.com",
        fromName : "Hello Admin",
        message : "Message from Admin account",
        status : 0,
        icon : 0
      },

      {
        id : 2,
        subject : "Attendance",
        from : "mcast@mcast.com",
        fromName : "MCAST",
        message : "Missed lecture on Wed 1st Nov",
        status : 1,
        icon : 1
      },

      {
        id : 3,
        subject : "Subscription",
        from : "subscriptions@adobe.com",
        fromName : "Adobe",
        message : "Renewed Adobe Subscription",
        status : 3,
        icon : 3
      },

      {
        id : 4,
        subject : "Requested",
        from : "willferr@mailingservice.com",
        fromName : "Will",
        message : "The project as requested",
        status : 2,
        icon : 2
      }
    ];
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  setStatus(email:number, status:number){
    this.emails.find(x => x.id == email).status = status;
    this.emails.find(x => x.id == email).icon = status;
  }
}
