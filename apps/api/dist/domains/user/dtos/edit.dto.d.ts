import { CreateDto } from './create.dto';
declare const EditDto_base: import("@nestjs/common").Type<Pick<CreateDto, "name" | "password">>;
export declare class EditDto extends EditDto_base {
}
export {};
