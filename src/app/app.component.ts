import { AfterViewInit, Component } from '@angular/core';
import { LightGallery } from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  private lightGallery!: LightGallery;

  currentDate: any;
  targetDate: any;
  cDateMillisecs: any;
  tDateMillisecs: any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  year: number = 2023;
  month: number = 10;
  months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  day: number = 11;

  settings = {
    counter: false,
    addClass: 'custom-slider',
    download: false,
    hideScrollbar: true,
    plugins: [lgZoom, lgThumbnail],
    mobileSettings: {
      controls: false,
      showCloseIcon: true
    }
  };

  items = [
    {
      id: '1',
      size: '1440-1440',
      src:
        'assets/gallery/1.jpg',
      thumb:
        'assets/gallery/1.jpg',
    },
    {
      id: '2',
      size: '1440-1440',
      src:
        'assets/gallery/2.jpg',
      thumb:
        'assets/gallery/2.jpg',
    },
    {
      id: '3',
      size: '1440-1440',
      src:
        'assets/gallery/3.jpg',
      thumb:
        'assets/gallery/3.jpg',
    },
    {
      id: '4',
      size: '1440-1440',
      src:
        'assets/gallery/4.jpg',
      thumb:
        'assets/gallery/4.jpg',
    },
    {
      id: '5',
      size: '1440-1440',
      src:
        'assets/gallery/5.jpg',
      thumb:
        'assets/gallery/5.jpg',
    },
    {
      id: '6',
      size: '1440-1440',
      src:
        'assets/gallery/6.jpg',
      thumb:
        'assets/gallery/6.jpg',
    },
    {
      id: '7',
      size: '1440-1440',
      src:
        'assets/gallery/7.jpg',
      thumb:
        'assets/gallery/7.jpg',
    },
    {
      id: '8',
      size: '1440-1440',
      src:
        'assets/gallery/8.jpg',
      thumb:
        'assets/gallery/8.jpg',
    },
    {
      id: '9',
      size: '1440-1440',
      src:
        'assets/gallery/9.jpg',
      thumb:
        'assets/gallery/9.jpg',
    },
    {
      id: '10',
      size: '1440-1440',
      src:
        'assets/gallery/10.jpg',
      thumb:
        'assets/gallery/10.jpg',
    },
    {
      id: '11',
      size: '1440-1440',
      src:
        'assets/gallery/11.jpg',
      thumb:
        'assets/gallery/11.jpg',
    },
    {
      id: '12',
      size: '1365-2048',
      src:
        'assets/gallery/12.jpg',
      thumb:
        'assets/gallery/12.jpg',
    },
    {
      id: '13',
      size: '2048-1365',
      src:
        'assets/gallery/13.jpg',
      thumb:
        'assets/gallery/13.jpg',
    },
    {
      id: '14',
      size: '1365-2048',
      src:
        'assets/gallery/14.jpg',
      thumb:
        'assets/gallery/14.jpg',
    },
    {
      id: '15',
      size: '1365-2048',
      src:
        'assets/gallery/15.jpg',
      thumb:
        'assets/gallery/15.jpg',
    },
    {
      id: '16',
      size: '1365-2048',
      src:
        'assets/gallery/16.jpg',
      thumb:
        'assets/gallery/16.jpg',
    },
    {
      id: '17',
      size: '1365-2048',
      src:
        'assets/gallery/17.jpg',
      thumb:
        'assets/gallery/17.jpg',
    },
    {
      id: '18',
      size: '1365-2048',
      src:
        'assets/gallery/18.jpg',
      thumb:
        'assets/gallery/18.jpg',
    },
    {
      id: '19',
      size: '1365-2048',
      src:
        'assets/gallery/19.jpg',
      thumb:
        'assets/gallery/19.jpg',
    },
    {
      id: '20',
      size: '2048-1365',
      src:
        'assets/gallery/20.jpg',
      thumb:
        'assets/gallery/20.jpg',
    },
    {
      id: '21',
      size: '2048-1365',
      src:
        'assets/gallery/21.jpg',
      thumb:
        'assets/gallery/21.jpg',
    },
    {
      id: '22',
      size: '1365-2048',
      src:
        'assets/gallery/22.jpg',
      thumb:
        'assets/gallery/22.jpg',
    },
    {
      id: '23',
      size: '1365-2048',
      src:
        'assets/gallery/23.jpg',
      thumb:
        'assets/gallery/23.jpg',
    },
    {
      id: '24',
      size: '2048-1365',
      src:
        'assets/gallery/24.jpg',
      thumb:
        'assets/gallery/24.jpg',
    },
    {
      id: '25',
      size: '1365-2048',
      src:
        'assets/gallery/25.jpg',
      thumb:
        'assets/gallery/25.jpg',
    },
    {
      id: '26',
      size: '1365-2048',
      src:
        'assets/gallery/26.jpg',
      thumb:
        'assets/gallery/26.jpg',
    },
    {
      id: '27',
      size: '2048-1365',
      src:
        'assets/gallery/27.jpg',
      thumb:
        'assets/gallery/27.jpg',
    },
  ]

  ngAfterViewInit() {
    this.myTimer();
  }

  onInit = (detail: { instance: LightGallery; }): void => {
    this.lightGallery = detail.instance;
  };


  myTimer() {
    this.currentDate = new Date();
    this.targetDate = new Date(2023, 10, 11);
    this.cDateMillisecs = this.currentDate.getTime();
    this.tDateMillisecs = this.targetDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);

    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;

    document.getElementById('days')!.innerText = this.days;
    document.getElementById('hours')!.innerText = this.hours;
    document.getElementById('mins')!.innerText = this.minutes;
    document.getElementById('seconds')!.innerText = this.seconds;

    setInterval(this.myTimer, 1000);
  }


}
