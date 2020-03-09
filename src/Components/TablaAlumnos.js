import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: 'Fecha',
        field: 'fecha',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Descripcion',
        field: 'desc',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Puntos',
        field: 'puntos',
        sort: 'asc',
        width: 200
      },
    ],
    rows: [
      {
        fecha: '03/03/20',
        desc: 'Otras acticvidades',
        puntos: '2',
       
      },
      {
        fecha: '03/03/20',
        desc: 'Otras acticvidades',
        puntos: '2',
       
      },
      {
        fecha: '03/03/20',
        desc: 'Otras acticvidades',
        puntos: '2',
       
      },
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
    />
  );
}

export default DatatablePage;