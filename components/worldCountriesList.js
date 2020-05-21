import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWorldStatus} from "../actions";
import {Text, View} from 'react-native';
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory-native';

export default function WorldCountiesList() {
    const content = useSelector(state => state.WorldInfo); //this hook gives us redux store state
    const dispatch = useDispatch(); //this hook gives us dispatch method
    const data = [
        {x: 1, y: 13000},
        {x: 2, y: 16500},
        {x: 3, y: 14250},
        {x: 4, y: 19000}
    ];
    // const data = [
    //     ["Element", "Count", { role: "style" }],
    //     ["Cases", content.worldStatus.cases, "#b87333"], // RGB value
    //     ["Deaths", content.worldStatus.deaths, "silver"], // English color name
    //     ["Recovered", content.worldStatus.recovered, "gold"],
    //     // ["Tested", content.worldStatus.tested, "color: #e5e4e2"] // CSS-style declaration
    // ];
    useEffect(() => {
        dispatch(getWorldStatus());
    }, []);
    return (

        <View>
            <Text>Global stats</Text>
            <Text> {content.worldStatus.cases}</Text>
            <Text> {content.worldStatus.deaths}</Text>
            <VictoryChart>
                <VictoryBar
                    data={data}
                    // data accessor for x values
                    x="x"
                    // data accessor for y values
                    y="y"
                />
            </VictoryChart>
        </View>
    )
}
