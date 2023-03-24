import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class Drink {
  @Field()
  name: string;
}
