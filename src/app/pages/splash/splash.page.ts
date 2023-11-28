import { Component, OnInit, ViewChild,ElementRef, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements AfterViewInit {

  @ViewChild('txt') txt!:ElementRef;
  constructor(
    private router: Router, private aniCntrl: AnimationController
  ) { }
  ngAfterViewInit(): void {
    const ani = this.aniCntrl.create()
      .addElement(this.txt.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateY(0px)', 'translateY(100px)')
      .fromTo('opacity', '1', '0.2');
    ani.play();
  }
  

  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate(['/home']);
    },5000);
  }

}
