import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    constructor(){
        this.cats = [];
    }

    findall(){
        return this.cats;
    }

    create(cat) {
        this.cats.push(cat);
        
    }
}
