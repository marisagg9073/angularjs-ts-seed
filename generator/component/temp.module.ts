import {at} from '../../at-angular';

import {Definition} from './<%= name %>';
import './<%= name %>.controller';

'use strict';

let ngModule = at.getOrCreateModule(Definition.ngModuleName);

ngModule.requires.push('ngNewRouter');

export default ngModule.name;
