// src/data/produtos.js

const produtos = [
  {
    id: 1,
    nome: "Sorvete copo 330ml",
    descricao: "Com dois sabores à sua escolha. Cremoso e refrescante.",
    preco: 12,
    precoOriginal: 14,
    categoria: "Sorvetes",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502270829_C1CL_i.jpg",
    situacao: "Ativo",
    acompanhamentos: [
      {
        subcategoria: "Sabores",
        min: 1,
        max: 2,
        itens: [
          { id: "1-1", nome: "Sabor Morango", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261047_KYA5_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-2", nome: "Sabor Melão", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261033_3OXV_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-3", nome: "Sabor Laka", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261047_V8TN_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-4", nome: "Sabor Cappucino", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261102_BDN2_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-5", nome: "Sabor Chocomenta", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261102_2J83_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-6", nome: "Sabor Abacaxi Françês", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261103_6B3O_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-7", nome: "Sabor Frutas Tropicais", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261104_4NT3_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-8", nome: "Sabor Amorgute", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261106_XHGC_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-9", nome: "Sabor Cupuaçú", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261108_8H66_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-10", nome: "Sabor Brigadeiro", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261110_3O48_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-11", nome: "Sabor Chiclete", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261111_3025_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-12", nome: "Sabor Blue Ice", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261113_OCEQ_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-13", nome: "Sabor Milho Verde", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261113_54Y5_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-14", nome: "Sabor Leite Condensado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261114_E866_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-15", nome: "Sabor Torta Alemã", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261114_X8IJ_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-16", nome: "Sabor Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261115_CW5C_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-17", nome: "Sabor Maracujá", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261115_7HHS_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-18", nome: "Sabor Flocos", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261116_8JKW_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-19", nome: "Sabor Bombom", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261116_V3I3_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-20", nome: "Sabor Kinder Ovo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261119_IVHY_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-21", nome: "Sabor Bianco Caramelizado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261119_7D4O_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-22", nome: "Sabor Creme", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261120_1555_i.jpg", preco: 0, situacao: "Ativo" }, 
          { id: "1-23", nome: "Sabor Alfajor", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261121_R6O8_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-24", nome: "Sabor Pistache", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261122_7T5S_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-25", nome: "Sabor Chococo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261122_Q3F7_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-26", nome: "Sabor Sensação", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261125_602V_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-27", nome: "Sabor Leitinho Trufado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261126_N23Y_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-28", nome: "Sabor Açaí Natural", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261127_67KH_i.jpg", preco: 1, situacao: "Ativo" }
        ]
      },
      {
        subcategoria: "Coberturas",
        min: 0,
        max: 1,
        itens: [
          { id: "1-29", nome: "Cobertura de Uva", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261136_QTC2_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-30", nome: "Cobertura de Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_10X2_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-31", nome: "Cobertura de Blue Ice", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_E453_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-32", nome: "Cobertura de Menta", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_D3RE_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-33", nome: "Cobertura de Morango", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_880Q_i.jpg", preco: 0, situacao: "Ativo"},
          { id: "1-34", nome: "Cobertura de Caramelo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261139_5J0I_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-35", nome: "Cobertura de Maracuja", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261139_XU58_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-36", nome: "Cobertura de Kiwi", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261139_LNL4_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-37", nome: "Cobertura de Limão Galego", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261140_X867_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-38", nome: "Cobertura de Chiclete", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261141_P614_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "1-39", nome: "Cobertura de Abacaxi", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261142_UGCN_i.jpg", preco: 0, situacao: "Ativo" }
        ]
      },
      {
        subcategoria: "Adicionais",
        min: 0,
        max: 5,
        itens: [
          { id: "1-40", nome: "Adicional de M&M's", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272145_7J51_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "1-41", nome: "Adicional de Fini", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272145_V7T3_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "1-42", nome: "Adicional de Granulado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272146_52TF_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "1-43", nome: "Adicional de Amendoim", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272147_CE2O_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "1-44", nome: "Adicional de Leite Ninho", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281122_NA3T_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "1-45", nome: "Adicional de Calda Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272147_4N4N_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "1-46", nome: "Adicional de Calda Oreo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272149_NC72_i.jpg", preco: 2, situacao: "Ativo" }

        ]
      }

    ]
  },

  {
    id: 2,
    nome: "Açaí copo 330ml",
    descricao: "Açaí puro, cremoso e com seus acompanhamentos favoritos.",
    preco: 14,
    precoOriginal: 16,
    categoria: "Sorvetes",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202503222246_5N8J_i.jpg",
    situacao: "Ativo",
    acompanhamentos: [
      {
        subcategoria: "Adicionais",
        min: 0,
        max: 5,
        itens: [
          { id: "2-1", nome: "Adicional de M&M's", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272145_7J51_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "2-2", nome: "Adicional de Fini", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272145_V7T3_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "2-3", nome: "Adicional de Granulado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272146_52TF_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "2-4", nome: "Adicional de Amendoim", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272147_CE2O_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "2-5", nome: "Adicional de Leite Ninho", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281122_NA3T_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "2-6", nome: "Adicional de Calda Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272147_4N4N_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "2-7", nome: "Adicional de Calda Oreo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272149_NC72_i.jpg", preco: 2, situacao: "Ativo" }

        ]
      }

    ]
  },
  {
    id: 3,
    nome: "Sorvete copo 440ml",
    descricao: "Com três sabores à sua escolha. Cremoso e refrescante.",
    preco: 15,
    precoOriginal: 18,
    categoria: "Sorvetes",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502270829_PB2G_i.jpg",
    situacao: "Ativo",
    acompanhamentos: [
      {
        subcategoria: "Sabores",
        min: 1,
        max: 3,
        itens: [
          { id: "3-1", nome: "Sabor Morango", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261047_KYA5_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-2", nome: "Sabor Melão", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261033_3OXV_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-3", nome: "Sabor Laka", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261047_V8TN_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-4", nome: "Sabor Cappucino", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261102_BDN2_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-5", nome: "Sabor Chocomenta", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261102_2J83_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-6", nome: "Sabor Abacaxi Françês", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261103_6B3O_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-7", nome: "Sabor Frutas Tropicais", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261104_4NT3_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-8", nome: "Sabor Amorgute", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261106_XHGC_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-9", nome: "Sabor Cupuaçú", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261108_8H66_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-10", nome: "Sabor Brigadeiro", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261110_3O48_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-11", nome: "Sabor Chiclete", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261111_3025_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-12", nome: "Sabor Blue Ice", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261113_OCEQ_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-13", nome: "Sabor Milho Verde", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261113_54Y5_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-14", nome: "Sabor Leite Condensado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261114_E866_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-15", nome: "Sabor Torta Alemã", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261114_X8IJ_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-16", nome: "Sabor Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261115_CW5C_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-17", nome: "Sabor Maracujá", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261115_7HHS_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-18", nome: "Sabor Flocos", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261116_8JKW_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-19", nome: "Sabor Bombom", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261116_V3I3_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-20", nome: "Sabor Kinder Ovo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261119_IVHY_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-21", nome: "Sabor Bianco Caramelizado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261119_7D4O_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-22", nome: "Sabor Creme", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261120_1555_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-23", nome: "Sabor Alfajor", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261121_R6O8_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-24", nome: "Sabor Pistache", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261122_7T5S_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-25", nome: "Sabor Chococo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261122_Q3F7_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-26", nome: "Sabor Sensação", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261125_602V_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-27", nome: "Sabor Leitinho Trufado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261126_N23Y_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-28", nome: "Sabor Açaí Natural", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261127_67KH_i.jpg", preco: 1, situacao: "Ativo" }
        ]
      },
      {
        subcategoria: "Coberturas",
        min: 0,
        max: 1,
        itens: [
          { id: "3-29", nome: "Cobertura de Uva", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261136_QTC2_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-30", nome: "Cobertura de Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_10X2_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-31", nome: "Cobertura de Blue Ice", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_E453_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-32", nome: "Cobertura de Menta", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_D3RE_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-33", nome: "Cobertura de Morango", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_880Q_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-34", nome: "Cobertura de Caramelo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261139_5J0I_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-35", nome: "Cobertura de Maracuja", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261139_XU58_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-36", nome: "Cobertura de Kiwi", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261139_LNL4_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-37", nome: "Cobertura de Limão Galego", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261140_X867_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-38", nome: "Cobertura de Chiclete", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261141_P614_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "3-39", nome: "Cobertura de Abacaxi", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261142_UGCN_i.jpg", preco: 0, situacao: "Ativo" }
        ]
      },
      {
        subcategoria: "Adicionais",
        min: 0,
        max: 5,
        itens: [
          { id: "3-40", nome: "Adicional de M&M's", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272145_7J51_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "3-41", nome: "Adicional de Fini", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272145_V7T3_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "3-42", nome: "Adicional de Granulado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272146_52TF_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "3-43", nome: "Adicional de Amendoim", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272147_CE2O_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "3-44", nome: "Adicional de Leite Ninho", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281122_NA3T_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "3-45", nome: "Adicional de Calda Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272147_4N4N_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "3-46", nome: "Adicional de Calda Oreo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272149_NC72_i.jpg", preco: 2, situacao: "Ativo" }
        ]
      }
    ]
  },
  {
    id: 4,
    nome: "Açaí copo 440ml",
    descricao: "Açaí puro, cremoso e com seus acompanhamentos favoritos.",
    preco: 16,
    precoOriginal: 20,
    categoria: "Sorvetes",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202503222246_5N8J_i.jpg",
    situacao: "Ativo",
    acompanhamentos: [
      {
        subcategoria: "Adicionais",
        min: 0,
        max: 5,
        itens: [
          { id: "4-1", nome: "Adicional de M&M's", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272145_7J51_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "4-2", nome: "Adicional de Fini", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272145_V7T3_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "4-3", nome: "Adicional de Granulado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272146_52TF_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "4-4", nome: "Adicional de Amendoim", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272147_CE2O_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "4-5", nome: "Adicional de Leite Ninho", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281122_NA3T_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "4-6", nome: "Adicional de Calda Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272147_4N4N_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "4-7", nome: "Adicional de Calda Oreo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272149_NC72_i.jpg", preco: 2, situacao: "Ativo" }

        ]
      }

    ]
  },
  {
    id: 5,
    nome: "Milkshake Artesanal 330ml",
    descricao: "Dois sabores à sua escolha. Cremoso, fresco e feito na hora!",
    preco: 13,
    precoOriginal: 15,
    categoria: "Sorvetes",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502270825_LI0H_i.jpg",
    situacao: "Ativo",
    acompanhamentos: [
      {
        subcategoria: "Sabores",
        min: 1,
        max: 2,
        itens: [
          { id: "5-1", nome: "Sabor Morango", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261047_KYA5_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-2", nome: "Sabor Melão", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261033_3OXV_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-3", nome: "Sabor Laka", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261047_V8TN_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-4", nome: "Sabor Cappucino", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261102_BDN2_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-5", nome: "Sabor Chocomenta", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261102_2J83_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-6", nome: "Sabor Abacaxi Françês", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261103_6B3O_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-7", nome: "Sabor Frutas Tropicais", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261104_4NT3_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-8", nome: "Sabor Amorgute", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261106_XHGC_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-9", nome: "Sabor Cupuaçú", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261108_8H66_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-10", nome: "Sabor Brigadeiro", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261110_3O48_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-11", nome: "Sabor Chiclete", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261111_3025_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-12", nome: "Sabor Blue Ice", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261113_OCEQ_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-13", nome: "Sabor Milho Verde", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261113_54Y5_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-14", nome: "Sabor Leite Condensado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261114_E866_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-15", nome: "Sabor Torta Alemã", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261114_X8IJ_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-16", nome: "Sabor Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261115_CW5C_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-17", nome: "Sabor Maracujá", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261115_7HHS_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-18", nome: "Sabor Flocos", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261116_8JKW_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-19", nome: "Sabor Bombom", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261116_V3I3_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-20", nome: "Sabor Kinder Ovo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261119_IVHY_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-21", nome: "Sabor Bianco Caramelizado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261119_7D4O_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-22", nome: "Sabor Creme", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261120_1555_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-23", nome: "Sabor Alfajor", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261121_R6O8_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-24", nome: "Sabor Pistache", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261122_7T5S_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-25", nome: "Sabor Chococo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261122_Q3F7_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-26", nome: "Sabor Sensação", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261125_602V_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-27", nome: "Sabor Leitinho Trufado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261126_N23Y_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-28", nome: "Sabor Açaí Natural", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261127_67KH_i.jpg", preco: 1, situacao: "Ativo" }
        ]
      },
      {
        subcategoria: "Coberturas",
        min: 0,
        max: 1,
        itens: [
          { id: "5-29", nome: "Cobertura de Uva", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261136_QTC2_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-30", nome: "Cobertura de Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_10X2_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-31", nome: "Cobertura de Blue Ice", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_E453_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-32", nome: "Cobertura de Menta", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_D3RE_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-33", nome: "Cobertura de Morango", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_880Q_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-34", nome: "Cobertura de Caramelo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261139_5J0I_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-35", nome: "Cobertura de Maracuja", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261139_XU58_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-36", nome: "Cobertura de Kiwi", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261139_LNL4_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-37", nome: "Cobertura de Limão Galego", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261140_X867_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-38", nome: "Cobertura de Chiclete", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261141_P614_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "5-39", nome: "Cobertura de Abacaxi", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261142_UGCN_i.jpg", preco: 0, situacao: "Ativo" }
        ]
      }
    ]
  },
  {
    id: 6,
    nome: "Milkshake Artesanal 440ml",
    descricao: "Dois sabores à sua escolha. Cremoso, fresco e feito na hora!",
    preco: 16,
    precoOriginal: 20,
    categoria: "Sorvetes",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502270825_Q567_i.jpg",
    situacao: "Ativo",
    acompanhamentos: [
      {
        subcategoria: "Sabores",
        min: 1,
        max: 2,
        itens: [
          { id: "6-1", nome: "Sabor Morango", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261047_KYA5_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-2", nome: "Sabor Melão", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261033_3OXV_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-3", nome: "Sabor Laka", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261047_V8TN_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-4", nome: "Sabor Cappucino", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261102_BDN2_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-5", nome: "Sabor Chocomenta", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261102_2J83_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-6", nome: "Sabor Abacaxi Françês", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261103_6B3O_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-7", nome: "Sabor Frutas Tropicais", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261104_4NT3_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-8", nome: "Sabor Amorgute", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261106_XHGC_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-9", nome: "Sabor Cupuaçú", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261108_8H66_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-10", nome: "Sabor Brigadeiro", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261110_3O48_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-11", nome: "Sabor Chiclete", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261111_3025_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-12", nome: "Sabor Blue Ice", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261113_OCEQ_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-13", nome: "Sabor Milho Verde", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261113_54Y5_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-14", nome: "Sabor Leite Condensado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261114_E866_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-15", nome: "Sabor Torta Alemã", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261114_X8IJ_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-16", nome: "Sabor Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261115_CW5C_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-17", nome: "Sabor Maracujá", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261115_7HHS_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-18", nome: "Sabor Flocos", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261116_8JKW_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-19", nome: "Sabor Bombom", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261116_V3I3_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-20", nome: "Sabor Kinder Ovo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261119_IVHY_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-21", nome: "Sabor Bianco Caramelizado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261119_7D4O_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-22", nome: "Sabor Creme", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261120_1555_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-23", nome: "Sabor Alfajor", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261121_R6O8_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-24", nome: "Sabor Pistache", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261122_7T5S_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-25", nome: "Sabor Chococo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261122_Q3F7_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-26", nome: "Sabor Sensação", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261125_602V_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-27", nome: "Sabor Leitinho Trufado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261126_N23Y_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-28", nome: "Sabor Açaí Natural", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261127_67KH_i.jpg", preco: 1, situacao: "Ativo" }
        ]
      },
      {
        subcategoria: "Coberturas",
        min: 0,
        max: 1,
        itens: [
          { id: "6-29", nome: "Cobertura de Uva", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261136_QTC2_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-30", nome: "Cobertura de Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_10X2_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-31", nome: "Cobertura de Blue Ice", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_E453_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-32", nome: "Cobertura de Menta", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_D3RE_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-33", nome: "Cobertura de Morango", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_880Q_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-34", nome: "Cobertura de Caramelo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261139_5J0I_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-35", nome: "Cobertura de Maracuja", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261139_XU58_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-36", nome: "Cobertura de Kiwi", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261139_LNL4_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-37", nome: "Cobertura de Limão Galego", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261140_X867_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-38", nome: "Cobertura de Chiclete", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261141_P614_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "6-39", nome: "Cobertura de Abacaxi", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261142_UGCN_i.jpg", preco: 0, situacao: "Ativo" }
        ]
      }
    ]
  },
  {
    id: 7,
    nome: "Sorvete Marmita 945ml",
    descricao: "Até 6 sabores à sua escolha. Ideal para compartilhar!",
    preco: 26,
    precoOriginal: 30,
    categoria: "Sorvetes",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502270831_1I1D_i.jpg",
    situacao: "Ativo",
    acompanhamentos: [
      {
        subcategoria: "Sabores",
        min: 1,
        max: 6,
        itens: [
          { id: "7-1", nome: "Sabor Morango", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261047_KYA5_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-2", nome: "Sabor Melão", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261033_3OXV_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-3", nome: "Sabor Laka", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261047_V8TN_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-4", nome: "Sabor Cappucino", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261102_BDN2_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-5", nome: "Sabor Chocomenta", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261102_2J83_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-6", nome: "Sabor Abacaxi Françês", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261103_6B3O_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-7", nome: "Sabor Frutas Tropicais", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261104_4NT3_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-8", nome: "Sabor Amorgute", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261106_XHGC_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-9", nome: "Sabor Cupuaçú", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261108_8H66_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-10", nome: "Sabor Brigadeiro", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261110_3O48_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-11", nome: "Sabor Chiclete", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261111_3025_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-12", nome: "Sabor Blue Ice", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261113_OCEQ_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-13", nome: "Sabor Milho Verde", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261113_54Y5_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-14", nome: "Sabor Leite Condensado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261114_E866_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-15", nome: "Sabor Torta Alemã", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261114_X8IJ_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-16", nome: "Sabor Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261115_CW5C_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-17", nome: "Sabor Maracujá", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261115_7HHS_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-18", nome: "Sabor Flocos", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261116_8JKW_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-19", nome: "Sabor Bombom", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261116_V3I3_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-20", nome: "Sabor Kinder Ovo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261119_IVHY_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-21", nome: "Sabor Bianco Caramelizado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261119_7D4O_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-22", nome: "Sabor Creme", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261120_1555_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-23", nome: "Sabor Alfajor", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261121_R6O8_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-24", nome: "Sabor Pistache", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261122_7T5S_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-25", nome: "Sabor Chococo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261122_Q3F7_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-26", nome: "Sabor Sensação", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261125_602V_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-27", nome: "Sabor Leitinho Trufado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261126_N23Y_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-28", nome: "Sabor Açaí Natural", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261127_67KH_i.jpg", preco: 1, situacao: "Ativo" }
        ]
      },
      {
        subcategoria: "Coberturas",
        min: 0,
        max: 1,
        itens: [
          { id: "7-29", nome: "Cobertura de Uva", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261136_QTC2_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-30", nome: "Cobertura de Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_10X2_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-31", nome: "Cobertura de Blue Ice", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_E453_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-32", nome: "Cobertura de Menta", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_D3RE_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-33", nome: "Cobertura de Morango", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261138_880Q_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-34", nome: "Cobertura de Caramelo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261139_5J0I_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-35", nome: "Cobertura de Maracuja", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261139_XU58_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-36", nome: "Cobertura de Kiwi", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261139_LNL4_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-37", nome: "Cobertura de Limão Galego", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261140_X867_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-38", nome: "Cobertura de Chiclete", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261141_P614_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "7-39", nome: "Cobertura de Abacaxi", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261142_UGCN_i.jpg", preco: 0, situacao: "Ativo" }
        ]
      },
      {
        subcategoria: "Adicionais",
        min: 0,
        max: 5,
        itens: [
          { id: "7-40", nome: "Adicional de M&M's", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272145_7J51_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "7-41", nome: "Adicional de Fini", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272145_V7T3_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "7-42", nome: "Adicional de Granulado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272146_52TF_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "7-43", nome: "Adicional de Amendoim", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272147_CE2O_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "7-44", nome: "Adicional de Leite Ninho", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281122_NA3T_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "7-45", nome: "Adicional de Calda Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272147_4N4N_i.jpg", preco: 2, situacao: "Ativo" },
          { id: "7-46", nome: "Adicional de Calda Oreo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272149_NC72_i.jpg", preco: 2, situacao: "Ativo" }
        ]
      }
    ]
  },
  {
    id: 8,
    nome: "Sorvete 2l",
    descricao: "Cremoso e cheio de sabor, perfeito para compartilhar!",
    preco: 26,
    precoOriginal: 30,
    categoria: "Sorvetes",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272207_744N_i.jpg",
    situacao: "Ativo",
    acompanhamentos: [
      {
        subcategoria: "Sabores",
        min: 1,
        max: 1,
        itens: [
          { id: "8-1", nome: "Maracujá e Torta Alemã", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261115_7HHS_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "8-2", nome: "Abacaxi e Laka", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261114_E866_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "8-3", nome: "Flocos e Laka", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261116_8JKW_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "8-4", nome: "Morango e Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261125_602V_i.jpg", preco: 0, situacao: "Ativo" } 
        ]
      }
    ]
  },
  {
    id: 9,
    nome: "Sorvete 1l",
    descricao: "Cremoso e cheio de sabor, perfeito para compartilhar!",
    preco: 15,
    precoOriginal: 18,
    categoria: "Sorvetes",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502272205_3136_i.jpg",
    situacao: "Ativo",
    acompanhamentos: [
      {
        subcategoria: "Sabores",
        min: 1,
        max: 1,
        itens: [
          { id: "9-1", nome: "Maracuja", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261115_7HHS_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-2", nome: "Kinder Ovo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261121_0DVG_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-3", nome: "Torta Alemã", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261126_N23Y_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-4", nome: "Açaí", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261127_67KH_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-5", nome: "Bombom", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261116_V3I3_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-6", nome: "Abacaxi", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261107_Q3J8_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-7", nome: "Banana", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261120_1555_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-8", nome: "Brigadeiro", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261115_CW5C_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-9", nome: "Blue Ice", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261113_OCEQ_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-10", nome: "Coco", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261106_XHGC_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-11", nome: "Chocolate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261110_3O48_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-12", nome: "Creme", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261114_E866_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-13", nome: "Frutas Tropicais", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261110_K7U0_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-14", nome: "Leite Condensado", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261119_7D4O_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-15", nome: "Limão", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261033_3OXV_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-16", nome: "Menta", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261122_7T5S_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-17", nome: "Milho", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261107_Q3J8_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-18", nome: "Morango", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261047_KYA5_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-19", nome: "Passas", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261121_0DVG_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "9-20", nome: "Prestigio", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502261116_8JKW_i.jpg", preco: 0, situacao: "Ativo" }
        ]
      }      
    ]
  },
  {
    id: 10,
    nome: "Pastel",
    descricao: "Pastel crocante, frito na hora, com recheio generoso e saboroso!",
    preco: 8,
    precoOriginal: 10,
    categoria: "Lanches",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202503222215_A43P_i.jpg",
    situacao: "Ativo",
    acompanhamentos: [
      {
        subcategoria: "Sabores",
        min: 1,
        max: 1,
        itens: [
          { id: "10-1", nome: "Frango", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202503222221_2415_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "10-2", nome: "Pizza", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202503222225_B3PF_i.jpg", preco: 0, situacao: "Ativo" },
          { id: "10-3", nome: "Queijo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202503222227_3VA3_i.jpg", preco: 0, situacao: "Ativo" },
        ]
      }      
    ]
  },
  {
    id: 11,
    nome: "X - Burguer",
    descricao: "Hambúrguer artesanal, queijo e presunto no pão macio.",
    preco: 13,
    precoOriginal: 15,
    categoria: "Lanches",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281012_I308_i.jpg",
    situacao: "Ativo",
    acompanhamentos: [
      {
        subcategoria: "Adicionais",
        min: 0,
        max: 3,
        itens: [
          { id: "11-1", nome: "Presunto", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281024_T6JU_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "11-2", nome: "Queijo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281024_6C18_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "11-3", nome: "Alface", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281024_7781_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "11-4", nome: "Tomate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281025_DE43_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "11-5", nome: "Bacon", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281026_R2OD_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "11-6", nome: "Calabresa", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281026_3J06_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "11-7", nome: "Ovo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281026_AS2F_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "11-8", nome: "Hamburguer", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281028_TT17_i.jpg", preco: 5, situacao: "Ativo" }
        ]
      }      
    ]
  },
  {
    id: 12,
    nome: "X - Salada",
    descricao: "Hambúrguer artesanal, queijo, presunto, alface e tomate.",
    preco: 15,
    precoOriginal: 18,
    categoria: "Lanches",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281029_UA35_i.jpg",
    situacao: "Ativo",
    acompanhamentos: [
      {
        subcategoria: "Adicionais",
        min: 0,
        max: 3,
        itens: [
          { id: "12-1", nome: "Presunto", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281024_T6JU_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "12-2", nome: "Queijo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281024_6C18_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "12-3", nome: "Alface", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281024_7781_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "12-4", nome: "Tomate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281025_DE43_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "12-5", nome: "Bacon", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281026_R2OD_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "12-6", nome: "Calabresa", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281026_3J06_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "12-7", nome: "Ovo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281026_AS2F_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "12-8", nome: "Hamburguer", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281028_TT17_i.jpg", preco: 5, situacao: "Ativo" }
        ]
      }      
    ]
  },
  {
    id: 13,
    nome: "X - Bacon",
    descricao: "Hambúrguer artesanal, bacon, queijo, presunto, alface, tomate.",
    preco: 22,
    precoOriginal: 25,
    categoria: "Lanches",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281037_0N4P_i.jpg",
    situacao: "Ativo",
    acompanhamentos: [
      {
        subcategoria: "Adicionais",
        min: 0,
        max: 3,
        itens: [
          { id: "13-1", nome: "Presunto", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281024_T6JU_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "13-2", nome: "Queijo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281024_6C18_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "13-3", nome: "Alface", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281024_7781_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "13-4", nome: "Tomate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281025_DE43_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "13-5", nome: "Bacon", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281026_R2OD_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "13-6", nome: "Calabresa", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281026_3J06_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "13-7", nome: "Ovo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281026_AS2F_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "13-8", nome: "Hamburguer", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281028_TT17_i.jpg", preco: 5, situacao: "Ativo" }
        ]
      }      
    ]
  },
  {
    id: 14,
    nome: "X - Calabresa",
    descricao: "Hambúrguer artesanal, calabresa, queijo, presunto, alface, tomate.",
    preco: 20,
    precoOriginal: 22,
    categoria: "Lanches",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281041_NKLE_i.jpg",
    situacao: "Ativo",
    acompanhamentos: [
      {
        subcategoria: "Adicionais",
        min: 0,
        max: 3,
        itens: [
          { id: "14-1", nome: "Presunto", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281024_T6JU_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "14-2", nome: "Queijo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281024_6C18_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "14-3", nome: "Alface", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281024_7781_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "14-4", nome: "Tomate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281025_DE43_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "14-5", nome: "Bacon", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281026_R2OD_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "14-6", nome: "Calabresa", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281026_3J06_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "14-7", nome: "Ovo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281026_AS2F_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "14-8", nome: "Hamburguer", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281028_TT17_i.jpg", preco: 5, situacao: "Ativo" }
        ]
      }      
    ]
  },
  {
    id: 15,
    nome: "X - Egg",
    descricao: "Hambúrguer artesanal, ovo frito, queijo, presunto, alface, tomate.",
    preco: 22,
    precoOriginal: 25,
    categoria: "Lanches",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281047_2076_i.jpg",
    situacao: "Ativo",
    acompanhamentos: [
      {
        subcategoria: "Adicionais",
        min: 0,
        max: 3,
        itens: [
          { id: "15-1", nome: "Presunto", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281024_T6JU_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "15-2", nome: "Queijo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281024_6C18_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "15-3", nome: "Alface", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281024_7781_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "15-4", nome: "Tomate", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281025_DE43_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "15-5", nome: "Bacon", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281026_R2OD_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "15-6", nome: "Calabresa", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281026_3J06_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "15-7", nome: "Ovo", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281026_AS2F_i.jpg", preco: 5, situacao: "Ativo" },
          { id: "15-8", nome: "Hamburguer", imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281028_TT17_i.jpg", preco: 5, situacao: "Ativo" }
        ]
      }      
    ]
  },
  {
    id: 16,
    nome: "Frango a Passarinho",
    descricao: "500g, crocante por fora, macio por dentro",
    preco: 28,
    precoOriginal: 32,
    categoria: "Porções",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202503222207_35TJ_i.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 17,
    nome: "Calabresa com Cebola",
    descricao: "Porção de Calabresa com Cebola 250g, grelhada e saborosa.",
    preco: 14,
    precoOriginal: 16,
    categoria: "Porções",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281050_7U5H_i.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 18,
    nome: "Calabresa com Cebola",
    descricao: "Porção de Calabresa com Cebola 500g, grelhada e saborosa.",
    preco: 26,
    precoOriginal: 30,
    categoria: "Porções",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281055_DNJ5_i.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 19,
    nome: "Batata Frita",
    descricao: "Batata Frita 250g, crocante e dourada. Clássica!",
    preco: 14,
    precoOriginal: 16,
    categoria: "Porções",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281059_3HWM_i.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 20,
    nome: "Batata Frita",
    descricao: "Batata Frita 500g, crocante e dourada. Clássica!",
    preco: 26,
    precoOriginal: 30,
    categoria: "Porções",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281101_8N3N_i.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 21,
    nome: "Porção de Tilápia",
    descricao: "Tilápia 500g, leve, macia e saborosa.",
    preco: 38,
    precoOriginal: 44,
    categoria: "Porções",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/4c527891-f8d0-42b7-8a91-ae1d769ca4d4/202502281104_D242_i.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 22,
    nome: "Energético Red Horse",
    descricao: "400ml",
    preco: 5,
    precoOriginal: 6,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210180653_ys1ghboslag.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 23,
    nome: "Coca-Cola Sem Açúcar",
    descricao: " 350ml",
    preco: 5,
    precoOriginal: 6,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202410080822_dwfm6sfx8ro.jpeg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 24,
    nome: "Refrigerante de Uva Fanta",
    descricao: "350ml",
    preco: 5,
    precoOriginal: 6,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202410161408_o420ou4nas8.jpeg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 25,
    nome: "Kuat Guaraná",
    descricao: "350ml",
    preco: 5,
    precoOriginal: 6,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202310051146_hwdfp8r23u5.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 26,
    nome: "Refrigerante Coca Cola",
    descricao: "350ml",
    preco: 5,
    precoOriginal: 6,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202411281059_7ro7kn8bk4f.png",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 27,
    nome: "Tônica Schweppes Lata",
    descricao: "350ml",
    preco: 5,
    precoOriginal: 6,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202310051140_55wn2k3bfjj.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 28,
    nome: "Achoc Liq Cemil Chocomil",
    descricao: "200ml",
    preco: 3,
    precoOriginal: 3.5,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202307091527_yfxovmus10d.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 29,
    nome: "Suco Kapo Morango Del Valle",
    descricao: "200ml",
    preco: 3,
    precoOriginal: 3.5,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202410221303_37rvxv2he3b.jpeg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 30,
    nome: "Suco de Laranja Kapo Del Valle",
    descricao: "200ml",
    preco: 3,
    precoOriginal: 3.5,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202411271654_kzyc0j3sw1.png",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 31,
    nome: "Suco de Uva Kapo Del Valle",
    descricao: "200ml",
    preco: 3,
    precoOriginal: 3.5,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202501071330_fj2yyhex3fs.jpeg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 32,
    nome: "Água Mineral com Gás Cristal Azul",
    descricao: "510ml",
    preco: 4,
    precoOriginal: 4.5,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210180659_57ep77ki6jh.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 33,
    nome: "Água Mineral sem Gás Cristal Azul",
    descricao: "510ml",
    preco: 4,
    precoOriginal: 4.5,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210180659_zzm5x7q8ib.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 34,
    nome: "Fanta Laranja",
    descricao: "600 ml",
    preco: 7,
    precoOriginal: 8,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202402200810_tqwyora844m.png",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 35,
    nome: "Refrigerante Coca Cola",
    descricao: "600ml",
    preco: 7,
    precoOriginal: 8,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202411131102_iofp47jwk3m.png",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 36,
    nome: "Coca-Cola Sem Açúcar",
    descricao: "600ml",
    preco: 7,
    precoOriginal: 8,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202410021506_nkewnaonlfa.jpeg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 37,
    nome: "Refrigerante Original Coca Cola",
    descricao: "2l",
    preco: 13,
    precoOriginal: 15,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202411271113_a4gb5i2eei5.png",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 38,
    nome: "Cerveja sem Álcool Colônia Malzbier",
    descricao: "350ml",
    preco: 3,
    precoOriginal: 4.5,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210180640_qdgz34flx9j.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 39,
    nome: "Cerveja Premium Long Neck Sol",
    descricao: "330ml",
    preco: 7,
    precoOriginal: 8,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202305021250_47r3x4odjvt.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 40,
    nome: "Cerveja Long Neck Heineken",
    descricao: "330ml",
    preco: 8,
    precoOriginal: 9,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202409231503_g50s0nskyim.png",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 41,
    nome: "Cerveja Antarctica",
    descricao: "350ml",
    preco: 5,
    precoOriginal: 6,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210202319_mk9ci9qep1.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 42,
    nome: "Cerveja Pilsen Skol",
    descricao: "269ml",
    preco: 4,
    precoOriginal: 4.5,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202303161512_4yo5ilpr8yp.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 43,
    nome: "Cerveja Budweiser American Lager",
    descricao: "269ml Lata",
    preco: 5,
    precoOriginal: 6,
    categoria: "Bebidas",
    imagem: "https://bretas.vtexassets.com/arquivos/ids/201910/65730be3dddb07d995cdb18c.jpg?v=638376353037100000",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 44,
    nome: "Cerveja Amstel Lata",
    descricao: "269ml",
    preco: 4,
    precoOriginal: 4.5,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210182334_lmofef47v4m.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 45,
    nome: "Cerveja Pilsen Colônia",
    descricao: "350ml",
    preco: 4,
    precoOriginal: 4.5,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202307060102_zlwgg3sgr3a.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  },
  {
    id: 46,
    nome: "Cerveja Pilsen Zero Álcool Colônia",
    descricao: "350ml",
    preco: 5,
    precoOriginal: 6,
    categoria: "Bebidas",
    imagem: "https://static.ifood-static.com.br/image/upload/t_medium/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202301021308_89eup119oss.jpg",
    situacao: "Ativo",
    acompanhamentos: []
  } 
];

export default produtos;
