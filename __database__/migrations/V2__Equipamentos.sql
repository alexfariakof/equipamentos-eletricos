USE `EquipamentosEletricosDB`;
CREATE TABLE `Equipamentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(2) NOT NULL,
  `idBarra` int NOT NULL,
  `barraDe` int NULL,
  `barraPara` int NULL,
  `idLinha` int NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`tipo`, `idBarra`, `barraDe`, `barraPara`, `idLinha`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
