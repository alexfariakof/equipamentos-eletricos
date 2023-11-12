import { EquipmentRepository } from './EquipmentRepository' ;

// Crie uma instância do seu repositório
const equipmentRepository = new EquipmentRepository();

// Exemplo: Criar um novo equipamento
const newEquipment =  equipmentRepository.createEquipment({
  type: 'B',
  idBarra: 1,
  barraDe: 10,
  barraPara: 20,
  idLinha: 1,
});

console.log('Novo equipamento criado:', newEquipment);