-- CreateTable
CREATE TABLE "Servicos" (
    "id" SERIAL NOT NULL,
    "titulo_servico" VARCHAR(255) NOT NULL,
    "desc_servico" VARCHAR(255) NOT NULL,
    "data_servico" TIMESTAMP(3) NOT NULL,
    "id_tipo_servico" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Servicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TipoServico" (
    "id" SERIAL NOT NULL,
    "tipo_servico" VARCHAR(255) NOT NULL,

    CONSTRAINT "TipoServico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "login" VARCHAR(60) NOT NULL,
    "senha" VARCHAR(60) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Servicos" ADD CONSTRAINT "Servicos_id_tipo_servico_fkey" FOREIGN KEY ("id_tipo_servico") REFERENCES "TipoServico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicos" ADD CONSTRAINT "Servicos_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
