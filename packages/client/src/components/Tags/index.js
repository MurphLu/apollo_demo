import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';

import { useTags, useCreateTag, useDeleteTag } from '../../hooks/useTags'

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const AddTagComponent = () => {
  var [tagName, setTagName] = useState("");
  var [adding, setAdding] = useState(false);
  const [submitTag, { data, loading, error} ] = useCreateTag();

  useEffect(()=>{
    if (!(data===undefined && loading===false)) {
      if(loading){
        setAdding(true);
      }
      if(data) {
        console.log(data)
        setAdding(false);
        setTagName("");
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
  <TextField id="tagNameAdd" label="TagName" variant="outlined" size="small" onChange={event => setTagName(event.target.value)} value={tagName}/>
  <Box sx={{width: 50 }}></Box>
  <Button variant="contained"
  disabled={adding}
  onClick={e => {
    submitTag({ variables: {tag: {name: tagName}}})
  }}>addNewTag</Button>
</Box>);
}

const TagListComponent = () => {
  const [deleteTag] = useDeleteTag()

  const { loading, data, error} = useTags();

  useEffect(()=>{}, [loading, data, error])

  if(loading) return <span> loading... </span>
  if(error) return <span> error occured ... </span>
  const { tags } = data;
  console.log(data);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {tags.map((tag) => {
        let icon;

        return (
          <ListItem key={tag.id}>
            <Chip
              icon={icon}
              label={tag.name}
              onDelete={(e)=>{deleteTag({variables: {id: tag.id}})}}
            />
          </ListItem>
        );
      })}
    </Box>
  )
}

export default function Tags() {
  return (
    <Container>
      <TagListComponent/>
      <Box sx={{
        height: 20
      }}>
      </Box>
      <AddTagComponent/>
    </Container>
  )
}
