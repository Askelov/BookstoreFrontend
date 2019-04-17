import { IPage } from './page';

export class IBook {
    constructor(
    public title: string,
    public genre: string,
    public authors: number[],
    public pages: IPage[]
    ){}
}

