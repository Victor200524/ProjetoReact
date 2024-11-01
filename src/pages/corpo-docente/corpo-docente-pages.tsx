import { useEffect, useState } from "react"
import { CorpoDocente } from "../../entities/corpo-docente";
import { CardItem } from "./components/card-item/card-item";
import { MainWrapper, ProfessorWrapper, Title, TitleWrapper } from "./corpo-docente-page.styles";

export const CorpoDocentePages = () =>{
    const [list,setList] = useState<CorpoDocente[]>([]);

    useEffect(()=>{
        fetch("https://infoeste-2024-api.vercel.app",{method:"get"})
        .then((response) => response.json())
        .then((value: { corpoDocente: CorpoDocente[]})=>{
            setList(value.corpoDocente);
        });
    },[]);

    const renderProfessorList = () =>
        list
            .sort((a,b) => {
                if(a.nome > b.nome)
                    return 1;
                if(a.nome < b.nome)
                    return -1;
                return 0;
        })
        .map((item) => {
            <CardItem
                professor = {{
                    email: item.email,
                    foto: item.graduacao,
                    nome: item.nome,
                    titulacao: item.titulacao
                }}
            />
        });

    return(
        <MainWrapper>
            <TitleWrapper>
                <Title>{"CORPO DOSCENTE"}</Title>
            </TitleWrapper>
            <ProfessorWrapper>{renderProfessorList()}</ProfessorWrapper>
        </MainWrapper>
    );
    

}