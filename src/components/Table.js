import { Fragment } from "react";

function Table({ data, config, keyFn }) {

    // Render table header columns according to number of objects received in config array
    const renderedHeaders = config.map((column) => {
        if (column.header) {
            // Fragment component is used to wrap existing jsx expression
            // in order to provide key to a jsx component
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }
        return (
            <th key={column.label}>{column.label}</th>
        )
    })
    
    // Render data table row 
    const renderedRows = data.map((rowData) => {
        // Map over each object in config array to render each cell of table data row
        const renderedCells = config.map((column) => {
            return <td className="p-2" key={column.label}>{column.render(rowData)}</td>
        });

        return (
            <tr className="border-b" key={keyFn(rowData)}>
               {renderedCells} 
            </tr>
        );
    });


    
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;