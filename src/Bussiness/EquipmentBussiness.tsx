// eslint-disable-next-line strict
"use strict";
import { Equipment } from '../Prisma/client';

class EquipmentBussiness {
  static createEquipment(equipment: Equipment){
    Object.defineProperty(exports, "__esModule", { value: true });
      var EquipmentRepository_1 = require('../Repositories/EquipmentRepository');
      var equipmentRepository = new EquipmentRepository_1.EquipmentRepository();
      equipmentRepository.createEquipment(equipment);
  }
}

export default EquipmentBussiness;