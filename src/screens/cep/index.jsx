import { use, useState } from "react";
import { View, TextInput, Pressable, Text } from 'react-native';
import axios from "axios";


// const data = {
//     cep: '01001-000',
//     logradouro: 'Praça da Sé',
//     complemento: 'lado ímpar',
//     unidade: '',
//     bairro: 'Sé',
//     localidade: 'São Paulo',
//     uf: 'SP',
//     estado: 'São Paulo',
//     regiao: 'Sudeste',
//     ibge: '3550308',
//     gia: '1004',
//     ddd: '11',
//     siafi: '7107',
// };


export default function Cep() {
    const [cep, setCep] = useState('')
    const [data, setData] = useState(null)


    function buscaCep() {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log("Erro: ", err)
        })
    }


    return (
        <View>
            <TextInput 
                placeholder="Digite o seu cep" 
                keyboardType="numeric" 
                onChangeText={setCep} 
                value={cep} 
            />

            <Pressable onPress={buscaCep}>
                <Text>Buscar CEP</Text>
            </Pressable>

            {
                data && <Text>{data.logradouro}</Text>
            }
        </View>
    );
}