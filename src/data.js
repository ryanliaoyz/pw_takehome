import React, {Component, useState, useEffect} from 'react';
import Papa, { parse } from 'papaparse';

import csvFile from '../src/data.csv';
import { Table, TableContainer, Tbody, Thead, Tr, Th, Td } from '@chakra-ui/react';

export default function Data() {
    
    const [ header, setHeader ] = useState([]);
    const [ parsedData, setParsedData] = useState([]);
    
    useEffect(() => {
        Papa.parse(csvFile, {
        download: true,
        // header: true,
        complete: function(res) {
            setHeader(res.data[0])
        }
        
    })
    Papa.parse(csvFile, {
        download: true,
        header: true,
        complete: function(res) {
            setParsedData(res.data)
        }
        
    });
    },[])
    
    console.log(parsedData)
    if (parsedData.length === 0 || header.length === 0) {
        return <h1>loading</h1>
    } else {
        return (
            <div className='dataTable'>
                
                <TableContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                {header.map((i) => {
                                    return <Th>{i}</Th>
                                })}
                            </Tr>
                            
                        </Thead>
                        <Tbody>
                                {parsedData?.map((i) => (
                                    <Tr>
                                        {header.map((j) => (
                                            <Th>{i[j]}</Th>
                                        ))}
                                    
                                    </Tr>
                                    
                                ))}

                            
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
    
    
}