import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import {YouTubePlayer} from '@angular/youtube-player';
import { MenuItem } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';
import { BreadcrumbComponent } from '../../Shared/breadcrumb/breadcrumb.component';
import { Chip } from 'primeng/chip';
@Component({
  selector: 'app-video',
  imports: [YouTubePlayer ,CommonModule,BreadcrumbComponent ,CarouselModule ,Chip],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent implements OnInit {
  items:MenuItem[]=[];
  @ViewChildren('player') players!: QueryList<YouTubePlayer>;
  videokey=[
    "JUX7WU6iWw4",
    "YJ_JuJ2xZqE",
     "00DvaPstcpo",
    "CJ_jJckRUxI",
    "Bl4VDlYSqWQ","jhVCiwbPsVY"
   ]
   videokey2 = [
    "5oH9Nr3bKfw",
    "vqFB2t1IWxI",  
    "l1JHzFV7ROo", 
    "D5P0gV0AD8U", 
    "4gLFlQUOHJw" ,
    "DwTct0By94I",
    "Md0DRu3cJcs"
]

numVisible: number = 3;
responsiveOptions = [
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 1
  }
];
  onPlayerStateChange(event: YT.OnStateChangeEvent, currentVideoId: string) {
    if (event.data === YT.PlayerState.PLAYING) {
      this.players.forEach(player => {
        if (player.videoId !== currentVideoId) {
          player.pauseVideo();
        }
      });
    }
  }
    ngOnInit(): void {
         this.items = [{ icon: 'pi pi-home', route: '/home/dashboard' }, { label: 'Video', route: '/home/Video' }];
  
    }
  

}
