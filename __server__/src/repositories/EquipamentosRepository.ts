import { PrismaClient, Equipamentos } from '../prisma/client';

const prisma = new PrismaClient();

export class EquipamentosRepository {
  
  async createEquipamentos(EquipamentosData: { tipo: string; idBarra: number; barraDe?: number |null; barraPara?: number | null; idLinha?: number | null }): Promise<Equipamentos> {
    try {

    const createdEquipamentos = await prisma.equipamentos.create({
      data: EquipamentosData,
    })
    .catch((error) => {
      return Promise.resolve(error);
    });
      return createdEquipamentos;
    }
    catch (error:any) {
      return Promise.resolve(error);
    }
  }

  async getEquipamentos(): Promise<Equipamentos[]> {
    const Equipamentoss = await prisma.equipamentos.findMany()
    .catch((error) => {
      return Promise.resolve(error);
    });
    return Equipamentoss;
  }

  async updateEquipamentos(EquipamentosId: number, updates: { tipo?: string; idBarra?: number; barraDe?: number; barraPara?: number; idLinha?: number }): Promise<Equipamentos | null> {
    const updatedEquipamentos = await prisma.equipamentos.update({
      where: { id: EquipamentosId },
      data: updates,
    })
    .catch((error) => {
      return Promise.resolve(error);
    });
    return updatedEquipamentos;
  }

  async deleteEquipamentos(EquipamentosId: number): Promise<void> {
    await prisma.equipamentos.delete({
      where: { id: EquipamentosId },
    })
    .catch((error) => {
      return Promise.resolve(error);
    });
  }
}
