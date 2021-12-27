import React ,{useRef,useState}from 'react';
import { Dimensions ,View} from 'react-native';
import { Tab, TabContainer, TabTitle, Wrapper, ListsContainer, ListItem, ItemImage,Description,ItemTitle, ItemSubtitle } from './styles';
import {destaques,lojas,jogos,tv,musica} from './data'

const windowWidth = Dimensions.get('window').width;

export default function StoreList(params) {
    const [dados,setDados] = useState(destaques)
    const [activeDestaque,setActiveDestaque] = useState(true)
    const [activeLojas,setActiveLojas] = useState(false)
    const [activeTv,setActiveTv] = useState(false)
    const [activeJogos,setActiveJogos] = useState(false)
    const [activeMusica,setActiveMusica] = useState(false)

    const tabColorChange = (title) =>{
        switch(title){
            case 'Destaques':
                setActiveDestaque(true)
                setActiveLojas(false)
                setActiveTv(false)
                setActiveJogos(false)
                setActiveMusica(false)
                setDados(destaques)
                break;
            case 'Lojas':
                setActiveDestaque(false)
                setActiveLojas(true)
                setActiveTv(false)
                setActiveJogos(false)
                setActiveMusica(false)
                setDados(lojas)
                break;
            case 'Tv':
                setActiveDestaque(false)
                setActiveLojas(false)
                setActiveTv(true)
                setActiveJogos(false)
                setActiveMusica(false)
                setDados(tv)
                break;
            case 'Jogos':
                setActiveDestaque(false)
                setActiveLojas(false)
                setActiveTv(false)
                setActiveJogos(true)
                setActiveMusica(false)
                setDados(jogos)
                break;
            case 'Musica':
                setActiveDestaque(false)
                setActiveLojas(false)
                setActiveTv(false)
                setActiveJogos(false)
                setActiveMusica(true)
                setDados(musica)
                break;
        }   
    }
    const scrollRef = useRef()

    const activeTab = (position,title) =>{
        tabColorChange(title)
        scrollRef.current.scrollTo({
            x : position,
            animated:true
    }) 
    }
    

    const tabPositions =
    {
        destaques : 0,
        lojas: 0,
        tv: windowWidth/10,
        jogos: windowWidth,
        musica: windowWidth
    };


    return(

        <Wrapper>
            <TabContainer 
            ref ={scrollRef}
            horizontal 
            showsHorizontalScrollIndicator= {false}
            onLayout = {(event) => console.log(event.nativeEvent.layout)}
             >
                <Tab onPress ={() => activeTab(tabPositions.destaques,'Destaques')}>
                    <TabTitle active= {activeDestaque}>Destaques</TabTitle>
                </Tab>

                <Tab onPress ={() => activeTab(tabPositions.lojas,'Lojas')}>
                    <TabTitle active= {activeLojas}>Lojas</TabTitle>
                </Tab>

                <Tab onPress ={() => activeTab(tabPositions.tv,'Tv')} >
                    <TabTitle active= {activeTv}>TV por assinatura</TabTitle>
                </Tab>

                <Tab onPress ={() => activeTab(tabPositions.jogos,'Jogos')}>
                    <TabTitle active= {activeJogos}>Jogos</TabTitle>
                </Tab>
                
                <Tab onPress ={() => activeTab(tabPositions.musica,'Musica')}>
                    <TabTitle active= {activeMusica}>Música</TabTitle>
                </Tab>
            </TabContainer>
            <ListsContainer>
                {dados.map((item)=>(
                <ListItem key = {item.id}>
                    <ItemImage bgcolor = {item.bgcolor}/>
                    <Description>
                        <ItemTitle>{item.title}</ItemTitle>
                        <ItemSubtitle>{item.subtitle}</ItemSubtitle>
                    </Description>
                </ListItem>
                ))}
                
            </ListsContainer>
        </Wrapper>
    )
};
