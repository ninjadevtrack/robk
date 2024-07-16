import { Injectable } from '@angular/core';
import { FakeStorage } from '../fake-storage';

@Injectable()
export class AuthStorageService {
    private fakeStorageMode: boolean = false;

    constructor(private _fakeStorage: FakeStorage) {
        this.fakeStorageMode = !this.isStorageSuported();
    }

    public getItem(key: string): string {
        if (this.fakeStorageMode) {
            return this._fakeStorage.getItem(key);
        } else {
            return localStorage.getItem(key);
        }
    }

    public setItem(key: string, value: string) {
        if (this.fakeStorageMode) {
            return this._fakeStorage.setItem(key, value);
        } else {
            return localStorage.setItem(key, value);
        }
    }

    public removeItem(key: string) {
        if (this.fakeStorageMode) {
            return this._fakeStorage.removeItem(key);
        } else {
            return localStorage.removeItem(key);
        }
    }

    public clear() {
        if (this.fakeStorageMode) {
            return this._fakeStorage.clear();
        } else {
            return localStorage.clear();
        }
    }

    private isStorageSuported(): boolean {
        let testKey = 'test';
        try {
            localStorage.setItem(testKey, '1');
            localStorage.removeItem(testKey);
            return true;
        } catch (error) {
            return false;
        }
    }
}
