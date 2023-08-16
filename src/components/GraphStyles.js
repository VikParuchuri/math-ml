export default [
    {
      selector: 'node',
      style: {
        'width': 140,
        'height': 80,
        'font-size': 15,
        'font-weight': 'bold',
        'content': `data(label)`,
        'text-valign': 'center',
        'text-wrap': 'wrap',
        'text-max-width': 120,
        'background-color': '#e0e7ff', //indigo-100
        'border-color': '#94a3b8', //slate-400
        'border-width': '8',
        'shape': 'roundrectangle',
        'color': '#020617' //slate-950
      }
    },
    {
        selector: 'node[type = "Niche"]',
        style: {
          'background-color': '#eef2ff' //indigo-50
        }
    },
    {
      selector: 'node[type = "Useful"]',
      style: {
        'background-color': '#c7d2fe', //indigo-200
        'width': 150,
        'height': 100,
        'text-max-width': 130,
        'font-size': '16',
      }
    },
    {
        selector: 'node[type = "Important"]',
        style: {
          'background-color': '#818cf8', //indigo-400
          'width': 160,
          'height': 110,
          'text-max-width': 140,
          'font-size': '18',
        }
    },
    {
      selector: 'node:selected',
      style: {
        'background-color': '#818cf8', //indigo-400
        color: 'white',
        'border-color': '#475569', //slate-600
        'line-color': '#475569', //slate-600
        'target-arrow-color': '#475569' //slate-600
      }
    },
    {
      selector: 'edge',
      style: {
        'curve-style': 'bezier',
        'color': '#64748b', //slate-500
        'text-background-color': '#ffffff',
        'text-background-opacity': '1',
        'text-background-padding': '3',
        'width': '6',
        'target-arrow-shape': 'triangle',
        'line-color': '#64748b', //slate-500
        'target-arrow-color': '#64748b', //slate-500
        'font-weight': 'bold'
      }
    },
    {
      selector: 'edge[importance = "UsefulFor"]',
      style: {
        'line-color': '#cbd5e1', //slate-300
        'target-arrow-color': '#cbd5e1', //slate-300
      }
    },
    {
      selector: 'edge[importance = "NeededFor"]',
      style: {
        'line-color': '#64748b', //slate-500
        'target-arrow-color': '#64748b', //slate-500
      }
    },
    {
      selector: 'edge.highlighted',
      style: {
        'line-color': '#fde68a', //amber-200
        'target-arrow-color': '#fde68a',//amber-200
        'content': `data(importance)`, 
        'arrow-scale': 3,
        'z-index-compare': 'manual',
        'z-index': 9999,
        'z-compound-depth': 'top'
      }
    },
    {
      selector: 'edge.label',
      style: {
        'line-color': 'orange',
        'target-arrow-color': 'orange'
      }
    }
  ]