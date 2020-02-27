import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  background-color: yellow;
  padding: 30px;
`;

const Title = styled.h1`
  color: green;
`;

const NewsItem = styled.a`
  background-color: ${({backgroundColor}) => backgroundColor || "gray" };
  padding: 20px;
  display: block;
  ${({noBorder}) => {
    if (!noBorder) {
      return "border-bottom: 1px solid black;";
    }
  }}
`;
const NewsItemTitle = styled.h4`
  margin: 0;
  padding: 0;
`;
const NewsItemDate = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

const News = ({
  label,
  name
}) => {
  const [news, setNews] = useState([
    {
      title: "Judul Artikel",
      date: "24 Jam 2020",
    },
    {
      title: "Judul Artikel",
      date: "24 Jam 2020",
    },
  ]);

  useEffect(()=> {
    fetchNewsAsync();
  }, []);

  const fetchNewsAsync = async () => {
    try {
      const response = await axios.get('news-json.php');
      const {data,status} = response;

      if(status === 200)
        setNews(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  
  return (
    <Wrapper>
      <Title>List Item with Functional State (React Hooks)</Title>
      {news.map((item, index) => (
        <NewsItem key={index}>
          <NewsItemTitle>{item.title}</NewsItemTitle>
          <NewsItemDate>{item.date}</NewsItemDate>
        </NewsItem>
      ))}
    </Wrapper>
  )
};

export default News;
