import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  interval;
  countdown;
  private countDownDate = new Date('April 3, 2020 11:00:00').getTime();
  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = this.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id='demo'
      this.countdown = days + ' Days ' + hours + ' Hours ' + minutes + ' Minutes ' + seconds + ' Seconds ';

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

}
