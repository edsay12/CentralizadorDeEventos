import React, { useState } from "react";
import { Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Banner } from "../../components/Banner";
import { CardList } from "../../components/CardList";
import { Container } from "../../components/Container";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Option {
    id: number;
    text: string;
    votes: number;
}

export const CreatePoll = ({ navigation }) => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState<Option[]>([
        { id: 1, text: '', votes: 0 }, 
        { id: 2, text: '', votes: 0 }
    ]);

    const addOption = () => {
        const newOptionId = options.length + 1;
        setOptions([...options, { id: newOptionId, text: '', votes: 0 }]);
    };

    const handleOptionTextChange = (id: number, text: string) => {
        const updatedOptions = options.map(option => {
            if (option.id === id) {
                return { ...option, text };
            }
            return option;
        });
        setOptions(updatedOptions);
    };

    const validateFields = () => {
        if (question.trim() === "") {
            alert("Não pode deixar a pergunta vazia")
        }
        for (let option of options) {
            if (option.text.trim() == "") {
                alert("Não pode deixar nenhuma opção vazia")
            }
        }
    }

    const createPoll = async () => {
        try {
            validateFields()
            const enquete = JSON.stringify({
                question: question,
                options: options
            })
            await AsyncStorage.setItem('poll', enquete)
            setQuestion('')
            setOptions([{ id: 1, text: '', votes: 0 }, { id: 2, text: '', votes: 0 }])
            alert("Enquete criada!")
        } catch (e) {
            alert("Algo de errado não está certo")
        }
    };

    return (
        <GestureHandlerRootView>
            <Container align="center" justify="center">
                <TextInput
                    placeholder="Digite sua pergunta"
                    value={question}
                    onChangeText={text => setQuestion(text)}
                />

                {options.map(option => (
                    <TextInput
                        key={option.id}
                        placeholder="Digite uma opção"
                        value={option.text}
                        onChangeText={text => handleOptionTextChange(option.id, text)}
                    />
                ))}

                <Button title="Adicionar Opção" onPress={addOption} />

                <Button title="Criar Enquete" onPress={createPoll} />
            </Container>
        </GestureHandlerRootView>
    );
};
