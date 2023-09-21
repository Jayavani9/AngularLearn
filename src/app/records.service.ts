import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
    info1: string[] = ["Adam","E123","ad@abc.com"]
    info2: string[] = ["Paul","E124","ad@abc.com"]
    info3: string[] = ["Ben","E125","ben@abc.com"]
    info4: string[] = ["Neil","E126","neil@abc.com"]

    getinfo1(): string[]{
      return this.info1
    }

    getinfo2(): string[]{
      return this.info2
    }

    getinfo3(): string[]{
      return this.info3
    }

    getinfo4(): string[]{
      return this.info4
    }
  constructor() { }
}
