import React, { useMemo, useState, useEffect} from 'react';
import { useTable } from 'react-table';
import MerakiAPI from '../../Modules/MerakiAPI/MerakiAPI';
import DeviceStatus from '../../Modules/MerakiAPI/Devices/DeviceStatus';
import './ResultsTable.css';

export function ResultsTable() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<DeviceStatus>>([]);  

  useEffect(() => {
    setLoading(true);
    async function getData(){
      var api:MerakiAPI = new MerakiAPI();
      var devices = await api.getDeviceStatusOrgWide();
      if (devices) {
        setData(devices);
        setLoading(false);
      }
    }
    getData();
  }, []);

  const columns = useMemo(
    () => [     
      {
        Header: 'Network ID',
        accessor: 'networkId' as const,
      },
      {
        Header: 'Device Name',
        accessor: 'name' as const,
      },
      {
        Header: 'Serial #',
        accessor: 'serial' as const,
      },
      {
        Header: 'Status',
        accessor: 'status' as const,
      },
      {
        Header: 'Last Reported At',
        accessor: 'lastReportedAt' as const,
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({columns, data})

  return (
    <div>
      <p className="resultsTitle">Device Status Report</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        // apply the table props
        <table className="resultsTable" {...getTableProps()}>
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()}>
                        {
                          // Render the header
                          column.render('Header')
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              cell.render('Cell')
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      )}
    </div>
  );
}

