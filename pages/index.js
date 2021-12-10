import React, {useState, useEffect} from 'react';
import MainBanner from '@/components/Index/MainBanner';
import TopCourses from '@/components/Index/TopCourses';
import axios from 'axios';
import baseUrl from '@/utils/baseUrl';
import chatBot from '@/utils/chatBot';

const Index = ({courses}) => {
  useEffect (() => {
    chatBot ();
  });

  return (
    <React.Fragment>
      <MainBanner />
      <TopCourses courses={courses} />
    </React.Fragment>
  );
};

Index.getInitialProps = async () => {
  const url = `${baseUrl}/api/v1/courses/homepage-courses`;
  const response = await axios.get (url);
  return response.data;
};

export default Index;
