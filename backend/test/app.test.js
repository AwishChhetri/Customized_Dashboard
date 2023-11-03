const express = require('express');
const supertest = require('supertest');
const { app, server } = require('../index.js'); 
const mongoose = require('mongoose');

const request = supertest(app);

describe('Express App', () => {
  // Define a test user
  const testUser = {
    username: 'testuser3',
    email: 'testuser@example.com3',
    password: 'testpassword3',
  };

  beforeAll(async () => {
    await mongoose.connect('mongodb+srv://abishchhetri2502:HMHpKTGa4wPLkr3Y@cluster0.3igf2ot.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('POST /register should create a new user', async () => {
    const response = await request.post('/register').send(testUser);

    expect(response.status).toBe(200);
    expect(response.body.msg).toBe('Success');

  });

  it('POST /register should handle registration if email already exists', async () => {
    
    

    const response = await request.post('/register').send(testUser);

  
    expect(response.status).toBe(200);
    expect(response.body.msg).toBe('Email Already Exist!');
  });

  it('POST /login should log in a user', async () => {
    const response = await request.post('/login').send({
      email: testUser.email,
      password: testUser.password,
    });
    expect(response.status).toBe(200);
    // expect(response.body.id).toBe(userId);
  });

  it('POST /login should handle wrong password', async () => {
    const response = await request.post('/login').send({
      email: testUser.email,
      password: 'wrongpassword',
    });
    expect(response.status).toBe(404);
    expect(response.body.msg).toBe('Wrong Password');
  });

  it('POST /colors should update user colors', async () => {
    const colorData = {
      buttonbackgroundColor: 'newColor',
      textColor: 'newColor',
      headerBackgroundColor: 'newColor',
      footerBackgroundColor: 'newColor',
      radioButtonColor: 'newColor',
      dropDownButtonColor: 'newColor',
      themeColor1: 'newColor',
      themeColor2: 'newColor',
      themeColor3: 'newColor',
    };

    const response = await request.post('/colors').send(colorData);
    expect(response.status).toBe(200);
    expect(response.body.msg).toBe('Update successful');
  });

  it('GET /user/:id should return user data', async () => {
    const response = await request.get(`/user/6545248a31589e5cb419853d`);
    expect(response.status).toBe(200);
    expect(response.body.email).toBe(testUser.email);
  });

  afterAll((done) => {
    server.close(done); 
  });
});

