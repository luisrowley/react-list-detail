import React from 'react';
import { useParams } from 'react-router-dom';
import './detail-view.css';

const DetailView: React.FC<any> = (props: any) => {

  const { id } = useParams();

  return (
    <>
      <main>
        <h2>Welcome to the details, {id}!</h2>
      </main>
    </>
  );
}

export default DetailView;
