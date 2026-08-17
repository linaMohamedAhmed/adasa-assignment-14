import { Component, inject, OnInit } from '@angular/core';
import { Global } from '../../services/global';
import { PhotographersData } from '../../photographers-data';
import { NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgClass],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  category: any;
  ngOnInit(): void {
    // --------------------- click in category links in home component --------------
    this.category = this.route.snapshot.queryParamMap.get('category');

    if (this.category) {
      this.show(this.category);
    } else {
      this.show('all');
    }
  }
  public globalservice = inject(Global);
  private route = inject(ActivatedRoute);

  photographerList = this.globalservice.photographerList;
  filteredPhotographerList: PhotographersData[] = [];
  selectedType: string = 'all';
  show(type: string) {
    this.selectedType = type;
    if (type === 'all') {
      // this.filteredPhotographerList = [];
      this.filteredPhotographerList = this.globalservice.featuredPhotographersCardsBlog;
    } else {
      this.filteredPhotographerList = this.photographerList.filter(
        (item) => item.category === type,
      );
    }
  }
  shape: string = 'row';
  changeDisplayCards(value: string) {
    this.shape = value;
  }
}
