import { IsInt, MaxLength, MinLength } from "class-validator";

function checkLength(min: number, max: number) {
    return function (target: any, key: string) {
        MinLength(min, {
            message: `${key} is too short`
        })(target, key);
        MaxLength(max, {
            message: `${key} is too long`,
        })(target, key)
    }
}

export class ProductDTO {
    @checkLength(10,30)
    _id: string;
    name: string;
    image: string;
    @IsInt()
    price: number;
    description: string;
    quantity: number
}