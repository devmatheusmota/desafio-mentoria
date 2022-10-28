/*
  Warnings:

  - You are about to drop the `Servicos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TipoServico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Servicos" DROP CONSTRAINT "Servicos_id_tipo_servico_fkey";

-- DropForeignKey
ALTER TABLE "Servicos" DROP CONSTRAINT "Servicos_id_usuario_fkey";

-- DropTable
DROP TABLE "Servicos";

-- DropTable
DROP TABLE "TipoServico";

-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "service_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceType" (
    "id" SERIAL NOT NULL,
    "service_type" VARCHAR(255) NOT NULL,

    CONSTRAINT "ServiceType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "login" VARCHAR(60) NOT NULL,
    "password" VARCHAR(60) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "ServiceType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
