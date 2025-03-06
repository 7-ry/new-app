import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    test: Date = new Date();
    focus: boolean = false;
    focus1: boolean = false;
    constructor() { }

    ngOnInit() { }
}
