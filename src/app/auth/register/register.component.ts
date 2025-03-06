import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    test: Date = new Date();
    focus: boolean = false;
    focus1: boolean = false;
    constructor() { }

    ngOnInit() { }
}
