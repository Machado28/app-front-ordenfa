import { useState } from "react";
import { FaChartBar, FaHeart } from "react-icons/fa";
import * as S from "./styles";

export default function MarketplaceProduct() {
  const [products, setProducts] = useState([
    {
      id: 0,
      descricao: "BURRIFADOR",
      preco: "AKZ900,00",
      image:
        "https://cdn.shopify.com/s/files/1/1811/9571/products/shop-1_9cadb30e-a32a-401c-915d-cd12e0d81906.jpg",
    },
    {
      id: 1,
      descricao: "ENCORPA HAIR",
      preco: "AKZ2000,00",
      image:
        "https://cdn.shopify.com/s/files/1/1811/9571/products/shop-2_74df2456-dd70-4fad-ab6c-ddfe2815facb.jpg",
    },
    {
      id: 2,
      descricao: "MANDIOCA HAIR",
      preco: "AKZ1000,00",
      image:
        "https://cdn.shopify.com/s/files/1/1811/9571/products/shop-3_24f46497-d601-46e1-8ae2-84d9bfaa2003.jpg",
    },
    {
      id: 3,
      descricao: "KIT MAQUILHAGEM",
      preco: "AKZ8000,00",
      image:
        "https://skinaffairs.files.wordpress.com/2012/12/kit-de-maquilhagem-4.png",
    },
    {
      id: 4,
      descricao: "GILETE",
      preco: "AKZ800,00",
      image:
        "https://cdn.shopify.com/s/files/1/1811/9571/products/shop-5_5f7a160d-65ff-4723-a2fe-82a95861f253.jpg",
    },
    {
      id: 5,
      descricao: "KIT SHAMPOO MEN",
      preco: "AKZ4000,00",
      image:
        "https://images.tcdn.com.br/img/img_prod/743406/kit_shampoo_e_condicionador_tarry_profissional_argan_pluss_2_5_litros_3_1_20200106131103.jpg",
    },
    {
      id: 6,
      descricao: "SUPER KIT MANDIOCA",
      preco: "AKZ1000,00",
      image:
        "https://cdn.dotcosmeticos.com.br/media/catalog/product/cache/1/image/2200x/040ec09b1e35df139433887a97daa66f/k/i/kit-mandioca-foreverliss-dot.jpg",
    },
    {
      id: 7,
      descricao: "KIT MAQUILHAGEM",
      preco: "AKZ1000",
      image:
        "https://biucosmetics.pt/wp-content/uploads/2019/09/pinceis-maquilhagem.jpg",
    },
  ]);

  return (
    <S.Container>
      <S.Title>MARKETPLACE</S.Title>
      <S.ContainerAllElements>
        {products.map((item) => (
          <S.Card key={item.id}>
            <S.ContainerImage style={{ backgroundImage: `url(${item.image})` }}>
              <S.ContainerActionsProduct className="actionsProduct">
                <S.ContainerIcons>
                  <S.Icon>
                    <FaHeart />
                  </S.Icon>

                  <S.Icon>
                    <FaChartBar />
                  </S.Icon>
                </S.ContainerIcons>

                <S.ContainerActions>
                  <S.Actions>ADICIONAR AO CARRINHO</S.Actions>
                  <S.Actions>VER PRODUTO</S.Actions>
                </S.ContainerActions>
              </S.ContainerActionsProduct>
            </S.ContainerImage>

            <S.ContainerDescricao>
              <S.Descricao>{item.descricao}</S.Descricao>
              <S.Preco>{item.preco}</S.Preco>
            </S.ContainerDescricao>
          </S.Card>
        ))}
      </S.ContainerAllElements>
    </S.Container>
  );
}
