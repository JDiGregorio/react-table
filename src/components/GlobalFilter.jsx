import React from "react"
import { useAsyncDebounce } from "react-table"

const GlobalFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
	const count = preGlobalFilteredRows.length
	const [value, setValue] = React.useState(globalFilter)
	
	const onChange = useAsyncDebounce(value => {
	  	setGlobalFilter(value || undefined)
	}, 200)
  
	return (
		<label className="flex gap-x-2 items-baseline">
			<span className="text-gray-700">
				Search:
			</span>

			<input type="text" value={value || ""} onChange={e => { setValue(e.target.value); onChange(e.target.value); }} placeholder="Search..." className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
		</label>
	)
}

export default GlobalFilter