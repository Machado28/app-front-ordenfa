import React from "react";
import { FaUser, FaComment, FaRegCalendarAlt } from "react-icons/fa";
import * as S from "./style";

const posts = [
  {
    id: 0,
    image: "https://tailorbarber.co/wp-content/uploads/2019/01/IMG_9671.jpg",
    title: "GUIA INICIANTE PARA O ESTILO CAPILAR",
    date: "OCT. 12. 2021",
    responsable: "ADMIN",
    totalComment: "3",
    description:
      "Muito longe, atrás da palavra montanhas, longe dos países Vokalia e Consonantia...",
  },
  {
    id: 1,
    image:
      "https://lh3.googleusercontent.com/aUxxU5SO0wOnO-dhVlBqrqTVMaJuWS4WCj5TXJPq1WH1kMWLmwAveHEfAw0PIFfnDTEb_qAQdhFn13eQaTs7J5AllVW9y71kajoN2pfvT2EO1FqoLkeJKsEb3onWwlyb1O9CGjhJRPnbHcvSLMaxYw_EA0JRc3SStSsuU72C1Oc_SxBQq3rlpyU0K8XitN9SimyNI68XDbWzSm022MQ4MJRaKt5s3LhtI1NYNKhuwQOLoTr4hXHNJtpwzPkpVBZVARoO8479dYEyS7RpLLt9VqB93S7I7AXVCNPA21Vdi2oUcXwX7SajHbC6FVuCqTBFn8zmbMiN5slFqjndnfxA9CyLBVm8fVtdugTy_I7FbuI_3FBwrWdfuJo8A_hUXJpT-0MK3AHjTT5ykjbdSri1twzu18CVPeNs02LSw7OvLU-mAMd_uv6yF0QUGSYts6pLlK4_2HtdCP6s_vf9n-5YUJDe4Shww8umr7RBocHBYHyB3PE4doUpp6U5KVSeBlzJ_wnORSJF8IGvP7-E4MnG4eU25JDnLuIomH8HrUlv6gD_07f9Q7XevZzwld3ZuDVH4GDKvClQFbBkSQCDxuxNRaX6QyxaWxMZT8T2dJUxHu7MUzUYYf8nr3hgdnRDQwUsSX_7it5_gnwe9c17X21nLuiNRW9x8Xhv4y7-TTqBPm-PlxsJ39T6y9ilX3B9IyFImLPumx12GRdbgIFttU1qsVnZ=w878-h657-no?authuser=0",
    title: "GUIA INICIANTE PARA O ESTILO CAPILAR",
    date: "OCT. 12. 2021",
    responsable: "ADMIN",
    totalComment: "3",
    description:
      "Muito longe, atrás da palavra montanhas, longe dos países Vokalia e Consonantia...",
  },
  {
    id: 2,
    image: "https://www.faip.edu.br/wp-content/uploads/2020/12/banner_2-12.jpg",
    title: "GUIA INICIANTE PARA O ESTILO CAPILAR",
    date: "OCT. 12. 2021",
    responsable: "ADMIN",
    totalComment: "3",
    description:
      "Muito longe, atrás da palavra montanhas, longe dos países Vokalia e Consonantia...",
  },
];

const CardPosts: React.FC = () => {
  return (
    <S.ContainerCardPosts>
      <S.HeaderCardPost>
        <h1>POSTS RECENTES</h1>
      </S.HeaderCardPost>
      <S.ContainerBlocos>
        <S.Blocos>
          {posts.map((post) => (
            <S.Bloco key={post.id}>
              <div style={{ backgroundImage: `url(${post.image})` }}>
                <article>
                  <span>
                    <FaRegCalendarAlt />
                  </span>

                  <p>
                    {post.date}
                    <span>
                      <FaUser />
                    </span>
                  </p>

                  <p>
                    {post.responsable}
                    <span>
                      <FaComment />
                    </span>
                  </p>

                  <p>{post.totalComment}</p>
                </article>
              </div>

              <S.TextPost className="text-post">
                <h1>{post.title}</h1>
                <p>{post.description}</p>
              </S.TextPost>
            </S.Bloco>
          ))}
        </S.Blocos>
      </S.ContainerBlocos>
    </S.ContainerCardPosts>
  );
};

export default CardPosts;
