import { Injectable } from '@angular/core';

import {Gene} from './gene';
import {GENES} from './phex';

@Injectable({
  providedIn: 'root'
})
export class GeneService {

  getGenes(): Gene{
    return GENES;
  }

  constructor() { }
}
