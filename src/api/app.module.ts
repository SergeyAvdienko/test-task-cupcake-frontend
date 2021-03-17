import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MarketStateFirstService } from './market-state-first.service';
import { MarketStateSecondService } from './market-state-second.service';
import { MarketStateThirdService } from './market-state-third.service';
import { AppController } from './app.controller';
import { MarketStateFirstController } from './market-state-first.controller';
import { MarketStateSecondController } from './market-state-second.controller';
import { MarketStateThirdController } from './market-state-third.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    MarketStateFirstController,
    MarketStateSecondController,
    MarketStateThirdController,
  ],
  providers: [
    AppService,
    MarketStateFirstService,
    MarketStateSecondService,
    MarketStateThirdService,
  ],
})
export class AppModule {}
