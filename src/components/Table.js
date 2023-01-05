import { Fragment} from 'react'

const Table = ({ data, config, keyFn }) => {

  const renderHeaders = config.map((column) => {
    if(column.header){
      return (
        <Fragment key={column.label}>{column.header()}</Fragment>
      )
    }
    return (
      <th key={column.label}>{column.label}</th>
    )
  })

  const renderedRows = data.map(rowData => {
    const renderCells = config.map((column) => {
      return (
        <td key={column.label} className="p-2">
          {column.render(rowData)}
        </td>
      )
    })
    
    return(
      <tr className='border-b' key={keyFn(rowData)}>
        {renderCells}
      </tr>
    )
    
  })

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b2'>
          {renderHeaders}
        </tr>
      </thead>
      <tbody>
        {renderedRows}
      </tbody>
    </table>
  )
}

export default Table