import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Banner } from "../../components/Banner";
import { CardList } from "../../components/CardList";
import { Container } from "../../components/Container";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

interface Option {
    id: number;
    text: string;
    votes: number;
}

interface Poll {
    question: string;
    options: Option[];
}

export const AllPolls = ({ navigation }) => {
    const [poll, setPoll] = useState<Poll>({
        question: "",
        options: []
    });
    const [selectedOption, setSelectedOption] = useState(1);
    const [radioProps, setRadioProps] = useState({})

    const votar = async (value: any) => {
        poll.options.map(item => {
            if (item.id === value) {
                item.votes += 1;
            }
        })
        const strinfiedPoll = JSON.stringify(poll)
        await AsyncStorage.setItem("poll", strinfiedPoll)
        console.log(poll)
        setRadioProps(poll.options.map(item => {
            return {
                label: `${item.text} Votos: ${item.votes}`,
                value: item.id
            }
        }))
    }

    const apagar = async () => {
        console.log("apagando")
        const defaultPoll = {
            question: "",
            options: []
        }
        const strinfiedPoll = JSON.stringify(defaultPoll)
        await AsyncStorage.setItem("poll", strinfiedPoll)
        alert("Enquete apagada!")
        setPoll(defaultPoll)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const poll = await AsyncStorage.getItem("poll")
                if (poll !== null) {
                    const jsonParsedPoll = JSON.parse(poll)
                    if (jsonParsedPoll.options === undefined) {
                        const defaultPoll = {
                            question: "",
                            options: []
                        }
                        const strinfiedPoll = JSON.stringify(defaultPoll)
                        await AsyncStorage.setItem("poll", strinfiedPoll)
                    } else {
                        setPoll(jsonParsedPoll)
                        setRadioProps(jsonParsedPoll.options.map(item => {
                            return {
                                label: `${item.text} Votos: ${item.votes}`,
                                value: item.id
                            }
                        }))
                    }
                }
            } catch (error) {
                alert("Algo de errado não está certo")
            }
        };

        fetchData();
    }, []);

    return (
        <GestureHandlerRootView>
            <Container align="center" justify="center">
                <Text>{poll.question}</Text>
                {
                    poll.options.length === 0 ?
                        <Text>Não há nenhuma enquete cadastrada</Text>
                        :
                        <>

                            <RadioForm
                                radio_props={radioProps}
                                initial={0}
                                onPress={(value) => setSelectedOption(value)}
                            />

                            <Button
                                title="Votar"
                                onPress={() => votar(selectedOption)}
                                color={'red'}
                            />

                            <Button
                                title="Apagar enquete"
                                onPress={() => apagar()}
                                color={'red'}
                            />
                        </>
                }


            </Container>
        </GestureHandlerRootView>
    );
};
