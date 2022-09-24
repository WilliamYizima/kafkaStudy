import { Injectable } from '@nestjs/common';
import { juggler } from '@loopback/repository';

@Injectable()
export class EsDataSourceService extends juggler.DataSource {
  static dataSourceName = 'esv7';

  constructor() {
    super(EsDataSourceService.config());
  }

  static config() {
    return {
      name: 'esv7',
      connector: 'esv6',
      index: 'postgres.public.newtable',
      version: 7,
      debug: true,
      defaultSize: 50,
      configuration: {
        node: 'http://52.184.206.239:9200',
        auth: {
          username: 'elastic',
          password: 'mw5w1vm3Y6650vm1EW8wXh4l',
        },
        requestTimeout: 30000,
        pingTimeout: 3000,
      },
      mappingProperties: {
        docType: {
          type: 'keyword',
          index: false,
        },
      },
    };
  }
}
