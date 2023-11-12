import { PrismaClient, Equipment } from '../Prisma/client';

const prisma = new PrismaClient();

export class EquipmentRepository {
  async createEquipment(equipmentData: { type: string; idBarra: number; barraDe?: number; barraPara?: number; idLinha?: number }): Promise<Equipment> {
    const createdEquipment = await prisma.equipment.create({
      data: equipmentData,
    });
    return createdEquipment;
  }

  async getEquipments(): Promise<Equipment[]> {
    const equipments = await prisma.equipment.findMany();
    return equipments;
  }

  async updateEquipment(equipmentId: number, updates: { type?: string; idBarra?: number; barraDe?: number; barraPara?: number; idLinha?: number }): Promise<Equipment | null> {
    const updatedEquipment = await prisma.equipment.update({
      where: { id: equipmentId },
      data: updates,
    });
    return updatedEquipment;
  }

  async deleteEquipment(equipmentId: number): Promise<void> {
    await prisma.equipment.delete({
      where: { id: equipmentId },
    });
  }
}
