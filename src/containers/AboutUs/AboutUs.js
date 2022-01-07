import React from 'react'
import {ContainerXS,W50} from "../../assets/styles";
import { Title,Text } from '../BannerAbout/style';
import { Aboutus,Ecommerce,Mission,Info ,Details} from './style';
import  missio  from '../../assets/images/missio.png';

 export default function AboutUs() {
     return(
        <Aboutus>
            <ContainerXS>
                <Ecommerce>
                    <W50>
                       <Title style={{width:"470px"}} >Зачем нашему рынку <br></br> <span>e-commerce?</span></Title>
                    </W50>
                    <W50>
                        <Text style={{width:"590px"}}>
                            Узбекистане 90% людей никогда не покупали онлайн, а  домашним интернетом пользуются всего 3 миллиона человек из  34-миллионного населения страны. Это – грустная статистика, которая никак не вяжется с электронной коммерцией. Наши соотечественники все так же ходят на базары, иногда в супермаркеты, покупая товары преимущественно крупных производителей, которые могут себе позволить оказаться на торговых полках.
                            <br></br>
                            <br></br>
                            <strong>Но так будет не всегда</strong>   
                            <br></br>
                            <br></br>
                            За последние 5 лет увеличение пропускной способности интернета, реформы в банковском секторе и пандемия коронавируса подтолкнули развитие электронной коммерции в стране, которая прежде не была с ней даже знакома. Появились многофункциональные платежные системы, цифровые банки и службы доставки, принимающие платежи онлайн. Все это создает условия для более динамичного развития бизнеса, которому больше не обязательно тратить огромные деньги на дистрибьюцию, чтобы потенциальные клиенты заметили и приобрели их товары
                            <br></br>
                            <br></br>
                            <strong>Достаточно быть онлайн</strong> 
                        </Text>
                    </W50>
                </Ecommerce>
            </ContainerXS>
            <Mission>
                <img src={missio} />
            </Mission>
            <ContainerXS>
                <Title>
                  Наша <span>миссия</span> 
                </Title>
                <Info>
                   Компания SmartDeals специализируется на разработке IT-продуктов для развития электронной коммерции в развивающихся странах. Avlo.shop – наш флагманский продукт, который создает равные возможности для продвижения бизнеса любого размера в интернете
                </Info>
                <Details  >
                На базе нашей платформы предприниматели могут самостоятельно создать интернет-магазин для своего бизнеса и начать продавать онлайн в первый же день. 
                 <br></br>
                 <br></br>   
                 В интернете границы несоразмерно шире, чем в оффлайне. Мы верим, что в ближайшем будущем интернет станет основным каналом продаж даже в Узбекистане. Мы хотим, чтобы бизнес поверил в силу электронной коммерции уже сегодня, чтобы завтра быть готовым к очередному витку развития нашего общества
                </Details>
            </ContainerXS>
        </Aboutus> 
     )
     
}
