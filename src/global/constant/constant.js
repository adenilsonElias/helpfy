import moment from 'moment';

export const color1 = 'rgb(84, 76, 126)'
export const color2 = 'rgb(255, 255, 255)'
export const color3 = 'rgb(84, 76, 100)'
export const color4 = 'rgb(120, 120, 120)'

export const fontTitle = 'shelter'

export const styleTitle = {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: fontTitle,
    textShadowColor: color2,
    textShadowOffset: { width: 1, height: 0 },
    textShadowRadius: 10
}

export const borderRadius = 5

export const categorys = [{
    id: Math.random(),
    image: require('../../assets/imgs/mao.png'),
    title: 'Brinquedos'
},{
    id: Math.random(),
    image: require('../../assets/imgs/mao.png'),
    title: 'Calçados'
},{
    id: Math.random(),
    image: require('../../assets/imgs/mao.png'),
    title: 'Eletrodomésticos'
},{
    id: Math.random(),
    image: require('../../assets/imgs/mao.png'),
    title: 'Higiene Pessoal'
},{
    id: Math.random(),
    image: require('../../assets/imgs/mao.png'),
    title: 'Livros'
},{
    id: Math.random(),
    image: require('../../assets/imgs/mao.png'),
    title: 'Material de Construção'
},{
    id: Math.random(),
    image: require('../../assets/imgs/mao.png'),
    title: 'Material de Limpeza'
},{
    id: Math.random(),
    image: require('../../assets/imgs/mao.png'),
    title: 'Material Escolar'
},{
    id: Math.random(),
    image: require('../../assets/imgs/mao.png'),
    title: 'Móveis'
},{
    id: Math.random(),
    image: require('../../assets/imgs/mao.png'),
    title: 'Roupas'
}]

export const converTime = () => {
    moment.updateLocale('en', {
        relativeTime : {
            future: "em %s",
            past: "%s atrás",
            s: 'alguns segundos',
            ss: '%d segundos',
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            w: "uma semana",
            ww: "%d semanas",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        }
    });
}