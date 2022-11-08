# Hex API Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/hex)](https://www.npmjs.com/package/@fern-api/hex)

## Documentation

API documentation is available at <https://learn.hex.tech/docs/develop-logic/hex-api/api-reference>.

## Usage

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-lbqcjk?file=app.ts&view=editor)

```typescript
import { HexApiClient } from '@fern-api/hex';
import { Environment } from '@fern-api/hex/environments';


const client = new HexApiClient({
  environment: "https://app.hex.tech/api/v1",
  auth: {
    token: 'YOUR_TOKEN',
  },
});

const response = await client.project.getProjectRuns({
  projectId: '5a8591dd-4039-49df-9202-96385ba3eff8',
});

console.log('Received response from Hex!', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-hex/hex-node) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
