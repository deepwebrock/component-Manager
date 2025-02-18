import React, { useState } from "react";

const Show = () => {
    const [rows, setRows] = useState([
        { id: 1, componentName: "", GMDSCode: "", liveQty: "", alertQty: "", employeeName: "", editable: true },
        { id: 2, componentName: "", GMDSCode: "", liveQty: "", alertQty: "", employeeName: "", editable: true },
        { id: 3, componentName: "", GMDSCode: "", liveQty: "", alertQty: "", employeeName: "", editable: true },
        { id: 4, componentName: "", GMDSCode: "", liveQty: "", alertQty: "", employeeName: "", editable: true },
        { id: 5, componentName: "", GMDSCode: "", liveQty: "", alertQty: "", employeeName: "", editable: true },
    ]);

    const addNewRow = () => {
        const newRow = {
            id: rows.length + 1,
            componentName: "",
            GMDSCode: "",
            liveQty: "",
            alertQty: "",
            employeeName: "",
            editable: true
        };
        setRows([...rows, newRow]);
    };

    const deleteRow = (id) => {
        if (window.confirm("Are you sure you want to delete this row?")) {
            setRows((prevRows) => prevRows.filter(row => row.id !== id));
        }
    };

    const handleInputChange = (id, field, value) => {
        setRows(prevRows => prevRows.map(row => {
            if (row.id === id) {
                if (field === "alertQty" && Number(value) > Number(row.liveQty)) {
                    alert("Alert quantity cannot be greater than live quantity.");
                    return row;
                }
                return { ...row, [field]: value };
            }
            return row;
        }));
    };

    const handleEnterClick = (id) => {
        setRows(prevRows => prevRows.map(row => {
            if (row.id === id) {
                if (!row.componentName || !row.GMDSCode || !row.liveQty || !row.alertQty || !row.employeeName) {
                    alert("Please fill all fields before entering.");
                    return row;
                }
                return { ...row, editable: false };
            }
            return row;
        }));
    };

    const handleEditClick = (id) => {
        setRows(prevRows => prevRows.map(row => row.id === id ? { ...row, editable: true } : row));
    };

    return (
        <section className="new-component-entry mb-20 mt-20 ml-10 mr-10 min-h-96">
            <h2 className="font-bold text-2xl mb-5 ml-10">New Component Entry Space</h2>
            <div className="search-bar text-center ml-10 mr-10">
                <input className="p-1 w-full border rounded-lg border-black" type="text" id="search" placeholder="Search" />
            </div>
            <div className="button text-center m-5">
                <button className="border rounded-xl p-2 pl-5 pr-5 bg-blue-700 text-white" onClick={addNewRow}>
                    Add New Component
                </button>
            </div>
            <div className="table-container flex justify-center overflow-x-auto border border-gray-400 max-h-[400px] w-full">
                <div className="overflow-y-auto w-full max-h-[300px]">
                    <table className="border border-solid border-1 p-3 min-w-full">
                        <thead className="border border-solid border-1 p-3 bg-gray-200">
                            <tr>
                                <th className="border border-solid border-1 p-3">S.No.</th>
                                <th className="border border-solid border-1 p-3">Component Name</th>
                                <th className="border border-solid border-1 p-3">GMDS Code</th>
                                <th className="border border-solid border-1 p-3">Live Qty.</th>
                                <th className="border border-solid border-1 p-3">Alert Qty.</th>
                                <th className="border border-solid border-1 p-3">Employee Name</th>
                                <th className="border border-solid border-1 p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td className="border border-solid border-1 pl-3 pr-3 pt-2 pb-2">{index + 1}</td>
                                    <td className="border border-solid border-1 pl-3 pr-3 pt-2 pb-2">
                                        <input 
                                            className="border pl-2 pt-0.5 pb-0.5 pr-2 border-black" 
                                            type="text" 
                                            placeholder="Enter Component Name" 
                                            value={row.componentName} 
                                            onChange={(e) => handleInputChange(row.id, "componentName", e.target.value)} 
                                            disabled={!row.editable}
                                        />
                                    </td>
                                    <td className="border border-solid border-1 pl-3 pr-3 pt-2 pb-2">
                                        <input 
                                            className="border pl-2 pt-0.5 pb-0.5 pr-2 border-black" 
                                            type="text" 
                                            placeholder="Enter GMDSCode" 
                                            value={row.GMDSCode} 
                                            onChange={(e) => handleInputChange(row.id, "GMDSCode", e.target.value)} 
                                            disabled={!row.editable}
                                        />
                                    </td>
                                    <td className="border border-solid border-1 pl-3 pr-3 pt-2 pb-2">
                                        <input 
                                            className="border pl-2 pt-0.5 pb-0.5 pr-2 border-black" 
                                            type="number" 
                                            placeholder="Enter Live Qty." 
                                            value={row.liveQty} 
                                            onChange={(e) => handleInputChange(row.id, "liveQty", e.target.value)} 
                                            disabled={!row.editable}
                                        />
                                    </td>
                                    <td className="border border-solid border-1 pl-3 pr-3 pt-2 pb-2">
                                        <input 
                                            className="border pl-2 pt-0.5 pb-0.5 pr-2 border-black" 
                                            type="number" 
                                            placeholder="Enter Alert Qty." 
                                            value={row.alertQty} 
                                            onChange={(e) => handleInputChange(row.id, "alertQty", e.target.value)} 
                                            disabled={!row.editable}
                                        />
                                    </td>
                                    <td className="border border-solid border-1 pl-3 pr-3 pt-2 pb-2">
                                        <input 
                                            className="border pl-2 pt-0.5 pb-0.5 pr-2 border-black" 
                                            type="text" 
                                            placeholder="Enter Employee Name" 
                                            value={row.employeeName} 
                                            onChange={(e) => handleInputChange(row.id, "employeeName", e.target.value)} 
                                            disabled={!row.editable}
                                        />
                                    </td>
                                    <td className="border border-solid border-1 pl-3 pr-3 pt-2 pb-2">
                                        <button className={`text-white mr-2 pl-2 pr-2 pt-0.5 pb-0.5 border rounded-lg ${row.editable ? "bg-green-600" : "bg-yellow-500"}`} onClick={() => row.editable ? handleEnterClick(row.id) : handleEditClick(row.id)}>{row.editable ? "Enter" : "Edit"}</button>
                                        <button className="text-white pl-2 pr-2 pt-0.5 pb-0.5 border rounded-lg bg-red-600" onClick={() => deleteRow(row.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Show;
