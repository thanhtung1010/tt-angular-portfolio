import { Pipe, PipeTransform } from "@angular/core";
import { ASSETS_TYPE } from "@app/enums";
import { enviroment } from "@environments/environment";

@Pipe({
  name: 'TTAssetsLink',
  standalone: true
})

export class AssetsLink implements PipeTransform {
  private paths: {path: string, type: ASSETS_TYPE}[] = [
    {
      path: 'assets/',
      type: 'svg'
    },
    {
      path: 'assets/imgs/',
      type: 'png'
    },
    {
      path: 'assets/',
      type: 'i18n'
    },
  ];

  constructor() {}

  transform(name: string, type: string, ...args: any): string {
    try {
      const _existPath = this.paths.find(path => path.type === type);

      if (!_existPath) return '';

      return enviroment.ASSETS_URL + _existPath.path + type + '/' + name + '.' + type;
    } catch (error) {
      return '';
    }
  }
}
