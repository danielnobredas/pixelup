import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
  }

  teamData = [
    {
      avatar: 'cayo.jpeg',
      name: 'Cayo César',
      twitter: 'cayocesar98',
      instagram: 'cayocosta_',
      facebook: '',
      youtube: ''
    }, {
      avatar: 'clara.jpeg',
      name: 'Clara Duque',
      twitter: '',
      instagram: 'duqueclara',
      facebook: '',
      youtube: 'UCQ7UiaS9zMzbfKMw0Sj3uKw'
    }, {
      avatar: 'daniel.jpeg',
      name: 'Daniel Nobre',
      twitter: '',
      instagram: 'daniel.nobre',
      facebook: '',
      youtube: ''
    }, {
      avatar: 'davi.jpeg',
      name: 'Davi Souto',
      twitter: '',
      instagram: 'davi_souto_',
      facebook: '',
      youtube: ''
    }, {
      avatar: 'jorge.jpeg',
      name: 'Flávio Jorge',
      twitter: 'jorge_deSantana',
      instagram: 'jorge_dsantana',
      facebook: '',
      youtube: ''
    }, {
      avatar: 'lucca.jpeg',
      name: 'Lucca Henrique',
      twitter: '',
      instagram: 'luccahen16',
      facebook: '',
      youtube: ''
    }, {
      avatar: 'paulo.jpeg',
      name: 'Paulo Guerra',
      quote: 'Eu juro solenemente não fazer nada de bom =)',
      twitter: 'pv_guerra',
      instagram: 'pv_guerra',
      facebook: '',
      youtube: ''
    },
  ];

  ngOnInit() {
  }

}
