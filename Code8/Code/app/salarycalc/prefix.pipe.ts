import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'prefix'
})
export class PreFixPipe implements PipeTransform{
  transform(str:string, pre?:string){
    if(!pre){
        pre="DD";
    }
    return pre+"-"+str;
  }
}
