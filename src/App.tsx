import React from "react"

import "./assets/css/style.css"

import AvatarCell from "./components/AvatarCell"
import StatusPill from "./components/StatusPill"
import SelectColumnFilter from './components/SelectColumnFilter'
import Table from "./components/Table"

import { getData } from './constants/data'


const App = () => {
	const columns = React.useMemo(() => [
		{
			Header: "Name",
			accessor: "name",
			Cell: AvatarCell,
			imgAccessor: "imgUrl",
			emailAccessor: "email"
		},
		{
			Header: "Age",
			accessor: "age"
		},
		{
			Header: "Title",
			accessor: "title"
		},
		{
			Header: "Status",
			accessor: "status",
			Cell: StatusPill
		},
		{
			Header: "Role",
			accessor: "role",
			Filter: SelectColumnFilter,
      		filter: 'includes'
		}
	], [])

	const data = React.useMemo(() => getData(), [])

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
			<main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
				<div className="">
					<h1 className="text-xl font-semibold">
						React Table + Tailwind CSS
					</h1>
				</div>
				<div className="mt-4">
					<Table columns={columns} data={data} />
				</div>
			</main>
		</div>
    )
}

export default App
