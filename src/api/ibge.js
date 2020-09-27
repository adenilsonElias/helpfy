import axios from 'axios'

const STATESURL = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

export async function getStates(){
    let states = await axios.get(STATESURL);
    return states.data.map((state) => {
        return {"sigla" : state["sigla"], "nome" : state["nome"]}
    })
}

export async function getCities(sigla : String){
    let cities = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`)
    return cities.data.map((cities) => {
        return cities["nome"]
    })
}