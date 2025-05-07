import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    errors: string[] = [];  // ✅ 空の配列で初期化
    focus: boolean = false;
    focus1: boolean = false;

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    register(registerForm: NgForm) {
        if (!registerForm.valid) {
            this.errors = ['Please fill out all fields correctly.'];
            return;
        }

        const formData = registerForm.value;

        if (formData.password !== formData.confirmPassword) {
            this.errors = ['Passwords do not match.'];
            return;
        }

        this.http.post('/api/v1/users/register', formData).subscribe({
            next: (response) => {
                console.log('Registration successful', response);
                this.errors = []; // ✅ 成功時はエラーメッセージをクリア
                this.router.navigate(['/login'])
            },
            error: (err) => {
                console.error('Registration error:', err);
                if (err.error && err.error.error) {
                    this.errors = [err.error.error];  // ✅ サーバーのエラーメッセージを取得
                } else {
                    this.errors = ['An unexpected error occurred.'];
                }
            }
        });
    }
}