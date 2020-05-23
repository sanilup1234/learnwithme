import React from "react"

class Graph extends React.Component
{
    constructor(props)
    {
        super(props);
        const { nodes, edges, dimensions } = this.props.data;
        const { baseWidth, baseHeight, nodeRadius, arrowGap, nodeWeightGap, edgeWeightGap } = dimensions;

    }
}
export default Graph