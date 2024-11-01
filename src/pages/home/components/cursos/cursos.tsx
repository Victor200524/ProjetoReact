import { useState } from "react";
import { CursoWrapper,View, NomeCurso, TipoCurso, TiposWrapper, Title, Wrapper, Image} from "./cursos.styles";
import graduacao from "../../../../assets/images/graduacao.png"
import tecnologo from "../../../../assets/images/tec.png"
import pos from "../../../../assets/images/pos.png"

export const Cursos = () => {
  const [tipo, setTipo] = useState(0);
  console.log(tipo);

  return (
    <>
      <Title>Cursos</Title>
      <Wrapper>
        <TiposWrapper>
          <TipoCurso onClick={() => setTipo(0)}>Bacharelado</TipoCurso>
          <TipoCurso onClick={() => setTipo(1)}>Tecnólogo</TipoCurso>
          <TipoCurso onClick={() => setTipo(2)}>Pós-graduação</TipoCurso>
        </TiposWrapper>
        {
            tipo === 0 && (
                <CursoWrapper>
                    <Image src={graduacao}/>
                    <View>
                        <NomeCurso>Ciência da Computação</NomeCurso>
                        <NomeCurso>Sistemas da informação</NomeCurso>
                    </View>
                </CursoWrapper>
            )
        }
        {
            tipo === 1 && (
                <CursoWrapper>
                    <Image src={tecnologo}/>
                    <View>
                        <NomeCurso>Analise e Desenvolvimento de sistemas</NomeCurso>
                        <NomeCurso>Redes de computadores</NomeCurso>
                    </View>
                </CursoWrapper>
            )
        }
        {
            tipo === 2 && (
                <CursoWrapper>
                    <Image src={pos}/>
                    <View>
                        <NomeCurso>Data Science</NomeCurso>
                        <NomeCurso>Jogos Digitais</NomeCurso>
                    </View>
                </CursoWrapper>
            )
        }
      </Wrapper>
    </>
  );
};
