import {at} from '../../at-angular';
import {Service} from '../../services/names-list';

import {Definition} from './about';
import AboutController from './about.controller';

'use strict';

let ngModule = at.getOrCreateModule(Definition.ngModuleName);

ngModule.requires.push('ngNewRouter', Service.NamesList.moduleName);

export default ngModule.name;
