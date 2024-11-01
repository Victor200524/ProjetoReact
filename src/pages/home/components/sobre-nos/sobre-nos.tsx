import { CardType } from "./type"
import { SubTitle, Title, Wrapper,Card,Message } from "./sobre-nos.styles"
import { CardContent } from "./card-content"


export const SobreNos = ()=>{
    const cards: CardType[] = CardContent()
    return (
        <Wrapper>
            <Title>Sobre nós</Title>
            <SubTitle>console.log('uepa')</SubTitle>
            {cards.map((card)=>(
                <Card key={card.id}>
                    <Message>{card.message}</Message>
                </Card>
            ))}
        
        </Wrapper>
    )
}