import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    errors: string[] = [];
    focus: boolean = false;
    focus1: boolean = false;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit() { }

    login(loginForm: NgForm) {
        this.authService.login(loginForm.value).subscribe(
            (response) => {
                console.log("Login successful", response);
                this.router.navigate(['/products']); // ログイン後の遷移
            },
            (error) => {
                console.error("Login error:", error);
                if (error.error && error.error.error) {
                    this.errors = [error.error.error]; // サーバーからのエラーメッセージをセット
                } else {
                    this.errors = ["An unexpected error occurred."]; // 予期しないエラー
                }
            }

        );
    }
}
