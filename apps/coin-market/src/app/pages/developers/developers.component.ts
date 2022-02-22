import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'coin-market-developers',
    templateUrl: './developers.component.html',
    styleUrls: ['./developers.component.scss'],
})
export class DevelopersComponent {
    developers: any[] = [
        {
            fullName: 'Buğra Güney',
            img: 'assets/img/developers/bugra-guney.png',
            role: 'Frontend Instructor & Lead',
            github: 'https://github.com/bugragny',
            linkedin: 'https://www.linkedin.com/in/bgrgny/',
        },
        {
            fullName: 'Mustafa Yılmaz',
            img: 'assets/img/developers/musti.jpg',
            role: 'Frontend Developer',
            github: 'https://github.com/myilmazz99',
            linkedin:
                'https://www.linkedin.com/in/mustafa-y%C4%B1lmaz-392157220/',
        },
        {
            fullName: 'Berkay Ülgüel',
            img: 'assets/img/developers/berkay-ulguel.jpeg',
            role: 'Frontend Developer',
            github: 'https://github.com/BerkayyyU',
            linkedin:
                'https://www.linkedin.com/in/berkay-%C3%BClg%C3%BCel-31b3381a4/',
        },
        {
            fullName: 'Mehtap Uğur',
            img:
                'https://cdn2.iconfinder.com/data/icons/office-and-business-special-set-1/260/19-512.png',
            role: 'Frontend Developer',
            github: 'https://github.com/mehtapugur',
            linkedin: 'https://www.linkedin.com/in/mehtapugur/',
        },
    ];
}
