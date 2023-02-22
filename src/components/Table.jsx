import React from "react"
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination } from "react-table"

import GlobalFilter from "./GlobalFilter"
import Pagination from "./Pagination"
import { SortDownIcon, SortUpIcon, SortIcon } from "./Icons/Icons"

const Table = ({ columns, data }) => {
	const { 
		getTableProps, 
		getTableBodyProps, 
		headerGroups, 
		rows, 
		prepareRow,

		page, 
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		
		state, 
		preGlobalFilteredRows, 
		setGlobalFilter 
	} = useTable({ columns, data }, useFilters, useGlobalFilter, useSortBy, usePagination)

    return (
		<>
			<div className="flex gap-x-2">
				<GlobalFilter
					preGlobalFilteredRows={preGlobalFilteredRows}
					globalFilter={state.globalFilter}
					setGlobalFilter={setGlobalFilter}
				/>


				{headerGroups.map((headerGroup) => headerGroup.headers.map((column) => column.Filter ? (
					<div key={column.id}>
						{column.render("Filter")}
					</div>
				) : (null)))}
			</div>

			<div className="mt-2 flex flex-col">
        		<div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          			<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            			<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									{headerGroups.map((headerGroup) => (
										<tr {...headerGroup.getHeaderGroupProps()}>
											{headerGroup.headers.map(column => (
												<th scope="col" className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...column.getHeaderProps(column.getSortByToggleProps())}>
													<div className="flex items-center justify-between">
														{column.render("Header")}
														<span>
															{column.isSorted ? column.isSortedDesc ?  (
																<SortDownIcon className="w-4 h-4 text-gray-400" />
															) : (
																<SortUpIcon className="w-4 h-4 text-gray-400" />
															) : (
																<SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
															)}
														</span>
													</div>
												</th>
											))}
										</tr>
									))}
								</thead>
								<tbody className="bg-white divide-y divide-gray-200" {...getTableBodyProps()}>
									{page.map((row, i) => {
										prepareRow(row)

										return (
											<tr {...row.getRowProps()}>
												{row.cells.map((cell) => (
													<td className="px-6 py-4 whitespace-nowrap" role="cell" {...cell.getCellProps()}>
														{cell.column.Cell.name === "defaultRenderer" ? (
															<div className="text-sm text-gray-500">
																{cell.render("Cell")}
															</div>
														) : (
															cell.render("Cell")
														)}
													</td>
												))}
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
          			</div>
        		</div>
      		</div>

			<Pagination
				state={state}
				canPreviousPage={canPreviousPage}
				canNextPage={canNextPage}
				pageOptions={pageOptions}
				pageCount={pageCount}
				gotoPage={gotoPage}
				nextPage={nextPage}
				previousPage={previousPage}
				setPageSize={setPageSize}
			/>
		</>
    )
}

export default Table
