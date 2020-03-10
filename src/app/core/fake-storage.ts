import { Injectable } from '@angular/core';

@Injectable()
export class FakeStorage {
    private _keys: string[];
    private _values: string[];

    constructor() {
        this._keys = [];
        this._values = [];
    }

    public getItem(key: string) {
        if (this._keys.indexOf(key, 0) >= 0) {
            let index = this._keys.indexOf(key, 0);
            return this._values[index];
        } else {
            return null;
        }
    }

    public containsKey(key: string) {
        if (this._keys.indexOf(key, 0) >= 0) {
            return true;
        }
        return false;
    }

    public setItem(key: string, value: string) {
        let index = this._keys.indexOf(key, 0);
        if (index >= 0) {
            this._values[index] = value;
        } else {
            this._keys.push(key);
            this._values.push(value);
        }
    }

    public removeItem(key: string) {
        let index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
    }

    public clear() {
        this._keys = [];
        this._values = [];
    }
}
