import React from "react";

import "./chart.scss";

import {
    VictoryLabel,
    VictoryContainer,
    VictoryPie
} from "victory";
import axios from "axios";
import {API_URI, userId} from "../../utils/keys";
import {useEffect, useState} from "react";

const CounterWidgetOne = () => {
    const [getHistory, setGetHistory] = useState();
    const getHistoryFetch = async () => {
        try {
            const response = await axios(`${API_URI}/activityInvite/singleHistory`,
                {params:{id:userId,activity_id:userId}});
            setGetHistory(response.data);
        } catch (err) {}
    };


    useEffect(()=> {
        getHistoryFetch();
    }, [0])


    return (
        <>
            <div className="invite_count_block">Total Sent
                <span className="invite_all_count">
                       {getHistory?.all}
                </span>
            </div>

    <div className="pie_charts_section">
        <div className="pie_charts_slice">
        <VictoryContainer width={200} height={150}>
            <VictoryPie
                padAngle={0}
                // used to hide labels
                labelComponent={<span/>}
                innerRadius={50}
                radius={60}
                width={200} height={150}
                data={[{'key': "", 'y': getHistory?.all}, {'key': "", 'y': (100-getHistory?.reject + getHistory?.pending)} ]}
                colorScale={["#19B3A6", "#EEEEEE" ]}
                standalone={false}
            />
            <VictoryLabel
                textAnchor="middle"
                style={{ fontSize: 20 }}
                x={150} y={100}
            />
        </VictoryContainer>
            <span className="invite_all_count">{getHistory?.accept}</span>
            <span>Accepted</span>
        </div>

        {/*two*/}
        <div className="pie_charts_slice">
        <VictoryContainer width={200} height={150}>
            <VictoryPie
                padAngle={0}
                // used to hide labels
                labelComponent={<span/>}
                innerRadius={50}
                radius={60}
                width={200} height={150}
                data={[{'key': "", 'y': getHistory?.all}, {'key': "", 'y': (100-getHistory?.accept + getHistory?.pending)} ]}
                colorScale={["#19B3A6", "#EEEEEE" ]}
                standalone={false}
            />
            <VictoryLabel
                textAnchor="middle"
                style={{ fontSize: 20 }}
                x={150} y={100}
            />
        </VictoryContainer>
            <span className="invite_all_count">{getHistory?.reject}</span>
            <span>Declined</span>
        </div>

        {/*three*/}

        <div className="pie_charts_slice">
        <VictoryContainer width={200} height={150}>
            <VictoryPie
                padAngle={0}
                // used to hide labels
                labelComponent={<span/>}
                innerRadius={50}
                radius={60}
                width={200} height={150}
                data={[{'key': "", 'y': getHistory?.all}, {'key': "", 'y': (100-getHistory?.reject + getHistory?.accept)} ]}
                colorScale={["#19B3A6", "#EEEEEE" ]}
                standalone={false}
            />
            <VictoryLabel
                textAnchor="middle"
                style={{ fontSize: 20 }}
                x={150} y={100}
            />
        </VictoryContainer>
            <span className="invite_all_count">{getHistory?.reject}</span>
            <span>Pending</span>
        </div>
    </div>
        </>
    );
};

export default CounterWidgetOne