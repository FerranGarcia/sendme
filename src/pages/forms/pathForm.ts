import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PathService } from './pathService';

@Component({
  selector: 'page-pathForm',
  templateUrl: 'pathForm.html',
  providers: [PathService]
})
export class PathForm {
  public route = {}
  public time = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  public currentMedia;
  public availableMedia = ['bike', 'motorbike', 'car', 'van', 'truck'];

  constructor(public navCtrl: NavController, public navParams: NavParams, private pathService: PathService) {

  }

  submitForm(event, key) {
      if(event.target.value.length > 2) {
          this.pathService.submitFormPath(event.target.value).subscribe(
              data => {
                  console.log(data);
              },
              err => {
                  console.log(err);
              },
              () => console.log('Form Submitted')
          );
      }
  }

  logForm() {
    console.log(this.route)
  }

  public setMedia = (media) => {
    if (this.currentMedia === media) return;
      this.currentMedia = media;
      for (let i in this.availableMedia) {
        document.getElementById(this.availableMedia[i]).className = "unselected";
      }

      document.getElementById(media).className = document.getElementById(media).className.replace( /(?:^|\s)unselected(?!\S)/g , '' );
      console.log(media);
  }
}
