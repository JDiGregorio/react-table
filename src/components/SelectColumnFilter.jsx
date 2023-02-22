import React from "react"

const SelectColumnFilter = ({ column: { filterValue, setFilter, preFilteredRows, id, render }}) => {
    const options = React.useMemo(() => {
        const options = new Set()

        preFilteredRows.forEach((row) => {
            options.add(row.values[id])
        })

        return [
			...options.values()
		]
    }, [id, preFilteredRows])

    return (
        <label className="flex gap-x-2 items-baseline">
            <span className="flex text-gray-700">
                {render("Header")}
            </span>

            <select name={id} id={id} value={filterValue} onChange={(e) => { setFilter(e.target.value || undefined) }} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option value="">All</option>
                {options.map((option, i) => (
                    <option key={i} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    )
}

export default SelectColumnFilter