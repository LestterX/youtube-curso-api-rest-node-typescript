import * as create from './Create'; //IMPORTA TUDO COMO create
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateById from './UpdateById';
import * as deleteById from './DeleteByID';
import * as count from './Count';

export const CidadesProvider = {
  ...create, //SPREAD de tudo dentro do objeto create
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById,
  ...count,
};