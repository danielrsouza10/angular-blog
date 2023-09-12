import { Component } from '@angular/core';

@Component({
  selector: 'app-news-title',
  templateUrl: './news-title.component.html',
  styleUrls: ['./news-title.component.css'],
})
export class NewsTitleComponent {
  newsTitle: string = 'NEWS TITLE';
}
