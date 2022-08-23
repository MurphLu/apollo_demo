import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';

import { useAuthors, useDeleteAuthor, useCreateAuthor } from '../../hooks/useAuthors'

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const AuthorList = () => {
  const [deleteAuthor] = useDeleteAuthor();
  const { loading, data, error } = useAuthors();

  useEffect(()=>{}, [loading, data, error])

  if (loading) { return <Box> loading...</Box>}
  if (error) { return <Box> error occured ..... </Box>}
  console.log(data)
  const { authors } = data;

  return <Box
    sx={{
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul">
      {authors.map((author) => {
        let icon;
        return (
          <ListItem key={author.id}>
            <Chip
              icon={icon}
              label={author.name}
              onDelete={(e)=>{deleteAuthor({variables: {id: author.id}})}}
            />
          </ListItem>
        );
      })}
  </Box>
}

const AddAuthor = () => {
  var [authorName, setAuthorName] = useState("");
  var [adding, setAdding] = useState(false);
  const [createAuthor, { data, loading, error} ] = useCreateAuthor();

  useEffect(()=>{
    if (!(data===undefined && loading===false)) {
      if(loading){
        setAdding(true);
      }
      if(data) {
        console.log(data)
        setAdding(false);
        setAuthorName("");
      }
      if(error) {
        setAdding(false)
      }
    }
  }, [data, loading, error])


  return (<Box sx={{
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    p: 0.5,
    m: 0,
  }}>
  <TextField id="authorNameAdd" label="AuthorName" variant="outlined" size="small" onChange={event => setAuthorName(event.target.value)} value={authorName}/>
  <Box sx={{width: 50 }}></Box>
  <Button variant="contained"
  disabled={adding}
  onClick={e => {
    createAuthor({ variables: {author: {name: authorName}}})
  }}>addNewTag</Button>
</Box>);
}

export default function Authors() {
  return <Container>
    <AuthorList />
    <Box sx={{
      height: 10
      }}>
    </Box>
    <AddAuthor />
  </Container>
}
