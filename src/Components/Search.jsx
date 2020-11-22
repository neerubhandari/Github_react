import React, { useState } from 'react';
import {InputGroup,InputGroupAddon,Button,Input,Form,FormGroup,Navbar, NavbarBrand} from 'reactstrap';

const Search = ({ searchUsers }) => {
  const [query, setQuery] = useState('');
  const search = e => {
    setQuery(e.target.value);
  };
  return (
    <Navbar color='dark' dark expand='md'>
            <div className="container">
                <NavbarBrand className='mr-auto' href='/'>
                    <h3>
                        <i className='fab fa-github'></i>github
                    </h3>
                </NavbarBrand>
                <Form onSubmit={e => {
        e.preventDefault();
        searchUsers(query);
      }}>
      <FormGroup>
        <InputGroup>
          <Input
            placeholder='Search or jump to..'
            onChange={search}
            value={query}
          />
          <InputGroupAddon addonType='append'>
            <Button type='submit' color='danger'>
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
            </div>
        </Navbar>
   
  );
};

export default Search;
