import * as S from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaCheckDouble, FaCheck } from "react-icons/fa";

const comments = [
  {
    id: 0,
    comment:
      "Muito Obrigado por essa grande aplicção, eu amo muito a beleza e o zuri-box tem contribuído muito ...",
    name: "Matuta Jorge",
  },
  {
    id: 1,
    comment:
      "Muito Obrigado por essa grande aplicção, eu amo muito a beleza e o zuri-box tem contribuído muito ...",
    name: "José Gonçalves",
  },
  {
    id: 2,
    comment:
      "Muito Obrigado por essa grande aplicção, eu amo muito a beleza e o zuri-box tem contribuído muito ...",
    name: "Margarida André",
  },
  {
    id: 3,
    comment:
      "Muito Obrigado por essa grande aplicção, eu amo muito a beleza e o zuri-box tem contribuído muito ...",
    name: "Ernesto Salias",
  },
];
export default function Slide() {
  return (
    <div>
      <Carousel showThumbs={false}>
        {comments.map((item) => (
          <S.Testimonial key={item.id}>
            <S.TestimonialEsquerdo>
              <p>
                <h2>
                  {" "}
                  <FaCheck color="#fff" />
                </h2>
                {item.comment}
                <br /> <br />
                <hr />
                <span>{item.name}</span>
              </p>
            </S.TestimonialEsquerdo>

            <S.TestimonialDireito>
              <p>
                <h2>
                  {" "}
                  <FaCheck color="#fff" />
                </h2>
                {item.comment}
                <br /> <br />
                <hr />
                <span>{item.name}</span>
              </p>
            </S.TestimonialDireito>
          </S.Testimonial>
        ))}
      </Carousel>
    </div>
  );
}
