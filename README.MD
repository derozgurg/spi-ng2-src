# spi-ng2

## Installation

To install , run:

```bash
$ npm install spi-ng2 --save
```

## Usage


and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { SampleModule } from '@spi-ng2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SpiModule.forRoot(),  //SPI MODULE  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Ozgur Cimen](mailto:derozgur@gmail.com)
