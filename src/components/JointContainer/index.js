import React, {useEffect, useRef} from "react";
import {dia, shapes} from "jointjs";

const JointContainer = () => {
    const canvas = useRef(null);

    useEffect(() => {
        const graph = new dia.Graph();

        const paper = new dia.Paper({
            model: graph,
            background: {
                color: '#F8F9FA',
            },
            width: 800,
            height: 600,
            frozen: true,
            async: true,
            gridSize: 10,
            drawGrid: true
        });


        canvas.current.appendChild(paper.el);

        const rect = new shapes.standard.Rectangle({
            position: {x: 100, y: 100},
            size: {width: 100, height: 50},
            attrs: {
                label: {
                    text: 'Hello World'
                }
            }
        });

        const rect2 = rect.clone();
        rect2.position(600, 450);
        rect2.attr('label/text', 'Bye World');

        const link = new shapes.standard.Link({
            source: rect,
            target: rect2
        })

        graph.addCell([rect, rect2, link]);
        paper.unfreeze();
    });

    return (
        <div ref={canvas}/>
    );

}

export default JointContainer;