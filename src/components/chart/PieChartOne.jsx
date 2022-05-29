import React from "react";
import ReactDOM from "react-dom";

import "./chart.scss";

import {
    VictoryLabel,
    VictoryTooltip,
    VictoryContainer,
    VictoryPie
} from "victory";

const CounterWidgetOne = () => {
    return (
        <>
            <div className="invite_count_block">Total Sent <span className="invite_all_count">15</span></div>

    <div className="pie_charts_section">
        <div className="pie_charts_slice">
        <VictoryContainer width={200} height={150}>
            <VictoryPie
                innerRadius={50}
                radius={60}
                labelComponent={<VictoryTooltip />}
                width="200"
                height="150"
                data={[
                    { x: 1, y: 80 }, { x: 2, y: 90 }
                ]}
                style={{
                    data: { fill: ({ datum }) => {
                            const color = datum.y > 30 ? "green" : "red";
                            return datum.x === 1 ? color : "gray";
                        }
                    }
                }}
                standalone={false}
            />
            <VictoryLabel
                textAnchor="middle"
                style={{ fontSize: 20 }}
                x={150} y={100}
            />
        </VictoryContainer>
            <span className="invite_all_count">30</span>
            <span>Accepted</span>
        </div>

        {/*two*/}
        <div className="pie_charts_slice">
        <VictoryContainer width={200} height={150}>
            <VictoryPie
                innerRadius={50}
                radius={60}
                labelComponent={<VictoryTooltip />}
                width="200"
                height="150"
                data={[
                    { x: 1, y: 120 }, { x: 2, y: 150 }
                ]}
                style={{
                    data: { fill: ({ datum }) => {
                            const color = datum.y > 30 ? "green" : "red";
                            return datum.x === 1 ? color : "gray";
                        }
                    }
                }}
                standalone={false}
            />
            <VictoryLabel
                textAnchor="middle"
                style={{ fontSize: 20 }}
                x={150} y={100}
            />
        </VictoryContainer>
            <span className="invite_all_count">3</span>
            <span>Declined</span>
        </div>

        {/*three*/}

        <div className="pie_charts_slice">
        <VictoryContainer width={200} height={150}>
            <VictoryPie
                innerRadius={50}
                radius={60}
                labelComponent={<VictoryTooltip />}
                width="200"
                height="150"
                data={[
                    { x: 1, y: 190 }, { x: 2, y: 300 }
                ]}
                style={{
                    data: { fill: ({ datum }) => {
                            const color = datum.y > 30 ? "green" : "red";
                            return datum.x === 1 ? color : "gray";
                        }
                    }
                }}
                standalone={false}
            />
            <VictoryLabel
                textAnchor="middle"
                style={{ fontSize: 20 }}
                x={150} y={100}
            />
        </VictoryContainer>
            <span className="invite_all_count">3</span>
            <span>Pending</span>
        </div>
    </div>
        </>
    );
};

export default CounterWidgetOne