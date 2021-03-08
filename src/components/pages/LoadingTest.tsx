import React, { ReactElement, useEffect, useState } from 'react';
import { Area, Loading } from '../shared/Loading';

interface Props {}

export const LoadingTest = ({}: Props): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<string>();

  // 데이터 불러오기 함수 호출
  useEffect(() => {
    getData(); 
  }, [])

  // 데이터 불러오기 함수
  function getData() {
    setTimeout(function(){
      setData('This is a loading area.');
      setIsLoading(false);
    }, 3000);
  }

  return (
    <Area>
      {/* 로딩 바 보여주기 */}
      {isLoading && <Loading>Loading ...</Loading>}

      {/* 데이터가 로딩되면 데이터 보여주기 */}
      {data && <section>{data}</section>}
    </Area>
  )
}
