import { Controller, ClassOptions, ChildControllers } from '@overnightjs/core';


import { ForecastController } from '@src/./controllers/forecast';
//import { BeachesController } from './events';
//import { UsersController } from './users';

@Controller('api/v1')
@ClassOptions({ mergeParams: true })
@ChildControllers([

  new ForecastController (),

  //new BeachesController (),

  //new UsersController (),
])
export class ApiV1Controller {
}