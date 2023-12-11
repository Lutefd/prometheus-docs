import type { SSTConfig } from 'sst';
import { AstroSite } from 'sst/constructs';

export default {
  config(_input) {
    return {
      name: 'prometheus-docs',
      region: 'sa-east-1',
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new AstroSite(stack, 'site');
      if (app.stage !== 'production') {
        app.setDefaultRemovalPolicy('destroy');
      }
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
